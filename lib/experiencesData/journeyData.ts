import type { ForestSlide } from "@/components/experiences/ForestCarouselBlock";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";
import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const J = "/assets/img/experiences/journeys/";

export const journeyHero = {
  src: `${J}owharoa-falls-karangahake-gorge-waterfall-new-zealand.jpg`,
  alt: "Owharoa Falls waterfall in Karangahake Gorge surrounded by native forest in New Zealand",
};

export const journeyContextHeading = "Where to stay for these experiences";

export const journeyContextBody =
  "Build a scenic journey around trails, open landscapes and the rest that follows the route — each private glass cabin gives you a quiet base as you move from one PurePod to the next.";

export const journeyExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: `${J}waterfall-bike-adventure-new-zealand-nature-trail-journey.jpg`,
    alt: "Mountain biking on a forest trail in New Zealand with waterfall and native bush, adventure journey experience",
    title: "Waitangi Mountain Bike Park",
    description:
      "A purpose-built network of forest trails near the Bay of Islands, with flowing rides for a range of abilities.",
    pods: [
      {
        label: "Mākoha PurePod near Kerikeri and Bay of Islands experiences",
        href: "/location/makoha/?from=journey",
      },
    ],
    distance: "Bay of Islands bike park",
    timing: "half-day ride",
    nearbyRegion: " — Waitangi / Kerikeri, North Island",
    url: "https://ridewaitangi.nz/",
  },
  {
    image: `${J}redwoods-treewalk-rotorua.jpg`,
    alt: "Redwoods Treewalk canopy bridge surrounded by native ferns in Whakarewarewa Forest, Rotorua, New Zealand",
    title: "Redwoods Treewalk / Whakarewarewa Forest",
    description:
      "Walk among towering redwoods, forest trails and suspended bridges in one of Rotorua’s most atmospheric natural settings.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
        href: "/location/pamu/?from=journey",
      },
    ],
    distance: "Rotorua forest experience",
    timing: "day or evening",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.treewalk.co.nz/",
  },
  {
    image: `${J}table-top-kapiti-coast.jpg`,
    alt: "Kāpiti Coast ridgeline track with expansive views across hills and coastline, New Zealand",
    title: "Paekākāriki Escarpment Track",
    description:
      "A dramatic coastal escarpment walk with stair climbs, swing bridges and big views over the Kāpiti coastline.",
    pods: [
      {
        label: "Kokomea PurePod near Wellington and Kāpiti Island",
        href: "/location/kokomea/?from=journey",
      },
    ],
    distance: "Kāpiti Coast walk",
    timing: "day hike",
    nearbyRegion: " — Kāpiti Coast, North Island",
    url: "https://www.wellingtonnz.com/visit/trails/escarpment-track",
  },
  {
    image: `${J}karangahake-gorge-coromandel.jpg`,
    alt: "Suspension bridge over the river in Karangahake Gorge with rocky cliffs and native bush in New Zealand",
    title: "Karangahake Gorge (hiking)",
    description:
      "Historic trails, river paths, bridges and native bush make this gorge one of the North Island’s most memorable walking areas.",
    pods: [
      {
        label: "Ruru PurePod near Mount Karangahake and Waihi",
        href: "/location/ruru/?from=journey",
      },
    ],
    distance: "Coromandel gorge walk",
    timing: "choose short or longer loops",
    nearbyRegion: " — Coromandel, North Island",
    url: "https://thecoromandel.nz/destinations/karangahake-gorge/",
  },
  {
    image: `${J}kaikoura-peninsula-walkway-coastal-bay-new-zealand.jpg`,
    alt: "Kaikōura Peninsula Walkway with coastal bay, turquoise ocean and grassy clifftop views in New Zealand",
    title: "Kaikōura Peninsula Walkway",
    description:
      "A coastal walkway shaped by sea cliffs, wildlife, mountain views and the distinctive meeting point of land and ocean.",
    pods: [
      { label: "Kahutara PurePod", href: "/location/kahutara/?from=journey" },
      { label: "Manakau PurePod", href: "/location/manakau/?from=journey" },
    ],
    distance: "Kaikōura coastal walk",
    timing: "short sections or longer loop",
    nearbyRegion: " — Kaikōura region, South Island",
    url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/marlborough/places/kaikoura-area/things-to-do/tracks/kaikoura-peninsula-walkway/",
  },
  {
    image: `${J}lake-dunstan-trail-central-otago.jpg`,
    alt: "Cyclists riding the Lake Dunstan Trail boardwalk beside turquoise lake waters and rocky cliffs in Central Otago, New Zealand",
    title: "Lake Dunstan Trail - Bannockburn Bridge Car Park",
    description:
      "A scenic trail section above Lake Dunstan, with boardwalks, cliffs and wide Central Otago views.",
    pods: [
      {
        label: "Haurapa PurePod near the Lake Dunstan Trail",
        href: "/location/haurapa/?from=journey",
      },
      {
        label: "Tāima PurePod near the Lake Dunstan Trail",
        href: "/location/taima/?from=journey",
      },
    ],
    distance: "Central Otago trail",
    timing: "cycle or walk sections",
    nearbyRegion: " — Central Otago, South Island",
    url: "https://www.centralotagonz.com/tracks-and-trails/lake-dunstan-trail/map-and-sections/",
  },
  {
    image: `${J}rakiura-track-stewart-island-coastal-trail-new-zealand.jpg`,
    alt: "Rakiura Track coastal trail with native bush, rocky shoreline and turquoise ocean on Stewart Island, New Zealand",
    title: "Rakiura Track",
    description:
      "A Great Walk through coastal forest, beaches and sheltered bays on Stewart Island / Rakiura.",
    pods: [
      {
        label: "Tokoeka PurePod near Rakiura walks and island wildlife",
        href: "/location/tokoeka/?from=journey",
      },
      {
        label: "Hananui PurePod near Rakiura walks and island wildlife",
        href: "/location/hananui/?from=journey",
      },
    ],
    distance: "Stewart Island / Rakiura",
    timing: "multi-day walk",
    nearbyRegion: " — Rakiura, South Island",
    url: "https://www.doc.govt.nz/rakiuratrack",
  },
];

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
    ctaLabel: "Stay at Pāmu PurePod in Rotorua",
    ctaHref: "/location/pamu/?from=journey",
  },
  {
    image: `${J}otanewainuku-scenic-reserve-rotorua.jpg`,
    alt: "Otanewainuku Scenic Reserve",
    title: "Otanewainuku Scenic Reserve",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/otanewainuku-forest/",
    description:
      "A hidden gem featuring waterfalls and natural pools surrounded by lush native bush. Perfect for switching off and enjoying nature at its purest.",
    ctaLabel: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
    ctaHref: "/location/pamu/?from=journey",
  },
  {
    image: `${J}waitākere-ranges-muriwai-coast.jpg`,
    alt: "Waitākere Ranges",
    title: "Waitākere Ranges",
    placeHref: "https://www.newzealand.com/uk/feature/waitakere-ranges/",
    description:
      "A wild landscape where dense rainforest meets dramatic cliffs and black sand beaches. Ideal for exploring breathtaking views along Auckland’s rugged west coast.",
    ctaLabel: "Stay at Rewarewa PurePod on the Muriwai Coast",
    ctaHref: "/location/rewarewa/?from=journey",
  },
  {
    image: `${J}karangahake-gorge-coromandel.jpg`,
    alt: "Karangahake Gorge",
    title: "Karangahake Gorge",
    placeHref: "https://thecoromandel.nz/destinations/karangahake-gorge/",
    description:
      "A striking gorge with flowing rivers, suspension bridges and historic mining trails. A unique mix of adventure, history and natural beauty.",
    ctaLabel: "Stay at Ruru PurePod in the Coromandel",
    ctaHref: "/location/ruru/?from=journey",
  },
  {
    image: `${J}te-ara-papararangi-waipara.jpg`,
    alt: "Te Ara Paparārangi",
    title: "Te Ara Paparārangi",
    placeHref: "https://maps.app.goo.gl/vcLyNzBPdvoqdeKE6",
    description:
      "A peaceful track through native greenery, perfect for slowing down and reconnecting with nature. An easy, immersive walk for those seeking calm and quiet.",
    ctaLabel: "Stay at Greystone, Waipara →",
    ctaHref: "/location/greystone/?from=journey",
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
    ctas: [
      {
        label: "Stay at Matū PurePod near Waitomo",
        href: "/location/matu/?from=journey",
      },
    ],
  },
  {
    image: `${J}table-top-kapiti-coast.jpg`,
    alt: "Table Top — Tararua Range ridgeline walk with views toward the Kāpiti Coast",
    title: "Table Top (Tararua Range)",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/things-to-do/tracks/field-hut-and-table-top/",
    description:
      "A stunning ridgeline walk offering sweeping views over the Tararua Range and Kāpiti Coast. Dramatic skies and open landscapes make it an unforgettable hike.",
    ctas: [
      {
        label: "Stay at Kokomea PurePod on the Kāpiti Coast",
        href: "/location/kokomea/?from=journey",
      },
    ],
  },
  {
    image: `${J}te-au-track-kapiti-coast.jpg`,
    alt: "Te Au Track — Tararua Forest Park trail through native bush",
    title: "Te Au Track (Tararua Forest Park)",
    placeHref: "https://maps.app.goo.gl/AE8yYzVvYBooYqxW9",
    description:
      "A peaceful track through native bush and rolling ridgelines, offering a quieter way to experience the natural beauty of Tararua Forest Park. Ideal for those seeking immersion, stillness and expansive views.",
    ctas: [
      {
        label: "Kokomea PurePod on the Kāpiti Coast near Wellington",
        href: "/location/kokomea/?from=journey",
      },
    ],
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
    ctas: [{ label: "Stay at Greystone, Waipara →", href: "/location/greystone/?from=journey" }],
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
    ctas: [
      {
        label: "Ruru PurePod near Karangahake Gorge and the Hauraki Rail Trail",
        href: "/location/ruru/?from=journey",
      },
    ],
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
    ctas: [
      {
        label: "Stay at Rewarewa PurePod on the Muriwai Coast",
        href: "/location/rewarewa/?from=journey",
      },
    ],
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
    ctas: [
      {
        label: "Ruru PurePod near Karangahake Gorge and the Hauraki Rail Trail",
        href: "/location/ruru/?from=journey",
      },
    ],
  },
];

