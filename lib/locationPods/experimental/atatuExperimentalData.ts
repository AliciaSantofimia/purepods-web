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
const podSunriseBedroom =
  "/assets/img/atatu/atatu-purepod-sunrise-bedroom-ocean-view.jpg";
const podSunsetGlass =
  "/assets/img/atatu/atatu-purepod-sunset-glass-cabin-ocean-view.jpg";
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

const HERO_SUBTITLE_PARAGRAPHS = [
  "Atatū PurePod is a private off-grid glass cabin for two set high above the Greta Valley coastline in Hurunui.",
  "Surrounded by rolling sheep farmland, native forest, sunrise light and sweeping sea views, it offers an elevated South Island escape close to nature.",
];

export const ATATU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Where is Atatū PurePod?",
    answer:
      "Atatū PurePod is set high above the Greta Valley coastline in Hurunui, North Canterbury, about 90 minutes north-east of Christchurch. Its hilltop setting looks across rolling sheep farmland, native forest and sweeping sea views.",
  },
  {
    question: "What makes Atatū PurePod unique?",
    answer:
      "Atatū PurePod is shaped by its elevated hilltop position, sunrise light and wide coastal outlook. The experience combines open horizons, rolling farmland, native forest and sea views from a private off-grid glass cabin for two.",
  },
  {
    question: "Is Atatū PurePod suitable for two guests?",
    answer:
      "Yes. Atatū PurePod is designed for two guests, making it well suited to couples or two adults looking for a private nature escape in Hurunui. The pod has a queen bed, self-contained facilities and a secluded setting for an uninterrupted stay.",
  },
  {
    question: "What views can you see from Atatū PurePod?",
    answer:
      "From Atatū PurePod, guests can take in sweeping sea views, rolling hills, sheep farmland and native forest. The elevated setting above the Greta Valley coastline makes sunrise and changing coastal light a memorable part of the stay.",
  },
  {
    question: "How far is Atatū PurePod from Christchurch?",
    answer:
      "Atatū PurePod is about 90 minutes north-east of Christchurch by car. It is located in the Greta Valley area of Hurunui, making it a secluded rural coastal escape within reach of Christchurch and North Canterbury.",
  },
  {
    question: "How long is the walk to Atatū PurePod?",
    answer:
      "The walk from the carpark to Atatū PurePod is approximately 750 metres and usually takes around 15 minutes. The track leads through a rural hilltop setting and native bush, so sturdy footwear is recommended, especially in wet weather.",
  },
  {
    question: "Is Atatū PurePod good for stargazing?",
    answer:
      "Yes. Atatū PurePod has a glass roof, telescope and star map for guests, making stargazing part of the experience. Its private rural setting above the Greta Valley coastline offers dark skies away from the light of larger towns.",
  },
  {
    question: "What facilities are inside Atatū PurePod?",
    answer:
      "Atatū PurePod includes a queen bed, glass roof, three large glass sliding doors, kitchenette, gas hob, cooking equipment, fridge, bathroom, shower, heating, fresh drinking water, USB charging, books, games, telescope, star map, torch and picnic blankets.",
  },
  {
    question: "Is Atatū PurePod off-grid?",
    answer:
      "Yes. Atatū PurePod is solar powered and designed as a private off-grid glass cabin. There is no Wi-Fi, TV or standard power plugs, and phone signal is limited, helping guests slow down and reconnect with the surrounding Hurunui landscape.",
  },
  {
    question: "What should guests bring for the walk-in?",
    answer:
      "Guests should bring sturdy footwear, weather-appropriate clothing and only the overnight luggage they need for the stay. The guide recommends arriving before dark because there is no lighting on the nature walk from the carpark to the pod.",
  },
  {
    question: "What can guests do near Atatū PurePod?",
    answer:
      "Guests can relax at the pod, watch sunrise over the coast, listen to birdsong, stargaze, read, play games or enjoy the changing light across the hills and bay. Nearby Hurunui experiences include Waipara wineries, Nape Nape Beach, Fossil Point Cafe & Gallery, the Hurunui River mouth and local coastal walks.",
  },
];

const atatuPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Perched high above the Greta Valley coastline, Atatū looks out across rolling sheep farmland, native forest and distant sea views.",
    "Designed for two, the pod sits quietly within an open hilltop landscape shaped by wind, changing light and wide Canterbury skies.",
    "The final walk climbs gently through grassy hills and native bush before opening onto the ridgeline surrounding the pod. From inside, floor-to-ceiling glass keeps the landscape and shifting light constantly in view.",
  ],
  galleryCaption:
    "Atatū is defined by openness, elevation and coastal horizons — a private glass retreat immersed in the hills of Greta Valley.",
  gallery: [
    {
      src: podHilltop,
      alt: "Atatū PurePod glass cabin on a Hurunui hilltop with rolling farmland and sea views",
      position: "50% 55%",
    },
    {
      src: podSunriseBedroom,
      alt: "Sunrise view from the bed at Atatū PurePod over the Greta Valley coastline",
      position: "50% 48%",
    },
    {
      src: podKitchen,
      alt: "Kitchen inside Atatū PurePod with glass walls and sea views over the Greta Valley coastline",
      position: "50% 70%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Atatū PurePod with sweeping sea views from the Greta Valley coast",
      position: "50% 45%",
    },
    {
      src: podSunsetGlass,
      alt: "Atatū PurePod glass cabin at sunset with ocean views from the Hurunui hilltop",
      position: "50% 52%",
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
          alt: "Country road journey to Atatū PurePod through Greta Valley farmland",
        },
        {
          src: travelAerial,
          alt: "Atatū PurePod hilltop landscape above the Greta Valley coastline, New Zealand",
        },
      ],
      body:
        "Reaching Atatū feels like travelling deeper into the Greta Valley countryside.\n\nThe final drive follows quiet farm roads through rolling hills, native forest and open coastal farmland before arriving at the PurePod carpark. From there, a gentle 15-minute walk continues through grassy hills and native bush towards the pod, with wide sea views gradually opening along the way.\n\nParts of the track can become slippery after rain, so suitable walking footwear and light luggage are recommended.",
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
          alt: "Outdoor dining setup at Atatū PurePod with Hurunui hilltop views",
        },
        {
          src: travelProduce,
          alt: "Local produce dining experience at Atatū PurePod in Hurunui",
        },
      ],
      body:
        "Your Atatū PurePod is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
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
        "Cathedral Gully coastal landscape near Atatū PurePod in Hurunui",
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
        "Waipara Valley wine tasting experience near Atatū PurePod",
      paragraphs: [
        "Cool-climate vineyards and family-run wineries offer a relaxed way to discover the region’s food and wine culture. Waipara Springs Winery & Restaurant stands out for its seasonal cooking and local wines, with tables among the vines.",
        "About 25 minutes from Atatū PurePod, it’s a perfect pause between landscape and flavour.",
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
        "Waipara Coast cliffs and beach near Atatū PurePod in North Canterbury",
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
          href: "https://wekapassrailway.co.nz/",
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
          href: "https://www.amberleyfarmersmarket.org.nz/",
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
  heroKicker: "PUREPOD · HURUNUI",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Atatū PurePod glass cabin under night stars above the Greta Valley coastline, New Zealand",
    title: "Atatū",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
    imagePosition: "70% 90%",
    imagePositionMd: "60% 75%",
    imagePositionXl: "55% 70%",
  },
  podCarouselAriaLabel: "Atatū PurePod — photo gallery",
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
