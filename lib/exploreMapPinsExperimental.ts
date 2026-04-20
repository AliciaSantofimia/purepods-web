import type { ExplorePodCard } from "@/lib/podsExploreData";

/**
 * Experimental adapter — geographic pins for Explore map variant only.
 * Stewart Island (tokoeka, hananui): exact WGS84 from property source of truth.
 */
const PIN_BY_SLUG: Record<string, { lat: number; lon: number }> = {
  makoha: { lat: -35.2283, lon: 173.9509 },
  rewarewa: { lat: -36.836, lon: 174.504 },
  ruru: { lat: -36.844, lon: 175.508 },
  pamu: { lat: -38.1368, lon: 176.2497 },
  matu: { lat: -38.2609, lon: 175.1035 },
  kokomea: { lat: -40.914, lon: 174.988 },
  manakau: { lat: -42.4, lon: 173.68 },
  kahutara: { lat: -42.45, lon: 173.72 },
  atatu: { lat: -42.65, lon: 172.76 },
  korimako: { lat: -42.58, lon: 172.88 },
  greystone: { lat: -43.15, lon: 172.75 },
  pohue: { lat: -43.803, lon: 172.967 },
  haurapa: { lat: -45.038, lon: 169.2 },
  taima: { lat: -45.32, lon: 169.15 },
  tokoeka: { lat: -46.866629, lon: 168.124813 },
  hananui: { lat: -46.866759, lon: 168.124998 },
};

export type ExplorePodWithMapPin = ExplorePodCard & { lat: number; lon: number };

export function attachMapPinsToExplorePods(pods: ExplorePodCard[]): ExplorePodWithMapPin[] {
  return pods.map((p) => {
    const pin = PIN_BY_SLUG[p.slug];
    if (!pin) {
      console.warn(`[exploreMapPinsExperimental] No coordinates for slug "${p.slug}" — map marker skipped in UI.`);
      return { ...p, lat: NaN, lon: NaN };
    }
    return { ...p, ...pin };
  });
}

export function hasValidMapPin(pod: ExplorePodWithMapPin): boolean {
  return Number.isFinite(pod.lat) && Number.isFinite(pod.lon);
}
