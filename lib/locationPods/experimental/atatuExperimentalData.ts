import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/atatu/atatu-purepod-glass-cabin-night-stars-new-zealand.jpg";
const podHilltop =
  "/assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg";
const podKitchen =
  "/assets/img/atatu/atatu-purepod-glass-cabin-kitchen-ocean-view-new-zealand.jpg";
const podBedroom =
  "/assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg";
const expCathedral =
  "/assets/img/atatu/atatu-experience-cathedral-gully-coastal-landscape-new-zealand.jpg";
const expWine =
  "/assets/img/atatu/atatu-experience-waipara-valley-wine-tasting-new-zealand.jpg";
const expCoast =
  "/assets/img/atatu/atatu-experience-waipara-coast-cliffs-beach-new-zealand.jpg";
const travelRoad =
  "/assets/img/atatu/atatu-journey-countryside-road-landscape-new-zealand.jpg";
const travelAerial =
  "/assets/img/atatu/atatu-purepod-hilltop-landscape-aerial-new-zealand.jpg";
const travelDining =
  "/assets/img/atatu/atatu-purepod-outdoor-dining-experience-new-zealand.jpg";
const travelProduce =
  "/assets/img/atatu/atatu-purepod-local-produce-dining-experience-new-zealand.jpg";

export const ATATU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=5";

const HERO_SUBTITLE =
  "PurePod Atatū is a private hilltop glass cabin for two in the Hurunui district, North Canterbury, New Zealand. Guests complete a 750 metre walk of about 10–15 minutes over steps and uneven ground to reach the pod. The setting offers open rural views toward mountains and, on clear days, the ocean, with no neighbours or shared spaces.";

export const ATATU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Atatū?",
    answer:
      "The drive to PurePod Atatū is about 90 minutes north of Christchurch (100 km), through a historic farming region. The final part of the journey is a 750 m walk to the pod.",
  },
  {
    question: "How long is the walk, and what should I wear?",
    answer:
      "The walk takes about 10–15 minutes (around 750 m). The track has steps and uneven ground, so suitable footwear is recommended.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Atatū has a warm, dry interior climate. Days are often sunny, with cooler evenings and clear mornings. Layered clothing is recommended.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod Atatū is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
  },
  {
    question: "How many people can stay?",
    answer:
      "The pod is designed for two guests. At the end of the walk there are no neighbours or distractions — only space, privacy and views.",
  },
];

const atatuPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "High on the Hurunui landscape, PurePod Atatū is defined by space and openness. Views unfold over hills and fields, with mountains in the distance and, on clear days, the ocean. Here the light shifts, time stretches and everything invites you to slow down.",
    "PurePod Atatū is an open, quiet escape deeply connected to the land. Set high on the Hurunui landscape, the pod is surrounded by gentle hills, open fields and wide horizons stretching toward distant mountains; on clear days, the ocean appears on the horizon.",
    "Arrival is part of the journey: a 10–15 minute walk (about 750 m) marks the transition into calm. At the end there are no neighbours or distractions — only space, privacy and views that open in every direction. Designed for two, it is a simple, comfortable retreat to rest, breathe and let the pace of the day slow down.",
  ],
  galleryCaption:
    "PurePod Atatū is not just a place to sleep but an immersion in a wide, open landscape. Surrounded by fields and rolling hills, the pod feels elevated and free, with a direct connection to the natural setting. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the vast sky and the stillness of the land. A place to disconnect, observe and simply be.",
  gallery: [
    {
      src: podHilltop,
      alt: "Atatu PurePod glass cabin on a hilltop surrounded by rolling countryside in New Zealand",
      position: "50% 55%",
    },
    {
      src: podKitchen,
      alt: "Kitchen inside Atatu PurePod glass cabin with panoramic ocean views in New Zealan",
      position: "50% 70%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Atatu PurePod glass cabin with panoramic ocean views in New Zealand",
      position: "50% 45%",
    },
  ],
};

