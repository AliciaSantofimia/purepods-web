/**
 * Redimensiona y recompresa imágenes referenciadas por la HOME.
 * Sobrescribe el archivo manteniendo la misma ruta (no rompe URLs).
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

/** Rutas bajo /public usadas en app/page.tsx (HOME) */
const REL_PATHS = [
  "assets/img/LogoPCblancosinfondo.png",
  "assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg",
  "assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg",
  "assets/img/atatu/atatu-purepod-glass-cabin-night-stars-new-zealand.jpg",
  "assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg",
  "assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg",
  "assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg",
  "assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg",
  "assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg",
  "assets/img/rewarewa/rewarewa-purepod-aerial-landscape-muriwai-coast.jpg",
  "assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg",
  "assets/img/kokomea/kokomea-purepod-aerial-countryside-landscape-kapiti-coast.jpg",
  "assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg",
  "assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg",
  "assets/img/kiromako/kiromako-purepod-aerial-coastal-landscape-new-zealand.jpg",
  "assets/img/greystone/greystone-purepod-aerial-vineyard-landscape-waipara.jpg",
  "assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg",
  "assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg",
  "assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg",
  "assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg",
  "assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg",
  "assets/img/experiences/night-falls/purepods-dark-sky-stargazing-glass-cabin-new-zealand.jpg",
  "assets/img/experiences/romantic/purepods-romantic-getaway-stargazing-bed-glass-roof.jpg",
  "assets/img/experiences/adventure-wildlife/kaikoura-whale-watch-sperm-whale-coast-new-zealand.jpg",
  "assets/img/experiences/culture/ohinetahi-gardens-lyttelton-harbour-christchurch-new-zealand-historic-estate.jpg",
  "assets/img/experiences/journeys/redwoods-treewalk-rotorua.jpg",
  "assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg",
  "assets/img/experiences/journeys/romantic-picnic-wine-cheese-board-nature-experience.jpg",
];

async function optimizeFile(rel) {
  const abs = path.join(publicDir, rel);
  const input = await fs.readFile(abs);
  const before = input.length;
  const meta = await sharp(input, { limitInputPixels: false }).metadata();
  let pipeline = sharp(input, { limitInputPixels: false }).rotate();

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
  return {
    rel,
    before,
    after,
    w: meta.width,
    h: meta.height,
  };
}

const unique = [...new Set(REL_PATHS)];

const rows = [];
for (const rel of unique) {
  try {
    const r = await optimizeFile(rel);
    rows.push(r);
    console.log(
      `${rel}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB (${r.w}×${r.h})`
    );
  } catch (e) {
    console.error(rel, e.message);
  }
}

const logo = rows.find((r) => r.rel.endsWith("LogoPCblancosinfondo.png"));
if (logo) {
  console.log("\nLogo dimensions for Next/Image:", logo.w, logo.h);
}
