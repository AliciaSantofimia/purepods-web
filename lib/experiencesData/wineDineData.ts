import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";
import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

export const wineDineHero = {
  src: "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
  alt: "Local food and wine spread in a scenic New Zealand landscape, slow dining and regional flavours",
};

export const wineDineContextHeading = "Where to stay for these experiences";

export const wineDineContextBody =
  "Stay close to vineyards, winery restaurants and local favourites across New Zealand, with nearby PurePods that let each food and wine experience become part of a slower escape. Choose a region, explore what is nearby, then return to your private glass cabin for stillness, views and time to let the day settle.";

export const wineDineExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: "/assets/img/experiences/wine-dine/te-kano-estate-central-otago-vineyard-architecture-lake-view-new-zealand.jpg",
    alt: "Te Kano Estate vineyard architecture with lake and mountain views in Central Otago, New Zealand",
    title: "Te Kano Estate (Central Otago)",
    description:
      "A Central Otago wine experience shaped by distinctive landscapes, elegant cellar-door hospitality and carefully made wines.",
    pods: [
      {
        label: "Stay at Haurapa PurePod in Central Otago",
        href: "/location/haurapa/?from=wine-dine",
      },
      {
        label: "Stay at Tāima PurePod in Central Otago",
        href: "/location/taima/?from=wine-dine",
      },
    ],
    distance: "Central Otago vineyard",
    timing: "book tastings ahead",
    nearbyRegion: " — Central Otago, South Island",
    url: "https://www.tekanoestate.com/",
  },
  {
    image: "/assets/img/experiences/wine-dine/black-estate-winery-dining-wine-pairing-waipara-valley-new-zealand.jpg",
    alt: "Winery dining and wine pairing at Black Estate in the Waipara Valley, North Canterbury, New Zealand",
    imagePosition: "center 65%",
    title: "Black Estate (Waipara Valley)",
    description:
      "Organic wines, seasonal food and vineyard views come together in one of Waipara Valley’s most distinctive wine-country settings.",
    pods: [
      {
        label: "Greystone PurePod",
        href: "/location/greystone/?from=wine-dine",
      },
    ],
    distance: "Waipara Valley winery",
    timing: "lunch and tastings",
    nearbyRegion: " — North Canterbury, South Island",
    url: "https://blackestate.co.nz/",
  },
  {
    image: "/assets/img/experiences/wine-dine/greystone-wines-restaurant-waipara-valley-wine-tasting-new-zealand.jpg",
    alt: "Greystone Wines restaurant and wine tasting in the Waipara Valley, North Canterbury, New Zealand",
    title: "Greystone Wines (Waipara Valley)",
    description:
      "An organic winery and restaurant experience where seasonal food, considered winemaking and vineyard landscapes meet.",
    pods: [
      {
        label: "Greystone PurePod",
        href: "/location/greystone/?from=wine-dine",
      },
    ],
    distance: "Waipara Valley winery",
    timing: "seasonal dining",
    nearbyRegion: " — North Canterbury, South Island",
    url: "https://www.greystonewines.co.nz/",
  },
  {
    image: "/assets/img/experiences/wine-dine/stratosfare-restaurant-rotorua-panoramic-view-dining-new-zealand.jpg",
    alt: "Stratosfare Restaurant & Bar in Rotorua with panoramic views over the city and landscape, New Zealand",
    title: "Stratosfare Restaurant & Bar (Rotorua)",
    description:
      "A panoramic Rotorua dining experience with wide views, local flavours and a memorable sense of arrival above the city.",
    pods: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
    distance: "Rotorua dining with views",
    timing: "lunch or dinner",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://rotorua.skyline.co.nz/things-to-do/stratosfare-restaurant-rotorua/",
  },
  {
    image: "/assets/img/experiences/wine-dine/burn-cottage-winery-central-otago-vineyard-landscape-new-zealand.jpg",
    alt: "Burn Cottage Winery vineyard landscape and rolling Central Otago wine country, New Zealand",
    title: "Burn Cottage Winery (Central Otago)",
    description:
      "A biodynamic Central Otago winery known for intimate tastings, thoughtful hospitality and expressive Pinot Noir.",
    pods: [
      {
        label: "Haurapa PurePod in Central Otago high country",
        href: "/location/haurapa/?from=wine-dine",
      },
      {
        label: "Tāima PurePod in Central Otago high country",
        href: "/location/taima/?from=wine-dine",
      },
    ],
    distance: "Central Otago winery",
    timing: "tastings by appointment",
    nearbyRegion: " — Central Otago, South Island",
    url: "https://burncottage.com/",
  },
  {
    image: "/assets/img/experiences/wine-dine/stoaker-room-cromwell-wine-tasting-platter-central-otago-new-zealand.jpg",
    alt: "Wine tasting platter at The Stoaker Room in Cromwell, Central Otago, New Zealand",
    title: "The Stoaker Room (Cromwell)",
    description:
      "A relaxed Cromwell dining stop centred on slow cooking, wine-country flavour and a distinctly local Central Otago atmosphere.",
    pods: [
      {
        label: "Haurapa PurePod near Cromwell and Lake Dunstan",
        href: "/location/haurapa/?from=wine-dine",
      },
      {
        label: "Tāima PurePod near Cromwell and Kawarau Gorge",
        href: "/location/taima/?from=wine-dine",
      },
    ],
    distance: "Cromwell dining",
    timing: "lunch or dinner",
    nearbyRegion: " — Central Otago, South Island",
    url: "https://www.thestoakerroom.co.nz/",
  },
  {
    image: "/assets/img/experiences/wine-dine/prophets-rock-winery-central-otago-wine-tasting-experience-new-zealand.jpg",
    alt: "Wine tasting experience at Prophet's Rock winery in Central Otago, New Zealand",
    title: "Prophet’s Rock (Central Otago)",
    description:
      "A refined Central Otago tasting experience with handcrafted wines, strong terroir and a quiet sense of place.",
    pods: [
      {
        label: "Stay at Haurapa PurePod in Central Otago",
        href: "/location/haurapa/?from=wine-dine",
      },
      {
        label: "Stay at Tāima PurePod in Central Otago",
        href: "/location/taima/?from=wine-dine",
      },
    ],
    distance: "Central Otago winery",
    timing: "book tastings ahead",
    nearbyRegion: " — Central Otago, South Island",
    url: "https://www.prophetsrock.co.nz/",
  },
  {
    image: "/assets/img/experiences/wine-dine/flatwhite-beachfront-cafe-interior-ocean-view-dining-new-zealand.jpg",
    alt: "Flatwhite Café beachfront interior with ocean views for relaxed dining in New Zealand",
    title: "Flatwhite Café (Waihi Beach)",
    description:
      "Beachfront dining with ocean views, relaxed service and a coastal pace that works beautifully with a Coromandel stay.",
    pods: [
      {
        label: "Ruru PurePod near Mount Karangahake and Waihi",
        href: "/location/ruru/?from=wine-dine",
      },
    ],
    distance: "Waihi Beach dining",
    timing: "lunch or dinner",
    nearbyRegion: " — Waihi Beach, North Island",
    url: "https://www.flatwhite.co.nz/",
  },
  {
    image: "/assets/img/experiences/wine-dine/the-hunting-lodge-wine-pouring-tasting-experience-auckland-new-zealand.jpg",
    alt: "Wine pouring during a tasting experience at The Hunting Lodge vineyard, Auckland, New Zealand",
    title: "The Hunting Lodge (Auckland)",
    description:
      "A vineyard and dining destination with tastings, seasonal food and open green space within reach of Auckland’s west coast.",
    pods: [
      {
        label: "Rewarewa PurePod near Auckland and the Muriwai Coast",
        href: "/location/rewarewa/?from=wine-dine",
      },
    ],
    distance: "Auckland wine country",
    timing: "long lunch or tasting",
    nearbyRegion: " — Auckland / Muriwai Coast, North Island",
    url: "https://www.thehuntinglodge.com/",
  },
  {
    image: "/assets/img/experiences/wine-dine/lakeland-queen-cruise-lake-rotorua-mountain-view.jpg",
    alt: "Lakeland Queen cruise on Lake Rotorua with mountain views, New Zealand",
    title: "Lakeland Queen Cruise (Lake Rotorua)",
    description:
      "A lake dining cruise that pairs Rotorua scenery, geothermal shoreline and an easy on-water dining rhythm.",
    pods: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
    distance: "Lake Rotorua cruise",
    timing: "on-water dining",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://lakelandqueen.com/",
  },
];

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
      { label: "Stay at Atatū, Hurunui →", href: "/location/atatu/?from=wine-dine" },
      { label: "Stay at Korimako, Hurunui →", href: "/location/korimako/?from=wine-dine" },
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
      { label: "Stay at Atatū →", href: "/location/atatu/?from=wine-dine" },
      { label: "Stay at Korimako →", href: "/location/korimako/?from=wine-dine" },
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
    ctas: [
      {
        label: "Stay at Rewarewa PurePod on the Muriwai Coast",
        href: "/location/rewarewa/?from=wine-dine",
      },
    ],
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
    ctas: [
      {
        label: "Stay at Ruru PurePod in the Coromandel",
        href: "/location/ruru/?from=wine-dine",
      },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/lakeland-queen-rotorua-lake-dinner-cruise-new-zealand.jpg",
    alt: "Lakeland Queen dinner cruise on Lake Rotorua with geothermal shoreline scenery, New Zealand",
    title: "Lakeland Queen Cruise",
    placeHref: "https://lakelandqueen.com/",
    description:
      "A unique on-water dining experience across Lake Rotorua, combining good food with geothermal scenery and ever-changing views.",
    ctas: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/stratosfare-restaurant-rotorua-panoramic-view-dining-new-zealand.jpg",
    alt: "Stratosfare Restaurant & Bar in Rotorua with panoramic views over the city and landscape, New Zealand",
    title: "Stratosfare Restaurant & Bar",
    placeHref: "https://rotorua.skyline.co.nz/things-to-do/stratosfare-restaurant-rotorua/",
    description:
      "A relaxed dining experience with panoramic views over Rotorua. Ideal for enjoying local flavours while taking in the wider landscape from above.",
    ctas: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
  },
];

