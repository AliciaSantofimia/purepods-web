const B = "/assets/img/experiences/adventure-wildlife/";

export const adventureHero = {
  src: `${B}kaikoura-whale-tail-sunset-new-zealand-wildlife-experience.jpg`,
  alt: "Whale tail at sunset off the Kaikōura coast, New Zealand, a dramatic wildlife experience in the open ocean",
};

/** Editorial context above the experiences carousel (SEO / intent bridge). */
export const adventureContextHeading = "Where to stay for these experiences";

export const adventureContextBody =
  "Stay close to the experiences that matter most — each PurePod is placed in a quiet natural setting, within reach of New Zealand’s most memorable wildlife and adventure locations.";

export type AdventureExperienceSlidePod = {
  label: string;
  href: string;
};

export type AdventureExperienceSlide = {
  image: string;
  alt: string;
  imagePosition?: string;
  title: string;
  description: string;
  pods: AdventureExperienceSlidePod[];
  /** First line in meta row (shown before middle dot). */
  distance: string;
  /** Second line in meta row (shown after middle dot). */
  timing: string;
  url: string;
  /** Plain text after pod links: " — Region, Island" (Adventure carousel only). */
  nearbyRegion?: string;
};

export const adventureExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: `${B}whale-watch-kaikoura-boat-whale-tail-experience-new-zealand.jpg`,
    alt: "Whale Watch Kaikōura boat with sperm whale tail off the Kaikōura coast, New Zealand",
    title: "Whale watching in Kaikōura",
    description:
      "Out on the open ocean, sperm whales surface and dive against a backdrop of mountains. A rare chance to witness marine life at close range.",
    pods: [
      { label: "Kahutara PurePod", href: "/location/kahutara/?from=adventure-wildlife" },
      { label: "Manakau PurePod", href: "/location/manakau/?from=adventure-wildlife" },
    ],
    distance: "~60 min drive",
    timing: "year-round sightings",
    nearbyRegion: " — Kaikōura region, South Island",
    url: "https://whalewatch.co.nz/kia-ora/",
  },
  {
    image: `${B}whale-watch-kaikoura-scenic-flight-whales-aerial-new-zealand.jpg`,
    alt: "Aerial whale watching flight over whales in the ocean near Kaikōura, New Zealand",
    title: "Aerial whale watching",
    description:
      "From above, the scale of the ocean becomes clear — whales, dolphins and shifting blues seen in complete silence.",
    pods: [
      { label: "Kahutara PurePod", href: "/location/kahutara/?from=adventure-wildlife" },
      { label: "Manakau PurePod", href: "/location/manakau/?from=adventure-wildlife" },
    ],
    distance: "~60 min drive",
    timing: "best in clear weather",
    nearbyRegion: " — Kaikōura region, South Island",
    url: "https://www.whales.co.nz/",
  },
  {
    image:
      "/assets/img/pamu/rotorua-volcanic-geothermal-valley-landscape-new-zealand.jpg",
    alt: "Volcanic landscape flyover with geothermal steam near Rotorua, New Zealand",
    title: "Volcanic landscapes by air",
    description:
      "Fly over crater lakes and geothermal terrain shaped by eruption and time. Remote, dramatic and unlike anywhere else.",
    pods: [{ label: "Pāmu PurePod", href: "/location/pamu/?from=adventure-wildlife" }],
    distance: "~20–30 min drive",
    timing: "weather dependent",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.volcanicair.co.nz/home/helicopter-tours/white-island-flyover-and-mt-tarawera-landing/",
  },
  {
    image: `${B}stewart-island-scenic-flight-aerial-view-new-zealand.jpg`,
    alt: "Stewart Island scenic flight over coastline and blue bays in Rakiura, New Zealand",
    title: "Stewart Island scenic flight",
    description:
      "Fly across remote coastline and open ocean to reach one of New Zealand’s most isolated landscapes. A quiet, expansive journey at the edge of the country.",
    pods: [
      { label: "Tokoeka PurePod", href: "/location/tokoeka/?from=adventure-wildlife" },
      { label: "Hananui PurePod", href: "/location/hananui/?from=adventure-wildlife" },
    ],
    distance: "Weather dependent",
    timing: "best in calm conditions",
    nearbyRegion: " — Stewart Island / Rakiura",
    url: "http://www.stewartislandflights.com/",
  },
  {
    image: `${B}little-blue-penguin-korora-pohatu-akaroa-new-zealand.jpg`,
    alt: "Little blue penguin kororā among rocks at Pōhatu, Banks Peninsula, New Zealand",
    title: "Little blue penguins at Pōhatu",
    description:
      "At dusk, kororā return quietly from the sea. Small groups, guided access and a strong focus on conservation make this deeply personal.",
    pods: [{ label: "Pōhue PurePod", href: "/location/pohue/?from=adventure-wildlife" }],
    distance: "~20 min drive",
    timing: "best at dusk",
    nearbyRegion: " — Banks Peninsula, South Island",
    url: "https://www.pohatu.co.nz/",
  },
  {
    image: `${B}kaituna-cascades-rafting-rotorua-new-zealand-waterfall-rafting.jpg`,
    alt: "Kaituna River rafting through native forest and waterfalls near Rotorua, New Zealand",
    title: "Kaituna River rafting",
    description:
      "A short, intense run through native forest and waterfalls, including one of the highest commercially rafted drops in the world.",
    pods: [{ label: "Pāmu PurePod", href: "/location/pamu/?from=adventure-wildlife" }],
    distance: "~15–20 min drive",
    timing: "half-day experience",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://kaitunacascades.co.nz/",
  },
  {
    image: "/assets/img/matu/waitomo-glowworm-cave-boat-ride.jpg",
    alt: "Boat tour under glowworms inside Waitomo Glowworm Caves, New Zealand",
    title: "Waitomo Glowworm Caves",
    description:
      "Drift through a dark cavern as thousands of glowworms light the ceiling above — a still, almost weightless experience.",
    pods: [{ label: "Matū PurePod", href: "/location/matu/?from=adventure-wildlife" }],
    distance: "~15 min drive",
    timing: "guided boat experience",
    nearbyRegion: " — Waitomo region, North Island",
    url: "https://www.waitomo.com/glowworms-and-caves/waitomo-glowworm-caves?utm_source=google&utm_medium=GMB&utm_term=waitomoglowormcaves",
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
    src: "/assets/img/rest-stay-carousel/hananui-purepod-deckchairs-coastal-view-rakiura-stewart-island-new-zealand.jpg",
    alt: "Deckchairs on a Hananui PurePod deck overlooking the Rakiura Stewart Island coast, sea and native bush in soft daylight",
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
    src: "/assets/img/rest-stay-carousel/hananui-purepod-outdoor-shower-ocean-view-rakiura-stewart-island-new-zealand.jpg",
    alt: "Outdoor shower at a Hananui PurePod with ocean and native bush views on Rakiura Stewart Island, New Zealand",
    label: "Rinse the day away",
    subline: "Salt, dust and trail miles — gone under sky before you turn in for the night.",
  },
];

