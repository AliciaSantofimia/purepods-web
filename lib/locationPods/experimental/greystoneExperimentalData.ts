import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/greystone/greystone-purepod-milky-way-night-sky-retreat.jpg";
const podAerial =
  "/assets/img/greystone/greystone-purepod-bedroom-interior-valley-view-waipara-new-zealand.jpg";
const podExterior =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg";
const podBedroom =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-sunset-valley-view-new-zealand.jpg";
const podMountainDaylight =
  "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-mountain-landscape-daylight-new-zealand.jpg";
const podGoldenHour =
  "/assets/img/greystone/greystone-purepod-golden-hour-glass-cabin-retreat.jpg";
const podSunsetDeck =
  "/assets/img/greystone/greystone-purepod-sunset-deck-outdoor-retreat.jpg";
const expWine =
  "/assets/img/greystone/greystone-wine-dinner-experience-waipara.jpg";
const expSculpture =
  "/assets/img/greystone/waipara-iron-ridge-sculpture-park-landscape.jpg";
const expTrail =
  "/assets/img/greystone/waipara-vineyard-walking-trail.jpg";
const travelValley =
  "/assets/img/greystone/waipara-valley-countryside-landscape.jpg";
const travelFarm =
  "/assets/img/greystone/greystone-vineyard-access-road-waipara-new-zealand.jpg";
const travelFood =
  "/assets/img/greystone/greystone-local-food-basket-new-zealand.jpg";
const travelDining =
  "/assets/img/greystone/greystone-outdoor-dinner-wine-view-new-zealand.jpg";

export const GREYSTONE_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=3";

const HERO_SUBTITLE_PARAGRAPHS = [
  "Greystone PurePod is a private off-grid glass cabin for two set high above Greystone Wines organic vineyard in Waipara Valley.",
  "With the Teviotdale Hills behind and views across the valley towards the Southern Alps, it offers a secluded North Canterbury wine country escape.",
];

export const GREYSTONE_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Where is Greystone PurePod?",
    answer:
      "Greystone PurePod is set high above Greystone Wines organic vineyard in Waipara Valley, North Canterbury. It is less than one hour north of Christchurch, with the Teviotdale Hills behind and views across the valley towards the Southern Alps.",
  },
  {
    question: "What makes Greystone PurePod unique?",
    answer:
      "Greystone PurePod is defined by its vineyard setting above Greystone Wines, one of Waipara’s organic wineries. The experience combines a private off-grid glass cabin for two with wine country views, rolling hills, vineyard light and a strong sense of place in North Canterbury.",
  },
  {
    question: "Is Greystone PurePod suitable for two guests?",
    answer:
      "Yes. Greystone PurePod is designed for two guests, making it well suited to couples or two adults looking for a private vineyard escape. The pod has a queen bed, self-contained facilities and a secluded setting above the Waipara Valley landscape.",
  },
  {
    question: "What views can you see from Greystone PurePod?",
    answer:
      "From Greystone PurePod, guests can look across Greystone Wines organic vineyard, the Waipara Valley and the surrounding North Canterbury hills. The setting also opens towards the Southern Alps, with changing light across the vines, valley and hillside.",
  },
  {
    question: "How far is Greystone PurePod from Christchurch?",
    answer:
      "Greystone PurePod is less than one hour north of Christchurch by car. It sits in the Waipara wine region, making it a secluded off-grid stay that still feels naturally connected to a North Canterbury food and wine itinerary.",
  },
  {
    question: "How long is the walk to Greystone PurePod?",
    answer:
      "The walk from the carpark to Greystone PurePod is approximately 700 metres and usually takes around 8–10 minutes. The route follows a vineyard and hillside setting, so sturdy footwear is recommended, especially after rain.",
  },
  {
    question: "Is Greystone PurePod good for stargazing?",
    answer:
      "Yes. Greystone PurePod has a glass roof, telescope and star map for guests, making stargazing part of the experience. Its elevated rural position above Waipara Valley offers dark skies away from the light of larger towns.",
  },
  {
    question: "What facilities are inside Greystone PurePod?",
    answer:
      "Greystone PurePod includes a queen bed, glass roof, three large glass sliding doors, kitchenette, gas hob, cooking equipment, fridge, bathroom, shower, heating, fresh drinking water, USB charging, books, games, telescope, star map, torch and picnic blankets.",
  },
  {
    question: "Is Greystone PurePod off-grid?",
    answer:
      "Yes. Greystone PurePod is solar powered and designed as a private off-grid glass cabin. There is no Wi-Fi, TV or standard power plugs, helping guests slow down and connect with the vineyard, valley and surrounding North Canterbury landscape.",
  },
  {
    question: "Can guests visit Greystone Wines during their stay?",
    answer:
      "Greystone PurePod is set above Greystone Wines organic vineyard, and the welcome guide notes that guests can stop at the Greystone Wines Cellar Door for a tasting or to purchase wine. Opening times and tasting availability should be checked directly with the winery before visiting.",
  },
  {
    question: "What can guests do near Greystone PurePod?",
    answer:
      "Guests can relax at the pod, watch light move across the hills and valley, stargaze, read, play games or enjoy the vineyard setting. Nearby Waipara experiences include award-winning wineries, scenic walkways, local food producers, black truffles, olives, the Weka Pass Railway and outdoor art at Iron Ridge Quarry.",
  },
];

const greystonePodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above the Greystone organic vineyard in the Waipara Valley, Greystone is surrounded by rolling vines, open hills and wide views stretching towards the Southern Alps.",
    "Designed for two, the pod sits quietly within a landscape shaped by changing light, vineyard rows and the calm rhythm of the North Canterbury countryside.",
    "A gentle walk climbs through the vineyard towards the pod, where the elevated position opens onto wide valley views and long evening light across the hills.",
    "Inside, floor-to-ceiling glass keeps the landscape, sky and surrounding vines constantly present throughout the day.",
  ],
  galleryCaption:
    "Greystone is defined by open horizons, vineyard calm and the changing colours of the Waipara landscape — a private glass retreat immersed in New Zealand wine country.",
  gallery: [
    {
      src: podMountainDaylight,
      alt: "Greystone PurePod glass cabin with Waipara Valley hills and Southern Alps outlook",
      position: "50% 52%",
    },
    {
      src: podExterior,
      alt: "Greystone PurePod glass cabin exterior above the Waipara Valley vineyard landscape",
      position: "50% 70%",
    },
    {
      src: podGoldenHour,
      alt: "Greystone PurePod glass cabin in golden hour light above Greystone Wines vineyard",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Greystone PurePod glass cabin at sunset with views across Waipara Valley, New Zealand",
      position: "50% 58%",
    },
    {
      src: podSunsetDeck,
      alt: "Sunset deck view at Greystone PurePod above Waipara wine country",
      position: "52% 56%",
    },
    {
      src: podAerial,
      alt: "Bedroom inside Greystone PurePod with views across Waipara Valley, New Zealand",
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
          alt: "Waipara Valley countryside landscape near Greystone PurePod",
        },
        {
          src: travelFarm,
          alt: "Vineyard access road to Greystone PurePod through Waipara wine country",
        },
      ],
      body:
        "Reaching Greystone is part of the Waipara wine country experience.\n\nThe final drive winds quietly through the Greystone organic vineyard, following narrow gravel roads between vines and rolling hills before arriving at the PurePod carpark. From there, a gentle 8–10 minute walk continues up through open hillside tracks with wide views across the Waipara Valley towards the Southern Alps.\n\nParts of the track can become slippery after rain, so suitable walking footwear and light luggage are recommended.",
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
          alt: "Local food basket at Greystone PurePod in Waipara Valley",
        },
        {
          src: travelDining,
          alt: "Outdoor dinner with wine at Greystone PurePod overlooking Waipara Valley",
        },
      ],
      body:
        "Your Greystone PurePod is fully equipped for a quiet, comfortable and self-contained stay. Inside you’ll find a curated selection of heat-and-eat gourmet meals, breakfast provisions, snacks, tea and coffee — wherever possible from local producers in the region. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm, whether in the pod or on the terrace with views over the vines. With no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
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
        "Wine and dinner experience at Greystone PurePod in Waipara Valley",
      paragraphs: [
        "Greystone PurePod sits within a working, award-winning vineyard, offering an immersive way to experience Waipara wine country. Surrounded by vines and raised above the valley, the stay is shaped by light, the seasons and the quiet rhythm of vineyard work.",
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
        "Iron Ridge Quarry Sculpture Park landscape near Greystone PurePod in Waipara",
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
        "Waipara vineyard walking trail near Greystone PurePod",
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
  heroKicker: "PUREPOD · WAIPARA VALLEY",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Greystone PurePod glass cabin under the Milky Way above Waipara Valley, New Zealand",
    title: "Greystone",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
    imagePosition: "46% 56%",
    imagePositionMd: "47% 52%",
    imagePositionXl: "48% 48%",
    heroNightOverlay: true,
    heroPhotoForwardComposition: true,
  },
  podCarouselAriaLabel: "Greystone PurePod — photo gallery",
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
