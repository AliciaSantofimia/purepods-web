/**
 * Extrae rutas /assets/img/... de lib/locationPods/pages/*.tsx y recompresa en public/.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pagesDir = path.join(root, "lib", "locationPods", "pages");
const publicDir = path.join(root, "public");

const MAX_WIDTH = 2560;
const JPEG_QUALITY = 84;

const ASSET_RE = /"(\/assets\/img\/[^"]+)"/g;

async function collectPaths() {
  const names = await fs.readdir(pagesDir);
  const set = new Set();
  for (const name of names) {
    if (!name.endsWith(".tsx")) continue;
    const text = await fs.readFile(path.join(pagesDir, name), "utf8");
    let m;
    ASSET_RE.lastIndex = 0;
    while ((m = ASSET_RE.exec(text)) !== null) {
      const url = m[1];
      if (url.startsWith("http")) continue;
      set.add(url.slice(1));
    }
  }
  return [...set].sort();
}

async function optimizeFile(rel) {
  const abs = path.join(publicDir, rel);
  let stat;
  try {
    stat = await fs.stat(abs);
  } catch {
    console.warn("skip missing:", rel);
    return null;
  }
  if (!stat.isFile()) return null;

  const input = await fs.readFile(abs);
  const before = input.length;
  const ext = path.extname(rel).toLowerCase();
  const meta = await sharp(input, { limitInputPixels: false }).metadata();

  const resizeOpts = {
    width: meta.width > MAX_WIDTH ? MAX_WIDTH : undefined,
    withoutEnlargement: true,
  };

  let pipeline = sharp(input, { limitInputPixels: false }).rotate().resize(resizeOpts);

  let out;
  if (ext === ".png") {
    out = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
  } else if (ext === ".webp") {
    out = await pipeline.webp({ quality: 86, effort: 4 }).toBuffer();
  } else if (ext === ".jpg" || ext === ".jpeg") {
    out = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toBuffer();
  } else {
    console.warn("skip unsupported ext:", rel);
    return null;
  }

  await fs.writeFile(abs, out);
  return { rel, before, after: out.length };
}

const rels = await collectPaths();
let ok = 0;
for (const rel of rels) {
  try {
    const r = await optimizeFile(rel);
    if (r) {
      ok++;
      console.log(
        `${r.rel}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB`
      );
    }
  } catch (e) {
    console.error(rel, e.message);
  }
}
console.log(`\nProcessed ${ok} / ${rels.length} paths.`);
