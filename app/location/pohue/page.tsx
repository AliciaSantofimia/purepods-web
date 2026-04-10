import type { Metadata } from "next";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationHero,
  PodSection,
  ExperiencesSection,
  TravelSection,
  LocationCta,
  LocationFaqSection,
  type LocationFaqItem,
} from "@/components/location";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

/* Pōhue images — from assets/img/pohue */
const heroImage = "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";
const podCoastalHills = "/assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg";
const podBedroom = "/assets/img/pohue/pohue-purepod-bedroom-view-coastal-landscape-new-zealand.png";
const podGlassCabin = "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";
const podHistoricCottage = "/assets/img/pohue/pohue-historic-cottage-wisteria-north-canterbury-new-zealand.jpg";
const expPenguins = "/assets/img/pohue/pohue-blue-penguins-wildlife-new-zealand.jpg";
const expVolcanicHills = "/assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg";
const expOhinetahi = "/assets/img/pohue/pohue-greystone-gardens-north-canterbury-new-zealand.jpg";
const travelAccess = "/assets/img/pohue/pohue-purepod-access-gate-coastal-track-new-zealand.jpeg";
const travelGlassCabin = "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";
const travelFood = "/assets/img/pohue/pohue-local-produce-food-basket-new-zealand.jpg";
const travelView = "/assets/img/pohue/pohue-coastal-hills-cabin-view-new-zealand.jpg";

const CANONICAL_URL = "https://purepods.com/location/pohue/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";

const POHUE_BOOKING_URL = "https://purepods.com/booking/?force_site_id=4";

/** ~150 characters — meta description (docs/html-reference.md §2). */
const META_DESCRIPTION =
  "PurePod Pōhue: glass cabin for two above Port Levy, Banks Peninsula. Access: 1.2 km uphill walk, 20–25 min. Harbour views; private; no shared spaces.";

const SEO_TITLE_ABSOLUTE =
  "Pōhue PurePod | Glass Cabin Above Port Levy, Banks Peninsula, New Zealand";

/**
 * Impact summary after H1 — 40–60 words, factual (docs/html-reference.md §8.1 / §8.6).
 */
const IMPACT_SUMMARY =
  "PurePod Pōhue is a private glass cabin for two set high above Port Levy on Banks Peninsula, Canterbury, New Zealand. Guests reach the pod on foot via a 1.2 km uphill track (about 20–25 minutes). The site offers wide views of the harbour, volcanic hills and coast, with no neighbours or shared facilities.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Pōhue?",
    answer:
      "PurePod Pōhue is around 40 km from Christchurch (approximately one hour by car). The final access is on foot: a 1.2 km uphill walk, usually about 20–25 minutes.",
  },
  {
    question: "How long is the walk to the pod?",
    answer:
      "The track is about 1.2 km uphill and takes roughly 20–25 minutes. It is part of how the site stays private and quiet.",
  },
  {
    question: "What is the weather usually like at Pōhue?",
    answer:
      "Banks Peninsula conditions can change quickly. Evenings are often cooler and coastal winds are common; layered clothing is recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "You may bring your own supplies or pre-order a breakfast and dinner hamper when you book. Meals are intended to be enjoyed slowly at the pod with views over Port Levy.",
  },
  {
    question: "How many people can stay?",
    answer:
      "PurePod Pōhue is designed for two guests. There are no shared spaces with other visitors.",
  },
];

