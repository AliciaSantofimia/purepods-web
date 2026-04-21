"use client";

/**
 * Leaflet NZ panel — experimental v2: city labels use a single centered DivIcon contract.
 * Tight overlap only: screen-pixel proximity with a low threshold (+ cap on cluster size); zoom/fit separates nearby markers.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import nzLandGeo from "@/lib/nzOutlineSimplified.experimental.json";

const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

export type ExploreMapMarkerPod = {
  slug: string;
  title: string;
  pill: string;
  lat: number;
  lon: number;
  href: string;
};

type LeafletGlobal = any;

/**
 * Screen distance (px) between marker *centers* for single-linkage merge. ~1/3 of a 32px pod icon:
 * only true visual overlap / near-overlap at the current zoom, not "same region" proximity.
 */
const CLUSTER_PIXEL_THRESHOLD = 12;

/** Clusters larger than this are shown as individual markers (avoids single-linkage chains across a whole island). */
const MAX_PODS_PER_CLUSTER = 3;

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

/** Single-linkage grouping by distance in layer (screen) space — recomputed on zoom/pan so clusters split when zoomed in. */
function clusterPodsByScreenProximity(
  L: LeafletGlobal,
  map: LeafletGlobal,
  pods: ExploreMapMarkerPod[],
  pxThreshold: number,
): ExploreMapMarkerPod[][] {
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

  const pts = pods.map((p) => map.latLngToLayerPoint(L.latLng(p.lat, p.lon)));
  const thr2 = pxThreshold * pxThreshold;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      if (dx * dx + dy * dy <= thr2) union(i, j);
    }
  }

  const buckets = new Map<number, ExploreMapMarkerPod[]>();
  for (let i = 0; i < n; i++) {
    const r = find(i);
    if (!buckets.has(r)) buckets.set(r, []);
    buckets.get(r)!.push(pods[i]);
  }
  return Array.from(buckets.values()).flatMap((g) =>
    g.length > MAX_PODS_PER_CLUSTER ? g.map((p) => [p]) : [g],
  );
}

/** Stable identity for the visible pod set (ignores array reference churn from parent re-renders). */
function podsFitSignature(podList: ExploreMapMarkerPod[]): string {
  return [...podList]
    .map((p) => `${p.slug}:${p.lat}:${p.lon}`)
    .sort()
    .join("|");
}

function clusterCentroid(group: ExploreMapMarkerPod[]): [number, number] {
  let lat = 0;
  let lon = 0;
  for (const p of group) {
    lat += p.lat;
    lon += p.lon;
  }
  const n = group.length;
  return [lat / n, lon / n];
}

