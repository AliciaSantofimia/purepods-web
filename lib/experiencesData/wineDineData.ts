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
    image: "/assets/img/experiences/wine-dine/burn-cottage-winery-central-otago-vineyard-landscape-new-zealand.jpg",
    alt: "Burn Cottage Winery vineyard landscape and rolling Central Otago wine country, New Zealand",
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
    image: "/assets/img/experiences/wine-dine/greystone-wines-restaurant-waipara-valley-wine-tasting-new-zealand.jpg",
    alt: "Greystone Wines restaurant and wine tasting in the Waipara Valley, North Canterbury, New Zealand",
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
    image: "/assets/img/experiences/wine-dine/prophets-rock-winery-central-otago-wine-tasting-experience-new-zealand.jpg",
    alt: "Wine tasting experience at Prophet's Rock winery in Central Otago, New Zealand",
    title: "Prophet's Rock",
    placeHref: "https://www.prophetsrock.co.nz/",
    description:
      "An internationally acclaimed winery known for its handcrafted wines and carefully curated tastings. A premium experience for those seeking depth, quality and a true sense of terroir.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
];

export const wineDineRestaurantSlides: HikingSlide[] = [
  {
    image: "/assets/img/experiences/wine-dine/black-estate-winery-dining-wine-pairing-waipara-valley-new-zealand.jpg",
    alt: "Winery dining and wine pairing at Black Estate in the Waipara Valley, North Canterbury, New Zealand",
    title: "Black Estate",
    placeHref: "https://blackestate.co.nz/",
    description:
      "One of the region's standout destinations, pairing organic wines with a seasonal restaurant focused on local produce. Elegant yet relaxed, with beautiful vineyard views.",
    ctas: [
      { label: "Stay at Atatū →", href: "/location/atatu" },
      { label: "Stay at Korimako →", href: "/location/korimako" },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/stoaker-room-cromwell-wine-tasting-platter-central-otago-new-zealand.jpg",
    alt: "Wine tasting platter at The Stoaker Room in Cromwell, Central Otago, New Zealand",
    title: "The Stoaker Room Cromwell",
    placeHref: "https://www.thestoakerroom.co.nz/",
    description:
      "A unique dining experience centred around slow cooking in wine barrels. Creative, flavourful and distinctly local — ideal for something different in a relaxed setting.",
    ctas: [
      { label: "Stay at Haurapa →", href: "/location/haurapa" },
      { label: "Stay at Tāima →", href: "/location/taima" },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/the-hunting-lodge-wine-pouring-tasting-experience-auckland-new-zealand.jpg",
    alt: "Wine pouring during a tasting experience at The Hunting Lodge vineyard, Auckland, New Zealand",
    title: "The Hunting Lodge",
    placeHref: "https://www.thehuntinglodge.com/",
    description:
      "A complete vineyard experience combining wine tasting, seasonal dining and open green spaces. Ideal for a long, relaxed afternoon surrounded by vines.",
    ctas: [{ label: "Stay at Rewarewa →", href: "/location/rewarewa" }],
  },
];

export const wineDineViewSlides: HikingSlide[] = [
  {
    image: "/assets/img/experiences/wine-dine/flatwhite-beachfront-cafe-interior-ocean-view-dining-new-zealand.jpg",
    alt: "Flatwhite Café beachfront interior with ocean views for relaxed dining in New Zealand",
    title: "Flatwhite Café",
    placeHref: "https://www.flatwhite.co.nz/",
    description:
      "A beachfront restaurant offering refined yet relaxed dining with uninterrupted ocean views. A perfect stop for lunch or dinner by the sea.",
    ctas: [{ label: "Stay at Ruru →", href: "/location/ruru" }],
  },
  {
    image: "/assets/img/experiences/wine-dine/lakeland-queen-rotorua-lake-dinner-cruise-new-zealand.jpg",
    alt: "Lakeland Queen dinner cruise on Lake Rotorua with geothermal shoreline scenery, New Zealand",
    title: "Lakeland Queen Cruise",
    placeHref: "https://lakelandqueen.com/",
    description:
      "A unique on-water dining experience across Lake Rotorua, combining good food with geothermal scenery and ever-changing views.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  },
  {
    image: "/assets/img/experiences/wine-dine/stratosfare-restaurant-rotorua-panoramic-view-dining-new-zealand.jpg",
    alt: "Stratosfare Restaurant & Bar in Rotorua with panoramic views over the city and landscape, New Zealand",
    title: "Stratosfare Restaurant & Bar",
    placeHref: "https://rotorua.skyline.co.nz/things-to-do/stratosfare-restaurant-rotorua/",
    description:
      "A relaxed dining experience with panoramic views over Rotorua. Ideal for enjoying local flavours while taking in the wider landscape from above.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  },
];

export const wineDineLocalSlides: HikingSlide[] = [
  {
    image: "/assets/img/wine-dine/atticus-finch-restaurant-rotorua-desserts-milkshakes-dining-new-zealand.jpg",
    alt: "Desserts and milkshakes served at Atticus Finch restaurant in Rotorua, New Zealand",
    title: "Atticus Finch",
    placeHref: "https://atticusfinch.co.nz/",
    description:
      "A lively, modern bistro known for its share-style plates and social atmosphere. A great option for a relaxed evening in the heart of Eat Street.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  },
  {
    image: "/assets/img/wine-dine/le-cafe-de-paris-macarons-dessert-patisserie-new-zealand.jpg",
    alt: "Colorful macarons and dessert selection at Le Café de Paris patisserie in New Zealand",
    title: "Le Café de Paris",
    placeHref: "https://www.cafedeparis.co.nz/",
    description:
      "A charming French-style café known for pastries, coffee and relaxed breakfasts. A simple, well-loved stop to start the day.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  },
  {
    image: "/assets/img/wine-dine/poco-tapas-and-wine-rotorua-modern-dining-dish-new-zealand.jpg",
    alt: "Modern tapas dish at Poco Tapas & Wine in Rotorua, New Zealand",
    title: "Poco Tapas & Wine",
    placeHref: "https://www.poco.nz/",
    description:
      "An intimate tapas and wine bar offering creative small plates and a curated drinks list. Ideal for a slower, more atmospheric dining experience.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
  },
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