function pohueStructuredData() {
  const faqEntities = FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        name: SEO_TITLE_ABSOLUTE,
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        inLanguage: "en-NZ",
        isPartOf: {
          "@type": "WebSite",
          name: "PurePods",
          url: "https://purepods.com",
        },
        about: { "@id": `${CANONICAL_URL}#lodging` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE_URL,
        },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${CANONICAL_URL}#lodging`,
        name: "PurePod Pōhue",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Port Levy",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass eco-cabin with panoramic views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "No shared spaces or neighbouring guests",
            value: true,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE_ABSOLUTE },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: SEO_TITLE_ABSOLUTE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    locale: "en_NZ",
    images: [
      {
        url: OG_IMAGE_URL,
        alt: "Pōhue PurePod glass cabin above coastal hills with views toward Port Levy and Banks Peninsula, New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PUREPODS",
    title: SEO_TITLE_ABSOLUTE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function PōhuePage() {
  return (
    <>
      <JsonLd data={pohueStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Banks Peninsula, Pōhue"
          subtitle={IMPACT_SUMMARY}
          imageSrc={heroImage}
          imageAlt="Pōhue PurePod glass cabin above coastal hills with views toward Port Levy and Banks Peninsula, New Zealand"
          imagePosition="50% 75%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The experience of the Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "A secluded escape overlooking Port Levy. PurePod Pōhue is defined by elevation, space and deep quiet, set high above Port Levy with wide views across volcanic hills, native bush and the ocean. It's a place shaped by changing light, birdsong and open horizons — a peaceful setting to disconnect and experience Banks Peninsula at its most untouched.",
              "A 1.2 km uphill walk (20–25 minutes) leads to the pod, creating privacy and a true sense of arrival. As the track climbs, views open over Port Levy.",
              "With no neighbours or shared spaces, the pod feels fully immersed in bush, hills and sky. Designed for two, it offers a simple, comfortable place to rest and slow down.",
            ]}
            gallery={[
              {
                src: podCoastalHills,
                alt: "Wide coastal and hillside views from Pōhue PurePod above Port Levy on Banks Peninsula, New Zealand",
                position: "50% 60%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom in Pōhue PurePod with panoramic coastal landscape and harbour outlook in North Canterbury, New Zealand",
                position: "50% 58%",
                fillGap: true,
              },
              {
                src: podGlassCabin,
                alt: "Pōhue PurePod glass cabin set among coastal hills and native bush on Banks Peninsula, New Zealand",
                position: "50% 70%",
              },
              {
                src: podHistoricCottage,
                alt: "Historic North Canterbury cottage with wisteria near the Pōhue PurePod approach, Banks Peninsula region, New Zealand",
                position: "50% 55%",
              },
            ]}
            galleryCaption="PurePod Pōhue sits high above Port Levy with no neighbours and no shared spaces — only native bush, volcanic hills and open sky. The uphill walk completes the sense of arrival; inside, everything is calm and paired back for two, with shifting light and wide horizons over land and sea."
          />
          <ExperiencesSection
            title="Experiences that define Pōhue"
            hint="Harbour life, volcanic scale and sculpted gardens"
            intro="A curated selection of three experiences that capture the essence of this place — French-founded Akaroa, the peninsula's most expansive summit views and one of Canterbury's great gardens."
            experiences={[
              {
                title: "Akaroa — The Heart of Banks Peninsula",
                image: expPenguins,
                imageAlt:
                  "Little blue penguin wildlife along the Banks Peninsula coast near Akaroa, New Zealand",
                paragraphs: [
                  "Akaroa blends French heritage and harbour life with standout marine wildlife. From dolphin cruises to experiences like Ecoseaker and conservation-led encounters with little blue penguins, it offers a distinctive way to experience Banks Peninsula.",
                  "Why it's special: French heritage + harbour village + dolphins + little blue penguins + scenic harbour.",
                ],
                links: [
                  {
                    label: "Explore Akaroa",
                    href: "https://www.akaroa.com/",
                  },
                  {
                    label: "Explore Pōhatu Penguins (Plunge NZ Ltd)",
                    href: "https://www.pohatu.co.nz/",
                  },
                  {
                    label: "Explore Akaroa Dolphins",
                    href: "https://www.akaroadolphins.co.nz/",
                  },
                ],
              },
              {
                title: "Te Ahu Pātiki / Mount Herbert — The Scale",
                image: expVolcanicHills,
                imageAlt:
                  "Volcanic coastal hills and ridgelines above Port Levy from Pōhue PurePod on Banks Peninsula, New Zealand",
                paragraphs: [
                  "Te Ahu Pātiki (Mount Herbert) offers Banks Peninsula's most powerful sense of scale. From the summit, you stand on the rim of two collapsed volcanoes, with sweeping views across the natural harbours.",
                  "It's a rare perspective that reveals the peninsula's dramatic volcanic landscape.",
                  "Why it's special: volcanic landscapes + summit views + dramatic scale + unique perspective.",
                ],
                links: [
                  {
                    label: "Explore Te Ahu Pātiki / Mount Herbert",
                    href: "https://doc.govt.nz/parks-and-recreation/places-to-go/christchurch-canterbury/places/banks-peninsula/places/herbert-and-pukerewa-reserves/things-to-do/te-ahu-patiki-mount-herbert-track/",
                  },
                ],
              },
              {
                title: "Ohinetahi Gardens — The Aesthetic",
                image: expOhinetahi,
                imageAlt:
                  "Refined garden paths, stonework and sculpture at Ohinetahi above Governors Bay, Canterbury, New Zealand",
                paragraphs: [
                  "Ohinetahi Gardens showcases Canterbury's refined, artistic side. One of the Southern Hemisphere's most significant gardens, it blends sculpture, stone architecture and exceptional landscape design.",
                  "Set above Governors Bay, it offers an elegant mix of art, nature and harbour views.",
                  "Why it's special: world-class gardens + contemporary sculpture + stone architecture + harbour views.",
                ],
                links: [
                  {
                    label: "Explore Ohinetahi Gardens",
                    href: "https://www.ohinetahi.co.nz/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Banks Peninsula"
            extraParagraphs={[
              "Beyond the pod, harbours and ridgelines unfold at a gentle pace — coastal roads, quiet bays and light moving across the volcanic landscape.",
            ]}
          />
          <TravelSection
            title="Before you travel"
            hint="Practical details, without losing the mood"
            cards={[
              {
                type: "withImages",
                title: "The Journey",
                images: [
                  {
                    src: travelAccess,
                    alt: "Coastal access track and gate along the walk toward Pōhue PurePod on Banks Peninsula, New Zealand",
                  },
                  {
                    src: travelGlassCabin,
                    alt: "Pōhue PurePod glass cabin awaiting at the end of the arrival walk above Port Levy, New Zealand",
                  },
                ],
                body: "PurePod Pōhue is located around 40 km from Christchurch (approximately 1 hour). The final part of the journey includes a 1.2 km uphill walk, taking around 20–25 minutes.",
              },
              {
                type: "plain",
                title: "The Weather",
                body: "Banks Peninsula conditions can change quickly. Expect cooler evenings and coastal winds — layers are recommended year-round.",
              },
              {
                type: "withImages",
                title: "The Food",
                images: [
                  {
                    src: travelFood,
                    alt: "Local produce and hamper-style ingredients for meals at Pōhue PurePod on Banks Peninsula, New Zealand",
                  },
                  {
                    src: travelView,
                    alt: "Coastal outlook over Port Levy from Pōhue PurePod for slow meals above Banks Peninsula, New Zealand",
                  },
                ],
                body: "You can bring your own supplies or pre-order a breakfast and dinner hamper when booking. Meals are designed to be enjoyed slowly at the pod, with views over Port Levy.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $890.00 — / night"
            bookHref={POHUE_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
