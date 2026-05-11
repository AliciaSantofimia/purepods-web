import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";
const podExterior =
  "/assets/img/taima/taima-purepod-exterior-landscape-central-otago.png";
const podMilkyWay =
  "/assets/img/taima/PurePod%20T%C4%81ima%20outdoor%20deck%20sunset%20with%20mountain%20views%20and%20private%20seating%20New%20Zealand.jpg";
const podEveningReflections =
  "/assets/img/taima/Tāima PurePod evening reflections _ photo credit Paul Wilson.jpg";
const podOutdoorShower =
  "/assets/img/taima/taima-purepod-outdoor-shower-mountain-view-new-zealand.jpg";
const podKitchenPanorama =
  "/assets/img/taima/taima-purepod-kitchen-mountain-panorama-view-new-zealand.jpg";
const podInteriorOpenDeck =
  "/assets/img/taima/taima-purepod-glass-cabin-interior-open-deck-view-new-zealand.jpg";
const expSluicings =
  "/assets/img/taima/central-otago-rocky-canyon-hiking-trail.jpg";
const expLakeDunstan =
  "/assets/img/taima/central-otago-lake-dunstan-cycling-trail.jpg";
const expWine =
  "/assets/img/haurapa/tekano-estate-vineyard-central-otago-wine-region-new-zealand.jpg";
const travelJourneyLeft =
  "/assets/img/taima/T%C4%81ima%20PurePod%20walk%20to%20PurePod.jpg";
const travelJourneyRight =
  "/assets/img/taima/taima-purepod-bedroom-mountain-view-central-otago.jpg";
const travelFood =
  "/assets/img/taima/taima-local-food-platter-central-otago.jpg";
const travelMorningTea =
  "/assets/img/taima/taima-purepod-morning-tea-kettle-mountain-view-new-zealand.jpg";
const travelVineyard =
  "/assets/img/taima/T%C4%81ima%20PurePod%20BBQ%20views%20_%20photo%20credit%20Paul%20Wilson.jpg";

export const TAIMA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=13";

const HERO_SUBTITLE_PARAS = [
  "A private glass cabin set high above the Kawarau Gorge, surrounded by dry hills, rocky valleys and expansive views across the Central Otago landscape.",
  "Tāima is shaped by open skies, mountain light and the quiet scale of the high country — a secluded retreat immersed in the elevated landscapes above Cromwell.",
];

export const TAIMA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Tāima?",
    answer:
      "PurePod Tāima is located near Cromwell, around one hour from Queenstown following the Kawarau Gorge. The final section includes a short walk across historic gold-mining ground, where views begin to open.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The final walk is about 300 metres and takes roughly five to ten minutes.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Central Otago experiences hot, dry summers and cold winters. Layers are recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "You may bring your own food or pre-order a breakfast and dinner hamper when booking. Meals are designed to be simple and enjoyed at the pod with wide open views.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

const taimaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above the Central Otago landscape, Tāima looks out across dry hills, rocky valleys and expansive views towards the Kawarau Gorge and surrounding mountain ranges.",
    "Designed for two, the pod sits quietly within an elevated high-country setting shaped by open skies, changing mountain light and the wide stillness of the landscape.",
    "The final walk climbs gently through dry hillside terrain before opening onto the elevated landscape surrounding the pod. From inside, floor-to-ceiling glass keeps the mountains, valleys and shifting weather constantly present throughout the day.",
  ],
  galleryCaption:
    "Tāima is defined by elevation, openness and the vast scale of Central Otago — a private glass retreat immersed in the high-country landscape above the Kawarau Gorge.",
  gallery: [
    {
      src: podExterior,
      alt: "Tāima PurePod glass cabin exterior set in the Central Otago high country near Cromwell, New Zealand",
      position: "50% 50%",
    },
    {
      src: podInteriorOpenDeck,
      alt: "Glass cabin interior looking toward the open deck at Tāima PurePod, Central Otago, New Zealand",
      position: "50% 52%",
    },
    {
      src: podKitchenPanorama,
      alt: "Kitchen with panoramic mountain views inside Tāima PurePod, Central Otago, New Zealand",
      position: "50% 48%",
    },
    {
      src: podMilkyWay,
      alt: "PurePod Tāima outdoor deck at sunset with mountain views and private seating, Central Otago, New Zealand",
      position: "50% 52%",
    },
    {
      src: podOutdoorShower,
      alt: "Outdoor shower with mountain views at Tāima PurePod in Central Otago, New Zealand",
      position: "50% 50%",
    },
    {
      src: podEveningReflections,
      alt: "Tāima PurePod at sunset with reflections in the glass, Central Otago, New Zealand",
      position: "50% 50%",
    },
  ],
};

