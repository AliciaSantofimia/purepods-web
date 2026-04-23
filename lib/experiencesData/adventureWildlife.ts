const B = "/assets/img/experiences/adventure-wildlife/";

export const adventureHero = {
  src: `${B}kaikoura-whale-tail-sunset-new-zealand-wildlife-experience.jpg`,
  alt: "Whale tail at sunset off the Kaikōura coast, New Zealand, a dramatic wildlife experience in the open ocean",
};

/** Short intro below the hero (replaces former long #about copy). */
export const adventureIntroParagraph =
  "This page highlights iconic wildlife and adventure operators across New Zealand — each paired with nearby PurePod stays so you can plan bold days out and quiet nights in the landscape.";

/** Editorial context above the experiences carousel (SEO / intent bridge). */
export const adventureContextHeading =
  "Where to stay for New Zealand wildlife and adventure experiences";

export const adventureContextBody =
  "If you're planning to experience whale watching in Kaikōura, volcanic landscapes near Rotorua, or remote wildlife encounters across New Zealand, where you stay matters as much as what you do. PurePods are placed in quiet natural settings near some of the country's most memorable experiences, making it easier to pair iconic days out with complete overnight stillness.";

/** GEO- and intent-focused FAQ (schema uses this list exactly). */
export const adventureGeoFaq: { q: string; a: string }[] = [
  {
    q: "What are the best wildlife experiences in New Zealand?",
    a: "Some of New Zealand's best wildlife experiences include whale watching in Kaikōura, yellow-eyed penguin encounters in Akaroa, and remote wildlife trips around Stewart Island. These experiences stand out because they combine rare species, dramatic natural settings, and strong local guiding.",
  },
  {
    q: "Where should I stay for whale watching in Kaikōura?",
    a: "Kahutara and Manakau are two strong PurePods options for travellers planning whale watching in Kaikōura. Both offer a quieter overnight base within reach of the coast, making it easier to pair a marine wildlife experience with a more private stay in nature.",
  },
  {
    q: "What is the best time of year for whale watching in Kaikōura?",
    a: "Whale watching in Kaikōura is possible year-round, with sperm whales commonly seen in every season. Blue whales are more often spotted from November to March, while winter can bring especially dramatic conditions on the coast.",
  },
  {
    q: "Are there good adventure experiences near Rotorua?",
    a: "Yes, Rotorua is one of New Zealand's strongest regions for adventure experiences, especially rafting and volcanic scenic flights. Kaituna rafting and Mount Tarawera aerial experiences are two of the most memorable options within reach of a stay at Pāmu.",
  },
  {
    q: "What makes a PurePod stay different from standard accommodation near these experiences?",
    a: "A PurePod stay is designed to feel quiet, private and deeply connected to the landscape. Instead of staying in a busy town or generic motel, you return from the day's experience to an isolated glass cabin surrounded by nature.",
  },
  {
    q: "Can you combine wildlife experiences with a remote nature stay in New Zealand?",
    a: "Yes, that combination is exactly what makes this style of travel so memorable in New Zealand. Experiences such as whale watching, penguin encounters and scenic flights become even more distinctive when paired with a remote overnight stay in the landscape itself.",
  },
];

/** FAQPage JSON-LD for `/experiences/adventure-wildlife` (GEO FAQ only). */
export function adventureWildlifeFaqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: adventureGeoFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export type AdventureExperienceSlidePod = {
  label: string;
  href: `/location/${string}`;
};

export type AdventureExperienceSlide = {
  image: string;
  alt: string;
  title: string;
  description: string;
  pods: AdventureExperienceSlidePod[];
  distance: string;
  timing: string;
  url: string;
};

