import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

/**
 * Editorial layout content for PurePod Ruru (`/location/ruru`).
 * Imported by `RuruExperimentalView` and by `lib/locationPods/pages/ruru.tsx` for JSON-LD FAQ parity.
 */
const heroImage =
  "/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg";
const podSunset =
  "/assets/img/ruru/ruru-purepod-glass-cabin-exterior-sunset-coromandel.jpg";
const podDeck =
  "/assets/img/ruru/ruru-purepod-interior-view-deck-coromandel.jpg";
const podNight =
  "/assets/img/ruru/ruru-purepod-glass-cabin-night-sky-coromandel.jpg";
const podSunsetAerialForest =
  "/assets/img/ruru/purepod-ruru-sunset-aerial-view-native-forest-new-zealand.jpg";
const podBedroomGlass =
  "/assets/img/ruru/purepod-ruru-glass-cabin-bedroom-interior-new-zealand.jpg";
const expKarangahake =
  "/assets/img/ruru/karangahake-gorge-hiking-suspension-bridge.jpg";
const expOrokawa = "/assets/img/ruru/orokawa-bay-coastal-walk-coromandel.jpg";
const expWhiritoa =
  "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg";
const travelForestPath =
  "/assets/img/ruru/coromandel-forest-path-to-ruru-purepod.jpg";
const travelHillside =
  "/assets/img/ruru/ruru-purepod-hillside-access-road-coromandel.jpg";
const travelAerialRemote =
  "/assets/img/ruru/purepod-ruru-aerial-view-remote-landscape-new-zealand.jpg";
const travelPicnic =
  "/assets/img/ruru/ruru-purepod-picnic-local-food-coromandel.jpg";
const travelBreakfast =
  "/assets/img/ruru/ruru-purepod-breakfast-coromandel.jpg";
const travelGrazingPlatter =
  "/assets/img/ruru/purepod-ruru-local-grazing-platter-new-zealand.jpg";
const travelSlowBreakfastProduce =
  "/assets/img/ruru/purepod-ruru-slow-breakfast-local-produce-new-zealand.jpg";
const travelDiningSpread =
  "/assets/img/ruru/purepod-ruru-local-dining-spread-new-zealand.jpg";

export const RURU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=7";

export const ruruExperimentalHero = {
  imageSrc: heroImage,
  imageAlt:
    "Aerial view of Ruru PurePod glass cabin and private deck among native bush in the Coromandel, New Zealand",
  title: "Ruru",
  subtitleParagraphs: [
    "Ruru PurePod is a private off-grid glass cabin for two in Waikino, Coromandel, designed for a secluded nature escape among native bush, farmland and views of Mount Karangahake, within reach of Waihi, Karangahake Gorge and the Hauraki Rail Trail.",
  ],
  imagePosition: "70% 50%" as const,
  imagePositionMd: "60% 55%" as const,
  imagePositionXl: "55% 60%" as const,
};

export const ruruPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set among the hills near Mount Karangahake, Ruru looks out across a landscape of native bush, farmland and wide valley views.",
    "Designed for two, the pod offers a slower rhythm — mornings wrapped in mist, changing mountain light and the feeling of being completely removed from the pace of everyday life.",
    "The final approach follows rural farmland before a short walk through open landscape towards the pod. Inside, floor-to-ceiling glass keeps the surrounding hills, sky and shifting weather constantly in view.",
  ],
  galleryCaption:
    "Ruru is shaped by silence, distance and landscape — a private glass retreat where the hills, birdsong and changing seasons become part of the stay itself.",
  gallery: [
    {
      src: podSunset,
      alt: "Ruru PurePod glass cabin at sunset among native bush and hills in the Coromandel, New Zealand",
      position: "50% 55%",
      span: "hero" as const,
    },
    {
      src: podDeck,
      alt: "Bedroom and private deck inside Ruru PurePod with mountain views in the Coromandel, New Zealand",
      position: "50% 50%",
      span: "half" as const,
    },
    {
      src: podNight,
      alt: "Ruru PurePod glass cabin under a starry night sky in the Coromandel, New Zealand",
      position: "50% 63%",
      span: "half" as const,
    },
    {
      src: podSunsetAerialForest,
      alt: "Aerial sunset view of Ruru PurePod among native bush and forested hills in the Coromandel, New Zealand",
      position: "50% 45%",
    },
    {
      src: podBedroomGlass,
      alt: "Bedroom inside Ruru PurePod glass cabin with native bush views in the Coromandel, New Zealand",
      position: "50% 50%",
    },
  ],
};

