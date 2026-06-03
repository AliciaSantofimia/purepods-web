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
const podTwilight =
  "/assets/img/haurapa/haurapa-purepod-glass-cabin-mountain-twilight-view-new-zealand.jpg";
const podSunlitDeck =
  "/assets/img/haurapa/haurapa-purepod-glass-cabin-exterior-sunlit-deck-new-zealand.jpg";
const podMountainDeckBreakfast =
  "/assets/img/haurapa/haurapa-purepod-mountain-deck-breakfast-quiet-evening-new-zealand.jpg";
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
const foodBbqSunset =
  "/assets/img/haurapa/haurapa-purepod-bbq-mountain-valley-sunset-new-zealand.jpg";

export const HAURAPA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=9";

const HERO_SUBTITLE_PARAGRAPHS = [
  "Haurapa PurePod is a private off-grid glass cabin for two near Cromwell, Central Otago, set high above the landscape with views towards the Pisa Range, Lake Dunstan, rugged hills and wide high-country skies.",
];

export const HAURAPA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Haurapa PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Haurapa PurePod is designed for two guests and suits couples looking for a private high-country nature escape near Cromwell, Central Otago. Set above rugged hills with views towards the Pisa Range and Lake Dunstan landscapes, it offers a secluded off-grid stay surrounded by wide skies, rocky terrain and Central Otago stillness.",
  },
  {
    question: "How many guests can stay at Haurapa PurePod?",
    answer:
      "Haurapa PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a quiet, secluded stay.",
  },
  {
    question: "How private is Haurapa PurePod?",
    answer:
      "Haurapa PurePod is designed for privacy and seclusion. Guests are left undisturbed during their stay unless there is an emergency, and there is no daily servicing for multiple-night stays, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Haurapa PurePod like?",
    answer:
      "Haurapa PurePod is reached by an uphill nature walk from the carpark. The walk is about 700m and takes around 20 minutes. The track crosses rocky terrain and is not suitable for wheeled luggage, so sturdy footwear and a small backpack or easy-to-carry overnight bag are recommended.",
  },
  {
    question: "Is Haurapa PurePod off-grid?",
    answer:
      "Yes. Haurapa PurePod is solar powered and designed as an off-grid stay. There is no WiFi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "What should I bring for a stay at Haurapa PurePod?",
    answer:
      "Bring sturdy walking shoes, layered clothing for Central Otago conditions and luggage that is easy to carry for the uphill walk from the carpark. Guests should also bring their favourite drinks, especially if ordering the food hamper.",
  },
  {
    question: "How does the food hamper work at Haurapa PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. If selected, the dinner and breakfast package will be waiting at the PurePod on arrival. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Haurapa PurePod?",
    answer:
      "Haurapa PurePod is near Cromwell and Lake Dunstan, with easy access to Central Otago experiences such as the Lake Dunstan Trail, Bannockburn Sluicings, local wineries, award-winning restaurants and the Clutha River Heritage Cruise.",
  },
  {
    question: "What is the landscape around Haurapa PurePod?",
    answer:
      "Haurapa PurePod is set in Central Otago high country near Cromwell, with rugged hills, rocky terrain, wide skies and views towards the Pisa Range and Lake Dunstan landscapes. The experience is focused on mountain light, stargazing, quiet rural surroundings and the open feel of the high-country landscape.",
  },
  {
    question: "How far is Haurapa PurePod from Queenstown and Wānaka?",
    answer:
      "Haurapa PurePod is located near Cromwell in Central Otago, around one hour’s drive from Queenstown and Wānaka, depending on traffic and road conditions.",
  },
];

const haurapaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above the Central Otago landscape, Haurapa looks out across dry hills, rocky terrain and expansive views towards the Pisa Range and Lake Dunstan.",
    "Designed for two, the pod sits quietly within a high-country landscape shaped by mountain light, open skies and the wide stillness of the Upper Clutha basin.",
    "The final walk climbs gradually through dry hillside tracks before opening onto the elevated landscape surrounding the pod. From inside, floor-to-ceiling glass keeps the mountains, changing weather and vast horizons constantly in view.",
  ],
  galleryCaption:
    "Haurapa is defined by elevation, openness and the dramatic scale of Central Otago — a private glass retreat immersed in the high-country landscape.",
  gallery: [
    {
      src: podSunlitDeck,
      alt: "Sunlit deck outside Haurapa PurePod in the Central Otago high country near Cromwell",
      position: "50% 52%",
    },
    {
      src: podInterior,
      alt: "Interior of Haurapa PurePod with bed, dining table and Central Otago mountain views near Cromwell",
      position: "50% 70%",
    },
    {
      src: podExterior,
      alt: "Haurapa PurePod exterior above Cromwell in the Central Otago high-country landscape",
      position: "50% 55%",
    },
    {
      src: podMountainDeckBreakfast,
      alt: "Breakfast on the deck at Haurapa PurePod with rocky Central Otago high-country views",
      position: "50% 54%",
    },
    {
      src: podBedroomSunset,
      alt: "Haurapa PurePod glass cabin bedroom with sunset reflections in Central Otago",
      position: "50% 70%",
    },
    {
      src: podTwilight,
      alt: "Haurapa PurePod glass cabin at twilight with Central Otago mountain views near Cromwell",
      position: "50% 48%",
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
      title: "The journey",
      images: [
        {
          src: journeyWalking,
          alt: "Walking track to Haurapa PurePod through rocky Central Otago high-country terrain",
        },
        {
          src: journeyTrack,
          alt: "Haurapa PurePod access track above Cromwell with Lake Dunstan and Central Otago high-country views",
        },
      ],
      body:
        "Reaching Haurapa is part of the Central Otago high-country experience.\n\nThe drive follows quiet rural roads through the Cromwell basin and surrounding hills before arriving at the working farm where the PurePod is located. From the carpark, a 15–20 minute uphill walk continues across dry hillside tracks and rocky ground, gradually opening onto vast views towards the Pisa Range and Lake Dunstan.\n\nThe exposed landscape can feel hot, dry or windy depending on the season, so suitable walking footwear, light luggage and weather layers are recommended.",
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
      title: "Food & dining",
      images: [
        {
          src: foodDining,
          alt: "Outdoor dining with local produce at Haurapa PurePod in Central Otago",
        },
        {
          src: foodHamper,
          alt: "Local produce food hamper at Haurapa PurePod with Central Otago mountain views",
        },
        {
          src: foodBbqSunset,
          alt: "BBQ at sunset at Haurapa PurePod with Central Otago high-country views near Cromwell",
        },
      ],
      body:
        "Food at Haurapa is designed to complement the wide-open landscape of Central Otago.\n\nBring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are simple and easy to prepare, best enjoyed slowly at the pod with expansive views towards the Pisa Range, Lake Dunstan and the changing evening light across the hills.\n\nAs there are no nearby shops or restaurants, everything you need is brought with you — keeping the experience quiet, private and immersed in the landscape.",
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
        "Lake Dunstan Trail beside Lake Dunstan with rugged Central Otago hills near Bannockburn",
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
        "Bannockburn Sluicings rocky gold-mining landscape in Central Otago",
      paragraphs: [
        "This historic reserve reveals landscapes sculpted by Central Otago's gold-mining past. Eroded cliffs and exposed earth create a striking setting that connects directly with the region's geology and history.",
        "Why it's special: gold-mining heritage, sculpted landscapes, geology, history in the land.",
      ],
      links: [
        {
          label: "Explore Bannockburn Sluicings Historic Reserve",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bannockburn-area/things-to-do/bannockburn-sluicings-track",
        },
      ],
    },
    {
      title: "Wine Tasting — Te Kano Estate or Mt Difficulty",
      image: expVineyard,
      imageAlt:
        "Te Kano Estate winery and vineyard in the Central Otago wine region",
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
  heroKicker: "PUREPOD · CENTRAL OTAGO",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Haurapa PurePod glass cabin above Cromwell with Central Otago high-country mountain views",
    title: "Haurapa",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
    imagePosition: "52% 72%",
    imagePositionMd: "51% 70%",
    imagePositionXl: "50% 68%",
  },
  podCarouselAriaLabel: "Haurapa PurePod — photo gallery",
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
