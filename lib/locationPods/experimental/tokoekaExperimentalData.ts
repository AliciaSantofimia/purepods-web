import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg";
const podAerial =
  "/assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg";
const podBedroom =
  "/assets/img/tokoeka/PurePod%20Tokoeka%20glass%20cabin%20deck%20with%20ocean%20views%20and%20native%20forest%20New%20Zealand.jpg";
const podAstro =
  "/assets/img/tokoeka/PurePod%20Tokoeka%20glass%20cabin%20bedroom%20with%20ocean%20sunset%20view%20New%20Zealand.jpg";
const podSunsetCoastline =
  "/assets/img/tokoeka/tokoeka-purepod-sunset-stewart-island-coastline.jpg";
const podSunriseBedroom =
  "/assets/img/tokoeka/tokoeka-purepod-sunrise-bedroom-ocean-view.jpg";
const podCoastalDeckTwilight =
  "/assets/img/tokoeka/tokoeka-purepod-coastal-deck-twilight-view.jpg";
const expUlva = "/assets/img/tokoeka/stewart-island-native-bird-wildlife.jpg";
const expMason =
  "/assets/img/tokoeka/stewart-island-tokoeka-kiwi-wildlife..jpg";
const expPaterson =
  "/assets/img/tokoeka/stewart-island-yellow-eyed-penguin-wildlife.jpg";
const travelAerial =
  "/assets/img/tokoeka/tokoeka-purepod-forest-walkway-sign.jpg";
const travelForest =
  "/assets/img/tokoeka/stewart-island-coastal-forest-landscape.jpg";
const travelCoastalJourneyAerial =
  "/assets/img/tokoeka/tokoeka-stewart-island-coastal-journey-aerial.jpg";
const travelFood =
  "/assets/img/tokoeka/tokoeka-local-food-platter-stewart-island..jpg";
const travelBreakfastOcean =
  "/assets/img/tokoeka/tokoeka-purepod-breakfast-ocean-view-stewart-island.jpg";
const travelGrazingBreakfast =
  "/assets/img/tokoeka/tokoeka-purepod-local-grazing-platter-breakfast.jpg";
const travelDeckDining =
  "/assets/img/tokoeka/tokoeka-purepod-private-deck-dining-stewart-island.jpg";
const travelBedroom =
  "/assets/img/tokoeka/tokoeka-purepod-gourmet-food-platter.jpg";

export const TOKOEKA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=11";

const HERO_SUBTITLE_PARAS = [
  "Tokoeka PurePod is a private off-grid glass cabin for two on Rakiura Stewart Island, set in native bush within a predator-proof conservation reserve, with sea views, birdlife, kiwi spotting, dark skies and remote island wilderness nearby.",
];

export const TOKOEKA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Tokoeka PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Tokoeka PurePod is designed for two guests and suits couples looking for a private island nature escape on Rakiura Stewart Island. Set in native bush within a predator-proof conservation reserve, it offers sea views, birdlife, kiwi spotting, stargazing and a secluded off-grid stay surrounded by remote island wilderness.",
  },
  {
    question: "How many guests can stay at Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a quiet, secluded stay.",
  },
  {
    question: "How private is Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod is designed for privacy and seclusion. Guests are left undisturbed during their stay unless there is an emergency, and there is no daily servicing for multiple-night stays, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Tokoeka PurePod like?",
    answer:
      "Tokoeka PurePod is reached by a 380m nature walk from the turnoff, taking around 10 minutes. The track passes through native bush and includes uneven ground, roots, mud or steps in places, so sturdy footwear and luggage that is easy to carry are recommended.",
  },
  {
    question: "Is Tokoeka PurePod off-grid?",
    answer:
      "Yes. Tokoeka PurePod is solar powered and designed as an off-grid stay. There is no WiFi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "Is there phone signal at Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod has limited phone signal. As with many remote island and conservation reserve locations, coverage may vary depending on provider and conditions. An emergency telephone and EPIRB are provided for safety.",
  },
  {
    question: "What should I bring for a stay at Tokoeka PurePod?",
    answer:
      "Bring sturdy walking shoes, weather-appropriate clothing, luggage that is easy to carry and your favourite drinks, especially if ordering the food hamper. Rakiura Stewart Island weather can change quickly, so layered clothing is recommended.",
  },
  {
    question: "How does the food hamper work at Tokoeka PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. If selected, the dinner and breakfast package will be waiting at the PurePod on arrival. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod is close to Rakiura Stewart Island experiences such as native bush walks, island wildlife, kiwi spotting, Ulva Island, Paterson Inlet, kayaking, beaches and day trips by boat. Oban, Halfmoon Bay and local island food options are also part of the wider stay experience.",
  },
  {
    question: "What is the landscape around Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod is set in native bush on Rakiura Stewart Island, with sea views, birdlife, coastal forest, white sand beaches nearby and some of the darkest skies in New Zealand. The setting is shaped by island wilderness, conservation land, stargazing and the chance to spot kiwi at night.",
  },
  {
    question: "How do you get to Tokoeka PurePod?",
    answer:
      "Tokoeka PurePod is on Rakiura Stewart Island. Guests first reach the island by scenic flight from Invercargill or ferry from Bluff, then travel from Oban towards Mamaku Point Conservation Reserve. The final approach includes a short nature walk through native bush to the PurePod.",
  },
];

const tokoekaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set within Mamaku Point Conservation Reserve on Rakiura Stewart Island, Tokoeka is surrounded by native bush, birdlife and wide coastal views.",
    "Designed for two, the pod sits quietly inside a protected sanctuary landscape, where forest, sea and night sky shape the experience of staying here.",
    "The final approach passes through native bush and the predator-proof sanctuary fence before opening onto the secluded coastal setting around the pod.",
    "At night, special red lighting under the deck offers the chance to spot kiwi without disturbing the darkness of the surrounding reserve.",
  ],
  galleryCaption:
    "Tokoeka is defined by native forest, coastal views and the rare stillness of Rakiura — a private glass retreat immersed in one of New Zealand's most distinctive conservation landscapes.",
  gallery: [
    {
      src: podAerial,
      alt: "Aerial view of Tokoeka PurePod in native bush above a white sand beach on Rakiura Stewart Island",
      position: "50% 50%",
    },
    {
      src: podSunriseBedroom,
      alt: "Tokoeka PurePod bedroom at sunrise with sea views through glass walls on Rakiura Stewart Island",
      position: "50% 48%",
    },
    {
      src: podBedroom,
      alt: "Tokoeka PurePod deck with native bush and sea views on Rakiura Stewart Island",
      position: "50% 52%",
    },
    {
      src: podSunsetCoastline,
      alt: "Sunset over native bush and coastline from Tokoeka PurePod on Rakiura Stewart Island",
      position: "50% 50%",
    },
    {
      src: podAstro,
      alt: "Tokoeka PurePod bedroom with sunset sea views on Rakiura Stewart Island",
      position: "50% 48%",
    },
    {
      src: podCoastalDeckTwilight,
      alt: "Tokoeka PurePod deck at twilight with native bush and sea views on Rakiura Stewart Island",
      position: "50% 52%",
    },
  ],
};

const tokoekaTravelBlock = {
  title: "Know before you go",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelCoastalJourneyAerial,
          alt: "Aerial view of Rakiura Stewart Island coastline and white sand beach on the journey to Tokoeka PurePod",
        },
        {
          src: travelAerial,
          alt: "PurePods walking track sign in native bush at Mamaku Point Conservation Reserve on Rakiura Stewart Island",
        },
        {
          src: travelForest,
          alt: "Aerial view of Tokoeka PurePod surrounded by native bush at Mamaku Point Conservation Reserve on Rakiura Stewart Island",
        },
      ],
      body:
        "Reaching Tokoeka is part of the Stewart Island experience.\n\nAfter arriving on Rakiura by scenic flight or ferry, the journey continues through the quiet roads and native bush surrounding Oban and Mamaku Point Conservation Reserve. The final approach follows a short walking track through dense native forest, crossing the predator-proof sanctuary fence before opening onto the secluded coastal landscape surrounding the pod.\n\nThe track includes natural bush paths, steps and uneven ground in places, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Stewart Island",
      editorialLead:
        "A cool, changeable coastal climate with frequent rain and generally lower temperatures.",
      body:
        "Conditions can shift quickly through the day, especially near the coast and in exposed areas. Waterproof outer layers and warm clothing are recommended year-round.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelFood,
          alt: "Food platter at Tokoeka PurePod with native bush surroundings on Rakiura Stewart Island",
        },
        {
          src: travelBreakfastOcean,
          alt: "Breakfast at Tokoeka PurePod with native bush and sea views on Rakiura Stewart Island",
        },
        {
          src: travelGrazingBreakfast,
          alt: "Grazing-style breakfast platter at Tokoeka PurePod on Rakiura Stewart Island",
        },
        {
          src: travelBedroom,
          alt: "Gourmet food platter for a Tokoeka PurePod stay on Rakiura Stewart Island",
        },
        {
          src: travelDeckDining,
          alt: "Private deck dining at Tokoeka PurePod with sea views on Rakiura Stewart Island",
        },
      ],
      body:
        "Food at Tokoeka is designed to feel simple, generous and connected to the quiet rhythm of Rakiura.\n\nBring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are easy to prepare and best enjoyed slowly at the pod, surrounded by native bush, coastal views and the sounds of birdlife around the reserve.\n\nAs there are no nearby shops or restaurants at the pod, everything you need is brought with you — keeping the experience private, peaceful and immersed in the Stewart Island landscape.",
    },
  ],
};

