import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, "..", "lib", "locationPods", "pages");

for (const f of fs.readdirSync(pagesDir)) {
  if (!f.endsWith(".tsx")) continue;
  const full = path.join(pagesDir, f);
  let c = fs.readFileSync(full, "utf8");
  c = c.replace(/\n\s*imagePosition="[^"]*"/g, "");
  fs.writeFileSync(full, c);
}

console.log("Removed redundant imagePosition from LocationHero calls");
