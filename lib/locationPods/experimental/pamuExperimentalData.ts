import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg";
const podExterior =
  "/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg";
const podBedroom =
  "/assets/img/pamu/pamu-purepod-glass-cabin-bedroom-interior-mountain-view-new-zealand.jpg";
const podBathroom =
  "/assets/img/pamu/pamu-purepod-bathroom-shower-view-rotorua.jpg";
const podSunrise =
  "/assets/img/pamu/purepod-matu-glass-cabin-sunrise-landscape-new-zealand.jpg";
const podNightSky =
  "/assets/img/pamu/purepod-pamu-night-sky-glass-cabin-new-zealand.jpg";
const expGeothermal =
  "/assets/img/pamu/rotorua-geothermal-hot-springs-lake-new-zealand.jpg";
const expMaori =
  "/assets/img/pamu/rotorua-maori-cultural-experience-village-new-zealand.jpg";
const expValley =
  "/assets/img/pamu/rotorua-volcanic-geothermal-valley-landscape-new-zealand.jpg";
const travelFence =
  "/assets/img/pamu/pamu-purepod-farm-fence-landscape-rotorua.jpg";
const travelAerial =
  "/assets/img/pamu/pamu-purepod-aerial-landscape-valley-rotorua.jpg";
const travelRollingHills =
  "/assets/img/pamu/purepod-pamu-rolling-hills-forest-landscape-new-zealand.jpg";
const travelCheese =
  "/assets/img/pamu/pamu-purepod-local-cheese-platter-food-rotorua.jpg";
const travelBbq =
  "/assets/img/pamu/pamu-purepod-outdoor-bbq-cooking-view-rotorua.jpg";

export const PAMU_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=8";

const HERO_PARAGRAPH_1 =
  "Pāmu PurePod is a private off-grid glass cabin for two in Rotorua, set within green farmland near geothermal landscapes, Māori culture, wellness experiences, Whakarewarewa Forest and Lake Rotorua.";

export const PAMU_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Pāmu PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Pāmu PurePod is designed for two guests and suits couples looking for a private nature escape near Rotorua. Set within green farmland, with birdsong, open skies and the Ngongotahā Stream nearby, it offers a quiet off-grid stay close to Rotorua’s geothermal, wellness and cultural experiences.",
  },
  {
    question: "How many guests can stay at Pāmu PurePod?",
    answer:
      "Pāmu PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a peaceful, secluded stay.",
  },
  {
    question: "How private is Pāmu PurePod?",
    answer:
      "Pāmu PurePod is designed for privacy and seclusion. Guests are left undisturbed during their stay unless there is an emergency, and there is no daily servicing for multiple-night stays, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Pāmu PurePod like?",
    answer:
      "Pāmu PurePod is reached by a 420m nature walk from the carpark, taking around 7–10 minutes. The walk follows a marked track through green grassy hills, so sturdy footwear and luggage that is easy to carry are recommended.",
  },
  {
    question: "Is Pāmu PurePod off-grid?",
    answer:
      "Yes. Pāmu PurePod is solar powered and designed as an off-grid stay. There is no wifi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "What should I bring for a stay at Pāmu PurePod?",
    answer:
      "Bring sturdy footwear, weather-appropriate clothing and luggage that is easy to carry for the walk from the carpark. Guests should also bring their favourite drinks, especially if ordering the food hamper.",
  },
  {
    question: "How does the food hamper work at Pāmu PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. It will be waiting at the PurePod on arrival if selected. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Pāmu PurePod?",
    answer:
      "Pāmu PurePod is near Rotorua, with easy access to geothermal parks, spa and wellness experiences, Māori cultural tours, forest walking, mountain biking, adventure activities and lakeside landscapes. Nearby experiences may include Whakarewarewa Forest, Redwoods Treewalk, Polynesian Spa, Wai Ariki Hot Springs and Rotorua’s geothermal landscapes.",
  },
  {
    question: "What is the landscape around Pāmu PurePod?",
    answer:
      "Pāmu PurePod is set within green farmland on a working farm near Rotorua. The experience is focused on open skies, grassy hills, farm animals, birdlife, native flora and fauna, and the nearby Ngongotahā Stream.",
  },
  {
    question: "How far is Pāmu PurePod from Rotorua?",
    answer:
      "Pāmu PurePod is located in Rotorua, Bay of Plenty, around 15 minutes from Rotorua town centre, depending on traffic and road conditions. Its location makes it a quiet countryside escape within easy reach of Rotorua’s geothermal, cultural and wellness experiences.",
  },
];

const pamuPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "Set among the rolling farmland of the Rotorua region, Pāmu sits within a landscape shaped by geothermal activity, native bush and open green hills.",
    "Designed for two, the pod offers a slower rural rhythm — birdsong in the morning, changing weather across the valley and the feeling of being immersed in the quiet movement of the countryside.",
    "The final approach crosses part of a working farm before a gentle walk through grassy hills towards the pod. Inside, floor-to-ceiling glass keeps the surrounding landscape, sky and farmland constantly in view.",
  ],
  galleryCaption:
    "Pāmu is shaped by open land, rural stillness and the natural rhythm of the farm — a private glass retreat where Rotorua's geothermal landscape meets the calm of the countryside.",
  gallery: [
    {
      src: podExterior,
      alt: "Pāmu PurePod glass cabin exterior among grassy hills and farmland near Rotorua, Bay of Plenty",
      position: "50% 61%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Pāmu PurePod glass cabin with views of grassy hills near Rotorua, Bay of Plenty",
      position: "50% 50%",
    },
    {
      src: podBathroom,
      alt: "Bathroom shower inside Pāmu PurePod with green farmland views near Rotorua, Bay of Plenty",
      position: "50% 50%",
    },
    {
      src: podSunrise,
      alt: "Pāmu PurePod glass cabin at sunrise with private deck and rural farmland near Rotorua, Bay of Plenty",
      position: "50% 48%",
    },
    {
      src: podNightSky,
      alt: "Pāmu PurePod glass cabin beneath a clear night sky near Rotorua, Bay of Plenty",
      position: "50% 52%",
    },
  ],
};

const pamuTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelFence,
          alt: "Farm fence on the working farm near Pāmu PurePod in green farmland near Rotorua, Bay of Plenty",
        },
        {
          src: travelAerial,
          alt: "Aerial view of Pāmu PurePod, walking track, green farmland and valley landscape near Rotorua, Bay of Plenty",
        },
        {
          src: travelRollingHills,
          alt: "Rolling green hills and forest landscape around Pāmu PurePod near Rotorua, Bay of Plenty",
        },
      ],
      body: `Reaching Pāmu feels like stepping into a quieter rural landscape.

The final approach winds through a working farm before a gentle 7–10 minute walk across green grassy hills towards the pod. Along the way, you may hear the nearby stream, birdsong and the sounds of farm animals moving through the surrounding paddocks.

The track is natural and uneven in places, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Rotorua region",
      editorialLead:
        "A mild climate with warm summers, cooler winters, and occasional geothermal warmth in the air.",
      body:
        "Rotorua's weather can shift through the day, especially between open farmland and geothermal pockets. Layered clothing helps you stay comfortable at the pod and while exploring outdoors.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelCheese,
          alt: "Food hamper cheese platter on the deck at Pāmu PurePod near Rotorua, Bay of Plenty",
        },
        {
          src: travelBbq,
          alt: "Outdoor BBQ cooking on the deck at Pāmu PurePod with farmland views near Rotorua, Bay of Plenty",
        },
      ],
      body: `Meals at Pāmu are designed to feel simple, warm and deeply connected to the surrounding farmland.

Inside the pod you will find breakfast provisions, snacks, tea and coffee, along with a selection of locally sourced dishes ready to heat and enjoy. The outdoor cooking area and open views across the hills make slow evenings part of the experience itself.

