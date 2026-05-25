import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/manakau/manakau-purepod-sunrise-over-mountain-landscape.jpg";
/** The Pod carousel — exterior → interior → detail → vistas → shower → night (hero sunrise JPG only on hero). */
const podHillsLandscape =
  "/assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg";
const podBedroomMountainView =
  "/assets/img/manakau/manakau-purepod-bedroom-with-mountain-view.jpg";
const podSunset =
  "/assets/img/manakau/manakau-purepod-glass-cabin-sunset-kaikoura.jpg";
const podSeawardMountains =
  "/assets/img/manakau/manakau-purepod-glass-cabin-seaward-kaikoura-mountains.jpg";
const podShowerMountainView =
  "/assets/img/manakau/manakau-purepod-shower-with-mountain-view.jpg";
const podMilkyWay =
  "/assets/img/manakau/manakau-purepod-milky-way-stargazing-kaikoura.jpg";
const expWhale = "/assets/img/kahutara/kaikoura-whale-watching-new-zealand.jpg";
const expWalkway =
  "/assets/img/kahutara/kaikoura-peninsula-walkway-coastal-track.jpg";
const expSeals = "/assets/img/kahutara/kaikoura-seal-colony-new-zealand.jpg";
const travelFarm =
  "/assets/img/manakau/kaikoura-countryside-farm-entrance.jpg";
const travelValley =
  "/assets/img/manakau/kaikoura-river-valley-landscape.jpg";
const foodBreakfastMountainView =
  "/assets/img/manakau/manakau-purepod-breakfast-with-mountain-view.jpg";
const foodOutdoorGrazingPlatter =
  "/assets/img/manakau/manakau-purepod-outdoor-grazing-platter.jpg";
const travelPlatter =
  "/assets/img/manakau/manakau-local-food-platter-kaikoura.jpg";
const travelBreakfast =
  "/assets/img/manakau/manakau-breakfast-outdoor-kaikoura.jpg";

export const MANAKAU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=2";

const HERO_PARAGRAPH_1 =
  "Manakau PurePod is a private off-grid glass cabin for two on an isolated sheep station inland from Kaikōura.";

const HERO_PARAGRAPH_2 =
  "Set among open hills, paddocks and kānuka and mānuka bush, it looks toward Mt Manakau and the Seaward Kaikōura Range for a quiet South Island escape.";

export const MANAKAU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Where is Manakau PurePod?",
    answer:
      "Manakau PurePod is set on an isolated sheep station about 20 minutes inland from Kaikōura, in the South Island of New Zealand. The pod looks toward Mt Manakau and the Seaward Kaikōura Range, with open hills, paddocks and native bush shaping the surrounding landscape.",
  },
  {
    question: "What makes Manakau PurePod unique?",
    answer:
      "Manakau PurePod is defined by its wide rural outlook, views toward Mt Manakau and the Seaward Kaikōura Range, and its private off-grid setting. It offers a quiet glass cabin escape where farmland, mountains, big skies and native kānuka and mānuka bush create a strong sense of place.",
  },
  {
    question: "Is Manakau PurePod suitable for two guests?",
    answer:
      "Yes. Manakau PurePod is designed for two guests, making it well suited to couples or two adults looking for a private nature escape near Kaikōura. The pod has a queen bed, self-contained facilities and a secluded setting for an uninterrupted stay.",
  },
  {
    question: "What views can you see from Manakau PurePod?",
    answer:
      "From Manakau PurePod, guests can enjoy open views across the surrounding sheep station, paddocks, hills and the Seaward Kaikōura Range, including Mt Manakau. The glass design keeps the landscape close from the bed, deck, kitchen and living space.",
  },
  {
    question: "How far is Manakau PurePod from Kaikōura?",
    answer:
      "Manakau PurePod is around 20 minutes inland from Kaikōura by car. It is also about 2.5 hours north of Christchurch, making it a secluded South Island escape that still connects naturally with a wider Kaikōura itinerary.",
  },
  {
    question: "How long is the walk to Manakau PurePod?",
    answer:
      "The walk from the carpark to Manakau PurePod is approximately 850 metres and usually takes around 10–15 minutes. The track leads through paddocks and kānuka and mānuka bush, so sturdy footwear is recommended, especially after rain.",
  },
  {
    question: "Is Manakau PurePod good for stargazing?",
    answer:
      "Yes. Manakau PurePod is an excellent stargazing escape, with a glass roof, telescope and star map provided inside the pod. Its rural position near Kaikōura, an International Dark Sky Sanctuary, gives guests the chance to experience dark skies with very little artificial light.",
  },
  {
    question: "What facilities are inside Manakau PurePod?",
    answer:
      "Manakau PurePod includes a queen bed, glass roof, three large glass sliding doors, kitchenette, gas hob, cooking equipment, fridge, bathroom, shower, heating, fresh drinking water, USB charging, books, games, telescope, star map, torch and picnic blankets.",
  },
  {
    question: "Is Manakau PurePod off-grid?",
    answer:
      "Yes. Manakau PurePod is solar powered and designed as a private off-grid glass cabin. There is no Wi-Fi, TV or standard power plugs, helping guests disconnect from everyday routines and reconnect with the surrounding Kaikōura landscape.",
  },
  {
    question: "What should guests bring for the walk-in?",
    answer:
      "Guests should bring sturdy footwear, weather-appropriate clothing and only the overnight luggage they need for the stay. The walk is short but rural, and the guide recommends arriving before dark because there is no lighting on the nature walk to the pod.",
  },
  {
    question: "What can guests do near Manakau PurePod?",
    answer:
      "Guests can slow down at the pod, watch the light change across the hills, stargaze, listen to birdsong, read, play games or walk nearby for wider views. In the Kaikōura region, guests can explore whale watching, dolphin and seabird experiences, coastal walks, horse trekking, wilderness walks and local food experiences.",
  },
];

const manakauPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set within an isolated sheep station inland from Kaikōura, Manakau looks out across rolling farmland towards the Seaward Kaikōura Range, including Mt Manakau.",
    "Designed for two, the pod sits quietly within a landscape of open hills, tussock grass and vast southern skies — a place shaped by distance, weather and the rhythm of the land.",
    "The final walk crosses paddocks and kānuka and mānuka bush before opening onto the hills surrounding the pod. Inside, floor-to-ceiling glass keeps the mountains, farmland and changing light constantly in view.",
  ],
  galleryCaption:
    "Manakau is defined by wide landscapes, mountain views and deep rural stillness — a private glass retreat immersed in the Kaikōura countryside.",
  gallery: [
    {
      src: podHillsLandscape,
      alt: "Manakau PurePod glass cabin among open hills inland from Kaikōura, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroomMountainView,
      alt: "Bedroom with mountain views inside Manakau PurePod, Kaikōura, New Zealand",
      position: "50% 48%",
    },
    {
      src: podSunset,
      alt: "Sunset light on Manakau PurePod glass cabin, Kaikōura, New Zealand",
      position: "50% 52%",
    },
    {
      src: podSeawardMountains,
      alt: "View through glass from Manakau PurePod toward Mt Manakau and the Seaward Kaikōura Range",
      position: "50% 55%",
    },
    {
      src: podShowerMountainView,
      alt: "Shower with mountain views inside Manakau PurePod, Kaikōura, New Zealand",
      position: "50% 50%",
    },
    {
      src: podMilkyWay,
      alt: "Milky Way and night sky above Manakau PurePod, Kaikōura, New Zealand",
      position: "50% 50%",
    },
  ],
};

const manakauTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelFarm,
          alt: "Rural sheep station entrance on the journey to Manakau PurePod near Kaikōura",
        },
        {
          src: travelValley,
          alt: "River valley and open hills on the journey to Manakau PurePod in the Kaikōura region",
        },
      ],
      body: `Reaching Manakau feels like travelling deeper into the Kaikōura backcountry.

The final drive follows unpaved farm roads through an isolated sheep station, crossing several shallow fords with wide views towards the Seaward Kaikōura Range. From the carpark, a 10–15 minute walk continues through paddocks, kānuka and mānuka bush before opening onto the hills surrounding the pod.

The track is natural and uneven in places, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Kaikōura",
      editorialLead:
        "A temperate maritime climate, with warm clear days and cooler evenings.",
      body:
        "Conditions can shift quickly where mountains and ocean meet. Layered clothing and a windproof layer are recommended for comfort outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: foodBreakfastMountainView,
          alt: "Breakfast with mountain views at Manakau PurePod, Kaikōura, New Zealand",
        },
        {
          src: foodOutdoorGrazingPlatter,
          alt: "Outdoor grazing platter with local produce at Manakau PurePod, Kaikōura",
        },
        {
          src: travelPlatter,
          alt: "Local food platter ready to enjoy at Manakau PurePod, Kaikōura, New Zealand",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast outdoors on the deck at Manakau PurePod, Kaikōura, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

const manakauExperiencesBlock = {
  title: "Experiences that define Manakau",
  hint: "Wildlife, coast and mountain landscape",
  intro:
    "A curated selection of three experiences that capture the essence of the Kaikōura region — marine wildlife, coastal walks and the meeting of mountains and sea.",
  items: [
    {
      title: "Kaikōura Whale Experiences",
      image: expWhale,
      imageAlt:
        "Sperm whale tail diving in the ocean during whale watching in Kaikōura, New Zealand",
      paragraphs: [
        "A unique opportunity to see whales both from the air and from the ocean, revealing the full scale and beauty of Kaikōura's marine landscape — where deep waters, dramatic mountains and open sea meet.",
        "From Manakau, a wildlife day on the coast pairs with a quiet return inland to open hills, paddocks and the night sky above the sheep station.",
      ],
      links: [
        {
          label: "Explore Whale Watch Kaikōura",
          href: "https://whalewatch.co.nz/your-experience/our-tours/whale-watch-trip-gift-voucher/",
        },
        {
          label: "Explore Kaikōura Scenic Flights",
          href: "https://gchaviation.com/kaikoura-scenic-flights/",
        },
      ],
    },
    {
      title: "Kaikōura Peninsula Walkway",
      image: expWalkway,
      imageAlt:
        "Coastal cliffs along the Kaikōura Peninsula Walkway in New Zealand",
      paragraphs: [
        "A scenic coastal walk with open ocean views, rocky headlands and distant mountains — perfect for exploring at a relaxed pace while observing wildlife in its natural habitat, including New Zealand fur seals, seabirds and, at times, dolphins and whales offshore.",
        "Staying at Manakau places you within reach of this wild coastal landscape while keeping the pod experience private, rural and deeply connected to the Kaikōura backcountry.",
      ],
      links: [
        {
          label: "Explore Kaikōura Peninsula Walkway",
          href: "https://www.google.com/maps/place/Kaik%C5%8Dura+Peninsula+Walkway,+Canterbury+Region+7300,+New+Zealand/@-42.4256257,173.6889881,17z",
        },
      ],
    },
    {
      title: "Seal Kayak & Seal Swim Kaikōura",
      image: expSeals,
      imageAlt:
        "New Zealand fur seal resting on rocks near the Kaikōura coast",
      paragraphs: [
        "An active and immersive way to explore the coastline — paddling alongside seals or swimming with them in their natural habitat for a truly close-to-nature experience.",
        "A signature Kaikōura experience to balance with the slower rural escape of Manakau PurePod, where the evening returns to mountains, farmland and stars.",
      ],
      links: [
        {
          label: "Explore Seal Kayak Kaikōura",
          href: "https://www.sealkayakkaikoura.com/tours/seal-kayak-tour",
        },
        {
          label: "Explore Seal Swim Kaikōura",
          href: "https://www.sealswimkaikoura.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Kaikōura",
  moreSubtitle: "River valley, countryside and slow discovery.",
  moreBody:
    "Beyond the coast, the Kaikōura region offers river valleys, farming country and mountain views. Scenic drives and short walks reveal a landscape that changes from sea level to alpine — a region that rewards slow exploration and quiet moments.",
  moreRecommendations: [],
};

const manakauReviews = {
  title: "What guests say",
  hint: "From recent Manakau stays",
  intro: "Guest reflections from the Kaikōura mountain-and-coast landscape.",
  items: [
    {
      quote:
        "Seeing mountains behind us and ocean ahead from one place felt unique. The setting is genuinely special.",
      author: "C. & H.",
    },
    {
      quote:
        "The pod was warm and simple, and the Kaikōura night sky ended up being one of our favourite memories.",
      author: "Two-night stay",
    },
    {
      quote:
        "Great balance of access to wildlife experiences by day and complete privacy once back at the cabin.",
      author: "Recent guests",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/manakau` and FAQ JSON-LD. */
export const manakauEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · KAIKŌURA",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Manakau PurePod glass cabin with views toward Mt Manakau and the Seaward Kaikōura Range, New Zealand",
    title: "Manakau",
    subtitleParagraphs: [HERO_PARAGRAPH_1, HERO_PARAGRAPH_2],
    imagePosition: "50% 30%",
    imagePositionMd: "50% 32%",
    imagePositionXl: "50% 34%",
  },
  podCarouselAriaLabel: "Manakau PurePod — photo gallery",
  podNarrative: manakauPodNarrative,
  travelBlock: manakauTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Manakau",
    summaryIntro:
      "Whales, peninsula walks and coastal wildlife — when you feel like a day beyond the pod.",
  },
  experiencesBlock: manakauExperiencesBlock,
  reviews: manakauReviews,
  faqItems: MANAKAU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: MANAKAU_BOOKING_URL,
  },
};
