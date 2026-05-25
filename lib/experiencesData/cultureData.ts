import type { ForestSlide } from "@/components/experiences/ForestCarouselBlock";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";
import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const C = "/assets/img/experiences/culture/";

export const cultureHero = {
  src: "/assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
  alt: "Māori cultural ceremony in forest setting in Rotorua, New Zealand with traditional dress, haka and heritage experience",
};

export const cultureAboutLeadHtml = `Below you will find a calm, editorial selection of cultural stops — from marae and museums to heritage towns and craft ateliers — each with a respectful link to the host organisation and a suggested nearby PurePod when the regions align. Browse the full collection on <a href="/experiences">Experiences</a>.`;

export const cultureContextHeading = "Where to stay for these experiences";

export const cultureContextBody =
  "Stay close to places shaped by living heritage, storytelling and local identity — each PurePod offers a quiet natural base within reach of memorable cultural experiences across New Zealand.";

export const cultureExperienceSlides: AdventureExperienceSlide[] = [
  {
    image: "/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-house-bay-of-islands-new-zealand.jpg",
    alt: "Māori cultural performance at Waitangi Treaty Grounds Bay of Islands with traditional haka and historic heritage setting New Zealand",
    title: "Waitangi Treaty Grounds",
    description:
      "The birthplace of modern New Zealand, where the Treaty of Waitangi was signed. Walk the grounds, explore the museums and experience powerful Māori cultural performance.",
    pods: [
      {
        label: "Mākoha PurePod near Kerikeri and Bay of Islands experiences",
        href: "/location/makoha/?from=culture",
      },
    ],
    distance: "Bay of Islands cultural landmark",
    timing: "allow a half day",
    nearbyRegion: " — Kerikeri / Bay of Islands, North Island",
    url: "https://www.waitangi.org.nz/",
  },
  {
    image: `${C}te-puia-geothermal-valley-rotorua-new-zealand.jpg`,
    alt: "Pōhutu geyser erupting at Te Puia Rotorua geothermal valley with Māori cultural centre and traditional carving school New Zealand",
    title: "Te Puia",
    description:
      "Geothermal energy and Māori culture meet at Te Puia, home to Pōhutu Geyser, carving and weaving schools, and living traditions passed through generations.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
        href: "/location/pamu/?from=culture",
      },
    ],
    distance: "Rotorua cultural and geothermal experience",
    timing: "guided visits available",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://www.tepuia.com/",
  },
  {
    image: `${C}te-pa-tu-maori-cultural-experience-rotorua-night-performance-new-zealand.jpg`,
    alt: "Immersive Māori cultural performance at Te Pā Tū Rotorua with haka, storytelling and traditional evening experience in New Zealand",
    title: "Te Pā Tū",
    description:
      "An immersive evening of storytelling, performance and seasonal kai in a forest setting, shaped around Māori traditions, identity and connection to the land.",
    pods: [
      {
        label: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
        href: "/location/pamu/?from=culture",
      },
    ],
    distance: "Rotorua evening experience",
    timing: "book ahead",
    nearbyRegion: " — Rotorua region, North Island",
    url: "https://te-pa-tu.com/",
  },
  {
    image: `${C}hobbiton-movie-set-hobbit-house-matamata-new-zealand.jpg`,
    alt: "Hobbiton Movie Set hobbit house in Matamata, New Zealand",
    title: "Hobbiton™ Movie Set",
    description:
      "Step into the crafted landscapes of Middle-earth with a guided visit through the Hobbiton Movie Set, one of New Zealand’s most recognisable screen heritage experiences.",
    pods: [
      {
        label: "Matū PurePod near Waitomo and Ōtorohanga",
        href: "/location/matu/?from=culture",
      },
    ],
    distance: "Waikato day trip",
    timing: "guided tours",
    nearbyRegion: " — Waikato region, North Island",
    url: "https://www.hobbitontours.com/",
  },
  {
    image: `${C}akaroa-heritage-house-garden-flowers-banks-peninsula-new-zealand.jpg`,
    alt: "Historic heritage house with colourful garden flowers in Akaroa, Banks Peninsula, New Zealand",
    title: "Akaroa Village",
    description:
      "A harbour village with French heritage, colonial cottages, waterfront cafés and a gentle pace that rewards unhurried wandering through streets layered with history.",
    pods: [{ label: "Pōhue PurePod", href: "/location/pohue" }],
    distance: "Banks Peninsula village",
    timing: "best explored slowly",
    nearbyRegion: " — Banks Peninsula, South Island",
    url: "https://maps.app.goo.gl/5BocPVTijT6WZvsQ8",
  },
  {
    image: `${C}koukourarata-marae-banks-peninsula-maori-meeting-house-cultural-new-zealand.jpg`,
    alt: "Traditional Māori meeting house at Koukourarata Marae Banks Peninsula with carved wood architecture and cultural heritage New Zealand",
    title: "Te Rūnanga o Koukourarata, Tūtehuarewa Marae",
    description:
      "A more intimate cultural connection on Banks Peninsula, centred on local iwi, community, identity and the marae as a place of storytelling and belonging.",
    pods: [{ label: "Pōhue PurePod", href: "/location/pohue" }],
    distance: "Banks Peninsula cultural connection",
    timing: "confirm access before travelling",
    nearbyRegion: " — Banks Peninsula, South Island",
    url: "https://www.facebook.com/koukourarata/",
  },
  {
    image: `${C}new-zealand-maritime-museum-auckland-viaduct-harbour-exterior-waterfront.png`,
    alt: "New Zealand Maritime Museum Auckland Viaduct Harbour waterfront exterior with modern building and maritime heritage attraction",
    title: "New Zealand Maritime Museum",
    description:
      "Discover Aotearoa New Zealand’s relationship with the sea, from Polynesian navigation to modern ocean stories, at the waterfront museum in Auckland.",
    pods: [
      {
        label: "Rewarewa PurePod near Auckland and the Muriwai Coast",
        href: "/location/rewarewa/?from=culture",
      },
    ],
    distance: "Auckland waterfront museum",
    timing: "allow 1–2 hours",
    nearbyRegion: " — Auckland / Muriwai Coast, North Island",
    url: "https://www.maritimemuseum.co.nz/",
  },
];

