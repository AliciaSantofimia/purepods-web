/**
 * Replay Cursor transcript tool calls up to (but not including) jsonl line 145
 * (the user message that starts "The current map still feels like a standard embedded map...").
 *
 * Source: agent-transcripts/b3558d88-cfbb-4155-a3ce-2eca04c0a0f2.jsonl
 *
 * Only touches experimental Explore+map paths under purepods-web.
 */
import fs from "node:fs";
import path from "node:path";

const TRANSCRIPT = path.resolve(
  "C:/Users/34615/.cursor/projects/c-Users-34615-Documents-purepods-web/agent-transcripts/b3558d88-cfbb-4155-a3ce-2eca04c0a0f2/b3558d88-cfbb-4155-a3ce-2eca04c0a0f2.jsonl",
);
const REPO_ROOT = path.resolve("c:/Users/34615/Documents/purepods-web");
/** 1-based: include transcript lines 1..(STOP_BEFORE_LINE-1). Default stops before user line 145. */
const STOP_BEFORE_LINE = Number(process.env.REPLAY_STOP_BEFORE ?? 145);

const ALLOW_REL_PREFIXES = [
  "components/pods/ExplorePageWithMapExperimental.module.css",
  "components/pods/ExploreNzMapPanelExperimental.tsx",
  "components/pods/ExplorePageWithMapClient.tsx",
  "app/pods/explore-map-experimental/page.tsx",
  "lib/exploreMapPinsExperimental.ts",
];

function toRepoRel(absPath) {
  const norm = absPath.replace(/\//g, "\\");
  const needle = "purepods-web\\";
  const i = norm.toLowerCase().indexOf(needle.toLowerCase());
  if (i < 0) return null;
  return norm.slice(i + needle.length).replace(/\\/g, "/");
}

function allowed(rel) {
  return ALLOW_REL_PREFIXES.some((p) => rel === p || rel.startsWith(`${p}/`));
}

function normalizeNewlines(s) {
  return String(s).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function applyStrReplace(content, oldString, newString) {
  if (content.includes(oldString)) {
    return { ok: true, out: content.split(oldString).join(newString) };
  }
  const oldLF = normalizeNewlines(oldString);
  const newLF = normalizeNewlines(newString);
  const conLF = normalizeNewlines(content);
  if (conLF.includes(oldLF)) {
    const outLF = conLF.split(oldLF).join(newLF);
    const out = content.includes("\r\n") ? outLF.replace(/\n/g, "\r\n") : outLF;
    return { ok: true, out };
  }
  return { ok: false, out: content };
}

const files = new Map();

function get(rel) {
  if (files.has(rel)) return files.get(rel);
  const abs = path.join(REPO_ROOT, rel);
  if (fs.existsSync(abs)) return fs.readFileSync(abs, "utf8");
  return null;
}

function set(rel, body) {
  files.set(rel, body);
}

const lines = fs.readFileSync(TRANSCRIPT, "utf8").trim().split("\n");

for (let idx = 0; idx < Math.min(STOP_BEFORE_LINE - 1, lines.length); idx++) {
  const row = JSON.parse(lines[idx]);
  const parts = row.message?.content;
  if (!Array.isArray(parts)) continue;

  for (const p of parts) {
    if (p.type !== "tool_use") continue;
    const { name, input } = p;
    if (!input?.path) continue;
    const rel = toRepoRel(input.path);
    if (!rel || !allowed(rel)) continue;

    if (name === "Write") {
      set(rel, input.contents);
      continue;
    }
    if (name === "StrReplace") {
      const cur = get(rel);
      if (cur == null) {
        console.error(`Line ${idx + 1}: StrReplace before file exists: ${rel}`);
        process.exit(1);
      }
      const { ok, out } = applyStrReplace(cur, input.old_string, input.new_string);
      if (!ok) {
        console.error(`Line ${idx + 1}: StrReplace MISS for ${rel}`);
        console.error("old_string head:", JSON.stringify(input.old_string.slice(0, 120)));
        process.exit(1);
      }
      set(rel, out);
    }
  }
}

for (const rel of files.keys()) {
  const abs = path.join(REPO_ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, files.get(rel), "utf8");
}

console.log(
  "Replay OK: restored",
  [...files.keys()].sort().join(", "),
  `from transcript lines 1–${STOP_BEFORE_LINE - 1} (before line ${STOP_BEFORE_LINE}).`,
);
