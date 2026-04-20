"use client";

/**
 * PodGeographicMapExperimental
 *
 * Real geographic map (Leaflet + OSM-derived tiles) framed on New Zealand,
 * with on-brand styling and custom markers. Self-contained: loads Leaflet from CDN.
 *
 * Add to any page with:
 *   import { PodGeographicMapExperimental } from "@/components/pods/PodGeographicMapExperimental";
 *
 * Does not modify global styles outside the scoped `.ppm-` prefix below.
 */

import React, { useCallback, useEffect, useId, useRef, useState } from "react";

const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

type PodLocation = {
  slug: string;
  title: string;
  locale: string;
  lat: number;
  lon: number;
};

/** Pod locations — aligned with `exploreMapPinsExperimental`. */
const PODS: PodLocation[] = [
  { slug: "makoha", title: "Mākōha", locale: "Kerikeri", lat: -35.2283, lon: 173.9509 },
  { slug: "rewarewa", title: "Rewarewa", locale: "Muriwai Coast", lat: -36.836, lon: 174.504 },
  { slug: "ruru", title: "Ruru", locale: "Coromandel", lat: -36.844, lon: 175.508 },
  { slug: "pamu", title: "Pāmu", locale: "Rotorua", lat: -38.1368, lon: 176.2497 },
  { slug: "matu", title: "Matū", locale: "Waitomo", lat: -38.2609, lon: 175.1035 },
  { slug: "kokomea", title: "Kokomea", locale: "Kāpiti Coast", lat: -40.914, lon: 174.988 },
  { slug: "manakau", title: "Manakau", locale: "Kaikōura", lat: -42.4, lon: 173.68 },
  { slug: "kahutara", title: "Kahutara", locale: "Kaikōura", lat: -42.45, lon: 173.72 },
  { slug: "atatu", title: "Atatū", locale: "Hurunui", lat: -42.65, lon: 172.76 },
  { slug: "korimako", title: "Korimako", locale: "Hurunui", lat: -42.58, lon: 172.88 },
  { slug: "greystone", title: "Greystone", locale: "Waipara", lat: -43.15, lon: 172.75 },
  { slug: "pohue", title: "Pōhue", locale: "Banks Peninsula", lat: -43.803, lon: 172.967 },
  { slug: "haurapa", title: "Haurapa", locale: "Central Otago", lat: -45.038, lon: 169.2 },
  { slug: "taima", title: "Tāima", locale: "Central Otago", lat: -45.32, lon: 169.15 },
  { slug: "tokoeka", title: "Tokoeka", locale: "Stewart Island", lat: -46.866629, lon: 168.124813 },
  { slug: "hananui", title: "Hananui", locale: "Stewart Island", lat: -46.866759, lon: 168.124998 },
].slice()
  .sort((a, b) => b.lat - a.lat);

/** Runtime Leaflet on `window.L` — no `leaflet` npm package in package.json. */
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
      existing.addEventListener("load", () => {
        const L = (window as unknown as { L?: LeafletGlobal }).L;
        if (L) resolve(L);
        else reject(new Error("Leaflet failed to attach to window"));
      });
      existing.addEventListener("error", () => reject(new Error("Leaflet script error")));
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

