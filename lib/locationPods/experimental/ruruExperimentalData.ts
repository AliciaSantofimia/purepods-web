import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

/**
 * Editorial layout content for PurePod Ruru (`/location/ruru`).
 * Imported by `RuruExperimentalView` and by `lib/locationPods/pages/ruru.tsx` for JSON-LD FAQ parity.
 */
const heroImage =
  "/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg";
const podSunset =
  "/assets/img/ruru/ruru-purepod-glass-cabin-exterior-sunset-coromandel.jpg";
const podDeck =
  "/assets/img/ruru/ruru-purepod-interior-view-deck-coromandel.jpg";
const podNight =
  "/assets/img/ruru/ruru-purepod-glass-cabin-night-sky-coromandel.jpg";
const podSunsetAerialForest =
  "/assets/img/ruru/purepod-ruru-sunset-aerial-view-native-forest-new-zealand.jpg";
const podBedroomGlass =
  "/assets/img/ruru/purepod-ruru-glass-cabin-bedroom-interior-new-zealand.jpg";
const expKarangahake =
  "/assets/img/ruru/karangahake-gorge-hiking-suspension-bridge.jpg";
const expOrokawa = "/assets/img/ruru/orokawa-bay-coastal-walk-coromandel.jpg";
const expWhiritoa =
  "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg";
const travelForestPath =
  "/assets/img/ruru/coromandel-forest-path-to-ruru-purepod.jpg";
const travelHillside =
  "/assets/img/ruru/ruru-purepod-hillside-access-road-coromandel.jpg";
const travelAerialRemote =
  "/assets/img/ruru/purepod-ruru-aerial-view-remote-landscape-new-zealand.jpg";
const travelPicnic =
  "/assets/img/ruru/ruru-purepod-picnic-local-food-coromandel.jpg";
const travelBreakfast =
  "/assets/img/ruru/ruru-purepod-breakfast-coromandel.jpg";
const travelGrazingPlatter =
  "/assets/img/ruru/purepod-ruru-local-grazing-platter-new-zealand.jpg";
const travelSlowBreakfastProduce =
  "/assets/img/ruru/purepod-ruru-slow-breakfast-local-produce-new-zealand.jpg";
const travelDiningSpread =
  "/assets/img/ruru/purepod-ruru-local-dining-spread-new-zealand.jpg";

export const RURU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=7";

export const ruruExperimentalHero = {
  imageSrc: heroImage,
  imageAlt:
    "Ruru PurePod glass cabin in the Coromandel landscape, New Zealand",
  title: "Ruru",
  subtitleParagraphs: [
    "A private glass cabin hidden among the hills near Mount Karangahake, surrounded by native bush, farmland and wide valley views.",
    "Just beyond the Coromandel, Ruru is a place for quiet mornings, changing light and complete stillness far from the pace of the city.",
  ],
  imagePosition: "70% 50%" as const,
  imagePositionMd: "60% 55%" as const,
  imagePositionXl: "55% 60%" as const,
};

export const ruruPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set among the hills near Mount Karangahake, Ruru looks out across a landscape of native bush, farmland and wide valley views.",
    "Designed for two, the pod offers a slower rhythm — mornings wrapped in mist, changing mountain light and the feeling of being completely removed from the pace of everyday life.",
    "The final approach follows rural farmland before a short walk through open landscape towards the pod. Inside, floor-to-ceiling glass keeps the surrounding hills, sky and shifting weather constantly in view.",
  ],
  galleryCaption:
    "Ruru is shaped by silence, distance and landscape — a private glass retreat where the hills, birdsong and changing seasons become part of the stay itself.",
  gallery: [
    {
      src: podSunset,
      alt: "Ruru PurePod glass cabin at sunset in the Coromandel, New Zealand",
      position: "50% 55%",
      span: "hero" as const,
    },
    {
      src: podDeck,
      alt: "Interior and deck view at Ruru PurePod, Coromandel, New Zealand",
      position: "50% 50%",
      span: "half" as const,
    },
    {
      src: podNight,
      alt: "Night sky from Ruru PurePod, Coromandel, New Zealand",
      position: "50% 63%",
      span: "half" as const,
    },
    {
      src: podSunsetAerialForest,
      alt: "Aerial sunset view of PurePod Ruru immersed in native forest landscape in New Zealand",
      position: "50% 45%",
    },
    {
      src: podBedroomGlass,
      alt: "Interior bedroom view inside PurePod Ruru with panoramic glass walls in New Zealand",
      position: "50% 50%",
    },
  ],
};

