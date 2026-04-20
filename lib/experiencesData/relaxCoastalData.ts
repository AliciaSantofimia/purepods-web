const RC = "/assets/img/experiences/relax-coastal/";
const J = "/assets/img/experiences/journeys/";
const AW = "/assets/img/experiences/adventure-wildlife/";

export const relaxHero = {
  image: `${RC}cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg`,
  alt: "Cathedral Cove beach framed by a natural rock arch and sea stack, Coromandel Peninsula, New Zealand",
};

/** Two beats for the deck — same meaning as the former single block, easier to scan. */
export const relaxAboutParagraphs: readonly [string, string] = [
  "This is a deliberately narrow field guide to restorative New Zealand — geothermal water, island-sheltered coast and inland lakes — written as a magazine feature rather than a catalogue.",
  "Each stop links onward to visitor information where you can confirm hours and access. When you are ready to stay, pair the rhythm of the day with a nearby PurePod.",
];

export type RelaxRcCta = { href: string; label: string };

export type RelaxRcPlaceLayout = "image-left" | "image-right" | "full-bleed";

export type RelaxRcPlace = {
  id: string;
  name: string;
  eyebrow: string;
  /** Short paragraphs — same copy, broken for editorial rhythm. */
  paragraphs: readonly [string, string];
  mapHref: string;
  ctas: RelaxRcCta[];
  /** Only set when `src` is a real photograph that matches the place or an honest regional companion (see `alt`). */
  figure?: { src: string; alt: string };
  layout?: RelaxRcPlaceLayout;
};

export type RelaxRcChapter = {
  id: string;
  eyebrow: string;
  title: string;
  intro: readonly [string, string];
  moodFigure?: { src: string; alt: string; caption?: string };
  places: RelaxRcPlace[];
};

