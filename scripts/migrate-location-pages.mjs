import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const slugs = [
  "atatu",
  "greystone",
  "makoha",
  "hananui",
  "kahutara",
  "korimako",
  "manakau",
  "tokoeka",
  "kokomea",
  "taima",
  "haurapa",
  "rewarewa",
  "pohue",
  "pamu",
  "matu",
  "ruru",
];

const outDir = path.join(root, "lib", "locationPods", "pages");
fs.mkdirSync(outDir, { recursive: true });

for (const slug of slugs) {
  const src = path.join(root, "app", "location", slug, "page.tsx");
  let c = fs.readFileSync(src, "utf8");
  c = c.replace(
    `import styles from "./page.module.css";`,
    `import styles from "@/app/location/locationLayout.module.css";`,
  );
  c = c.replace("export const metadata", "export const podMetadata");
  c = c.replace(/export default function \w+\(\)/, "export function PodView()");
  const dest = path.join(outDir, `${slug}.tsx`);
  fs.writeFileSync(dest, c);
}

console.log("Wrote", slugs.length, "files to lib/locationPods/pages/");
