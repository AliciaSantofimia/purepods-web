import type { ForestSlide } from "@/components/experiences/ForestCarouselBlock";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";

const R = "/assets/img/experiences/relax-coastal/";

export const relaxHero = {
  src: "/assets/img/experiences/experiences/rotorua-relax-coastal-geothermal-lake.jpg",
  alt: "Serene geothermal lake at dawn near Rotorua, New Zealand, with soft mist, mineral-rich water and calm native forest shoreline",
};

export const relaxAboutLeadHtml = `Below you will find a calm editorial selection of coastal, geothermal and restorative nature experiences across New Zealand — from hot springs and hidden beaches to estuaries, reserves and quiet lookouts — each paired with a suggested nearby PurePod when the regions align. Explore the wider collection on <a href="/experiences">Experiences</a>.`;

export const relaxThermalSlides: ForestSlide[] = [
  {
    image: `${R}polynesian-spa-rotorua-lake-view-geothermal-pool-new-zealand.png`,
    alt: "Geothermal pool at Polynesian Spa Rotorua by the lake, surrounded by natural greenery in New Zealand",
    title: "Polynesian Spa Rotorua",
    placeHref: "https://www.polynesianspa.co.nz/",
    description:
      "Set on the shores of Lake Rotorua, Polynesian Spa is a world-renowned geothermal spa in Rotorua, New Zealand, featuring mineral-rich hot pools fed by natural springs, luxury spa treatments, and stunning lake views; it is widely considered one of the best hot pools in Rotorua for relaxation, wellness, and a premium lakeside experience in the Bay of Plenty.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}wai-ariki-hot-springs-spa-rotorua-geothermal-luxury-new-zealand.png`,
    alt: "Wai Ariki Hot Springs & Spa in Rotorua with luxury geothermal pools and modern architecture at sunset, New Zealand",
    title: "Wai Ariki Hot Springs & Spa",
    placeHref: "https://www.wai-ariki.co.nz/",
    description:
      "Blending Māori culture with modern wellness, Wai Ariki Hot Springs & Spa is a luxury geothermal spa in Rotorua, New Zealand, located on the edge of Lake Rotorua and offering mineral hot pools, traditional healing rituals, and high-end treatments; as one of the newest and most exclusive spa experiences in the Bay of Plenty, it stands out for its cultural depth and premium design.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}hells-gate-rotorua-mud-bath-geothermal-spa-new-zealand.png`,
    alt: "Geothermal mud bath at Hell’s Gate Rotorua spa in New Zealand with natural outdoor pools",
    title: "Hell’s Gate Geothermal Reserve",
    placeHref: "https://www.hellsgate.co.nz/",
    description:
      "Located in Tikitere near Rotorua, Hell’s Gate Geothermal Reserve & Mud Spa is one of the most active geothermal attractions in New Zealand, known for its bubbling mud pools, steaming vents, and sulphur lakes; visitors can enjoy traditional Māori mud baths and sulphur spa treatments, making it one of the most unique geothermal experiences in the Bay of Plenty.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${R}waikite-valley-hotpools-rotorua-geothermal-spa-new-zealand.png`,
    alt: "Waikite Valley Hot Pools in Rotorua surrounded by native forest and geothermal steam, New Zealand",
    title: "Waikite Valley Hot Pools",
    placeHref: "https://www.hotpools.co.nz/",
    description:
      "Set in the scenic Waikite Valley near Rotorua, these natural geothermal hot pools are fed by Te Manaroa Spring, the largest single source of boiling water in New Zealand, and offer mineral-rich bathing surrounded by native bush, walking tracks, and peaceful countryside views; they are among the best natural hot springs in Rotorua for a quiet and authentic wellness experience.",
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
      "A wide, open sweep of coast in Northland, Matauri Bay is known for its clear water, soft sand and unhurried atmosphere. It is a place to slow down by the sea — whether for a quiet walk, time on the beach or simply watching the light change across the bay.",
    ctas: [{ label: "Stay at Mākoha, Kerikeri →", href: "/location/makoha" }],
  }),
  nv({
    title: "Gore Bay Beach",
    placeHref: "https://maps.app.goo.gl/XvgcdWQdC2VJ5PYZ8",
    description:
      "Set along a dramatic stretch of North Canterbury coast, Gore Bay Beach combines open sand, rolling surf and striking cliff formations. The feeling here is expansive and elemental — a coastal stop shaped by wind, sea and long horizons.",
    ctas: [
      { label: "Stay at Atatū →", href: "/location/atatu" },
      { label: "Stay at Korimako →", href: "/location/korimako" },
    ],
  }),
  nv({
    title: "Purau Bay",
    placeHref: "https://maps.app.goo.gl/avmuyfQmUBcq6Dci7",
    description:
      "Tucked into Banks Peninsula, Purau Bay offers a quieter, more intimate coastal experience. Sheltered waters, gentle shoreline views and a slower rhythm make it a place for pause rather than urgency — calm, local and quietly restorative.",
    ctas: [{ label: "Stay at Pōhue →", href: "/location/pohue" }],
  }),
  nv({
    title: "Boulder Beach",
    placeHref: "https://maps.app.goo.gl/L8E3c22r9ghxt5GH7",
    description:
      "Remote and windswept, Boulder Beach on Stewart Island feels wild in the best possible way. Its rocky shoreline, open ocean and sense of distance create a deeply peaceful coastal setting, where the landscape feels untouched and time seems to stretch.",
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
      "A gentle lakeside outlook framed by forest — ideal for a short, easy walk and a quiet pause beside clear water.",
    ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
  }),
  nv({
    title: "Hamurana Springs Nature Reserve",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/hamurana-springs-nature-reserve/",
    description:
      "Crystal-clear spring water rising through riparian forest — a boardwalk experience that feels cool, calm and deeply local.",
    ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu" }],
  }),
  nv({
    title: "Kerikeri River Track",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/kerikeri-area/kororipo-heritage-park/",
    description:
      "Easy riverside walking where history and water run side by side — unhurried, green and full of small details.",
    ctas: [{ label: "Stay at Mākoha, Kerikeri →", href: "/location/makoha" }],
  }),
  nv({
    title: "Kaikoura Recreation Reserve",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/kaikoura-area/",
    description:
      "Where mountains meet the Pacific — coastal paths and viewpoints with space to slow down and watch light on the water.",
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
      "Wide, curated plant collections and calm paths — an unhurried day out that still feels close to nature.",
    ctas: [{ label: "Stay at Rewarewa, Muriwai Coast →", href: "/location/rewarewa" }],
  }),
  nv({
    title: "Waikanae Estuary Scientific Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/waikanae-estuary-scientific-reserve/",
    description:
      "Birdlife, tidal channels and low horizons — a restorative flat walk where the sky feels generous.",
    ctas: [{ label: "Stay at Kokomea, Kāpiti Coast →", href: "/location/kokomea" }],
  }),
  nv({
    title: "Cathedral Gully",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/cathedral-gully-walking-track/",
    description:
      "Limestone forms and a short walk through a quiet gully — geological, airy and easy to take at a walking pace.",
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
      "A predator-free island sanctuary where native birdsong fills the understory — slow, attentive walking at its best.",
    ctas: [
      { label: "Stay at Tokoeka →", href: "/location/tokoeka" },
      { label: "Stay at Hananui →", href: "/location/hananui" },
    ],
  }),
];

export const relaxFaq: { q: string; a: string }[] = [
  {
    q: "What kind of experiences are included on Relax & Coastal?",
    a: "Relax & Coastal brings together geothermal bathing, beaches, quiet reserves, estuaries, gentle walks and scenic waterside stops across New Zealand — all selected for a slower, more restorative pace.",
  },
  {
    q: "Do all of these experiences have a nearby PurePod?",
    a: "Each featured stop is paired with a suggested nearby PurePod where the regions align, making it easier to plan a calm nature-based stay around the experience.",
  },
  {
    q: "Is this page focused on active adventure?",
    a: "No. This page is designed around slower coastal and restorative experiences — places to pause, unwind and enjoy nature without urgency.",
  },
];