const scopedCss = `
/* PurePods map block — typography per docs/brand-guidelines (Inter for section UI; variables only). */
.ppm {
  width: min(var(--max, 1120px), calc(100% - clamp(28px, 5vw, 40px)));
  margin: 0 auto;
  padding: clamp(8px, 1.5vw, 16px) 0 clamp(20px, 3vw, 40px);
  color: var(--ink);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}

.ppm__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(200px, 280px);
  gap: clamp(20px, 3vw, 32px);
  align-items: stretch;
}

@media (max-width: 820px) {
  .ppm__grid {
    grid-template-columns: 1fr;
  }
}

.ppm__head {
  grid-column: 1 / -1;
  max-width: 42rem;
  margin-bottom: clamp(4px, 1vw, 10px);
}

.ppm__eyebrow {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}

.ppm__title {
  margin: 0 0 12px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: clamp(26px, 3.4vw, 38px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: var(--brand-green);
}

.ppm__deck {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--muted);
  max-width: 38rem;
}

.ppm__mapShell {
  position: relative;
  min-height: clamp(320px, 56vh, 540px);
  border-radius: var(--radius, 22px);
  overflow: hidden;
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
  background: var(--bg);
}

.ppm__map {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.ppm__map .leaflet-tile-pane {
  filter: saturate(0.58) brightness(1.06) contrast(0.94) sepia(0.14) hue-rotate(-6deg);
}

/* Calm base map: minimal labels + warm neutrals (CARTO light, no labels). */
.ppm__map .leaflet-control-zoom {
  border: none !important;
  box-shadow: none !important;
  margin: 14px !important;
}

.ppm__map .leaflet-control-zoom a {
  width: 32px !important;
  height: 32px !important;
  line-height: 30px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  color: var(--brand-green) !important;
  background: color-mix(in srgb, var(--card) 94%, transparent) !important;
  border: 1px solid var(--stroke) !important;
  border-radius: 10px !important;
  margin-bottom: 6px !important;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.ppm__map .leaflet-control-zoom a:hover {
  background: color-mix(in srgb, var(--brand-beige) 22%, var(--card)) !important;
  border-color: color-mix(in srgb, var(--brand-green) 18%, var(--stroke)) !important;
  color: var(--brand-green) !important;
}

.ppm__map .leaflet-control-zoom-in {
  border-radius: 12px 12px 6px 6px !important;
}

.ppm__map .leaflet-control-zoom-out {
  border-radius: 6px 6px 12px 12px !important;
}

.ppm__map .leaflet-control-attribution {
  background: color-mix(in srgb, var(--bg) 88%, transparent) !important;
  color: var(--muted) !important;
  font-family: Inter, system-ui, sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  letter-spacing: 0.06em;
  border: none !important;
  border-radius: 10px 0 0 0;
  padding: 5px 10px !important;
  max-width: min(100%, 280px);
  line-height: 1.35 !important;
}

.ppm__map .leaflet-control-attribution a {
  color: var(--brand-green) !important;
  font-weight: 600;
}

.ppm-divicon {
  background: transparent !important;
  border: none !important;
}

.ppm__mapErr {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 4vw, 32px);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.55;
  color: var(--muted);
  background: var(--bg);
}

.ppm__aside {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius, 22px);
  border: 1px solid var(--stroke);
  background: var(--card);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.ppm__list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  max-height: min(560px, 56vh);
  scrollbar-width: thin;
}

.ppm__row {
  display: block;
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--stroke) 70%, transparent);
  background: transparent;
  cursor: pointer;
  color: inherit;
  transition: background 0.22s ease, padding-left 0.22s ease;
}

.ppm__list li:last-child .ppm__row {
  border-bottom: 0;
}

.ppm__row:hover,
.ppm__row:focus-visible {
  outline: none;
  background: color-mix(in srgb, var(--brand-green) 4%, var(--bg));
  padding-left: 22px;
}

.ppm__row[data-active="true"] {
  background: color-mix(in srgb, var(--brand-beige) 24%, var(--bg));
  padding-left: 22px;
}

.ppm__rowName {
  display: block;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--brand-green);
}

.ppm__rowMeta {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.ppm-m {
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ppm-m__ring {
  position: absolute;
  inset: 1px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--brand-beige) 65%, var(--stroke));
  opacity: 0.5;
  transform: scale(0.94);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--brand-beige) 0%, transparent);
}

.ppm-m__core {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(
    160deg,
    color-mix(in srgb, var(--brand-beige) 70%, #fff) 0%,
    var(--brand-green) 100%
  );
  box-shadow: 0 2px 10px color-mix(in srgb, var(--brand-green) 22%, transparent);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
}

.ppm-m__glyph {
  position: absolute;
  width: 6px;
  height: 6px;
  opacity: 0.45;
  color: color-mix(in srgb, var(--bg) 90%, var(--brand-green));
}

.ppm-m:hover .ppm-m__ring {
  opacity: 0.85;
  transform: scale(1.08);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--brand-beige) 12%, transparent);
}

.ppm-m:hover .ppm-m__core {
  transform: scale(1.08);
}

.ppm-m--active .ppm-m__ring {
  opacity: 1;
  transform: scale(1.38);
  box-shadow: 0 0 0 8px color-mix(in srgb, var(--brand-beige) 16%, transparent);
}

.ppm-m--active .ppm-m__core {
  transform: scale(1.12);
  box-shadow: 0 2px 14px color-mix(in srgb, var(--brand-green) 28%, transparent);
}

.leaflet-tooltip.ppm-tip {
  padding: 0 !important;
  border: none !important;
  border-radius: 14px !important;
  background: color-mix(in srgb, var(--cinema, #1e221a) 92%, var(--brand-green)) !important;
  color: var(--bg) !important;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
  box-shadow: var(--shadow) !important;
  overflow: hidden;
}

.leaflet-tooltip.ppm-tip .ppm-tip__inner {
  padding: 11px 14px 12px;
}

.leaflet-tooltip.ppm-tip .ppm-tip__title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.25;
  color: var(--bg);
}

.leaflet-tooltip.ppm-tip .ppm-tip__meta {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--bg) 72%, transparent);
}

.leaflet-tooltip.ppm-tip::before {
  border-top-color: color-mix(in srgb, var(--cinema, #1e221a) 92%, var(--brand-green)) !important;
}

@media (prefers-reduced-motion: reduce) {
  .ppm-m__ring,
  .ppm-m__core,
  .ppm__row {
    transition: none !important;
  }
}
`;

function markerHtml(slug: string): string {
  const glyph = `
<svg class="ppm-m__glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M17 8C8 10 5.9 20.3 6 21c0 .5.4 1 1 1h1c.3 0 .6-.2.8-.4 3.4-5.7 2.5-9.1 1.9-11.2-.2-.8-.4-1.1-.7-1.4z"/>
</svg>`;
  return `<div class="ppm-m" data-slug="${slug}">${glyph}<span class="ppm-m__ring"></span><span class="ppm-m__core"></span></div>`;
}