export const wineDineLocalSlides: HikingSlide[] = [
  {
    image: "/assets/img/experiences/wine-dine/atticus-finch-restaurant-rotorua-desserts-milkshakes-dining-new-zealand.jpg",
    alt: "Desserts and milkshakes served at Atticus Finch restaurant in Rotorua, New Zealand",
    title: "Atticus Finch",
    placeHref: "https://atticusfinch.co.nz/",
    description:
      "A lively, modern bistro known for its share-style plates and social atmosphere. A great option for a relaxed evening in the heart of Eat Street.",
    ctas: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/le-cafe-de-paris-macarons-dessert-patisserie-new-zealand.jpg",
    alt: "Colorful macarons and dessert selection at Le Café de Paris patisserie in New Zealand",
    title: "Le Café de Paris",
    placeHref: "https://www.cafedeparis.co.nz/",
    description:
      "A charming French-style café known for pastries, coffee and relaxed breakfasts. A simple, well-loved stop to start the day.",
    ctas: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
  },
  {
    image: "/assets/img/experiences/wine-dine/poco-tapas-and-wine-rotorua-modern-dining-dish-new-zealand.jpg",
    alt: "Modern tapas dish at Poco Tapas & Wine in Rotorua, New Zealand",
    title: "Poco Tapas & Wine",
    placeHref: "https://www.poco.nz/",
    description:
      "An intimate tapas and wine bar offering creative small plates and a curated drinks list. Ideal for a slower, more atmospheric dining experience.",
    ctas: [
      {
        label: "Stay at Pāmu PurePod in Rotorua",
        href: "/location/pamu/?from=wine-dine",
      },
    ],
  },
];