export const ruruExperiencesBlock = {
  title: "Around Ruru",
  hint: "If you feel like exploring",
  intro:
    "A few beautiful spots nearby — gorge, coast and forest — for slow days when you want to wander beyond the pod.",
  items: [
    {
      title: "Karangahake Gorge",
      image: expKarangahake,
      imageAlt:
        "Karangahake Gorge suspension bridge over a rocky stream among native bush near Ruru PurePod, New Zealand",
      paragraphs: [
        "A historic gorge with walking and cycling tracks, old railway tunnels and a suspension bridge over the river. The landscape mixes bush, water and the remains of the gold-mining era — a place where history and nature sit side by side.",
        "A gentle way to explore the inland Coromandel.",
      ],
      links: [
        {
          label: "Karangahake Gorge",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/kaimai-mamaku-conservation-park/karangahake-gorge",
        },
      ],
    },
    {
      title: "Orokawa Bay coastal walk",
      image: expOrokawa,
      imageAlt:
        "Orokawa Bay beach and coastal landscape near Waihi, a nearby experience from Ruru PurePod",
      paragraphs: [
        "A coastal track that leads to a quiet bay — native bush, views of the ocean and the sense of reaching a place that feels tucked away. The walk is well formed and rewards a slow pace with light, shade and the sound of the sea.",
        "Where the bush meets the coast.",
      ],
      links: [
        {
          label: "Orokawa Bay walk",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/orokawa-scenic-reserve/things-to-do/orokawa-bay-track/",
        },
      ],
    },
    {
      title: "Whiritoa Beach",
      image: expWhiritoa,
      imageAlt:
        "Whiritoa Beach coastal landscape in the Coromandel, a nearby experience from Ruru PurePod",
      paragraphs: [
        "A stretch of coast that captures the Coromandel mood — beach, dunes and the open Pacific. A place for long walks, swimming and the kind of stillness that comes with a quiet stretch of sand and sea.",
        "The coast in its simplest form — sand, sky and horizon.",
      ],
      links: [
        {
          label: "Whiritoa Beach",
          href: "https://www.thecoromandel.com/explore/whiritoa-beach-and-waimama-bay/",
        },
      ],
    },
  ],
  moreTitle: "More to explore",
  moreSubtitle: "More ways to explore the Coromandel at your own pace",
  moreBody:
    "Historic walks, small towns and easy coastal escapes, all within a short drive.",
  moreRecommendations: [
    {
      label: "Gold & mining heritage",
      place: "Martha Mine / Crown Mines",
      href: "https://www.freewalks.nz/martha-goldmine-pit-rim-walkway/",
    },
    {
      label: "Waterfalls & forest walks",
      place: "Owharoa Falls",
      href: "https://waterfalls.co.nz/waterfalls-by-region/87-new-zealand-waterfalls/north-island/waikato/108-owharoa-falls",
    },
    {
      label: "Waterfalls & forest walks",
      place: "Windows Walk",
      href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/kaimai-mamaku-conservation-park",
    },
  ],
};

export type RuruTravelBlockCard =
  | {
      key: string;
      variant: "photos";
      title: string;
      body: string;
      images: { src: string; alt: string }[];
    }
  | {
      key: string;
      variant: "editorial";
      title: string;
      body: string;
      editorialEyebrow: string;
      editorialLead: string;
    };

