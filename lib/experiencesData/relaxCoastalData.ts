import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const RC = "/assets/img/experiences/relax-coastal/";

export const relaxHero = {
  src: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  image: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  alt: "Cathedral Cove beach framed by a natural rock arch and sea stack, Coromandel Peninsula, New Zealand",
};

export const relaxContextHeading = "Where to stay for these experiences";

export const relaxContextBody =
  "Stay close to geothermal waters, forest springs and open coastlines — each PurePod gives you a quiet natural base for slowing down before and after the day.";

export const relaxExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: `${RC}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.jpg`,
    alt: "Geothermal pool at Polynesian Spa, Rotorua, beside Lake Rotorua with native greenery, New Zealand",
    title: "Polynesian Spa",
    description:
      "Lakeside mineral pools fed by natural springs, designed for an unhurried soak on the edge of Lake Rotorua.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua geothermal and wellness experiences",
        href: "/location/pamu/?from=relax-coastal",
      },
    ],
    distance: "Rotorua lakeside spa",
    timing: "book ahead",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.polynesianspa.co.nz/",
  },
  {
    image: `${RC}wai-ariki-hot-springs-spa-rotorua-thermal-pools.jpg`,
    alt: "Luxury thermal pool experience at Wai Ariki Hot Springs and Spa in Rotorua, New Zealand",
    title: "Wai Ariki Hot Springs & Spa",
    description:
      "A restorative Rotorua wellness experience shaped by geothermal waters, architecture and Māori cultural inspiration.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua geothermal and wellness experiences",
        href: "/location/pamu/?from=relax-coastal",
      },
    ],
    distance: "Rotorua geothermal spa",
    timing: "wellness experience",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.wai-ariki.co.nz/",
  },
  {
    image: `${RC}secret-spot-hot-tubs-rotorua-forest-spa.jpg`,
    alt: "Private cedar hot tub surrounded by native forest at Secret Spot Hot Tubs Rotorua",
    title: "Secret Spot Hot Tubs Rotorua",
    description:
      "Private cedar hot tubs tucked into forest, with ferns close by and a pace that naturally slows everything down.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
        href: "/location/pamu/?from=relax-coastal",
      },
    ],
    distance: "Rotorua forest hot tubs",
    timing: "private soaking",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://secretspot.co.nz/",
  },
  {
    image: `${RC}hells-gate-geothermal-reserve-mud-spa-rotorua.jpg`,
    alt: "Couple enjoying a geothermal mud spa at Hells Gate Rotorua during sunset",
    title: "Hell's Gate Geothermal Reserve & Mud Spa",
    description:
      "Mineral mud, sulphur waters and an active geothermal landscape make this one of Rotorua’s most elemental spa experiences.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua geothermal and wellness experiences",
        href: "/location/pamu/?from=relax-coastal",
      },
    ],
    distance: "Tikitere geothermal reserve",
    timing: "mud spa and walk",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.hellsgate.co.nz/",
  },
  {
    image: `${RC}hamurana-springs-purepods-redwood-forest-crystal-water-rotorua-new-zealand.jpg`,
    alt: "Crystal-clear spring water surrounded by redwood forest and wooden walkway at Hamurana Springs, Rotorua, New Zealand",
    title: "Hamurana Springs Nature Reserve",
    description:
      "Clear spring water, shaded paths and redwood forest combine into a gentle nature walk with a restorative feel.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
        href: "/location/pamu/?from=relax-coastal",
      },
    ],
    distance: "Rotorua spring walk",
    timing: "slow nature walk",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.hamurana.co.nz/",
  },
  {
    image: `${RC}waihi-beach-new-zealand-aerial-coastline.jpg`,
    alt: "Aerial view of Waihi Beach in New Zealand with golden sand, turquoise ocean and coastal town",
    title: "Waihi Beach",
    description:
      "A relaxed beach stop with long sand, open water and a classic coastal rhythm close to the Coromandel and Bay of Plenty.",
    pods: [
      {
        label: "Ruru PurePod near Mount Karangahake and Waihi",
        href: "/location/ruru/?from=relax-coastal",
      },
    ],
    distance: "Bay of Plenty coastline",
    timing: "best in settled weather",
    nearbyRegion: " — Waihi Beach, North Island",
    url: "https://www.waihibeachinfo.co.nz/",
  },
  {
    image: `${RC}purau-bay-beach-near-pohue-purepod-banks-peninsula-new-zealand.jpg`,
    alt: "Purau Bay Beach on Banks Peninsula near Pōhue PurePod, New Zealand",
    title: "Purau Bay Beach",
    description:
      "A sheltered Banks Peninsula beach with harbour views and a quieter coastal pace before returning to Pōhue.",
    pods: [{ label: "Pōhue PurePod", href: "/location/pohue/?from=relax-coastal" }],
    distance: "Banks Peninsula beach",
    timing: "coastal day trip",
    nearbyRegion: " — Banks Peninsula, South Island",
    url: "https://maps.app.goo.gl/",
  },
];