export const wineDineFaq: { q: string; a: string }[] = [
  {
    q: "What is Wine & Dine by PurePods?",
    a: "Wine & Dine by PurePods is a guide to New Zealand food and wine experiences near selected PurePods, from vineyard restaurants and winery visits to local dining, regional flavours and scenic places to stay nearby.",
  },
  {
    q: "Are wine tastings or meals included in a PurePod stay?",
    a: "No. Wine tastings, meals, restaurant bookings and alcohol are not automatically included in a PurePod stay unless clearly stated in a specific booking option. Wine & Dine helps you explore nearby experiences so you can plan them separately.",
  },
  {
    q: "Do I need to book wineries or restaurants separately?",
    a: "Yes. Many wineries, restaurants and local dining experiences require separate bookings, especially during weekends, holidays and peak travel periods. Check opening hours, availability and booking requirements directly with each venue before you travel.",
  },
  {
    q: "Can I stay at a PurePod in a wine region?",
    a: "Yes. Greystone PurePod is set above the award-winning Greystone vineyard in Waipara Valley, less than an hour north of Christchurch. It is one of the clearest Wine & Dine stays, combining a private off-grid glass cabin with a setting in one of New Zealand’s recognised wine-producing regions.",
  },
  {
    q: "What can guests experience at Greystone Wines?",
    a: "Greystone Wines offers wine tastings, tastings with local cheese, restaurant dining and seasonal food and wine experiences at its Cellar Door & Restaurant in Waipara. These experiences are operated by Greystone Wines and should be checked and booked directly with them before you travel.",
  },
  {
    q: "Is Greystone PurePod part of the Greystone vineyard experience?",
    a: "Greystone PurePod is located above the Greystone vineyard, with views across Waipara Valley and towards the Southern Alps. It gives guests a private place to stay within the wider Greystone wine-country setting, while any tastings, dining or vineyard experiences should be arranged separately with Greystone Wines.",
  },
  {
    q: "Can I visit wineries near a PurePod?",
    a: "Yes. Several PurePods are close to wineries, vineyard restaurants and regional dining experiences. Greystone PurePod offers a direct Waipara Valley wine-country setting, while Haurapa and Tāima connect well with Central Otago wine country, and Atatū and Korimako place you near Waipara and North Canterbury.",
  },
  {
    q: "Which PurePods are featured in Wine & Dine?",
    a: "Wine & Dine currently features nearby stays including Greystone in Waipara Valley, Haurapa and Tāima in Central Otago, Atatū and Korimako near Waipara and North Canterbury, Pāmu near Rotorua, Ruru near the Coromandel and Rewarewa near Auckland and the Muriwai Coast.",
  },
  {
    q: "Is Wine & Dine suitable for couples?",
    a: "Yes. PurePods are designed for a maximum of two guests, making Wine & Dine well suited to couples planning a food and wine getaway, anniversary, special occasion or slow regional escape.",
  },
  {
    q: "How do I choose the right PurePod for a food and wine getaway?",
    a: "Start with the kind of experience you want: vineyard dining, winery visits, local restaurants, lake or coastal dining, or a particular region. Then follow the nearby PurePod link to learn more about the cabin, location and booking flow.",
  },
  {
    q: "How do Wine & Dine links work?",
    a: "The nearby PurePod links take you first to the editorial landing page for that pod, where you can learn about the location, setting and stay. From there, you can continue into the booking flow when you are ready.",
  },
  {
    q: "Do I need a car for Wine & Dine experiences?",
    a: "In most cases, yes. PurePods are private, off-grid stays in rural or regional settings, and many nearby wineries, restaurants and local experiences are easiest to reach by car. Always plan safe transport if you intend to drink alcohol.",
  },
  {
    q: "How is Wine & Dine different from Romantic or Relax & Coastal?",
    a: "Wine & Dine focuses on food, wine, vineyards, restaurants and regional flavours near PurePods. Romantic is centred on private moments for two, while Relax & Coastal focuses more on slower coastal, geothermal and restorative escapes.",
  },
];
