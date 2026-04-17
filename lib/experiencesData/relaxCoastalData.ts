import type { ForestSlide } from "@/components/experiences/ForestCarouselBlock";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";

const R = "/assets/img/experiences/relax-coastal/";

export const relaxHero = {
  image: "/assets/img/experiences/relax-coastal/cathedral-cove-beach-new-zealand-rock-arch-sea-stack.jpg",
  alt: "Cathedral Cove beach framed by a natural rock arch and sea stack, Coromandel Peninsula, New Zealand",
};

export const relaxAboutLeadHtml = `This is a quiet editorial map of New Zealand’s slower edges — geothermal pools, coastlines, inland water and gentle reserves — chosen for atmosphere and ease rather than spectacle. Where it makes sense, each stop sits near a suggested PurePod. Browse the full set on <a href="/experiences">Experiences</a>.`;

export const relaxThermalSlides: ForestSlide[] = [
  {
    image: `${R}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.jpg`,
    alt: "Geothermal pool at Polynesian Spa Rotorua by the lake, surrounded by natural greenery in New Zealand",
    title: "Polynesian Spa Rotorua",
    placeHref: "https://www.polynesianspa.co.nz/",
    description:
      "Lakefront mineral pools in Rotorua, fed by natural springs. The setting is straightforward: water, steam and a long view across the lake — a measured, unhurried soak rather than a themed attraction.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}wai-ariki-hot-springs-spa-rotorua-geothermal-luxury-new-zealand.jpg`,
    alt: "Wai Ariki Hot Springs & Spa in Rotorua with luxury geothermal pools and modern architecture at sunset, New Zealand",
    title: "Wai Ariki Hot Springs & Spa",
    placeHref: "https://www.wai-ariki.co.nz/",
    description:
      "A contemporary geothermal spa on the Rotorua lakefront, shaped around Māori narratives of healing and place. Pools, steam and architecture read as one calm sequence — still very much of this region’s heat and water.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}rotorua-geothermal-mud-bath-couple-hells-gate-new-zealand.jpg`,
    alt: "Geothermal mud bath at Hell’s Gate Rotorua spa in New Zealand with natural outdoor pools",
    title: "Hell’s Gate Geothermal Reserve",
    placeHref: "https://www.hellsgate.co.nz/",
    description:
      "Near Tikitere, an active geothermal field of mud pools, sulphur flats and steaming country. Walking tracks sit alongside optional mud and sulphur baths — raw geology first, with space to slow down beside it.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}waikite-valley-hotpools-rotorua-geothermal-spa-new-zealand.jpg`,
    alt: "Waikite Valley Hot Pools in Rotorua surrounded by native forest and geothermal steam, New Zealand",
    title: "Waikite Valley Hot Pools",
    placeHref: "https://www.hotpools.co.nz/",
    description:
      "Pools in the Waikite Valley draw from Te Manaroa Spring, with bush and walking tracks close by. The mood is rural and low-key — mineral water, native margin, and little need to rush the afternoon.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
];

const nv = (s: Omit<HikingSlide, "image" | "noVisual"> & { noVisual?: boolean }): HikingSlide => ({
  ...s,
  noVisual: true,
  image: null,
  alt: "",
});

export const relaxBeachesSlides: HikingSlide[] = [
  nv({
    title: "Matauri Bay",
    placeHref: "https://maps.app.goo.gl/2xbeZSdrHHRXeMS98",
    description:
      "A wide Northland sweep — clear water, soft sand and little hurry. The bay reads as open space first; everything else is optional.",
    ctas: [{ label: "Stay at Mākoha, Kerikeri →", href: "/location/makoha" }],
  }),
  nv({
    title: "Gore Bay Beach",
    placeHref: "https://maps.app.goo.gl/XvgcdWQdC2VJ5PYZ8",
    description:
      "North Canterbury coast of sand, surf and pale cliffs. The horizon feels long; the wind and tide do most of the talking.",
    ctas: [
      { label: "Stay at Atatū →", href: "/location/atatu" },
      { label: "Stay at Korimako →", href: "/location/korimako" },
    ],
  }),
  nv({
    title: "Purau Bay",
    placeHref: "https://maps.app.goo.gl/avmuyfQmUBcq6Dci7",
    description:
      "Banks Peninsula shelter — quieter water, a gentler shoreline rhythm and room to slow down without staging a full day out.",
    ctas: [{ label: "Stay at Pōhue →", href: "/location/pohue" }],
  }),
  nv({
    title: "Boulder Beach",
    placeHref: "https://maps.app.goo.gl/L8E3c22r9ghxt5GH7",
    description:
      "Stewart Island’s remote edge — rock, ocean and distance. A coastal pause that feels deliberate rather than busy.",
    ctas: [
      { label: "Stay at Tokoeka →", href: "/location/tokoeka" },
      { label: "Stay at Hananui →", href: "/location/hananui" },
    ],
  }),
];

export const relaxWatersSlides: HikingSlide[] = [
  nv({
    title: "Boyes Beach (Lake Ōkāreka)",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/lake-okareka-walking-tracks/",
    description:
      "A small lakeside outlook framed by forest — short, easy walking and a clear pause beside still water.",
    ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
  }),
  nv({
    title: "Hamurana Springs Nature Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/hamurana-springs-nature-reserve/",
    description:
      "Spring-fed clarity under riparian trees — a boardwalk rhythm that stays cool, quiet and close to the source.",
    ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
  }),
  nv({
    title: "Kerikeri River Track",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/kerikeri-area/kororipo-heritage-park/",
    description:
      "Easy riverside walking where history and water run in parallel — green, unhurried and rich in small detail.",
    ctas: [{ label: "Stay at Mākoha, Kerikeri →", href: "/location/makoha" }],
  }),
  nv({
    title: "Kaikoura Recreation Reserve",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/kaikoura-area/",
    description:
      "Mountains meeting the Pacific — coastal paths and viewpoints with space to watch light shift on the water.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara" },
      { label: "Stay at Manakau →", href: "/location/manakau" },
    ],
  }),
];

