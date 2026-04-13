import type { LocationPodSlug } from "./slugs";

/** Per-pod Newbook `force_site_id` — from reference location HTML / existing pages. */
export const LOCATION_POD_BOOKING: Record<LocationPodSlug, string> = {
  atatu: "https://purepods.com/booking/?force_site_id=5",
  greystone: "https://purepods.com/booking/?force_site_id=3",
  makoha: "https://purepods.com/booking/?force_site_id=14",
  hananui: "https://purepods.com/booking/?force_site_id=12",
  kahutara: "https://purepods.com/booking/?force_site_id=1",
  korimako: "https://purepods.com/booking/?force_site_id=6",
  manakau: "https://purepods.com/booking/?force_site_id=2",
  tokoeka: "https://purepods.com/booking/?force_site_id=11",
  kokomea: "https://purepods.com/booking/?force_site_id=10",
  taima: "https://purepods.com/booking/?force_site_id=13",
  haurapa: "https://purepods.com/booking/?force_site_id=9",
  rewarewa: "https://purepods.com/booking/?force_site_id=15",
  pohue: "https://purepods.com/booking/?force_site_id=4",
  pamu: "https://purepods.com/booking/?force_site_id=8",
  matu: "https://purepods.com/booking/?force_site_id=16",
  ruru: "https://purepods.com/booking/?force_site_id=7",
};

export function bookingUrlForLocationSlug(slug: string): string | undefined {
  if (slug in LOCATION_POD_BOOKING) {
    return LOCATION_POD_BOOKING[slug as LocationPodSlug];
  }
  return undefined;
}
