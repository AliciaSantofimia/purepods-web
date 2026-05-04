import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-view-kapiti-coast.jpg";
const podSunrise =
  "/assets/img/kokomea/kokomea-purepod-glass-cabin-isolated-landscape-sunset-new-zealand.jpg";
const podNight =
  "/assets/img/kokomea/kokomea-purepod-glass-cabin-night-exterior-kapiti-coast.jpg";
const podBedroom =
  "/assets/img/kokomea/kokomea-purepod-bedroom-interior-sunset-kapiti-coast.jpg";
const expIsland =
  "/assets/img/kokomea/kapiti-island-aerial-landscape-kapiti-coast.jpg";
const expEscarpment =
  "/assets/img/kokomea/paekākāriki-escarpment-track.jpg";
const expLagoon =
  "/assets/img/kokomea/kapiti-coast-river-lagoon-landscape.jpg";
const travelRoad =
  "/assets/img/kokomea/kokomea-countryside-access-road-kapiti-coast.jpg";
const travelSunrise =
  "/assets/img/kokomea/kokomea-purepod-exterior-sunrise-landscape-kapiti-coast.jpg";
const travelDinner =
  "/assets/img/kokomea/kokomea-local-food-dinner-platter-kapiti-coast.jpg";
const travelBreakfast =
  "/assets/img/kokomea/kokomea-breakfast-outdoor-table-kapiti-coast.jpg";

export const KOKOMEA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=10";

const HERO_SUBTITLE =
  "PurePod Kokomea is a private glass cabin for two in the Kāpiti Coast hills, North Island, New Zealand. Guests reach the pod on a walk through rural hills; comfortable footwear is recommended. The stay offers forest, birdsong and coastal character with no shared spaces.";

export const KOKOMEA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Kokomea?",
    answer:
      "Reaching PurePod Kokomea is a gentle walk through the hills of the Kāpiti Coast. Part of the experience is leaving the everyday behind and arriving slowly, surrounded by nature and silence. Comfortable footwear is recommended for the track.",
  },
  {
    question: "What footwear should I bring?",
    answer:
      "Comfortable footwear is recommended for the track into the pod.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Kāpiti Coast has a mild, often windy climate. Evenings can be cool year-round; layered clothing is recommended. The mix of ocean and hills makes the weather changeable — part of the character of the place.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Bring your own supplies or pre-book a breakfast and dinner basket with local produce when you reserve. Everything is designed to be simple, comforting and enjoyed at your own pace — the kind of moments that stay with you long after you leave.",
  },
  {
    question: "How many people can stay, and what is in the pod?",
    answer:
      "The pod is fully private and designed for two, offering the feeling of being alone with nature. Inside, everything is simple and welcoming: king bed, hot shower, flush toilet, essential kitchen and comfortable heating for cooler evenings.",
  },
];

const kokomeaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Where the land slows down and birds set the pace. A retreat between forest and sea, made for walking slowly, listening to the surroundings and letting the landscape shape the day.",
    "A gentle walk leads you into the hills of the Kāpiti Coast, where forest, birdsong and open skies replace the noise of the world. The pod sits in a serene rural landscape, surrounded by native vegetation, soft ridges and the distant sound of the ocean.",
    "The pod is fully private and designed for two, offering the feeling of being alone with nature. Inside, everything is simple and welcoming: king bed, hot shower, flush toilet, essential kitchen and comfortable heating for cooler evenings.",
  ],
  galleryCaption:
    "Glass walls open the space completely to the landscape, so that light, mist and birds become part of the stay. Outside, the deck invites slow mornings and long evenings — coffee in hand, wind in the trees and a silence that stretches. This is a place to watch, listen, walk and do almost nothing.",
  gallery: [
    {
      src: podSunrise,
      alt: "Kokomea PurePod glass cabin at sunset in the Kāpiti Coast landscape, New Zealand",
      position: "50% 55%",
    },
    {
      src: podNight,
      alt: "Kokomea PurePod glass cabin at night on the Kāpiti Coast",
      position: "50% 60%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Kokomea PurePod with sunset light, Kāpiti Coast",
      position: "50% 45%",
    },
  ],
};

const kokomeaTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelRoad,
          alt: "Countryside access road to Kokomea PurePod on the Kāpiti Coast",
        },
        {
          src: travelSunrise,
          alt: "Kokomea PurePod at sunrise in the Kāpiti Coast landscape",
        },
      ],
      body:
        "Reaching PurePod Kokomea is a gentle walk through the hills of the Kāpiti Coast. Part of the experience is leaving the everyday behind and arriving slowly, surrounded by nature and silence. Comfortable footwear is recommended for the track.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Kāpiti Coast",
      editorialLead:
        "The Kāpiti Coast has a mild, often windy climate. Evenings can be cool year-round; layered clothing is recommended.",
      body:
        "The mix of ocean and hills makes the weather changeable — part of the character of the place.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelDinner,
          alt: "Local food platter at Kokomea PurePod, Kāpiti Coast",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast outdoors at Kokomea PurePod, Kāpiti Coast",
        },
      ],
      body:
        "Bring your own supplies or pre-book a breakfast and dinner basket with local produce when you reserve. Everything is designed to be simple, comforting and enjoyed at your own pace — the kind of moments that stay with you long after you leave.",
    },
  ],
};

const kokomeaExperiencesBlock = {
  title: "Experiences that define Kokomea",
  hint: "Island sanctuary, coastal tracks and quiet discovery",
  intro:
    "A curated selection of three experiences that capture the essence of the Kāpiti Coast — native island, escarpment walks and the meeting of land and sea.",
  items: [
    {
      title: "Kāpiti Island",
      image: expIsland,
      imageAlt:
        "Aerial view of Kapiti Island nature reserve, Kāpiti Coast, New Zealand",
      paragraphs: [
        "A protected nature reserve visible from the coast, Kāpiti Island is home to native birds and restored forest. Access is by boat; visits are guided and limited, keeping the island quiet and wild.",
        "A chance to step into a world where birdsong and forest take over.",
      ],
      links: [
        {
          label: "Explore Kāpiti Island",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/kapiti-island-nature-reserve/",
        },
      ],
    },
    {
      title: "Paekākāriki Escarpment Track",
      image: expEscarpment,
      imageAlt:
        "Paekākāriki Escarpment Track on the Kāpiti Coast, New Zealand",
      paragraphs: [
        "A striking walk along the coastal escarpment with wide views over the Tasman Sea and Kāpiti Island. The track climbs and winds through native scrub and coastal landscape, offering a strong sense of space and horizon.",
        "One of the region's most memorable walks — sea, sky and steady pace.",
      ],
      links: [
        {
          label: "Explore Paekākāriki Escarpment Track",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/paekakariki-escapment-track/",
        },
      ],
    },
    {
      title: "Coast, lagoons & slow exploration",
      image: expLagoon,
      imageAlt:
        "River and lagoon landscape on the Kāpiti Coast, New Zealand",
      paragraphs: [
        "The Kāpiti Coast is a mix of beach, river mouths and lagoons, with quiet roads and small settlements. Explore at a gentle pace — coastal reserves, river walks and the constant presence of the sea and the island on the horizon.",
        "A landscape made for unhurried discovery.",
      ],
      links: [
        {
          label: "Explore the Kāpiti Coast",
          href: "https://www.kapiticoast.govt.nz/our-district/visit-kapiti/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore the coast",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead:
    "Paekākāriki Beach · Paraparaumu Beach — long, empty coastlines.",
  moreExploreGroups: [
    {
      heading: "Queen Elizabeth Park · Waikanae Estuary",
      intro: "Birds, wetlands, slow walks.",
      links: [
        {
          name: "Queen Elizabeth Park",
          href: "https://www.gw.govt.nz/parks/queen-elizabeth-park/#accordion-item-button-accordion0-item120",
        },
        {
          name: "Waikanae Estuary",
          href: "https://www.waikanaeestuary.org/",
        },
      ],
    },
    {
      heading: "Ōhau Wines",
      intro: "A quiet vineyard in the hills.",
      links: [
        { name: "Ōhau Wines", href: "https://www.ohauwines.co.nz/" },
      ],
    },
    {
      heading: "Paekākāriki Hill Road Lookout",
      intro: "Sunset over Kāpiti Island.",
      links: [],
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/kokomea` and FAQ JSON-LD. */
export const kokomeaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Kāpiti Coast",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Kokomea PurePod glass cabin at sunset on the Kāpiti Coast, New Zealand",
    title: "Kokomea",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "PurePod Kokomea — photo gallery",
  podNarrative: kokomeaPodNarrative,
  travelBlock: kokomeaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Kokomea",
    summaryIntro:
      "Island sanctuary, escarpment walks and the coast — when you feel like a day beyond the pod.",
  },
  experiencesBlock: kokomeaExperiencesBlock,
  faqItems: KOKOMEA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: KOKOMEA_BOOKING_URL,
  },
};
