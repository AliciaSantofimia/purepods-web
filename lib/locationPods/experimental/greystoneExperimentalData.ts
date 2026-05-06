import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-mountain-landscape-daylight-new-zealand.jpg";
const podAerial =
  "/assets/img/greystone/greystone-purepod-bedroom-interior-valley-view-waipara-new-zealand.jpg";
const podExterior =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg";
const podBedroom =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-sunset-valley-view-new-zealand.jpg";
const expWine =
  "/assets/img/greystone/greystone-wine-dinner-experience-waipara.jpg";
const expSculpture =
  "/assets/img/greystone/waipara-iron-ridge-sculpture-park-landscape.jpg";
const expTrail =
  "/assets/img/greystone/waipara-vineyard-walking-trail.jpg";
const travelValley =
  "/assets/img/greystone/waipara-valley-countryside-landscape.jpg";
const travelFarm =
  "/assets/img/greystone/kaikoura-sheep-farm-track-countryside-landscape-new-zealand.jpg";
const travelFood =
  "/assets/img/greystone/greystone-local-food-basket-new-zealand.jpg";
const travelDining =
  "/assets/img/greystone/greystone-outdoor-dinner-wine-view-new-zealand.jpg";

export const GREYSTONE_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=3";

const IMPACT_SUMMARY =
  "PurePod Greystone is a private glass cabin for two set atop the Greystone vineyard in the Waipara Valley, North Canterbury, New Zealand. Guests reach the pod on foot after about 10 minutes walking uphill from the car park. The stay sits above the vines with valley views, for two guests, with no shops or restaurants on site.";

export const GREYSTONE_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Greystone?",
    answer:
      "PurePod Greystone is less than an hour north of Christchurch, in the Waipara Valley. The final part of the journey is a short but steep walk uphill to the pod, so comfortable footwear and light luggage are recommended.",
  },
  {
    question: "How long is the walk to the pod?",
    answer:
      "Arrival is part of the experience: a walk of about 10 minutes uphill leads to the pod.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Waipara has warm, dry summers and cooler winters. Evenings can be cool year-round, so layered clothing is recommended to adapt to changing temperatures.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod Greystone is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local producers in the region. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm, whether in the pod or on the terrace with views over the vines. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Designed for two, PurePod Greystone offers simple, comfortable accommodation: a space to rest, sleep and let the days pass slowly among vineyards and silence.",
  },
];

const greystonePodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "In the heart of the Waipara Valley, PurePod Greystone is defined by wine, landscape and rural calm. Vineyards spread over gentle hills, changing light on the rows of vines and a constant sense of open space. Here time follows the rhythm of the land.",
    "PurePod Greystone sits at the top of the award-winning Greystone vineyard, raised above the rows of vines with wide views over the Waipara Valley and the surrounding hills — a landscape where viticulture and nature sit in balance.",
    "Arrival is part of the experience: a walk of about 10 minutes uphill leads to the pod. Set on the highest part of the hill and out of sight from below, the sense of privacy is immediate. From its position, the pod opens onto a wide, peaceful horizon. Depending on the season, you may see the vineyard team working in the distance — pruning, harvesting or tending the vines — connecting your stay with the living rhythm of the land.",
  ],
  galleryCaption:
    "Designed for two, PurePod Greystone offers simple, comfortable accommodation: a space to rest, sleep and let the days pass slowly among vineyards and silence.",
  gallery: [
    {
      src: podBedroom,
      alt: "Greystone PurePod glass cabin exterior at sunset, Waipara Valley, New Zealand",
      position: "50% 58%",
    },
    {
      src: podExterior,
      alt: "Greystone PurePod glass cabin exterior in Waipara Valley, New Zealand",
      position: "50% 70%",
    },
    {
      src: podAerial,
      alt: "Greystone PurePod bedroom interior with Waipara Valley view through glass walls, New Zealand",
      position: "50% 50%",
    },
  ],
};

const greystoneTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelValley,
          alt: "Waipara Valley countryside landscape in North Canterbury, New Zealand",
        },
        {
          src: travelFarm,
          alt: "Countryside track through farming landscape, New Zealand",
        },
      ],
      body:
        "PurePod Greystone is less than an hour north of Christchurch, in the Waipara Valley. The final part of the journey is a short but steep walk uphill to the pod, so comfortable footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Waipara",
      editorialLead:
        "A warm, dry wine-region climate with cooler winters and fresh evenings through the year.",
      body:
        "Temperatures can shift quickly between sun and shade across the valley, especially later in the day. Layered clothing helps keep things comfortable.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelFood,
          alt: "Local produce and food basket at Greystone PurePod, New Zealand",
        },
        {
          src: travelDining,
          alt: "Outdoor dinner with wine and vineyard views at Greystone PurePod, New Zealand",
        },
      ],
      body:
        "Your PurePod Greystone is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local producers in the region. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm, whether in the pod or on the terrace with views over the vines. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
    },
  ],
};

