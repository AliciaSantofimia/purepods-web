"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import { MapContainer, Marker, Pane, TileLayer, useMap, ZoomControl } from "react-leaflet";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import {
  chooseMapPinLatLng,
  type ChooseMapPod,
  type ChooseMapRegion,
} from "@/lib/chooseMapExperimentalData";
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

/**
 * Stewart tab framing (visual): full Rakiura prominent, Foveaux Strait, and only the nearest
 * South Island margin (Invercargill / Bluff / Catlins). North edge stays south of Dunedin/Otago;
 * west stays tight so the West Coast / Fiordland wide shot does not appear.
 */
const STEWART_TAB_VIEW_BOUNDS = L.latLngBounds(
  L.latLng(-47.44, 167.34),
  L.latLng(-46.02, 169.22),
);

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

/**
 * Stewart pair: each marker keeps its real lat/lng. The two sites are ~15 m apart — at this zoom
 * they share almost the same screen pixel, so we lay out two full pins in a wide canvas with
 * horizontal + vertical pixel offsets (icon only). Leaflet `overflow:visible` on marker icons
 * avoids one pin clipping the other.
 */
function stewartTwinPinDivIcon(
  slug: "tokoeka" | "hananui",
  inner: string,
): L.DivIcon {
  const w = 132;
  const h = 54;
  if (slug === "tokoeka") {
    return L.divIcon({
      className: styles.chMapDivicon,
      html: `<div style="width:${w}px;height:${h}px;position:relative;overflow:visible" aria-hidden="true"><div style="position:absolute;left:6px;bottom:2px;transform:translate(-2px,-9px)">${inner}</div></div>`,
      iconSize: [w, h],
      iconAnchor: [19, h],
    });
  }
  return L.divIcon({
    className: styles.chMapDivicon,
    html: `<div style="width:${w}px;height:${h}px;position:relative;overflow:visible" aria-hidden="true"><div style="position:absolute;left:86px;bottom:0;transform:translate(4px,7px) scale(0.86);transform-origin:50% 100%">${inner}</div></div>`,
    iconSize: [w, h],
    iconAnchor: [101, h],
  });
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

  if (isStewartIslandTabPods(podList)) {
    restoreNzMapMaxBounds(map);
    map.fitBounds(STEWART_TAB_VIEW_BOUNDS, {
      paddingTopLeft: L.point(34, 52),
      paddingBottomRight: L.point(42, 50),
      maxZoom: 9,
      animate: false,
    });
    const panIn = (map as unknown as { panInsideMaxBounds?: (o: { animate: boolean }) => void }).panInsideMaxBounds;
    if (typeof panIn === "function") panIn.call(map, { animate: false });
    if (isLeafletMapAttached(map)) {
      try {
        const c = map.getCenter();
        const z = map.getZoom();
        // Light nudge north-east: balance strait vs southern SI coast (reference crop), without pulling Otago in-frame.
        map.setView([c.lat + 0.028, c.lng + 0.012], z, { animate: false });
        if (typeof panIn === "function") panIn.call(map, { animate: false });
      } catch {
        /* ignore */
      }
    }
    return;
  }

  const latlngs = podList.map((p) => L.latLng(p.lat, p.lng));
  let b = L.latLngBounds(latlngs);

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

type PinPreviewPayload =
  | null
  | { slug: string; latlng: L.LatLng; mode?: "hover" | "sticky" };

function isCoarsePointer(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}

const HOVER_CARD_W = 212;
const HOVER_CARD_H = 216;

function MapStickyPreviewDismiss({ active, onDismiss }: { active: boolean; onDismiss: () => void }) {
  const map = useMap();
  useEffect(() => {
    if (!active) return;
    const fn = (ev: L.LeafletMouseEvent) => {
      const t = ev.originalEvent?.target as HTMLElement | undefined;
      if (!t) return;
      if (t.closest(".leaflet-marker-icon")) return;
      if (t.closest("[data-ch-map-hover-preview]")) return;
      onDismiss();
    };
    map.on("click", fn);
    return () => {
      map.off("click", fn);
    };
  }, [map, active, onDismiss]);
  return null;
}

function MapPodHoverPreview({
  pods,
  preview,
  previewHoverLockRef,
  onCloseSticky,
  onLeaveHover,
}: {
  pods: ChooseMapPod[];
  preview: { slug: string; latlng: L.LatLng; mode: "hover" | "sticky" };
  previewHoverLockRef: MutableRefObject<boolean>;
  onCloseSticky: () => void;
  onLeaveHover: () => void;
}) {
  const map = useMap();
  const [box, setBox] = useState({ left: 12, top: 12 });
  const pod = pods.find((p) => p.slug === preview.slug);

  useLayoutEffect(() => {
    if (!map || !preview.latlng) return;
    const update = () => {
      const c = map.getContainer();
      const pt = map.latLngToContainerPoint(preview.latlng);
      const pad = 10;
      const w = HOVER_CARD_W;
      const h = HOVER_CARD_H;
      let left = pt.x - w / 2;
      let top = pt.y - h - 14;
      if (top < pad) top = pt.y + 16;
      left = Math.max(pad, Math.min(left, c.clientWidth - w - pad));
      top = Math.max(pad, Math.min(top, c.clientHeight - h - pad));
      setBox({ left, top });
    };
    update();
    map.on("moveend zoomend", update);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    if (ro) ro.observe(map.getContainer());
    return () => {
      map.off("moveend zoomend", update);
      ro?.disconnect();
    };
  }, [map, preview.latlng, preview.slug]);

  if (!pod) return null;

  return (
    <div
      data-ch-map-hover-preview
      className={styles.chMapHoverCard}
      style={{ left: box.left, top: box.top, width: HOVER_CARD_W }}
      onMouseEnter={() => {
        previewHoverLockRef.current = true;
      }}
      onMouseLeave={() => {
        previewHoverLockRef.current = false;
        if (preview.mode === "hover") onLeaveHover();
      }}
    >
      {preview.mode === "sticky" ? (
        <button
          type="button"
          className={styles.chMapHoverCardClose}
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault();
            onCloseSticky();
          }}
        >
          ×
        </button>
      ) : null}
      <div className={styles.chMapHoverCardMedia}>
        <Image
          src={pod.imageSrc}
          alt={pod.imageAlt}
          fill
          sizes="212px"
          style={{
            objectFit: "cover",
            objectPosition: pod.imagePosition ?? "center 35%",
          }}
        />
      </div>
      <div className={styles.chMapHoverCardBody}>
        <span className={styles.chMapHoverCardPill}>{pod.pill}</span>
        <h3 className={styles.chMapHoverCardTitle}>{pod.title}</h3>
        <p className={styles.chMapHoverCardMeta}>{pod.islandLine}</p>
        <Link href={pod.href} className={styles.chMapHoverCardCta} prefetch={false}>
          View details →
        </Link>
      </div>
    </div>
  );
}

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
  onPinPreview,
  onPinPreviewLeave,
  onPinPreviewClear,
}: {
  pods: MapPod[];
  highlightSlug: string | null;
  onHighlightSlug: (slug: string | null) => void;
  onPinPreview: (payload: NonNullable<PinPreviewPayload>) => void;
  onPinPreviewLeave: () => void;
  onPinPreviewClear: () => void;
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
  const onPinPreviewRef = useRef(onPinPreview);
  onPinPreviewRef.current = onPinPreview;
  const onPinPreviewLeaveRef = useRef(onPinPreviewLeave);
  onPinPreviewLeaveRef.current = onPinPreviewLeave;
  const onPinPreviewClearRef = useRef(onPinPreviewClear);
  onPinPreviewClearRef.current = onPinPreviewClear;
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

  const podPinDivIcon = (pod: MapPod, orderIdx: number, podList: MapPod[]) => {
    const num = orderIdx + 1;
    const variant = pinVariantIndex(orderIdx);
    const inner = infographicPinHtml(pod.slug, num, variant);
    const stewartStack = isStewartIslandTabPods(podList);
    if (stewartStack && (pod.slug === "tokoeka" || pod.slug === "hananui")) {
      return stewartTwinPinDivIcon(pod.slug as "tokoeka" | "hananui", inner);
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
    let hoverOutTimer: ReturnType<typeof setTimeout> | null = null;

    for (const pod of podList) {
      const orderIdx = orderBySlug.get(pod.slug) ?? 0;
      const icon = podPinDivIcon(pod, orderIdx, podList);
      const stewartStack = isStewartIslandTabPods(podList);
      const zIndexOffset =
        stewartStack && pod.slug === "tokoeka"
          ? 620
          : stewartStack && pod.slug === "hananui"
            ? 740
            : 0;
      const marker = L.marker([pod.lat, pod.lng], {
        icon,
        riseOnHover: true,
        ...(zIndexOffset ? { zIndexOffset } : {}),
      });
      marker.on("mouseover", () => {
        if (hoverOutTimer) {
          clearTimeout(hoverOutTimer);
          hoverOutTimer = null;
        }
        onHighlightRef.current(pod.slug);
        onPinPreviewRef.current({
          slug: pod.slug,
          latlng: marker.getLatLng(),
          mode: "hover",
        });
      });
      marker.on("mouseout", () => {
        if (hoverOutTimer) clearTimeout(hoverOutTimer);
        hoverOutTimer = setTimeout(() => {
          hoverOutTimer = null;
          onPinPreviewLeaveRef.current();
        }, 110);
      });
      marker.on("click", (e: L.LeafletMouseEvent) => {
        if (hoverOutTimer) {
          clearTimeout(hoverOutTimer);
          hoverOutTimer = null;
        }
        onHighlightRef.current(pod.slug);
        marker.closeTooltip?.();
        if (isCoarsePointer()) {
          L.DomEvent.stopPropagation(e);
          onPinPreviewRef.current({
            slug: pod.slug,
            latlng: marker.getLatLng(),
            mode: "sticky",
          });
        } else {
          onPinPreviewClearRef.current();
          routerRef.current.push(pod.href);
        }
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

function newMapContainerKey(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `leaflet-map-${Math.random().toString(36).slice(2, 12)}`;
}

export default function ChooseMapLeafletMap({
  pods,
  region,
  highlightSlug,
  onHighlightSlug,
}: ChooseMapLeafletMapProps) {
  /** Forces a fresh MapContainer instance after error recovery / full remount. */
  const [mapContainerKey] = useState(newMapContainerKey);

  const [pinPreview, setPinPreview] = useState<{
    slug: string;
    latlng: L.LatLng;
    mode: "hover" | "sticky";
  } | null>(null);
  const previewHoverLockRef = useRef(false);
  const pinLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pinPreviewRef = useRef(pinPreview);
  pinPreviewRef.current = pinPreview;

  const clearPinLeaveTimer = useCallback(() => {
    if (pinLeaveTimerRef.current) {
      clearTimeout(pinLeaveTimerRef.current);
      pinLeaveTimerRef.current = null;
    }
  }, []);

  const clearPinPreview = useCallback(() => {
    clearPinLeaveTimer();
    setPinPreview(null);
  }, [clearPinLeaveTimer]);

  const openPinPreview = useCallback((payload: NonNullable<PinPreviewPayload>) => {
    clearPinLeaveTimer();
    setPinPreview({
      slug: payload.slug,
      latlng: payload.latlng,
      mode: payload.mode ?? "hover",
    });
  }, [clearPinLeaveTimer]);

  const onPinPreviewLeave = useCallback(() => {
    clearPinLeaveTimer();
    pinLeaveTimerRef.current = setTimeout(() => {
      pinLeaveTimerRef.current = null;
      if (isCoarsePointer()) return;
      if (previewHoverLockRef.current) return;
      const prev = pinPreviewRef.current;
      if (!prev || prev.mode === "sticky") return;
      setPinPreview(null);
      onHighlightSlug(null);
    }, 110);
  }, [clearPinLeaveTimer, onHighlightSlug]);

  const closeStickyPreview = useCallback(() => {
    clearPinLeaveTimer();
    previewHoverLockRef.current = false;
    setPinPreview(null);
    onHighlightSlug(null);
  }, [clearPinLeaveTimer, onHighlightSlug]);

  const onLeaveHoverCard = useCallback(() => {
    clearPinLeaveTimer();
    previewHoverLockRef.current = false;
    if (pinPreviewRef.current?.mode !== "hover") return;
    setPinPreview(null);
    onHighlightSlug(null);
  }, [clearPinLeaveTimer, onHighlightSlug]);

  useEffect(() => {
    return () => clearPinLeaveTimer();
  }, [clearPinLeaveTimer]);

  /**
   * Mount Leaflet only after layout: avoids “Map container is already initialized” when
   * React 18 Strict Mode runs effect setup → cleanup → setup while react-leaflet’s ref
   * path can leave `_leaflet_id` on the node before `map.remove()` runs.
   */
  const [mapDomReady, setMapDomReady] = useState(false);
  useLayoutEffect(() => {
    setMapDomReady(true);
    return () => {
      setMapDomReady(false);
    };
  }, []);

  const mapPods: MapPod[] = useMemo(
    () =>
      pods.map((p) => {
        const pin = chooseMapPinLatLng(p);
        return {
          slug: p.slug,
          title: p.title,
          pill: p.pill,
          href: p.href,
          lat: pin.lat,
          lng: pin.lng,
        };
      }),
    [pods],
  );

  const fitKey = useMemo(() => `${podsFitSignature(mapPods)}|${region}`, [mapPods, region]);

  useEffect(() => {
    clearPinLeaveTimer();
    setPinPreview(null);
    previewHoverLockRef.current = false;
  }, [fitKey, clearPinLeaveTimer]);

  const nzMaxBounds = useMemo(
    () => L.latLngBounds(L.latLng(-48.2, 165.2), L.latLng(-33.8, 179.4)).pad(0.04),
    [],
  );

  return (
    <div className={`${xstyles.exmapShell} ${styles.chooseMapLeafTune}`}>
      <p className={`${xstyles.exmapCaption} ${styles.infographicCaption}`}>New Zealand</p>
      <InfographicCompass />
      {mapDomReady ? (
        <MapContainer
          key={mapContainerKey}
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
            onPinPreview={openPinPreview}
            onPinPreviewLeave={onPinPreviewLeave}
            onPinPreviewClear={clearPinPreview}
          />
          <MapStickyPreviewDismiss
            active={Boolean(pinPreview && pinPreview.mode === "sticky")}
            onDismiss={closeStickyPreview}
          />
          {pinPreview ? (
            <MapPodHoverPreview
              pods={pods}
              preview={pinPreview}
              previewHoverLockRef={previewHoverLockRef}
              onCloseSticky={closeStickyPreview}
              onLeaveHover={onLeaveHoverCard}
            />
          ) : null}
        </MapContainer>
      ) : (
        <div
          className={`${xstyles.exmapMap} ${styles.chooseMapMapSurface}`}
          aria-hidden
        />
      )}
    </div>
  );
}