export const ruruTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelAerialRemote,
          alt: "Remote forested hills and valley landscape on the journey to Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelForestPath,
          alt: "Walking track through native bush toward Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelHillside,
          alt: "Hillside access road through farmland and native bush toward Ruru PurePod in the Coromandel, New Zealand",
        },
      ],
      body: `Reaching Ruru feels like travelling deeper into the landscape.

The final approach follows quiet rural roads through farmland and rolling hills before a roughly ten-minute walk towards the pod. Along the way, wide valley views, birdsong and the presence of Mount Karangahake make the journey feel slow, remote and deeply connected to nature.

The terrain is natural and can become muddy after rain, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Layers, not luck",
      editorialLead:
        "A mild, often humid climate with warm summers and cooler winters.",
      body:
        "Rain is part of the Coromandel landscape and keeps the bush green year-round. Layered clothing is recommended so you can stay comfortable at the pod and outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPicnic,
          alt: "Local food platter at Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast provisions at Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelGrazingPlatter,
          alt: "Local grazing platter served at Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelSlowBreakfastProduce,
          alt: "Slow breakfast with local produce at Ruru PurePod in the Coromandel, New Zealand",
        },
        {
          src: travelDiningSpread,
          alt: "Local seasonal dining spread served at Ruru PurePod in the Coromandel, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

export const RURU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Ruru PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Ruru PurePod is designed for two guests and suits couples looking for a private nature escape in the Coromandel. Set near Waikino with views of Mount Karangahake, native bush, farmland and wide valley landscapes, it offers a secluded off-grid stay with the comfort of a glass cabin immersed in nature.",
  },
  {
    question: "How many guests can stay at Ruru PurePod?",
    answer:
      "Ruru PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a quiet, secluded stay.",
  },
  {
    question: "How private is Ruru PurePod?",
    answer:
      "Ruru PurePod is designed for privacy and seclusion. Guests are left undisturbed during their stay unless there is an emergency, and there is no daily servicing for multiple-night stays, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Ruru PurePod like?",
    answer:
      "Ruru PurePod is reached by a nature walk from the carpark. Allow around 10 minutes for the walk, and bring sturdy footwear and luggage that is easy to carry. The track can become wet after heavy rainfall, so take extra care on the walking track.",
  },
  {
    question: "Is Ruru PurePod off-grid?",
    answer:
      "Yes. Ruru PurePod is solar powered and designed as an off-grid stay. There is no wifi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "Is there mobile reception at Ruru PurePod?",
    answer:
      "Ruru PurePod has limited cell reception. As with many remote nature stays, reception may vary depending on weather, location and mobile provider.",
  },
  {
    question: "What should I bring for a stay at Ruru PurePod?",
    answer:
      "Bring sturdy walking shoes, weather-appropriate clothing and luggage that is easy to carry for the walk from the carpark. Guests should also bring their favourite drinks, especially if ordering the food hamper.",
  },
  {
    question: "How does the food hamper work at Ruru PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. It will be waiting at the PurePod on arrival if selected. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Ruru PurePod?",
    answer:
      "Ruru PurePod is near Waikino, Waihi, Mount Karangahake and the wider Coromandel region. Nearby experiences may include Karangahake Gorge walks, the Hauraki Rail Trail, Waihi heritage sites, Waihi Beach, coastal walks, swimming, surfing and waterfalls such as Owharoa Falls.",
  },
  {
    question: "What is the landscape around Ruru PurePod?",
    answer:
      "Ruru PurePod is set among forest, mountains and farmland, with views towards Mount Karangahake. The experience is focused on native bush, birdsong, wide valley views, night skies and a quiet rural Coromandel landscape.",
  },
  {
    question: "How far is Ruru PurePod from Auckland and Waihi?",
    answer:
      "Ruru PurePod is located in Waikino, around 90 minutes’ drive from Auckland and approximately 15 minutes from Waihi, depending on traffic and road conditions.",
  },
];

const ruruReviews = {
  title: "What guests say",
  hint: "From recent Ruru stays",
  intro: "Guest reflections from Coromandel forest and coast.",
  items: [
    {
      quote:
        "Ruru felt hidden in the best way. The bush around the pod gave us complete privacy.",
      author: "K. & T.",
    },
    {
      quote:
        "We did a coastal walk during the day, then watched stars from bed that night. Hard to top.",
      author: "Weekend guests",
    },
    {
      quote:
        "Morning birdsong, quiet evenings, and soft light through the trees made the whole stay feel unhurried.",
      author: "Two-night stay",
    },
  ],
};

export const ruruCta = {
  priceFrom: "From $— / night",
  bookHref: RURU_BOOKING_URL,
};

/** Single source for `EditorialPodLocationView` on `/location/ruru`. */
export const ruruEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · COROMANDEL",
  hero: {
    imageSrc: ruruExperimentalHero.imageSrc,
    imageAlt: ruruExperimentalHero.imageAlt,
    title: ruruExperimentalHero.title,
    subtitleParagraphs: ruruExperimentalHero.subtitleParagraphs,
    imagePosition: ruruExperimentalHero.imagePosition,
    imagePositionMd: ruruExperimentalHero.imagePositionMd,
    imagePositionXl: ruruExperimentalHero.imagePositionXl,
  },
  podCarouselAriaLabel: "Ruru PurePod — photo gallery",
  podNarrative: ruruPodNarrative,
  travelBlock: ruruTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Ruru",
    summaryIntro: "Coastal walks, hidden beaches and quiet places nearby.",
  },
  experiencesBlock: ruruExperiencesBlock,
  reviews: ruruReviews,
  faqItems: RURU_FAQ_ITEMS,
  cta: ruruCta,
};
