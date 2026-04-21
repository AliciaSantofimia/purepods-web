import type { ExplorePodCard } from "@/lib/podsExploreData";

/**
 * Experimental adapter — geographic pins for Explore map variant only.
 */
const PIN_BY_SLUG: Record<string, { lat: number; lon: number }> = {
  matu: { lat: -38.2615, lon: 175.1123 },
  makoha: { lat: -35.204, lon: 173.9485 },
  ruru: { lat: -37.4208, lon: 175.762 },
  pamu: { lat: -38.1825, lon: 176.252 },
  rewarewa: { lat: -36.824, lon: 174.4195 },
  tokoeka: { lat: -46.8975, lon: 168.129 },
  hananui: { lat: -46.9005, lon: 168.1305 },
  haurapa: { lat: -45.05, lon: 169.21 },
  pohue: { lat: -43.733, lon: 172.866 },
  greystone: { lat: -43.08, lon: 172.76 },
  korimako: { lat: -42.85, lon: 173.2 },
  atatu: { lat: -42.855, lon: 173.205 },
  kahutara: { lat: -42.4, lon: 173.68 },
  manakau: { lat: -42.45, lon: 173.55 },
  kokomea: { lat: -40.81559036922355, lon: 175.10623434237164 },
  taima: { lat: -45.068021549825716, lon: 169.0647641734164 },
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