export const adventureFaq: { q: string; a: string }[] = [
  {
    q: "What wildlife and adventure experiences can you do in New Zealand?",
    a: "New Zealand spans ocean canyons, volcanic plateaux, glowworm caves and remote coastlines — so you can whale watch off Kaikōura, raft the Kaituna near Rotorua, walk penguin habitat on Banks Peninsula, fly volcanic country by helicopter or plane, and explore southern wildlife gateways toward Stewart Island. Each region has specialist operators; use the carousel above to open official sites and check what suits your dates.",
  },
  {
    q: "Where should I stay for whale watching in Kaikōura?",
    a: "Kahutara and Manakau are two strong PurePods options for travellers planning whale watching in Kaikōura. Both offer a quieter overnight base within reach of the coast, making it easier to pair a marine wildlife day with a more private night in nature.",
  },
  {
    q: "What is the best time of year for wildlife experiences in New Zealand?",
    a: "Sperm whales off Kaikōura are commonly seen year-round, while sea conditions and daylight hours still vary by season. Penguin and small-boat trips favour calmer weather, and some aerial routes need clearer skies — always confirm timing with the operator rather than assuming a single “best month” nationwide.",
  },
  {
    q: "Are there good adventure experiences near Rotorua?",
    a: "Yes — Rotorua is one of the North Island’s strongest hubs for adventure, especially white-water rafting and volcanic scenic flights. Kaituna rafting and Mount Tarawera flights or landings are among the most memorable options within easy reach of a stay at Pāmu.",
  },
  {
    q: "What makes a PurePod stay different from other accommodation?",
    a: "A PurePod is a small, isolated glass eco-cabin set in private natural land rather than on a busy strip or in a generic motel block. You keep the same regions as the experiences above, but you return to stillness, wide views and a slower overnight rhythm after the day’s activity.",
  },
  {
    q: "Can you combine wildlife experiences with a remote nature stay?",
    a: "Yes — pairing a guided wildlife or adventure day with a remote overnight stay is one of the most distinctive ways to travel here. Operators handle the activity; your PurePod handles the quiet reset, so the trip reads as both outward exploration and inward calm.",
  },
];

/** FAQPage JSON-LD for `/experiences/adventure-wildlife` (matches `adventureFaq` only). */
export function adventureWildlifeFaqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: adventureFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Guest experiences — editorial reviews (Adventure & Wildlife page only). */
export const adventureGuestExperiencesIntro =
  "Travellers often describe PurePods as more than just a place to stay — a way to slow down, reconnect with nature, and experience New Zealand differently.";

export type AdventureGuestExperienceReview = {
  quote: string;
  body: string;
  guestName: string;
  podName: string;
};

export const adventureGuestExperienceReviews: AdventureGuestExperienceReview[] = [
  {
    quote: "“This property is a surprise — worth every penny.”",
    body: "Guests describe a rare sense of total serenity, with no roads, buildings or noise in sight — just open views, stillness and a beautifully considered cabin experience.",
    guestName: "Maria Schmidt",
    podName: "Pāmu PurePod",
  },
  {
    quote: "“A truly incredible experience in a secluded setting.”",
    body: "Thoughtful design, quiet surroundings and details like dinner, breakfast and wide pastoral views made this stay feel both remote and deeply comfortable.",
    guestName: "Thomas Michael",
    podName: "Pāmu PurePod",
  },
  {
    quote: "“Perfect for those who want to disconnect and reconnect with nature.”",
    body: "Guests highlight the privacy, outdoor shower, roof grill and uninterrupted landscape as part of a stay that feels luxurious without losing its connection to the wild.",
    guestName: "Joben Grimnius",
    podName: "Kahutara PurePod",
  },
];

export const adventureGuestExperiencesClosing =
  "Across New Zealand, guests return to the same feeling — a rare balance of wild nature, thoughtful design and complete stillness.";

/** Internal destination for the editorial “explore more” link. */
export const adventureGuestExperiencesExploreHref = "/pods" as const;
