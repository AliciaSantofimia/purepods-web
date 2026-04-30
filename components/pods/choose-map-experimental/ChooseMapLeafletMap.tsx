"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { MapContainer, Marker, Pane, TileLayer, useMap, ZoomControl } from "react-leaflet";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import type { ChooseMapPod, ChooseMapRegion } from "@/lib/chooseMapExperimentalData";
import styles from "./chooseMapExperimental.module.css";

type MapPod = {
  slug: string;
  title: string;
  pill: string;
  href: string;
  lat: number;
  lng: number;
};

const CITY_LABELS: Record<
  ChooseMapRegion,
  { text: string; lat: number; lng: number }[]
> = {
  north: [
    { text: "Auckland", lat: -36.8485, lng: 174.7633 },
    { text: "Rotorua", lat: -38.1418, lng: 176.2497 },
    { text: "Wellington", lat: -41.2924, lng: 174.7787 },
  ],
  south: [
    { text: "Christchurch", lat: -43.5321, lng: 172.6362 },
    { text: "Queenstown", lat: -45.0312, lng: 168.6626 },
    { text: "Dunedin", lat: -45.8788, lng: 170.5028 },
  ],
  stewart: [
    { text: "Oban", lat: -46.872, lng: 168.08 },
    { text: "Invercargill", lat: -46.4132, lng: 168.3538 },
    { text: "Bluff", lat: -46.6, lng: 168.333 },
  ],
};

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

/** Rotación de tres tonos para pins */
function pinVariantIndex(orderIdx: number): 0 | 1 | 2 {
  return (orderIdx % 3) as 0 | 1 | 2;
}

function pinWrapClass(variant: 0 | 1 | 2): string {
  if (variant === 1) return `${styles.chMapPinWrap} ${styles["chMapPinWrap--b"]}`;
  if (variant === 2) return `${styles.chMapPinWrap} ${styles["chMapPinWrap--c"]}`;
  return styles.chMapPinWrap;
}

function infographicPinHtml(slug: string, num: number, variant: 0 | 1 | 2): string {
  const wrap = pinWrapClass(variant);
  return `<div class="${wrap}" data-slug="${slug}" aria-hidden="true"><svg class="${styles.chMapPinSvg}" viewBox="0 0 28 36" width="28" height="34"><path fill="currentColor" d="M14 0C6.3 0 0 5.4 0 12.1c0 8.3 14 23.9 14 23.9S28 20.4 28 12.1C28 5.4 21.7 0 14 0z"/></svg><span class="${styles.chMapPinNum}">${num}</span></div>`;
}

function InfographicCompass() {
  return (
    <div className={styles.infographicCompass} aria-hidden="true">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
        <path d="M40 8 L44 36 L40 72 L36 36 Z" fill="currentColor" opacity="0.2" />
        <path d="M8 40 L36 36 L72 40 L36 44 Z" fill="currentColor" opacity="0.12" />
        <text x="40" y="16" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="Georgia,serif" letterSpacing="0.2em" opacity="0.7">
          N
        </text>
      </svg>
    </div>
  );
}

function podsFitSignature(podList: MapPod[]): string {
  return [...podList]
    .map((p) => `${p.slug}:${p.lat}:${p.lng}`)
    .sort()
    .join("|");
}

function intersectLatLngBounds(a: L.LatLngBounds, b: L.LatLngBounds): L.LatLngBounds | null {
  const s = Math.max(a.getSouth(), b.getSouth());
  const w = Math.max(a.getWest(), b.getWest());
  const n = Math.min(a.getNorth(), b.getNorth());
  const e = Math.min(a.getEast(), b.getEast());
  if (s >= n || w >= e) return null;
  return L.latLngBounds(L.latLng(s, w), L.latLng(n, e));
}

function getNzMaxBoundsStored(map: L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds }): L.LatLngBounds | undefined {
  return map._chooseMapNzMaxBounds;
}

function restoreNzMapMaxBounds(map: L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds }) {
  const nz = getNzMaxBoundsStored(map);
  if (nz) map.setMaxBounds(nz);
}

function isStewartIslandTabPods(podList: MapPod[]): boolean {
  if (podList.length !== 2) return false;
  const slugs = new Set(podList.map((p) => p.slug));
  return slugs.has("tokoeka") && slugs.has("hananui");
}