export const cultureMaoriSlides: ForestSlide[] = [
  {
    image: "/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-house-bay-of-islands-new-zealand.jpg",
    alt: "Māori cultural performance at Waitangi Treaty Grounds Bay of Islands with traditional haka and historic heritage setting New Zealand",
    title: "Waitangi Treaty Grounds",
    placeHref: "https://www.waitangi.org.nz/",
    description:
      "The birthplace of modern New Zealand, where the Treaty of Waitangi was signed. Walk through beautifully preserved grounds, explore interactive museums, and experience powerful Māori cultural performances that bring history to life.",
    ctaLabel: "Mākoha PurePod near Kerikeri and Bay of Islands experiences",
    ctaHref: "/location/makoha/?from=culture",
  },
  {
    image: `${C}te-puia-rotorua-geothermal-geyser-maori-cultural-centre-new-zealand.jpg`,
    alt: "Pōhutu geyser erupting at Te Puia Rotorua geothermal valley with Māori cultural centre and traditional carving school New Zealand",
    title: "Te Puia",
    placeHref: "https://www.tepuia.com/",
    description:
      "A unique place where geothermal wonders and Māori culture come together. Witness the powerful Pōhutu Geyser, visit traditional carving and weaving schools, and learn about living traditions passed down through generations.",
    ctaLabel: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
    ctaHref: "/location/pamu/?from=culture",
  },
  {
    image: `${C}whakarewarewa-living-maori-village-rotorua-geothermal-cultural-new-zealand.jpg`,
    alt: "Māori community performing traditional dance at Whakarewarewa Living Village Rotorua with geothermal landscape New Zealand",
    title: "Whakarewarewa – The Living Māori Village",
    placeHref: "https://whakarewarewa.com/",
    description:
      "Step into a living Māori village where families have lived for generations, using geothermal energy for cooking, bathing, and daily life. A rare opportunity to experience culture not as a show, but as everyday reality.",
    ctaLabel: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
    ctaHref: "/location/pamu/?from=culture",
  },
  {
    image: `${C}te-pa-tu-maori-cultural-experience-rotorua-night-performance-new-zealand.jpg`,
    alt: "Immersive Māori cultural performance at Te Pā Tū Rotorua with haka, storytelling and traditional evening experience in New Zealand",
    title: "Te Pā Tū",
    placeHref: "https://te-pa-tu.com/",
    description:
      "An immersive evening experience combining storytelling, performance, and seasonal cuisine. Set within a forest setting, this is a deeply sensory journey into Māori traditions, identity, and connection to the land.",
    ctaLabel: "Pāmu PurePod near Rotorua culture, hot springs and forest experiences",
    ctaHref: "/location/pamu/?from=culture",
  },
  {
    image: `${C}koukourarata-marae-banks-peninsula-maori-meeting-house-cultural-new-zealand.jpg`,
    alt: "Traditional Māori meeting house at Koukourarata Marae Banks Peninsula with carved wood architecture and cultural heritage New Zealand",
    title: "Te Rūnanga o Koukourarata, Tūtehuarewa Marae",
    placeHref: "https://www.facebook.com/koukourarata/",
    description:
      "A more intimate and authentic cultural connection on Banks Peninsula. Engage with local iwi, learn about traditions, and experience the significance of the marae as a place of community, identity, and storytelling.",
    ctaLabel: "Stay at Pōhue, Banks Peninsula →",
    ctaHref: "/location/pohue",
  },
];

