import type { ForestSlide } from "@/components/experiences/ForestCarouselBlock";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";

const J = "/assets/img/experiences/journeys/";

export const journeyHero = {
  src: `${J}owharoa-falls-karangahake-gorge-waterfall-new-zealand.jpg`,
  alt: "Owharoa Falls waterfall in Karangahake Gorge surrounded by native forest in New Zealand",
};

export const journeyAboutLeadHtml = `The sections below organise examples into forest walks and nature trails, day and multi-day hikes, and cycle routes.
          Each slide links to a public route or place resource where one is listed, and to the suggested nearby pod’s detail page on this site (paths under /location/).
          For the full set of experience themes, see <a href="/experiences">Experiences</a>.
          Short answers to common questions appear in the <a href="#faq">FAQ</a> below.`;

export const journeyForestSlides: ForestSlide[] = [
  {
    image: `${J}redwoods-treewalk-rotorua.jpg`,
    alt: "Redwoods Treewalk in Rotorua",
    title: "Redwoods Treewalk (Whakarewarewa Forest)",
    placeHref: "https://www.treewalk.co.nz/",
    description:
      "An elevated walkway among towering redwoods that immerses you in a magical forest, especially at dusk. A unique experience blending nature and design in the heart of Rotorua.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${J}otanewainuku-scenic-reserve-rotorua.jpg`,
    alt: "Otanewainuku Scenic Reserve",
    title: "Otanewainuku Scenic Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/otanewainuku-forest/",
    description:
      "A hidden gem featuring waterfalls and natural pools surrounded by lush native bush. Perfect for switching off and enjoying nature at its purest.",
    ctaLabel: "Stay at Pāmu, Rotorua →",
    ctaHref: "/location/pamu",
  },
  {
    image: `${J}waitākere-ranges-muriwai-coast.jpg`,
    alt: "Waitākere Ranges",
    title: "Waitākere Ranges",
    placeHref: "https://www.newzealand.com/uk/feature/waitakere-ranges/",
    description:
      "A wild landscape where dense rainforest meets dramatic cliffs and black sand beaches. Ideal for exploring breathtaking views along Auckland’s rugged west coast.",
    ctaLabel: "Stay at Rewarewa, Muriwai coast →",
    ctaHref: "/location/rewarewa",
  },
  {
    image: `${J}karangahake-gorge-coromandel.jpg`,
    alt: "Karangahake Gorge",
    title: "Karangahake Gorge",
    placeHref: "https://thecoromandel.nz/destinations/karangahake-gorge/",
    description:
      "A striking gorge with flowing rivers, suspension bridges and historic mining trails. A unique mix of adventure, history and natural beauty.",
    ctaLabel: "Stay at Ruru, Coromandel →",
    ctaHref: "/location/ruru",
  },
  {
    image: `${J}te-ara-papararangi-waipara.jpg`,
    alt: "Te Ara Paparārangi",
    title: "Te Ara Paparārangi",
    placeHref: "https://maps.app.goo.gl/vcLyNzBPdvoqdeKE6",
    description:
      "A peaceful track through native greenery, perfect for slowing down and reconnecting with nature. An easy, immersive walk for those seeking calm and quiet.",
    ctaLabel: "Stay at Greystone, Waipara →",
    ctaHref: "/location/greystone",
  },
];

export const journeyHikingSlides: HikingSlide[] = [
  {
    image: `${J}mount-pirongia-waitomo.jpg`,
    alt: "Mount Pirongia — native forest and summit views, Waikato",
    title: "Mount Pirongia",
    placeHref: "https://www.waikatonz.com/walking-and-hiking-trails/mt-pirongia-forest-park/",
    description:
      "A rewarding climb through native forest leading to panoramic views across the Waikato region. A peaceful escape with a true sense of wilderness at the summit.",
    ctas: [{ label: "Stay at Matū, Waitomo →", href: "/location/matu" }],
  },
  {
    image: `${J}table-top-kapiti-coast.jpg`,
    alt: "Table Top — Tararua Range ridgeline walk with views toward the Kapiti Coast",
    title: "Table Top (Tararua Range)",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/things-to-do/tracks/field-hut-and-table-top/",
    description:
      "A stunning ridgeline walk offering sweeping views over the Tararua Range and Kapiti Coast. Dramatic skies and open landscapes make it an unforgettable hike.",
    ctas: [{ label: "Stay at Kokomea, Kapiti Coast →", href: "/location/kokomea" }],
  },
  {
    image: `${J}te-au-track-kapiti-coast.jpg`,
    alt: "Te Au Track — Tararua Forest Park trail through native bush",
    title: "Te Au Track (Tararua Forest Park)",
    placeHref: "https://maps.app.goo.gl/AE8yYzVvYBooYqxW9",
    description:
      "A peaceful track through native bush and rolling ridgelines, offering a quieter way to experience the natural beauty of Tararua Forest Park. Ideal for those seeking immersion, stillness and expansive views.",
    ctas: [{ label: "Stay at Kokomea, Kapiti Coast →", href: "/location/kokomea" }],
  },
  {
    image: `${J}bendigohistoric-reserve-central-otago.jpg`,
    alt: "Bendigo Historic Reserve — Central Otago goldfields landscape",
    title: "Bendigo Historic Reserve",
    placeHref: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bendigo-area/",
    description:
      "A unique landscape of historic gold mining ruins set among rugged hills and wide open spaces. A blend of history and striking Central Otago scenery.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: `${J}mt-cass-walkway-waipara.jpg`,
    alt: "Mt Cass Walkway — loop track with views over the Waipara Valley",
    title: "Mt Cass Walkway",
    placeHref: "https://transwastecanterbury.co.nz/walkways/mt-cass-walkway-2/",
    description:
      "A scenic loop track climbing through farmland and limestone landscapes to panoramic views over the Waipara Valley, vineyards and coastline. A rewarding walk combining wide-open scenery and unique terrain.",
    ctas: [{ label: "Stay at Greystone, Waipara →", href: "/location/greystone" }],
  },
];

