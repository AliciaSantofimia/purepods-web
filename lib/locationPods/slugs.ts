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

export function isLocationPodSlug(s: string): s is LocationPodSlug {
  return (LOCATION_POD_SLUGS as readonly string[]).includes(s);
}
