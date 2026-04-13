/**
 * Recompresa imágenes bajo public/assets/img/experiences y .../stay.
 * JPEG/WebP: lado largo max 2560, calidad ~82. PNG: fit inside 2560, PNG nivel 9.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const MAX = 2560;
const JPEG_Q = 82;

const roots = [
  path.join(publicDir, "assets", "img", "experiences"),
  path.join(publicDir, "assets", "img", "stay"),
];

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile()) yield full;
  }
}

async function optimizeFile(abs) {
  const extRaw = path.extname(abs);
  const ext = extRaw.toLowerCase();
  if (![".jpg", ".jpeg", ".webp", ".png"].includes(ext)) return null;

  const input = await fs.readFile(abs);
  const before = input.length;
  const meta = await sharp(input, { limitInputPixels: false }).metadata();

  const resizeInside = {
    width: meta.width > MAX || meta.height > MAX ? MAX : undefined,
    height: meta.width > MAX || meta.height > MAX ? MAX : undefined,
    fit: "inside",
    withoutEnlargement: true,
  };

  let pipeline = sharp(input, { limitInputPixels: false }).rotate();

  let out;
  if (ext === ".png") {
    out = await pipeline
      .resize(resizeInside)
      .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 8 })
      .toBuffer();
  } else if (ext === ".webp") {
    out = await pipeline
      .resize(resizeInside)
      .webp({ quality: JPEG_Q, effort: 5 })
      .toBuffer();
  } else {
    out = await pipeline
      .resize(resizeInside)
      .jpeg({ quality: JPEG_Q, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toBuffer();
  }

  if (out.length > before * 1.03 && before < 400_000) {
    return { abs, skipped: true, before, after: before };
  }

  await fs.writeFile(abs, out);
  return { abs, skipped: false, before, after: out.length };
}

let n = 0;
for (const base of roots) {
  for await (const abs of walk(base)) {
    try {
      const r = await optimizeFile(abs);
      if (!r) continue;
      n++;
      const rel = path.relative(publicDir, abs);
      if (r.skipped) console.log(`skip ${rel}`);
      else
        console.log(
          `${rel}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB`
        );
    } catch (e) {
      console.error(path.relative(publicDir, abs), e.message);
    }
  }
}
console.log(`\nDone, touched: ${n} files.`);
