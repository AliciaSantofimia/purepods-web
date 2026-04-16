import { isExperienceSlug, type ExperienceSlug } from "./index";
import { EXPERIENCE_MEGA_ENTRIES } from "./experienceNavMega";

export type ExperienceFromNav = {
  href: string;
  label: string;
};

/** Resolve `?from=` slug to editorial title + canonical experience URL. */
export function getExperienceFromNav(slug: string | undefined | null): ExperienceFromNav | null {
  if (slug == null || slug === "") return null;
  if (!isExperienceSlug(slug)) return null;
  const entry = EXPERIENCE_MEGA_ENTRIES.find((e) => e.slug === slug);
  if (!entry) return null;
  return { href: entry.href, label: entry.title };
}

/** Append or merge `from=<experienceSlug>` on internal `/location/...` links. */
export function withExperienceFromParam(path: string, experienceSlug: ExperienceSlug): string {
  const q = path.indexOf("?");
  const base = q === -1 ? path : path.slice(0, q);
  const params = new URLSearchParams(q === -1 ? "" : path.slice(q + 1));
  params.set("from", experienceSlug);
  const tail = params.toString();
  return tail ? `${base}?${tail}` : base;
}
