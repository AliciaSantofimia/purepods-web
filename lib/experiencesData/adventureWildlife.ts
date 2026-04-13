import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";

const B = "/assets/img/experiences/adventure-wildlife/";

export const adventureHero = {
  src: `${B}new-zealand-dolphin-kayak-wildlife-experience-coastal-adventure.png`,
  alt: "Dolphin jumping near a kayak during a wildlife sea kayaking experience in New Zealand",
  objectPosition: "center" as const,
};

export const adventureAboutLeadHtml = `Explore a curated mix of adventure and wildlife experiences across New Zealand, from white water rafting and ziplining to scenic flights, off-road tours and native species encounters. Each experience is paired with a nearby PurePods stay, making it easy to plan a nature-rich escape with memorable activities and direct booking pathways. See all themes on <a href="/experiences"><strong>Experiences</strong></a> and quick answers in the <a href="#faq"><strong>FAQ</strong></a>.`;

export const marineSlides: HikingSlide[] = [
  {
    image: `${B}kaikoura-whale-watch-sperm-whale-coast-new-zealand.jpg`,
    alt: "Sperm whale surfacing off the Kaikōura coast with mountains in New Zealand",
    title: "Whale Watch Kaikōura",
    placeHref: "https://whalewatch.co.nz/kia-ora/",
    description:
      "A boat-based whale watching experience in Kaikōura, known for reliable year-round sightings of sperm whales along with dolphins and seabirds. The tours depart from the coast and provide close-up views of marine wildlife in a unique deep-water environment.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara" },
      { label: "Stay at Manakau →", href: "/location/manakau" },
    ],
    overlayTitle: "Whale Watch Kaikōura",
    overlayLocation: "Kaikōura, New Zealand",
  },
  {
    image: `${B}kaikoura-seal-swim-underwater-marine-wildlife-new-zealand.jpg`,
    alt: "Seal swimming underwater during a Kaikōura marine wildlife experience in New Zealand",
    title: "Seal Swim Kaikōura",
    placeHref: "https://www.sealswimkaikoura.co.nz/",
    description:
      "A guided in-water experience swimming with wild New Zealand fur seals along the Kaikōura coastline. Small groups enter the ocean with experienced guides to observe and interact respectfully with seals in their natural marine environment.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara" },
      { label: "Stay at Manakau →", href: "/location/manakau" },
    ],
    overlayTitle: "Seal Swim Kaikōura",
    overlayLocation: "Kaikōura, New Zealand",
  },
  {
    image: `${B}akaroa-dolphin-swim-hectors-dolphins-ocean-new-zealand.jpg`,
    alt: "Hector's dolphins swimming in the ocean in Akaroa, New Zealand",
    title: "Swimming with Dolphins",
    placeHref: "https://www.akaroaadventurecentre.co.nz/activities",
    description:
      "A guided boat experience in Akaroa Harbour where you can observe or swim alongside Hector's dolphins, one of the world's smallest and rarest dolphin species. The tour focuses on respectful wildlife interaction within a protected coastal environment.",
    ctas: [{ label: "Stay at Pōhue →", href: "/location/pohue" }],
    overlayTitle: "Swimming with Dolphins",
    overlayLocation: "Akaroa, New Zealand",
  },
  {
    image: `${B}pohatu-penguins-akaroa-wildlife-sanctuary-new-zealand.jpg`,
    alt: "Little blue penguins at Pohatu wildlife sanctuary in Akaroa, New Zealand",
    title: "Pōhatu Penguins / Plunge NZ",
    placeHref: "https://www.pohatu.co.nz/",
    description:
      "A guided wildlife experience focused on the conservation of little blue penguins in the Pōhatu Marine Reserve, near Akaroa. Tours include access to private farmland and coastal habitats, with opportunities to observe penguins, seabirds and native landscape in a protected environment.",
    ctas: [{ label: "Stay at Pōhue →", href: "/location/pohue" }],
    overlayTitle: "Pōhatu Penguins / Plunge NZ",
    overlayLocation: "Akaroa, New Zealand",
  },
  {
    image: `${B}auckland-whale-dolphin-safari-boat-marine-wildlife-new-zealand.jpg`,
    alt: "Auckland Whale and Dolphin Safari boat observing marine wildlife in the Hauraki Gulf, New Zealand",
    title: "Auckland Whale & Dolphin Safari",
    placeHref: "https://www.aucklandwhaleanddolphinsafari.co.nz/",
    description:
      "A marine wildlife cruise departing from central Auckland, offering the chance to spot dolphins, whales and seabirds in the Hauraki Gulf Marine Park. The experience combines coastal scenery with expert-led interpretation of the region's diverse marine ecosystem.",
    ctas: [{ label: "Stay at Rewarewa →", href: "/location/rewarewa" }],
    overlayTitle: "Auckland Whale & Dolphin Safari",
    overlayLocation: "Auckland, New Zealand",
  },
];

