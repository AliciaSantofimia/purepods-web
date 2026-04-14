import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";

export const wineDineHero = {
  src: "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
  alt: "Local food and wine spread in a scenic New Zealand landscape, slow dining and regional flavours",
};

export const wineDineAboutLeadHtml = `Below you will find a calm, editorial selection of wine and dining stops — from vineyard tastings to local favourites — each with a direct link to the venue and suggested nearby PurePods booking where the regions align. Browse the full collection on <a href="/experiences">Experiences</a>.`;

const nv = (s: Omit<HikingSlide, "image" | "noVisual"> & { noVisual?: boolean }): HikingSlide => ({
  ...s,
  noVisual: true,
  image: null,
  alt: "",
});

export const wineDineVineyardSlides: HikingSlide[] = [
  {
    image: "/assets/img/greystone/greystone-wine-dinner-experience-waipara.jpg",
    alt: "Wine and seasonal dining at Greystone in the Waipara Valley, North Canterbury, New Zealand",
    title: "Greystone Wines & Restaurant",
    placeHref: "https://www.greystonewines.co.nz/",
    description:
      "A leading organic winery offering a refined food and wine experience in a stunning vineyard setting. Seasonal menus, locally sourced ingredients and beautifully crafted wines make this one of the region's most complete and memorable stops.",
    ctas: [
      { label: "Stay at Atatū, Hurunui →", href: "/location/atatu" },
      { label: "Stay at Korimako, Hurunui →", href: "/location/korimako" },
    ],
  },
  {
    image: "/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg",
    alt: "Vineyard rows and tussock hills in Central Otago, New Zealand wine country",
    title: "Burn Cottage Winery",
    placeHref: "https://burncottage.com/",
    description:
      "A boutique biodynamic winery producing exceptional Pinot Noir. The experience is intimate, thoughtful and set within one of New Zealand's most striking wine landscapes.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: "/assets/img/experiences/romantic/purepods-romantic-getaway-picnic-wine-experience-new-zealand.jpg",
    alt: "Picnic with wine and local produce overlooking New Zealand nature",
    title: "Prophet's Rock",
    placeHref: "https://www.prophetsrock.co.nz/",
    description:
      "An internationally acclaimed winery known for its handcrafted wines and carefully curated tastings. A premium experience for those seeking depth, quality and a true sense of terroir.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: "/assets/img/haurapa/tekano-estate-vineyard-central-otago-wine-region-new-zealand.jpg",
    alt: "Te Kano Estate vineyards and lake outlook in Central Otago, New Zealand",
    title: "Te Kano Estate",
    placeHref: "https://tekanoestate.com/",
    description:
      "A modern, architecturally striking winery offering refined tastings overlooking the dramatic Central Otago landscape. A seamless blend of design, art and winemaking.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
];

export const wineDineRestaurantSlides: HikingSlide[] = [
  nv({
    title: "Black Estate",
    placeHref: "https://blackestate.co.nz/",
    description:
      "One of the region's standout destinations, pairing organic wines with a seasonal restaurant focused on local produce. Elegant yet relaxed, with beautiful vineyard views.",
    ctas: [
      { label: "Stay at Atatū →", href: "/location/atatu" },
      { label: "Stay at Korimako →", href: "/location/korimako" },
    ],
  }),
  nv({
    title: "The Stoaker Room Cromwell",
    placeHref: "https://www.thestoakerroom.co.nz/",
    description:
      "A unique dining experience centred around slow cooking in wine barrels. Creative, flavourful and distinctly local — ideal for something different in a relaxed setting.",
    ctas: [
      { label: "Stay at Haurapa →", href: "/location/haurapa" },
      { label: "Stay at Tāima →", href: "/location/taima" },
    ],
  }),
  nv({
    title: "The Hunting Lodge",
    placeHref: "https://www.thehuntinglodge.com/",
    description:
      "A complete vineyard experience combining wine tasting, seasonal dining and open green spaces. Ideal for a long, relaxed afternoon surrounded by vines.",
    ctas: [{ label: "Stay at Rewarewa →", href: "/location/rewarewa" }],
  }),
];

export const wineDineViewSlides: HikingSlide[] = [
  nv({
    title: "Stratosfare Restaurant & Bar",
    placeHref: "https://rotorua.skyline.co.nz/things-to-do/stratosfare-restaurant-rotorua/",
    description:
      "A relaxed dining experience with panoramic views over Rotorua. Ideal for enjoying local flavours while taking in the wider landscape from above.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  }),
  nv({
    title: "Lakeland Queen Cruise",
    placeHref: "https://lakelandqueen.com/",
    description:
      "A unique on-water dining experience across Lake Rotorua, combining good food with geothermal scenery and ever-changing views.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  }),
  nv({
    title: "Flatwhite Café",
    placeHref: "https://www.flatwhite.co.nz/",
    description:
      "A beachfront restaurant offering refined yet relaxed dining with uninterrupted ocean views. A perfect stop for lunch or dinner by the sea.",
    ctas: [{ label: "Stay at Ruru →", href: "/location/ruru" }],
  }),
];

export const wineDineLocalSlides: HikingSlide[] = [
  nv({
    title: "Atticus Finch",
    placeHref: "https://atticusfinch.co.nz/",
    description:
      "A lively, modern bistro known for its share-style plates and social atmosphere. A great option for a relaxed evening in the heart of Eat Street.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  }),
  nv({
    title: "Poco Tapas & Wine",
    placeHref: "https://www.poco.nz/",
    description:
      "An intimate tapas and wine bar offering creative small plates and a curated drinks list. Ideal for a slower, more atmospheric dining experience.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  }),
  nv({
    title: "Le Café de Paris",
    placeHref: "https://www.cafedeparis.co.nz/",
    description:
      "A charming French-style café known for pastries, coffee and relaxed breakfasts. A simple, well-loved stop to start the day.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  }),
];

export const wineDineFaq: { q: string; a: string }[] = [
  {
    q: "What does this Wine & Dine page include?",
    a: "Editorial highlights across vineyard dining and tastings, winery restaurants, dining with a view, and relaxed local favourites. Each carousel slide includes an official experience link plus direct PurePods booking links for nearby stays where we have a pod in the region.",
  },
  {
    q: "How should I plan my visit?",
    a: "Always confirm opening hours, reservations and seasonal menus with each venue before you travel.",
  },
  {
    q: "How do I continue to booking from this page?",
    a: "Each slide includes booking pathways to suggested PurePods sites where available, and the final call to action opens PurePods booking to check availability and complete your stay.",
  },
];
