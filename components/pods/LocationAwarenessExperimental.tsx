"use client";

import React, { useCallback, useId, useState } from "react";

/**
 * Editorial “location awareness” block — experimental only.
 * Coastline paths are projected from a simplified NZ MultiPolygon (world.geo.json / johan).
 * Not wired to production routes by this file.
 */

type PodPin = {
  slug: string;
  title: string;
  locale: string;
  lon: number;
  lat: number;
};

const MAP_BOUNDS = { west: 166.35, east: 178.62, north: -34.42, south: -46.78 };
const VB_W = 1000;
const VB_H = 1280;

/** Project lon/lat into the same space as the NZ outline paths. */
function project(lon: number, lat: number) {
  const x = ((lon - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * VB_W;
  const y = ((MAP_BOUNDS.north - lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * VB_H;
  return { x, y };
}

/**
 * South + Stewart + North (single ring each from simplified admin outline).
 * Generated with the same bounds as `project()`.
 */
const PATH_NZ_SOUTH =
  "M543.63 673.04 L562.12 715.81 L620.08 673.83 L643.65 717.58 L643.73 761.17 L613.40 809.13 L560.13 885.44 L518.44 927.10 L548.50 976.92 L485.62 978.19 L415.89 1017.22 L394.06 1085.01 L347.73 1189.79 L283.73 1236.07 L243.06 1265.63 L168.00 1263.42 L115.22 1229.28 L26.64 1222.00 L12.97 1183.97 L56.76 1107.15 L159.23 1004.94 L211.85 985.46 L270.40 946.05 L340.25 891.83 L389.17 838.08 L425.40 760.90 L456.29 734.70 L468.40 676.88 L525.56 629.02 L543.63 673.04 Z";

const PATH_NZ_NORTH =
  "M673.35 179.82 L732.41 288.84 L734.12 218.12 L770.90 246.36 L783.09 324.70 L848.67 358.45 L903.73 366.73 L950.31 327.23 L991.61 339.20 L971.86 431.10 L947.06 491.53 L884.84 489.40 L863.08 520.88 L870.66 565.43 L858.67 584.70 L827.87 640.50 L787.48 711.42 L724.50 752.71 L710.51 725.53 L676.53 710.61 L723.52 625.42 L696.83 568.43 L609.13 527.00 L611.43 489.49 L670.32 453.35 L684.06 373.62 L680.28 306.65 L647.27 237.27 L649.47 219.01 L610.51 176.26 L546.39 84.62 L512.31 11.30 L542.55 3.18 L586.90 60.71 L650.32 87.56 L673.35 179.82 Z";

const PODS: PodPin[] = [
  { slug: "makoha", title: "Mākōha", locale: "Kerikeri", lon: 173.95, lat: -35.22 },
  { slug: "rewarewa", title: "Rewarewa", locale: "Muriwai Coast", lon: 174.52, lat: -36.82 },
  { slug: "ruru", title: "Ruru", locale: "Coromandel", lon: 175.5, lat: -36.76 },
  { slug: "pamu", title: "Pāmu", locale: "Rotorua", lon: 176.25, lat: -38.14 },
  { slug: "matu", title: "Matū", locale: "Waitomo", lon: 175.1, lat: -38.26 },
  { slug: "kokomea", title: "Kokomea", locale: "Kāpiti Coast", lon: 175.08, lat: -40.85 },
  { slug: "manakau", title: "Manakau", locale: "Kaikōura", lon: 173.68, lat: -42.4 },
  { slug: "kahutara", title: "Kahutara", locale: "Kaikōura", lon: 173.55, lat: -42.35 },
  { slug: "atatu", title: "Atatū", locale: "Hurunui", lon: 173.35, lat: -42.88 },
  { slug: "korimako", title: "Korimako", locale: "Hurunui", lon: 172.62, lat: -42.82 },
  { slug: "greystone", title: "Greystone", locale: "Waipara", lon: 172.75, lat: -43.05 },
  { slug: "pohue", title: "Pōhue", locale: "Banks Peninsula", lon: 172.65, lat: -43.75 },
  { slug: "haurapa", title: "Haurapa", locale: "Central Otago", lon: 169.32, lat: -45.18 },
  { slug: "taima", title: "Tāima", locale: "Central Otago", lon: 169.15, lat: -44.98 },
  { slug: "tokoeka", title: "Tokoeka", locale: "Stewart Island", lon: 168.05, lat: -47.02 },
  { slug: "hananui", title: "Hananui", locale: "Stewart Island", lon: 168.12, lat: -46.92 },
].slice()
  .sort((a, b) => b.lat - a.lat);

const REF_AUCKLAND = { lon: 174.76, lat: -36.85 };

const css = `
.laware {
  --laware-heading: "Noto Serif Display", Georgia, "Times New Roman", serif;
  width: 100%;
  max-width: min(var(--max, 1120px), 100%);
  margin: 0 auto;
  color: var(--ink, #5c5f3e);
}

.laware__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.38fr);
  gap: clamp(20px, 3.5vw, 40px);
  align-items: start;
}

@media (max-width: 900px) {
  .laware__inner {
    grid-template-columns: 1fr;
  }
}

.laware__intro {
  grid-column: 1 / -1;
  max-width: 40rem;
  margin-bottom: clamp(8px, 1.5vw, 16px);
}

.laware__eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted, rgba(92, 95, 62, 0.72));
}

.laware__title {
  margin: 0;
  font-family: var(--laware-heading);
  font-size: clamp(1.75rem, 3.2vw, 2.35rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--brand-green, #5c5f3e);
  line-height: 1.15;
}

.laware__deck {
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.65;
  color: var(--muted, rgba(92, 95, 62, 0.72));
  max-width: 36rem;
}

.laware__figure {
  position: relative;
  margin: 0;
  border-radius: var(--radius, 22px);
  border: 1px solid var(--stroke, rgba(92, 95, 62, 0.18));
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--brand-beige, #c2b59e) 18%, #e8ebe6) 0%,
    color-mix(in srgb, var(--bg, #f7f6f3) 55%, #d4ddd6) 48%,
    color-mix(in srgb, var(--brand-beige, #c2b59e) 12%, #dce3de) 100%
  );
  box-shadow: var(--shadow, 0 18px 44px rgba(22, 24, 18, 0.07));
  overflow: hidden;
}

.laware__figure::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
}

.laware__svg {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.laware__land {
  fill: color-mix(in srgb, var(--bg, #f7f6f3) 82%, #fff 18%);
  stroke: color-mix(in srgb, var(--brand-green, #5c5f3e) 22%, transparent);
  stroke-width: 1.1;
  filter: drop-shadow(0 2px 14px rgba(22, 24, 18, 0.04));
}

.laware__ref {
  font-family: Inter, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  fill: color-mix(in srgb, var(--muted, rgba(92, 95, 62, 0.72)) 85%, transparent);
  pointer-events: none;
}

.laware__refDot {
  fill: color-mix(in srgb, var(--muted, rgba(92, 95, 62, 0.72)) 55%, transparent);
  pointer-events: none;
}

.laware__markerHit {
  fill: transparent;
  cursor: default;
}

.laware__markerDot {
  fill: var(--brand-green, #5c5f3e);
  stroke: #fff;
  stroke-width: 1.5;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
  transform-box: fill-box;
  transform-origin: center;
}

@media (prefers-reduced-motion: reduce) {
  .laware__markerDot {
    transition: none;
  }
}

.laware__markerRing {
  fill: none;
  stroke: var(--brand-beige, #c2b59e);
  stroke-width: 1.75;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: scale(0.65);
  transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (prefers-reduced-motion: reduce) {
  .laware__markerRing {
    transition: none;
  }
}

.laware__marker[data-active="true"] .laware__markerDot {
  opacity: 1;
  transform: scale(1.22);
}

.laware__marker[data-active="true"] .laware__markerRing {
  opacity: 0.95;
  transform: scale(1.45);
}

.laware__marker:not([data-active="true"]) .laware__markerDot {
  opacity: 0.42;
}

.laware__aside {
  padding-top: clamp(4px, 1vw, 10px);
}

.laware__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--stroke, rgba(92, 95, 62, 0.18));
}

.laware__rowBtn {
  display: block;
  width: 100%;
  text-align: left;
  padding: 14px 0 15px;
  border: 0;
  border-bottom: 1px solid var(--stroke, rgba(92, 95, 62, 0.14));
  background: transparent;
  cursor: default;
  color: inherit;
  transition: background 0.2s ease, padding-left 0.25s ease;
}

.laware__rowBtn:hover,
.laware__rowBtn:focus-visible {
  outline: none;
  background: color-mix(in srgb, var(--brand-green, #5c5f3e) 4%, transparent);
  padding-left: 6px;
}

.laware__rowBtn[data-active="true"] {
  background: color-mix(in srgb, var(--brand-beige, #c2b59e) 22%, transparent);
  padding-left: 8px;
}

.laware__rowName {
  display: block;
  font-family: var(--laware-heading);
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--brand-green, #5c5f3e);
}

.laware__rowLocale {
  display: block;
  margin-top: 3px;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted, rgba(92, 95, 62, 0.72));
}
`;

export function LocationAwarenessExperimental() {
  const uid = useId().replace(/:/g, "");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const clear = useCallback(() => setActiveSlug(null), []);

  const ak = project(REF_AUCKLAND.lon, REF_AUCKLAND.lat);

  return (
    <section className="laware" aria-labelledby={`${uid}-h`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        className="laware__inner"
        onMouseLeave={clear}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) clear();
        }}
      >
        <header className="laware__intro">
          <p className="laware__eyebrow">New Zealand</p>
          <h2 className="laware__title" id={`${uid}-h`}>
            Nights across the islands
          </h2>
          <p className="laware__deck">
            Each PurePod sits in its own landscape. The map traces where those landscapes begin — from the far north to
            Rakiura.
          </p>
        </header>

        <figure className="laware__figure">
          <svg
            className="laware__svg"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Map of New Zealand showing PurePod locations"
          >
            <g className="laware__land" aria-hidden>
              <path d={PATH_NZ_SOUTH} />
              <path d={PATH_NZ_NORTH} />
            </g>

            <g transform={`translate(${ak.x}, ${ak.y})`} aria-hidden style={{ pointerEvents: "none" }}>
              <circle className="laware__refDot" r={2.2} cx={0} cy={0} />
              <text className="laware__ref" x={8} y={4}>
                Auckland
              </text>
            </g>

            {PODS.map((pod) => {
              const { x, y } = project(pod.lon, pod.lat);
              const active = activeSlug === pod.slug;
              return (
                <g
                  key={pod.slug}
                  className="laware__marker"
                  data-active={active ? "true" : "false"}
                  transform={`translate(${x}, ${y})`}
                  onMouseEnter={() => setActiveSlug(pod.slug)}
                >
                  <circle className="laware__markerHit" r={22} cx={0} cy={0} aria-hidden />
                  <circle className="laware__markerRing" r={14} cx={0} cy={0} aria-hidden />
                  <circle className="laware__markerDot" r={5} cx={0} cy={0} aria-hidden />
                </g>
              );
            })}
          </svg>
        </figure>

        <aside className="laware__aside" aria-label="PurePod locations">
          <ul className="laware__list">
            {PODS.map((pod) => (
              <li key={pod.slug}>
                <button
                  type="button"
                  className="laware__rowBtn"
                  data-active={activeSlug === pod.slug ? "true" : "false"}
                  onMouseEnter={() => setActiveSlug(pod.slug)}
                  onFocus={() => setActiveSlug(pod.slug)}
                >
                  <span className="laware__rowName">{pod.title}</span>
                  <span className="laware__rowLocale">{pod.locale}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default LocationAwarenessExperimental;
