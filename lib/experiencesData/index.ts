export type ExperienceSlug =
  | "night-falls"
  | "romantic"
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
  "night-falls": {
    kicker: "Stargazing",
    heading: "Night Falls",
    metaTitle: "Night Falls by PurePods | Dark Skies, Moon Calendar & Stargazing",
    description:
      "Plan your perfect stargazing night with Night Falls by PurePods. Follow the moon, find the darkest skies, and book a glass cabin stay under unforgettable New Zealand skies.",
    heroSrc: "/assets/img/experiences/night-falls/night-falls-stargazing.jpg",
    heroAlt: "Night Falls starry sky experience",
  },
  romantic: {
    kicker: "Retreat",
    heading: "Romantic getaway",
    metaTitle: "Romantic Getaway | PurePods Glass Cabin Experience in New Zealand",
    description:
      "Romantic getaway in New Zealand: escape to a private PurePods glass cabin for two. Starry skies, complete privacy and an intimate connection with nature. Book your retreat.",
    heroSrc: "/assets/img/experiences/romantic/romantic-getaway-new-zealand-purepods-hero.jpg",
    heroAlt:
      "Couple in a PurePods glass cabin looking out at New Zealand landscape at golden hour",
  },
  journey: {
    kicker: "Journeys",
    heading: "Scenic routes",
    metaTitle: "Journey | PurePods — Walking, Hiking & Cycling in New Zealand",
    description:
      "Discover walking, hiking and cycling routes across New Zealand with PurePods, paired with private glass eco-cabin stays in remote natural settings. Explore regional trails and book a nearby PurePod.",
    heroSrc: "/assets/img/experiences/journeys/owharoa-falls-karangahake-gorge-waterfall-new-zealand.jpg",
    heroAlt: "Native forest and hills at sunrise, New Zealand",
  },
  "adventure-wildlife": {
    kicker: "Adventure & wildlife",
    heading: "Adventure & wildlife",
    metaTitle:
      "Adventure & Wildlife | PurePods — Outdoor Nature Experiences in New Zealand",
    description:
      "Curated marine wildlife, nature and adventure experiences across New Zealand—each with official visitor links and suggested nearby PurePods glass eco-cabin stays.",
    heroSrc:
      "/assets/img/experiences/adventure-wildlife/kaikoura-whale-tail-sunset-new-zealand-wildlife-experience.jpg",
    heroAlt:
      "Whale tail at sunset off the Kaikōura coast, New Zealand, a dramatic wildlife experience in the open ocean",
  },
  "wine-dine": {
    kicker: "Wine & dine",
    heading: "Wine & dine",
    metaTitle: "Wine & Dine | PurePods — Food and Wine Experiences in New Zealand",
    description:
      "Curated wine and dining experiences across New Zealand — vineyard tastings, winery restaurants, views and local favourites — each paired with a nearby PurePods glass eco-cabin stay.",
    heroSrc: "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
    heroAlt:
      "Local food and wine spread in a scenic New Zealand landscape, slow dining and regional flavours",
  },
  "relax-coastal": {
    kicker: "Relax & coastal",
    heading: "Relax & coastal",
    metaTitle:
      "Relax & Coastal | PurePods — Serenity, Wellness & Restorative New Zealand",
    description:
      "Curated geothermal relaxation in Rotorua and coastal calm from Northland to Stewart Island and Hurunui — official visitor links, honest imagery where available, and each stop paired with a suggested PurePod stay.",
    heroSrc: "/assets/img/experiences/experiences/rotorua-relax-coastal-geothermal-lake.jpg",
    heroAlt:
      "Geothermal lake with steam and mineral colours near Rotorua, New Zealand",
  },
  culture: {
    kicker: "Culture",
    heading: "Culture",
    metaTitle:
      "Culture | PurePods — Cultural and Heritage Experiences in New Zealand",
    description:
      "Curated cultural and heritage experiences across New Zealand — Māori living heritage, historic towns, museums and local craft stories — each paired with a nearby PurePods glass eco-cabin stay.",
    heroSrc: "/assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
    heroAlt: "Māori cultural gathering in a forest setting, New Zealand",
  },
};

export const EXPERIENCE_SLUGS = Object.keys(EXPERIENCE_PAGES) as ExperienceSlug[];

export function isExperienceSlug(s: string): s is ExperienceSlug {
  return s in EXPERIENCE_PAGES;
}
