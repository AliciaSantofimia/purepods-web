import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/kahutara/kahutara-purepod-sunrise-over-river-valley.jpg";
/** The Pod carousel — exterior → glass/views → interior → bathroom */
const podMountainValleyLandscape =
  "/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-valley-landscape-kaikoura-new-zealand.jpg";
const podGlassReflectionsLandscape =
  "/assets/img/kahutara/kahutara-purepod-glass-reflections-and-landscape.jpg";
const podRiverValleyView =
  "/assets/img/kahutara/kahutara-purepod-river-valley-view-kaikoura.jpg";
const podBedroom =
  "/assets/img/kahutara/kahutara-purepod-bedroom-view-kaikoura-mountain.jpg";
const podShowerRiverMountain =
  "/assets/img/kahutara/kahutara-purepod-shower-with-river-and-mountain-view.jpg";
const podWarmWoodenBathroom =
  "/assets/img/kahutara/kahutara-purepod-warm-wooden-bathroom-interior.jpg";
const expWhale = "/assets/img/kahutara/kaikoura-whale-watching-new-zealand.jpg";
const expPeninsula =
  "/assets/img/kahutara/kaikoura-peninsula-walkway-coastal-track.jpg";
const expSeal = "/assets/img/kahutara/kaikoura-seal-colony-new-zealand.jpg";
const travelValley =
  "/assets/img/kahutara/kaikoura-river-valley-landscape.jpg";
const travelFarm =
  "/assets/img/kahutara/kaikoura-countryside-farm-entrance.jpg";
const travelFood =
  "/assets/img/kahutara/kahutara-local-food-platter-kaikoura.jpg";
const travelWine =
  "/assets/img/kahutara/kahutara-wine-and-cheese-board-kaikoura.jpg";

export const KAHUTARA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=1";

const HERO_PARAGRAPH_1 =
  "A private glass cabin set high above the Kahutara River within an isolated sheep farm inland from Kaikōura.";

const HERO_PARAGRAPH_2 =
  "Surrounded by open hills, native bush and wide views towards the Seaward Kaikōura Range, Kahutara is a remote retreat shaped by mountain light, vast skies and deep rural stillness.";

export const KAHUTARA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Kahutara?",
    answer:
      "The final part of the journey is completed on foot. A short 10–15 minute walk leads you from the parking area to the pod, creating a sense of privacy and gentle disconnection from the outside world.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The walk from the parking area to the pod takes about 10–15 minutes.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Kahutara sits on the exposed Kaikōura coast, where conditions can change quickly. Expect fresh air, coastal winds and cooler evenings throughout the year. Rain is part of the landscape and often adds even more atmosphere to the experience.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Each PurePod is equipped with a gas cooktop, barbecue, small fridge and all the essential cookware — utensils, pots, plates and cutlery — to prepare simple meals during your stay. You will also find a selection of tea and coffee to enjoy at the pod. You are welcome to bring your own food or pre-book a PurePod locally sourced dinner and breakfast package, ready to prepare and enjoy at your own pace.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

const kahutaraPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above the Kahutara River within an isolated sheep farm inland from Kaikōura, Kahutara is surrounded by open hills, native bush and wide views towards the Seaward Kaikōura Range.",
    "Designed for two, the pod sits quietly within a remote rural landscape shaped by mountain weather, birdsong and vast southern skies.",
    "The final walk follows a bush track through paddocks and kānuka forest before opening onto the hills surrounding the pod. Inside, floor-to-ceiling glass keeps the mountains, changing light and surrounding landscape constantly in view.",
  ],
  galleryCaption:
    "Kahutara is defined by mountain views, open countryside and deep rural stillness — a private glass retreat immersed in the Kaikōura landscape.",
  gallery: [
    {
      src: podMountainValleyLandscape,
      alt: "Kahutara PurePod glass cabin above the mountain valley near Kaikōura, New Zealand",
      position: "50% 55%",
    },
    {
      src: podGlassReflectionsLandscape,
      alt: "Glass reflections and open landscape at Kahutara PurePod, Kaikōura",
      position: "50% 52%",
    },
    {
      src: podRiverValleyView,
      alt: "River valley view from Kahutara PurePod toward the Kaikōura ranges, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bed inside Kahutara PurePod with panoramic view of the Kaikōura mountains, New Zealand",
      position: "50% 58%",
    },
    {
      src: podShowerRiverMountain,
      alt: "Shower with river and mountain views inside Kahutara PurePod, Kaikōura",
      position: "50% 50%",
    },
    {
      src: podWarmWoodenBathroom,
      alt: "Warm timber bathroom interior at Kahutara PurePod on the Kaikōura coast",
      position: "50% 52%",
    },
  ],
};

const kahutaraTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelValley,
          alt: "River valley landscape in the Kaikōura countryside, New Zealand",
        },
        {
          src: travelFarm,
          alt: "Countryside farm entrance along the rural road near Kahutara PurePod in the Kaikōura region",
        },
      ],
      body:
        "Reaching Kahutara feels remote in the best possible way. The final approach follows quiet rural roads through an isolated sheep station with wide views towards the Seaward Kaikōura Range. From the carpark, a 10–15 minute walk continues through paddocks and native bush before opening onto the hills surrounding the pod. The track is natural and uneven in places, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Kaikōura coast",
      editorialLead:
        "An exposed coastal climate with fresh air, regular winds, and cooler evenings year-round.",
      body:
        "Conditions can change quickly on the Kaikōura coast, so layers are recommended. Rain is part of the landscape and often adds to the atmosphere.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelFood,
          alt: "Local food platter served at Kahutara PurePod with mountain views in Kaikōura",
        },
        {
          src: travelWine,
          alt: "Wine and cheese board on the deck at Kahutara PurePod with countryside views in Kaikōura",
        },
      ],
      body:
        "Each PurePod is equipped with a gas cooktop, barbecue, small fridge and all the essential cookware — utensils, pots, plates and cutlery — to prepare simple meals during your stay. You will also find a selection of tea and coffee to enjoy at the pod. You are welcome to bring your own food or pre-book a PurePod locally sourced dinner and breakfast package, ready to prepare and enjoy at your own pace.",
    },
  ],
};

