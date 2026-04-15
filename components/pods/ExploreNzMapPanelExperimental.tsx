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
  const b = L.latLngBounds(latlngs);
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
            fillColor: "#e8eae3",
            fillOpacity: 1,
            color: "rgba(92, 95, 62, 0.38)",
            weight: 0.55,
            opacity: 1,
          },
        }).addTo(map);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
          opacity: 0.82,
        }).addTo(map);

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

    for (const pod of pods) {
      const icon = L.divIcon({
        className: xstyles.exmapDivicon,
        html: markerHtml(pod.slug, {
          root: xstyles.exmapM,
          ring: xstyles.exmapM__ring,
          dot: xstyles.exmapM__dot,
        }),
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      const marker = L.marker([pod.lat, pod.lon], { icon });
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
