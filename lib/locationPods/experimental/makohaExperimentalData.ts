import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg";
const podNight =
  "/assets/img/makoha/makoha-purepod-glass-cabin-exterior-night-kerikeri.jpg";
const podBedroom =
  "/assets/img/makoha/makoha-purepod-bedroom-interior-glass-cabin-kerikeri.jpg";
const podLandscape =
  "/assets/img/makoha/makoha-purepod-glass-cabin-forest-exterior-night-lighting-new-zealand.jpg";
const podInteriorForest =
  "/assets/img/makoha/purepod-makoha-glass-cabin-interior-forest-view-new-zealand.jpg";
const podDeckDining =
  "/assets/img/makoha/purepod-makoha-private-deck-forest-dining-new-zealand.jpg";
const podAerialForest =
  "/assets/img/makoha/purepod-makoha-aerial-view-native-forest-new-zealand.jpg";
const expBoat = "/assets/img/makoha/bay-of-islands-boat-cruise-aerial.jpg";
const expWaitangi =
  "/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-hous.jpg";
const expMahinepua =
  "/assets/img/makoha/mahinepua-peninsula-coastal-walk-bay-of-islands.jpg";
const travelWalkingTrack =
  "/assets/img/makoha/purepod-makoha-walking-track-forest-path-new-zealand.jpg";
const travelForestArrival =
  "/assets/img/makoha/purepod-makoha-forest-arrival-track-new-zealand.jpg";
const travelForest = "/assets/img/makoha/kerikeri-native-forest-walking-track.jpg";
const travelBridge =
  "/assets/img/makoha/kerikeri-native-forest-bridge-walking-track.jpg";
const travelPlatter = "/assets/img/makoha/makoha-local-food-platter-kerikeri.jpg";
const travelDinner = "/assets/img/makoha/makoha-dinner-outdoor-dining-kerikeri.jpg";
const travelBreakfastBasket =
  "/assets/img/makoha/purepod-makoha-breakfast-basket-local-produce-new-zealand.jpg";
const travelKitchenForest =
  "/assets/img/makoha/purepod-makoha-kitchen-forest-view-new-zealand.jpg";
const travelEveningMeal =
  "/assets/img/makoha/purepod-makoha-evening-meal-local-produce-new-zealand.jpg";

export const MAKOHA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=14";

const HERO_PARAGRAPH_1 =
  "Mākoha PurePod is a private off-grid glass cabin for two near Kerikeri in Northland, designed for a secluded nature escape among native bush, birdsong and Bay of Islands experiences.";

export const MAKOHA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "Is Mākoha PurePod suitable for a romantic getaway?",
    answer:
      "Yes. Mākoha PurePod is designed for two guests and suits couples looking for a private, quiet nature escape near Kerikeri. Set among native bush, birdsong and the Waipapa Stream, it offers a secluded off-grid stay with the comfort of a glass cabin immersed in Northland nature.",
  },
  {
    question: "How many guests can stay at Mākoha PurePod?",
    answer:
      "Mākoha PurePod is designed for a maximum of two guests. Like all PurePods, it is created as a private glass cabin for two, making it best suited to couples or two adults seeking a secluded nature stay.",
  },
  {
    question: "How private is Mākoha PurePod?",
    answer:
      "Mākoha PurePod is designed for privacy and seclusion. Guests are left undisturbed during their stay unless there is an emergency, and there is no daily servicing for multiple-night stays, so the experience remains quiet and uninterrupted.",
  },
  {
    question: "What is the walk to Mākoha PurePod like?",
    answer:
      "Mākoha PurePod is reached by a 350m nature walk from the carpark. Allow up to 15 minutes for the walk, as the bush farm track is undulating, includes steps and can be steep, rocky and uneven in places. Supportive walking shoes and a backpack are recommended.",
  },
  {
    question: "Is Mākoha PurePod off-grid?",
    answer:
      "Yes. Mākoha PurePod is solar powered and designed as an off-grid stay. There is no wifi, no TV and no standard power plugs, although a USB charging port and an emergency telephone are provided.",
  },
  {
    question: "What should I bring for a stay at Mākoha PurePod?",
    answer:
      "Bring supportive walking shoes, weather-appropriate clothing and a backpack or small overnight bag for the walk from the carpark. Guests should also bring their favourite drinks, especially if ordering the food hamper.",
  },
  {
    question: "How does the food hamper work at Mākoha PurePod?",
    answer:
      "The food hamper is optional and can be pre-ordered. It is priced per couple, per night and will be waiting at the PurePod on arrival. The hamper includes a simple evening platter, a main meal, dessert and breakfast items, which may vary by season. Guests should bring their favourite drinks.",
  },
  {
    question: "What can you do near Mākoha PurePod?",
    answer:
      "Mākoha PurePod is near Kerikeri in Northland, with easy access to Bay of Islands experiences. Nearby options may include Rainbow Falls, Waitangi Treaty Grounds, local markets, glowworm caves, coastal walks, quiet beaches and exploring the wider Bay of Islands region.",
  },
  {
    question: "What is the landscape around Mākoha PurePod?",
    answer:
      "Mākoha PurePod is set within native bush, surrounded by kauri trees, birdlife and the gentle sound of the Waipapa Stream. The experience is focused on forest, privacy, birdsong and a secluded Northland landscape rather than a coastal or sea-view setting.",
  },
  {
    question: "How far is Mākoha PurePod from Kerikeri?",
    answer:
      "Mākoha PurePod is located in Kerikeri, Northland. It is approximately a 5-minute drive from Kerikeri Airport and around a 4-hour drive from Auckland, depending on route and road conditions.",
  },
];

const makohaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, nothing extra",
  paragraphs: [
    "Hidden in subtropical forest near Kerikeri, Mākoha PurePod is a private glass cabin designed for two.",
    "Here, the Bay of Islands feels close but the world feels far away — with native bush, coastal walks, glowworms at night and wide, clear skies.",
    "A short 5–10 minute forest walk leads you to the pod, tucked quietly into the landscape. Once inside, warm materials and floor-to-ceiling glass keep the focus on the forest, the changing light and the calm of Northland.",
  ],
  galleryCaption:
    "Mākoha is less about accommodation and more about slowing down — a quiet, comfortable retreat where everything is designed to bring you closer to native bush.",
  gallery: [
    {
      src: podNight,
      alt: "Mākoha PurePod glass cabin at night in native forest near Kerikeri, Northland, New Zealand",
      position: "50% 55%",
    },
    {
      src: podBedroom,
      alt: "Bedroom inside Mākoha PurePod glass cabin near Kerikeri, Northland, New Zealand",
      position: "50% 50%",
    },
    {
      src: podLandscape,
      alt: "Mākoha PurePod glass cabin and sign in native forest near Kerikeri, Northland, New Zealand",
      position: "50% 45%",
    },
    {
      src: podInteriorForest,
      alt: "Interior of Mākoha PurePod with floor-to-ceiling glass walls overlooking native forest near Kerikeri, Northland, New Zealand",
      position: "50% 48%",
    },
    {
      src: podDeckDining,
      alt: "Outdoor dining setup on the private deck of Mākoha PurePod overlooking native forest near Kerikeri, Northland, New Zealand",
      position: "50% 52%",
    },
    {
      src: podAerialForest,
      alt: "Aerial view of Mākoha PurePod surrounded by dense native forest near Kerikeri, Northland, New Zealand",
      position: "50% 45%",
    },
  ],
};

const makohaTravelBlock = {
  title: "Before you travel",
  hint: "Practical details, without losing the mood",
  cards: [
    {
      key: "journey",
      variant: "photos" as const,
      title: "The journey",
      images: [
        {
          src: travelWalkingTrack,
          alt: "Walking track sign to Mākoha PurePod through native forest near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelForestArrival,
          alt: "Forest arrival track and directional sign near Mākoha PurePod, Kerikeri, Northland, New Zealand",
        },
        {
          src: travelForest,
          alt: "Native forest walking track to Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelBridge,
          alt: "Bridge on the native forest walking track to Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
      ],
      body: `The final part of the journey slows everything down.

After leaving the car behind, a short 5–10 minute forest walk leads you quietly towards the pod — through native bush, birdsong and the feeling of being completely removed from the outside world.

The track includes uneven natural terrain, so suitable walking footwear and light luggage are recommended.`,
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Subtropical Northland",
      editorialLead:
        "Warm and humid when summer settles in; softer when winter rain deepens the green.",
      body:
        "The Bay of Islands has a subtropical climate — warm and humid in summer, cooler and sometimes rainy in winter. Rain is part of the landscape here, deepening the lush, green, almost jungle-like character of the place.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPlatter,
          alt: "Local food platter at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelDinner,
          alt: "Outdoor dinner on the private deck at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelBreakfastBasket,
          alt: "Breakfast basket with local produce at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelKitchenForest,
          alt: "Kitchen area inside Mākoha PurePod overlooking native forest near Kerikeri, Northland, New Zealand",
        },
        {
          src: travelEveningMeal,
          alt: "Evening meal served on the private deck at Mākoha PurePod near Kerikeri, Northland, New Zealand",
        },
      ],
      body: `Meals at Mākoha are designed to feel simple and relaxed.

Inside the pod you will find locally sourced provisions, breakfast essentials and easy-to-prepare dishes — so evenings can be spent slowly, with the forest outside and no need to go anywhere else.`,
    },
  ],
};