export const natureSlides: HikingSlide[] = [
  {
    image: `${B}bay-of-islands-sea-kayaking-moana-kayaks-coastal-new-zealand.jpg`,
    alt: "Colorful kayaks on the beach in the Bay of Islands before a sea kayaking experience in New Zealand",
    title: "Moana Kayaks – Bay of Islands",
    placeHref: "https://www.moanakayaks.nz",
    description:
      "A guided sea kayaking experience in the Bay of Islands, exploring sheltered waters, coastal inlets and small islands. The tours combine paddling with local knowledge of the marine environment, offering a slower way to experience the coastline.",
    ctas: [{ label: "Stay at Mākoha →", href: "/location/makoha" }],
    overlayTitle: "Moana Kayaks – Bay of Islands",
    overlayLocation: "Bay of Islands, New Zealand",
  },
  {
    image: `${B}kapiti-island-day-trip-new-zealand-boat-transfer-nature-reserve.jpg`,
    alt: "Boat transfer to Kapiti Island nature reserve in New Zealand for a guided day trip experience",
    title: "Kapiti Island – Day trip",
    placeHref: "https://www.kapitiisland.com/",
    description:
      "A guided day trip to Kapiti Island, a protected nature reserve known for native birdlife and conservation. Access is managed and visitor numbers are limited, allowing close encounters with species such as kākā, tīeke and kererū in a predator-free environment.",
    ctas: [{ label: "Stay at Kokomea →", href: "/location/kokomea" }],
    overlayTitle: "Kapiti Island – Day trip",
    overlayLocation: "Kāpiti Island, New Zealand",
  },
  {
    image: `${B}wingspan-national-bird-of-prey-centre-karearea-falcon-new-zealand.jpg`,
    alt: "Girl holding a kārearea New Zealand falcon at Wingspan National Bird of Prey Centre in Rotorua New Zealand",
    title: "Wingspan National Bird of Prey Centre",
    placeHref: "https://www.wingspan.co.nz/",
    description:
      "A conservation-focused experience dedicated to New Zealand’s birds of prey, including the kārearea (native falcon). Visits include guided encounters and educational insights into rehabilitation and breeding programmes within a natural forest setting.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
    overlayTitle: "Wingspan National Bird of Prey Centre",
    overlayLocation: "Rotorua, New Zealand",
  },
];