export const ruruExperiencesBlock = {
  title: "Around Ruru",
  hint: "If you feel like exploring",
  intro:
    "A few beautiful spots nearby — gorge, coast and forest — for slow days when you want to wander beyond the pod.",
  items: [
    {
      title: "Karangahake Gorge",
      image: expKarangahake,
      imageAlt:
        "Karangahake Gorge suspension bridge and walking track, Coromandel, New Zealand",
      paragraphs: [
        "A historic gorge with walking and cycling tracks, old railway tunnels and a suspension bridge over the river. The landscape mixes bush, water and the remains of the gold-mining era — a place where history and nature sit side by side.",
        "A gentle way to explore the inland Coromandel.",
      ],
      links: [
        {
          label: "Karangahake Gorge",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/kaimai-mamaku-conservation-park/karangahake-gorge",
        },
      ],
    },
    {
      title: "Orokawa Bay coastal walk",
      image: expOrokawa,
      imageAlt: "Orokawa Bay coastal walk, Coromandel, New Zealand",
      paragraphs: [
        "A coastal track that leads to a quiet bay — native bush, views of the ocean and the sense of reaching a place that feels tucked away. The walk is well formed and rewards a slow pace with light, shade and the sound of the sea.",
        "Where the bush meets the coast.",
      ],
      links: [
        {
          label: "Orokawa Bay walk",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/orokawa-scenic-reserve/things-to-do/orokawa-bay-track/",
        },
      ],
    },
    {
      title: "Whiritoa Beach",
      image: expWhiritoa,
      imageAlt:
        "Whiritoa Beach coastal landscape, Coromandel, New Zealand",
      paragraphs: [
        "A stretch of coast that captures the Coromandel mood — beach, dunes and the open Pacific. A place for long walks, swimming and the kind of stillness that comes with a quiet stretch of sand and sea.",
        "The coast in its simplest form — sand, sky and horizon.",
      ],
      links: [
        {
          label: "Whiritoa Beach",
          href: "https://www.thecoromandel.com/explore/whiritoa-beach-and-waimama-bay/",
        },
      ],
    },
  ],
  moreTitle: "More to explore",
  moreSubtitle: "More ways to explore the Coromandel at your own pace",
  moreBody:
    "Historic walks, small towns and easy coastal escapes, all within a short drive.",
  moreRecommendations: [
    {
      label: "Gold & mining heritage",
      place: "Martha Mine / Crown Mines",
      href: "https://www.freewalks.nz/martha-goldmine-pit-rim-walkway/",
    },
    {
      label: "Waterfalls & forest walks",
      place: "Owharoa Falls",
      href: "https://waterfalls.co.nz/waterfalls-by-region/87-new-zealand-waterfalls/north-island/waikato/108-owharoa-falls",
    },
    {
      label: "Waterfalls & forest walks",
      place: "Windows Walk",
      href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/kaimai-mamaku-conservation-park",
    },
  ],
};

export type RuruTravelBlockCard =
  | {
      key: string;
      variant: "photos";
      title: string;
      body: string;
      images: { src: string; alt: string }[];
    }
  | {
      key: string;
      variant: "editorial";
      title: string;
      body: string;
      editorialEyebrow: string;
      editorialLead: string;
    };