function hasStewartMarkerPair(podList: MapPod[]): boolean {
  const slugs = new Set(podList.map((p) => p.slug));
  return slugs.has("tokoeka") && slugs.has("hananui");
}

/**
 * True when the map container is still in the document — avoid Leaflet calls after unmount
 * (otherwise invalidateSize / fitBounds can touch torn internal state → `_leaflet_pos`).
 */
function isLeafletMapAttached(map: L.Map): boolean {
  try {
    const c = map.getContainer();
    return Boolean(c?.isConnected);
  } catch {
    return false;
  }
}

function safeInvalidateSize(map: L.Map): void {
  if (!isLeafletMapAttached(map)) return;
  try {
    map.invalidateSize();
  } catch {
    /* map mid-teardown or panes not ready */
  }
}

function fitMapToPods(
  map: L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds },
  podList: MapPod[],
) {
  if (!podList.length) {
    restoreNzMapMaxBounds(map);
    map.setView([-41.25, 172.75], 5.5);
    return;
  }
  if (podList.length === 1) {
    restoreNzMapMaxBounds(map);
    const p = podList[0];
    map.setView([p.lat, p.lng], 8);
    return;
  }

  const latlngs = podList.map((p) => L.latLng(p.lat, p.lng));
  let b = L.latLngBounds(latlngs);

  if (isStewartIslandTabPods(podList)) {
    restoreNzMapMaxBounds(map);
    b = b.pad(0.12);
    map.fitBounds(b, {
      padding: [40, 44],
      maxZoom: 12,
      animate: false,
    });
    return;
  }

  const spansSouthIslandMap = podList.some((p) => p.lat < -41.35);

  if (spansSouthIslandMap) {
    const southTabFramingCap = L.latLngBounds(L.latLng(-47.92, 165.2), L.latLng(-41.52, 174.75));
    const clipped = intersectLatLngBounds(b, southTabFramingCap);
    const fitTarget = clipped ?? southTabFramingCap;
    const southTabMaxBounds = L.latLngBounds(L.latLng(-47.98, 165.12), L.latLng(-41.48, 174.82));
    map.setMaxBounds(southTabMaxBounds);
    map.fitBounds(fitTarget, {
      paddingTopLeft: L.point(28, 88),
      paddingBottomRight: L.point(28, 36),
      maxZoom: 12,
      animate: false,
    });
    const panIn = (map as unknown as { panInsideMaxBounds?: (o: { animate: boolean }) => void }).panInsideMaxBounds;
    if (typeof panIn === "function") panIn.call(map, { animate: false });
    return;
  }

  restoreNzMapMaxBounds(map);
  map.fitBounds(b, {
    padding: [32, 32],
    maxZoom: 10,
    animate: false,
  });
}

type ChooseMapLeafletMapProps = {
  pods: ChooseMapPod[];
  region: ChooseMapRegion;
  highlightSlug: string | null;
  onHighlightSlug: (slug: string | null) => void;
};

function CityLabels({ region }: { region: ChooseMapRegion }) {
  const labels = CITY_LABELS[region];
  const icons = useMemo(
    () =>
      CITY_LABELS[region].map((lb) =>
        L.divIcon({
          className: styles.chMapGeoLabel,
          html: `<div style="display:flex;align-items:center;justify-content:center;width:140px;height:22px;box-sizing:border-box" aria-hidden="true"><span class="${styles.chMapGeoLabel__text}">${escapeHtml(lb.text)}</span></div>`,
          iconSize: [140, 22],
          iconAnchor: [70, 11],
        }),
      ),
    [region],
  );
  return (
    <Pane name="chmapGeoLabels" style={{ zIndex: 450 }}>
      {labels.map((lb, i) => (
        <Marker
          key={`${region}-${lb.text}`}
          position={[lb.lat, lb.lng]}
          icon={icons[i]!}
          interactive={false}
          keyboard={false}
        />
      ))}
    </Pane>
  );
}

