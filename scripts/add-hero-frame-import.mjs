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
  if (c.includes("heroFrameFor")) continue;

  c = c.replace(
    `import type { Metadata } from "next";`,
    `import type { Metadata } from "next";\nimport { heroFrameFor } from "@/lib/locationPods/heroReference";`,
  );

  c = c.replace(
    "<LocationHero\n",
    `<LocationHero\n          {...heroFrameFor("${slug}")}\n`,
  );

  fs.writeFileSync(full, c);
}

console.log("heroFrameFor added to pod pages");
