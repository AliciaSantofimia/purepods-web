import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";
/** Same URLs as legacy `encodeURIComponent(...)` — static ASCII so dev bundlers never misparse template + Unicode. */
const podCoastalHills =
  "/assets/img/pohue/PurePod%20P%C5%8Dhue%20interior%20with%20glass%20floor%20and%20panoramic%20mountain%20views%20New%20Zealand.jpg";
const podBedroom =
  "/assets/img/pohue/PurePod%20P%C5%8Dhue%20glass%20cabin%20bedroom%20with%20mountain%20landscape%20views%20New%20Zealand.jpg";
const podGlassCabin =
  "/assets/img/pohue/Mountain%20and%20lake%20views%20from%20PurePod%20P%C5%8Dhue%20location%20in%20Banks%20Peninsula%20New%20Zealand.jpg";
const expPenguins =
  "/assets/img/pohue/pohue-blue-penguins-wildlife-new-zealand.jpg";
const expVolcanicHills =
  "/assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg";
const expOhinetahi =
  "/assets/img/pohue/pohue-greystone-gardens-north-canterbury-new-zealand.jpg";
const travelAccess =
  "/assets/img/pohue/pohue-purepod-access-gate-coastal-track-new-zealand.jpeg";
const travelWalkingTrack =
  "/assets/img/pohue/pohue-walking-track-landscape-new-zealand.jpg";
const travelFood =
  "/assets/img/pohue/pohue-local-produce-food-basket-new-zealand.jpg";
const travelView =
  "/assets/img/pohue/Local%20produce%20breakfast%20hamper%20at%20PurePod%20P%C5%8Dhue.jpg";

export const POHUE_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=4";

const HERO_SUBTITLE_PARAGRAPHS = [
  "A private glass cabin set high above Port Levy on Banks Peninsula, surrounded by volcanic hills, native bush and wide coastal horizons.",
  "Pōhue is shaped by sea air, changing light and the quiet openness of the peninsula — a secluded retreat immersed in the landscapes of the Canterbury coast.",
];

export const POHUE_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Pōhue?",
    answer:
      "PurePod Pōhue is around 40 km from Christchurch (approximately one hour by car). The final access is on foot: a 1.2 km uphill walk, usually about 20–25 minutes.",
  },
  {
    question: "How long is the walk to the pod?",
    answer:
      "The track is about 1.2 km uphill and takes roughly 20–25 minutes. It is part of how the site stays private and quiet.",
  },
  {
    question: "What is the weather usually like at Pōhue?",
    answer:
      "Banks Peninsula conditions can change quickly. Evenings are often cooler and coastal winds are common; layered clothing is recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "You may bring your own supplies or pre-order a breakfast and dinner hamper when you book. Meals are intended to be enjoyed slowly at the pod with views over Port Levy.",
  },
  {
    question: "How many people can stay?",
    answer:
      "PurePod Pōhue is designed for two guests. There are no shared spaces with other visitors.",
  },
];

const pohuePodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set high above Port Levy on Banks Peninsula, Pōhue looks out across volcanic hills, native bush and wide coastal horizons.",
    "Designed for two, the pod sits quietly within an exposed hilltop landscape shaped by sea air, changing light and the openness of the surrounding countryside.",
    "The walk to the pod climbs gradually through regenerating native bush and grassy hills before opening onto sweeping views across the bay and surrounding landscape.",
    "Inside, floor-to-ceiling glass keeps the hills, sky and shifting weather constantly present throughout the day.",
  ],
  galleryCaption:
    "Pōhue is defined by elevation, open horizons and the quiet isolation of Banks Peninsula — a private glass retreat immersed in the landscape above Port Levy.",
  gallery: [
    {
      src: podCoastalHills,
      alt: "Pōhue PurePod interior with glass floor and panoramic mountain views, Banks Peninsula, New Zealand",
      position: "50% 48%",
    },
    {
      src: podBedroom,
      alt: "Bedroom in Pōhue PurePod with mountain landscape views through glass walls, Banks Peninsula, New Zealand",
      position: "50% 52%",
    },
    {
      src: podGlassCabin,
      alt: "Mountain and lake views from PurePod Pōhue on Banks Peninsula, New Zealand",
      position: "50% 50%",
    },
  ],
};

const pohueTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelAccess,
          alt: "Coastal access track and gate along the walk toward Pōhue PurePod on Banks Peninsula, New Zealand",
        },
        {
          src: travelWalkingTrack,
          alt: "Pōhue PurePod glass cabin awaiting at the end of the arrival walk above Port Levy, New Zealand",
        },
      ],
      body:
        "Reaching Pōhue is part of the Banks Peninsula experience.\n\nThe drive winds through the hills above Port Levy, following narrow rural roads with wide views across bays, tussock-covered hills and open farmland. From the PurePod carpark, a 20–25 minute walk continues through regenerating native bush and grassy hill tracks towards the pod, gradually opening onto the landscape above the bay.\n\nThe track includes a few stiles and uneven ground in places, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "BANKS PENINSULA",
      editorialLead:
        "Banks Peninsula weather shifts quickly — coastal winds, changing cloud and cool evenings are all part of the landscape.",
      body:
        "Layered clothing and a windproof outer layer are recommended year-round, especially for evenings on the exposed hills above Port Levy.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelFood,
          alt: "Local produce and hamper-style ingredients for meals at Pōhue PurePod on Banks Peninsula, New Zealand",
        },
        {
          src: travelView,
          alt: "Coastal outlook over Port Levy from Pōhue PurePod for slow meals above Banks Peninsula, New Zealand",
        },
      ],
      body:
        "Food at Pōhue is designed to stay simple and relaxed.\n\nBring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals can be prepared easily at the pod and enjoyed slowly with wide views across Port Levy, the surrounding hills and the changing evening light.\n\nAs there are no nearby shops or restaurants, everything you need is brought with you — keeping the stay private, quiet and fully connected to the landscape.",
    },
  ],
};