const atatuTravelBlock = {
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
          alt: "Countryside road through rolling hills on the journey to Atatū PurePod in New Zealand",
        },
        {
          src: travelAerial,
          alt: "Aerial landscape view of Atatu PurePod on a hilltop surrounded by rolling countryside in New Zealand",
        },
      ],
      body:
        "The final part of the journey is a 750 m walk to the pod. The track has steps and uneven ground, so suitable footwear is recommended. The drive to PurePod Atatū is about 90 minutes north of Christchurch (100 km), through a historic farming region.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Hurunui",
      editorialLead:
        "A warm, dry interior climate with sunny days, cooler evenings, and clear mornings.",
      body:
        "Temperatures can shift between daytime sun and evening cool, especially on exposed hilltops. Light layers help you stay comfortable throughout the stay.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelDining,
          alt: "Outdoor dining at Atatū PurePod with sunset views over the New Zealand countryside",
        },
        {
          src: travelProduce,
          alt: "Local produce and gourmet provisions at Atatū PurePod in New Zealand",
        },
      ],
      body:
        "Your PurePod Atatū is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
    },
  ],
};

const atatuExperiencesBlock = {
  title: "Experiences that define Atatū",
  hint: "Limestone landscape, open coast and rural life",
  intro:
    "A curated selection of three experiences that capture the essence of Hurunui — open landscapes, sculpted coast and rural calm.",
  items: [
    {
      title: "Cathedral Gully & Gore Bay",
      image: expCathedral,
      imageAlt:
        "Cathedral Gully and Gore Bay coastal limestone landscape, North Canterbury, New Zealand",
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
      title: "Wine & Local Flavour — Waipara",
      image: expWine,
      imageAlt:
        "Wine tasting experience in Waipara Valley near Atatu PurePod in New Zealand",
      paragraphs: [
        "Cool-climate vineyards and family-run wineries offer a relaxed way to discover the region’s food and wine culture. Waipara Springs Winery & Restaurant stands out for its seasonal cooking and local wines, with tables among the vines.",
        "About 25 minutes from PurePod Atatū, it’s a perfect pause between landscape and flavour.",
      ],
      links: [
        {
          label: "Visit Waipara Springs Winery & Restaurant",
          href: "https://www.waiparasprings.co.nz/",
        },
      ],
    },
    {
      title: "Rural Heritage & Slow Discoveries — Hurunui Life",
      image: expCoast,
      imageAlt:
        "Coastal cliffs and beach landscape on the Waipara coast near Atatu PurePod in New Zealand",
      paragraphs: [
        "Local experiences reflect the rural character of the region. The historic Weka Pass Railway offers a gentle journey through the farming landscape, while the Amberley Farmers’ Market connects you with local flavours and produce.",
        "Tradition, community and rural life in an open, peaceful setting.",
      ],
      links: [
        {
          label: "Explore Hurunui Region",
          href: "https://visithurunui.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Hurunui",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead: "Local life and small discoveries.",
  moreExploreGroups: [
    {
      heading: "Weka Pass Railway",
      intro:
        "Beyond the open landscape, Atatū also connects with Hurunui’s rural life. The Weka Pass Railway, a heritage train that runs through hills and vineyards, operates on selected days (usually Sundays and holidays) and offers a quiet, scenic way to experience local railway history.",
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
        "Every Saturday morning year-round, brings together local produce, artisan food and the unhurried pace of the community. Simple experiences that reveal the authentic side of the place.",
      links: [
        {
          name: "Amberley Farmers’ Market",
          href: "https://www.facebook.com/amberleyfarmersmarket/",
        },
      ],
    },
  ],
};

const atatuReviews = {
  title: "What guests say",
  hint: "From recent Atatū stays",
  intro: "Guest reflections from Atatū's Hurunui hilltop setting.",
  items: [
    {
      quote:
        "The elevated position gives a real sense of space. On the clearest morning we could even pick out the ocean line.",
      author: "A. & L.",
    },
    {
      quote:
        "The walk in is short, but it marks a clean break from the day. By sunset the place felt very still.",
      author: "Weekend guests",
    },
    {
      quote:
        "Clear evening sky, almost no sound, and a calm night from start to finish. We left feeling rested.",
      author: "Two-night stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/atatu` and FAQ JSON-LD. */
export const atatuEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Hurunui",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Atatū PurePod glass cabin at night under a starry sky in the New Zealand countryside",
    title: "Atatū",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 90%",
    imagePositionMd: "60% 75%",
    imagePositionXl: "55% 70%",
  },
  podCarouselAriaLabel: "PurePod Atatū — photo gallery",
  podNarrative: atatuPodNarrative,
  travelBlock: atatuTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Atatū",
    summaryIntro:
      "Limestone coast, Waipara wine country and Hurunui life — when you feel like a day beyond the pod.",
  },
  experiencesBlock: atatuExperiencesBlock,
  reviews: atatuReviews,
  faqItems: ATATU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: ATATU_BOOKING_URL,
  },
};