export const relaxGentleSlides: HikingSlide[] = [
  nv({
    title: "Auckland Botanic Gardens",
    placeHref: "https://www.aucklandbotanicgardens.co.nz/",
    description:
      "Wide plant collections and calm paths — a full, slow loop through cultivated landscape that still feels like fresh air.",
    ctas: [{ label: "Stay at Rewarewa, Muriwai Coast →", href: "/location/rewarewa" }],
  }),
  nv({
    title: "Waikanae Estuary Scientific Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/waikanae-estuary-scientific-reserve/",
    description:
      "Tidal channels, low horizons and bird movement — flat walking where the sky carries most of the composition.",
    ctas: [{ label: "Stay at Kokomea, Kāpiti Coast →", href: "/location/kokomea" }],
  }),
  nv({
    title: "Cathedral Gully",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/cathedral-gully-walking-track/",
    description:
      "Limestone forms in a short gully walk — geological, airy and easy to take at one steady pace.",
    ctas: [
      { label: "Stay at Atatū →", href: "/location/atatu" },
      { label: "Stay at Korimako →", href: "/location/korimako" },
    ],
  }),
  nv({
    title: "Ulva Island / Te Wharawhara Marine Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/rakiura-national-park/things-to-do/ulva-island/",
    description:
      "A predator-free island sanctuary — native birdsong and understory detail reward quiet, attentive walking.",
    ctas: [
      { label: "Stay at Tokoeka →", href: "/location/tokoeka" },
      { label: "Stay at Hananui →", href: "/location/hananui" },
    ],
  }),
];

export const relaxFaq: { q: string; a: string }[] = [
  {
    q: "What does Relax & Coastal cover?",
    a: "Geothermal bathing, coast and estuary, inland water and low-key reserves — grouped for calm pacing rather than adrenaline.",
  },
  {
    q: "Are PurePods always beside each place?",
    a: "Where geography allows, each stop suggests a nearby PurePod. Final distance and access depend on your chosen route and booking.",
  },
  {
    q: "Is this an adventure or activity list?",
    a: "No. The emphasis is on atmosphere, ease and time outdoors without a performance or checklist mindset.",
  },
  {
    q: "Why mix geothermal, coast and gentle walks on one page?",
    a: "They share a similar intent: restorative time in landscape. The page is an editorial weave, not a regional catalogue.",
  },
];
