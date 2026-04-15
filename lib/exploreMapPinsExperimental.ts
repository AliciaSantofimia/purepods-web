import type { ExplorePodCard } from "@/lib/podsExploreData";

/**
 * Experimental adapter — geographic pins for Explore map variant only.
 * Coordinates are approximate layout points; refine with precise POIs when available.
 */
const PIN_BY_SLUG: Record<string, { lat: number; lon: number }> = {
  makoha: { lat: -35.22, lon: 173.95 },
  rewarewa: { lat: -36.82, lon: 174.52 },
  ruru: { lat: -36.76, lon: 175.5 },
  pamu: { lat: -38.14, lon: 176.25 },
  matu: { lat: -38.26, lon: 175.1 },
  kokomea: { lat: -40.85, lon: 175.08 },
  manakau: { lat: -42.4, lon: 173.68 },
  kahutara: { lat: -42.35, lon: 173.55 },
  atatu: { lat: -42.88, lon: 173.35 },
  korimako: { lat: -42.82, lon: 172.62 },
  greystone: { lat: -43.05, lon: 172.75 },
  pohue: { lat: -43.75, lon: 172.65 },
  haurapa: { lat: -45.18, lon: 169.32 },
  taima: { lat: -44.98, lon: 169.15 },
  tokoeka: { lat: -47.02, lon: 168.05 },
  hananui: { lat: -46.92, lon: 168.12 },
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
