import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg";
const podExterior =
  "/assets/img/matu/matu-purepod-glass-cabin-exterior-waitomo.jpg";
const podBedroom =
  "/assets/img/matu/matu-purepod-bedroom-sunset-view-waitomo.jpg";
const podSunset =
  "/assets/img/matu/matu-purepod-glass-cabin-sunset-exterior-waitomo.jpg";
const expGlowworm = "/assets/img/matu/waitomo-glowworm-cave-boat-ride.jpg";
const expRuakuri = "/assets/img/matu/waitomo-ruakuri-cave-spiral.jpg";
const expMarokopa = "/assets/img/matu/waitomo-marokopa-waterfall.jpg";
const travelRoad = "/assets/img/matu/waitomo-countryside-access-road.jpg";
const travelForest =
  "/assets/img/matu/waitomo-native-forest-walking-track.jpg";
const travelPlatter = "/assets/img/matu/matu-local-food-platter-waitomo.jpg";
const travelBreakfast = "/assets/img/matu/matu-breakfast-board-waitomo.jpg";

export const MATU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=16";

const HERO_SUBTITLE =
  "In the heart of the Waitomo region, where native forest meets limestone country, PurePod Matū is a private glass cabin for two — green hills and bush above, glowworm caves below. A short walk from the road leads to a fully private site; suitable footwear helps. Slow down, listen and let the landscape take over.";

export const MATU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Matū?",
    answer:
      "Reaching PurePod Matū is a scenic drive through the Waitomo region, followed by a short walk through native forest. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the forest and the sky always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Waitomo has a temperate climate — cooler in the forest and inside the caves. Layered clothing is recommended, especially for cave visits and evenings. Rain is part of the landscape here and keeps the bush green and the atmosphere rich.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the forest, the light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the bush, the night sky and the calm of the land. A short walk from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

const matuPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "PurePod Matū sits in the Waitomo landscape — rolling green hills, native forest and the quiet of the countryside. The region is known for its caves and glowworms, but above ground it is equally rich: birdsong, changing light and a strong sense of seclusion. The pod is designed for two: a simple, comfortable base from which to experience the bush, the night sky and the calm of the land.",
    "Arrival is part of the experience. A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the forest and the sky always in view. Warm, minimal and built for slowing down.",
  ],
  galleryCaption:
    "PurePod Matū is not just a place to sleep but an immersion in the Waitomo landscape. The forest, the hills and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the bush. A place to disconnect, observe and simply be.",
  gallery: [
    {
      src: podExterior,
      alt: "Matū PurePod glass cabin exterior in the Waitomo landscape, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bedroom at sunset inside Matū PurePod, Waitomo, New Zealand",
      position: "50% 50%",
    },
    {
      src: podSunset,
      alt: "Matū PurePod at sunset, Waitomo, New Zealand",
      position: "50% 50%",
    },
  ],
};

const matuTravelBlock = {
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
          alt: "Countryside access road in the Waitomo region, New Zealand",
        },
        {
          src: travelForest,
          alt: "Native forest walking track near Matū PurePod, Waitomo, New Zealand",
        },
      ],
      body:
        "Reaching PurePod Matū is a scenic drive through the Waitomo region, followed by a short walk through native forest. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Waitomo",
      editorialLead:
        "Waitomo has a temperate climate — cooler in the forest and inside the caves. Layered clothing is recommended, especially for cave visits and evenings.",
      body:
        "Rain is part of the landscape here and keeps the bush green and the atmosphere rich.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPlatter,
          alt: "Local food platter at Matū PurePod, Waitomo, New Zealand",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast at Matū PurePod, Waitomo, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the forest, the light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

const matuExperiencesBlock = {
  title: "Experiences that define Matū",
  hint: "Caves, glowworms and forest landscape",
  intro:
    "A curated selection of three experiences that capture the essence of the Waitomo region — glowworm caves, limestone formations and the native forest above.",
  items: [
    {
      title: "Waitomo Glowworm Caves",
      image: expGlowworm,
      imageAlt: "Glowworm cave boat ride in Waitomo, New Zealand",
      paragraphs: [
        "The iconic experience of Waitomo. Drift through limestone caves lit by thousands of glowworms — a silent, almost unreal atmosphere that is unique in the world.",
        "Darkness, stillness and the soft light of the glowworms.",
      ],
      links: [
        {
          label: "Waitomo Glowworm Caves",
          href: "https://www.waitomo.com/glowworms-and-caves/waitomo-glowworm-caves",
        },
      ],
    },
    {
      title: "Ruakuri Cave",
      image: expRuakuri,
      imageAlt: "Ruakuri Cave spiral entrance, Waitomo, New Zealand",
      paragraphs: [
        "A striking cave system that combines glowworms, underground streams and dramatic limestone formations. The spiral entrance and walkways make it an accessible yet immersive journey underground.",
        "A different way to experience the hidden landscape of Waitomo.",
      ],
      links: [
        {
          label: "Ruakuri Cave",
          href: "https://www.waitomo.com/glowworms-and-caves/ruakuri-cave",
        },
      ],
    },
    {
      title: "Marokopa Falls",
      image: expMarokopa,
      imageAlt: "Marokopa Falls in the Waitomo region, New Zealand",
      paragraphs: [
        "One of the North Island’s most beautiful waterfalls, set in native bush and reached by a short, easy walk. A place where water, forest and the sense of discovery come together.",
        "The perfect complement to the cave experiences — open sky, green and the sound of water.",
      ],
      links: [
        {
          label: "Marokopa Falls Walk",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/waikato/places/waitomo-area/tracks/marokopa-falls-walk/",
        },
      ],
    },
  ],
  moreTitle: "Beyond the underground",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead:
    "While Matū is best known for its underground world, the landscape above ground invites a slower kind of exploration too.",
  moreExploreGroups: [
    {
      heading: "Black Water Rafting",
      intro: "Float through dark limestone caves lit by glowworms.",
      links: [
        {
          name: "Black Water Rafting",
          href: "https://www.waitomo.com/black-water-rafting",
        },
      ],
    },
    {
      heading: "Otorohanga Kiwi House",
      intro: "Rural wildlife and small-town calm.",
      links: [
        {
          name: "Otorohanga Kiwi House",
          href: "https://www.kiwihouse.org.nz/",
        },
      ],
    },
    {
      heading: "Hobbiton™ Movie Set",
      intro: "A cinematic countryside detour.",
      links: [
        {
          name: "Hobbiton™ Movie Set",
          href: "https://www.hobbitontours.com/",
        },
      ],
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/matu` and FAQ JSON-LD. */
export const matuEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Waitomo",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Matū PurePod glass cabin in the Waitomo landscape, New Zealand",
    title: "Matū",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "PurePod Matū — photo gallery",
  podNarrative: matuPodNarrative,
  travelBlock: matuTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Matū",
    summaryIntro:
      "Glowworm caves, limestone country and native forest — when you feel like a day beyond the pod.",
  },
  experiencesBlock: matuExperiencesBlock,
  faqItems: MATU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: MATU_BOOKING_URL,
  },
};