function MapFitController({ fitKey, pods }: { fitKey: string; pods: MapPod[] }) {
  const map = useMap();
  const podsRef = useRef(pods);
  podsRef.current = pods;

  useEffect(() => {
    const podList = podsRef.current;
    let cancelled = false;
    let rafOuter = 0;
    let rafInner = 0;

    const runFitPass = () => {
      if (cancelled || !isLeafletMapAttached(map)) return;
      try {
        safeInvalidateSize(map);
        fitMapToPods(map as L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds }, podList);
      } catch {
        /* ignore */
      }
    };

    rafOuter = requestAnimationFrame(() => {
      rafOuter = 0;
      if (cancelled) return;
      runFitPass();
      rafInner = requestAnimationFrame(() => {
        rafInner = 0;
        if (cancelled) return;
        runFitPass();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
    };
  }, [fitKey, map]);
  return null;
}

function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    let cancelled = false;
    let rafId = 0;
    const c = map.getContainer();
    const target = c.parentElement ?? c;

    const scheduleInvalidate = () => {
      if (cancelled) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        if (cancelled) return;
        safeInvalidateSize(map);
      });
    };

    const ro = new ResizeObserver(scheduleInvalidate);
    ro.observe(target);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [map]);
  return null;
}

function RegisterNzBounds({ nzMaxBounds }: { nzMaxBounds: L.LatLngBounds }) {
  const map = useMap();
  useEffect(() => {
    (map as L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds })._chooseMapNzMaxBounds = nzMaxBounds;
  }, [map, nzMaxBounds]);
  return null;
}

function PodMarkersLayer({
  pods,
  highlightSlug,
  onHighlightSlug,
}: {
  pods: MapPod[];
  highlightSlug: string | null;
  onHighlightSlug: (slug: string | null) => void;
}) {
  const map = useMap();
  const router = useRouter();
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const layersCleanupRef = useRef<L.Layer[]>([]);
  const podsRef = useRef(pods);
  podsRef.current = pods;
  const highlightRef = useRef(highlightSlug);
  highlightRef.current = highlightSlug;
  const onHighlightRef = useRef(onHighlightSlug);
  onHighlightRef.current = onHighlightSlug;
  const routerRef = useRef(router);
  routerRef.current = router;

  const syncMarkerClasses = useCallback(
    (slug: string | null) => {
      const container = map.getContainer();
      container.querySelectorAll<HTMLElement>("[data-slug]").forEach((el) => {
        const k = el.getAttribute("data-slug");
        if (slug && k === slug) el.setAttribute("data-active", "true");
        else el.removeAttribute("data-active");
      });
      container.querySelectorAll<HTMLElement>("[data-cluster-root]").forEach((clusterRoot) => {
        const raw = clusterRoot.getAttribute("data-members") ?? "";
        const members = raw.split(",").filter(Boolean);
        if (slug && members.includes(slug)) clusterRoot.setAttribute("data-active", "true");
        else clusterRoot.removeAttribute("data-active");
      });
    },
    [map],
  );

  const podPinDivIcon = (pod: MapPod, podList: MapPod[], orderIdx: number) => {
    const num = orderIdx + 1;
    const variant = pinVariantIndex(orderIdx);
    const inner = infographicPinHtml(pod.slug, num, variant);
    const stewartSplit = hasStewartMarkerPair(podList) && (pod.slug === "tokoeka" || pod.slug === "hananui");

    if (stewartSplit && pod.slug === "tokoeka") {
      return L.divIcon({
        className: styles.chMapDivicon,
        html: `<div style="width:64px;height:40px;position:relative"><div style="position:absolute;right:0;top:0">${inner}</div></div>`,
        iconSize: [64, 40],
        iconAnchor: [48, 36],
      });
    }
    if (stewartSplit && pod.slug === "hananui") {
      return L.divIcon({
        className: styles.chMapDivicon,
        html: `<div style="width:64px;height:40px;position:relative"><div style="position:absolute;left:0;top:0">${inner}</div></div>`,
        iconSize: [64, 40],
        iconAnchor: [16, 36],
      });
    }

    return L.divIcon({
      className: styles.chMapDivicon,
      html: inner,
      iconSize: [30, 38],
      iconAnchor: [15, 38],
    });
  };

  const pushLayer = (layer: L.Layer) => {
    layersCleanupRef.current.push(layer);
  };

  const renderPodMarkers = useCallback(() => {
    const m = map;
    const podList = podsRef.current;

    layersCleanupRef.current.forEach((layer) => {
      try {
        m.removeLayer(layer);
      } catch {
        /* ignore */
      }
    });
    layersCleanupRef.current = [];
    markersRef.current = new Map();

    if (!podList.length) {
      syncMarkerClasses(highlightRef.current);
      return;
    }

    const orderBySlug = new Map(podList.map((p, i) => [p.slug, i]));

    for (const pod of podList) {
      const orderIdx = orderBySlug.get(pod.slug) ?? 0;
      const icon = podPinDivIcon(pod, podList, orderIdx);
      const zIndexOffset =
        hasStewartMarkerPair(podList) && pod.slug === "tokoeka"
          ? 650
          : hasStewartMarkerPair(podList) && pod.slug === "hananui"
            ? 620
            : 0;
      const marker = L.marker([pod.lat, pod.lng], {
        icon,
        riseOnHover: true,
        ...(zIndexOffset ? { zIndexOffset } : {}),
      });
      marker.bindTooltip(
        `<div class="${styles.chMapTip__inner}"><span class="${styles.chMapTip__title}">${escapeHtml(pod.title)}</span></div>`,
        {
          permanent: false,
          sticky: true,
          direction: "top",
          opacity: 1,
          className: styles.chMapTip,
        },
      );
      marker.on("mouseover", () => onHighlightRef.current(pod.slug));
      marker.on("click", () => {
        onHighlightRef.current(pod.slug);
        marker.closeTooltip?.();
        routerRef.current.push(pod.href);
      });
      marker.addTo(m);
      pushLayer(marker);
      markersRef.current.set(pod.slug, marker);
    }

    syncMarkerClasses(highlightRef.current);
  }, [map, syncMarkerClasses]);

  const fitKey = useMemo(() => podsFitSignature(pods), [pods]);

  useEffect(() => {
    renderPodMarkers();
  }, [fitKey, renderPodMarkers]);

  useEffect(() => {
    syncMarkerClasses(highlightSlug);
  }, [highlightSlug, syncMarkerClasses]);

  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => renderPodMarkers());
    };
    map.on("zoomend", schedule);
    map.on("moveend", schedule);
    return () => {
      map.off("zoomend", schedule);
      map.off("moveend", schedule);
      cancelAnimationFrame(raf);
    };
  }, [map, renderPodMarkers]);

  return null;
}

