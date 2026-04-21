"use client";

/**
 * Leaflet NZ panel for experimental Explore+map page only.
 * Self-contained CDN Leaflet load (no package.json change).
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

/** Static geographic reference labels only (non-interactive; experimental map). */
type GeoRefLabel = {
  name: string;
  lat: number;
  lon: number;
  tier: "primary" | "secondary" | "regional";
  /** divIcon geometry override (same defaults as before when omitted). */
  iconSize?: [number, number];
  iconAnchor?: [number, number];
};

/** Stewart Island regional label only (North/South island regional names removed from the map). */
const STEWART_REGIONAL_LABEL_MAP: Pick<GeoRefLabel, "tier" | "iconSize" | "iconAnchor"> = {
  tier: "regional",
  iconSize: [340, 43],
  iconAnchor: [170, 22],
};

const GEO_REF_LABELS: GeoRefLabel[] = [
  { name: "Stewart Island", lat: -46.878, lon: 168.208, ...STEWART_REGIONAL_LABEL_MAP },
  /*
   * Auckland — anchor centre so provided WGS84 sits at the middle of the label (right-edge anchor put text far west over water).
   */
  {
    name: "Auckland",
    lat: -36.850692,
    lon: 174.765736,
    tier: "primary",
    iconSize: [136, 20],
    iconAnchor: [68, 10],
  },
  /*
   * Kerikeri (town centroid ≈ -35.228611, 173.947784). Makoha pin ~(-35.22, 173.95). Nudge anchor from
   * bottom-left [0,18] ~40% toward box center to bring the label closer to the pin; coordinates unchanged.
   */
  {
    name: "Kerikeri",
    lat: -35.234,
    lon: 173.938,
    tier: "secondary",
    iconSize: [122, 18],
    iconAnchor: [24, 15],
  },
  /*
   * Tauranga — anchor bottom-centre so the label sits above the point (ref: screenshot). Geo point ≈ Bay of Plenty centroid.
   */
  {
    name: "Tauranga",
    lat: -37.686163527619385,
    lon: 176.17560816012573,
    tier: "secondary",
    iconSize: [128, 18],
    iconAnchor: [64, 18],
  },
  /*
   * Rotorua — anchor near right edge (same inset as Auckland) so text sits left of pod Pāmu (-38.1368, 176.2497).
   */
  {
    name: "Rotorua",
    lat: -38.1368,
    lon: 176.2497,
    tier: "secondary",
    iconSize: [128, 18],
    iconAnchor: [116, 9],
  },
  /*
   * Wellington — anchor centre so provided WGS84 sits at the middle of the label (top-centre anchor skewed placement vs land).
   */
  {
    name: "Wellington",
    lat: -41.291492247632654,
    lon: 174.7622438259359,
    tier: "primary",
    iconSize: [132, 20],
    iconAnchor: [66, 10],
  },
  /*
   * Christchurch — primary city (same hierarchy as Auckland / Wellington); anchor W of CBD for Canterbury cluster.
   */
  {
    name: "Christchurch",
    lat: -43.528,
    lon: 172.505,
    tier: "primary",
    iconSize: [132, 18],
    iconAnchor: [122, 9],
  },
  /*
   * Kaikoura ~(-42.41, 173.68); anchor pulled ~halfway from left toward centre vs [0,9] so text stays nearer land/coast.
   */
  {
    name: "Kaikoura",
    lat: -42.397,
    lon: 173.668,
    tier: "secondary",
    iconSize: [112, 18],
    iconAnchor: [30, 9],
  },
  { name: "Queenstown", lat: -45.0312, lon: 168.6626, tier: "primary" },
  { name: "Dunedin", lat: -45.8788, lon: 170.5028, tier: "secondary" },
];

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

