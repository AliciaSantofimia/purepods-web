import type { LocationFaqItem } from "@/components/location/LocationFaqSection";
import type { EditorialPodLocationConfig } from "./editorialPodLocationTypes";

const heroImage =
  "/assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-muriwai-coast..jpg";
const podStairs =
  "/assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-sunset-lighting-new-zealand.jpg";
const podBedroom =
  "/assets/img/rewarewa/rewarewa-purepod-bedroom-interior-muriwai-coast.jpg";
const podStars =
  "/assets/img/rewarewa/rewarewa-purepod-glass-cabin-terrace-exterior-view-new-zealand.jpg";
const expBeach = "/assets/img/rewarewa/muriwai-black-sand-beach-coastline.jpg";
const expRanges =
  "/assets/img/rewarewa/waitakere-ranges-coastal-landscape-auckland.jpg";
const expTeHenga = "/assets/img/rewarewa/te-henga-coastal-landscape-muriwai.jpg";
const travelRoad =
  "/assets/img/rewarewa/muriwai-countryside-access-road.jpg";
const travelAerialLandscape =
  "/assets/img/rewarewa/rewarewa-purepod-journey-green-hills-landscape-view-new-zealand.jpg";
const travelPlatter =
  "/assets/img/rewarewa/rewarewa-local-food-platter-muriwai-coast.JPG";
const travelBreakfast =
  "/assets/img/rewarewa/rewarewa-breakfast-basket-muriwai-coast.JPG";

export const REWAREWA_BOOKING_URL =
  "https://purepods.com/booking/?force_site_id=15";

const HERO_SUBTITLE =
  "On the Muriwai Coast — where black sand beaches meet the Waitākere Ranges — PurePod Rewarewa is a private glass cabin for two near Auckland. A short approach from the road leads to a fully private site with no neighbours; suitable footwear helps. Slow down, breathe and let the coast take over.";

export const REWAREWA_FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Rewarewa?",
    answer:
      "Reaching PurePod Rewarewa is a drive from Auckland through the Waitākere Ranges or along the coast — about 45 minutes to an hour. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the city behind and arriving slowly at the edge of the coast.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Muriwai Coast has a temperate maritime climate — often windy, with mild temperatures year-round. The west coast can be changeable; layered clothing and a windproof layer are recommended so you can enjoy both the pod and the beach in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the sound of the coast. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the sound of the ocean, the changing light and the sense of being away from the city. A short approach from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

const rewarewaPodNarrative = {
  title: "The Pod",
  hint: "The essentials, no fluff",
  paragraphs: [
    "PurePod Rewarewa sits on the Muriwai Coast — the wild west coast near Auckland, where black sand, surf and the Waitākere Ranges define the landscape. The pod is designed for two: a simple, comfortable base from which to experience the sound of the ocean, the changing light and the sense of being away from the city. Here the coast feels close — wind, birds and the quiet of the bush.",
    "Arrival is part of the experience. A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
  ],
  galleryCaption:
    "PurePod Rewarewa is not just a place to sleep but an immersion in the Muriwai landscape. The coast, the ranges and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the land. A place to disconnect, observe and simply be.",
  gallery: [
    {
      src: podStairs,
      alt: "Rewarewa PurePod glass cabin exterior on the Muriwai Coast, New Zealand",
      position: "center 70%",
    },
    {
      src: podBedroom,
      alt: "Bedroom interior at Rewarewa PurePod, Muriwai Coast, New Zealand",
      position: "50% 50%",
    },
    {
      src: podStars,
      alt: "Rewarewa PurePod terrace and glass cabin exterior, Muriwai Coast, New Zealand",
      position: "50% 50%",
    },
  ],
};

const rewarewaTravelBlock = {
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
          alt: "Countryside access road on the Muriwai Coast, New Zealand",
        },
        {
          src: travelAerialLandscape,
          alt: "Rewarewa PurePod glass cabin on the Muriwai Coast, New Zealand",
        },
      ],
      body:
        "Reaching PurePod Rewarewa is a drive from Auckland through the Waitākere Ranges or along the coast — about 45 minutes to an hour. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the city behind and arriving slowly at the edge of the coast.",
    },
    {
      key: "climate",
      variant: "editorial" as const,
      title: "The climate",
      editorialEyebrow: "Muriwai Coast",
      editorialLead:
        "The Muriwai Coast has a temperate maritime climate — often windy, with mild temperatures year-round.",
      body:
        "The west coast can be changeable; layered clothing and a windproof layer are recommended so you can enjoy both the pod and the beach in comfort.",
    },
    {
      key: "food",
      variant: "photos" as const,
      title: "Food & dining",
      images: [
        {
          src: travelPlatter,
          alt: "Local food platter at Rewarewa PurePod, Muriwai Coast, New Zealand",
        },
        {
          src: travelBreakfast,
          alt: "Breakfast basket at Rewarewa PurePod, Muriwai Coast, New Zealand",
        },
      ],
      body:
        "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the sound of the coast. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
    },
  ],
};

