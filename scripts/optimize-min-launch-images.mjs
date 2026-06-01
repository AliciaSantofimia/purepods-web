/**
 * Minimal pre-launch image optimization (Phases A + B).
 * Backs up originals to `.image-backups/min-launch/` before overwriting.
 *
 * Usage: node scripts/optimize-min-launch-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const BACKUP_ROOT = path.resolve(".image-backups/min-launch");
const MANIFEST_PATH = path.resolve(
  "docs/image-optimization/min-launch-manifest.json",
);

/** @type {{ phase: string; rel: string; maxWidth: number; quality: number }[]} */
const TARGETS = [
  {
    phase: "A",
    rel: "assets/img/pohue/pohue-purepod-lakeside-glass-cabin-sunset-retreat-new-zealand.jpg",
    maxWidth: 2560,
    quality: 84,
  },
  {
    phase: "A",
    rel: "assets/img/kahutara/kahutara-purepod-sunrise-over-river-valley.jpg",
    maxWidth: 2560,
    quality: 84,
  },
  {
    phase: "A",
    rel: "assets/img/manakau/manakau-purepod-sunrise-over-mountain-landscape.jpg",
    maxWidth: 2560,
    quality: 84,
  },
  {
    phase: "B",
    rel: "assets/img/makoha/purepod-makoha-aerial-view-native-forest-new-zealand.jpg",
    maxWidth: 1200,
    quality: 82,
  },
  {
    phase: "B",
    rel: "assets/img/kiromako/korimako-purepod-glass-cabin-native-forest-aerial-new-zealand.jpg",
    maxWidth: 1200,
    quality: 82,
  },
];

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function backupFile(absPath, rel) {
  const dest = path.join(BACKUP_ROOT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(absPath, dest);
  }
}

const manifest = {
  generatedAt: new Date().toISOString(),
  backupDir: ".image-backups/min-launch/",
  entries: [],
};

for (const target of TARGETS) {
  const abs = path.join(ROOT, target.rel);
  if (!fs.existsSync(abs)) {
    console.error("Missing:", target.rel);
    process.exit(1);
  }

  const beforeBytes = fs.statSync(abs).size;
  const beforeMeta = await sharp(abs).metadata();

  backupFile(abs, target.rel);

  const pipeline = sharp(abs).rotate().resize({
    width: target.maxWidth,
    withoutEnlargement: true,
    fit: "inside",
  });

  const buffer = await pipeline
    .jpeg({ quality: target.quality, progressive: true, mozjpeg: true })
    .toBuffer();

  const afterMeta = await sharp(buffer).metadata();
  const tmpPath = `${abs}.optimize.tmp`;
  fs.writeFileSync(tmpPath, buffer);
  fs.renameSync(tmpPath, abs);
  const afterBytes = buffer.length;

  const entry = {
    phase: target.phase,
    path: `public/${target.rel.replace(/\\/g, "/")}`,
    before: {
      bytes: beforeBytes,
      sizeHuman: fmt(beforeBytes),
      width: beforeMeta.width,
      height: beforeMeta.height,
    },
    after: {
      bytes: afterBytes,
      sizeHuman: fmt(afterBytes),
      width: afterMeta.width,
      height: afterMeta.height,
      quality: target.quality,
      maxWidth: target.maxWidth,
    },
    savedBytes: beforeBytes - afterBytes,
    savedPercent: Number(
      (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1),
    ),
  };
  manifest.entries.push(entry);

  console.log(
    `[${target.phase}] ${path.basename(target.rel)}: ${fmt(beforeBytes)} → ${fmt(afterBytes)} (${beforeMeta.width}x${beforeMeta.height} → ${afterMeta.width}x${afterMeta.height})`,
  );
}

const totalBefore = manifest.entries.reduce((s, e) => s + e.before.bytes, 0);
const totalAfter = manifest.entries.reduce((s, e) => s + e.after.bytes, 0);
manifest.summary = {
  totalBeforeBytes: totalBefore,
  totalAfterBytes: totalAfter,
  totalBeforeHuman: fmt(totalBefore),
  totalAfterHuman: fmt(totalAfter),
  savedBytes: totalBefore - totalAfter,
  savedHuman: fmt(totalBefore - totalAfter),
  savedPercent: Number((((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)),
};

fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
console.log("\nSummary:", manifest.summary.totalBeforeHuman, "→", manifest.summary.totalAfterHuman);
console.log("Manifest:", MANIFEST_PATH);
