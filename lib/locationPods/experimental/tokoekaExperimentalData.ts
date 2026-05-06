import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg";
const podAerial =
  "/assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg";
const podBedroom =
  "/assets/img/tokoeka/PurePod%20Tokoeka%20glass%20cabin%20deck%20with%20ocean%20views%20and%20native%20forest%20New%20Zealand.jpg";
const podAstro =
  "/assets/img/tokoeka/PurePod%20Tokoeka%20glass%20cabin%20bedroom%20with%20ocean%20sunset%20view%20New%20Zealand.jpg";
const expUlva = "/assets/img/tokoeka/stewart-island-native-bird-wildlife.jpg";
const expMason =
  "/assets/img/tokoeka/stewart-island-tokoeka-kiwi-wildlife..jpg";
const expPaterson =
  "/assets/img/tokoeka/stewart-island-yellow-eyed-penguin-wildlife.jpg";
const travelAerial =
  "/assets/img/tokoeka/tokoeka-purepod-forest-walkway-sign.jpg";
const travelForest =
  "/assets/img/tokoeka/stewart-island-coastal-forest-landscape.jpg";
const travelFood =
  "/assets/img/tokoeka/tokoeka-local-food-platter-stewart-island..jpg";
const travelBedroom =
  "/assets/img/tokoeka/tokoeka-purepod-gourmet-food-platter.jpg";

export const TOKOEKA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=11";

const HERO_SUBTITLE_PARAS = [
  "Stewart Island · native forest & island wildlife · South Island",
  "A hidden sanctuary in New Zealand's far south",
  "PurePod Tokoeka is a complete immersion into New Zealand's wildest nature. Set within a predator-free eco-sanctuary and surrounded by native forest and wildlife, this is a place of deep silence, birdsong, stars and the rare chance to see kiwi in the wild.",
];

export const TOKOEKA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Tokoeka?",
    answer:
      "Reach Tokoeka by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The final walk is about 380 metres and takes roughly five to ten minutes, including passing through the predator-proof fence into the sanctuary.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Stewart Island has a cool, changeable coastal climate. Rain and cooler temperatures are common, so waterproof clothing is recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Bring your own supplies or pre-order a breakfast and dinner hamper featuring locally sourced Southland produce. Meals are simple and generous, perfect for relaxed evenings and slow mornings at the pod.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

const tokoekaPodNarrative = {
  title: "The experience of the Pod — Tokoeka",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Surrounded by native forest, the pod feels completely secluded, with birdsong, forest views and a deep connection to nature.",
    "At night, special red lighting offers the rare opportunity to spot kiwi directly from the pod.",
  ],
  galleryCaption:
    "At night, special red lighting offers the rare opportunity to spot kiwi directly from the pod.",
  gallery: [
    {
      src: podAerial,
      alt: "Aerial view of Tokoeka PurePod set in native forest on Stewart Island, New Zealand",
      position: "50% 50%",
    },
    {
      src: podBedroom,
      alt: "Tokoeka PurePod glass cabin deck with ocean views and native forest, Stewart Island, New Zealand",
      position: "50% 52%",
    },
    {
      src: podAstro,
      alt: "Tokoeka PurePod glass cabin bedroom with ocean sunset view, Stewart Island, New Zealand",
      position: "50% 48%",
    },
  ],
};

const tokoekaTravelBlock = {
  title: "Know before you go",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The Journey",
      images: [
        {
          src: travelAerial,
          alt: "Aerial view of Tokoeka PurePod in native forest at Mamaku Point Conservation Reserve, Stewart Island, New Zealand",
        },
        {
          src: travelForest,
          alt: "Native coastal forest on Stewart Island, New Zealand",
        },
      ],
      body:
        "Reach Tokoeka by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Stewart Island",
      editorialLead:
        "A cool, changeable coastal climate with frequent rain and generally lower temperatures.",
      body:
        "Conditions can shift quickly through the day, especially near the coast and in exposed areas. Waterproof outer layers and warm clothing are recommended year-round.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "The Food",
      images: [
        {
          src: travelFood,
          alt: "Local food platter with Southland produce at Tokoeka PurePod, Stewart Island, New Zealand",
        },
        {
          src: travelBedroom,
          alt: "Tokoeka PurePod bedroom with ocean view for relaxed mornings and evenings, Stewart Island, New Zealand",
        },
      ],
      body:
        "Bring your own supplies or pre-order a breakfast and dinner hamper featuring locally sourced Southland produce. Meals are simple and generous, perfect for relaxed evenings and slow mornings at the pod.",
    },
  ],
};