const taimaTravelBlock = {
  title: "Know before you go",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelJourneyLeft,
          alt: "Clutha River and autumn tones in the Central Otago landscape near Cromwell, New Zealand",
        },
        {
          src: travelJourneyRight,
          alt: "Tāima PurePod in the Central Otago landscape, approached along the Kawarau Gorge near Cromwell, New Zealand",
        },
      ],
      body:
        "Reaching Tāima is part of the Central Otago high-country experience.\n\nThe drive follows quiet rural roads through the Cromwell basin before continuing along gravel farm tracks that climb gradually into the surrounding hills. The landscape becomes increasingly open and elevated, with wide views towards the Kawarau Gorge, Lake Dunstan and the mountains beyond.\n\nFrom the PurePod carpark, a short 5–10 minute walk continues uphill through dry rocky terrain and steps towards the pod. Suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Central Otago",
      editorialLead:
        "A dry continental climate with hot summers and cold winters typical of inland Central Otago.",
      body:
        "Temperatures often shift quickly between daytime sun and cooler evenings, especially in exposed valley terrain. Layered clothing is recommended year-round.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelMorningTea,
          alt: "Morning tea with kettle and mountain views at Tāima PurePod in Central Otago, New Zealand",
        },
        {
          src: travelFood,
          alt: "Local food platter ready to enjoy at Tāima PurePod in Central Otago, New Zealand",
        },
        {
          src: travelVineyard,
          alt: "Tāima PurePod glass cabin with vineyard outlook — a setting for simple meals with wide views, Central Otago, New Zealand",
        },
      ],
      body:
        "Food at Tāima is designed to complement the openness of the Central Otago landscape.\n\nBring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are simple and easy to prepare, best enjoyed slowly at the pod with elevated views across dry hills, changing mountain light and the wide landscape surrounding Lake Dunstan and the Kawarau Gorge.\n\nAs there are no nearby shops or restaurants, everything you need is brought with you — keeping the experience quiet, private and immersed in the high-country setting.",
    },
  ],
};

const taimaExperiencesBlock = {
  title: "The experiences that define Tāima",
  hint: "Central Otago · active landscapes, scenic drives & wine country · South Island",
  intro:
    "A small selection of experiences that reflect Central Otago's landscapes, movement and relaxed pace.",
  items: [
    {
      title: "Bannockburn Sluicings — Gold-Mining Landscapes",
      image: expSluicings,
      imageAlt:
        "Rocky canyon and eroded landforms in Central Otago, echoing gold-era sculpted landscapes near Bannockburn, New Zealand",
      paragraphs: [
        "This historic reserve reveals landscapes sculpted by Central Otago's gold-mining past. Eroded cliffs and exposed earth create a striking setting that connects directly with the region's geology and history.",
        "Why it's special: gold-mining heritage + sculpted landscapes + geology + history in the land.",
      ],
      links: [
        {
          label: "Explore Bannockburn Sluicings Historic Reserve",
          href: "https://doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bannockburn-area/things-to-do/bannockburn-sluicings-track",
        },
      ],
    },
    {
      title: "Lake Dunstan Trail — Bannockburn Bridge",
      image: expLakeDunstan,
      imageAlt:
        "Lake Dunstan Trail along the lakeshore with cliffs and open water in Central Otago, New Zealand",
      paragraphs: [
        "One of Central Otago's most scenic routes, following the lakeshore between rugged cliffs and open water. Starting near Bannockburn Bridge, the trail offers wide valley views and a strong sense of space, ideal for cycling or walking.",
        "Why it's special: lakeside trail + dramatic geology + cycling & walking + open landscapes.",
      ],
      links: [
        {
          label: "Explore Lake Dunstan Trail",
          href: "https://www.southernlakestrails.nz/lake-dunstan-trail",
        },
      ],
    },
    {
      title: "Wine Tasting — Te Kano Estate or Mt Difficulty",
      image: expWine,
      imageAlt:
        "Tāima PurePod with vineyard rows and rugged Central Otago hills near Bannockburn wine country, New Zealand",
      paragraphs: [
        "Bannockburn sits at the heart of one of the world's great cool-climate wine regions. A tasting at Te Kano Estate or Mt Difficulty offers the chance to experience Central Otago's celebrated Pinot Noir among vines and rugged hills.",
        "Why it's special: Central Otago wines + Pinot Noir + vineyard views + local flavour.",
      ],
      links: [
        {
          label: "Explore Te Kano Estate",
          href: "https://www.tekanoestate.com/",
        },
        {
          label: "Explore Mt Difficulty",
          href: "https://www.mtdifficulty.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Central Otago",
  moreSubtitle: "",
  moreBody:
    "Beyond the pod, the region offers cycling trails, vineyard visits and dramatic landscapes shaped by gold and geology. Cromwell and Bannockburn are gateways to wine tasting, historic sites and the vast, open character of Central Otago.",
  moreRecommendations: [],
};

const taimaReviews = {
  title: "What guests say",
  hint: "From recent Tāima stays",
  intro: "Guest impressions from the Central Otago high-country setting.",
  items: [
    {
      quote:
        "The landscape around Tāima is dramatic and wide open. It felt remote, yet very comfortable.",
      author: "B. & M.",
    },
    {
      quote:
        "We liked the short walk across old gold-mining ground before arrival - it gives the stay a clear sense of place.",
      author: "Recent guests",
    },
    {
      quote:
        "Golden evening light and clear southern skies were the highlight for us. We stayed outside until late.",
      author: "Central Otago weekend",
    },
  ],
};

export const taimaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · CENTRAL OTAGO",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Tāima PurePod glass cabin with vineyard views and Central Otago hills near Cromwell, New Zealand",
    title: "Tāima",
    subtitleParagraphs: HERO_SUBTITLE_PARAS,
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
  },
  podCarouselAriaLabel: "PurePod Tāima — photo gallery",
  podNarrative: taimaPodNarrative,
  travelBlock: taimaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Tāima",
    summaryIntro:
      "Sluicings, Lake Dunstan and cellar doors — when you feel like a day beyond the pod.",
  },
  experiencesBlock: taimaExperiencesBlock,
  reviews: taimaReviews,
  faqItems: TAIMA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: TAIMA_BOOKING_URL,
  },
};