const greystoneExperiencesBlock = {
  title: "Experiences that define Greystone",
  hint: "Vineyards, art and trails among limestone hills",
  intro:
    "A curated selection of experiences that reflect life in the Waipara Valley — wine, landscape and quiet discoveries that set the pace of your stay.",
  items: [
    {
      title: "Living the Vineyard — Greystone, Waipara",
      image: expWine,
      imageAlt:
        "Greystone wine and dinner experience in Waipara Valley, New Zealand",
      paragraphs: [
        "PurePod Greystone sits within a working, award-winning vineyard, offering an immersive way to experience Waipara wine country. Surrounded by vines and raised above the valley, the stay is shaped by light, the seasons and the quiet rhythm of vineyard work.",
        "A setting where productive landscape and rural calm meet.",
      ],
      links: [
        {
          label: "Explore Greystone Wines",
          href: "https://www.greystonewines.co.nz/",
        },
      ],
    },
    {
      title: "Iron Ridge Quarry Sculpture Park",
      image: expSculpture,
      imageAlt:
        "Iron Ridge Quarry Sculpture Park landscape near Waipara Valley, New Zealand",
      paragraphs: [
        "An outdoor sculpture park set in a former limestone quarry, where contemporary art meets dramatic natural forms. Iron Ridge Quarry Sculpture Park offers a relaxed, evocative walk where art and landscape are experienced as one.",
        "Creativity, limestone and open horizon.",
      ],
      links: [
        {
          label: "Visit Iron Ridge Quarry Sculpture Park",
          href: "https://www.ironridgequarry.co.nz/sculpture-park",
        },
      ],
    },
    {
      title: "Te Ara Paparārangi & Mt Cass",
      image: expTrail,
      imageAlt:
        "Waipara Valley vineyard rows along walking trail in North Canterbury, New Zealand",
      paragraphs: [
        "Two distinct walks reveal the wine and limestone character of North Canterbury. Te Ara Paparārangi starts at Greystone Wines and winds through the vineyard landscape from within, while the Mt Cass Walkway climbs over limestone hills for wide views of the Waipara Valley and the Pacific.",
        "Trails among vines, hills and open panoramas.",
      ],
      links: [
        {
          label: "Explore Te Ara Paparārangi",
          href: "https://www.greystonewines.co.nz/",
        },
        {
          label: "Explore Mt Cass Walkway",
          href: "https://transwastecanterbury.co.nz/walkways/mt-cass-walkway-2/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Waipara",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead: "Open coast and quiet trails",
  moreExploreGroups: [
    {
      heading: "Beyond the vineyard",
      intro:
        "Beyond the vineyard, the North Canterbury landscape opens toward the coast and rivers, inviting you to discover the region at a gentle pace. Places like Beach Clifftop Coastal Reserve reveal open horizons and cliffs above the sea, while gentle trails follow hills and quiet riverbanks typical of the area. Small rural cafés and local spots complete the experience, extending the sense of calm, space and connection to the land.",
      links: [],
    },
  ],
};

const greystoneReviews = {
  title: "What guests say",
  hint: "From recent Greystone stays",
  intro: "Guest notes from the Waipara vineyard hill setting.",
  items: [
    {
      quote:
        "Staying above the vines was the highlight. Morning light across the valley was beautiful.",
      author: "L. & B.",
    },
    {
      quote:
        "The uphill walk in is short, and once you arrive it feels very private with vineyard views in every direction.",
      author: "Harvest season stay",
    },
    {
      quote:
        "A lovely base for a slow wine-country escape - quiet evenings, open sky, and a very comfortable cabin for two.",
      author: "Waipara weekend",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/greystone` and FAQ JSON-LD. */
export const greystoneEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Waipara Valley",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Greystone PurePod glass cabin exterior with mountain landscape in Waipara Valley, New Zealand",
    title: "Greystone",
    subtitleParagraphs: [IMPACT_SUMMARY],
    imagePosition: "50% 56%",
    imagePositionMd: "50% 54%",
    imagePositionXl: "50% 52%",
  },
  podCarouselAriaLabel: "PurePod Greystone — photo gallery",
  podNarrative: greystonePodNarrative,
  travelBlock: greystoneTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Greystone",
    summaryIntro:
      "Wine country, sculpture park and walks — when you feel like a day beyond the pod.",
  },
  experiencesBlock: greystoneExperiencesBlock,
  reviews: greystoneReviews,
  faqItems: GREYSTONE_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: GREYSTONE_BOOKING_URL,
  },
};