export const cultureHeritageSlides: HikingSlide[] = [
  {
    image: `${C}akaroa-heritage-house-garden-flowers-banks-peninsula-new-zealand.jpg`,
    alt: "Historic heritage house with colourful garden flowers in Akaroa, Banks Peninsula, New Zealand",
    title: "Akaroa",
    placeHref: "https://maps.app.goo.gl/5BocPVTijT6WZvsQ8",
    description:
      "A charming seaside village with a distinct French heritage, where colonial cottages, waterfront cafés and quiet streets create a relaxed, old-world atmosphere. A place to slow down and soak in history by the sea.",
    ctas: [{ label: "Stay at Pōhue, Banks Peninsula →", href: "/location/pohue" }],
  },
  {
    image: `${C}cromwell-heritage-precinct-historic-town-central-otago-new-zealand.jpg`,
    alt: "Cromwell Heritage Precinct historic gold rush town Central Otago New Zealand with vintage buildings and mountain landscape",
    title: "Cromwell Heritage Precinct",
    placeHref: "https://www.cromwellheritageprecinct.co.nz/",
    description:
      "A beautifully restored gold rush town where stone buildings, artisan shops and quiet laneways recreate the spirit of early Central Otago. History feels tangible at every corner.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: `${C}kororipo-heritage-park-kerikeri-river-bay-of-islands-new-zealand.jpg`,
    alt: "Kororipo Heritage Park Kerikeri River Bay of Islands New Zealand with boats, calm water and historic riverside landscape",
    title: "Kororipo Heritage Park",
    placeHref:
      "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/kerikeri-area/kororipo-heritage-park/",
    description:
      "One of New Zealand’s earliest settlement areas, home to the country’s oldest stone building and rich Māori and European history. Set beside the river, it’s a peaceful place layered with stories.",
    ctas: [
      {
        label: "Mākoha PurePod near Kerikeri and Bay of Islands experiences",
        href: "/location/makoha/?from=culture",
      },
    ],
  },
  {
    image: `${C}ohinetahi-gardens-lyttelton-harbour-christchurch-new-zealand-historic-estate.jpg`,
    alt: "Ohinetahi Gardens Lyttelton Harbour Christchurch New Zealand with historic estate, landscaped garden, coastal views and heritage buildings",
    title: "Ohinetahi",
    placeHref: "https://ohinetahi.co.nz/",
    description:
      "A hidden cultural gem combining heritage architecture, sculpture gardens and sweeping coastal views. Thoughtful, artistic and deeply atmospheric.",
    ctas: [{ label: "Stay at Pōhue, Banks Peninsula →", href: "/location/pohue" }],
  },
  {
    image: `${C}athenree-homestead-hauraki-plains-bay-of-plenty-new-zealand-historic-house.jpg`,
    alt: "Athenree Homestead Hauraki Plains Bay of Plenty New Zealand historic colonial house, heritage building, rural landscape and garden setting",
    title: "Athenree Homestead",
    placeHref: "https://www.athenreehomestead.org.nz/",
    description:
      "A beautifully preserved colonial homestead offering a glimpse into early settler life. Surrounded by gardens and coastal calm, it feels quietly removed from modern time.",
    ctas: [
      {
        label: "Ruru PurePod near Mount Karangahake and Waihi",
        href: "/location/ruru/?from=culture",
      },
    ],
  },
];

