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
const podNativeGrass =
  "/assets/img/korimako/korimako-purepod-hidden-glass-cabin-in-native-grass.jpg";
const podCoastalLight =
  "/assets/img/korimako/korimako-purepod-glass-cabin-coastal-light-exterior.jpg";
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
const travelBreakfast =
  "/assets/img/kiromako/korimako-purepod-homemade-breakfast-jars-outdoors.jpg";
const travelBbq =
  "/assets/img/kiromako/korimako-purepod-private-bbq-dining-experience.jpg";

export const KORIMAKO_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=6";

const HERO_SUBTITLE_PARAGRAPHS = [
  "A private glass cabin nestled into native bush along the Greta Valley coastline, surrounded by rolling farmland, coastal hills and wide views towards Motunau Island.",
  "Korimako is shaped by birdsong, sea air and the changing light of the Canterbury coast — a quiet retreat immersed in native bush and open coastal landscapes.",
];

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
    "Nestled into native bush along the Greta Valley coastline, Korimako looks out across rolling farmland, coastal hills and wide views towards Motunau Island.",
    "Designed for two, the pod sits quietly within a landscape shaped by birdsong, sea air and the changing light of the Canterbury coast.",
    "The final walk passes through grassy hills and native bush before opening onto the coastal landscape surrounding the pod. Inside, floor-to-ceiling glass keeps the bay views, vegetation and shifting light constantly present throughout the day.",
  ],
  galleryCaption:
    "Korimako is defined by coastal stillness, native bush and wide rural horizons — a private glass retreat immersed in the Greta Valley landscape.",
  gallery: [
    {
      src: podAerial,
      alt: "Korimako PurePod glass cabin exterior with coastal view, Hurunui, New Zealand",
      position: "52% 50%",
    },
    {
      src: podNativeGrass,
      alt: "Korimako PurePod surrounded by native coastal grass and bush",
      position: "48% 52%",
    },
    {
      src: podShower,
      alt: "Aerial top view of Korimako PurePod glass cabin with solar panels, Hurunui, New Zealand",
      position: "50% 60%",
    },
    {
      src: podCoastalLight,
      alt: "Glass PurePod exterior with coastal views at Korimako",
      position: "52% 48%",
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
        "Reaching Korimako is a gradual transition from open farmland into native bush along the Greta Valley coastline.\n\nThe final drive follows quiet country and farm roads through rolling hills and working farmland before arriving at the PurePod carpark. From there, a gentle 7–10 minute walk continues through native bush and grassy hills towards the pod, with birdsong and coastal views accompanying the track.\n\nParts of the path can become slippery after rain, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Hurunui",
      editorialLead:
        "A warm, dry inland climate with sunny days, cooler evenings, and clear mornings.",
      body:
        "Temperatures shift between daytime sun and evening cool, especially across exposed hills. Light layers are recommended, with clear air and strong light typical of the area.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelBreakfast,
          alt: "Homemade breakfast jars served outdoors at Korimako PurePod",
        },
        {
          src: travelDining,
          alt: "Local produce and dining at Korimako PurePod, Hurunui, New Zealand",
        },
        {
          src: travelDinner,
          alt: "Dinner at Korimako PurePod, Hurunui, New Zealand",
        },
        {
          src: travelBbq,
          alt: "Preparing a private BBQ dinner at Korimako PurePod",
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

const korimakoReviews = {
  title: "What guests say",
  hint: "From recent Korimako stays",
  intro: "Guest feedback from Korimako's Hurunui high-country setting.",
  items: [
    {
      quote:
        "Korimako feels open and elevated, with big sky and farmland all around. Exactly the quiet we were after.",
      author: "R. & E.",
    },
    {
      quote:
        "The walk in makes the transition from road to retreat very clear. Once there, it feels private and calm.",
      author: "Autumn weekend",
    },
    {
      quote:
        "We loved the clear inland light and long views. A calm place to read, rest, and move slowly.",
      author: "Recent stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/korimako` and FAQ JSON-LD. */
export const korimakoEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · HURUNUI",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Korimako PurePod glass cabin in the Hurunui landscape, New Zealand",
    title: "Korimako",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
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
  reviews: korimakoReviews,
  faqItems: KORIMAKO_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: KORIMAKO_BOOKING_URL,
  },
};
