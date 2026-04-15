"""Extract New Zealand land polygons from Natural Earth GeoJSON and emit SVG paths.

Natural Earth's country polygon for NZL includes distant territories (Cook Islands, etc.).
We keep only rings whose bounding box intersects the main archipelago frame (incl. Stewart).
"""

from __future__ import annotations

import json
import sys
from pathlib import Path


# Geographic frame for the inhabited / main-pod archipelago (excludes Cook, Niue, etc.).
NZ_FRAME_MIN_LON = 165.0
NZ_FRAME_MAX_LON = 181.0
NZ_FRAME_MIN_LAT = -50.0
NZ_FRAME_MAX_LAT = -33.0


def ring_bbox(ring: list[list[float]]) -> tuple[float, float, float, float]:
    lons = [p[0] for p in ring]
    lats = [p[1] for p in ring]
    return min(lons), max(lons), min(lats), max(lats)


def bbox_intersects_frame(b: tuple[float, float, float, float]) -> bool:
    min_lon, max_lon, min_lat, max_lat = b
    return not (
        max_lon < NZ_FRAME_MIN_LON
        or min_lon > NZ_FRAME_MAX_LON
        or max_lat < NZ_FRAME_MIN_LAT
        or min_lat > NZ_FRAME_MAX_LAT
    )


def rings_from_geojson(geom: dict) -> list[list[list[float]]]:
    t = geom["type"]
    coords = geom["coordinates"]
    if t == "Polygon":
        return [coords[0]]
    if t == "MultiPolygon":
        out: list[list[list[float]]] = []
        for poly in coords:
            ring = poly[0]
            if bbox_intersects_frame(ring_bbox(ring)):
                out.append(ring)
        return out
    raise ValueError(f"Unsupported geometry type: {t}")


def project(
    lon: float,
    lat: float,
    pad: float,
    w: float,
    h: float,
    min_lon: float,
    max_lon: float,
    min_lat: float,
    max_lat: float,
) -> tuple[float, float]:
    """Equirectangular projection fitted to viewBox (SVG y grows down)."""
    x = pad + (lon - min_lon) / (max_lon - min_lon) * (w - 2 * pad)
    y = pad + (max_lat - lat) / (max_lat - min_lat) * (h - 2 * pad)
    return x, y


def ring_to_path(ring: list[list[float]], **kw: float) -> str:
    if not ring:
        return ""
    parts: list[str] = []
    for i, (lon, lat) in enumerate(ring):
        x, y = project(lon, lat, **kw)
        cmd = "M" if i == 0 else "L"
        parts.append(f"{cmd}{x:.2f} {y:.2f}")
    parts.append("Z")
    return "".join(parts)


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    src = root / ".tmp_ne50.json"
    if not src.exists():
        src = root / ".tmp_ne110.json"
    if not src.exists():
        print("Missing .tmp_ne50.json or .tmp_ne110.json — download Natural Earth geojson", file=sys.stderr)
        return 1

    data = json.loads(src.read_text(encoding="utf-8"))
    nz = [
        f
        for f in data["features"]
        if f["properties"].get("ADMIN") == "New Zealand" or f["properties"].get("ISO_A3") == "NZL"
    ]
    if not nz:
        print("New Zealand feature not found", file=sys.stderr)
        return 1

    geom = nz[0]["geometry"]
    rings = rings_from_geojson(geom)
    if not rings:
        print("No rings intersecting NZ frame after filtering", file=sys.stderr)
        return 1

    all_lons = [lon for r in rings for lon, _ in r]
    all_lats = [lat for r in rings for _, lat in r]
    min_lon, max_lon = min(all_lons), max(all_lons)
    min_lat, max_lat = min(all_lats), max(all_lats)

    lon_margin = (max_lon - min_lon) * 0.035
    lat_margin = (max_lat - min_lat) * 0.055
    min_lon -= lon_margin
    max_lon += lon_margin
    min_lat -= lat_margin
    max_lat += lat_margin

    w, h = 1000.0, 1400.0
    pad = 26.0

    kw = dict(pad=pad, w=w, h=h, min_lon=min_lon, max_lon=max_lon, min_lat=min_lat, max_lat=max_lat)
    paths = [ring_to_path(ring, **kw) for ring in rings]
    combined = " ".join(paths)

    src_name = src.name
    print(f"<!-- Natural Earth admin-0 ({src_name}), New Zealand (ADMIN={nz[0]['properties'].get('ADMIN')}). -->")
    print(
        f"<!-- Rings filtered to bbox intersecting mainland archipelago (excludes Cook/Niue/Chatham in this view). -->"
    )
    print(
        f"<!-- Projected equirectangular to viewBox 0 0 {int(w)} {int(h)}; bounds lon [{min_lon:.4f},{max_lon:.4f}] lat [{min_lat:.4f},{max_lat:.4f}] -->"
    )
    print(combined)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
