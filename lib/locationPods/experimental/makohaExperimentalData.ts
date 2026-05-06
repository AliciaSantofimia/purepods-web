import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg";
const podNight =
  "/assets/img/makoha/makoha-purepod-glass-cabin-exterior-night-kerikeri.jpg";
const podBedroom =
  "/assets/img/makoha/makoha-purepod-bedroom-interior-glass-cabin-kerikeri.jpg";
const podLandscape =
  "/assets/img/makoha/makoha-purepod-glass-cabin-forest-exterior-night-lighting-new-zealand.jpg";
const expBoat = "/assets/img/makoha/bay-of-islands-boat-cruise-aerial.jpg";
const expWaitangi =
  "/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-hous.jpg";
const expMahinepua =
  "/assets/img/makoha/mahinepua-peninsula-coastal-walk-bay-of-islands.jpg";
const travelForest = "/assets/img/makoha/kerikeri-native-forest-walking-track.jpg";
const travelBridge =
  "/assets/img/makoha/kerikeri-native-forest-bridge-walking-track.jpg";
const travelPlatter = "/assets/img/makoha/makoha-local-food-platter-kerikeri.jpg";
const travelDinner = "/assets/img/makoha/makoha-dinner-outdoor-dining-kerikeri.jpg";

export const MAKOHA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=14";

/** Verbatim/factual lead + atmospheric line — preserved from the previous location page. */
const HERO_GEO =
  "PurePod Mākōha is a private glass cabin for two near Kerikeri in the Bay of Islands, Northland, New Zealand. Guests complete arrival with a 5–10 minute walk through native forest; suitable footwear is recommended. The site is fully private with no neighbours, set in subtropical forest with the coast and islands within reach.";

const HERO_EXISTING =
  "A private, quiet retreat for two, where you can slow down and discover the wilder side of the north — no big towns, no crowds, just nature. Native forest, coastal walks and some of the clearest night skies you will find.";

export const MAKOHA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Mākōha?",
    answer:
      "The final part of your journey follows quiet rural roads and ends with a 5–10 minute walk through native forest. This last stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "Your arrival ends with a gentle 5–10 minute walk through native forest, where the sound of roads and towns fades away. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Bay of Islands has a subtropical climate — warm and humid in summer, cooler and sometimes rainy in winter. Rain is part of the landscape here, deepening the lush, green, almost jungle-like character of the place.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Northland producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the views. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable, easy and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "Designed for two, it is a place to stop, disconnect and experience the Bay of Islands at its most pure. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
  },
];

const makohaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "In the far north of New Zealand, where subtropical forest meets the sea, PurePod Mākōha offers a different kind of escape — quiet, private and deeply connected to nature. Designed for two, it is a place to stop, disconnect and experience the Bay of Islands at its most pure: wild beaches, coastal walks, glowworms at night and vast, clear skies.",
    "Inside, the minimalist design and warm materials let nature take centre stage. The bed faces the landscape. Your arrival ends with a gentle 5–10 minute walk through native forest, where the sound of roads and towns fades away. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
  ],
  galleryCaption:
    "PurePod Mākōha is not a typical accommodation. It is an immersion in the natural world of Northland. Inside, everything is designed for two: a warm, comfortable retreat from which to watch the forest, the sky and the changing light — all from the intimacy of your hideaway in the heart of nature.",
  gallery: [
    {
      src: podNight,
      alt: "Mākōha PurePod glass cabin at night in native forest, Kerikeri, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Mākōha PurePod glass cabin, Kerikeri, New Zealand",
      position: "50% 50%",
    },
    {
      src: podLandscape,
      alt: "Native forest landscape around Mākōha PurePod, Kerikeri, Northland, New Zealand",
      position: "50% 45%",
    },
  ],
};

const makohaTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelForest,
          alt: "Native forest walking track near Mākōha PurePod, Kerikeri, Northland, New Zealand",
        },
        {
          src: travelBridge,
          alt: "Bridge on native forest walking track near Mākōha PurePod, Kerikeri, New Zealand",
        },
      ],
      body:
        "The final part of your journey follows quiet rural roads and ends with a 5–10 minute walk through native forest. This last stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Subtropical Northland",
      editorialLead:
        "Warm and humid when summer settles in; softer when winter rain deepens the green.",
      body:
        "The Bay of Islands has a subtropical climate — warm and humid in summer, cooler and sometimes rainy in winter. Rain is part of the landscape here, deepening the lush, green, almost jungle-like character of the place.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPlatter,
          alt: "Local food platter at Mākōha PurePod, Kerikeri, New Zealand",
        },
        {
          src: travelDinner,
          alt: "Outdoor dinner at Mākōha PurePod, Kerikeri, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Northland producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the views. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable, easy and worry-free.",
    },
  ],
};

