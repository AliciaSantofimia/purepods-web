import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/korimako/korimako-purepod-glass-cabin-native-bush-greta-valley-new-zealand.jpg";
const podAerial =
  "/assets/img/korimako/korimako-purepod-glass-cabin-exterior-coastal-view-new-zealand.jpg";
const podShower =
  "/assets/img/korimako/korimako-purepod-glass-cabin-aerial-solar-panels-native-bush-new-zealand.jpg";
const podBed =
  "/assets/img/korimako/korimako-purepod-glass-cabin-interior-bed-new-zealand.jpg";
const podNativeGrass =
  "/assets/img/korimako/korimako-purepod-hidden-glass-cabin-in-native-grass.jpg";
const podCoastalLight =
  "/assets/img/korimako/korimako-purepod-glass-cabin-coastal-light-exterior.jpg";
const expGully =
  "/assets/img/korimako/korimako-experience-cathedral-gully-coastal-landscape-new-zealand.jpg";
const expWine =
  "/assets/img/korimako/korimako-experience-waipara-valley-wine-tasting-new-zealand.jpg";
const expCoast =
  "/assets/img/korimako/korimako-experience-waipara-coast-cliffs-beach-new-zealand.jpg";
const travelPath =
  "/assets/img/korimako/korimako-purepod-walking-path-arrival-new-zealand.jpg";
const travelForest =
  "/assets/img/korimako/korimako-purepod-native-bush-walking-track-new-zealand.jpg";
const travelDining =
  "/assets/img/korimako/korimako-purepod-local-produce-dining-experience-new-zealand.jpg";
const travelDinner =
  "/assets/img/korimako/korimako-purepod-local-dinner-meal-new-zealand.jpg";
const travelBreakfast =
  "/assets/img/korimako/korimako-purepod-homemade-breakfast-jars-outdoors.jpg";
const travelBbq =
  "/assets/img/korimako/korimako-purepod-private-bbq-dining-experience.jpg";

export const KORIMAKO_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=6";

const HERO_SUBTITLE_PARAGRAPHS = [
  "Korimako PurePod is a private off-grid glass cabin for two nestled into native bush along the Greta Valley coastline in Hurunui.",
  "With bay views towards Motunau Island, abundant birdlife and birdsong around the pod, it offers a sheltered South Island escape shaped by coastal light and quiet forest.",
];

export const KORIMAKO_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Where is Korimako PurePod?",
    answer:
      "Korimako PurePod is set in native bush along the Greta Valley coastline in Hurunui, North Canterbury, about 90 minutes north-east of Christchurch. Its setting looks towards the bay and Motunau Island, with birdlife and coastal bush surrounding the pod.",
  },
  {
    question: "What makes Korimako PurePod unique?",
    answer:
      "Korimako PurePod is defined by its sheltered native bush setting, birdsong and views towards Motunau Island. It feels more tucked-away and forested than Atatū, while still offering a private off-grid glass cabin experience near the Greta Valley coast.",
  },
  {
    question: "Is Korimako PurePod suitable for two guests?",
    answer:
      "Yes. Korimako PurePod is designed for two guests, making it well suited to couples or two adults looking for a private nature escape in Hurunui. The pod has a queen bed, self-contained facilities and a secluded setting surrounded by native bush.",
  },
  {
    question: "What views can you see from Korimako PurePod?",
    answer:
      "From Korimako PurePod, guests can enjoy views through native bush towards the bay and Motunau Island. The glass design brings the surrounding coastal bush, birdlife and changing light close to the bed, deck and living space.",
  },
  {
    question: "How far is Korimako PurePod from Christchurch?",
    answer:
      "Korimako PurePod is about 90 minutes north-east of Christchurch by car. It is located in the Greta Valley area of Hurunui, making it a secluded coastal bush escape within reach of Christchurch and North Canterbury.",
  },
  {
    question: "How long is the walk to Korimako PurePod?",
    answer:
      "The walk from the carpark to Korimako PurePod is approximately 450 metres and usually takes around 7–10 minutes. The track leads gently through a rural native bush setting, so sturdy footwear is recommended, especially after rain.",
  },
  {
    question: "Is Korimako PurePod good for stargazing?",
    answer:
      "Yes. Korimako PurePod has a glass roof, telescope and star map for guests, making stargazing part of the experience. Its private rural setting along the Greta Valley coastline offers dark skies away from the light of larger towns.",
  },
  {
    question: "What facilities are inside Korimako PurePod?",
    answer:
      "Korimako PurePod includes a queen bed, glass roof, three large glass sliding doors, kitchenette, gas hob, cooking equipment, fridge, bathroom, shower, heating, fresh drinking water, USB charging, books, games, telescope, star map, torch and picnic blankets.",
  },
  {
    question: "Is Korimako PurePod off-grid?",
    answer:
      "Yes. Korimako PurePod is solar powered and designed as a private off-grid glass cabin. There is no Wi-Fi, TV or standard power plugs, and phone signal is limited, helping guests slow down and connect with the surrounding native bush and coastal landscape.",
  },
  {
    question: "What should guests bring for the walk-in?",
    answer:
      "Guests should bring sturdy footwear, weather-appropriate clothing and only the overnight luggage they need for the stay. The guide recommends arriving before dark because there is no lighting on the nature walk from the carpark to the pod.",
  },
  {
    question: "What can guests do near Korimako PurePod?",
    answer:
      "Guests can relax at the pod, listen to birdsong, stargaze, read, play games or watch the changing light across the bay and surrounding bush. Nearby Hurunui experiences include Waipara wineries, Nape Nape Beach, Fossil Point Cafe & Gallery, the Hurunui River mouth and local coastal walks.",
  },
];

const korimakoPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Nestled into native bush along the Greta Valley coastline, Korimako looks out across rolling farmland, coastal hills and wide views towards Motunau Island.",
    "Designed for two, the pod sits quietly within a landscape shaped by birdsong, sea air and the changing light of the Canterbury coast.",
    "The final walk passes through grassy hills and native bush before opening onto the coastal landscape surrounding the pod. Inside, floor-to-ceiling glass keeps the bay views, vegetation and shifting light constantly present throughout the day.",
  ],
  galleryCaption:
    "Korimako is defined by coastal stillness, native bush and wide rural horizons — a private glass retreat immersed in the Greta Valley landscape.",
  gallery: [
    {
      src: podAerial,
      alt: "Korimako PurePod glass cabin with coastal bush and bay views towards Motunau Island",
      position: "52% 50%",
    },
    {
      src: podNativeGrass,
      alt: "Korimako PurePod hidden among native grass and coastal bush in Hurunui",
      position: "48% 52%",
    },
    {
      src: podShower,
      alt: "Aerial view of Korimako PurePod with solar panels surrounded by native bush",
      position: "50% 60%",
    },
    {
      src: podCoastalLight,
      alt: "Korimako PurePod glass cabin exterior in soft coastal light near Greta Valley",
      position: "52% 48%",
    },
    {
      src: podBed,
      alt: "Bed inside Korimako PurePod with glass walls facing native bush and coastal light",
      position: "50% 65%",
    },
  ],
};

const korimakoTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelPath,
          alt: "Walking path arrival to Korimako PurePod through the Greta Valley farm setting",
        },
        {
          src: travelForest,
          alt: "Native bush walking track to Korimako PurePod in Hurunui",
        },
      ],
      body:
        "Reaching Korimako is a gradual transition from open farmland into native bush along the Greta Valley coastline.\n\nThe final drive follows quiet country and farm roads through rolling hills and working farmland before arriving at the PurePod carpark. From there, a gentle 7–10 minute walk continues through native bush and grassy hills towards the pod, with birdsong and coastal views accompanying the track.\n\nParts of the path can become slippery after rain, so suitable walking footwear and light luggage are recommended.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Hurunui",
      editorialLead:
        "A warm, dry inland climate with sunny days, cooler evenings, and clear mornings.",
      body:
        "Temperatures shift between daytime sun and evening cool, especially across exposed hills. Light layers are recommended, with clear air and strong light typical of the area.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelBreakfast,
          alt: "Homemade breakfast jars outdoors at Korimako PurePod in Hurunui",
        },
        {
          src: travelDining,
          alt: "Local produce dining experience at Korimako PurePod in Hurunui",
        },
        {
          src: travelDinner,
          alt: "Local dinner meal at Korimako PurePod after a coastal bush walk-in",
        },
        {
          src: travelBbq,
          alt: "Private barbecue dining experience at Korimako PurePod surrounded by native bush",
        },
      ],
      body:
        "Your Korimako PurePod is fully equipped for a quiet, comfortable and self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
    },
  ],
};

