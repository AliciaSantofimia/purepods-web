/**
 * Imágenes del grid /pods (EXPLORE_POD_CARDS). Mismas rutas en disco.
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
  "assets/img/makoha/makoha-purepod-native-forest-landscape-kerikeri.jpg",
  "assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-stairs-muriwai-coast.jpg",
  "assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg",
  "assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg",
  "assets/img/matu/matu-purepod-glass-cabin-sunset-exterior-waitomo.jpg",
  "assets/img/kokomea/kokomea-purepod-exterior-sunrise-landscape-kapiti-coast.jpg",
  "assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg",
  "assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg",
  "assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg",
  "assets/img/korimako/korimako-purepod-native-bush-walking-track-new-zealand.jpg",
  "assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg",
  "assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg",
  "assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg",
  "assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg",
  "assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg",
  "assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg",
];

async function optimizeFile(rel) {
  const abs = path.join(publicDir, rel);
  const input = await fs.readFile(abs);
  const before = input.length;
  const meta = await sharp(input, { limitInputPixels: false }).metadata();
  const out = await sharp(input, { limitInputPixels: false })
    .rotate()
    .resize({
      width: meta.width > MAX_WIDTH ? MAX_WIDTH : undefined,
      withoutEnlargement: true,
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();
  await fs.writeFile(abs, out);
  return { rel, before, after: out.length };
}

for (const rel of REL_PATHS) {
  try {
    const r = await optimizeFile(rel);
    console.log(
      `${rel}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB`
    );
  } catch (e) {
    console.error(rel, e.message);
  }
}
