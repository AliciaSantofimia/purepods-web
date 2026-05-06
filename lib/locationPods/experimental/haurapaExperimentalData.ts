import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/haurapa/haurapa-purepod-bedroom-view-mountains-central-otago-new-zealand.jpg";
const podExterior =
  "/assets/img/haurapa/haurapa-purepod-exterior-landscape-central-otago.jpg";
const podInterior =
  "/assets/img/haurapa/haurapa-purepod-interior-view-central-otago.jpg";
const podBedroomSunset =
  "/assets/img/haurapa/haurapa-purepod-bedroom-sunset-central-otago.jpg";
const expHiking =
  "/assets/img/haurapa/haurapa-hiking-trail-central-otago-landscape-new-zealand.jpg";
const expOliveGrove =
  "/assets/img/haurapa/haurapa-olive-grove-central-otago-landscape-new-zealand.jpg";
const expVineyard =
  "/assets/img/haurapa/tekano-estate-vineyard-central-otago-wine-region-new-zealand.jpg";
const journeyWalking =
  "/assets/img/haurapa/haurapa-purepod-walking-track-arrival-central-otago-new-zealand.jpg";
const journeyTrack =
  "/assets/img/haurapa/haurapa-purepod-access-track-central-otago-new-zealand.jpg";
const foodDining =
  "/assets/img/haurapa/haurapa-outdoor-dining-local-produce-central-otago-new-zealand.jpg";
const foodHamper =
  "/assets/img/haurapa/haurapa-purepod-food-hamper-lunch-central-otago.jpg";

export const HAURAPA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=9";

const HERO_SUBTITLE =
  "A peaceful retreat in the dramatic heart of Central Otago. PurePod Haurapa offers high-country calm and wide, rugged landscapes above Cromwell, with views across rocky formations and toward the Pisa Range. Shaped by geology and extreme seasons, it's a place of expansive days, quiet nights and a deep sense of space.";

export const HAURAPA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Haurapa?",
    answer:
      "PurePod Haurapa is located near Cromwell, around one hour from Queenstown. The final part of the journey includes a 700 m uphill walk following historic gold-mining tracks.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The final walk is about 700 metres and usually takes around 15 to 20 minutes uphill.",
  },
  {
    question: "What is the weather usually like?",
    answer:
      "Central Otago has strong seasonal contrasts, with hot dry summers and cold winters, sometimes with snow. Layered clothing is recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "You can bring your own food or pre-order a breakfast and dinner hamper when booking. Hampers feature local Central Otago produce and are designed for simple meals enjoyed at the pod.",
  },
  {
    question: "How many people can stay?",
    answer:
      "PurePod Haurapa is designed for two guests, with a private setting and no shared spaces.",
  },
];

const haurapaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "A 700-metre walk (15–20 minutes) leads to the pod, following historic gold-rush tracks as views open and privacy increases. Set high above the landscape, the pod feels completely secluded, with no neighbours or shared spaces.",
    "Designed for two, it offers a warm, comfortable base to take in the vastness of Central Otago — simple accommodation where the landscape takes the lead.",
  ],
  galleryCaption:
    "High-country calm and wide views across rocky formations and the Pisa Range — a place to rest, walk and let the vast Central Otago landscape shape your stay.",
  gallery: [
    {
      src: podExterior,
      alt: "Haurapa PurePod exterior in Central Otago landscape, New Zealand",
      position: "50% 55%",
    },
    {
      src: podInterior,
      alt: "Interior view from Haurapa PurePod with bed, dining table and mountain landscape in Central Otago",
      position: "50% 70%",
    },
    {
      src: podBedroomSunset,
      alt: "Glass cabin bedroom at Haurapa PurePod with sunset reflections in Central Otago",
      position: "50% 70%",
    },
  ],
};

