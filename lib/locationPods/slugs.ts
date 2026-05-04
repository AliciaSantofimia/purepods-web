export const LOCATION_POD_SLUGS = [
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
] as const;

export type LocationPodSlug = (typeof LOCATION_POD_SLUGS)[number];

/**
 * Pods that have their own `app/location/<slug>/page.tsx`.
 * They must be omitted from `app/location/[slug]/generateStaticParams` so Next never
 * registers two static routes for the same URL.
 */
export const LOCATION_POD_SLUGS_WITH_DEDICATED_APP_ROUTE = ["ruru"] as const;

const dedicatedSlugSet = new Set<string>(
  LOCATION_POD_SLUGS_WITH_DEDICATED_APP_ROUTE,
);

/** Slugs pre-rendered via `app/location/[slug]/page.tsx` (excludes dedicated routes only). */
export function getLocationPodSlugsForDynamicSegmentStaticParams(): {
  slug: LocationPodSlug;
}[] {
  return LOCATION_POD_SLUGS.filter((slug) => !dedicatedSlugSet.has(slug)).map(
    (slug) => ({ slug }),
  );
}

export function isLocationPodSlug(s: string): s is LocationPodSlug {
  return (LOCATION_POD_SLUGS as readonly string[]).includes(s);
}
