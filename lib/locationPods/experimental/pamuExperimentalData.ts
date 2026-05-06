import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg";
const podExterior =
  "/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg";
const podBedroom =
  "/assets/img/pamu/pamu-purepod-glass-cabin-bedroom-interior-mountain-view-new-zealand.jpg";
const podBathroom =
  "/assets/img/pamu/pamu-purepod-bathroom-shower-view-rotorua.jpg";
const expGeothermal =
  "/assets/img/pamu/rotorua-geothermal-hot-springs-lake-new-zealand.jpg";
const expMaori =
  "/assets/img/pamu/rotorua-maori-cultural-experience-village-new-zealand.jpg";
const expValley =
  "/assets/img/pamu/rotorua-volcanic-geothermal-valley-landscape-new-zealand..jpg";
const travelFence =
  "/assets/img/pamu/pamu-purepod-farm-fence-landscape-rotorua.jpg";
const travelAerial =
  "/assets/img/pamu/pamu-purepod-aerial-landscape-valley-rotorua.jpg";
const travelCheese =
  "/assets/img/pamu/pamu-purepod-local-cheese-platter-food-rotorua.jpg";
const travelBbq =
  "/assets/img/pamu/pamu-purepod-outdoor-bbq-cooking-view-rotorua.jpg";

export const PAMU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=8";

const HERO_SUBTITLE =
  "In the Rotorua region — where geothermal steam meets farming country and lakes — PurePod Pāmu is a private glass cabin for two. A short approach from the road leads to a fully private site with no neighbours; suitable footwear helps. Slow down, breathe and let the land take over.";

export const PAMU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Pāmu?",
    answer:
      "Reaching PurePod Pāmu is a drive through the Rotorua region — past lakes, geothermal areas and farming country. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the everyday behind and arriving slowly.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Rotorua has a temperate climate with warm summers and cooler winters. Geothermal areas can feel warmer and sometimes humid; the rest of the region is mild. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. The outdoor cooking area lets you eat with the landscape in view. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the stillness of the land, the changing light and the sense of being away from the everyday. A short approach from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

const pamuPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "PurePod Pāmu sits in the Rotorua region — a place defined by geothermal activity, lakes and rolling farmland. The pod is designed for two: a simple, comfortable base from which to experience the stillness of the land, the changing light and the sense of being away from the everyday. Here the earth feels close — steam, warmth and the quiet of the countryside.",
    "Arrival is part of the experience. A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
  ],
  galleryCaption:
    "PurePod Pāmu is not just a place to sleep but an immersion in the Rotorua landscape. The hills, the sky and the quiet of the farm country are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light and the stillness of the land. A place to disconnect, observe and simply be.",
  gallery: [
    {
      src: podExterior,
      alt: "Pāmu PurePod glass cabin exterior in the Rotorua landscape, New Zealand",
      position: "50% 61%",
    },
    {
      src: podBedroom,
      alt: "Bedroom with landscape view inside Pāmu PurePod, Rotorua, New Zealand",
      position: "50% 50%",
    },
    {
      src: podBathroom,
      alt: "Bathroom and shower with view at Pāmu PurePod, Rotorua, New Zealand",
      position: "50% 50%",
    },
  ],
};

const pamuTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelFence,
          alt: "Farm fence and landscape near Pāmu PurePod, Rotorua, New Zealand",
        },
        {
          src: travelAerial,
          alt: "Aerial view of valley landscape near Pāmu PurePod, Rotorua, New Zealand",
        },
      ],
      body:
        "Reaching PurePod Pāmu is a drive through the Rotorua region — past lakes, geothermal areas and farming country. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the everyday behind and arriving slowly.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Rotorua region",
      editorialLead:
        "A mild climate with warm summers, cooler winters, and occasional geothermal warmth in the air.",
      body:
        "Rotorua's weather can shift through the day, especially between open farmland and geothermal pockets. Layered clothing helps you stay comfortable at the pod and while exploring outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelCheese,
          alt: "Local cheese platter and food at Pāmu PurePod, Rotorua, New Zealand",
        },
        {
          src: travelBbq,
          alt: "Outdoor BBQ and cooking at Pāmu PurePod, Rotorua, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. The outdoor cooking area lets you eat with the landscape in view. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

const pamuExperiencesBlock = {
  title: "Experiences that define Pāmu",
  hint: "Geothermal, culture and landscape",
  intro:
    "A curated selection of three experiences that capture the essence of the Rotorua region — geothermal lakes, Māori culture and the volcanic landscape.",
  items: [
    {
      title: "Geothermal lakes & hot springs",
      image: expGeothermal,
      imageAlt:
        "Geothermal hot springs and lake in the Rotorua region, New Zealand",
      paragraphs: [
        "The Rotorua region is defined by geothermal activity — hot springs, steaming lakes and the sense that the earth is alive beneath you. A walk or drive through the geothermal valleys reveals colours, steam and a landscape that feels unlike anywhere else.",
        "A chance to experience the raw character of the land.",
      ],
      links: [
        {
          label: "Explore geothermal Rotorua",
          href: "https://www.rotoruanz.com/see-and-do/geothermal",
        },
      ],
    },
    {
      title: "Māori culture & heritage",
      image: expMaori,
      imageAlt:
        "Māori cultural experience in the Rotorua region, New Zealand",
      paragraphs: [
        "Rotorua is a centre of Māori culture — living villages, storytelling and the connection between people and the land. Visiting a marae or cultural experience offers a deeper understanding of the place and its history.",
        "The human heart of the region, woven into the landscape.",
      ],
      links: [
        {
          label: "Māori culture in Rotorua",
          href: "https://www.rotoruanz.com/see-and-do/maori-culture",
        },
      ],
    },
    {
      title: "Volcanic valley & landscape",
      image: expValley,
      imageAlt:
        "Volcanic geothermal valley landscape in the Rotorua region, New Zealand",
      paragraphs: [
        "The wider Rotorua landscape combines volcanic terrain, forest and farmland. Scenic drives and short walks reveal craters, lakes and the quiet of the countryside — a region that rewards slow exploration.",
        "Where the land tells its own story.",
      ],
      links: [
        {
          label: "Explore Rotorua",
          href: "https://www.rotoruanz.com/see-and-do",
        },
      ],
    },
  ],
  moreTitle: "Beyond the geothermal world",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead:
    "When the pace naturally slows, the area around Pāmu offers quieter moments too.",
  moreExploreGroups: [
    {
      heading: "Mineral waters",
      intro: "Mineral waters under the night sky.",
      links: [
        { name: "Polynesian Spa", href: "https://www.polynesianspa.co.nz/" },
        {
          name: "Wai Ariki Hot Springs",
          href: "https://www.wai-ariki.co.nz/",
        },
      ],
    },
    {
      heading: "Redwoods Treewalk",
      intro: "A gentle forest walk at dusk.",
      links: [
        { name: "Redwoods Treewalk", href: "https://www.treewalk.co.nz/" },
      ],
    },
  ],
  moreExploreClosing:
    "These moments bring balance — calm and stillness alongside the raw energy of the land.",
};

const pamuReviews = {
  title: "What guests say",
  hint: "From recent Pāmu stays",
  intro: "Guest feedback from Rotorua's geothermal and rural landscape.",
  items: [
    {
      quote:
        "You can feel Rotorua in every direction - quiet farmland, open sky, and geothermal character nearby.",
      author: "H. & J.",
    },
    {
      quote:
        "Cooking outside with that view was a highlight. The pace of the place is gentle from the first hour.",
      author: "Spring stay",
    },
    {
      quote:
        "The pod felt private and comfortable, and it worked beautifully as a base for nature and culture nearby.",
      author: "Guest note",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/pamu` and FAQ JSON-LD. */
export const pamuEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Rotorua",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Pāmu PurePod glass cabin in the Rotorua landscape, New Zealand",
    title: "Pāmu",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "PurePod Pāmu — photo gallery",
  podNarrative: pamuPodNarrative,
  travelBlock: pamuTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Pāmu",
    summaryIntro:
      "Geothermal country, Māori culture and volcanic landscape — when you feel like a day beyond the pod.",
  },
  experiencesBlock: pamuExperiencesBlock,
  reviews: pamuReviews,
  faqItems: PAMU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: PAMU_BOOKING_URL,
  },
};