const makohaExperiencesBlock = {
  title: "Around Mākoha",
  hint: "Sea, culture and wild landscape",
  intro:
    "A curated selection of three experiences that capture the essence of this place: sea, culture and wild landscape.",
  items: [
    {
      title: "Bay of Islands by boat",
      image: expBoat,
      imageAlt:
        "Boat cruise in the Bay of Islands near Kerikeri, Northland, New Zealand",
      paragraphs: [
        "Explore one of New Zealand’s most iconic coastal regions by boat — a scattered archipelago of islands, turquoise water and marine life within reach of Mākoha PurePod.",
        "Seeing the Bay of Islands from the water is the best way to understand why this region feels so remote and extraordinary.",
      ],
      links: [
        {
          label: "Explore Bay of Islands cruises",
          href: "https://www.exploregroup.co.nz/bay-of-islands/",
        },
      ],
    },
    {
      title: "Waitangi Treaty Grounds",
      image: expWaitangi,
      imageAlt:
        "Māori meeting house at Waitangi Treaty Grounds near Kerikeri, Bay of Islands, Northland, New Zealand",
      paragraphs: [
        "The spiritual and historical heart of New Zealand. Walk the place where Māori and European cultures first met and discover the stories that shaped the country.",
        "Staying at Mākoha puts you within reach of this rich cultural landscape.",
      ],
      links: [
        {
          label: "Visit Waitangi Treaty Grounds",
          href: "https://www.waitangi.org.nz/",
        },
      ],
    },
    {
      title: "Mahinepua Peninsula Track",
      image: expMahinepua,
      imageAlt:
        "Mahinepua Peninsula coastal walk near Kerikeri, Bay of Islands, Northland, New Zealand",
      paragraphs: [
        "A striking coastal walk that winds through green hills and opens onto hidden beaches and wide views across the Bay of Islands.",
        "Here the Bay of Islands shows its wildest, most untouched side — a strong contrast to the native forest privacy you experience at Mākoha PurePod.",
      ],
      links: [
        {
          label: "Mahinepua Peninsula Track",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/whangaroa-area/things-to-do/mahinepua-peninsula-track/",
        },
      ],
    },
  ],
  moreTitle: "More ways to explore the Bay of Islands",
  moreSubtitle:
    "Beyond the pod, the landscape continues to unfold at a gentle pace.",
  moreBody:
    "Kawiti Glowworm Caves and the Kerikeri River track to Rainbow Falls offer a softer, quieter side of the region — forest, water and shade, ideal for a relaxed half-day walk. For open horizons and sea air, nearby beaches such as Matauri Bay and Te Ngaere Bay invite long walks, quiet swims and slow afternoons by the water.",
  moreRecommendations: [
    {
      label: "Glowworms & limestone",
      place: "Kawiti Glowworm Caves",
      href: "https://www.kawiticaves.co.nz/",
    },
    {
      label: "Forest & waterfalls",
      place: "Rainbow Falls walk (Kerikeri)",
      href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/kerikeri-area/things-to-do/rainbow-falls-walk/",
    },
    {
      label: "Quiet beaches",
      place: "Matauri Bay & Te Ngaere Bay",
      href: "https://www.newzealand.com/int/plan/bay/bay-of-islands/",
    },
  ],
};

const makohaReviews = {
  title: "What guests say",
  hint: "From recent Mākoha stays",
  intro: "Reflections from guests who stayed in the Kerikeri forest setting.",
  items: [
    {
      quote:
        "The native-bush walk set the tone straight away. By the time we reached the pod, everything felt quieter.",
      author: "M. & R.",
    },
    {
      quote:
        "Night here was memorable: glowworms nearby, wind through the trees, and a very clear sky.",
      author: "Late-summer stay",
    },
    {
      quote:
        "It felt private and calm, while still close enough for a day out on the coast. A lovely balance.",
      author: "Returning guests",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/makoha`. */
export const makohaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Kerikeri",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Mākoha PurePod glass cabin in native forest near Kerikeri, Northland, New Zealand",
    title: "Mākoha",
    subtitleParagraphs: [HERO_PARAGRAPH_1],
    imagePosition: "70% 82%",
    imagePositionMd: "60% 86%",
    imagePositionXl: "55% 90%",
  },
  podCarouselAriaLabel: "Mākoha PurePod — photo gallery",
  podNarrative: makohaPodNarrative,
  travelBlock: makohaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Mākoha",
    summaryIntro:
      "Bay cruises, Waitangi and wild coast — when you feel like leaving the forest for a day.",
  },
  experiencesBlock: makohaExperiencesBlock,
  reviews: makohaReviews,
  faqItems: MAKOHA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: MAKOHA_BOOKING_URL,
  },
};
