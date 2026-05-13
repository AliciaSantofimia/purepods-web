/** Dispatched on `document` while a location pod page is mounted; drives Header glass vs hero mode. */
export const LOCATION_POD_PAST_HERO_EVENT = "pp-location-pod-past-hero" as const;

/** Bottom of `#top` hero at or above this offset from viewport top → scrolled past hero (under fixed header). */
export const LOCATION_POD_NAV_OVERLAP_PX = 56;

export function getLocationPodPastHeroFromDom(): boolean {
  if (typeof document === "undefined") return false;
  const hero = document.getElementById("top");
  if (!hero) return false;
  return hero.getBoundingClientRect().bottom <= LOCATION_POD_NAV_OVERLAP_PX;
}