export const journeyCyclingSlides: HikingSlide[] = [
  {
    image: `${J}hauraki-rail-trail-coastal-cycle-path-coromandel-new-zealand.jpg`,
    alt: "Hauraki Rail Trail",
    title: "Hauraki Rail Trail",
    placeHref: "https://haurakirailtrail.co.nz/",
    description:
      "A scenic and relaxed cycling journey following historic railway lines through lush countryside, rivers and charming towns. Perfect for all levels, with plenty of stops to enjoy the landscape along the way.",
    ctas: [{ label: "Stay at Ruru, Coromandel →", href: "/location/ruru" }],
  },
  {
    image: `${J}clyde-alexandra-river-trail-central-otago.jpg`,
    alt: "Clyde–Alexandra River Trail",
    title: "Clyde–Alexandra River Trail",
    placeHref: "https://www.centralotagonz.com/explore/listing/alexandra-river-track/",
    description:
      "A gentle riverside ride through Central Otago’s dramatic landscapes, weaving between vineyards, orchards and rugged cliffs. A peaceful and picturesque trail rich in local character.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: `${J}Woodhill Mountain Bike Park, Muriwai coast.jpg`,
    alt: "Woodhill Mountain Bike Park",
    title: "Woodhill Mountain Bike Park",
    placeHref: "https://www.bikeparks.co.nz/es",
    description:
      "A purpose-built riding destination set within a vast pine forest, offering trails for every level from flowing beginner tracks to technical downhill lines. A must-visit for mountain biking enthusiasts near Auckland.",
    ctas: [{ label: "Stay at Rewarewa, Muriwai coast →", href: "/location/rewarewa" }],
  },
  {
    image: `${J}Lake Dunstan Trail, Central Otago.jpg`,
    alt: "Lake Dunstan Trail",
    title: "Lake Dunstan Trail",
    placeHref: "https://www.centralotagonz.com/tracks-and-trails/lake-dunstan-trail/map-and-sections/",
    description:
      "An iconic ride carved into cliffs above turquoise waters, featuring suspended boardwalks and breathtaking views. A unique blend of engineering and natural beauty in Central Otago.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: `${J}karangahake-gorge-coromandel.jpg`,
    alt: "Karangahake Gorge — Hauraki Rail Trail bridges and river gorge",
    title: "Karangahake Gorge (Hauraki Rail Trail)",
    placeHref: "https://haurakirailtrail.co.nz/",
    description:
      "Ride the Hauraki Rail Trail through a dramatic river gorge: suspension bridges, historic mining relics and native bush close to the track. One of the North Island’s most memorable rail-trail sections.",
    ctas: [{ label: "Stay at Ruru, Coromandel →", href: "/location/ruru" }],
  },
];

export const journeyFaq: { q: string; a: string }[] = [
  {
    q: "What is the Journey experience on PurePods?",
    a: "Journey is a PurePods experience page that groups walking, hiking and cycling ideas with suggested PurePod stays. It presents example forest walks, hikes and cycle routes in selected New Zealand regions, with external links to route information and internal links to nearby pod detail pages (`/location/...`).",
  },
  {
    q: "Which regions appear in the examples on this page?",
    a: "The carousels highlight examples in Rotorua, Waikato, the Kāpiti Coast, Central Otago, the Coromandel, Waipara and Auckland’s west coast. These are illustrative routes only; availability and access are set by land managers and operators linked from each entry.",
  },
  {
    q: "How do I book a PurePod from this page?",
    a: "Use the main Book control in the navigation, the “Find your PurePod” call to action, or each section’s “Stay at [pod name]” link. Those links open the matching pod detail page on this site (`/location/...`), where you can read the stay and continue to booking.",
  },
];