const haurapaTravelBlock = {
  title: "Know before you go",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The Journey",
      images: [
        {
          src: journeyWalking,
          alt: "Walking track to Haurapa PurePod arrival in Central Otago, New Zealand",
        },
        {
          src: journeyTrack,
          alt: "Haurapa PurePod access track through Central Otago high-country, New Zealand",
        },
      ],
      body:
        "PurePod Haurapa is located near Cromwell, approximately one hour from Queenstown. The final part of the journey includes a 700 m uphill walk, following historic gold-mining tracks.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Central Otago",
      editorialLead:
        "Strong seasonal contrasts, with hot dry summers and cold winters, sometimes with snow.",
      body:
        "Daily temperatures can shift quickly in the high country, especially from sun to evening chill. Layered clothing is recommended year-round for comfort outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "The Food",
      images: [
        {
          src: foodDining,
          alt: "Outdoor dining with local produce at Haurapa PurePod, Central Otago, New Zealand",
        },
        {
          src: foodHamper,
          alt: "Food hamper lunch at Haurapa PurePod with local produce and mountain views in Central Otago, New Zealand",
        },
      ],
      body:
        "You may bring your own food or pre-order a breakfast and dinner hamper when booking. Hampers feature fresh Central Otago produce and are designed for simple meals enjoyed at the pod, with uninterrupted views across the landscape.",
    },
  ],
};

const haurapaExperiencesBlock = {
  title: "Experiences that define Haurapa",
  hint: "Wine country, rugged landscapes and cycling trails",
  intro:
    "A curated selection of experiences that capture the essence of Central Otago — lakeside trails, gold-mining heritage and the region's celebrated wines.",
  items: [
    {
      title: "Lake Dunstan Trail — Bannockburn Bridge",
      image: expHiking,
      imageAlt:
        "Lake Dunstan Trail hiking path with lakeside and valley views in Central Otago, New Zealand",
      paragraphs: [
        "One of Central Otago's most scenic routes, following the lakeshore between rugged cliffs and open water. Starting near Bannockburn Bridge, the trail offers wide valley views and a strong sense of space, ideal for cycling or walking.",
        "Why it's special: lakeside trail, dramatic geology, cycling and walking, open landscapes.",
      ],
      links: [
        {
          label: "Explore Lake Dunstan Trail",
          href: "https://www.southernlakestrails.nz/lake-dunstan-trail",
        },
      ],
    },
    {
      title: "Bannockburn Sluicings — Gold-Mining Landscapes",
      image: expOliveGrove,
      imageAlt:
        "Bannockburn Sluicings sculpted gold-mining landscapes in Central Otago, New Zealand",
      paragraphs: [
        "This historic reserve reveals landscapes sculpted by Central Otago's gold-mining past. Eroded cliffs and exposed earth create a striking setting that connects directly with the region's geology and history.",
        "Why it's special: gold-mining heritage, sculpted landscapes, geology, history in the land.",
      ],
      links: [
        {
          label: "Explore Bannockburn Sluicings Historic Reserve",
          href: "https://doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bannockburn-area/things-to-do/bannockburn-sluicings-track",
        },
      ],
    },
    {
      title: "Wine Tasting — Te Kano Estate or Mt Difficulty",
      image: expVineyard,
      imageAlt:
        "Te Kano Estate vineyard and Central Otago wine region landscape, New Zealand",
      paragraphs: [
        "Bannockburn sits at the heart of one of the world's great cool-climate wine regions. A tasting at Te Kano Estate or Mt Difficulty offers the chance to experience Central Otago's celebrated Pinot Noir among vines and rugged hills.",
        "Why it's special: Central Otago wines, Pinot Noir, vineyard views, local flavour.",
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

const haurapaReviews = {
  title: "What guests say",
  hint: "From recent Haurapa stays",
  intro: "Guest reflections from Haurapa's high-country Central Otago location.",
  items: [
    {
      quote:
        "Haurapa feels truly elevated - rocky views, huge sky, and a strong sense of space in every direction.",
      author: "T. & A.",
    },
    {
      quote:
        "The uphill walk in makes the arrival feel intentional, and the privacy once at the pod is excellent.",
      author: "Recent stay",
    },
    {
      quote:
        "Cold, clear evenings and bright quiet mornings were exactly what we wanted from a short escape.",
      author: "High-country weekend",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/haurapa`. */
export const haurapaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Central Otago",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Haurapa PurePod bedroom with panoramic mountain views in Central Otago, New Zealand",
    title: "Central Otago, Haurapa",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "52% 72%",
    imagePositionMd: "51% 70%",
    imagePositionXl: "50% 68%",
  },
  podCarouselAriaLabel: "PurePod Haurapa — photo gallery",
  podNarrative: haurapaPodNarrative,
  travelBlock: haurapaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Haurapa",
    summaryIntro:
      "Trails, sluicings and cellar doors — when you feel like a day beyond the pod.",
  },
  experiencesBlock: haurapaExperiencesBlock,
  reviews: haurapaReviews,
  faqItems: HAURAPA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: HAURAPA_BOOKING_URL,
  },
};
