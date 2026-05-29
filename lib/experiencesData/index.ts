export type ExperienceSlug =
  | "stargazing"
  | "romance"
  | "journey"
  | "adventure-wildlife"
  | "wine-dine"
  | "relax-coastal"
  | "culture";

export type ExperiencePageContent = {
  kicker: string;
  heading: string;
  metaTitle: string;
  description: string;
  heroSrc: string;
  heroAlt: string;
};

export const EXPERIENCE_PAGES: Record<ExperienceSlug, ExperiencePageContent> = {
  stargazing: {
    kicker: "Stargazing",
    heading: "Night Falls",
    metaTitle: "Night Falls | Stargazing Experiences in New Zealand — PurePods",
    description:
      "Discover Night Falls by PurePods: stargazing in private off-grid glass cabins across New Zealand, with dark skies, moon phases and meteor showers.",
    heroSrc: "/assets/img/experiences/night-falls/purepods-night-falls-stargazing-new-zealand-night-sky.jpg",
    heroAlt: "A star-filled night sky above a remote PurePod in New Zealand",
  },
  romance: {
    kicker: "Retreat",
    heading: "Romantic getaway",
    metaTitle: "Romantic Getaways in New Zealand | PurePods Glass Cabins",
    description:
      "Romantic getaways in New Zealand: a private off-grid glass cabin for two with privacy, nature, stars and moments for anniversaries, proposals or honeymoons.",
    heroSrc: "/assets/img/experiences/romantic/romantic-getaway-new-zealand-purepods-hero.jpg",
    heroAlt:
      "Couple in a PurePods glass cabin looking out at New Zealand landscape at golden hour",
  },
  journey: {
    kicker: "Journeys",
    heading: "Scenic routes",
    metaTitle:
      "Journey Experiences in New Zealand | Walking, Hiking & Scenic Routes — PurePods",
    description:
      "Explore Journey by PurePods: walking, hiking and cycling routes across New Zealand, with private off-grid glass cabins from one landscape to the next.",
    heroSrc: "/assets/img/experiences/journeys/owharoa-falls-karangahake-gorge-waterfall-new-zealand.jpg",
    heroAlt: "Native forest and hills at sunrise, New Zealand",
  },
  "adventure-wildlife": {
    kicker: "Adventure & wildlife",
    heading: "Adventure & wildlife",
    metaTitle: "Wildlife & Adventure Experiences in New Zealand | PurePods",
    description:
      "Discover curated wildlife and adventure experiences across New Zealand — from whale watching in Kaikōura to remote scenic flights — paired with nearby PurePod stays in quiet natural settings.",
    heroSrc:
      "/assets/img/experiences/adventure-wildlife/kaikoura-whale-tail-sunset-new-zealand-wildlife-experience.jpg",
    heroAlt:
      "Whale tail at sunset off the Kaikōura coast, New Zealand, a dramatic wildlife experience in the open ocean",
  },
  "wine-dine": {
    kicker: "Wine & dine",
    heading: "Wine & dine",
    metaTitle: "Wine & Dine in New Zealand | Food & Wine Getaways — PurePods",
    description:
      "Explore Wine & Dine by PurePods: food and wine getaways in New Zealand with vineyard dining, local flavours and nearby private off-grid glass cabins.",
    heroSrc: "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
    heroAlt:
      "Local food and wine spread in a scenic New Zealand landscape, slow dining and regional flavours",
  },
  "relax-coastal": {
    kicker: "Relax & coastal",
    heading: "Relax & coastal",
    metaTitle: "Relaxing Coastal Getaways in New Zealand | PurePods",
    description:
      "Relax & Coastal by PurePods: relaxing getaways in New Zealand with geothermal waters, coastal escapes, private glass cabins, slow mornings and quiet evenings.",
    heroSrc: "/assets/img/experiences/experiences/rotorua-relax-coastal-geothermal-lake.jpg",
    heroAlt:
      "Geothermal lake with steam and mineral colours near Rotorua, New Zealand",
  },
  culture: {
    kicker: "Culture",
    heading: "Culture",
    metaTitle:
      "Cultural Experiences in New Zealand | Heritage, Māori Culture & PurePods",
    description:
      "Explore Culture by PurePods: cultural experiences in New Zealand, from Māori heritage and local stories to art, history and nearby private glass cabins.",
    heroSrc: "/assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
    heroAlt: "Māori cultural gathering in a forest setting, New Zealand",
  },
};

export const EXPERIENCE_SLUGS = Object.keys(EXPERIENCE_PAGES) as ExperienceSlug[];

export function isExperienceSlug(s: string): s is ExperienceSlug {
  return s in EXPERIENCE_PAGES;
}
