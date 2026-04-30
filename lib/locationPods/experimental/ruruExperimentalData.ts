import type { LocationFaqItem } from "@/components/location/LocationFaqSection";

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
const expKarangahake =
  "/assets/img/ruru/karangahake-gorge-hiking-suspension-bridge.jpg";
const expOrokawa = "/assets/img/ruru/orokawa-bay-coastal-walk-coromandel.jpg";
const expWhiritoa =
  "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg";
const travelForestPath =
  "/assets/img/ruru/coromandel-forest-path-to-ruru-purepod.jpg";
const travelHillside =
  "/assets/img/ruru/ruru-purepod-hillside-access-road-coromandel.jpg";
const travelPicnic =
  "/assets/img/ruru/ruru-purepod-picnic-local-food-coromandel.jpg";
const travelBreakfast =
  "/assets/img/ruru/ruru-purepod-breakfast-coromandel.jpg";

export const RURU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=7";

export const ruruExperimentalHero = {
  imageSrc: heroImage,
  imageAlt:
    "Ruru PurePod glass cabin in the Coromandel landscape, New Zealand",
  title: "Ruru",
  subtitle:
    "In the Coromandel — where forest meets the coast — PurePod Ruru is a private glass cabin for two in the hills amid native bush. A short walk through forest from the road leads to a hidden site with no neighbours; sturdy footwear is recommended. Slow down, breathe and let the landscape take over.",
  imagePosition: "70% 50%" as const,
  imagePositionMd: "60% 55%" as const,
  imagePositionXl: "55% 60%" as const,
};

export const ruruPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "PurePod Ruru sits in the Coromandel — a region of green hills, native bush and a coastline of bays and beaches. The pod is designed for two: a simple, comfortable base from which to experience the stillness of the forest, the changing light and the sense of being away from the everyday. Here the land feels close — birdsong, wind in the trees and the quiet of the hills.",
    "Arrival is part of the experience. A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
  ],
  galleryCaption:
    "An immersion in the Coromandel — bush, hills and sky in every quiet moment. A calm glass space for two: to watch the light change, the stars appear, and the land fall still.",
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
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/karangahake-gorge/",
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
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/whenuakura-orokawa-coastal-walk/",
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
          href: "https://www.thecoromandel.com/visit/whiritoa/",
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
          src: travelForestPath,
          alt: "Forest path to Ruru PurePod, Coromandel, New Zealand",
        },
        {
          src: travelHillside,
          alt: "Hillside access road to Ruru PurePod, Coromandel, New Zealand",
        },
      ],
      body:
        "Reaching PurePod Ruru is a drive through the Coromandel, followed by a short walk through forest to the pod. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track. The journey is part of the experience: leaving the road behind and arriving slowly in the bush.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Layers, not luck",
      editorialLead:
        "Mild and often humid — warm summers, cooler winters. Rain belongs in this landscape; it keeps the bush green.",
      body:
        "The Coromandel has a mild, often humid climate — warm in summer, cooler in winter. Rain is part of the landscape and keeps the bush green. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
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

export const ruruCta = {
  priceFrom: "From $— / night",
  bookHref: RURU_BOOKING_URL,
};
