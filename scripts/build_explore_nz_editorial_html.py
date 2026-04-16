"""Assemble reference-html/explore-nz-editorial-map.html from extract_nz_svg output."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PATH_FILE = ROOT / ".tmp_nz_path.txt"
OUT = ROOT / "reference-html" / "explore-nz-editorial-map.html"


def read_path_block() -> tuple[str, str]:
    lines = PATH_FILE.read_text(encoding="utf-8-sig").splitlines()
    meta = "\n".join(lines[:3])
    d = lines[3].strip() if len(lines) > 3 else ""
    return meta, d


def main() -> None:
    meta, path_d = read_path_block()
    if not path_d:
        raise SystemExit("Missing path data in .tmp_nz_path.txt — run: python scripts/extract_nz_svg.py | Out-File -Encoding utf8 .tmp_nz_path.txt")

    # Pod markers: WGS84 approximations for regional placement (not exact GPS).
    pods: list[tuple[str, str, str, str, str, float, float]] = [
        ("makoha", "Mākōha", "Kerikeri", "north", "location/makoha/", 173.9509, -35.2283),
        ("rewarewa", "Rewarewa", "Muriwai Coast", "north", "location/rewarewa/", 174.504, -36.836),
        ("ruru", "Ruru", "Coromandel", "north", "location/ruru/", 175.508, -36.844),
        ("pamu", "Pāmu", "Rotorua", "north", "location/pamu/", 176.2497, -38.1368),
        ("matu", "Matū", "Waitomo", "north", "location/matu/", 175.1035, -38.2609),
        ("kokomea", "Kokomea", "Kapiti Coast", "north", "location/kokomea/", 174.988, -40.914),
        ("manakau", "Manakau", "Kaikōura", "south", "location/manakau/", 173.68, -42.40),
        ("kahutara", "Kahutara", "Kaikōura", "south", "location/kahutara/", 173.72, -42.45),
        ("atatu", "Atatū", "Hurunui", "south", "location/atatu/", 172.76, -42.65),
        ("korimako", "Korimako", "Hurunui", "south", "location/korimako/", 172.88, -42.58),
        ("greystone", "Greystone", "Waipara", "south", "location/greystone/", 172.75, -43.15),
        ("pohue", "Pōhue", "Banks Peninsula", "south", "location/pohue/", 172.967, -43.803),
        ("haurapa", "Haurapa", "Central Otago", "south", "location/haurapa/", 169.20, -45.038),
        ("taima", "Tāima", "Central Otago", "south", "location/taima/", 169.15, -45.32),
        ("tokoeka", "Tokoeka", "Stewart Island", "stewart", "location/tokoeka/", 168.128, -46.8988),
        ("hananui", "Hananui", "Stewart Island", "stewart", "location/hananui/", 168.2, -46.93),
    ]

    # Parse bounds from meta line 3
    import re

    m = re.search(r"bounds lon \[([0-9.-]+),([0-9.-]+)\] lat \[([0-9.-]+),([0-9.-]+)\]", meta)
    if not m:
        raise SystemExit("Could not parse bounds from meta")
    min_lon, max_lon, min_lat, max_lat = map(float, m.groups())

    w, h, pad = 1000.0, 1400.0, 26.0

    def proj(lon: float, lat: float) -> tuple[float, float]:
        x = pad + (lon - min_lon) / (max_lon - min_lon) * (w - 2 * pad)
        y = pad + (max_lat - lat) / (max_lat - min_lat) * (h - 2 * pad)
        return round(x, 2), round(y, 2)

    pin_groups = []
    for slug, name, region, island, href, lon, lat in pods:
        cx, cy = proj(lon, lat)
        pin_groups.append(
            f"""            <a class="map-pin" href="#pod-{slug}" data-island="{island}" data-href="{href}" aria-label="{name}, {region}">
              <circle class="map-pin-halo" cx="{cx}" cy="{cy}" r="20"/>
              <circle class="map-pin-core" cx="{cx}" cy="{cy}" r="6"/>
              <text class="map-pin-name" x="{cx}" y="{cy + 30}" text-anchor="middle">{name}</text>
            </a>"""
        )
    pins_svg = "\n".join(pin_groups)

    html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Internal test — Explore PurePods with an editorial map from Natural Earth geography." />
  <title>Pods — map study (Natural Earth) — PurePods</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Serif+Display:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    :root{{
      --bg:#F7F6F3;
      --ink:#5C5F3E;
      --muted:rgba(92,95,62,.72);
      --card:rgba(255,255,255,.85);
      --stroke:rgba(92,95,62,.18);
      --brand-green:#5C5F3E;
      --brand-beige:#C2B59E;
      --shadow: 0 18px 44px rgba(0,0,0,.08);
      --max: 1120px;
    }}
    *{{ box-sizing:border-box; }}
    body{{
      margin:0;
      font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg);
      color: var(--ink);
      line-height: 1.5;
    }}
    a{{ color:inherit; text-decoration:none; }}
    .wrap{{ width:min(var(--max), calc(100% - 40px)); margin:0 auto; }}

    .nav{{
      position: sticky; top:0; z-index:60;
      background: rgba(247,246,243,.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--stroke);
    }}
    .nav-inner{{
      display:flex; align-items:center; justify-content:space-between;
      padding: 14px 0; gap:16px;
    }}
    .brand{{ display:flex; align-items:center; gap:10px; }}
    .brand img{{ height: 30px; width:auto; display:block; }}

    .links{{
      display:flex; gap:18px; align-items:center;
      font-size:13px; letter-spacing:.06em; text-transform:uppercase;
    }}
    .links a{{ color: var(--muted); }}
    .links a:hover{{ color: var(--ink); }}

    .btn{{
      display:inline-flex; align-items:center; justify-content:center;
      padding: 12px 14px; border-radius:999px;
      border: 2px solid var(--stroke);
      background: var(--card);
      font-weight: 600;
      white-space:nowrap;
    }}
    .btn-primary{{
      background: var(--brand-beige);
      border-color: var(--brand-beige);
      color: var(--brand-green) !important;
      font-weight: 800;
      box-shadow: 0 16px 30px rgba(92,95,60,.2);
    }}

    .hero{{ padding: 44px 0 20px; }}
    .hero h1{{
      margin: 0 0 10px;
      font-family: "Noto Serif Display", Georgia, "Times New Roman", serif;
      font-weight: 600;
      font-size: clamp(30px, 4.2vw, 46px);
      letter-spacing: -0.02em;
      color: var(--brand-green);
    }}
    .lead{{
      margin:0;
      max-width: 72ch;
      color: var(--muted);
      font-size: 16px;
      line-height:1.7;
    }}
    .hero-meta{{
      margin-top: 14px;
      display:flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      align-items:center;
    }}
    .proto-pill{{
      display:inline-flex;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid var(--stroke);
      background: rgba(92,95,62,.06);
      color: var(--muted);
      font-size: 11px;
      letter-spacing: .1em;
      text-transform: uppercase;
      font-weight: 600;
    }}
    .hero-meta a{{
      font-size: 13px;
      font-weight: 600;
      color: var(--brand-green);
      border-bottom: 1px solid rgba(92,95,62,.35);
      padding-bottom: 1px;
    }}
    .hero-meta a:hover{{ border-bottom-color: var(--brand-green); }}

    /* Editorial map — full-width wash, map-forward */
    .map-band{{
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      padding: clamp(28px, 4.5vw, 44px) 0 clamp(36px, 5.5vw, 52px);
      background:
        radial-gradient(125% 90% at 72% 18%, rgba(194,181,158,.14), transparent 50%),
        radial-gradient(95% 65% at 10% 82%, rgba(92,95,62,.07), transparent 42%),
        linear-gradient(180deg, rgba(255,255,255,.5) 0%, transparent 58%),
        var(--bg);
      border-top: 1px solid rgba(92,95,62,.11);
      border-bottom: 1px solid rgba(92,95,62,.11);
      box-sizing: border-box;
    }}
    .map-band-inner{{
      width: min(var(--max), calc(100% - 40px));
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 0.76fr) minmax(0, 1.52fr);
      gap: clamp(24px, 4.5vw, 48px);
      align-items: center;
    }}
    .map-copy{{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: clamp(14px, 2vw, 20px);
      padding: clamp(8px, 1.5vw, 16px) 0;
      max-width: 34ch;
    }}
    .map-title{{
      margin: 0;
      font-family: "Noto Serif Display", Georgia, "Times New Roman", serif;
      font-weight: 500;
      font-size: clamp(26px, 2.8vw, 36px);
      letter-spacing: -0.025em;
      color: var(--brand-green);
      line-height: 1.18;
    }}
    .map-body{{
      margin: 0;
      color: var(--muted);
      font-size: clamp(14px, 1.35vw, 16px);
      line-height: 1.68;
      font-weight: 400;
    }}
    .map-kicker{{
      margin: 0;
      font-size: 12px;
      letter-spacing: .12em;
      text-transform: uppercase;
      font-weight: 600;
      color: rgba(92,95,62,.58);
    }}

    .map-stage{{
      position: relative;
      border-radius: clamp(24px, 3vw, 36px);
      border: 1px solid rgba(92,95,62,.14);
      background: linear-gradient(165deg, rgba(255,255,255,.78) 0%, rgba(252,251,248,.92) 45%, rgba(247,246,243,.55) 100%);
      box-shadow:
        0 28px 56px rgba(0,0,0,.07),
        0 12px 28px rgba(92,95,62,.06),
        0 0 0 1px rgba(255,255,255,.65) inset;
      overflow: hidden;
      min-height: min(400px, 46vh);
    }}
    .map-stage::before{{
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(78% 58% at 24% 6%, rgba(255,255,255,.72), transparent 52%),
        radial-gradient(65% 48% at 90% 94%, rgba(194,181,158,.14), transparent 46%);
      z-index: 0;
    }}
    .map-svg-host{{
      position: relative;
      z-index: 1;
      padding: clamp(10px, 1.8vw, 18px) clamp(6px, 1.6vw, 14px) clamp(12px, 2vw, 20px);
    }}
    .map-svg-host svg{{
      display: block;
      width: 100%;
      height: auto;
      max-height: min(680px, 78vh);
    }}

    .nz-coast{{
      fill: #fdfcf9;
      stroke: rgba(92,95,62,.32);
      stroke-width: 1.12;
      vector-effect: non-scaling-stroke;
      filter: url(#nzPaperShadow);
    }}
    .nz-inner-glow{{
      fill: url(#nzInnerWash);
      stroke: none;
      pointer-events: none;
      mix-blend-mode: multiply;
      opacity: 0.56;
    }}

    .map-pin{{ cursor: pointer; outline: none; }}
    .map-pin:focus-visible .map-pin-core{{
      stroke: var(--brand-green);
      stroke-width: 2;
    }}
    .map-pin-halo{{
      fill: rgba(247,246,243,.55);
      stroke: rgba(92,95,62,.28);
      stroke-width: 1.15;
      transform-box: fill-box;
      transform-origin: center;
      transition: transform .22s ease, stroke .22s ease, opacity .22s ease, fill .22s ease;
      opacity: 0.52;
    }}
    .map-pin-core{{
      fill: #b8aa96;
      stroke: rgba(92,95,62,.52);
      stroke-width: 1.15;
      transform-box: fill-box;
      transform-origin: center;
      transition: transform .22s ease, filter .22s ease, stroke .22s ease, fill .22s ease;
    }}
    .map-pin:hover .map-pin-halo,
    .map-pin:focus-visible .map-pin-halo{{
      opacity: 1;
      transform: scale(1.1);
      stroke: rgba(92,95,62,.4);
      fill: rgba(255,255,255,.35);
    }}
    .map-pin:hover .map-pin-core,
    .map-pin:focus-visible .map-pin-core{{
      transform: scale(1.1);
      fill: var(--brand-beige);
      stroke: rgba(92,95,62,.58);
      filter: drop-shadow(0 3px 10px rgba(92,95,62,.28));
    }}
    .map-pin-name{{
      font-family: "Inter", system-ui, sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .02em;
      fill: rgba(92,95,62,.94);
      opacity: 0.88;
      transition: opacity .2s ease, fill .2s ease;
      pointer-events: none;
      filter: url(#mapPinLabelLegible);
    }}
    .map-pin:hover .map-pin-name,
    .map-pin:focus-visible .map-pin-name{{
      opacity: 1;
      fill: var(--brand-green);
    }}

    .tabs-wrap{{
      position: sticky;
      top: 58px;
      z-index:55;
      background: linear-gradient(to bottom, rgba(247,246,243,.96), rgba(247,246,243,.88));
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--stroke);
    }}
    .tabs{{
      display:flex;
      gap:10px;
      padding: 14px 0;
      overflow:auto;
      -webkit-overflow-scrolling: touch;
    }}
    .tab{{
      flex:0 0 auto;
      padding: 10px 14px;
      border-radius: 999px;
      border: 1px solid var(--stroke);
      background: var(--card);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: var(--muted);
      cursor:pointer;
      transition: background .12s ease, border-color .12s ease, color .12s ease;
      user-select:none;
    }}
    .tab:hover{{ color: var(--ink); }}
    .tab.active{{
      background: rgba(92,95,62,.1);
      border-color: rgba(92,95,62,.28);
      color: var(--brand-green);
    }}

    .tabs-wrap.map-follow{{
      background: linear-gradient(to bottom, rgba(247,246,243,.98), rgba(247,246,243,.9));
    }}

    .section{{ padding: 24px 0 70px; }}
    .section.collection{{
      scroll-margin-top: 100px;
    }}
    .section.collection::before{{
      content: "";
      display: block;
      height: 1px;
      width: 48px;
      background: linear-gradient(90deg, var(--brand-beige), transparent);
      margin: 0 0 20px;
      opacity: 0.85;
    }}
    .section-head{{
      display:flex;
      align-items:baseline;
      justify-content:space-between;
      gap:12px;
      margin: 0 0 18px;
    }}
    .count{{ color: var(--muted); font-size: 13px; }}

    .grid{{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }}

    .pod{{
      border-radius: 24px;
      border: 1px solid rgba(92,95,62,.14);
      background: var(--card);
      box-shadow: var(--shadow);
      overflow:hidden;
      display:flex;
      flex-direction:column;
      min-height: 320px;
      transition: transform .15s ease, box-shadow .15s ease;
      scroll-margin-top: 120px;
    }}
    .pod:hover{{
      transform: translateY(-2px);
      box-shadow: 0 22px 55px rgba(0,0,0,.1);
    }}

    .media{{
      height: 220px;
      background-size: cover;
      background-position: center 35%;
      position: relative;
      overflow: hidden;
    }}
    .media::after{{
      content:"";
      position:absolute;
      inset:0;
      background: linear-gradient(
        to bottom,
        rgba(17,18,23,.02),
        rgba(247,246,243,.25)
      );
      pointer-events:none;
    }}

    .body{{
      padding: 18px 20px 22px;
      display:flex;
      flex-direction:column;
      gap: 8px;
      flex:1;
    }}

    .pill{{
      display:inline-flex;
      padding: 6px 10px;
      border-radius:999px;
      border: 1px solid var(--stroke);
      background: rgba(92,95,62,.08);
      color: var(--muted);
      font-size: 12px;
      letter-spacing:.08em;
      text-transform:uppercase;
      width: fit-content;
    }}

    .pod h3{{
      margin:0;
      font-size: 18px;
      letter-spacing: -0.01em;
      color: var(--brand-green);
      font-weight: 600;
    }}

    .meta{{ color: var(--muted); font-size: 14px; line-height:1.6; }}

    .spacer{{ flex:1; }}

    .cta{{
      display:inline-flex;
      width: fit-content;
      padding: 9px 12px;
      border-radius:999px;
      border: 2px solid rgba(92,95,62,.35);
      background: rgba(92,95,62,.08);
      color: var(--brand-green);
      font-weight: 600;
      font-size: 13px;
    }}

    .hidden{{ display:none !important; }}

    @media (max-width: 900px){{
      .map-band-inner{{
        grid-template-columns: 1fr;
        gap: 28px;
      }}
      .map-copy{{
        max-width: 40ch;
        text-align: center;
        margin: 0 auto;
        align-items: center;
      }}
      .map-stage{{ order: -1; }}
    }}
    @media (max-width: 980px){{
      .grid{{ grid-template-columns: repeat(2, 1fr); }}
      .tabs-wrap{{ top: 56px; }}
    }}
    @media (max-width: 640px){{
      .grid{{ grid-template-columns: 1fr; }}
      .brand img{{ height: 28px; }}
      .tabs-wrap{{ top: 54px; }}
      .pod{{ min-height: 280px; }}
      .media{{ height: 200px; }}
    }}

    footer{{
      padding: 32px 0 40px;
      border-top: 1px solid var(--stroke);
      color: var(--muted);
      font-size:13px;
    }}
  </style>
</head>

<body>
  <div class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="home/index.html">
        <img src="../assets/img/purepods-logo-new-zealand.png" alt="PurePods">
      </a>
      <div class="links">
        <a href="explore.html">Pods</a>
        <a href="experiences/experiences.html">Experiences</a>
        <a href="my-journey.html">My journey</a>
        <a class="btn btn-primary" href="https://purepods.com/booking/">Book</a>
      </div>
    </div>
  </div>

  <main class="wrap">
    <section class="hero">
      <h1>Choose your place</h1>
      <p class="lead">
        Not every silence sounds the same. Discover where you want to spend the night.
      </p>
      <div class="hero-meta">
        <span class="proto-pill">Preview layout</span>
        <a href="explore.html">Standard pods view</a>
      </div>
    </section>

    <section class="map-band" aria-labelledby="map-editorial-title">
      <div class="map-band-inner">
        <div class="map-copy">
          <h2 class="map-title" id="map-editorial-title">The country at a glance</h2>
          <p class="map-body">
            Sixteen glass cabins, scattered with intention. Linger on the map, then choose the silence that calls you.
          </p>
          <p class="map-kicker">A light pause reveals each name — the cards below carry the rest.</p>
        </div>
        <div class="map-stage">
            <div class="map-svg-host">
            <svg viewBox="0 0 1000 1400" role="img" aria-label="New Zealand landmass with PurePod locations" preserveAspectRatio="xMidYMid meet">
              <defs>
                <path id="nzLandmass" d="{path_d}" />
                <linearGradient id="nzInnerWash" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="rgba(194,181,158,0.3)"/>
                  <stop offset="50%" stop-color="rgba(255,255,255,0.12)"/>
                  <stop offset="100%" stop-color="rgba(92,95,62,0.09)"/>
                </linearGradient>
                <filter id="nzPaperShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="rgb(92,95,62)" flood-opacity="0.13"/>
                </filter>
                <filter id="mapPinLabelLegible" x="-45%" y="-45%" width="190%" height="190%">
                  <feDropShadow in="SourceGraphic" dx="0" dy="0" stdDeviation="1.35" flood-color="#F7F6F3" flood-opacity="0.98" result="pinLabelHalo"/>
                  <feDropShadow in="SourceGraphic" dx="0" dy="1.25" stdDeviation="0.85" flood-color="rgb(92,95,62)" flood-opacity="0.14" result="pinLabelDrop"/>
                  <feMerge>
                    <feMergeNode in="pinLabelHalo"/>
                    <feMergeNode in="pinLabelDrop"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <use href="#nzLandmass" class="nz-coast" />
              <use href="#nzLandmass" class="nz-inner-glow" />
{pins_svg}
            </svg>
          </div>
        </div>
      </div>
    </section>

    <div class="tabs-wrap map-follow">
      <div class="wrap">
        <div class="tabs" role="tablist" aria-label="Filter by island">
          <button class="tab active" data-filter="north" role="tab" aria-selected="true">North Island</button>
          <button class="tab" data-filter="south" role="tab" aria-selected="false">South Island</button>
          <button class="tab" data-filter="stewart" role="tab" aria-selected="false">Stewart Island</button>
        </div>
      </div>
    </div>

    <section class="section collection" id="pod-collection">
      <div class="section-head">
        <div class="count" id="countLabel"></div>
      </div>

      <div class="grid" id="podsGrid">
        <a class="pod" id="pod-makoha" data-island="north" href="location/makoha/">
          <div class="media" style="background-image: url('../assets/img/makoha/makoha-purepod-native-forest-landscape-kerikeri.jpg');"></div>
          <div class="body">
            <span class="pill">Kerikeri</span>
            <h3>Mākōha</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-rewarewa" data-island="north" href="location/rewarewa/">
          <div class="media" style="background-image: url('../assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-stairs-muriwai-coast.jpg');"></div>
          <div class="body">
            <span class="pill">Muriwai Coast</span>
            <h3>Rewarewa</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-ruru" data-island="north" href="location/ruru/">
          <div class="media" style="background-image: url('../assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg'); background-position: center 25%;"></div>
          <div class="body">
            <span class="pill">Coromandel</span>
            <h3>Ruru</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-pamu" data-island="north" href="location/pamu/">
          <div class="media" style="background-image: url('../assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg');"></div>
          <div class="body">
            <span class="pill">Rotorua</span>
            <h3>Pāmu</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-matu" data-island="north" href="location/matu/">
          <div class="media" style="background-image: url('../assets/img/matu/matu-purepod-glass-cabin-sunset-exterior-waitomo.jpg');"></div>
          <div class="body">
            <span class="pill">Waitomo</span>
            <h3>Matū</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-kokomea" data-island="north" href="location/kokomea/">
          <div class="media" style="background-image: url('../assets/img/kokomea/kokomea-purepod-exterior-sunrise-landscape-kapiti-coast.jpg');"></div>
          <div class="body">
            <span class="pill">Kapiti Coast</span>
            <h3>Kokomea</h3>
            <div class="meta">North Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-manakau" data-island="south" href="location/manakau/">
          <div class="media" style="background-image: url('../assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg');"></div>
          <div class="body">
            <span class="pill">Kaikōura</span>
            <h3>Manakau</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-kahutara" data-island="south" href="location/kahutara/">
          <div class="media" style="background-image: url('../assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg'); background-position: center 80%;"></div>
          <div class="body">
            <span class="pill">Kaikōura</span>
            <h3>Kahutara</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-atatu" data-island="south" href="location/atatu/">
          <div class="media" style="background-image: url('../assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg');"></div>
          <div class="body">
            <span class="pill">Hurunui</span>
            <h3>Atatū</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-korimako" data-island="south" href="location/korimako/">
          <div class="media" style="background-image: url('../assets/img/kiromako/kiromako-purepod-forest-path-walking-trail-new-zealand.jpg');"></div>
          <div class="body">
            <span class="pill">Hurunui</span>
            <h3>Korimako</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-greystone" data-island="south" href="location/greystone/">
          <div class="media" style="background-image: url('../assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg');"></div>
          <div class="body">
            <span class="pill">Waipara</span>
            <h3>Greystone</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-pohue" data-island="south" href="location/pohue/">
          <div class="media" style="background-image: url('../assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg');"></div>
          <div class="body">
            <span class="pill">Banks Peninsula</span>
            <h3>Pōhue</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-haurapa" data-island="south" href="location/haurapa/">
          <div class="media" style="background-image: url('../assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg');"></div>
          <div class="body">
            <span class="pill">Central Otago</span>
            <h3>Haurapa</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-taima" data-island="south" href="location/taima/">
          <div class="media" style="background-image: url('../assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg');"></div>
          <div class="body">
            <span class="pill">Central Otago</span>
            <h3>Tāima</h3>
            <div class="meta">South Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-tokoeka" data-island="stewart" href="location/tokoeka/">
          <div class="media" style="background-image: url('../assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg');"></div>
          <div class="body">
            <span class="pill">Stewart Island</span>
            <h3>Tokoeka</h3>
            <div class="meta">Stewart Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
        <a class="pod" id="pod-hananui" data-island="stewart" href="location/hananui/">
          <div class="media" style="background-image: url('../assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg');"></div>
          <div class="body">
            <span class="pill">Stewart Island</span>
            <h3>Hananui</h3>
            <div class="meta">Stewart Island</div>
            <div class="spacer"></div>
            <span class="cta">View details →</span>
          </div>
        </a>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap">
      PurePods · Home · Pods · Experiences · My journey
    </div>
  </footer>

  <script>
    (function(){{
      var tabs = document.querySelectorAll(".tab");
      var cards = document.querySelectorAll(".pod");
      var countEl = document.getElementById("countLabel");
      var pins = document.querySelectorAll(".map-pin");

      function applyFilter(filter){{
        tabs.forEach(function(t){{
          var isActive = t.getAttribute("data-filter") === filter;
          t.classList.toggle("active", isActive);
          t.setAttribute("aria-selected", isActive ? "true" : "false");
        }});

        var visible = 0;
        cards.forEach(function(c){{
          var show = c.getAttribute("data-island") === filter;
          c.classList.toggle("hidden", !show);
          if(show) visible++;
        }});

        if(countEl) countEl.textContent = visible + " " + (visible === 1 ? "pod" : "pods");
      }}

      function scrollToPod(href){{
        var card = document.querySelector('.pod[href="' + href + '"]');
        if(card){{
          card.scrollIntoView({{ behavior: "smooth", block: "center" }});
        }}
      }}

      function onPinActivate(pin, ev){{
        if(ev) ev.preventDefault();
        var island = pin.getAttribute("data-island");
        var href = pin.getAttribute("data-href");
        if(island) applyFilter(island);
        if(href) setTimeout(function(){{ scrollToPod(href); }}, 90);
      }}

      tabs.forEach(function(t){{
        t.addEventListener("click", function(){{ applyFilter(t.getAttribute("data-filter")); }});
      }});

      pins.forEach(function(pin){{
        pin.addEventListener("click", function(ev){{ onPinActivate(pin, ev); }});
        pin.addEventListener("keydown", function(ev){{
          if(ev.key === "Enter" || ev.key === " "){{ onPinActivate(pin, ev); }}
        }});
      }});

      applyFilter("north");
    }})();
  </script>
</body>
</html>
"""

    OUT.write_text(html, encoding="utf-8")
    print("Wrote", OUT)


if __name__ == "__main__":
    main()