/** Deck copy — curated thermal and coastal calm, aligned with serenity & wellness. */
export const relaxAboutParagraphs: readonly [string, string] = [
  "Relax & Coastal is a small, intentional edit — geothermal waters in Rotorua, followed by open coastlines and quiet inland places across Aotearoa. Chosen for atmosphere, not volume.",
  "Follow what feels right on the day — each place is a suggestion, not a checklist. Pair it with a nearby PurePod stay, and let the pace unfold naturally.",
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
      "Mineral water, lake air, and forest edges — Rotorua is one of the clearest expressions of slow wellness in Aotearoa.",
      "These stops focus on soaking, steam, and quiet presence.",
    ],
    places: [
      {
        id: "polynesian-spa",
        name: "Polynesian Spa",
        eyebrow: "Lakeside mineral pools · Rotorua",
        paragraphs: [
          "Set on the edge of Lake Rotorua, this long-established spa draws on natural mineral springs for a slow, lakeside soak.",
          "Time stretches easily here — the water does most of the work.",
        ],
        officialHref: "https://www.polynesianspa.co.nz/",
        figure: {
          src: `${RC}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.jpg`,
          alt: "Geothermal pool at Polynesian Spa, Rotorua, beside Lake Rotorua with native greenery, New Zealand",
        },
        layout: "image-left",
        ctas: [
          {
            label: "Pāmu PurePod near Rotorua geothermal and wellness experiences",
            href: "/location/pamu/?from=relax-coastal",
          },
        ],
      },
      {
        id: "secret-spot-hot-tubs",
        name: "Secret Spot Hot Tubs",
        eyebrow: "Private cedar tubs · Waipa forest",
        paragraphs: [
          "Private cedar tubs set in native forest — ferns close, water nearby, and little else competing for attention.",
          "Designed for quiet, unhurried time.",
        ],
        officialHref: "https://secretspot.co.nz/",
        figure: {
          src: `${RC}secret-spot-purepods-forest-hot-tub-ferns-rotorua.jpg`,
          alt: "Private cedar hot tub surrounded by native ferns in a tranquil forest setting in Rotorua, New Zealand",
        },
        layout: "image-right",
        ctas: [
          {
            label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
            href: "/location/pamu/?from=relax-coastal",
          },
        ],
      },
      {
        id: "hells-gate-mud-spa",
        name: "Hell's Gate Mud Spa",
        eyebrow: "Volcanic mud & sulphur waters · Tikitere",
        paragraphs: [
          "A more elemental experience — mineral mud and sulphur waters in one of New Zealand’s most active geothermal areas.",
          "Come for the landscape, then settle into the ritual.",
        ],
        officialHref: "https://www.hellsgate.co.nz/",
        figure: {
          src: `${RC}rotorua-geothermal-mud-bath-couple-hells-gate-new-zealand.jpg`,
          alt: "Outdoor geothermal mud bath at Hell's Gate, Rotorua, New Zealand, with steam and native planting",
        },
        layout: "full-bleed",
        ctas: [
          {
            label: "Pāmu PurePod near Rotorua geothermal and wellness experiences",
            href: "/location/pamu/?from=relax-coastal",
          },
        ],
      },
    ],
  },
  {
    id: "relax-rc-coastal",
    eyebrow: "Northland · Stewart Island · Hurunui",
    title: "Coastal calm & hidden landscapes",
    intro: [
      "Open coastlines, clear water, and long horizons — places where the pace softens naturally.",
      "Light, tide, and distance shape the experience.",
    ],
    places: [
      {
        id: "matauri-bay",
        name: "Matauri Bay",
        eyebrow: "Northland coast · Cavalli Islands",
        paragraphs: [
          "A wide Northland bay with clear water and soft sand — made for slowing down and watching the day shift.",
          "Bring time, not plans.",
        ],
        officialHref: "https://maps.app.goo.gl/2xbeZSdrHHRXeMS98",
        figure: {
          src: `${RC}matauri-bay-purepods-northland-coastal-beach-new-zealand.jpg`,
          alt: "Wide sandy beach and turquoise water at Matauri Bay, Northland coastline, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Mākoha →", href: "/location/makoha" }],
      },
      {
        id: "observation-rock-viewpoint",
        name: "Observation Rock Viewpoint",
        eyebrow: "Rakiura / Stewart Island · above Paterson Inlet",
        paragraphs: [
          "A high vantage point over Paterson Inlet — known for sunset — and on clear nights, the southern lights.",
          "Wide sky, minimal distraction.",
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
          "A long, open stretch of coastline framed by striking cliffs — raw, spacious, and quietly dramatic.",
          "Walk slowly; the place sets the pace.",
        ],
        officialHref: "https://maps.app.goo.gl/XvgcdWQdC2VJ5PYZ8",
        figure: {
          src: `${RC}gore-bay-purepods-coastal-beach-cliffs-new-zealand.jpg`,
          alt: "Calm sandy beach with gentle waves and white cliffs at Gore Bay, New Zealand coastline",
        },
        layout: "image-left",
        ctas: [
          { label: "Stay at Atatū, Hurunui →", href: "/location/atatu/?from=relax-coastal" },
          { label: "Stay at Korimako, Hurunui →", href: "/location/korimako/?from=relax-coastal" },
        ],
      },
      {
        id: "hamurana-springs",
        name: "Hamurana Springs",
        eyebrow: "Spring walk · Hamurana",
        paragraphs: [
          "Crystal-clear water flowing through native forest — a calm, shaded walk shaped by stillness.",
          "Simple, restorative, and quietly immersive.",
        ],
        officialHref: "https://www.hamurana.co.nz/",
        figure: {
          src: `${RC}hamurana-springs-purepods-redwood-forest-crystal-water-rotorua-new-zealand.jpg`,
          alt: "Crystal-clear spring water surrounded by redwood forest and wooden walkway at Hamurana Springs, Rotorua, New Zealand",
        },
        layout: "image-right",
        ctas: [
          {
            label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
            href: "/location/pamu/?from=relax-coastal",
          },
        ],
      },
    ],
  },
];

export const relaxFaq: { q: string; a: string }[] = [
  {
    q: "What does Relax & Coastal cover now?",
    a: "A small, intentional edit — geothermal waters first, followed by a handful of quiet coastal and inland places.",
  },
  {
    q: "Is this a complete regional guide?",
    a: "No. It is a curated shortlist for calm pacing — not a checklist of every place.",
  },
];
