export type ExploreIslandFilter = "north" | "south" | "stewart";

export type ExplorePodCard = {
  slug: string;
  href: string;
  filter: ExploreIslandFilter;
  pill: string;
  title: string;
  islandLine: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional `object-position` for hero image (matches reference inline styles). */
  imagePosition?: string;
};

/**
 * Pod grid for `/pods` — order and copy from `reference-html/explore.html`.
 * Images use the same asset paths as the reference.
 */
export const EXPLORE_POD_CARDS: ExplorePodCard[] = [
  {
    slug: "makoha",
    href: "/location/makoha",
    filter: "north",
    pill: "Kerikeri",
    title: "Mākoha",
    islandLine: "North Island",
    imageSrc: "/assets/img/makoha/makoha-purepod-native-forest-landscape-kerikeri.jpg",
    imageAlt: "Mākoha PurePod native forest landscape near Kerikeri",
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
    imageAlt: "Manakau PurePod glass cabin among open hills inland from Kaikōura",
  },
  {
    slug: "kahutara",
    href: "/location/kahutara",
    filter: "south",
    pill: "Kaikōura",
    title: "Kahutara",
    islandLine: "South Island",
    imageSrc: "/assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg",
    imageAlt: "Kahutara PurePod glass cabin above the river valley near Kaikōura",
    imagePosition: "center 80%",
  },
  {
    slug: "atatu",
    href: "/location/atatu",
    filter: "south",
    pill: "Hurunui",
    title: "Atatū",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg",
    imageAlt: "Atatū PurePod bedroom with ocean view",
  },
  {
    slug: "korimako",
    href: "/location/korimako",
    filter: "south",
    pill: "Hurunui",
    title: "Korimako",
    islandLine: "South Island",
    imageSrc:
      "/assets/img/korimako/korimako-purepod-native-bush-walking-track-new-zealand.jpg",
    imageAlt: "Korimako PurePod forest path walking trail",
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
  },
  {
    slug: "pohue",
    href: "/location/pohue",
    filter: "south",
    pill: "Banks Peninsula",
    title: "Pōhue",
    islandLine: "South Island",
    imageSrc: "/assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg",
    imageAlt: "Pōhue PurePod coastal hills cabin view",
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
  },
];