const makohaExperiencesBlock = {
  title: "Around Mākōha",
  hint: "Sea, culture and wild landscape",
  intro:
    "A curated selection of three experiences that capture the essence of this place: sea, culture and wild landscape.",
  items: [
    {
      title: "Bay of Islands by boat",
      image: expBoat,
      imageAlt:
        "Boat cruise in the Bay of Islands near Kerikeri, Northland, New Zealand",
      paragraphs: [
        "Explore one of New Zealand’s most iconic coastal regions by boat — a scattered archipelago of islands, turquoise water and marine life that reflects the untamed coast surrounding PurePod Mākōha.",
        "Seeing the Bay of Islands from the water is the best way to understand why this region feels so remote and extraordinary.",
      ],
      links: [
        {
          label: "Explore Bay of Islands cruises",
          href: "https://www.exploregroup.co.nz/bay-of-islands/",
        },
      ],
    },
    {
      title: "Waitangi Treaty Grounds",
      image: expWaitangi,
      imageAlt:
        "Māori meeting house at Waitangi Treaty Grounds near Kerikeri, Bay of Islands, New Zealand",
      paragraphs: [
        "The spiritual and historical heart of New Zealand. Walk the place where Māori and European cultures first met and discover the stories that shaped the country.",
        "Staying at Mākōha puts you at the centre of this rich cultural landscape.",
      ],
      links: [
        {
          label: "Visit Waitangi Treaty Grounds",
          href: "https://www.waitangi.org.nz/",
        },
      ],
    },
    {
      title: "Mahinepua Peninsula Track",
      image: expMahinepua,
      imageAlt:
        "Mahinepua Peninsula coastal walk, Bay of Islands near Kerikeri, New Zealand",
      paragraphs: [
        "A striking coastal walk that winds through green hills and opens onto hidden beaches and wide ocean views.",
        "Here the Bay of Islands shows its wildest, most untouched side — the perfect complement to the sense of isolation and nature you experience at PurePod Mākōha.",
      ],
      links: [
        {
          label: "Mahinepua Peninsula Track",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/whangaroa-area/things-to-do/mahinepua-peninsula-track/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore the Bay of Islands",
  moreSubtitle:
    "Beyond the pod, the landscape continues to unfold at a gentle pace.",
  moreBody:
    "Kawiti Glowworm Caves and the Kerikeri River track to Rainbow Falls offer a softer, quieter side of the region — forest, water and shade, ideal for a relaxed half-day walk. For open horizons and sea air, nearby beaches such as Matauri Bay and Te Ngaere Bay invite long walks, quiet swims and slow afternoons by the water.",
  moreRecommendations: [
    {
      label: "Glowworms & limestone",
      place: "Kawiti Glowworm Caves",
      href: "https://www.kawiticaves.co.nz/",
    },
    {
      label: "Forest & waterfalls",
      place: "Rainbow Falls walk (Kerikeri)",
      href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/kerikeri-area/things-to-do/rainbow-falls-walk/",
    },
    {
      label: "Quiet beaches",
      place: "Matauri Bay & Te Ngaere Bay",
      href: "https://www.newzealand.com/int/plan/bay/bay-of-islands/",
    },
  ],
};

const makohaReviews = {
  title: "What guests say",
  hint: "From recent Mākōha stays",
  intro: "Reflections from guests who stayed in the Kerikeri forest setting.",
  items: [
    {
      quote:
        "The native-bush walk set the tone straight away. By the time we reached the pod, everything felt quieter.",
      author: "M. & R.",
    },
    {
      quote:
        "Night here was memorable: glowworms nearby, wind through the trees, and a very clear sky.",
      author: "Late-summer stay",
    },
    {
      quote:
        "It felt private and calm, while still close enough for a day out on the coast. A lovely balance.",
      author: "Returning guests",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/makoha`. */
export const makohaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Kerikeri",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Mākōha PurePod glass cabin in native forest near Kerikeri, Bay of Islands, New Zealand",
    title: "Mākōha",
    subtitleParagraphs: [HERO_GEO, HERO_EXISTING],
    imagePosition: "70% 82%",
    imagePositionMd: "60% 86%",
    imagePositionXl: "55% 90%",
  },
  podCarouselAriaLabel: "PurePod Mākōha — photo gallery",
  podNarrative: makohaPodNarrative,
  travelBlock: makohaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Mākōha",
    summaryIntro:
      "Bay cruises, Waitangi and wild coast — when you feel like leaving the forest for a day.",
  },
  experiencesBlock: makohaExperiencesBlock,
  reviews: makohaReviews,
  faqItems: MAKOHA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: MAKOHA_BOOKING_URL,
  },
};
