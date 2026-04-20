const RC = "/assets/img/experiences/relax-coastal/";

export const relaxHero = {
  image: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  alt: "Cathedral Cove beach framed by a natural rock arch and sea stack, Coromandel Peninsula, New Zealand",
};

/** Deck copy — curated thermal and coastal calm, aligned with serenity & wellness. */
export const relaxAboutParagraphs: readonly [string, string] = [
  "Relax & Coastal is an intentionally small edit: geothermal stillness in Rotorua, then coast and quiet viewpoints from Northland to Hurunui and Rakiura — chosen for atmosphere, not volume.",
  "Official visitor pages open in a new tab so you can confirm access and hours. When the day feels right, match the mood to a nearby PurePod.",
];

export type RelaxRcCta = { href: string; label: string };

export type RelaxRcPlaceLayout = "image-left" | "image-right" | "full-bleed";

export type RelaxRcPlace = {
  id: string;
  name: string;
  eyebrow: string;
  /** Editorial lines — one or more short paragraphs (same meaning, paced for reading). */
  paragraphs: readonly string[];
  /** Official or authoritative visitor URL (replace in this file when you have the final link). */
  officialHref: string;
  ctas: RelaxRcCta[];
  /** Only set when `src` is a real file and `alt` describes it honestly. */
  figure?: { src: string; alt: string };
  layout?: RelaxRcPlaceLayout;
};

export type RelaxRcChapter = {
  id: string;
  eyebrow: string;
  title: string;
  intro: readonly string[];
  moodFigure?: { src: string; alt: string; caption?: string };
  places: RelaxRcPlace[];
};

/**
 * Two movements — seven stops. Replace `officialHref` values as final URLs are confirmed.
 */
