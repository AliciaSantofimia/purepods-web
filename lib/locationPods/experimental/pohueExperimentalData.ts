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

const IMPACT_SUMMARY =
  "PurePod Pōhue is a private glass cabin for two set high above Port Levy on Banks Peninsula, Canterbury, New Zealand. Guests reach the pod on foot via a 1.2 km uphill track (about 20–25 minutes). The site offers wide views of the harbour, volcanic hills and coast, with no neighbours or shared facilities.";

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
  title: "The experience of the Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "A secluded escape overlooking Port Levy. PurePod Pōhue is defined by elevation, space and deep quiet, set high above Port Levy with wide views across volcanic hills, native bush and the ocean. It's a place shaped by changing light, birdsong and open horizons — a peaceful setting to disconnect and experience Banks Peninsula at its most untouched.",
    "A 1.2 km uphill walk (20–25 minutes) leads to the pod, creating privacy and a true sense of arrival. As the track climbs, views open over Port Levy.",
    "With no neighbours or shared spaces, the pod feels fully immersed in bush, hills and sky. Designed for two, it offers a simple, comfortable place to rest and slow down.",
  ],
  galleryCaption:
    "PurePod Pōhue sits high above Port Levy with no neighbours and no shared spaces — only native bush, volcanic hills and open sky. The uphill walk completes the sense of arrival; inside, everything is calm and paired back for two, with shifting light and wide horizons over land and sea.",
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
      title: "The Journey",
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
        "PurePod Pōhue is located around 40 km from Christchurch (approximately 1 hour). The final part of the journey includes a 1.2 km uphill walk, taking around 20–25 minutes.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The Weather",
      editorialEyebrow: "Banks Peninsula",
      editorialLead:
        "Banks Peninsula conditions can change quickly.",
      body:
        "Expect cooler evenings and coastal winds — layers are recommended year-round.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "The Food",
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
        "You can bring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are designed to be enjoyed slowly at the pod, with views over Port Levy.",
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

/** Single source for `EditorialPodLocationView` on `/location/pohue` and FAQ JSON-LD. */
export const pohueEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Banks Peninsula",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Pōhue PurePod glass cabin above coastal hills with views toward Port Levy and Banks Peninsula, New Zealand",
    title: "Banks Peninsula, Pōhue",
    subtitleParagraphs: [IMPACT_SUMMARY],
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
  faqItems: POHUE_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: POHUE_BOOKING_URL,
  },
};
