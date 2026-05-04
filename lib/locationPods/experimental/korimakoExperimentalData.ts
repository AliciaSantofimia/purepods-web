import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/kiromako/kiromako-purepod-remote-glass-cabin-nature-new-zealand.jpg";
const podAerial =
  "/assets/img/kiromako/korimako-purepod-glass-cabin-exterior-coastal-view-new-zealand.jpg";
const podShower =
  "/assets/img/kiromako/korimako-purepod-glass-cabin-aerial-top-view-solar-panels-new-zealand.jpg";
const podBed =
  "/assets/img/kiromako/kiromako-purepod-glass-cabin-interior-bed-new-zealand.jpg";
const expGully =
  "/assets/img/kiromako/kiromako-experience-cathedral-gully-coastal-landscape-new-zealand.jpg";
const expWine =
  "/assets/img/kiromako/kiromako-experience-waipara-valley-wine-tasting-new-zealand.jpg";
const expCoast =
  "/assets/img/kiromako/kiromako-experience-waipara-coast-cliffs-beach-new-zealand.jpg";
const travelPath =
  "/assets/img/kiromako/kiromako-purepod-walking-path-arrival-new-zealand.jpg";
const travelForest =
  "/assets/img/kiromako/kiromako-purepod-forest-path-walking-trail-new-zealand.jpg";
const travelDining =
  "/assets/img/kiromako/kiromako-purepod-local-produce-dining-experience-new-zealand.jpg";
const travelDinner =
  "/assets/img/kiromako/kiromako-purepod-local-dinner-meal-new-zealand.jpg";

export const KORIMAKO_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=6";

const HERO_SUBTITLE =
  "PurePod Korimako is a private glass cabin for two, set high in the Hurunui hills of North Canterbury — open fields, long horizons and light that moves across the land. A short walk completes the arrival; there are no neighbours here, only space, glass and the wide Canterbury sky.";

export const KORIMAKO_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Korimako?",
    answer:
      "The drive to PurePod Korimako is about 90 minutes north of Christchurch (100 km), through historic farming country. The final part of the journey includes a 750 m walk to the pod. The track has steps and uneven ground, so suitable footwear is recommended.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "Arrival is part of the journey: a 10–15 minute walk (about 750 m) marks the transition into calm. The track has steps and uneven ground, so suitable footwear is recommended.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Korimako enjoys a warm, dry inland climate. Days are often sunny, with cooler evenings and clear mornings. Layered clothing is recommended. The mix of open hills and distant sea keeps the air clear and the light strong.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod Korimako is fully equipped for a quiet, comfortable and self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
  },
  {
    question: "How many people can stay?",
    answer:
      "PurePod Korimako is designed for two. At the end of the walk there are no neighbours or distractions — only space, privacy and views that open in every direction.",
  },
];

const korimakoPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "PurePod Korimako is an open, quiet escape deeply connected to the land. Set high on the Hurunui landscape, the pod is surrounded by gentle hills, open fields and wide horizons stretching toward distant mountains; on clear days, the ocean appears on the horizon.",
    "Arrival is part of the journey: a 10–15 minute walk (about 750 m) marks the transition into calm. At the end there are no neighbours or distractions — only space, privacy and views that open in every direction. Designed for two, it is a simple, comfortable retreat to rest, breathe and let the pace of the day slow down.",
  ],
  galleryCaption:
    "PurePod Korimako is not just a place to sleep but an immersion in a wide, open landscape. Surrounded by fields and rolling hills, the pod feels elevated and free, with a direct connection to the natural setting. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the vast sky and the stillness of the land. A place to disconnect, observe and simply be.",
  gallery: [
    {
      src: podAerial,
      alt: "Korimako PurePod glass cabin exterior with coastal view, Hurunui, New Zealand",
      position: "52% 50%",
    },
    {
      src: podShower,
      alt: "Aerial top view of Korimako PurePod glass cabin with solar panels, Hurunui, New Zealand",
      position: "50% 60%",
    },
    {
      src: podBed,
      alt: "Interior of Korimako PurePod glass cabin with bed, Hurunui, New Zealand",
      position: "50% 65%",
    },
  ],
};

const korimakoTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelPath,
          alt: "Walking path toward Korimako PurePod in the Hurunui, New Zealand",
        },
        {
          src: travelForest,
          alt: "Forest path and walking trail near Korimako PurePod, New Zealand",
        },
      ],
      body:
        "The final part of the journey includes a 750 m walk to the pod. The track has steps and uneven ground, so suitable footwear is recommended. The drive to PurePod Korimako is about 90 minutes north of Christchurch (100 km), through historic farming country.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Hurunui",
      editorialLead:
        "Korimako enjoys a warm, dry inland climate. Days are often sunny, with cooler evenings and clear mornings.",
      body:
        "Layered clothing is recommended. The mix of open hills and distant sea keeps the air clear and the light strong.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelDining,
          alt: "Local produce and dining at Korimako PurePod, Hurunui, New Zealand",
        },
        {
          src: travelDinner,
          alt: "Dinner at Korimako PurePod, Hurunui, New Zealand",
        },
      ],
      body:
        "Your PurePod Korimako is fully equipped for a quiet, comfortable and self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
    },
  ],
};

const korimakoExperiencesBlock = {
  title: "Experiences that define Korimako",
  hint: "Limestone landscape, open coast and rural life",
  intro:
    "A curated selection of three experiences that capture the essence of Hurunui — open landscapes, sculpted coast and rural calm.",
  items: [
    {
      title: "Cathedral Gully & Gore Bay",
      image: expGully,
      imageAlt:
        "Cathedral Gully and Gore Bay coastal landscape, North Canterbury, New Zealand",
      paragraphs: [
        "Limestone formations, sculpted cliffs and an open coast define this part of North Canterbury. Cathedral Gully and Gore Bay reveal wide beaches, clear horizons and a strong sense of space.",
        "A landscape where time moves slowly and nature sets the pace.",
      ],
      links: [
        {
          label: "Explore Cathedral Gully",
          href: "https://maps.app.goo.gl/NBLG9s4ZR81d762y9",
        },
        {
          label: "Explore Gore Bay",
          href: "https://maps.app.goo.gl/Krv1Yfp9jmSp6tUz9",
        },
      ],
    },
    {
      title: "Wine & local flavour — Waipara",
      image: expWine,
      imageAlt:
        "Wine tasting in Waipara Valley near Korimako PurePod, New Zealand",
      paragraphs: [
        "Cool-climate vineyards and family-run wineries offer a relaxed way to discover the region’s food culture. Waipara Springs Winery & Restaurant is known for seasonal cooking and local wines, with tables among the vines.",
        "About 25 minutes from PurePod Korimako, it is a perfect pause between landscape and flavour.",
      ],
      links: [
        {
          label: "Visit Waipara Springs Winery & Restaurant",
          href: "https://www.waiparasprings.co.nz/",
        },
      ],
    },
    {
      title: "Rural heritage & slow discoveries",
      image: expCoast,
      imageAlt:
        "Waipara coast with cliffs and beach near Korimako PurePod, New Zealand",
      paragraphs: [
        "Local experiences reflect the rural character of the region. The historic Weka Pass Railway offers a gentle journey through farming country, while the Amberley Farmers’ Market connects you with local produce and the rhythm of the community.",
        "Tradition, community and rural life in an open, serene setting.",
      ],
      links: [
        {
          label: "Explore Hurunui region",
          href: "https://visithurunui.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Hurunui",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead: "Local life and quiet discoveries.",
  moreExploreGroups: [
    {
      heading: "Weka Pass Railway",
      intro:
        "Beyond the open landscape, Korimako also connects with Hurunui’s rural life. The Weka Pass Railway, a heritage train that runs through hills and vineyards, operates on selected days (usually Sundays and holidays) and offers a quiet, scenic way to experience local railway history.",
      links: [
        {
          name: "Weka Pass Railway",
          href: "https://www.wekapassrailway.co.nz/",
        },
      ],
    },
    {
      heading: "Amberley Farmers’ Market",
      intro:
        "The Amberley Farmers’ Market, every Saturday morning year-round, brings together local produce, artisan food and the slow pace of the community. Simple experiences that reveal the authentic side of the place.",
      links: [
        {
          name: "Amberley Farmers’ Market",
          href: "https://www.facebook.com/amberleyfarmersmarket/",
        },
      ],
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/korimako` and FAQ JSON-LD. */
export const korimakoEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Hurunui",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Korimako PurePod glass cabin in the Hurunui landscape, New Zealand",
    title: "Korimako",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "PurePod Korimako — photo gallery",
  podNarrative: korimakoPodNarrative,
  travelBlock: korimakoTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Korimako",
    summaryIntro:
      "Limestone coast, Waipara wine country and Hurunui life — when you feel like a day beyond the pod.",
  },
  experiencesBlock: korimakoExperiencesBlock,
  faqItems: KORIMAKO_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: KORIMAKO_BOOKING_URL,
  },
};