export const cultureMuseumsSlides: HikingSlide[] = [
  {
    image: `${C}international-antarctic-centre-igloo-experience-christchurch-new-zealand-family-activity.png`,
    alt: "International Antarctic Centre Christchurch New Zealand igloo experience, indoor snow family activity, Antarctic simulation and Hagglund vehicle",
    title: "International Antarctic Centre",
    placeHref: "http://www.iceberg.co.nz/",
    description:
      "An immersive journey into the world of Antarctica, where you can experience icy storms, meet rescued penguins, and explore the extreme environment of the southern continent. Engaging, unexpected and unforgettable.",
    ctas: [{ label: "Stay at Greystone, Waipara →", href: "/location/greystone" }],
  },
  {
    image: `${C}new-zealand-maritime-museum-auckland-viaduct-harbour-exterior-waterfront.png`,
    alt: "New Zealand Maritime Museum Auckland Viaduct Harbour waterfront exterior with modern building and maritime heritage attraction",
    title: "New Zealand Maritime Museum",
    placeHref: "https://www.maritimemuseum.co.nz/",
    description:
      "Discover the deep connection between New Zealand and the sea, from Polynesian navigation to modern exploration. Located on the waterfront, it blends storytelling, history and ocean heritage.",
    ctas: [
      {
        label: "Stay at Rewarewa PurePod on the Muriwai Coast",
        href: "/location/rewarewa/?from=culture",
      },
    ],
  },
  {
    image: `${C}kaikoura-museum-interior-maritime-whaling-exhibits-new-zealand.png`,
    alt: "Kaikōura Museum interior in New Zealand with maritime and whaling history exhibits, anchor artefacts and cultural heritage displays",
    title: "Kaikōura Museum",
    placeHref: "http://www.kaikoura-museum.co.nz/",
    description:
      "A small but rich museum telling the story of Kaikōura’s relationship with the ocean, from whaling history to modern conservation. Personal, local and deeply connected to place.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara/?from=culture" },
      { label: "Stay at Manakau →", href: "/location/manakau/?from=culture" },
    ],
  },
  {
    image: `${C}fyffe-house-kaikoura-historic-whaling-heritage-new-zealand-coastal.png`,
    alt: "Fyffe House Kaikōura New Zealand historic coastal heritage building, former whaling house, colonial architecture and garden setting",
    title: "Fyffe House",
    placeHref: "http://www.fyffehouse.co.nz/",
    description:
      "Set right on the coastline, this historic house built on whale bone foundations offers a unique glimpse into early life in Kaikōura. Raw, coastal and full of character.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara/?from=culture" },
      { label: "Stay at Manakau →", href: "/location/manakau/?from=culture" },
    ],
  },
];