const rewarewaExperiencesBlock = {
  title: "Experiences that define Rewarewa",
  hint: "Black sand, coast and ranges",
  intro:
    "A curated selection of three experiences that capture the essence of the Muriwai Coast — black sand beaches, the Waitākere Ranges and the coastal landscape.",
  items: [
    {
      title: "Muriwai Beach & black sand coast",
      image: expBeach,
      imageAlt: "Muriwai black sand beach and coastline, New Zealand",
      paragraphs: [
        "Muriwai’s black sand beach is one of the region’s defining experiences — long stretches of coast, surf and the sound of the Tasman Sea. Walk the beach, watch the gannet colony on the headland and feel the wind and the scale of the ocean.",
        "A landscape that feels raw and open.",
      ],
      links: [
        {
          label: "Muriwai Beach",
          href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/muriwai-beach/",
        },
      ],
    },
    {
      title: "Waitākere Ranges",
      image: expRanges,
      imageAlt:
        "Waitākere Ranges coastal landscape near Auckland, New Zealand",
      paragraphs: [
        "The Waitākere Ranges form the backdrop to the coast — native forest, walking tracks and the green hills that run down to the sea. Scenic drives and short walks reveal waterfalls, bush and the sense of being in a different world, minutes from the city.",
        "Where bush and coast meet.",
      ],
      links: [
        {
          label: "Waitākere Ranges Regional Park",
          href: "https://www.aucklandcouncil.govt.nz/parks-recreation/places-to-go/regional-parks/Pages/waitakere-ranges-regional-park.aspx",
        },
      ],
    },
    {
      title: "Te Henga (Bethells Beach)",
      image: expTeHenga,
      imageAlt:
        "Te Henga (Bethells Beach) coastal landscape, Muriwai region, New Zealand",
      paragraphs: [
        "Te Henga is another stretch of wild coast — black sand, dunes and the same sense of space and wind. A short drive from the pod, it offers long walks, surf and the feeling of being at the edge of the land.",
        "Another face of the same coast — raw, open and quiet.",
      ],
      links: [
        {
          label: "Te Henga / Bethells Beach",
          href: "https://www.aucklandcouncil.govt.nz/parks-recreation/places-to-go/regional-parks/Pages/te-henga-bethells-beach.aspx",
        },
      ],
    },
  ],
  moreTitle: "Wine, adventure and easy day trips just outside the pod.",
  moreSubtitle: "",
  moreBody: "",
  moreRecommendations: [],
  moreExploreGroups: [
    {
      heading: "Wine & Vineyards",
      intro:
        "A relaxed contrast to the wild coast — cellar doors, long lunches and award-winning wines.",
      links: [
        { name: "Kumeu River Wines", href: "https://kumeuriver.co.nz/" },
        { name: "The Hunting Lodge", href: "https://www.thehuntinglodge.com/" },
        { name: "Westbrook Winery", href: "https://www.westbrook.co.nz/" },
      ],
    },
    {
      heading: "Soft Adventure",
      intro:
        "Easy outdoor experiences for adding a little movement to your stay, all close to the Pod.",
      links: [
        {
          name: "Woodhill MTB Park",
          href: "https://www.bikeparks.co.nz/es",
        },
        {
          name: "Tree Adventures (zip lines & treetop course)",
          href: "https://treeadventures.co.nz/",
        },
      ],
    },
  ],
};

const rewarewaReviews = {
  title: "What guests say",
  hint: "From recent Rewarewa stays",
  intro: "Guest impressions from the Muriwai Coast setting.",
  items: [
    {
      quote:
        "You feel the west coast immediately: wind, big sky, and that black-sand coastline close by.",
      author: "D. & P.",
    },
    {
      quote:
        "Being so close to Auckland yet feeling completely removed from it was the standout for us.",
      author: "Weekend stay",
    },
    {
      quote:
        "At sunset we sat outside for hours watching light move across the ranges. Very calm, very simple.",
      author: "Coastal escape",
    },
  ],
};

/** Single source for `EditorialPodLocationView` on `/location/rewarewa` and FAQ JSON-LD. */
export const rewarewaEditorialConfig: EditorialPodLocationConfig = {
  heroKicker: "PurePod · Muriwai Coast",
  hero: {
    imageSrc: heroImage,
    imageAlt:
      "Rewarewa PurePod glass cabin in the Muriwai Coast landscape, New Zealand",
    title: "Rewarewa",
    subtitleParagraphs: [HERO_SUBTITLE],
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
  },
  podCarouselAriaLabel: "PurePod Rewarewa — photo gallery",
  podNarrative: rewarewaPodNarrative,
  travelBlock: rewarewaTravelBlock,
  experiencesCollapsible: {
    summaryTitle: "Explore around Rewarewa",
    summaryIntro:
      "Black sand beaches, the Waitākere Ranges and wild coast — when you feel like leaving the pod for a day.",
  },
  experiencesBlock: rewarewaExperiencesBlock,
  reviews: rewarewaReviews,
  faqItems: REWAREWA_FAQ_ITEMS,
  cta: {
    priceFrom: "From $— / night",
    bookHref: REWAREWA_BOOKING_URL,
  },
};