export const journeyFaq: { q: string; a: string }[] = [
  {
    q: "What is Journey by PurePods?",
    a: "Journey is the PurePods experience for travellers who want to connect scenic routes, walking tracks, cycling trails and quiet landscapes across New Zealand with a private glass cabin stay at the end of the day.",
  },
  {
    q: "Is Journey about fixed itineraries or guided tours?",
    a: "No. Journey is not a fixed tour or guided itinerary. It is an editorial way to explore New Zealand routes and landscapes, then choose a nearby PurePod as a private place to slow down, stay overnight and continue the journey at your own pace.",
  },
  {
    q: "Can I plan a multi-pod journey with PurePods?",
    a: "Yes, guests can choose to stay at more than one PurePod if availability and travel plans allow. Journey can help inspire a slower route through New Zealand, from one PurePod to the next, but each stay should be booked separately according to availability.",
  },
  {
    q: "Does Journey include walking and hiking experiences?",
    a: "Yes. Journey includes walking tracks, hikes, coastal walks, forest routes and scenic landscapes across New Zealand. Some are short and accessible, while others may require more time, planning or fitness, so guests should always check local track information before setting out.",
  },
  {
    q: "Does Journey include cycling routes?",
    a: "Yes. Some Journey experiences include cycling or mountain biking routes, such as scenic trails, forest tracks or regional cycleways. Guests should check route conditions, bike hire options, safety requirements and weather before travelling.",
  },
  {
    q: "Do the PurePods sit directly on the trails?",
    a: "Not always. The PurePods are chosen as nearby private stays that pair well with each route or landscape, but guests may still need to drive, walk or arrange transport between the pod and the activity.",
  },
  {
    q: "How do I choose the right PurePod for a Journey experience?",
    a: "Start with the landscape or route you want to explore, then use the nearby PurePod links on the Journey page to find a stay that fits your plans. Each pod landing gives more detail about the setting, arrival walk and booking flow.",
  },
  {
    q: "Are Journey experiences suitable for all fitness levels?",
    a: "It depends on the route. Some experiences are gentle scenic walks, while others involve longer hikes, cycling routes or uneven terrain. Guests should always check the official trail information, weather, distance and difficulty before choosing an activity.",
  },
  {
    q: "What should I bring for a Journey stay?",
    a: "Bring comfortable walking shoes, layered clothing, water, weather protection and anything needed for the route you plan to explore. For the PurePod stay itself, bring luggage that is easy to carry and your favourite drinks if ordering food.",
  },
  {
    q: "Can I book a PurePod directly from the Journey page?",
    a: "The Journey page helps connect each route or landscape with nearby PurePods. Follow the links to the relevant pod landing first, then continue to the booking flow from there. This keeps the journey editorial before moving into availability and booking.",
  },
  {
    q: "What makes Journey different from Adventure & Wildlife?",
    a: "Journey focuses on scenic routes, trails, walking, cycling and slow travel through New Zealand landscapes. Adventure & Wildlife is more focused on wildlife encounters, outdoor activities and nature experiences. Some overlap is natural, but Journey is about the route and the rhythm of travel.",
  },
];