/** Fit map to pod markers with edge padding; single-pod fallback avoids over-zoom. */
function fitMapToPods(map: LeafletGlobal, L: LeafletGlobal, podList: ExploreMapMarkerPod[]) {
  if (!podList.length) {
    map.setView([-41.25, 172.75], 5.5);
    return;
  }
  if (podList.length === 1) {
    const p = podList[0];
    map.setView([p.lat, p.lon], 8);
    return;
  }
  const latlngs = podList.map((p) => L.latLng(p.lat, p.lon));
  let b = L.latLngBounds(latlngs);

  if (isStewartIslandTabPods(podList)) {
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

  if (spansSouthIslandMap) {
    map.fitBounds(b, {
      paddingTopLeft: L.point(72, 36),
      paddingBottomRight: L.point(36, 36),
      maxZoom: 10,
      animate: false,
    });
    return;
  }

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

export function ExploreNzMapPanelExperimental({ pods, highlightSlug, onHighlightSlug }: Props) {
  const router = useRouter();
  const shellRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletGlobal | null>(null);
  const markersRef = useRef<Map<string, LeafletGlobal>>(new Map());
  const [mapInit, setMapInit] = useState(false);
  const highlightRef = useRef<string | null>(null);
  highlightRef.current = highlightSlug;

  const syncMarkerClasses = useCallback((slug: string | null) => {
    markersRef.current.forEach((m, key) => {
      const root = m.getElement?.() as HTMLElement | undefined;
      const inner = root?.querySelector<HTMLElement>(`[data-slug="${key}"]`);
      if (!inner) return;
      if (slug === key) inner.setAttribute("data-active", "true");
      else inner.removeAttribute("data-active");
    });
  }, []);

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
        const map = L.map(elRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
          attributionControl: true,
          minZoom: 5,
          maxZoom: 12,
          maxBounds: bounds.pad(0.04),
        });
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

        const defaultLabelIconSize: [number, number] = [128, 18];
        const defaultLabelIconAnchor: [number, number] = [64, 9];

        for (const lb of GEO_REF_LABELS) {
          const tierClass =
            lb.tier === "regional"
              ? xstyles.exmapGeoLabel__textRegional
              : lb.tier === "primary"
                ? xstyles.exmapGeoLabel__textPrimary
                : xstyles.exmapGeoLabel__textSecondary;
          const iconSize = lb.iconSize ?? defaultLabelIconSize;
          const iconAnchor = lb.iconAnchor ?? defaultLabelIconAnchor;
          L.marker([lb.lat, lb.lon], {
            pane: "exmapGeoLabels",
            interactive: false,
            keyboard: false,
            icon: L.divIcon({
              className: xstyles.exmapGeoLabel,
              html: `<span class="${xstyles.exmapGeoLabel__text} ${tierClass}" aria-hidden="true">${lb.name}</span>`,
              iconSize,
              iconAnchor,
            }),
          }).addTo(map);
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

    markersRef.current.forEach((m) => {
      try {
        map.removeLayer(m);
      } catch {
        /* ignore */
      }
    });
    markersRef.current = new Map();

    const markerClasses = {
      root: xstyles.exmapM,
      ring: xstyles.exmapM__ring,
      dot: xstyles.exmapM__dot,
    };

    for (const pod of pods) {
      const icon = podMarkerDivIcon(L, pod, pods, markerClasses);
      const zIndexOffset =
        hasStewartMarkerPair(pods) && pod.slug === "tokoeka"
          ? 650
          : hasStewartMarkerPair(pods) && pod.slug === "hananui"
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
      marker.on("mouseover", () => onHighlightSlug(pod.slug));
      marker.on("click", () => {
        onHighlightSlug(pod.slug);
        marker.closeTooltip?.();
        router.push(pod.href);
      });
      marker.addTo(map);
      markersRef.current.set(pod.slug, marker);
    }
    syncMarkerClasses(highlightRef.current);
    requestAnimationFrame(() => {
      map.invalidateSize();
      fitMapToPods(map, L, pods);
      requestAnimationFrame(() => {
        map.invalidateSize();
        fitMapToPods(map, L, pods);
      });
    });
  }, [pods, mapInit, onHighlightSlug, syncMarkerClasses, router]);

  return (
    <div ref={shellRef} className={xstyles.exmapShell}>
      <p className={xstyles.exmapCaption}>New Zealand</p>
      <div ref={elRef} className={xstyles.exmapMap} aria-label="Map of New Zealand with PurePod locations" />
    </div>
  );
}