export function PodGeographicMapExperimental() {
  const uid = useId().replace(/:/g, "");
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletGlobal | null>(null);
  const markersRef = useRef<Map<string, LeafletGlobal>>(new Map());
  const [loadError, setLoadError] = useState<string | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const syncMarkerClasses = useCallback((slug: string | null) => {
    markersRef.current.forEach((m, key) => {
      const el = m.getElement?.();
      if (!el) return;
      const inner = el.querySelector(".ppm-m");
      inner?.classList.toggle("ppm-m--active", slug === key);
    });
  }, []);

  useEffect(() => {
    syncMarkerClasses(activeSlug);
  }, [activeSlug, syncMarkerClasses]);

  useEffect(() => {
    let cancelled = false;
    const el = mapElRef.current;
    if (!el) return undefined;

    (async () => {
      try {
        const L = await loadLeaflet();
        if (cancelled || !mapElRef.current) return;

        const southWest = L.latLngBounds(L.latLng(-48.2, 165.2), L.latLng(-33.8, 179.4));
        const map: LeafletGlobal = L.map(mapElRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
          attributionControl: true,
          minZoom: 5,
          maxZoom: 12,
          maxBounds: southWest.pad(0.04),
        });

        map.setView([-41.25, 172.8], 6);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }).addTo(map);

        const hasStewartPair =
          PODS.some((p) => p.slug === "tokoeka") && PODS.some((p) => p.slug === "hananui");

        const iconFor = (slug: string) => {
          const inner = markerHtml(slug);
          if (hasStewartPair && slug === "tokoeka") {
            return L.divIcon({
              className: "ppm-divicon",
              html: `<div style="width:64px;height:36px;position:relative"><div style="position:absolute;right:0;top:3px">${inner}</div></div>`,
              iconSize: [64, 36],
              iconAnchor: [49, 18],
            });
          }
          if (hasStewartPair && slug === "hananui") {
            return L.divIcon({
              className: "ppm-divicon",
              html: `<div style="width:64px;height:36px;position:relative"><div style="position:absolute;left:0;top:3px">${inner}</div></div>`,
              iconSize: [64, 36],
              iconAnchor: [15, 18],
            });
          }
          return L.divIcon({
            className: "ppm-divicon",
            html: inner,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });
        };

        markersRef.current = new Map();
        for (const pod of PODS) {
          const zIO =
            hasStewartPair && pod.slug === "tokoeka"
              ? 650
              : hasStewartPair && pod.slug === "hananui"
                ? 620
                : undefined;
          const marker = L.marker([pod.lat, pod.lon], {
            icon: iconFor(pod.slug),
            riseOnHover: true,
            ...(zIO !== undefined ? { zIndexOffset: zIO } : {}),
          });
          marker.bindTooltip(
            `<div class="ppm-tip__inner"><span class="ppm-tip__title">${pod.title}</span><span class="ppm-tip__meta">${pod.locale}</span></div>`,
            {
              permanent: false,
              sticky: true,
              direction: "top",
              opacity: 1,
              className: "ppm-tip",
            },
          );
          marker.on("mouseover", () => setActiveSlug(pod.slug));
          marker.on("click", () => {
            setActiveSlug(pod.slug);
            marker.openTooltip();
          });
          marker.addTo(map);
          markersRef.current.set(pod.slug, marker);
        }

        mapRef.current = map;
        setMapReady(true);
        requestAnimationFrame(() => {
          map.invalidateSize();
        });
      } catch (e) {
        if (!cancelled) {
          setLoadError(e instanceof Error ? e.message : "Map could not load");
        }
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  return (
    <section className="ppm" aria-labelledby={`${uid}-title`}>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        className="ppm__grid"
        onMouseLeave={() => setActiveSlug(null)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActiveSlug(null);
        }}
      >
        <header className="ppm__head">
          <p className="ppm__eyebrow">Locations</p>
          <h2 className="ppm__title" id={`${uid}-title`}>
            New Zealand
          </h2>
          <p className="ppm__deck">
            From the far north to Rakiura, each stay sits in its own landscape — quiet, distinct, and rooted in place.
          </p>
        </header>

        <div className="ppm__mapShell">
          <div ref={mapElRef} className="ppm__map" id={`${uid}-map`} />
          {!mapReady && !loadError ? (
            <div className="ppm__mapErr" aria-live="polite">
              Loading map…
            </div>
          ) : null}
          {loadError ? (
            <div className="ppm__mapErr" role="alert">
              {loadError}
            </div>
          ) : null}
        </div>

        <aside className="ppm__aside" aria-label="PurePod list">
          <ul className="ppm__list">
            {PODS.map((pod) => (
              <li key={pod.slug}>
                <button
                  type="button"
                  className="ppm__row"
                  data-active={activeSlug === pod.slug ? "true" : "false"}
                  onMouseEnter={() => setActiveSlug(pod.slug)}
                  onFocus={() => setActiveSlug(pod.slug)}
                >
                  <span className="ppm__rowName">{pod.title}</span>
                  <span className="ppm__rowMeta">{pod.locale}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default PodGeographicMapExperimental;