As the pod sits away from shops and restaurants, everything is designed to encourage a quieter rhythm — relaxed, private and immersed in the landscape.`,
    },
  ],
};

const pamuExperiencesBlock = {
  title: "Experiences that define Pāmu",
  hint: "Geothermal, culture and landscape",
  intro:
    "A curated selection of three experiences that capture the essence of the Rotorua region — geothermal lakes, Māori culture and the volcanic landscape.",
  items: [
    {
      title: "Geothermal lakes & hot springs",
      image: expGeothermal,
      imageAlt:
        "Rotorua geothermal hot springs and steaming lake in the Bay of Plenty, New Zealand",
      paragraphs: [
        "The Rotorua region is defined by geothermal activity — hot springs, steaming lakes and the sense that the earth is alive beneath you. A walk or drive through the geothermal valleys reveals colours, steam and a landscape that feels unlike anywhere else.",
        "A chance to experience the raw character of the land.",
      ],
      links: [
        {
          label: "Explore geothermal Rotorua",
          href: "https://www.rotoruanz.com/things-to-do/geothermal-wonders",
        },
      ],
    },
    {
      title: "Māori culture & heritage",
      image: expMaori,
      imageAlt:
        "Māori cultural experience in a forest village setting near Rotorua, Bay of Plenty",
      paragraphs: [
        "Rotorua is a centre of Māori culture — living villages, storytelling and the connection between people and the land. Visiting a marae or cultural experience offers a deeper understanding of the place and its history.",
        "The human heart of the region, woven into the landscape.",
      ],
      links: [
        {
          label: "Māori culture in Rotorua",
          href: "https://www.rotoruanz.com/things-to-do/maori-culture",
        },
      ],
    },
    {
      title: "Volcanic valley & landscape",
      image: expValley,
      imageAlt:
        "Volcanic geothermal valley with steam in the Rotorua region, Bay of Plenty",
      paragraphs: [
        "The wider Rotorua landscape combines volcanic terrain, forest and farmland. Scenic drives and short walks reveal craters, lakes and the quiet of the countryside — a region that rewards slow exploration.",
        "Where the land tells its own story.",
      ],
      links: [
        {
          label: "Explore Rotorua",
          href: "https://www.rotoruanz.com/things-to-do/",
        },
      ],
    },
  ],
  moreTitle: "Beyond the geothermal world",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreLead:
    "When the pace naturally slows, the area around Pāmu offers quieter moments too.",
  moreExploreGroups: [
    {
      heading: "Mineral waters",
      intro: "Mineral waters under the night sky.",
      links: [
        { name: "Polynesian Spa", href: "https://www.polynesianspa.co.nz/" },
        {
          name: "Wai Ariki Hot Springs",
          href: "https://www.wai-ariki.co.nz/",
        },
      ],
    },
    {
      heading: "Redwoods Treewalk",
      intro: "A gentle forest walk at dusk.",
      links: [
        { name: "Redwoods Treewalk", href: "https://www.treewalk.co.nz/" },
      ],
    },
  ],
  moreExploreClosing:
    "These moments bring balance — calm and stillness alongside the raw energy of the land.",
};

const pamuReviews = {
  title: "What guests say",
  hint: "From recent Pāmu stays",
  intro: "Guest feedback from Rotorua's geothermal and rural landscape.",
  items: [
    {
      quote:
        "You can feel Rotorua in every direction - quiet farmland, open sky, and geothermal character nearby.",
      author: "H. & J.",
    },
    {
      quote:
        "Cooking outside with that view was a highlight. The pace of the place is gentle from the first hour.",
      author: "Spring stay",
    },
    {
      quote:
        "The pod felt private and comfortable, and it worked beautifully as a base for nature and culture nearby.",
      author: "Guest note",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/pamu` and FAQ JSON-LD. */
export const pamuEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PUREPOD · ROTORUA",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Aerial view of Pāmu PurePod glass cabin and private deck among green farmland near Rotorua, Bay of Plenty",
    title: "Pāmu",
    subtitleParagraphs: [HERO_PARAGRAPH_1],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "Pāmu PurePod — photo gallery",
  podNarrative: pamuPodNarrative,
  travelBlock: pamuTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Pāmu",
    summaryIntro:
      "Geothermal country, Māori culture and volcanic landscape — when you feel like a day beyond the pod.",
  },
  experiencesBlock: pamuExperiencesBlock,
  reviews: pamuReviews,
  faqItems: PAMU_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: PAMU_BOOKING_URL,
  },
};
