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
const podSunsetPink =
  "/assets/img/matu/purepod-matu-sunset-glass-cabin-new-zealand.jpg";
const podCloseUpNative =
  "/assets/img/matu/purepod-matu-glass-cabin-close-up-native-landscape-new-zealand.jpg";
const expOkohua =
  "/assets/img/matu/okohua-glowworm-cave-tour-private-firefly-cave-waitomo-new-zealand.jpg";
const expRuakuri = "/assets/img/matu/waitomo-ruakuri-cave-spiral.jpg";
const expMarokopa = "/assets/img/matu/waitomo-marokopa-waterfall.jpg";
const travelRoad = "/assets/img/matu/waitomo-countryside-access-road.jpg";
const travelForest =
  "/assets/img/matu/waitomo-native-forest-walking-track.jpg";
const travelHillsideWalk =
  "/assets/img/matu/purepod-matu-open-hillside-walk-new-zealand.jpg";
const travelPlatter = "/assets/img/matu/matu-local-food-platter-waitomo.jpg";
const travelBreakfast = "/assets/img/matu/matu-breakfast-board-waitomo.jpg";
const travelBreakfastTray =
  "/assets/img/matu/purepod-matu-breakfast-tray-bed-new-zealand.jpg";
const travelBreakfastProvisions =
  "/assets/img/matu/purepod-matu-breakfast-provisions-fresh-local-food-new-zealand.jpg";

export const MATU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=16";

const HERO_PARAGRAPH_1 =
  "A private glass cabin in the Ōtorohanga countryside, set above rolling farmland with native bush and wide rural views.";

const HERO_PARAGRAPH_2 =
  "Near the Waitomo region, Matū is a quiet place for sunrise, birdsong and clear night skies — a peaceful retreat surrounded by the calm of the countryside.";

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
    "Set within the rolling farmland of the Ōtorohanga countryside, Matū is surrounded by native bush, open paddocks and wide rural views.",
    "Designed for two, the pod offers a quiet place to experience the slower rhythm of the landscape — birdsong in the morning, changing weather across the hills and long evenings beneath open skies.",
    "The final approach crosses part of a working farm before a longer walk through open countryside towards the pod. Inside, floor-to-ceiling glass keeps the surrounding farmland, sky and changing light constantly in view.",
  ],
  galleryCaption:
    "Matū is a quiet rural retreat where farmland, native bush and wide countryside skies shape the experience of staying here.",
  gallery: [
    {
      src: podExterior,
      alt: "Matū PurePod glass cabin exterior with private deck in rolling farmland near Waitomo and Ōtorohanga",
      position: "50% 55%",
    },
    {
      src: podCloseUpNative,
      alt: "Close exterior view of Matū PurePod glass cabin with native bush and rural Waitomo landscape",
      position: "50% 48%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Matū PurePod glass cabin with sunset views across rural Waitomo farmland",
      position: "50% 50%",
    },
    {
      src: podSunset,
      alt: "Matū PurePod glass cabin and private deck at sunset in the Waitomo countryside",
      position: "50% 50%",
    },
    {
      src: podSunsetPink,
      alt: "Matū PurePod glass cabin surrounded by rolling countryside at sunset near Waitomo",
      position: "50% 52%",
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
          alt: "Countryside access road on the approach to Matū PurePod in the Waitomo region",
        },
        {
          src: travelHillsideWalk,
          alt: "Guests walking across open paddocks and rolling farmland near Matū PurePod in Waitomo",
        },
        {
          src: travelForest,
          alt: "Native bush walking track on the approach to Matū PurePod near Waitomo",
        },
      ],
      body: `Reaching Matū feels like travelling higher into the landscape.

The final approach follows quiet farm roads and rolling hills before a roughly 20-minute walk across open farmland towards the pod. Along the way, wide countryside views, birdsong and the changing weather of the King Country create a strong sense of distance from everyday life.

The track includes steep and uneven sections, and the final stage crosses a farm stile, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Waitomo",
      editorialLead:
        "A temperate climate, often cooler in forest areas and inside the caves.",
      body:
        "Layered clothing is recommended, especially for cave visits and evenings. Rain is part of the landscape here, keeping the bush green and the atmosphere rich.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPlatter,
          alt: "Food platter set outdoors near Matū PurePod in the Waitomo countryside",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast board inside Matū PurePod with rural Waitomo views",
        },
        {
          src: travelBreakfastProvisions,
          alt: "Fresh bread, eggs and granola breakfast provisions prepared for guests at Matū PurePod",
        },
        {
          src: travelBreakfastTray,
          alt: "Breakfast tray with granola, yoghurt and tea served on the bed inside Matū PurePod",
        },
      ],
      body: `At Matū, meals become part of the landscape.

Evenings here are shaped by wide skies, quiet farmland and the changing light across the hills. Inside the pod you'll find breakfast provisions, tea, coffee, snacks and a selection of locally sourced dishes ready to enjoy after the walk in.

The outdoor cooking area and open views make slow dinners feel naturally connected to the rhythm of the countryside — especially as the sun disappears over the King Country and the stars begin to appear.`,
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
      title: "Okohua Glowworm Cave Tour",
      image: expOkohua,
      imageAlt:
        "Okohua Glowworm Cave with blue glowworms and limestone chamber near Waitomo",
      paragraphs: [
        "Visit a private cave with glowworms and ancient limestone formations in a small group (max. 6 people).",
        "The experience usually ends with a soak in a forest-surrounded hot tub — a quieter and more intimate way to experience Waitomo.",
      ],
      links: [
        {
          label: "Okohua Glowworm Cave Tour",
          href: "https://www.thewaitomoexperience.co.nz/okohua-glowworm-cave",
        },
      ],
    },
    {
      title: "Ruakuri Cave",
      image: expRuakuri,
      imageAlt: "Ruakuri Cave spiral walkway in the Waitomo Caves limestone landscape",
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
      imageAlt: "Marokopa Falls surrounded by native bush in the Waitomo region",
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

const matuReviews = {
  title: "What guests say",
  hint: "From recent Matū stays",
  intro: "Guest notes from the Waitomo bush-and-caves region.",
  items: [
    {
      quote:
        "After the caves, coming back to this level of quiet was exactly what we needed.",
      author: "E. & N.",
    },
    {
      quote:
        "The short forest approach gives a real sense of privacy, and the stars from bed were beautiful.",
      author: "Autumn guests",
    },
    {
      quote:
        "Simple, warm, and comfortable. We spent most of the evening listening to the bush after rain.",
      author: "One-night stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/matu` and FAQ JSON-LD. */
export const matuEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · WAITOMO",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Aerial view of Matū PurePod glass cabin among rolling farmland and native bush near Ōtorohanga and Waitomo",
    title: "Matū",
    subtitleParagraphs: [HERO_PARAGRAPH_1, HERO_PARAGRAPH_2],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "Matū PurePod — photo gallery",
  podNarrative: matuPodNarrative,
  travelBlock: matuTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Matū",
    summaryIntro:
      "Glowworm caves, limestone country and native forest — when you feel like a day beyond the pod.",
  },
  experiencesBlock: matuExperiencesBlock,
  reviews: matuReviews,
  faqItems: MATU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: MATU_BOOKING_URL,
  },
};