const korimakoExperiencesBlock = {
  title: "Experiences that define Korimako",
  hint: "Limestone landscape, open coast and rural life",
  intro:
    "A curated selection of three experiences that capture the essence of Hurunui — open landscapes, sculpted coast and rural calm.",
  items: [
    {
      title: "Cathedral Gully & Gore Bay",
      image: expGully,
      imageAlt:
        "Cathedral Gully coastal landscape near Korimako PurePod in Hurunui",
      paragraphs: [
        "Limestone formations, sculpted cliffs and an open coast define this part of North Canterbury. Cathedral Gully and Gore Bay reveal wide beaches, clear horizons and a strong sense of space.",
        "A landscape where time moves slowly and nature sets the pace.",
      ],
      links: [
        {
          label: "Explore Cathedral Gully",
          href: "https://maps.app.goo.gl/NBLG9s4ZR81d762y9",
        },
        {
          label: "Explore Gore Bay",
          href: "https://maps.app.goo.gl/Krv1Yfp9jmSp6tUz9",
        },
      ],
    },
    {
      title: "Wine & local flavour — Waipara",
      image: expWine,
      imageAlt:
        "Waipara Valley wine tasting experience near Korimako PurePod",
      paragraphs: [
        "Cool-climate vineyards and family-run wineries offer a relaxed way to discover the region’s food culture. Waipara Springs Winery & Restaurant is known for seasonal cooking and local wines, with tables among the vines.",
        "About 25 minutes from Korimako PurePod, it is a perfect pause between landscape and flavour.",
      ],
      links: [
        {
          label: "Visit Waipara Springs Winery & Restaurant",
          href: "https://www.waiparasprings.co.nz/",
        },
      ],
    },
    {
      title: "Rural heritage & slow discoveries",
      image: expCoast,
      imageAlt:
        "Waipara Coast cliffs and beach near Korimako PurePod in North Canterbury",
      paragraphs: [
        "Local experiences reflect the rural character of the region. The historic Weka Pass Railway offers a gentle journey through farming country, while the Amberley Farmers’ Market connects you with local produce and the rhythm of the community.",
        "Tradition, community and rural life in an open, serene setting.",
      ],
      links: [
        {
          label: "Explore Hurunui region",
          href: "https://visithurunui.co.nz/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore Hurunui",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead: "Local life and quiet discoveries.",
  moreExploreGroups: [
    {
      heading: "Weka Pass Railway",
      intro:
        "Beyond the open landscape, Korimako also connects with Hurunui’s rural life. The Weka Pass Railway, a heritage train that runs through hills and vineyards, operates on selected days (usually Sundays and holidays) and offers a quiet, scenic way to experience local railway history.",
      links: [
        {
          name: "Weka Pass Railway",
          href: "https://www.wekapassrailway.co.nz/",
        },
      ],
    },
    {
      heading: "Amberley Farmers’ Market",
      intro:
        "The Amberley Farmers’ Market, every Saturday morning year-round, brings together local produce, artisan food and the slow pace of the community. Simple experiences that reveal the authentic side of the place.",
      links: [
        {
          name: "Amberley Farmers’ Market",
          href: "https://www.facebook.com/amberleyfarmersmarket/",
        },
      ],
    },
  ],
};

const korimakoReviews = {
  title: "What guests say",
  hint: "From recent Korimako stays",
  intro: "Guest feedback from Korimako's Hurunui high-country setting.",
  items: [
    {
      quote:
        "Korimako feels open and elevated, with big sky and farmland all around. Exactly the quiet we were after.",
      author: "R. & E.",
    },
    {
      quote:
        "The walk in makes the transition from road to retreat very clear. Once there, it feels private and calm.",
      author: "Autumn weekend",
    },
    {
      quote:
        "We loved the clear inland light and long views. A calm place to read, rest, and move slowly.",
      author: "Recent stay",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/korimako` and FAQ JSON-LD. */
export const korimakoEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · HURUNUI",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Korimako PurePod glass cabin nestled in native bush near the Greta Valley coastline, New Zealand",
    title: "Korimako",
    subtitleParagraphs: HERO_SUBTITLE_PARAGRAPHS,
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "Korimako PurePod — photo gallery",
  podNarrative: korimakoPodNarrative,
  travelBlock: korimakoTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Korimako",
    summaryIntro:
      "Limestone coast, Waipara wine country and Hurunui life — when you feel like a day beyond the pod.",
  },
  experiencesBlock: korimakoExperiencesBlock,
  reviews: korimakoReviews,
  faqItems: KORIMAKO_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: KORIMAKO_BOOKING_URL,
  },
};