const pohueExperiencesBlock = {
  title: "Experiences that define Pōhue",
  hint: "Harbour life, volcanic scale and sculpted gardens",
  intro:
    "A curated selection of three experiences that capture the essence of this place — French-founded Akaroa, the peninsula's most expansive summit views and one of Canterbury's great gardens.",
  items: [
    {
      title: "Akaroa — The Heart of Banks Peninsula",
      image: expPenguins,
      imageAlt:
        "Little blue penguin wildlife along the Banks Peninsula coast near Akaroa, New Zealand",
      paragraphs: [
        "Akaroa blends French heritage and harbour life with standout marine wildlife. From dolphin cruises to experiences like Ecoseaker and conservation-led encounters with little blue penguins, it offers a distinctive way to experience Banks Peninsula.",
        "Why it's special: French heritage + harbour village + dolphins + little blue penguins + scenic harbour.",
      ],
      links: [
        {
          label: "Explore Akaroa",
          href: "https://www.akaroa.com/",
        },
        {
          label: "Explore Pōhatu Penguins (Plunge NZ Ltd)",
          href: "https://www.pohatu.co.nz/",
        },
        {
          label: "Explore Akaroa Dolphins",
          href: "https://www.akaroadolphins.co.nz/",
        },
      ],
    },
    {
      title: "Te Ahu Pātiki / Mount Herbert — The Scale",
      image: expVolcanicHills,
      imageAlt:
        "Volcanic coastal hills and ridgelines above Port Levy from Pōhue PurePod on Banks Peninsula, New Zealand",
      paragraphs: [
        "Te Ahu Pātiki (Mount Herbert) offers Banks Peninsula's most powerful sense of scale. From the summit, you stand on the rim of two collapsed volcanoes, with sweeping views across the natural harbours.",
        "It's a rare perspective that reveals the peninsula's dramatic volcanic landscape.",
        "Why it's special: volcanic landscapes + summit views + dramatic scale + unique perspective.",
      ],
      links: [
        {
          label: "Explore Te Ahu Pātiki / Mount Herbert",
          href: "https://doc.govt.nz/parks-and-recreation/places-to-go/christchurch-canterbury/places/banks-peninsula/places/herbert-and-pukerewa-reserves/things-to-do/te-ahu-patiki-mount-herbert-track/",
        },
      ],
    },
    {
      title: "Ohinetahi Gardens — The Aesthetic",
      image: expOhinetahi,
      imageAlt:
        "Refined garden paths, stonework and sculpture at Ohinetahi above Governors Bay, Canterbury, New Zealand",
      paragraphs: [
        "Ohinetahi Gardens showcases Canterbury's refined, artistic side. One of the Southern Hemisphere's most significant gardens, it blends sculpture, stone architecture and exceptional landscape design.",
        "Set above Governors Bay, it offers an elegant mix of art, nature and harbour views.",
        "Why it's special: world-class gardens + contemporary sculpture + stone architecture + harbour views.",
      ],
      links: [
        {
          label: "Explore Ohinetahi Gardens",
          href: "https://www.ohinetahi.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Banks Peninsula",
  moreSubtitle: "",
  moreBody:
    "Beyond the pod, harbours and ridgelines unfold at a gentle pace — coastal roads, quiet bays and light moving across the volcanic landscape.",
  moreRecommendations: [],
};

const pohueReviews = {
  title: "What guests say",
  hint: "From recent Pōhue stays",
  intro: "Guest comments from the Port Levy and Banks Peninsula setting.",
  items: [
    {
      quote:
        "The climb in is worth it - once at the top, the harbour views and sense of seclusion are remarkable.",
      author: "F. & D.",
    },
    {
      quote:
        "We loved how wild and quiet it felt: bush, hills, sky, and changing weather over the peninsula.",
      author: "Recent guests",
    },
    {
      quote:
        "A calm, simple space with beautiful outlooks. Morning light across Port Levy was unforgettable.",
      author: "Two-night stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/pohue` and FAQ JSON-LD. */
export const pohueEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · BANKS PENINSULA",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Pōhue PurePod glass cabin above coastal hills with views toward Port Levy and Banks Peninsula, New Zealand",
    title: "Pōhue",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
    imagePosition: "50% 75%",
  },
  podCarouselAriaLabel: "PurePod Pōhue — photo gallery",
  podNarrative: pohuePodNarrative,
  travelBlock: pohueTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Pōhue",
    summaryIntro:
      "Akaroa, Mount Herbert and Ohinetahi — when you feel like a day beyond the pod.",
  },
  experiencesBlock: pohueExperiencesBlock,
  reviews: pohueReviews,
  faqItems: POHUE_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: POHUE_BOOKING_URL,
  },
};