function clusterMarkerDivIcon(L: LeafletGlobal, group: ExploreMapMarkerPod[]) {
  const size = 40;
  const members = group.map((p) => p.slug).join(",");
  const count = String(group.length);
  const html = `<div class="${xstyles.exmapCluster}" data-cluster-root="true" data-members="${members}" aria-label="${group.length} PurePod locations"><span class="${xstyles.exmapCluster__ring}" aria-hidden="true"></span><span class="${xstyles.exmapCluster__count}" aria-hidden="true">${count}</span></div>`;
  return L.divIcon({
    className: xstyles.exmapDivicon,
    html,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function clusterTooltipHtml(group: ExploreMapMarkerPod[]): string {
  const rows = group
    .map(
      (p) =>
        `<div class="${xstyles.exmapTip__clusterRow}"><span class="${xstyles.exmapTip__title}">${escapeHtml(p.title)}</span><span class="${xstyles.exmapTip__meta}">${escapeHtml(p.pill)}</span></div>`,
    )
    .join("");
  return `<div class="${xstyles.exmapTip__inner} ${xstyles.exmapTip__clusterInner}">${rows}</div>`;
}

/** One shared box size for DivIcon; anchor is always [width/2, height/2] — no per-label offsets. */
const CITY_LABEL_ICON = {
  width: 200,
  height: 32,
} as const;

const CITY_LABELS: { text: string; lat: number; lng: number; tier: "primary" | "regional" | "secondary" }[] = [
  { text: "North Island", lat: -39.1, lng: 176.45, tier: "regional" },
  { text: "South Island", lat: -43.65, lng: 171.75, tier: "regional" },
  { text: "Stewart Island", lat: -46.96, lng: 167.82, tier: "regional" },
  {
    text: "Kerikeri",
    lat: -35.228628564345485,
    lng: 173.9486,
    tier: "secondary",
  },
  {
    text: "Auckland",
    lat: -36.8485,
    lng: 174.7633,
    tier: "secondary",
  },
  {
    text: "Tauranga",
    lat: -37.686495417784776,
    lng: 176.171036318364,
    tier: "secondary",
  },
  {
    text: "Rotorua",
    lat: -38.14180011795094,
    lng: 176.1982185044005,
    tier: "secondary",
  },
  {
    text: "Wellington",
    lat: -41.29210425097808,
    lng: 174.7822051971167,
    tier: "secondary",
  },
  {
    text: "Kaikōura",
    lat: -42.39921592928828,
    lng: 173.67767481966806,
    tier: "secondary",
  },
  {
    text: "Christchurch",
    lat: -43.53199244961312,
    lng: 172.63166908860833,
    tier: "secondary",
  },
  {
    text: "Queenstown",
    lat: -45.02759540980265,
    lng: 168.62457259571937,
    tier: "secondary",
  },
];

/** City labels shown only when the visible pod set includes South Island (see islandGeoLabelsForPods). */
const SOUTH_ISLAND_ONLY_CITY_LABELS = new Set(["Kaikōura", "Christchurch", "Queenstown"]);

/** South / Stewart tabs: no pods north of Cook Strait — omit the North Island overlay (it sits on NI geography). */
function islandGeoLabelsForPods(podList: ExploreMapMarkerPod[]): typeof CITY_LABELS {
  if (podList.length === 0) return CITY_LABELS;
  /** Align with spansSouthIslandMap — hide SI-only city labels on North-only pod sets. */
  const showSouthIslandCityLabels = podList.some((p) => p.lat < -41.35);
  const allSouthOfStrait = podList.every((p) => p.lat < -41.28);
  let labels: typeof CITY_LABELS = allSouthOfStrait
    ? CITY_LABELS.filter(
        (lb) =>
          lb.text !== "North Island" &&
          lb.text !== "Kerikeri" &&
          lb.text !== "Auckland" &&
          lb.text !== "Tauranga" &&
          lb.text !== "Rotorua" &&
          lb.text !== "Wellington",
      )
    : CITY_LABELS;
  if (!showSouthIslandCityLabels) {
    labels = labels.filter((lb) => !SOUTH_ISLAND_ONLY_CITY_LABELS.has(lb.text));
  }
  return labels;
}

function syncIslandGeoLabels(
  map: LeafletGlobal,
  L: LeafletGlobal,
  podList: ExploreMapMarkerPod[],
  layersRef: React.MutableRefObject<LeafletGlobal[]>,
) {
  layersRef.current.forEach((m) => {
    try {
      map.removeLayer(m);
    } catch {
      /* ignore */
    }
  });
  layersRef.current = [];
  for (const lb of islandGeoLabelsForPods(podList)) {
    const marker = L.marker([lb.lat, lb.lng], {
      pane: "exmapGeoLabels",
      interactive: false,
      keyboard: false,
      icon: cityLabelDivIcon(L, lb.text, lb.tier),
    });
    marker.addTo(map);
    layersRef.current.push(marker);
  }
}

function cityLabelDivIcon(L: LeafletGlobal, text: string, tier: "primary" | "regional" | "secondary") {
  let w: number;
  let h: number;
  let textClass: string;
  if (tier === "regional") {
    w = 300;
    h = 44;
    textClass = `${xstyles.exmapGeoLabel__text} ${xstyles.exmapGeoLabel__textRegional}`;
  } else if (tier === "secondary") {
    w = 156;
    h = 22;
    textClass = `${xstyles.exmapGeoLabel__text} ${xstyles.exmapGeoLabel__textSecondary}`;
  } else {
    w = CITY_LABEL_ICON.width;
    h = CITY_LABEL_ICON.height;
    textClass = `${xstyles.exmapGeoLabel__text} ${xstyles.exmapGeoLabel__textPrimary}`;
  }
  /** East-biased anchor helps west-coast cities; Wellington is on the strait — center anchor so the label doesn’t sit over the South Island. */
  const iconAnchor: [number, number] =
    tier === "secondary" && text !== "Wellington"
      ? [Math.round(w * 0.32), h / 2]
      : [w / 2, h / 2];
  return L.divIcon({
    className: xstyles.exmapGeoLabel,
    html: `<div style="display:flex;align-items:center;justify-content:center;width:${w}px;height:${h}px;box-sizing:border-box" aria-hidden="true"><span class="${textClass}">${text}</span></div>`,
    iconSize: [w, h],
    iconAnchor,
  });
}

function loadLeaflet(): Promise<LeafletGlobal> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Leaflet requires a browser environment"));
  }
  const w = window as unknown as { L?: LeafletGlobal };
  if (w.L) return Promise.resolve(w.L);

  return new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }

    const existing = document.querySelector(`script[src="${LEAFLET_JS}"]`) as HTMLScriptElement | null;
    if (existing) {
      const done = () => {
        const L = (window as unknown as { L?: LeafletGlobal }).L;
        if (L) resolve(L);
        else reject(new Error("Leaflet failed to attach to window"));
      };
      existing.addEventListener("load", done);
      existing.addEventListener("error", () => reject(new Error("Leaflet script error")));
      if ((window as unknown as { L?: LeafletGlobal }).L) done();
      return;
    }

    const script = document.createElement("script");
    script.src = LEAFLET_JS;
    script.async = true;
    script.onload = () => {
      const L = (window as unknown as { L?: LeafletGlobal }).L;
      if (L) resolve(L);
      else reject(new Error("Leaflet not found on window"));
    };
    script.onerror = () => reject(new Error("Could not load Leaflet"));
    document.body.appendChild(script);
  });
}