export const cultureIndustrySlides: HikingSlide[] = [
  {
    image: `${C}goldfields-mining-centre-cromwell-gold-rush-central-otago-new-zealand.png`,
    alt: "Goldfields Mining Centre Cromwell Central Otago New Zealand historic gold rush site with gold panning, Kawarau River, mining heritage and rugged landscape",
    title: "Goldfields Mining Centre",
    placeHref: "http://www.goldfieldsmining.co.nz/",
    description:
      "Step into the gold rush era and try your hand at gold panning in a rugged Central Otago landscape. A hands-on experience that brings history to life in a raw and authentic way.",
    ctas: [
      { label: "Stay at Haurapa, Central Otago →", href: "/location/haurapa" },
      { label: "Stay at Tāima, Central Otago →", href: "/location/taima" },
    ],
  },
  {
    image: `${C}goldfields-railway-waihi-karangahake-gorge-heritage-train-waikato-new-zealand.png`,
    alt: "Goldfields Railway Waihi New Zealand heritage train through Karangahake Gorge with scenic countryside, passengers and vintage rail journey",
    title: "Goldfields Railway",
    placeHref: "https://www.waihirail.co.nz/",
    description:
      "A scenic journey aboard a vintage train following historic gold mining routes through lush countryside and river gorges. Slow travel with a strong sense of place and history.",
    ctas: [
      {
        label: "Ruru PurePod near Karangahake Gorge and the Hauraki Rail Trail",
        href: "/location/ruru/?from=culture",
      },
    ],
  },
  {
    image: `${C}mountain-jade-hokitika-pounamu-carving-workshop-west-coast-new-zealand.png`,
    alt: "Mountain Jade Hokitika New Zealand pounamu carving workshop with greenstone artisans, Māori jade craftsmanship and West Coast heritage",
    title: "Mountain Jade",
    placeHref:
      "https://www.mountainjade.co.nz/tours/mountain-jade-highlights-tour?srsltid=AfmBOorU-vdiYM8DlUuJFAldqm1Qh5WyRRqRFJ20IYQE3y7ooYnx2b9L",
    description:
      "Discover the art of carving pounamu (greenstone), a material deeply connected to Māori culture and identity. Watch skilled artisans at work and learn the meaning behind each piece.",
    ctas: [{ label: "Stay at Pāmu, Rotorua →", href: "/location/pamu/?from=culture" }],
  },
  {
    image: null,
    alt: "",
    title: "Waihi Gold Discovery Centre",
    placeHref: "https://www.golddiscoverycentre.co.nz/",
    description:
      "An engaging introduction to the gold mining heritage of Waihi, explaining how the industry shaped both the landscape and local communities. Best paired with a visit to the nearby mine.",
    ctas: [
      {
        label: "Ruru PurePod near Mount Karangahake and Waihi",
        href: "/location/ruru/?from=culture",
      },
    ],
    noVisual: true,
  },
  {
    image: `${C}victoria-battery-mine-tunnel-karangahake-gorge-gold-mining-new-zealand.png`,
    alt: "Victoria Battery mine tunnel Karangahake Gorge New Zealand historic gold mining site with underground tunnel, rusty cart tracks and industrial heritage atmosphere",
    title: "Victoria Battery Tramway & Museum",
    placeHref: "https://www.vbts.org.nz/",
    description:
      "Explore the atmospheric remains of one of the largest gold processing plants in the Southern Hemisphere. Industrial ruins set within nature create a powerful contrast between past and present.",
    ctas: [
      {
        label: "Ruru PurePod near Karangahake Gorge and the Hauraki Rail Trail",
        href: "/location/ruru/?from=culture",
      },
    ],
  },
];

export const cultureFaq: { q: string; a: string }[] = [
  {
    q: "What does this Culture page include?",
    a: "Editorial highlights across Māori living heritage, historic settlements, museums and galleries, and industry or craft stories. Each carousel slide includes an official or authoritative link plus a direct PurePods booking link for a nearby stay where we have a pod in the region.",
  },
  {
    q: "How are places chosen?",
    a: "The list is curated for depth and regional balance. Always confirm opening hours, tours and cultural protocols with each venue before you travel.",
  },
  {
    q: "How do I continue to booking from this page?",
    a: "Each slide includes a link to the suggested pod’s page on this site where available, and the final call to action opens PurePods booking to check availability and complete your stay.",
  },
];
