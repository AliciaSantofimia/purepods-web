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
  "Kahutara PurePod is a private off-grid glass cabin for two set high above the Kahutara River on an isolated sheep farm inland from Kaikōura.";

const HERO_PARAGRAPH_2 =
  "Surrounded by river valley, foothills and views to the Seaward Kaikōura Range, it offers a quiet South Island escape shaped by privacy, stargazing and open rural landscape.";

export const KAHUTARA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Where is Kahutara PurePod?",
    answer:
      "Kahutara PurePod is set high above the Kahutara River on an isolated sheep farm about 20 minutes inland from Kaikōura, in the South Island of New Zealand. Its setting combines river valley, foothills and views toward the Seaward Kaikōura Range.",
  },
  {
    question: "What makes Kahutara PurePod unique?",
    answer:
      "Kahutara PurePod is shaped by its elevated position above the Kahutara River. The experience feels quiet, expansive and deeply connected to the river valley, with mountain views, rural farmland and the privacy of a secluded off-grid glass cabin.",
  },
  {
    question: "Is Kahutara PurePod suitable for two guests?",
    answer:
      "Yes. Kahutara PurePod is designed for two guests, making it ideal for couples or two adults seeking a private glass cabin escape near Kaikōura. The pod is self-contained, secluded and created for a peaceful stay immersed in nature.",
  },
  {
    question: "What views can you see from Kahutara PurePod?",
    answer:
      "Kahutara PurePod looks across the Kahutara River landscape toward the Seaward Kaikōura Range. Its elevated setting gives guests a strong sense of river valley, foothills, open farmland and mountain scenery from inside the glass cabin and from the deck.",
  },
  {
    question: "How far is Kahutara PurePod from Kaikōura?",
    answer:
      "Kahutara PurePod is around 20 minutes inland from Kaikōura by car. It is also about 2.5 hours north of Christchurch, so guests can combine a secluded rural stay with time exploring the wider Kaikōura region.",
  },
  {
    question: "How long is the walk to Kahutara PurePod?",
    answer:
      "The walk from the carpark to Kahutara PurePod is approximately 950 metres and usually takes around 10–15 minutes. The track follows a rural bush setting, so good shoes or boots are recommended, particularly in wet weather.",
  },
  {
    question: "Is Kahutara PurePod good for stargazing?",
    answer:
      "Yes. Kahutara PurePod is very well suited to stargazing, with a glass roof, telescope and star map provided for guests. Its rural setting near Kaikōura, an International Dark Sky Sanctuary, makes the night sky a memorable part of the stay.",
  },
  {
    question: "What facilities are inside Kahutara PurePod?",
    answer:
      "Kahutara PurePod includes a queen bed, glass roof, three large glass sliding doors, kitchenette, gas hob, cooking equipment, fridge, bathroom, shower, heating, fresh drinking water, USB charging, books, games, telescope, star map, torch and picnic blankets.",
  },
  {
    question: "Is Kahutara PurePod off-grid?",
    answer:
      "Yes. Kahutara PurePod is solar powered and designed as a private off-grid glass cabin. There is no Wi-Fi, TV or standard power plugs, creating a calm, low-distraction stay above the Kahutara River landscape.",
  },
  {
    question: "What should guests bring for the walk-in?",
    answer:
      "Guests should bring sturdy footwear, suitable outdoor clothing and only the overnight luggage they need. The guide recommends arriving before dark, as there is no lighting on the nature walk from the carpark to the pod.",
  },
  {
    question: "What can guests do near Kahutara PurePod?",
    answer:
      "Guests can relax at the pod, watch sunrise or sunset over the hills, listen to birdsong, stargaze, read, play games or explore the surrounding rural landscape. In the Kaikōura region, guests can also enjoy whale watching, dolphin and seabird experiences, guided walks, horse trekking, wine tasting and coastal activities.",
  },
];

const kahutaraPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above the Kahutara River within an isolated sheep farm inland from Kaikōura, Kahutara looks across river valley, foothills and wide views towards the Seaward Kaikōura Range.",
    "Designed for two, the pod sits quietly within an elevated rural landscape shaped by mountain weather, birdsong, flowing water below and vast southern skies.",
    "The final walk follows a bush track through paddocks and kānuka forest before opening into the river valley setting around the pod. Inside, floor-to-ceiling glass keeps the range, changing light and surrounding landscape constantly in view.",
  ],
  galleryCaption:
    "Kahutara is defined by river valley views, the Seaward Kaikōura Range and deep rural stillness — a private glass retreat immersed in the inland Kaikōura landscape.",
  gallery: [
    {
      src: podMountainValleyLandscape,
      alt: "Kahutara PurePod glass cabin high above the river valley inland from Kaikōura, New Zealand",
      position: "50% 55%",
    },
    {
      src: podGlassReflectionsLandscape,
      alt: "Glass reflections and open landscape at Kahutara PurePod, Kaikōura",
      position: "50% 52%",
    },
    {
      src: podRiverValleyView,
      alt: "River valley view from Kahutara PurePod toward the Seaward Kaikōura Range, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bed inside Kahutara PurePod with panoramic river valley and Kaikōura mountain views, New Zealand",
      position: "50% 58%",
    },
    {
      src: podShowerRiverMountain,
      alt: "Shower with river and mountain views inside Kahutara PurePod, Kaikōura",
      position: "50% 50%",
    },
    {
      src: podWarmWoodenBathroom,
      alt: "Warm timber bathroom interior at Kahutara PurePod inland from Kaikōura",
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
          alt: "Kahutara River valley landscape in the Kaikōura countryside, New Zealand",
        },
        {
          src: travelFarm,
          alt: "Countryside farm entrance along the rural road near Kahutara PurePod in the Kaikōura region",
        },
      ],
      body:
        "Reaching Kahutara feels remote in the best possible way. The final approach follows quiet rural roads through an isolated sheep station with wide views towards the Seaward Kaikōura Range and the river valley below. From the carpark, an approximately 950 m, 10–15 minute walk continues through paddocks and native bush before opening into the elevated setting around the pod. The track is natural and uneven in places, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Inland from Kaikōura",
      editorialLead:
        "Fresh air, cooler evenings and fast-changing conditions where river valley and mountain range meet.",
      body:
        "Conditions can change quickly in the inland Kaikōura foothills, so layers are recommended. Rain and shifting light are part of the landscape and often add to the atmosphere.",
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
  hint: "River valley stillness, mountain range views and Kaikōura wildlife within reach",
  intro:
    "A curated selection of three experiences that complement Kahutara's river valley setting — Kaikōura wildlife by day, then a private return inland to the foothills and night sky.",
  items: [
    {
      title: "Kaikōura Whale Experiences",
      image: expWhale,
      imageAlt:
        "Sperm whale tail diving in the ocean during whale watching in Kaikōura, New Zealand",
      paragraphs: [
        "A unique opportunity to see whales both from the air and from the ocean, revealing the full scale and beauty of Kaikōura's marine landscape — where deep waters, dramatic mountains and open sea meet.",
        "After time on the water or in the air, Kahutara draws the day back inland to river valley quiet, elevated views and the Seaward Kaikōura Range.",
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
        "Staying at Kahutara keeps this wild coastal walk within reach while the pod itself remains an inland hideaway above the Kahutara River.",
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
        "It gives the stay a strong Kaikōura wildlife connection without changing Kahutara's quieter identity: river valley, foothills, privacy and stars.",
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
    "Beyond the river valley, Kaikōura opens out slowly.",
  moreBody:
    "Coastal walks and easy trails invite you to explore without hurry, while inland roads return you to foothills, river valleys and broad rural views. Lookouts such as Ohau Point Lookout, Point Kean Viewpoint and Dolphin View Lookout offer wide horizons, then Kahutara brings the evening back to the Seaward Kaikōura Range, privacy and open sky.",
  moreRecommendations: [],
};

const kahutaraReviews = {
  title: "What guests say",
  hint: "From recent Kahutara stays",
  intro: "Guest comments from Kahutara's inland Kaikōura river valley and mountain setting.",
  items: [
    {
      quote:
        "The open view toward the Kaikōura ranges is even better in person. We spent hours simply taking it in.",
      author: "P. & G.",
    },
    {
      quote:
        "The walk in gave us the sense of arrival we wanted, and once there it felt completely private.",
      author: "River valley weekend",
    },
    {
      quote:
        "Being close to Kaikōura wildlife experiences by day, then returning inland to quiet nights, made this stay memorable.",
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
      "Kahutara PurePod glass cabin above the Kahutara River with views to the Seaward Kaikōura Range, New Zealand",
    title: "Kahutara",
    subtitleParagraphs: [HERO_PARAGRAPH_1, HERO_PARAGRAPH_2],
    imagePosition: "30% 48%",
    imagePositionMd: "28% 46%",
    imagePositionXl: "26% 44%",
  },
  podCarouselAriaLabel: "Kahutara PurePod — photo gallery",
  podNarrative: kahutaraPodNarrative,
  travelBlock: kahutaraTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Kahutara",
    summaryIntro:
      "Whales, peninsula walks and Kaikōura wildlife — when you feel like a day beyond the river valley.",
  },
  experiencesBlock: kahutaraExperiencesBlock,
  reviews: kahutaraReviews,
  faqItems: KAHUTARA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: KAHUTARA_BOOKING_URL,
  },
};
