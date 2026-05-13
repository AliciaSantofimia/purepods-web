/**
 * Pod grid + coordinates for the `/pods` choose-your-place map (Leaflet).
 * Card copy/assets mirror production `EXPLORE_POD_CARDS`; lat/lng come from the experiment spec.
 */

export type ChooseMapRegion = "north" | "south" | "stewart";

/** Normalises `?region=` from `/pods` (invalid or missing → north). */
export function parseChooseMapRegionParam(
  value: string | null | undefined,
): ChooseMapRegion {
  if (value === "north" || value === "south" || value === "stewart") {
    return value;
  }
  return "north";
}

export type ChooseMapPod = {
  slug: string;
  href: string;
  filter: ChooseMapRegion;
  pill: string;
  title: string;
  islandLine: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  /** Geographic reference (spec / real location). */
  lat: number;
  lng: number;
  /**
   * Pin position used only by the `/pods` Leaflet map. Omit to use `lat`/`lng`.
   * Lets nearby pods read as two distinct markers without changing canonical coords.
   */
  mapLat?: number;
  mapLng?: number;
};

/** Lat/lng for map markers and fitBounds on `/pods` (visual position when set). */
export function chooseMapPinLatLng(pod: ChooseMapPod): { lat: number; lng: number } {
  return {
    lat: pod.mapLat ?? pod.lat,
    lng: pod.mapLng ?? pod.lng,
  };
}

/**
 * Pod list for the choose-your-place UI. `lat`/`lng` stay canonical; `mapLat`/`mapLng`
 * apply only on the map when pins would otherwise stack at the default South Island zoom.
 */