const kahutaraExperiencesBlock = {
  title: "Experiences that define Kahutara",
  hint: "Mountains meeting the sea, marine wildlife and open horizons",
  intro:
    "A curated selection of three experiences that capture the essence of this place — wild coastline, marine wildlife and dramatic landscapes.",
  items: [
    {
      title: "Kaikōura Whale Experiences",
      image: expWhale,
      imageAlt:
        "Sperm whale tail diving in the ocean during whale watching in Kaikōura, New Zealand",
      paragraphs: [
        "A unique opportunity to see whales both from the air and from the ocean, revealing the full scale and beauty of Kaikōura's marine landscape — where deep waters, dramatic mountains and open sea meet.",
        "An iconic Kaikōura experience combining extraordinary marine wildlife, open horizons and the striking mountain range rising beside the ocean.",
      ],
      links: [
        {
          label: "Explore Whale Watch Kaikōura",
          href: "https://whalewatch.co.nz/your-experience/our-tours/whale-watch-trip-gift-voucher/",
        },
        {
          label: "Explore Kaikōura Scenic Flights",
          href: "https://gchaviation.com/kaikoura-scenic-flights/",
        },
      ],
    },
    {
      title: "Kaikōura Peninsula Walkway",
      image: expPeninsula,
      imageAlt:
        "Coastal cliffs along the Kaikōura Peninsula Walkway in New Zealand",
      paragraphs: [
        "A scenic coastal walk with open ocean views, rocky headlands and distant mountains — perfect for exploring at a relaxed pace while observing wildlife in its natural habitat, including New Zealand fur seals, seabirds and, at times, dolphins and whales offshore.",
        "Staying at Kahutara places you right in the heart of this wild coastal landscape.",
      ],
      links: [
        {
          label: "Explore Kaikōura Peninsula Walkway",
          href: "https://www.google.com/maps/place/Kaik%C5%8Dura+Peninsula+Walkway,+Canterbury+Region+7300,+New+Zealand/@-42.4256257,173.6889881,17z",
        },
      ],
    },
    {
      title: "Seal Kayak & Seal Swim Kaikōura",
      image: expSeal,
      imageAlt:
        "New Zealand fur seal resting on rocks near the Kaikōura coast",
      paragraphs: [
        "An active and immersive way to explore the coastline — paddling alongside seals or swimming with them in their natural habitat for a truly close-to-nature experience.",
        "A signature Kaikōura experience where wild coastline, marine wildlife and open ocean combine in a direct encounter with nature.",
      ],
      links: [
        {
          label: "Explore Seal Kayak Kaikōura",
          href: "https://www.sealkayakkaikoura.com/tours/seal-kayak-tour",
        },
        {
          label: "Explore Seal Swim Kaikōura",
          href: "https://www.sealswimkaikoura.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Kaikōura",
  moreSubtitle:
    "Beyond the pod, the coastline continues to unfold at a gentle pace.",
  moreBody:
    "Coastal walks and easy trails invite you to explore without hurry. Lookouts such as Ohau Point Lookout, Point Kean Viewpoint and Dolphin View Lookout offer wide horizons and ever-changing ocean views. The constant presence of the sea and marine wildlife accompanies every journey. Quiet hills and inland vineyards complete the feeling of space, stillness and open sky.",
  moreRecommendations: [],
};

const kahutaraReviews = {
  title: "What guests say",
  hint: "From recent Kahutara stays",
  intro: "Guest comments from the Kaikōura coast and mountain setting.",
  items: [
    {
      quote:
        "The open view toward the Kaikōura ranges is even better in person. We spent hours simply taking it in.",
      author: "P. & G.",
    },
    {
      quote:
        "The walk in gave us the sense of arrival we wanted, and once there it felt completely private.",
      author: "Coastal weekend",
    },
    {
      quote:
        "Being close to coastal wildlife experiences by day, then returning to quiet nights, made this stay memorable.",
      author: "Recent stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/kahutara` and FAQ JSON-LD. */
export const kahutaraEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · KAIKŌURA",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Kahutara PurePod glass cabin overlooking the Kaikōura mountains and river valley in New Zealand",
    title: "Kahutara",
    subtitleParagraphs: [HERO_PARAGRAPH_1, HERO_PARAGRAPH_2],
    imagePosition: "30% 48%",
    imagePositionMd: "28% 46%",
    imagePositionXl: "26% 44%",
  },
  podCarouselAriaLabel: "PurePod Kahutara — photo gallery",
  podNarrative: kahutaraPodNarrative,
  travelBlock: kahutaraTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Kahutara",
    summaryIntro:
      "Whales, peninsula walks and the coast — when you feel like a day beyond the pod.",
  },
  experiencesBlock: kahutaraExperiencesBlock,
  reviews: kahutaraReviews,
  faqItems: KAHUTARA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: KAHUTARA_BOOKING_URL,
  },
};
