import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/hananui/hananui-purepod-exterior-forest-view-stewart-island.jpg";
const podAerial =
  "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg";
const podUnderStars =
  "/assets/img/hananui/PurePod%20Hananui%20outdoor%20deck%20with%20ocean%20views%20and%20private%20seating%20New%20Zealand.jpg";
const podSeaView =
  "/assets/img/hananui/hananui-purepod-sea-view-glass-pod-stewart-island.jpg";
const podShowerOcean =
  "/assets/img/hananui/hananui-purepod-glass-shower-ocean-view-stewart-island.jpg";
const podGlassBedroomInterior =
  "/assets/img/hananui/hananui-purepod-glass-bedroom-interior-stewart-island.jpg";
const podKitchenOcean =
  "/assets/img/hananui/hananui-purepod-kitchen-ocean-view-stewart-island.jpg";
const expUlva = "/assets/img/hananui/stewart-island-native-bird-wildlife.jpg";
const expMason =
  "/assets/img/hananui/stewart-island-tokoeka-kiwi-wildlife.jpg";
const expPaterson =
  "/assets/img/hananui/stewart-island-yellow-eyed-penguin-wildlife.jpg";
const travelExterior =
  "/assets/img/hananui/hananui-purepod-dining-experience-ocean-view-stewart-island-new-zealand.jpg";
const travelJourneyRight =
  "/assets/img/hananui/hananui-purepod-walking-path-native-bush-stewart-island-new-zealand.jpg";
const travelCoastalJourneyAerial =
  "/assets/img/hananui/hananui-stewart-island-coastal-journey-aerial-view.jpg";
const travelFood =
  "/assets/img/hananui/hananui-local-food-platter-stewart-island.jpg";
const travelBreakfastCoastal =
  "/assets/img/hananui/hananui-purepod-breakfast-with-coastal-view.jpg";
const travelOutdoorCooking =
  "/assets/img/hananui/hananui-purepod-outdoor-cooking-ocean-view.jpg";

export const HANANUI_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=12";

/** FAQ answer for “How do I get to PurePod Hananui?” — travel card uses `HANANUI_JOURNEY_CARD_BODY`. */
export const HANANUI_JOURNEY_BODY =
  "Travel by flight or ferry to Stewart Island, then continue to Mamaku Point Conservation Reserve. A short 350-metre walk leads you through the predator-proof fence and into deep natural quiet. Reach Hananui by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.";

const HERO_SUBTITLE_PARAS = [
  "A private glass cabin set within Mamaku Point Conservation Reserve on Rakiura Stewart Island, surrounded by native bush, coastal views and abundant birdlife.",
  "Hananui is shaped by sea air, forest stillness and the dark skies of the island — a secluded retreat immersed in one of New Zealand's most protected coastal landscapes.",
];

export const HANANUI_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Hananui?",
    answer: HANANUI_JOURNEY_BODY,
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "A short 350-metre walk leads you through the predator-proof fence and into deep natural quiet. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
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

const hananuiPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set within Mamaku Point Conservation Reserve on Rakiura Stewart Island, Hananui is surrounded by native bush, birdlife and wide coastal views across Lee Bay.",
    "Designed for two, the pod sits quietly within a protected sanctuary landscape shaped by forest, sea air and the changing skies of the island.",
    "The final approach follows a short nature track through dense native bush before opening onto the secluded coastal setting surrounding the pod. From inside, floor-to-ceiling glass keeps the forest, ocean and shifting light constantly present throughout the stay.",
  ],
  galleryCaption:
    "At night, the surrounding Dark Sky Sanctuary and special red lighting beneath the deck create the rare opportunity to spot kiwi while preserving the darkness of the reserve.",
  gallery: [
    {
      src: podAerial,
      alt: "Hananui PurePod glass cabin surrounded by native bush on Rakiura Stewart Island",
      position: "50% 50%",
    },
    {
      src: podSeaView,
      alt: "Hananui PurePod glass cabin with sea views and native bush on Rakiura Stewart Island",
      position: "50% 50%",
    },
    {
      src: podUnderStars,
      alt: "Hananui PurePod private deck with sea views on Rakiura Stewart Island",
      position: "50% 52%",
    },
    {
      src: podGlassBedroomInterior,
      alt: "Glass bedroom inside Hananui PurePod on Rakiura Stewart Island",
      position: "50% 50%",
    },
    {
      src: podKitchenOcean,
      alt: "Kitchen inside Hananui PurePod with sea views on Rakiura Stewart Island",
      position: "50% 48%",
    },
    {
      src: podShowerOcean,
      alt: "Glass shower inside Hananui PurePod with sea views on Rakiura Stewart Island",
      position: "50% 48%",
    },
  ],
};

