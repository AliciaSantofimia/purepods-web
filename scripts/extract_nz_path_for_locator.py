"""Write reference-html/assets/nz-locator-compact.svg from explore-nz-editorial-map.html path."""
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
src = root / "reference-html" / "explore-nz-editorial-map.html"
out = root / "reference-html" / "assets" / "nz-locator-compact.svg"
if not src.exists():
    raise SystemExit(f"Missing {src}")
text = src.read_text(encoding="utf-8")
m = re.search(r'<path id="nzLandmass" d="([^"]+)"', text)
if not m:
    raise SystemExit("nzLandmass path not found")
d = m.group(1)
out.parent.mkdir(parents=True, exist_ok=True)
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1400" aria-hidden="true">
  <style><![CDATA[
    .land {{ fill: rgba(255,255,255,.92); stroke: rgba(92,95,62,.22); stroke-width: 1.1; vector-effect: non-scaling-stroke; }}
  ]]></style>
  <path class="land" d="{d}"/>
</svg>'''
out.write_text(svg, encoding="utf-8")
print("Wrote", out)
