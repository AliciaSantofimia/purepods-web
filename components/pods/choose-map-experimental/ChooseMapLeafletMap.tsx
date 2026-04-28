"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Pane,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import nzLandGeo from "@/lib/nzOutlineSimplified.experimental.json";
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

const CLUSTER_PIXEL_THRESHOLD = 12;
const MAX_PODS_PER_CLUSTER = 3;

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

/** Rotación de tres tonos “cartográficos” para pins + cartelas */
function pinVariantIndex(orderIdx: number): 0 | 1 | 2 {
  return (orderIdx % 3) as 0 | 1 | 2;
}

function pinWrapClass(variant: 0 | 1 | 2): string {
  if (variant === 1) return `${styles.chMapPinWrap} ${styles["chMapPinWrap--b"]}`;
  if (variant === 2) return `${styles.chMapPinWrap} ${styles["chMapPinWrap--c"]}`;
  return styles.chMapPinWrap;
}

function calloutVariantClass(variant: 0 | 1 | 2): string {
  if (variant === 1) return `${styles.chMapCallout} ${styles["chMapCallout--b"]}`;
  if (variant === 2) return `${styles.chMapCallout} ${styles["chMapCallout--c"]}`;
  return styles.chMapCallout;
}

function labelOffsetLatLng(
  map: L.Map,
  lat: number,
  lng: number,
  slug: string,
  idx: number,
  compact: boolean,
): L.LatLng {
  const pt = map.latLngToLayerPoint(L.latLng(lat, lng));
  const hash = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const eastPrefer = hash % 2 === 0;
  const scale = compact ? 0.48 : 1;
  const dx = (eastPrefer ? 1 : -1) * (76 + (idx % 3) * 18) * scale;
  const dy = (((idx * 31) % 7) - 3) * 11 * scale;
  return map.layerPointToLatLng(L.point(pt.x + dx, pt.y + dy));
}

function infographicPinHtml(slug: string, num: number, variant: 0 | 1 | 2): string {
  const wrap = pinWrapClass(variant);
  return `<div class="${wrap}" data-slug="${slug}" aria-hidden="true"><svg class="${styles.chMapPinSvg}" viewBox="0 0 28 36" width="28" height="34"><path fill="currentColor" d="M14 0C6.3 0 0 5.4 0 12.1c0 8.3 14 23.9 14 23.9S28 20.4 28 12.1C28 5.4 21.7 0 14 0z"/></svg><span class="${styles.chMapPinNum}">${num}</span></div>`;
}

function calloutLabelHtml(pod: MapPod, num: number, variant: 0 | 1 | 2): string {
  const base = calloutVariantClass(variant);
  return `<div class="${base}" data-slug="${pod.slug}"><div class="${styles.chMapCallout__row}"><span class="${styles.chMapCallout__num}">${num}</span><span class="${styles.chMapCallout__title}">${escapeHtml(pod.title)}</span></div><span class="${styles.chMapCallout__pill}">${escapeHtml(pod.pill)}</span></div>`;
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

function clusterPodsByScreenProximity(
  map: L.Map,
  pods: MapPod[],
  pxThreshold: number,
): MapPod[][] {
  const n = pods.length;
  if (n === 0) return [];
  if (n === 1) return [[pods[0]]];

  const parent = Array.from({ length: n }, (_, i) => i);
  function find(i: number): number {
    return parent[i] === i ? i : (parent[i] = find(parent[i]));
  }
  function union(a: number, b: number) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }

  const pts = pods.map((p) => map.latLngToLayerPoint(L.latLng(p.lat, p.lng)));
  const thr2 = pxThreshold * pxThreshold;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      if (dx * dx + dy * dy <= thr2) union(i, j);
    }
  }

  const buckets = new Map<number, MapPod[]>();
  for (let i = 0; i < n; i++) {
    const r = find(i);
    if (!buckets.has(r)) buckets.set(r, []);
    buckets.get(r)!.push(pods[i]);
  }
  return Array.from(buckets.values()).flatMap((g) =>
    g.length > MAX_PODS_PER_CLUSTER ? g.map((p) => [p]) : [g],
  );
}

function clusterCentroid(group: MapPod[]): [number, number] {
  let lat = 0;
  let lng = 0;
  for (const p of group) {
    lat += p.lat;
    lng += p.lng;
  }
  const n = group.length;
  return [lat / n, lng / n];
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
    requestAnimationFrame(() => {
      map.invalidateSize();
      fitMapToPods(map as L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds }, podList);
      requestAnimationFrame(() => {
        map.invalidateSize();
        fitMapToPods(map as L.Map & { _chooseMapNzMaxBounds?: L.LatLngBounds }, podList);
      });
    });
  }, [fitKey, map]);
  return null;
}

