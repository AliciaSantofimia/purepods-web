import { EXPERIENCE_SLUGS, type ExperienceSlug, isExperienceSlug } from "./index";

export type ExperienceMegaEntry = {
  slug: ExperienceSlug;
  href: string;
  title: string;
  subtitle: string;
};

/** URL segments that correspond to a published experience (e.g. alternate test routes). */
const PATH_SLUG_ALIASES: Record<string, ExperienceSlug> = {};

/** Preferred editorial order; any slug in `EXPERIENCE_SLUGS` not listed here is appended after. */
const DISPLAY_ORDER: ExperienceSlug[] = [
  "relax-coastal",
  "romance",
  "adventure-wildlife",
  "stargazing",
  "culture",
  "journey",
  "wine-dine",
];

function megaSlugOrder(): ExperienceSlug[] {
  const known = DISPLAY_ORDER.filter((s) => EXPERIENCE_SLUGS.includes(s));
  const extras = EXPERIENCE_SLUGS.filter((s) => !DISPLAY_ORDER.includes(s));
  return [...known, ...extras];
}

const MEGA_COPY: Record<ExperienceSlug, { title: string; subtitle: string }> = {
  "relax-coastal": {
    title: "Relax & Coastal",
    subtitle: "Geothermal waters, quiet coast & restorative nature",
  },
  romance: {
    title: "Romantic",
    subtitle: "Intimate glass-cabin retreats for two",
  },
  "adventure-wildlife": {
    title: "Wild & Adventure",
    subtitle: "Wildlife, coastlines & outdoor energy",
  },
  stargazing: {
    title: "Night Falls",
    subtitle: "Dark skies, moon phases & stargazing",
  },
  culture: {
    title: "Culture",
    subtitle: "Heritage, living stories & craft",
  },
  journey: {
    title: "Journey",
    subtitle: "Walking, hiking & scenic routes across New Zealand",
  },
  "wine-dine": {
    title: "Wine & Dine",
    subtitle: "Vineyards, tastings & slow regional dining",
  },
};

/** Full mega-menu list (canonical `/experiences/{slug}`). */
export const EXPERIENCE_MEGA_ENTRIES: ExperienceMegaEntry[] = megaSlugOrder().map((slug) => ({
  slug,
  href: `/experiences/${slug}`,
  ...MEGA_COPY[slug],
}));

/**
 * Resolves which experience slug the user is viewing from the pathname.
 * Returns null on non-experience routes or unknown segments.
 */
export function experienceSlugFromPathname(pathname: string | null | undefined): ExperienceSlug | null {
  if (!pathname || !pathname.startsWith("/experiences/")) return null;
  const segment = pathname.slice("/experiences/".length).split("/")[0];
  if (!segment) return null;
  const resolved = PATH_SLUG_ALIASES[segment] ?? segment;
  return isExperienceSlug(resolved) ? resolved : null;
}
