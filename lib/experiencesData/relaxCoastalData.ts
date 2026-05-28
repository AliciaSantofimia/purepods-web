import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const RC = "/assets/img/experiences/relax-coastal/";

export const relaxHero = {
  src: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  image: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  alt: "Cathedral Cove beach framed by a natural rock arch and sea stack, Coromandel Peninsula, New Zealand",
};

export const relaxContextHeading = "Where to stay for these experiences";

export const relaxContextBody =
  "Shape a relaxing getaway around geothermal waters, beaches, coastal views and slow time outdoors — then return to a private glass cabin for quiet evenings and a softer pace.";

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
          {
            label: "Stay at Tokoeka PurePod on Stewart Island",
            href: "/location/tokoeka/?from=relax-coastal",
          },
          {
            label: "Stay at Hananui PurePod on Stewart Island",
            href: "/location/hananui/?from=relax-coastal",
          },
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
    q: "What is Relax & Coastal by PurePods?",
    a: "Relax & Coastal is the PurePods experience for travellers who want restorative time in nature, combining geothermal waters, coastal landscapes, forest springs, beaches and private glass cabin stays across New Zealand.",
  },
  {
    q: "Is Relax & Coastal a good choice for a relaxing getaway?",
    a: "Yes. Relax & Coastal is designed for guests looking for a slower, quieter kind of New Zealand escape. It brings together peaceful landscapes, water-based experiences, coastal air and private PurePods stays where you can disconnect and reset.",
  },
  {
    q: "Does Relax & Coastal include coastal escapes?",
    a: "Yes. Some Relax & Coastal experiences are shaped by beaches, coastal viewpoints, bays, sea air and open coastal landscapes. The page connects these places with nearby PurePods so guests can enjoy the coast during the day and return to a private glass cabin afterwards.",
  },
  {
    q: "Does Relax & Coastal include hot pools, spas or thermal experiences?",
    a: "Some Relax & Coastal experiences include geothermal pools, hot springs, forest hot tubs or spa-style settings where they are already part of the page. Availability, booking requirements and opening times depend on the individual operator, so guests should check details before visiting.",
  },
  {
    q: "Can I see sunrise or sunset during a Relax & Coastal stay?",
    a: "Sunrise and sunset can be part of the experience, depending on the pod, landscape, weather and time of year. Relax & Coastal is not a dedicated sunrise-and-sunset itinerary, but slow mornings, evening light and open views are a natural part of many PurePods stays.",
  },
  {
    q: "Are the PurePods directly on the beach or beside the hot pools?",
    a: "Not always. PurePods are chosen as nearby private stays that pair well with coastal, geothermal or restorative experiences, but guests may still need to drive, walk or arrange transport between the pod and the activity.",
  },
  {
    q: "Is Relax & Coastal suitable for couples?",
    a: "Yes. Each PurePod is designed for a maximum of two guests, making Relax & Coastal well suited to couples or two adults looking for privacy, nature and a slower pace. The focus is calm, rest and time together in a private setting.",
  },
  {
    q: "What should I bring for a Relax & Coastal stay?",
    a: "Bring comfortable clothing, layers for changing New Zealand weather, swimwear or spa-friendly clothing if your plans include pools or hot tubs, suitable footwear for short walks and your favourite drinks if ordering food for your PurePod stay.",
  },
  {
    q: "What happens if the weather changes?",
    a: "Weather is part of any New Zealand nature escape. Coastal views, beaches and outdoor experiences can change with wind, rain or cloud, while geothermal pools, forest settings and private cabin time can still feel restorative in less-than-perfect weather. Always check local conditions before heading out.",
  },
  {
    q: "How do I choose the right PurePod for a Relax & Coastal experience?",
    a: "Start with the kind of experience you want — geothermal waters, forest springs, coastal views, beaches or quiet time in nature — then follow the nearby PurePod links on the page. Each pod landing gives more detail about the setting, arrival walk and booking flow.",
  },
  {
    q: "What makes Relax & Coastal different from Journey or Romantic?",
    a: "Relax & Coastal focuses on rest, water, coastlines, geothermal experiences and slower time in nature. Journey is more about routes, walking, cycling and movement through landscapes, while Romantic focuses on private time for two, anniversaries, proposals and special moments.",
  },
];