export const relaxRcChapters: RelaxRcChapter[] = [
  {
    id: "relax-rc-thermal",
    eyebrow: "Rotorua · Bay of Plenty",
    title: "Thermal waters & geothermal relaxation",
    intro: [
      "Lake air, mineral heat and forest margin — Rotorua remains one of the clearest expressions of slow wellness in Aotearoa New Zealand.",
      "These three stops keep the focus on water, steam and quiet presence rather than spectacle.",
    ],
    places: [
      {
        id: "polynesian-spa",
        name: "Polynesian Spa",
        eyebrow: "Lakeside mineral pools · Rotorua",
        paragraphs: [
          "Set on the shores of Lake Rotorua, this world-renowned spa draws on natural springs to fill mineral-rich hot pools — a premium lakeside rhythm of soak, steam and horizon.",
          "Evenings here tend to lengthen on their own; the water does most of the persuading.",
        ],
        officialHref: "https://www.polynesianspa.co.nz/",
        figure: {
          src: `${RC}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.jpg`,
          alt: "Geothermal pool at Polynesian Spa, Rotorua, beside Lake Rotorua with native greenery, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
      },
      {
        id: "secret-spot-hot-tubs",
        name: "Secret Spot Hot Tubs",
        eyebrow: "Private cedar tubs · Waipa forest",
        paragraphs: [
          "Indulge in a forest-bathing cadence from your own private cedar hot tub — native ferns at arm’s length, a stream’s low note beneath the canopy, and little else on the agenda.",
          "Bookings stay intimate by design; the setting reads as restorative first, social second.",
        ],
        officialHref: "https://secretspot.co.nz/",
        figure: {
          src: `${RC}secret-spot-purepods-forest-hot-tub-ferns-rotorua.jpg`,
          alt: "Private cedar hot tub surrounded by native ferns in a tranquil forest setting in Rotorua, New Zealand",
        },
        layout: "image-right",
        ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
      },
      {
        id: "hells-gate-mud-spa",
        name: "Hell's Gate Mud Spa",
        eyebrow: "Volcanic mud & sulphur waters · Tikitere",
        paragraphs: [
          "A distinctive volcanic chapter: nutrient-rich mud and sulphur waters within New Zealand’s most active geothermal park — geology in the lead, spa rituals as a quiet follow-through.",
          "Allow time to walk the reserve first; the baths land with more meaning when you have felt the ground breathing beneath you.",
        ],
        officialHref: "https://www.hellsgate.co.nz/",
        figure: {
          src: `${RC}rotorua-geothermal-mud-bath-couple-hells-gate-new-zealand.jpg`,
          alt: "Outdoor geothermal mud bath at Hell's Gate, Rotorua, New Zealand, with steam and native planting",
        },
        layout: "full-bleed",
        ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
      },
    ],
  },
  {
    id: "relax-rc-coastal",
    eyebrow: "Northland · Stewart Island · Hurunui",
    title: "Coastal calm & hidden landscapes",
    intro: [
      "Open coast, spring-fed forest and a Rakiura viewpoint above Paterson Inlet — this chapter favours horizon, clarity of water and the kind of silence you notice only after a few minutes.",
      "Nothing here is rushed; light and tide set the pacing.",
    ],
    places: [
      {
        id: "matauri-bay",
        name: "Matauri Bay",
        eyebrow: "Northland coast · Cavalli Islands",
        paragraphs: [
          "A wide, open sweep of Northland coast known for clear water and soft sand — a place to slow down and watch the light change across the bay.",
          "Bring little more than time; the shore rewards an unhurried lens.",
        ],
        officialHref: "https://maps.app.goo.gl/2xbeZSdrHHRXeMS98",
        figure: {
          src: `${RC}matauri-bay-purepods-northland-coastal-beach-new-zealand.jpg`,
          alt: "Wide sandy beach and turquoise water at Matauri Bay, Northland coastline, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Mākōha →", href: "/location/makoha" }],
      },
      {
        id: "observation-rock-viewpoint",
        name: "Observation Rock Viewpoint",
        eyebrow: "Rakiura / Stewart Island · above Paterson Inlet",
        paragraphs: [
          "The most iconic perch on Stewart Island for sunset — and, on the right nights, the Aurora Australis — over the still geometry of Paterson Inlet.",
          "Dress for wind off the water; the reward is a wide, uncluttered sky.",
        ],
        officialHref:
          "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/oban-area/things-to-do/oban-day-walks/",
        figure: {
          src: `${RC}observation-rock-viewpoint-purepods-paterson-inlet-stewart-island-new-zealand.jpg`,
          alt: "Elevated coastal view over Paterson Inlet from Observation Rock Viewpoint, Stewart Island, New Zealand",
        },
        layout: "image-right",
        ctas: [
          { label: "Stay at Tokoeka, Stewart Island →", href: "/location/tokoeka" },
          { label: "Stay at Hananui, Stewart Island →", href: "/location/hananui" },
        ],
      },
      {
        id: "gore-bay-beach",
        name: "Gore Bay Beach",
        eyebrow: "North Canterbury · open coast",
        paragraphs: [
          "Set along a dramatic stretch of Hurunui coast with striking cliff formations — an expansive, elemental stop where the horizon carries most of the conversation.",
          "Wind and tide write the script; you walk it at an easy pace.",
        ],
        officialHref: "https://maps.app.goo.gl/XvgcdWQdC2VJ5PYZ8",
        figure: {
          src: `${RC}gore-bay-purepods-coastal-beach-cliffs-new-zealand.jpg`,
          alt: "Calm sandy beach with gentle waves and white cliffs at Gore Bay, New Zealand coastline",
        },
        layout: "image-left",
        ctas: [
          { label: "Stay at Atatū, Hurunui →", href: "/location/atatu" },
          { label: "Stay at Korimako, Hurunui →", href: "/location/korimako" },
        ],
      },
      {
        id: "hamurana-springs",
        name: "Hamurana Springs",
        eyebrow: "Spring walk · Hamurana",
        paragraphs: [
          "Crystal-clear spring water moving through forest — including towering redwoods — for a restorative, mindful walk in a tranquil reserve.",
          "Boardwalks and interpretation keep the focus soft; this is landscape as wellness, without the spa reception desk.",
        ],
        officialHref: "https://www.hamurana.co.nz/",
        figure: {
          src: `${RC}hamurana-springs-purepods-redwood-forest-crystal-water-rotorua-new-zealand.jpg`,
          alt: "Crystal-clear spring water surrounded by redwood forest and wooden walkway at Hamurana Springs, Rotorua, New Zealand",
        },
        layout: "image-right",
        ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
      },
    ],
  },
];

export const relaxFaq: { q: string; a: string }[] = [
  {
    q: "What does Relax & Coastal cover now?",
    a: "A compact pairing: Rotorua thermal waters, then a small coastal and landscape set spanning Northland, Stewart Island and North Canterbury — each with an official or visitor link and a suggested PurePod.",
  },
  {
    q: "Can I swap the official links?",
    a: "Yes. Each place’s URL lives in `lib/experiencesData/relaxCoastalData.ts` as `officialHref` — update there when you have the final destination pages.",
  },
  {
    q: "Are PurePods always beside each place?",
    a: "Each stop suggests a nearby pod when geography allows. Confirm driving times, ferry bookings and seasonal access on the official sites before you travel.",
  },
  {
    q: "Is this a complete regional guide?",
    a: "No. It is a curated shortlist for calm pacing — serenity and wellness first, not a checklist of every attraction.",
  },
];