function markerHtml(
  slug: string,
  classes: { root: string; ring: string; dot: string },
): string {
  return `<div class="${classes.root}" data-slug="${slug}"><span class="${classes.ring}" aria-hidden="true"></span><span class="${classes.dot}" aria-hidden="true"></span></div>`;
}

/** Stewart tab only — both Stewart pods present and no others (map props omit island filter). */
function isStewartIslandTabPods(podList: ExploreMapMarkerPod[]): boolean {
  if (podList.length !== 2) return false;
  const slugs = new Set(podList.map((p) => p.slug));
  return slugs.has("tokoeka") && slugs.has("hananui");
}

/** True when Tokoeka and Hananui are both on the map (markers can stack at the same lat/lng). */
function hasStewartMarkerPair(podList: ExploreMapMarkerPod[]): boolean {
  const slugs = new Set(podList.map((p) => p.slug));
  return slugs.has("tokoeka") && slugs.has("hananui");
}

/**
 * Split horizontal hitboxes (same geographic anchor on the dot) so two stacked divIcons are both clickable.
 * Visual marker unchanged; transparent regions extend west (Tokoeka) / east (Hananui) from the pin.
 */
function podMarkerDivIcon(
  L: LeafletGlobal,
  pod: ExploreMapMarkerPod,
  podList: ExploreMapMarkerPod[],
  classes: { root: string; ring: string; dot: string },
) {
  const inner = markerHtml(pod.slug, classes);
  const stewartSplit = hasStewartMarkerPair(podList) && (pod.slug === "tokoeka" || pod.slug === "hananui");

  if (stewartSplit && pod.slug === "tokoeka") {
    return L.divIcon({
      className: xstyles.exmapDivicon,
      html: `<div style="width:64px;height:36px;position:relative">
        <div style="position:absolute;right:0;top:2px">${inner}</div>
      </div>`,
      iconSize: [64, 36],
      iconAnchor: [48, 18],
    });
  }
  if (stewartSplit && pod.slug === "hananui") {
    return L.divIcon({
      className: xstyles.exmapDivicon,
      html: `<div style="width:64px;height:36px;position:relative">
        <div style="position:absolute;left:0;top:2px">${inner}</div>
      </div>`,
      iconSize: [64, 36],
      iconAnchor: [16, 18],
    });
  }

  return L.divIcon({
    className: xstyles.exmapDivicon,
    html: inner,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

/** Intersection of two LatLngBounds (null if disjoint). */
function intersectLatLngBounds(L: LeafletGlobal, a: LeafletGlobal, b: LeafletGlobal): LeafletGlobal | null {
  const s = Math.max(a.getSouth(), b.getSouth());
  const w = Math.max(a.getWest(), b.getWest());
  const n = Math.min(a.getNorth(), b.getNorth());
  const e = Math.min(a.getEast(), b.getEast());
  if (s >= n || w >= e) return null;
  return L.latLngBounds(L.latLng(s, w), L.latLng(n, e));
}

function getNzMaxBoundsStored(map: LeafletGlobal): LeafletGlobal | undefined {
  return map._purepodsNzMaxBounds ?? map.options?.maxBounds;
}

/** Restore pan/zoom limits for full NZ (North / Stewart tabs). */
function restoreNzMapMaxBounds(map: LeafletGlobal) {
  const nz = getNzMaxBoundsStored(map);
  if (nz) map.setMaxBounds(nz);
}

/** Fit map to pod markers with edge padding; single-pod fallback avoids over-zoom. */
function fitMapToPods(map: LeafletGlobal, L: LeafletGlobal, podList: ExploreMapMarkerPod[]) {
  if (!podList.length) {
    restoreNzMapMaxBounds(map);
    map.setView([-41.25, 172.75], 5.5);
    return;
  }
  if (podList.length === 1) {
    restoreNzMapMaxBounds(map);
    const p = podList[0];
    map.setView([p.lat, p.lon], 8);
    return;
  }
  const latlngs = podList.map((p) => L.latLng(p.lat, p.lon));
  let b = L.latLngBounds(latlngs);

  if (isStewartIslandTabPods(podList)) {
    restoreNzMapMaxBounds(map);
    b = b.pad(0.09);
    map.fitBounds(b, {
      padding: [34, 36],
      maxZoom: 12,
      animate: false,
    });
    return;
  }

  /** North Island pods sit north of ~-37°; farther south uses roomier South Island–tab framing. */
  const spansSouthIslandMap = podList.some((p) => p.lat < -41.35);

  /**
   * South Island tab only (not Stewart-only — that branch returned above).
   * Intersect pod bounds with SI+Stewart window, then clamp Leaflet maxBounds so the viewport
   * cannot extend north into North Island (fitBounds alone still letterboxes extra geography).
   */
  if (spansSouthIslandMap) {
    /** NE lat must stay south of Cook Strait / NI so intersect + fit never aim “north” at NI. */
    const southTabFramingCap = L.latLngBounds(L.latLng(-47.92, 165.2), L.latLng(-41.52, 174.75));
    const clipped = intersectLatLngBounds(L, b, southTabFramingCap);
    const fitTarget = clipped ?? southTabFramingCap;
    /**
     * Hard viewport cage — NE.lat ~ northern limit of what the map may show (NI is north of ~−41.3).
     * Do NOT pad maxBounds (pad expands north).
     */
    const southTabMaxBounds = L.latLngBounds(L.latLng(-47.98, 165.12), L.latLng(-41.48, 174.82));
    map.setMaxBounds(southTabMaxBounds);
    /**
     * Extra top inset (paddingTopLeft.y) so Marlborough / Farewell aren’t clipped by the shell;
     * horizontal + bottom stay modest so framing stays similar to North tab scale.
     */
    map.fitBounds(fitTarget, {
      paddingTopLeft: L.point(28, 88),
      paddingBottomRight: L.point(28, 36),
      maxZoom: 12,
      animate: false,
    });
    if (typeof map.panInsideMaxBounds === "function") {
      map.panInsideMaxBounds({ animate: false });
    }
    return;
  }

  restoreNzMapMaxBounds(map);
  map.fitBounds(b, {
    padding: [28, 28],
    maxZoom: 10,
    animate: false,
  });
}

type Props = {
  pods: ExploreMapMarkerPod[];
  highlightSlug: string | null;
  onHighlightSlug: (slug: string | null) => void;
};

export function ExploreNzMapPanelExperimentalV2({ pods, highlightSlug, onHighlightSlug }: Props) {
  const router = useRouter();
  const shellRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletGlobal | null>(null);
  const markersRef = useRef<Map<string, LeafletGlobal>>(new Map());
  const podsRef = useRef(pods);
  podsRef.current = pods;
  /** Only when this string changes should we auto-fit the map to pods (tab / visible set), not on unrelated parent re-renders. */
  const visiblePodsFitKey = podsFitSignature(pods);
  const highlightRef = useRef<string | null>(null);
  highlightRef.current = highlightSlug;
  const onHighlightRef = useRef(onHighlightSlug);
  onHighlightRef.current = onHighlightSlug;
  const routerRef = useRef(router);
  routerRef.current = router;
  const renderPodMarkersRef = useRef<(() => void) | null>(null);
  const geoIslandLabelMarkersRef = useRef<LeafletGlobal[]>([]);

  const [mapInit, setMapInit] = useState(false);

  const syncMarkerClasses = useCallback((slug: string | null) => {
    const seen = new Set<LeafletGlobal>();
    markersRef.current.forEach((m) => {
      if (seen.has(m)) return;
      seen.add(m);
      const root = m.getElement?.() as HTMLElement | undefined;
      if (!root) return;

      root.querySelectorAll<HTMLElement>("[data-slug]").forEach((el) => {
        const k = el.getAttribute("data-slug");
        if (slug && k === slug) el.setAttribute("data-active", "true");
        else el.removeAttribute("data-active");
      });

      const clusterRoot = root.querySelector<HTMLElement>("[data-cluster-root]");
      if (clusterRoot) {
        const raw = clusterRoot.getAttribute("data-members") ?? "";
        const members = raw.split(",").filter(Boolean);
        if (slug && members.includes(slug)) clusterRoot.setAttribute("data-active", "true");
        else clusterRoot.removeAttribute("data-active");
      }
    });
  }, []);

  const renderPodMarkers = useCallback(() => {
    const map = mapRef.current;
    const L = (window as unknown as { L?: LeafletGlobal }).L as LeafletGlobal | undefined;
    const podList = podsRef.current;
    if (!map || !L) return;

    const uniq = new Set<LeafletGlobal>();
    markersRef.current.forEach((m) => {
      if (!uniq.has(m)) {
        uniq.add(m);
        try {
          map.removeLayer(m);
        } catch {
          /* ignore */
        }
      }
    });
    markersRef.current = new Map();

    if (!podList.length) {
      syncMarkerClasses(highlightRef.current);
      return;
    }

    const groups = clusterPodsByScreenProximity(L, map, podList, CLUSTER_PIXEL_THRESHOLD);
    const markerClasses = {
      root: xstyles.exmapM,
      ring: xstyles.exmapM__ring,
      dot: xstyles.exmapM__dot,
    };

    for (const group of groups) {
      if (group.length >= 2) {
        const [lat, lon] = clusterCentroid(group);
        const marker = L.marker([lat, lon], {
          icon: clusterMarkerDivIcon(L, group),
          riseOnHover: true,
        });
        marker.bindTooltip(clusterTooltipHtml(group), {
          permanent: false,
          sticky: true,
          direction: "top",
          opacity: 1,
          className: xstyles.exmapTip,
        });
        marker.on("mouseover", () => onHighlightRef.current(null));
        marker.on("click", () => {
          marker.closeTooltip?.();
          const latlngs = group.map((p) => L.latLng(p.lat, p.lon));
          const b = L.latLngBounds(latlngs);
          map.fitBounds(b, {
            padding: [48, 48],
            maxZoom: 12,
            animate: true,
          });
        });
        marker.addTo(map);
        for (const p of group) {
          markersRef.current.set(p.slug, marker);
        }
        continue;
      }

      const pod = group[0];
      const icon = podMarkerDivIcon(L, pod, podList, markerClasses);
      const zIndexOffset =
        hasStewartMarkerPair(podList) && pod.slug === "tokoeka"
          ? 650
          : hasStewartMarkerPair(podList) && pod.slug === "hananui"
            ? 620
            : 0;
      const marker = L.marker([pod.lat, pod.lon], {
        icon,
        riseOnHover: true,
        ...(zIndexOffset ? { zIndexOffset } : {}),
      });
      marker.bindTooltip(
        `<div class="${xstyles.exmapTip__inner}"><span class="${xstyles.exmapTip__title}">${pod.title}</span><span class="${xstyles.exmapTip__meta}">${pod.pill}</span></div>`,
        {
          permanent: false,
          sticky: true,
          direction: "top",
          opacity: 1,
          className: xstyles.exmapTip,
        },
      );
      marker.on("mouseover", () => onHighlightRef.current(pod.slug));
      marker.on("click", () => {
        onHighlightRef.current(pod.slug);
        marker.closeTooltip?.();
        routerRef.current.push(pod.href);
      });
      marker.addTo(map);
      markersRef.current.set(pod.slug, marker);
    }

    syncMarkerClasses(highlightRef.current);
  }, [syncMarkerClasses]);

  renderPodMarkersRef.current = renderPodMarkers;

  useEffect(() => {
    syncMarkerClasses(highlightSlug);
  }, [highlightSlug, syncMarkerClasses]);

  useEffect(() => {
    if (!mapInit || !mapRef.current || !shellRef.current) return;
    const map = mapRef.current;
    const shell = shellRef.current;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => map.invalidateSize());
    });
    ro.observe(shell);
    return () => ro.disconnect();
  }, [mapInit]);

  useEffect(() => {
    let cancelled = false;
    const el = elRef.current;
    if (!el) return undefined;

    (async () => {
      try {
        const L = await loadLeaflet();
        if (cancelled || !elRef.current) return;

        const bounds = L.latLngBounds(L.latLng(-48.2, 165.2), L.latLng(-33.8, 179.4));
        const nzMaxBounds = bounds.pad(0.04);
        const map = L.map(elRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
          attributionControl: true,
          minZoom: 5,
          maxZoom: 12,
          maxBounds: nzMaxBounds,
        });
        map._purepodsNzMaxBounds = nzMaxBounds;
        /* Placeholder until markers run fitBounds (same frame order: mapInit → marker effect). */
        map.setView([-41.25, 172.75], 5);

        /* Land silhouette under tiles: flat fill, thin coast stroke (no SVG/gradient tricks). */
        map.createPane("exmapLand");
        const landPane = map.getPane("exmapLand");
        if (landPane) {
          landPane.style.zIndex = "199";
          landPane.style.pointerEvents = "none";
        }
        L.geoJSON(nzLandGeo as Record<string, unknown>, {
          pane: "exmapLand",
          interactive: false,
          style: {
            fill: true,
            /* Warm paper land: slightly richer than water, still soft (editorial map) */
            fillColor: "#ebe8df",
            fillOpacity: 1,
            color: "rgba(74, 72, 68, 0.42)",
            weight: 0.48,
            opacity: 1,
          },
        }).addTo(map);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
          /* Let light relief / hydrology read through while staying uncluttered */
          opacity: 0.9,
        }).addTo(map);

        map.createPane("exmapGeoLabels");
        const geoLabelPane = map.getPane("exmapGeoLabels");
        if (geoLabelPane) {
          geoLabelPane.style.zIndex = "450";
          geoLabelPane.style.pointerEvents = "none";
        }

        mapRef.current = map;
        requestAnimationFrame(() => map.invalidateSize());
        setMapInit(true);
      } catch {
        /* map optional */
      }
    })();

    return () => {
      cancelled = true;
      setMapInit(false);
      geoIslandLabelMarkersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!mapInit) return;
    const map = mapRef.current;
    const L = (window as unknown as { L?: LeafletGlobal }).L;
    if (!map || !L) return;

    const podList = podsRef.current;
    requestAnimationFrame(() => {
      map.invalidateSize();
      fitMapToPods(map, L, podList);
      requestAnimationFrame(() => {
        map.invalidateSize();
        fitMapToPods(map, L, podList);
        syncIslandGeoLabels(map, L, podList, geoIslandLabelMarkersRef);
        renderPodMarkersRef.current?.();
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: only re-fit when visible pod set changes (visiblePodsFitKey), not when parent passes a new pods array reference on hover etc.
  }, [visiblePodsFitKey, mapInit]);

  useEffect(() => {
    if (!mapInit || !mapRef.current) return;
    const map = mapRef.current;
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => renderPodMarkersRef.current?.());
    };
    map.on("zoomend", schedule);
    map.on("moveend", schedule);
    return () => {
      map.off("zoomend", schedule);
      map.off("moveend", schedule);
      cancelAnimationFrame(raf);
    };
  }, [mapInit]);

  return (
    <div ref={shellRef} className={xstyles.exmapShell}>
      <p className={xstyles.exmapCaption}>New Zealand</p>
      <div ref={elRef} className={xstyles.exmapMap} aria-label="Map of New Zealand with PurePod locations" />
    </div>
  );
}