const HANANUI_JOURNEY_CARD_BODY =
  "Reaching Hananui is part of the Stewart Island experience.\n\nAfter arriving on Rakiura by scenic flight or ferry, the journey continues through the quiet roads and native bush surrounding Oban and Mamaku Point Conservation Reserve. The final approach follows a short nature track through dense native forest, crossing the predator-proof sanctuary fence before climbing gently towards the secluded coastal setting surrounding the pod.\n\nThe track includes natural bush paths, steps and uneven ground in places, so suitable walking footwear and light luggage are recommended.";

const hananuiTravelBlock = {
  title: "Know before you go",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelCoastalJourneyAerial,
          alt: "Aerial view of Hananui PurePod, native bush and white sand beach on Rakiura Stewart Island",
        },
        {
          src: travelJourneyRight,
          alt: "Hananui PurePod walking track sign in native bush on Rakiura Stewart Island",
        },
      ],
      body: HANANUI_JOURNEY_CARD_BODY,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Stewart Island",
      editorialLead:
        "A cool, changeable coastal climate with frequent rain and fresh winds.",
      body:
        "Weather can shift quickly through the day, especially near the coast and on exposed paths. Layered and waterproof clothing is recommended year-round, particularly for evenings and outdoor walks.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelFood,
          alt: "Food platter at Hananui PurePod with native bush surroundings on Rakiura Stewart Island",
        },
        {
          src: travelBreakfastCoastal,
          alt: "Breakfast at Hananui PurePod with coastal views on Rakiura Stewart Island",
        },
        {
          src: travelOutdoorCooking,
          alt: "Outdoor cooking at Hananui PurePod with sea views on Rakiura Stewart Island",
        },
        {
          src: travelExterior,
          alt: "Dining at Hananui PurePod with native bush and sea views on Rakiura Stewart Island",
        },
      ],
      body:
        "Food at Hananui is designed to complement the quiet rhythm of Rakiura Stewart Island.\n\nBring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are simple and easy to prepare, best enjoyed slowly at the pod surrounded by native bush, coastal views and the constant sounds of birdlife around the reserve.\n\nAs there are no nearby shops or restaurants at the pod, everything you need is brought with you — keeping the experience private, peaceful and immersed in the island landscape.",
    },
  ],
};

const hananuiExperiencesBlock = {
  title: "The experiences that define Hananui",
  hint: "Stewart Island · native forest & island wildlife · South Island",
  intro: "Ulva Island, Mason Bay and Paterson Inlet.",
  items: [
    {
      title: "Ulva Island — Predator-Free Sanctuary",
      image: expUlva,
      imageAlt:
        "Native birdlife in forest on Stewart Island near Ulva Island wildlife sanctuary",
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
        "Tokoeka kiwi in native vegetation on Rakiura Stewart Island, relevant to kiwi spotting near Mason Bay",
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
        "Coastal penguins and wildlife near Paterson Inlet on Rakiura Stewart Island",
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

const hananuiReviews = {
  title: "What guests say",
  hint: "From recent Hananui stays",
  intro: "Guest reflections from Lee Bay and the Stewart Island wild coast.",
  items: [
    {
      quote:
        "The view above Lee Bay is lovely all day, but sunrise from the deck was the moment we kept talking about.",
      author: "N. & C.",
    },
    {
      quote:
        "We came for quiet and got exactly that: ocean, forest, birds, and no interruptions.",
      author: "Weekend guests",
    },
    {
      quote:
        "At night the pod felt completely immersed in nature. We stayed up listening to the wind and watching the sky.",
      author: "South Island escape",
    },
  ],
};

export const hananuiEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · STEWART ISLAND",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Hananui PurePod in native bush with sea views on Rakiura Stewart Island",
    title: "Hananui",
    subtitleParagraphs: HERO_SUBTITLE_PARAS,
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
  },
  podCarouselAriaLabel: "Hananui PurePod — photo gallery",
  podNarrative: hananuiPodNarrative,
  travelBlock: hananuiTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Hananui",
    summaryIntro:
      "Ulva Island, Mason Bay and Paterson Inlet — when you feel like a day beyond the pod.",
  },
  experiencesBlock: hananuiExperiencesBlock,
  reviews: hananuiReviews,
  faqItems: HANANUI_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: HANANUI_BOOKING_URL,
  },
};