export const CHOOSE_MAP_EXPERIMENTAL_PODS: ChooseMapPod[] = [
  {
    slug: "makoha",
    href: "/location/makoha",
    filter: "north",
    pill: "Kerikeri",
    title: "Mākōha",
    islandLine: "North Island",
    imageSrc:
      "/assets/img/makoha/purepod-makoha-aerial-view-native-forest-new-zealand.jpg",
    imageAlt:
      "Aerial view of Mākōha PurePod glass cabin in native forest at golden hour near Kerikeri, New Zealand",
    imagePosition: "50% 42%",
    lat: -35.204,
    lng: 173.9485,
  },
  {
    slug: "rewarewa",
    href: "/location/rewarewa",
    filter: "north",
    pill: "Muriwai Coast",
    title: "Rewarewa",
    islandLine: "North Island",
    imageSrc:
      "/assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-stairs-muriwai-coast.jpg",
    imageAlt: "Rewarewa PurePod glass cabin exterior on the Muriwai Coast",
    lat: -36.824,
    lng: 174.4195,
  },
  {
    slug: "ruru",
    href: "/location/ruru",
    filter: "north",
    pill: "Coromandel",
    title: "Ruru",
    islandLine: "North Island",
    imageSrc: "/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg",
    imageAlt: "Ruru PurePod aerial view on the Coromandel",
    imagePosition: "center 25%",
    lat: -37.4208,
    lng: 175.762,
  },
  {
    slug: "pamu",
    href: "/location/pamu",
    filter: "north",
    pill: "Rotorua",
    title: "Pāmu",
    islandLine: "North Island",
    imageSrc: "/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg",
    imageAlt: "Pāmu PurePod glass cabin exterior in Rotorua landscape",
    lat: -38.1825,
    lng: 176.252,
  },
  {
    slug: "matu",
    href: "/location/matu",
    filter: "north",
    pill: "Waitomo",
    title: "Matū",
    islandLine: "North Island",
    imageSrc: "/assets/img/matu/matu-purepod-glass-cabin-sunset-exterior-waitomo.jpg",
    imageAlt: "Matū PurePod at sunset near Waitomo",
    lat: -38.2615,
    lng: 175.1123,
  },
  {
    slug: "kokomea",
    href: "/location/kokomea",
    filter: "north",
    pill: "Kapiti Coast",
    title: "Kokomea",
    islandLine: "North Island",
    imageSrc:
      "/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-kapiti-coast.jpg",
    imageAlt:
      "Kokomea PurePod glass cabin at sunset on the Kāpiti Coast, New Zealand",
    lat: -40.81559036922355,
    lng: 175.10623434237164,
  },
  {
    slug: "manakau",
    href: "/location/manakau",
    filter: "south",
    pill: "Kaikōura",
    title: "Manakau",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg",
    imageAlt: "Manakau PurePod glass cabin in the Kaikōura hills",
    lat: -42.45,
    lng: 173.55,
    mapLat: -42.375,
    mapLng: 173.485,
  },
  {
    slug: "kahutara",
    href: "/location/kahutara",
    filter: "south",
    pill: "Kaikōura",
    title: "Kahutara",
    islandLine: "South Island",
    imageSrc: "/assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg",
    imageAlt: "Kahutara PurePod glass cabin near Kaikōura",
    imagePosition: "center 80%",
    lat: -42.4,
    lng: 173.68,
    mapLat: -42.475,
    mapLng: 173.775,
  },
  {
    slug: "atatu",
    href: "/location/atatu",
    filter: "south",
    pill: "Hurunui",
    title: "Atatū",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/atatu/atatu-purepod-hilltop-landscape-aerial-new-zealand.jpg",
    imageAlt:
      "Aerial view of Atatū PurePod glass cabin on a hilltop at sunset above rolling hills, Hurunui, New Zealand",
    imagePosition: "50% 44%",
    lat: -42.855,
    lng: 173.205,
    mapLat: -42.785,
    mapLng: 173.095,
  },
  {
    slug: "korimako",
    href: "/location/korimako",
    filter: "south",
    pill: "Hurunui",
    title: "Korimako",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/kiromako/korimako-purepod-glass-cabin-native-forest-aerial-new-zealand.jpg",
    imageAlt:
      "Aerial view of Korimako PurePod glass cabin nestled in native forest, Hurunui, New Zealand",
    imagePosition: "50% 48%",
    lat: -42.85,
    lng: 173.2,
    mapLat: -42.92,
    mapLng: 173.31,
  },
  {
    slug: "greystone",
    href: "/location/greystone",
    filter: "south",
    pill: "Waipara",
    title: "Greystone",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg",
    imageAlt: "Greystone PurePod glass cabin exterior in Waipara",
    lat: -43.08,
    lng: 172.76,
  },
  {
    slug: "pohue",
    href: "/location/pohue",
    filter: "south",
    pill: "Banks Peninsula",
    title: "Pōhue",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg",
    imageAlt:
      "Pōhue PurePod glass cabin on coastal hills above Banks Peninsula, New Zealand",
    imagePosition: "36% 52%",
    lat: -43.733,
    lng: 172.866,
  },
  {
    slug: "haurapa",
    href: "/location/haurapa",
    filter: "south",
    pill: "Central Otago",
    title: "Haurapa",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg",
    imageAlt: "Haurapa PurePod in Central Otago landscape",
    lat: -45.05,
    lng: 169.21,
    mapLat: -45.005,
    mapLng: 169.255,
  },
  {
    slug: "taima",
    href: "/location/taima",
    filter: "south",
    pill: "Central Otago",
    title: "Tāima",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg",
    imageAlt: "Tāima PurePod vineyard view in Central Otago",
    lat: -45.068021549825716,
    lng: 169.0647641734164,
    mapLat: -45.115,
    mapLng: 168.995,
  },
  {
    slug: "tokoeka",
    href: "/location/tokoeka",
    filter: "stewart",
    pill: "Stewart Island",
    title: "Tokoeka",
    islandLine: "Stewart Island",
    imageSrc:
      "/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg",
    imageAlt: "Tokoeka PurePod exterior at sunset on Stewart Island",
    lat: -46.866629,
    lng: 168.124813,
  },
  {
    slug: "hananui",
    href: "/location/hananui",
    filter: "stewart",
    pill: "Stewart Island",
    title: "Hananui",
    islandLine: "Stewart Island",
    imageSrc:
      "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg",
    imageAlt: "Hananui PurePod aerial coastal location on Stewart Island",
    lat: -46.866759,
    lng: 168.124998,
  },
];