function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    const c = map.getContainer();
    const target = c.parentElement ?? c;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => map.invalidateSize());
    });
    ro.observe(target);
    return () => ro.disconnect();
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

  const clusterMarkerDivIcon = (group: MapPod[]) => {
    const size = 44;
    const members = group.map((p) => p.slug).join(",");
    const count = String(group.length);
    const html = `<div class="${styles.chMapCluster}" data-cluster-root="true" data-members="${members}" aria-label="${group.length} PurePod locations"><span class="${styles.chMapCluster__ring}" aria-hidden="true"></span><span class="${styles.chMapCluster__count}" aria-hidden="true">${count}</span></div>`;
    return L.divIcon({
      className: styles.chMapDivicon,
      html,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  const clusterTooltipHtml = (group: MapPod[]) => {
    const rows = group
      .map(
        (p) =>
          `<div class="${styles.chMapTip__clusterRow}"><span class="${styles.chMapTip__title}">${escapeHtml(p.title)}</span><span class="${styles.chMapTip__meta}">${escapeHtml(p.pill)}</span></div>`,
      )
      .join("");
    return `<div class="${styles.chMapTip__inner} ${styles.chMapTip__clusterInner}">${rows}</div>`;
  };

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

  const calloutLabelDivIcon = (pod: MapPod, orderIdx: number) => {
    const num = orderIdx + 1;
    const variant = pinVariantIndex(orderIdx);
    return L.divIcon({
      className: styles.chMapDivicon,
      html: calloutLabelHtml(pod, num, variant),
      iconSize: [118, 52],
      iconAnchor: [59, 26],
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
    const compactCallouts = hasStewartMarkerPair(podList) || podList.length <= 3;

    const groups = clusterPodsByScreenProximity(m, podList, CLUSTER_PIXEL_THRESHOLD);

    for (const group of groups) {
      if (group.length >= 2) {
        const [lat, lng] = clusterCentroid(group);
        const marker = L.marker([lat, lng], {
          icon: clusterMarkerDivIcon(group),
          riseOnHover: true,
        });
        marker.bindTooltip(clusterTooltipHtml(group), {
          permanent: false,
          sticky: true,
          direction: "top",
          opacity: 1,
          className: styles.chMapTip,
        });
        marker.on("mouseover", () => onHighlightRef.current(null));
        marker.on("click", () => {
          marker.closeTooltip?.();
          const latlngs = group.map((p) => L.latLng(p.lat, p.lng));
          const b = L.latLngBounds(latlngs);
          m.fitBounds(b, {
            padding: [48, 48],
            maxZoom: 12,
            animate: true,
          });
        });
        marker.addTo(m);
        pushLayer(marker);
        for (const p of group) {
          markersRef.current.set(p.slug, marker);
        }
        continue;
      }

      const pod = group[0];
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
        `<div class="${styles.chMapTip__inner}"><span class="${styles.chMapTip__title}">${escapeHtml(pod.title)}</span><span class="${styles.chMapTip__meta}">${escapeHtml(pod.pill)}</span></div>`,
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

      const labelPos = labelOffsetLatLng(m, pod.lat, pod.lng, pod.slug, orderIdx, compactCallouts);
      const line = L.polyline(
        [
          [pod.lat, pod.lng],
          [labelPos.lat, labelPos.lng],
        ],
        {
          color: "#a68f6f",
          weight: 1.25,
          opacity: 0.72,
          dashArray: "4 7",
          interactive: false,
        },
      );
      line.addTo(m);
      pushLayer(line);

      const callIcon = calloutLabelDivIcon(pod, orderIdx);
      const callMarker = L.marker([labelPos.lat, labelPos.lng], {
        icon: callIcon,
        interactive: true,
        keyboard: true,
      });
      callMarker.on("click", () => {
        onHighlightRef.current(pod.slug);
        routerRef.current.push(pod.href);
      });
      callMarker.on("mouseover", () => onHighlightRef.current(pod.slug));
      callMarker.addTo(m);
      pushLayer(callMarker);
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
        className={xstyles.exmapMap}
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
          opacity={0.72}
        />
        <Pane name="chmapLand" style={{ zIndex: 150 }}>
          <GeoJSON
            data={nzLandGeo as never}
            interactive={false}
            style={{
              fillColor: "#d4c9a8",
              fillOpacity: 0.96,
              color: "rgba(96, 88, 72, 0.42)",
              weight: 0.55,
              opacity: 1,
            }}
          />
        </Pane>
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