export const adrenalineSlides: HikingSlide[] = [
  {
    image: `${B}kaituna-cascades-rafting-rotorua-new-zealand-waterfall-rafting.jpg`,
    alt: "White water rafting at Kaituna Cascades in Rotorua New Zealand going over the highest commercially rafted waterfall surrounded by native forest",
    title: "Kaituna Cascades - Rafting",
    placeHref: "https://kaitunacascades.co.nz/",
    description:
      "A guided white water rafting experience on the Kaituna River near Rotorua, known for the Tutea Falls, the highest commercially rafted waterfall in the world. The route combines fast-moving rapids with native forest scenery and expert-led navigation.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
    overlayTitle: "Kaituna Cascades - Rafting",
    overlayLocation: "Rotorua, New Zealand",
  },
  {
    image: `${B}okere-zipline-rotorua-new-zealand-kaituna-river-forest-zipline.jpg`,
    alt: "Zipline experience over the Kaituna River in Okere Falls Rotorua New Zealand surrounded by native forest",
    title: "Rotorua Ziplines",
    placeHref: "https://www.rotoruaziplines.nz/",
    description:
      "A guided zipline experience through native forest near Rotorua, combining suspended lines, elevated platforms and ecological restoration insights. The tour moves above and through the canopy, offering a fast-paced but controlled way to experience the landscape.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
    overlayTitle: "Rotorua Ziplines",
    overlayLocation: "Rotorua, New Zealand",
  },
  {
    image: `${B}off-road-4x4-adventure-rotorua-new-zealand-forest-trail-jeep.jpg`,
    alt: "Guided 4x4 off road experience in Rotorua New Zealand driving through native forest terrain",
    title: "Off Road NZ (4x4 / motor adventures)",
    placeHref: "https://offroadnz.co.nz/",
    description:
      "A motor-based adventure experience in Rotorua featuring guided 4x4 tracks, off-road driving and high-adrenaline activities. The courses are designed to navigate steep terrain, mud and obstacles, offering a controlled but intense outdoor driving experience.",
    ctas: [{ label: "Stay at Pāmu →", href: "/location/pamu" }],
    overlayTitle: "Off Road NZ (4x4 / motor adventures)",
    overlayLocation: "Rotorua, New Zealand",
  },
  {
    image: `${B}skydive-auckland-tandem-skydiving-new-zealand-coastal-rural-views.jpg`,
    alt: "Tandem skydive with Skydive Auckland over coastal and rural landscapes in New Zealand with panoramic views",
    title: "Skydive Auckland",
    placeHref: "https://skydiveauckland.com/",
    description:
      "A tandem skydiving experience departing from Auckland, offering freefall over coastal and rural landscapes before a parachute descent with wide views across the region. The jump is guided by experienced instructors and designed for first-time and returning participants.",
    ctas: [{ label: "Stay at Rewarewa →", href: "/location/rewarewa" }],
    overlayTitle: "Skydive Auckland",
    overlayLocation: "Auckland, New Zealand",
  },
  {
    image: `${B}kaikoura-scenic-flight-whale-view-air-kaikoura-new-zealand-aerial.jpg`,
    alt: "Scenic flight experience with Air Kaikōura viewing a whale from above along the Kaikōura coastline New Zealand",
    title: "Air Kaikōura (Scenic flights)",
    placeHref: "https://www.airkaikoura.co.nz/",
    description:
      "A scenic flight experience over Kaikōura, offering aerial views of the coastline, mountain ranges and marine environment. Flights provide a different perspective on the region's geography, with opportunities to observe whales and coastal features from above.",
    ctas: [
      { label: "Stay at Kahutara →", href: "/location/kahutara" },
      { label: "Stay at Manakau →", href: "/location/manakau" },
    ],
    overlayTitle: "Air Kaikōura (Scenic flights)",
    overlayLocation: "Kaikōura, New Zealand",
  },
];

export const adventureFaq: { q: string; a: string }[] = [
  {
    q: "What does this Adventure & Wildlife page include?",
    a: "This draft page groups outdoor and wildlife-oriented experience blocks with a visual placeholder, a short practical description, an external reference link and a PurePods booking pathway.",
  },
  {
    q: "Are these final destinations and wildlife operators?",
    a: "No. This version uses replaceable placeholders so final routes, operators and regional pairings can be added once they are confirmed.",
  },
  {
    q: "How do I continue to booking from this page?",
    a: "Each block links to the suggested pod’s detail page on this site (`/location/...`), and the main call to action opens PurePods booking to check live availability and site details.",
  },
];
