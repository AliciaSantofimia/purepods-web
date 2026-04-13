import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, "..", "lib", "locationPods", "pages");

for (const f of fs.readdirSync(pagesDir)) {
  if (!f.endsWith(".tsx")) continue;
  const slug = f.replace(/\.tsx$/, "");
  const full = path.join(pagesDir, f);
  let c = fs.readFileSync(full, "utf8");
  const needle = `{...heroFrameFor("${slug}")}`;
  if (c.includes(needle)) continue;

  c = c.replace(
    new RegExp(`<LocationHero\\s*\\r?\\n`),
    `<LocationHero\n          ${needle}\n`,
  );
  fs.writeFileSync(full, c);
}

console.log("Inserted heroFrameFor spreads (CRLF-safe)");