/** Curated chapters: semantic order for reading, not alphabetical. */
export const relaxRcChapters: RelaxRcChapter[] = [
  {
    id: "relax-rc-rotorua",
    eyebrow: "Geothermal North Island",
    title: "Rotorua heat, lake air and forest margins",
    intro: [
      "Mineral water, steam and native bush edges — Rotorua, Bay of Plenty, remains one of the most distinctive slow-travel regions in New Zealand.",
      "These stops sit close enough to share an unhurried afternoon, yet each has its own cadence.",
    ],
    places: [
      {
        id: "polynesian-spa",
        name: "Polynesian Spa",
        eyebrow: "Lakefront bathing · Rotorua",
        paragraphs: [
          "Lake Rotorua at your shoulder, mineral water under you — Polynesian Spa keeps the proposition simple: long soaks, soft steam and a view that stretches the mind as much as the horizon.",
          "It is less about novelty and more about settling into heat that has been part of this place for generations.",
        ],
        mapHref: "https://www.polynesianspa.co.nz/",
        figure: {
          src: `${RC}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.jpg`,
          alt: "Geothermal pool at Polynesian Spa, Rotorua, beside Lake Rotorua with native greenery, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
      },
      {
        id: "wai-ariki",
        name: "Wai Ariki Hot Springs & Spa",
        eyebrow: "Contemporary geothermal spa · Rotorua",
        paragraphs: [
          "Wai Ariki reads like a modern chapter in an ancient story — pools, steam and architecture shaped around Māori healing narratives while staying unmistakably of Rotorua.",
          "Move from cooler circulation spaces into deeper warmth, then step back into lake air without the day ever feeling rushed.",
        ],
        mapHref: "https://www.wai-ariki.co.nz/",
        figure: {
          src: `${RC}wai-ariki-hot-springs-spa-rotorua-geothermal-luxury-new-zealand.jpg`,
          alt: "Wai Ariki Hot Springs & Spa, Rotorua, luxury geothermal pools and contemporary building at dusk, New Zealand",
        },
        layout: "image-right",
        ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
      },
      {
        id: "hells-gate",
        name: "Hell's Gate Geothermal Reserve & Mud Spa",
        eyebrow: "Active field · Tikitere",
        paragraphs: [
          "Sulphur on the breeze, mud pools popping like slow percussion — Hell's Gate is geology first, spa second.",
          "Walk the reserve to feel the scale of the caldera, then, if you choose, follow with mud and sulphur baths that lean into the landscape rather than polishing it away.",
        ],
        mapHref: "https://www.hellsgate.co.nz/",
        figure: {
          src: `${RC}rotorua-geothermal-mud-bath-couple-hells-gate-new-zealand.jpg`,
          alt: "Outdoor geothermal mud bath at Hell's Gate, Rotorua, New Zealand, with steam and native planting",
        },
        layout: "full-bleed",
        ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
      },
      {
        id: "secret-spot",
        name: "Secret Spot Hot Tubs Rotorua",
        eyebrow: "Private cedar tubs · Waipa",
        paragraphs: [
          "Tucked into native forest near Waipa, Secret Spot trades shared lanes for private cedar tubs and cold-plunge barrels.",
          "Bookings keep numbers low, so the soundtrack is mostly water and birdsong — a useful counterpoint when you still want Rotorua's heat without the resort concourse.",
        ],
        mapHref: "https://secretspot.co.nz/",
        ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
      },
      {
        id: "hamurana-springs",
        name: "Hamurana Springs Nature Reserve",
        eyebrow: "Crystal-clear spring walk · Hamurana",
        paragraphs: [
          "A boardwalk threads rimu and ferns above Te Puna-a-Hangarua — the water so clear it seems to suspend the forest in place.",
          "Bring quiet shoes and time for reading the interpretive panels; this is a walking reserve first, and the calm carries long after you return to the car park.",
        ],
        mapHref: "https://www.hamurana.co.nz/",
        ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
      },
    ],
  },
  {
    id: "relax-rc-north",
    eyebrow: "Northland to Bay of Plenty",
    title: "Island light, long beaches and crossing room",
    intro: [
      "From Matauri Bay's open Northland sweep to scheduled crossings in the Bay of Islands, then south to Waihi Beach on the Bay of Plenty, this chapter keeps the sea in frame.",
      "Wind, tide and small decisions about how much distance you want to cover.",
    ],
    moodFigure: {
      src: `${AW}bay-of-islands-sea-kayaking-moana-kayaks-coastal-new-zealand.jpg`,
      alt: "Sea kayaks on sheltered water in the Bay of Islands, Northland, New Zealand",
      caption: "Bay of Islands — on-water calm that matches the pace of the listings below.",
    },
    places: [
      {
        id: "matauri-bay",
        name: "Matauri Bay Beach",
        eyebrow: "Northland coast · Cavalli Islands on the horizon",
        paragraphs: [
          "Wide sand, clear water and headlands that hold the bay open to the sky — Matauri Bay rewards travellers who pack a towel and very little else.",
          "Arrive for a morning swim, stay for the slow shift of light across the Cavallis, and let the day lose its outline.",
        ],
        mapHref: "https://maps.app.goo.gl/2xbeZSdrHHRXeMS98",
        ctas: [{ label: "Stay at Mākōha, Kerikeri →", href: "/location/makoha" }],
      },
      {
        id: "bay-of-islands-cruises",
        name: "Explore Bay of Islands Cruises",
        eyebrow: "Scheduled crossings · Paihia & Russell",
        paragraphs: [
          "Fullers GreatSights and related services stitch the Bay of Islands into a navigable story — Urupukapuka headlands, the Cape Brett hole in the rock on longer sailings, and shorter hops when you only want salt on your skin for an hour or two.",
          "Check timetables seasonally; winter light here is especially generous.",
        ],
        mapHref: "https://www.fullers.co.nz/en/bay-of-islands/",
        ctas: [{ label: "Stay at Mākōha, Kerikeri →", href: "/location/makoha" }],
      },
      {
        id: "waihi-beach",
        name: "Waihi Beach",
        eyebrow: "Bay of Plenty surf beach",
        paragraphs: [
          "Pale sand, dependable swell and a village pace — Waihi Beach is the sort of coast you walk without a turn-around time.",
          "Surf schools and lifeguard patrols (in season) frame safety without crowding the long view toward Mayor Island on clear days.",
        ],
        mapHref: "https://www.google.com/maps/place/Waihi+Beach/@-37.3894,175.9833,12z",
        figure: {
          src: `${J}hauraki-rail-trail-coastal-cycle-path-coromandel-new-zealand.jpg`,
          alt: "Coastal section of the Hauraki Rail Trail near the Coromandel Peninsula, North Island, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Ruru, Coromandel →", href: "/location/ruru" }],
      },
    ],
  },
  {
    id: "relax-rc-canterbury",
    eyebrow: "Canterbury & Banks Peninsula",
    title: "Clifftop reserves and a sheltered Banks harbour",
    intro: [
      "Wind-sculpted coast on one side of Christchurch, volcanic harbour folds on the other.",
      "This pairing suits a two-day loop with Greystone and Pōhue as bookends rather than a single dash.",
    ],
    places: [
      {
        id: "motunau",
        name: "Motunau Beach Clifftop Coastal Reserve",
        eyebrow: "North Canterbury pocket beach",
        paragraphs: [
          "Grassy bluffs step down to a pocket of sand and surf — Motunau feels tucked away even when the nor-wester is up.",
          "Tread lightly: the reserve protects nesting birds; stay on formed tracks above the beach and let the tide set your timing.",
        ],
        mapHref:
          "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/motunau-island-scenic-reserve/",
        figure: {
          src: `${J}mount-grey-views-north-canterbury-landscape-new-zealand.jpg`,
          alt: "Open North Canterbury farmland and distant coastal haze toward Pegasus Bay, New Zealand",
        },
        layout: "image-right",
        ctas: [{ label: "Stay at Greystone, Waipara →", href: "/location/greystone" }],
      },
      {
        id: "purau-bay",
        name: "Purau Bay Beach",
        eyebrow: "Banks Peninsula · sheltered water",
        paragraphs: [
          "Purau sits inside Banks Peninsula's volcanic harbour — small boats, shingle beaches and late sun that lingers on the water.",
          "It is a place for skipping stones, reading a paperback under pohutukawa, and letting Lyttelton's rim of hills hold the weather at arm's length.",
        ],
        mapHref: "https://www.google.com/maps/place/Purau+Bay/",
        figure: {
          src: `${J}port-levy-banks-peninsula-mountain-view-new-zealand.jpg`,
          alt: "Port Levy harbour and folded hills, Banks Peninsula, Canterbury, New Zealand",
        },
        layout: "image-left",
        ctas: [{ label: "Stay at Pōhue, Banks Peninsula →", href: "/location/pohue" }],
      },
    ],
  },
  {
    id: "relax-rc-rakiura",
    eyebrow: "Rakiura / Stewart Island",
    title: "Paterson Inlet's long, sheltered breath",
    intro: [
      "South of Bluff, Rakiura National Park trades motorway noise for tidal hush.",
      "Paterson Inlet / Whaka a Te Wera gathers bush-clad bays and boat-only corners where the day loosens its grip.",
    ],
    moodFigure: {
      src: `${J}rakiura-national-park-beach-stewart-island-new-zealand.jpg`,
      alt: "Quiet beach and coastal bush, Rakiura National Park, Stewart Island, New Zealand",
      caption: "Rakiura shoreline mood — many Paterson landings share this scale of bush, tide and sky.",
    },
    places: [
      {
        id: "paterson-inlet",
        name: "Paterson Inlet / Whaka a Te Wera",
        eyebrow: "Boat-access bays · Stewart Island",
        paragraphs: [
          "Whaka a Te Wera is Stewart Island's great inland sea — tidal channels, predator-free islands and DOC huts reached only by water taxi or private craft.",
          "Build slack into your itinerary: weather windows matter, and the reward is shoreline where kererū wingbeats feel louder than conversation.",
        ],
        mapHref:
          "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/rakiura-national-park/things-to-do/paterson-inlet-area/",
        ctas: [
          { label: "Stay at Tokoeka, Stewart Island →", href: "/location/tokoeka" },
          { label: "Stay at Hananui, Stewart Island →", href: "/location/hananui" },
        ],
      },
    ],
  },
  {
    id: "relax-rc-otago",
    eyebrow: "Central Otago",
    title: "Lake Dunstan light and Cromwell gorge pauses",
    intro: [
      "Schist hills, dam-stilled water and trail corridors that favour e-bikes as much as walkers — Central Otago rewards slow logistics and sharp sunglasses.",
      "These two stops bookend a single golden afternoon along the lake.",
    ],
    places: [
      {
        id: "lake-dunstan-lowburn",
        name: "Lake Dunstan viewpoint @ Lowburn",
        eyebrow: "Trail outlook · Cromwell basin",
        paragraphs: [
          "From the Lowburn pinch you read the full width of Lake Dunstan — trail cyclists threading the shore, orchards catching late heat, and the Remarkables drawing a faint saw-tooth on the horizon.",
          "Pause here before descending; the view works as well at coffee temperature as at golden hour.",
        ],
        mapHref: "https://www.newzealand.com/int/planning/trails/lake-dunstan-trail/",
        figure: {
          src: `${J}Lake Dunstan Trail, Central Otago.jpg`,
          alt: "Lake Dunstan Trail beside clear water with schist hills, Central Otago, New Zealand",
        },
        layout: "full-bleed",
        ctas: [
          { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
          { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
        ],
      },
      {
        id: "cromwell-gorge-picnic",
        name: "Cromwell Gorge Picnic Area",
        eyebrow: "Lake edge · Clyde–Alexandra corridor",
        paragraphs: [
          "Picnic tables, still water and the old gorge line submerged but still readable in the topography — this is Central Otago at its most domestic: families, trail riders and anglers sharing the same shade trees.",
          "Arrive with something simple to eat; let the mountains do the garnish.",
        ],
        mapHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/clyde-alexandra-area/",
        figure: {
          src: `${J}clyde-alexandra-river-trail-central-otago.jpg`,
          alt: "Clyde–Alexandra river trail beside calm water and schist bluffs, Central Otago, New Zealand",
        },
        layout: "image-right",
        ctas: [
          { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
          { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
        ],
      },
    ],
  },
];

export const relaxFaq: { q: string; a: string }[] = [
  {
    q: "What does Relax & Coastal cover?",
    a: "Geothermal bathing, Northland and Bay of Plenty shores, Canterbury and Banks Peninsula coast, Rakiura's inlet country, and Central Otago lake trails — chosen for calm pacing rather than adrenaline.",
  },
  {
    q: "Are PurePods always beside each place?",
    a: "Each stop suggests a nearby PurePod when geography allows. Final driving times, ferry bookings and access rules should be confirmed against your own itinerary.",
  },
  {
    q: "Is this an activity checklist?",
    a: "No. Treat it as an editorial shortlist: a handful of atmospheres you can weave together, with visitor links so you can adapt to season and weather.",
  },
  {
    q: "Why pair geothermal bathing with distant coasts on one page?",
    a: "They share an intent — restorative time in landscape — even when the kilometres between them require separate trips. The page is a mood board with rigour, not a day-trip manifest.",
  },
];