const tokoekaExperiencesBlock = {
  title: "The experiences that define Tokoeka",
  hint: "Stewart Island · native forest & island wildlife · South Island",
  intro: "Ulva Island, Mason Bay and Paterson Inlet.",
  items: [
    {
      title: "Ulva Island — Predator-Free Sanctuary",
      image: expUlva,
      imageAlt: "Native birdlife in forest on Stewart Island, New Zealand",
      paragraphs: [
        "A world-class wildlife sanctuary where native birds thrive in a completely predator-free environment. Ancient forest, close encounters and the rare feeling of walking among New Zealand's most iconic birdlife.",
        "Why it's special: rare native birds (tīeke, kākāriki, mōhua) + pristine forest + close wildlife encounters",
      ],
      links: [
        {
          label: "Explore Ulva Island Guided Walks",
          href: "https://www.ulva.co.nz/",
        },
      ],
    },
    {
      title: "Mason Bay — Wild West Coast",
      image: expMason,
      imageAlt:
        "Coastal forest and wild landscape on Stewart Island, New Zealand",
      paragraphs: [
        "A vast, remote beach on Stewart Island's wild west coast, shaped by dunes, ocean swells and powerful isolation. One of the best places on the island to experience true wilderness.",
        "Why it's special: wild beaches + dunes + chance to spot kiwi + seals & sea lions + extreme isolation",
      ],
      links: [
        {
          label: "Explore Mason Bay Stewart Island Discovery Expeditions",
          href: "https://www.realnz.com/en/experiences/expedition-cruises/stewart-island-discovery-expeditions/",
        },
        {
          label: "Rakiura Charters — all tours",
          href: "https://www.rakiuracharters.co.nz/category/all-tours/",
        },
      ],
    },
    {
      title: "Paterson Inlet — Cruise or Kayak",
      image: expPaterson,
      imageAlt:
        "Yellow-eyed penguin and coastal wildlife near Paterson Inlet, Stewart Island, New Zealand",
      paragraphs: [
        "Sheltered waters ideal for exploring Stewart Island by boat or kayak. Cruising Paterson Inlet reveals quiet bays, small islands and rich marine life in one of the island's most peaceful settings.",
        "Why it's special: dolphins + little blue penguins + seals + seabirds + sheltered waters",
      ],
      links: [
        {
          label: "Explore Paterson Inlet Discovery Cruise",
          href: "https://www.rakiuracharters.co.nz/paterson-inlet-discovery-cruise/",
        },
      ],
    },
  ],
  moreTitle: "",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
};

const tokoekaReviews = {
  title: "What guests say",
  hint: "From recent Tokoeka stays",
  intro: "Guest impressions from the Stewart Island sanctuary setting.",
  items: [
    {
      quote:
        "The journey in made it feel truly remote. Once inside the sanctuary, silence and birdsong took over.",
      author: "J. & S.",
    },
    {
      quote:
        "One of the few places where we fully switched off - just forest, sea views, and sky.",
      author: "Winter guests",
    },
    {
      quote:
        "Evenings were the standout: red light, stars, and that quiet feeling you might spot kiwi nearby.",
      author: "Sanctuary stay",
    },
  ],
};

export const tokoekaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Stewart Island",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "PurePod Tokoeka glass cabin at sunset in native forest on Stewart Island, New Zealand",
    title: "Stewart Island, Tokoeka",
    subtitleParagraphs: HERO_SUBTITLE_PARAS,
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
  },
  podCarouselAriaLabel: "PurePod Tokoeka — photo gallery",
  podNarrative: tokoekaPodNarrative,
  travelBlock: tokoekaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Tokoeka",
    summaryIntro:
      "Ulva Island, Mason Bay and Paterson Inlet — when you feel like a day beyond the pod.",
  },
  experiencesBlock: tokoekaExperiencesBlock,
  reviews: tokoekaReviews,
  faqItems: TOKOEKA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: TOKOEKA_BOOKING_URL,
  },
};