export const ruruTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelAerialRemote,
          alt: "Aerial view of PurePod Ruru surrounded by forested hills and remote landscape in New Zealand",
        },
        {
          src: travelForestPath,
          alt: "Forest path to Ruru PurePod, Coromandel, New Zealand",
        },
        {
          src: travelHillside,
          alt: "Hillside access road to Ruru PurePod, Coromandel, New Zealand",
        },
      ],
      body: `Reaching Ruru feels like travelling deeper into the landscape.

The final approach follows quiet rural roads through farmland and rolling hills before a roughly ten-minute walk towards the pod. Along the way, wide valley views, birdsong and the presence of Mount Karangahake make the journey feel slow, remote and deeply connected to nature.

The terrain is natural and can become muddy after rain, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Layers, not luck",
      editorialLead:
        "A mild, often humid climate with warm summers and cooler winters.",
      body:
        "Rain is part of the Coromandel landscape and keeps the bush green year-round. Layered clothing is recommended so you can stay comfortable at the pod and outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPicnic,
          alt: "Picnic and local food at Ruru PurePod, Coromandel, New Zealand",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast at Ruru PurePod, Coromandel, New Zealand",
        },
        {
          src: travelGrazingPlatter,
          alt: "Local cheese and charcuterie platter served at PurePod Ruru in New Zealand",
        },
        {
          src: travelSlowBreakfastProduce,
          alt: "Slow breakfast setup with yoghurt, granola and local produce at PurePod Ruru in New Zealand",
        },
        {
          src: travelDiningSpread,
          alt: "Local seasonal dining spread served at PurePod Ruru in New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

export const RURU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Ruru?",
    answer:
      "Reaching PurePod Ruru is a drive through the Coromandel, followed by a short walk through forest to the pod. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track. The journey is part of the experience: leaving the road behind and arriving slowly in the bush.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short walk from the road through native forest brings you into your own private world — no neighbours, no distractions. Sturdy footwear helps on the track. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Coromandel has a mild, often humid climate — warm in summer, cooler in winter. Rain is part of the landscape and keeps the bush green. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the stillness of the forest, the changing light and the sense of being away from the everyday. A short walk from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

const ruruReviews = {
  title: "What guests say",
  hint: "From recent Ruru stays",
  intro: "Guest reflections from Coromandel forest and coast.",
  items: [
    {
      quote:
        "Ruru felt hidden in the best way. The bush around the pod gave us complete privacy.",
      author: "K. & T.",
    },
    {
      quote:
        "We did a coastal walk during the day, then watched stars from bed that night. Hard to top.",
      author: "Weekend guests",
    },
    {
      quote:
        "Morning birdsong, quiet evenings, and soft light through the trees made the whole stay feel unhurried.",
      author: "Two-night stay",
    },
  ],
};

export const ruruCta = {
  priceFrom: "From $— / night",
  bookHref: RURU_BOOKING_URL,
};

/** Single source for `EditorialPodLocationView` on `/location/ruru`. */
export const ruruEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · COROMANDEL",
  hero: {
    imageSrc: ruruExperimentalHero.imageSrc,
    imageAlt: ruruExperimentalHero.imageAlt,
    title: ruruExperimentalHero.title,
    subtitleParagraphs: ruruExperimentalHero.subtitleParagraphs,
    imagePosition: ruruExperimentalHero.imagePosition,
    imagePositionMd: ruruExperimentalHero.imagePositionMd,
    imagePositionXl: ruruExperimentalHero.imagePositionXl,
  },
  podCarouselAriaLabel: "PurePod Ruru — photo gallery",
  podNarrative: ruruPodNarrative,
  travelBlock: ruruTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Ruru",
    summaryIntro: "Coastal walks, hidden beaches and quiet places nearby.",
  },
  experiencesBlock: ruruExperiencesBlock,
  reviews: ruruReviews,
  faqItems: RURU_FAQ_ITEMS,
  cta: ruruCta,
};