const tokoekaExperiencesBlock = {
  title: "The experiences that define Tokoeka",
  hint: "Stewart Island · native forest & island wildlife · South Island",
  intro: "Ulva Island, Mason Bay and Paterson Inlet.",
  items: [
    {
      title: "Ulva Island — Predator-Free Sanctuary",
      image: expUlva,
      imageAlt:
        "Native birdlife in forest on Stewart Island near Ulva Island wildlife sanctuary",
      paragraphs: [
        "A world-class wildlife sanctuary where native birds thrive in a completely predator-free environment. Ancient forest, close encounters and the rare feeling of walking among New Zealand's most iconic birdlife.",
        "Why it's special: rare native birds (tīeke, kākāriki, mōhua) + pristine forest + close wildlife encounters",
      ],
      links: [
        {
          label: "Explore Ulva Island Guided Walks",
          href: "https://www.ulva.co.nz/",
        },
      ],
    },
    {
      title: "Mason Bay — Wild West Coast",
      image: expMason,
      imageAlt:
        "Tokoeka kiwi in native vegetation on Rakiura Stewart Island, relevant to kiwi spotting near Mason Bay",
      paragraphs: [
        "A vast, remote beach on Stewart Island's wild west coast, shaped by dunes, ocean swells and powerful isolation. One of the best places on the island to experience true wilderness.",
        "Why it's special: wild beaches + dunes + chance to spot kiwi + seals & sea lions + extreme isolation",
      ],
      links: [
        {
          label: "Explore Mason Bay Stewart Island Discovery Expeditions",
          href: "https://www.realnz.com/en/experiences/expedition-cruises/stewart-island-discovery-expeditions/",
        },
        {
          label: "Rakiura Charters — all tours",
          href: "https://www.rakiuracharters.co.nz/category/all-tours/",
        },
      ],
    },
    {
      title: "Paterson Inlet — Cruise or Kayak",
      image: expPaterson,
      imageAlt:
        "Coastal penguins and wildlife near Paterson Inlet on Rakiura Stewart Island",
      paragraphs: [
        "Sheltered waters ideal for exploring Stewart Island by boat or kayak. Cruising Paterson Inlet reveals quiet bays, small islands and rich marine life in one of the island's most peaceful settings.",
        "Why it's special: dolphins + little blue penguins + seals + seabirds + sheltered waters",
      ],
      links: [
        {
          label: "Explore Paterson Inlet Discovery Cruise",
          href: "https://www.rakiuracharters.co.nz/paterson-inlet-discovery-cruise/",
        },
      ],
    },
  ],
  moreTitle: "",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
};

const tokoekaReviews = {
  title: "What guests say",
  hint: "From recent Tokoeka stays",
  intro: "Guest impressions from the Stewart Island sanctuary setting.",
  items: [
    {
      quote:
        "The journey in made it feel truly remote. Once inside the sanctuary, silence and birdsong took over.",
      author: "J. & S.",
    },
    {
      quote:
        "One of the few places where we fully switched off - just forest, sea views, and sky.",
      author: "Winter guests",
    },
    {
      quote:
        "Evenings were the standout: red light, stars, and that quiet feeling you might spot kiwi nearby.",
      author: "Sanctuary stay",
    },
  ],
};

export const tokoekaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · STEWART ISLAND",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Tokoeka PurePod glass cabin at sunset in native bush with sea views on Rakiura Stewart Island",
    title: "Tokoeka",
    subtitleParagraphs: HERO_SUBTITLE_PARAS,
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
  },
  podCarouselAriaLabel: "Tokoeka PurePod — photo gallery",
  podNarrative: tokoekaPodNarrative,
  travelBlock: tokoekaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Tokoeka",
    summaryIntro:
      "Ulva Island, Mason Bay and Paterson Inlet — when you feel like a day beyond the pod.",
  },
  experiencesBlock: tokoekaExperiencesBlock,
  reviews: tokoekaReviews,
  faqItems: TOKOEKA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $890.00 — / night",
    bookHref: TOKOEKA_BOOKING_URL,
  },
};