export const adventureExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: `${B}kaikoura-whale-watch-sperm-whale-coast-new-zealand.jpg`,
    alt: "Sperm whale surfacing off the Kaikōura coast with mountains behind, South Island, New Zealand",
    title: "Whale Watch Kaikōura",
    description:
      "Drift above deep ocean canyons where sperm whales rise like slow islands, and the Kaikōura coast feels startlingly alive beneath you.",
    pods: [
      { label: "Kahutara", href: "/location/kahutara" },
      { label: "Manakau", href: "/location/manakau" },
    ],
    distance: "~20 min drive",
    timing: "best on calm sea days",
    url: "https://whalewatch.co.nz/kia-ora/",
  },
  {
    image: `${B}kaikoura-scenic-flight-whale-view-air-kaikoura-new-zealand-aerial.jpg`,
    alt: "Aerial view of a whale and the Kaikōura coastline from a scenic flight, New Zealand",
    title: "Wings Over Whales",
    description:
      "Lift off where mountains plunge into the sea, then trace whales from above — a still, widescreen quiet you remember long after landing.",
    pods: [
      { label: "Kahutara", href: "/location/kahutara" },
      { label: "Manakau", href: "/location/manakau" },
    ],
    distance: "~20 min drive",
    timing: "great in calm or overcast days",
    url: "https://www.whales.co.nz/",
  },
  {
    image:
      "/assets/img/pamu/rotorua-volcanic-geothermal-valley-landscape-new-zealand..jpg",
    alt: "Steaming volcanic and geothermal terrain near Rotorua, North Island, New Zealand",
    title: "White Island / Mt Tarawera",
    description:
      "Fly over one of New Zealand’s most dramatic volcanic landscapes, before landing on the remote summit of Mount Tarawera.",
    pods: [{ label: "Pāmu", href: "/location/pamu" }],
    distance: "~10 min drive",
    timing: "best on clear days",
    url: "https://www.volcanicair.co.nz/home/helicopter-tours/white-island-flyover-and-mt-tarawera-landing/",
  },
  {
    image: `${B}kaituna-cascades-rafting-rotorua-new-zealand-waterfall-rafting.jpg`,
    alt: "White-water rafting on the Kaituna River near Rotorua, approaching a forested waterfall drop, New Zealand",
    title: "Kaituna Cascades Rafting",
    description:
      "Hear the gorge before you see it, then hurtle through native forest toward the highest commercially rafted waterfall on Earth.",
    pods: [{ label: "Pāmu", href: "/location/pamu" }],
    distance: "~25 min drive",
    timing: "great in fine or softly rainy days",
    url: "https://kaitunacascades.co.nz/",
  },
  {
    image: `${B}pohatu-penguins-akaroa-wildlife-sanctuary-new-zealand.jpg`,
    alt: "Yellow-eyed penguins in coastal bush habitat at Pōhatu Marine Reserve, Banks Peninsula, New Zealand",
    title: "Pōhatu Penguins",
    description:
      "Let dusk settle over Banks Peninsula as hoiho appear along quiet farmland coast — intimate, led by locals who guard this place fiercely.",
    pods: [{ label: "Pōhue", href: "/location/pohue" }],
    distance: "~60 min drive",
    timing: "best on still, clear evenings",
    url: "http://www.pohatu.co.nz/",
  },
  {
    image: "/assets/img/matu/waitomo-glowworm-cave-boat-ride.jpg",
    alt: "Glowworm-lit limestone cave river inside the Waitomo cave system, Waikato, New Zealand",
    title: "Waitomo Black Water Rafting",
    description:
      "Lie back in cool river darkness until pinpricks of blue light bloom overhead — glowworms turning the cave into a drifting night sky.",
    pods: [{ label: "Matū", href: "/location/matu" }],
    distance: "~40–60 min drive",
    timing: "best on dry, mild days",
    url: "https://www.blackwaterrafting.co.nz/",
  },
  {
    image:
      "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg",
    alt: "Aerial coastal view toward Stewart Island / Rakiura with bush, bays and open sea, southern New Zealand",
    title: "Stewart Island Flights / Ulva Island",
    description:
      "Cross open swells toward Rakiura’s fringe of forest, then walk shorelines where kiwi call after dark and the mainland feels far away.",
    pods: [
      { label: "Tokoeka", href: "/location/tokoeka" },
      { label: "Hananui", href: "/location/hananui" },
    ],
    distance: "~10 min drive",
    timing: "best on clear days",
    url: "http://www.stewartislandflights.com/",
  },
];

/** Closing “rest after adventure” carousel — PurePods stay imagery only */
export type AdventureRestClosingSlide = {
  src: string;
  alt: string;
  label: string;
  subline: string;
};

export const adventureRestClosingSlides: AdventureRestClosingSlide[] = [
  {
    src: "/assets/img/rest-stay-carousel/hananui-purepod-deckchairs-coastal-view-northland-new-zealand.jpg",
    alt: "Deckchairs on a Hananui PurePod deck overlooking the Northland coast, sea and distant headlands in soft daylight",
    label: "Coast at your feet",
    subline: "Sit with the breeze; nothing on the schedule but the tide and the light.",
  },
  {
    src: "/assets/img/rest-stay-carousel/kokomea-purepod-glass-cabin-interior-sunset-new-zealand.jpg",
    alt: "Golden-hour sunset light inside a Kokomea PurePod glass cabin, warm tones across the living space and windows",
    label: "Day softens",
    subline: "The landscape turns amber; the pod holds the glow long after the sun has gone.",
  },
  {
    src: "/assets/img/rest-stay-carousel/greystone-purepod-glass-doors-open-hills-view-north-canterbury-new-zealand.jpg",
    alt: "Greystone PurePod with full-height glass doors folded open to rolling hills and farmland in North Canterbury",
    label: "Room to breathe",
    subline: "Cool evening air drifts in; the hills sit quiet beyond the frame.",
  },
  {
    src: "/assets/img/rest-stay-carousel/kahutara-purepod-kitchen-mountain-views-canterbury-new-zealand.jpg",
    alt: "Kahutara PurePod kitchen bench facing layered mountains through floor-to-ceiling glass in Canterbury",
    label: "Simple and slow",
    subline: "Tea, a view, no rush — the kind of evening that follows a big day outside.",
  },
  {
    src: "/assets/img/rest-stay-carousel/haurapa-purepod-food-hamper-outdoor-dining-new-zealand.jpg",
    alt: "Local produce and a hamper laid out for outdoor dining on a Haurapa PurePod deck in New Zealand",
    label: "Table outside",
    subline: "Flavours from the region, eaten slowly as the light finally gives way.",
  },
  {
    src: "/assets/img/rest-stay-carousel/hananui-purepod-outdoor-shower-ocean-view-northland-new-zealand.jpg",
    alt: "Outdoor shower at a Hananui PurePod with open views to the ocean and sky along the Northland coastline",
    label: "Rinse the day away",
    subline: "Salt, dust and trail miles — gone under sky before you turn in for the night.",
  },
];

export const adventureFaq: { q: string; a: string }[] = [
  {
    q: "What does this Adventure & Wildlife page include?",
    a: "It brings together a single curated carousel of iconic wildlife and adventure operators across New Zealand. Each slide links to the official experience, suggests nearby PurePod stays in the region, and notes typical drive time and seasonality as a planning hint only.",
  },
  {
    q: "Should I confirm details with each operator before I travel?",
    a: "Yes. Timetables, seasons, weather and access can change. Use the “View experience” link on each slide to check the latest information, bookings and requirements directly with the operator.",
  },
  {
    q: "How do I continue to booking from this page?",
    a: "Use “Stay nearby” pod names to open that PurePod’s page on this site, then continue to booking when you are ready. The Book control in the navigation and the closing call to action also link to PurePods booking to check live availability.",
  },
];
