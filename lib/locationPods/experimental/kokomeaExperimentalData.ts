import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-view-kapiti-coast.jpg";
/** The Pod carousel — editorial order: exterior hero, interior, detail, night, aerial. */
const podGalleryExteriorHero =
  "/assets/img/kokomea/kokomea-purepod-glass-cabin-isolated-landscape-sunset-new-zealand.jpg";
const podGalleryBedroomInteriorSunset =
  "/assets/img/kokomea/kokomea-purepod-bedroom-interior-sunset-kapiti-coast.jpg";
const podGalleryWarmWoodInterior =
  "/assets/img/kokomea/purepod-kokomea-warm-wooden-interior-details.jpg";
const podGalleryBedroomDetailInterior =
  "/assets/img/kokomea/kokomea-purepod-bedroom-detail-interior-kapiti-coast.jpg";
const podGalleryGlassPodUnderStars =
  "/assets/img/kokomea/purepod-kokomea-glass-pod-under-stars.jpg";
const podGalleryAerialCountryside =
  "/assets/img/kokomea/kokomea-purepod-aerial-countryside-landscape-kapiti-coast.jpg";
const expIsland =
  "/assets/img/kokomea/kapiti-island-aerial-landscape-kapiti-coast.jpg";
const expEscarpment =
  "/assets/img/kokomea/paekākāriki-escarpment-track.jpg";
const expLagoon =
  "/assets/img/kokomea/kapiti-coast-river-lagoon-landscape.jpg";
const travelRoad =
  "/assets/img/kokomea/kokomea-countryside-access-road-kapiti-coast.jpg";
const travelSunrise =
  "/assets/img/kokomea/kokomea-purepod-exterior-sunrise-landscape-kapiti-coast.jpg";
/** Food & dining carousel — local dining hero first, then outdoor meals and provisions. */
const foodLocalDiningExperience =
  "/assets/img/kokomea/purepod-kokomea-local-dining-experience.jpg";
const foodOutdoorBreakfast =
  "/assets/img/kokomea/kokomea-breakfast-outdoor-table-kapiti-coast.jpg";
const foodSeasonalLocalProduce =
  "/assets/img/kokomea/purepod-kokomea-seasonal-local-produce.jpg";
const foodBreakfastBasket =
  "/assets/img/kokomea/kokomea-breakfast-basket-kapiti-coast.jpg";

export const KOKOMEA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=10";

const HERO_PARAGRAPH_1 =
  "Kokomea PurePod is a private off-grid glass cabin for two on the Kāpiti Coast near Wellington, designed for a secluded nature escape among grapevines, olive trees, regenerating bush, coastal skies and views towards Kāpiti Island.";

export const KOKOMEA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Kokomea PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Kokomea PurePod is designed for two guests and suits couples looking for a private nature escape on the Kāpiti Coast near Wellington. Set on a grapevine nursery with olive trees, sunset skies and views towards Kāpiti Island, it offers a secluded off-grid stay in a peaceful coastal countryside setting.",
  },
  {
    question: "How many guests can stay at Kokomea PurePod?",
    answer:
      "Kokomea PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a quiet, secluded stay.",
  },
  {
    question: "How private is Kokomea PurePod?",
    answer:
      "Kokomea PurePod is designed for privacy and seclusion. Guests make their own way from the carpark to the pod and are left undisturbed during their stay unless there is an emergency, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Kokomea PurePod like?",
    answer:
      "Kokomea PurePod is reached by a 450m nature walk from the carpark, taking around 10 minutes. The track passes regenerating bush, a bubbling stream, a gully and olive trees before reaching the PurePod. Sturdy footwear and luggage that is easy to carry are recommended.",
  },
  {
    question: "Is Kokomea PurePod off-grid?",
    answer:
      "Yes. Kokomea PurePod is solar powered and designed as an off-grid stay. There is no WiFi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "Is there phone signal at Kokomea PurePod?",
    answer:
      "Kokomea PurePod has limited phone signal. As with many remote nature stays, coverage may vary, and an emergency telephone and EPIRB are provided for safety.",
  },
  {
    question: "What should I bring for a stay at Kokomea PurePod?",
    answer:
      "Bring sturdy walking shoes, layered clothing for changeable coastal weather and luggage that is easy to carry for the walk from the carpark. Guests should also bring their favourite drinks, especially if ordering the food hamper.",
  },
  {
    question: "How does the food hamper work at Kokomea PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. If selected, the dinner and breakfast package will be waiting at the PurePod on arrival. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Kokomea PurePod?",
    answer:
      "Kokomea PurePod is close to Kāpiti Coast experiences including west coast beaches, Kāpiti Island, horse riding, cycling, hiking, local art and the region’s culinary scene.",
  },
  {
    question: "What is the landscape around Kokomea PurePod?",
    answer:
      "Kokomea PurePod is set on a grapevine nursery high above the Kāpiti Coast, beside olive trees and regenerating bush. The experience is focused on sunset views towards Kāpiti Island, birdsong, stargazing, coastal skies and peaceful rural surroundings.",
  },
  {
    question: "How far is Kokomea PurePod from Wellington?",
    answer:
      "Kokomea PurePod is located in Te Horo on the Kāpiti Coast, about one hour north of Wellington, depending on traffic and road conditions.",
  },
];

const kokomeaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set within the rolling countryside of the Kāpiti Coast, Kokomea sits between open farmland, regenerating bush and distant coastal views.",
    "Designed for two, the pod offers a quiet place to experience the slower rhythm of the landscape — morning birdsong, changing evening light and the calm of the surrounding hills.",
    "A gentle walk leads through olive trees and regenerating bush towards the pod, where wide skies and open rural views create a strong sense of privacy and stillness.",
    "Inside, floor-to-ceiling glass keeps the landscape constantly present throughout the day.",
  ],
  galleryCaption:
    "Kokomea is shaped by sunset light, countryside calm and the feeling of being quietly removed from the pace of everyday life.",
  gallery: [
    {
      src: podGalleryExteriorHero,
      alt: "Kokomea PurePod glass cabin beside a grapevine nursery at sunset in Te Horo, Kāpiti Coast",
      position: "50% 55%",
    },
    {
      src: podGalleryBedroomInteriorSunset,
      alt: "Bedroom inside Kokomea PurePod glass cabin with sunset light and countryside views in Te Horo, Kāpiti Coast",
      position: "50% 48%",
    },
    {
      src: podGalleryWarmWoodInterior,
      alt: "Warm timber kitchen and bathroom details inside Kokomea PurePod on the Kāpiti Coast near Wellington",
      position: "50% 58%",
    },
    {
      src: podGalleryBedroomDetailInterior,
      alt: "Bedroom linen detail inside Kokomea PurePod glass cabin on the Kāpiti Coast near Wellington",
      position: "50% 52%",
    },
    {
      src: podGalleryGlassPodUnderStars,
      alt: "Kokomea PurePod glass cabin and private deck beneath a clear night sky on the Kāpiti Coast",
      position: "50% 50%",
    },
    {
      src: podGalleryAerialCountryside,
      alt: "Kokomea PurePod glass cabin in Te Horo countryside with sunset views towards Kāpiti Island",
      position: "50% 48%",
    },
  ],
};

const kokomeaTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelRoad,
          alt: "Countryside access road and walking approach to Kokomea PurePod in Te Horo, Kāpiti Coast",
        },
        {
          src: travelSunrise,
          alt: "Aerial view of Kokomea PurePod beside a grapevine nursery and rolling hills in Te Horo, Kāpiti Coast",
        },
      ],
      body: `Reaching Kokomea feels calm from the very beginning.

The final approach follows quiet country lanes through the Kāpiti Coast countryside before a gentle 10-minute walk towards the pod. Along the way, the track passes regenerating bush, a small bubbling stream and olive trees, with open views stretching towards Kāpiti Island.

Parts of the path can become rocky or slippery after rain, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Kāpiti Coast",
      editorialLead:
        "The Kāpiti Coast has a mild, often windy climate. Evenings can be cool year-round; layered clothing is recommended.",
      body:
        "The mix of ocean and hills makes the weather changeable — part of the character of the place.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: foodLocalDiningExperience,
          alt: "Seasonal dining spread on the deck at Kokomea PurePod on the Kāpiti Coast",
        },
        {
          src: foodOutdoorBreakfast,
          alt: "Breakfast on the private deck at Kokomea PurePod with Kāpiti Coast countryside views",
        },
        {
          src: foodSeasonalLocalProduce,
          alt: "Seasonal produce and prepared food for dining at Kokomea PurePod on the Kāpiti Coast",
        },
        {
          src: foodBreakfastBasket,
          alt: "Breakfast table on the private deck at Kokomea PurePod with rural Kāpiti Coast views",
        },
      ],
      body:
        "Bring your own supplies or pre-book a breakfast and dinner basket with local produce when you reserve. Everything is designed to be simple, comforting and enjoyed at your own pace — the kind of moments that stay with you long after you leave.",
    },
  ],
};

const kokomeaExperiencesBlock = {
  title: "Experiences that define Kokomea",
  hint: "Island sanctuary, coastal tracks and quiet discovery",
  intro:
    "A curated selection of three experiences that capture the essence of the Kāpiti Coast — native island, escarpment walks and the meeting of land and sea.",
  items: [
    {
      title: "Kāpiti Island",
      image: expIsland,
      imageAlt:
        "Aerial view of Kāpiti Island nature reserve on the Kāpiti Coast near Wellington",
      paragraphs: [
        "A protected nature reserve visible from the coast, Kāpiti Island is home to native birds and restored forest. Access is by boat; visits are guided and limited, keeping the island quiet and wild.",
        "A chance to step into a world where birdsong and forest take over.",
      ],
      links: [
        {
          label: "Explore Kāpiti Island",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/kapiti-island-nature-reserve/",
        },
      ],
    },
    {
      title: "Paekākāriki Escarpment Track",
      image: expEscarpment,
      imageAlt:
        "Paekākāriki Escarpment Track on the Kāpiti Coast with views towards Kāpiti Island",
      paragraphs: [
        "A striking walk along the coastal escarpment with wide views over the Tasman Sea and Kāpiti Island. The track climbs and winds through native scrub and coastal landscape, offering a strong sense of space and horizon.",
        "One of the region's most memorable walks — sea, sky and steady pace.",
      ],
      links: [
        {
          label: "Explore Paekākāriki Escarpment Track",
          href: "https://www.wellingtonnz.com/visit/trails/escarpment-track",
        },
      ],
    },
    {
      title: "Coast, lagoons & slow exploration",
      image: expLagoon,
      imageAlt:
        "River, lagoon and wetland landscape on the Kāpiti Coast near Wellington",
      paragraphs: [
        "The Kāpiti Coast is a mix of beach, river mouths and lagoons, with quiet roads and small settlements. Explore at a gentle pace — coastal reserves, river walks and the constant presence of the sea and the island on the horizon.",
        "A landscape made for unhurried discovery.",
      ],
      links: [
        {
          label: "Explore the Kāpiti Coast",
          href: "https://www.visitkapiti.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore the coast",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead:
    "Paekākāriki Beach · Paraparaumu Beach — long, empty coastlines.",
  moreExploreGroups: [
    {
      heading: "Queen Elizabeth Park · Waikanae Estuary",
      intro: "Birds, wetlands, slow walks.",
      links: [
        {
          name: "Queen Elizabeth Park",
          href: "https://www.gw.govt.nz/parks/queen-elizabeth-park/#accordion-item-button-accordion0-item120",
        },
        {
          name: "Waikanae Estuary",
          href: "https://www.waikanaeestuary.org/",
        },
      ],
    },
    {
      heading: "Ōhau Wines",
      intro: "A quiet vineyard in the hills.",
      links: [
        { name: "Ōhau Wines", href: "https://www.ohauwines.co.nz/" },
      ],
    },
    {
      heading: "Paekākāriki Hill Road Lookout",
      intro: "Sunset over Kāpiti Island.",
      links: [],
    },
  ],
};

const kokomeaReviews = {
  title: "What guests say",
  hint: "From recent Kokomea stays",
  intro: "Guest feedback from the Kāpiti Coast hills and coastal outlook.",
  items: [
    {
      quote:
        "Kokomea felt peaceful from the start - birdsong, wind in the hills, and no city noise at all.",
      author: "S. & W.",
    },
    {
      quote:
        "We loved being close to escarpment and coast walks, then returning to complete privacy in the evening.",
      author: "Weekend guests",
    },
    {
      quote:
        "Sunset over the ridgelines and cool night air made this one of our most relaxing weekends away.",
      author: "Kāpiti escape",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/kokomea` and FAQ JSON-LD. */
export const kokomeaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · KĀPITI COAST",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Kokomea PurePod glass cabin at sunset in Te Horo, Kāpiti Coast, with views towards Kāpiti Island near Wellington",
    title: "Kokomea",
    subtitleParagraphs: [HERO_PARAGRAPH_1],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "Kokomea PurePod — photo gallery",
  podNarrative: kokomeaPodNarrative,
  travelBlock: kokomeaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Kokomea",
    summaryIntro:
      "Island sanctuary, escarpment walks and the coast — when you feel like a day beyond the pod.",
  },
  experiencesBlock: kokomeaExperiencesBlock,
  reviews: kokomeaReviews,
  faqItems: KOKOMEA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: KOKOMEA_BOOKING_URL,
  },
};