export default function ChooseMapLeafletMap({
  pods,
  region,
  highlightSlug,
  onHighlightSlug,
}: ChooseMapLeafletMapProps) {
  const mapPods: MapPod[] = useMemo(
    () =>
      pods.map((p) => ({
        slug: p.slug,
        title: p.title,
        pill: p.pill,
        href: p.href,
        lat: p.lat,
        lng: p.lng,
      })),
    [pods],
  );

  const fitKey = useMemo(() => `${podsFitSignature(mapPods)}|${region}`, [mapPods, region]);

  const nzMaxBounds = useMemo(
    () => L.latLngBounds(L.latLng(-48.2, 165.2), L.latLng(-33.8, 179.4)).pad(0.04),
    [],
  );

  return (
    <div className={`${xstyles.exmapShell} ${styles.chooseMapLeafTune}`}>
      <p className={`${xstyles.exmapCaption} ${styles.infographicCaption}`}>New Zealand</p>
      <InfographicCompass />
      <MapContainer
        className={`${xstyles.exmapMap} ${styles.chooseMapMapSurface}`}
        center={[-41.25, 172.75]}
        zoom={5}
        minZoom={5}
        maxZoom={12}
        maxBounds={nzMaxBounds}
        scrollWheelZoom
        zoomControl={false}
        attributionControl
        aria-label="Map of New Zealand with PurePod locations"
      >
        <RegisterNzBounds nzMaxBounds={nzMaxBounds} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          opacity={0.9}
        />
        <CityLabels region={region} />
        <ZoomControl position="topright" />
        <MapResizeHandler />
        <MapFitController fitKey={fitKey} pods={mapPods} />
        <PodMarkersLayer
          pods={mapPods}
          highlightSlug={highlightSlug}
          onHighlightSlug={onHighlightSlug}
        />
      </MapContainer>
    </div>
  );
}
