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
const podInteriorForest =
  "/assets/img/makoha/purepod-makoha-glass-cabin-interior-forest-view-new-zealand.jpg";
const podDeckDining =
  "/assets/img/makoha/purepod-makoha-private-deck-forest-dining-new-zealand.jpg";
const podAerialForest =
  "/assets/img/makoha/purepod-makoha-aerial-view-native-forest-new-zealand.jpg";
const expBoat = "/assets/img/makoha/bay-of-islands-boat-cruise-aerial.jpg";
const expWaitangi =
  "/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-hous.jpg";
const expMahinepua =
  "/assets/img/makoha/mahinepua-peninsula-coastal-walk-bay-of-islands.jpg";
const travelWalkingTrack =
  "/assets/img/makoha/purepod-makoha-walking-track-forest-path-new-zealand.jpg";
const travelForestArrival =
  "/assets/img/makoha/purepod-makoha-forest-arrival-track-new-zealand.jpg";
const travelForest = "/assets/img/makoha/kerikeri-native-forest-walking-track.jpg";
const travelBridge =
  "/assets/img/makoha/kerikeri-native-forest-bridge-walking-track.jpg";
const travelPlatter = "/assets/img/makoha/makoha-local-food-platter-kerikeri.jpg";
const travelDinner = "/assets/img/makoha/makoha-dinner-outdoor-dining-kerikeri.jpg";
const travelBreakfastBasket =
  "/assets/img/makoha/purepod-makoha-breakfast-basket-local-produce-new-zealand.jpg";
const travelKitchenForest =
  "/assets/img/makoha/purepod-makoha-kitchen-forest-view-new-zealand.jpg";
const travelEveningMeal =
  "/assets/img/makoha/purepod-makoha-evening-meal-local-produce-new-zealand.jpg";

export const MAKOHA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=14";

const HERO_PARAGRAPH_1 =
  "A private glass cabin for two near Kerikeri, surrounded by subtropical forest and close to the coast.";

const HERO_PARAGRAPH_2 =
  "Arrive through a short forest walk and settle into complete quiet — native bush, coastal air and clear night skies far from the crowds.";

export const MAKOHA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to Mākoha PurePod?",
    answer:
      "The final part of your journey follows quiet rural roads and ends with a 5–10 minute walk through native forest. This last stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "Your arrival ends with a gentle 5–10 minute walk through native forest, where the sound of roads and towns fades away. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the quiet of native bush.",
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
      "Designed for two, it is a place to stop, disconnect and experience Northland native bush at its most private. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the quiet of native forest.",
  },
];

const makohaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, nothing extra",
  paragraphs: [
    "Hidden in subtropical forest near Kerikeri, Mākoha PurePod is a private glass cabin designed for two.",
    "Here, the Bay of Islands feels close but the world feels far away — with native bush, coastal walks, glowworms at night and wide, clear skies.",
    "A short 5–10 minute forest walk leads you to the pod, tucked quietly into the landscape. Once inside, warm materials and floor-to-ceiling glass keep the focus on the forest, the changing light and the calm of Northland.",
  ],
  galleryCaption:
    "Mākoha is less about accommodation and more about slowing down — a quiet, comfortable retreat where everything is designed to bring you closer to native bush.",
  gallery: [
    {
      src: podNight,
      alt: "Mākoha PurePod glass cabin at night in native forest near Kerikeri, Northland, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Mākoha PurePod glass cabin near Kerikeri, Northland, New Zealand",
      position: "50% 50%",
    },
    {
      src: podLandscape,
      alt: "Mākoha PurePod glass cabin and sign in native forest near Kerikeri, Northland, New Zealand",
      position: "50% 45%",
    },
    {
      src: podInteriorForest,
      alt: "Interior of Mākoha PurePod with floor-to-ceiling glass walls overlooking native forest near Kerikeri, Northland, New Zealand",
      position: "50% 48%",
    },
    {
      src: podDeckDining,
      alt: "Outdoor dining setup on the private deck of Mākoha PurePod overlooking native forest near Kerikeri, Northland, New Zealand",
      position: "50% 52%",
    },
    {
      src: podAerialForest,
      alt: "Aerial view of Mākoha PurePod surrounded by dense native forest near Kerikeri, Northland, New Zealand",
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
          src: travelWalkingTrack,
          alt: "Walking track sign to Mākoha PurePod through native forest near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelForestArrival,
          alt: "Forest arrival track and directional sign near Mākoha PurePod, Kerikeri, Northland, New Zealand",
        },
        {
          src: travelForest,
          alt: "Native forest walking track to Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelBridge,
          alt: "Bridge on the native forest walking track to Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
      ],
      body: `The final part of the journey slows everything down.

After leaving the car behind, a short 5–10 minute forest walk leads you quietly towards the pod — through native bush, birdsong and the feeling of being completely removed from the outside world.

The track includes uneven natural terrain, so suitable walking footwear and light luggage are recommended.`,
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
          alt: "Local food platter at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelDinner,
          alt: "Outdoor dinner on the private deck at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelBreakfastBasket,
          alt: "Breakfast basket with local produce at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelKitchenForest,
          alt: "Kitchen area inside Mākoha PurePod overlooking native forest near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelEveningMeal,
          alt: "Evening meal served on the private deck at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
      ],
      body: `Meals at Mākoha are designed to feel simple and relaxed.

Inside the pod you will find locally sourced provisions, breakfast essentials and easy-to-prepare dishes — so evenings can be spent slowly, with the forest outside and no need to go anywhere else.`,
    },
  ],
};

const makohaExperiencesBlock = {
  title: "Around Mākoha",
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
        "Explore one of New Zealand’s most iconic coastal regions by boat — a scattered archipelago of islands, turquoise water and marine life within reach of Mākoha PurePod.",
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
        "Māori meeting house at Waitangi Treaty Grounds near Kerikeri, Bay of Islands, Northland, New Zealand",
      paragraphs: [
        "The spiritual and historical heart of New Zealand. Walk the place where Māori and European cultures first met and discover the stories that shaped the country.",
        "Staying at Mākoha puts you within reach of this rich cultural landscape.",
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
        "Mahinepua Peninsula coastal walk near Kerikeri, Bay of Islands, Northland, New Zealand",
      paragraphs: [
        "A striking coastal walk that winds through green hills and opens onto hidden beaches and wide views across the Bay of Islands.",
        "Here the Bay of Islands shows its wildest, most untouched side — a strong contrast to the native forest privacy you experience at Mākoha PurePod.",
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
  hint: "From recent Mākoha stays",
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
      "Mākoha PurePod glass cabin in native forest near Kerikeri, Northland, New Zealand",
    title: "Mākoha",
    subtitleParagraphs: [HERO_PARAGRAPH_1, HERO_PARAGRAPH_2],
    imagePosition: "70% 82%",
    imagePositionMd: "60% 86%",
    imagePositionXl: "55% 90%",
  },
  podCarouselAriaLabel: "Mākoha PurePod — photo gallery",
  podNarrative: makohaPodNarrative,
  travelBlock: makohaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Mākoha",
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
