/**
 * Comprime imágenes usadas en /experiences (índice). Mismas rutas, sin cambiar URLs.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const MAX_WIDTH = 2560;
const JPEG_QUALITY = 84;

const REL_PATHS = [
  "assets/img/purepods-logo-new-zealand.jpg",
  "assets/img/experiences/night-falls/dark-sky-purepod.jpg",
  "assets/img/experiences/romantic/purepods-romantic-getaway-bedroom-fireplace-night.jpg",
  "assets/img/experiences/journeys/new-zealand-native-forest-sunrise-landscape.jpg",
  "assets/img/experiences/experiences/new-zealand-adventure-wildlife-kayaking.jpg",
  "assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
  "assets/img/experiences/experiences/rotorua-relax-coastal-geothermal-lake.jpg",
  "assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
];

async function optimizeFile(rel) {
  const abs = path.join(publicDir, rel);
  const input = await fs.readFile(abs);
  const before = input.length;
  const meta = await sharp(input, { limitInputPixels: false }).metadata();
  const pipeline = sharp(input, { limitInputPixels: false }).rotate();
  const ext = path.extname(rel).toLowerCase();
  let out;
  if (ext === ".png") {
    out = await pipeline
      .resize({
        width: meta.width > MAX_WIDTH ? MAX_WIDTH : undefined,
        withoutEnlargement: true,
      })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
  } else {
    out = await pipeline
      .resize({
        width: meta.width > MAX_WIDTH ? MAX_WIDTH : undefined,
        withoutEnlargement: true,
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toBuffer();
  }
  await fs.writeFile(abs, out);
  const after = out.length;
  return { rel, before, after, w: meta.width, h: meta.height };
}

for (const rel of REL_PATHS) {
  try {
    const r = await optimizeFile(rel);
    console.log(
      `${rel}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB (${r.w}×${r.h})`
    );
  } catch (e) {
    console.error(rel, e.message);
  }
}
