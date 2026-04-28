import type { Metadata } from "next";
import { heroFrameFor } from "@/lib/locationPods/heroReference";
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
import styles from "@/app/location/locationLayout.module.css";

/* Hananui images — assets/img/hananui */
const heroImage = "/assets/img/hananui/hananui-purepod-exterior-forest-view-stewart-island.jpg";
const podAerial = "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg";
const podUnderStars = `/assets/img/hananui/${encodeURIComponent(
  "PurePod Hananui outdoor deck with ocean views and private seating New Zealand.jpg",
)}`;
const podSeaView = "/assets/img/hananui/hananui-purepod-sea-view-glass-pod-stewart-island.jpg";
const expUlva = "/assets/img/hananui/stewart-island-native-bird-wildlife.jpg";
const expMason = "/assets/img/hananui/stewart-island-tokoeka-kiwi-wildlife.jpg";
const expPaterson = "/assets/img/hananui/stewart-island-yellow-eyed-penguin-wildlife.jpg";
const travelAerial = "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg";
const travelExterior =
  "/assets/img/hananui/hananui-purepod-dining-experience-ocean-view-stewart-island-new-zealand.jpg";
const travelJourneyRight =
  "/assets/img/hananui/hananui-purepod-walking-path-native-bush-stewart-island-new-zealand.jpg";
const travelFood = "/assets/img/hananui/hananui-local-food-platter-stewart-island.jpg";

const CANONICAL_URL = "https://purepods.com/location/hananui/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/hananui/hananui-purepod-exterior-forest-view-stewart-island.jpg";

const HANANUI_BOOKING_URL = "https://purepods.com/booking/?force_site_id=12";

const META_DESCRIPTION =
  "PurePod Hananui: secluded retreat above Lee Bay on Stewart Island. Predator-free sanctuary, forest stillness and ocean views. Travel by flight or ferry, then a short walk through the predator-proof fence.";

const SEO_TITLE_ABSOLUTE =
  "Hananui PurePod | Lee Bay, Stewart Island, New Zealand";

const JOURNEY_BODY =
  "Travel by flight or ferry to Stewart Island, then continue to Mamaku Point Conservation Reserve. A short 350-metre walk leads you through the predator-proof fence and into deep natural quiet. Reach Hananui by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Hananui?",
    answer: JOURNEY_BODY,
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "A short 350-metre walk leads you through the predator-proof fence and into deep natural quiet. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Bring your own supplies or pre-order a breakfast and dinner hamper featuring locally sourced Southland produce. Meals are simple and generous, perfect for relaxed evenings and slow mornings at the pod.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

function hananuiStructuredData() {
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
        name: "PurePod Hananui",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stewart Island",
          addressRegion: "Southland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin above Lee Bay within a predator-free sanctuary",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Native forest and ocean views",
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

export const podMetadata: Metadata = {
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
        alt: "PurePod Hananui glass cabin with native forest and ocean outlook above Lee Bay, Stewart Island, New Zealand",
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

export function PodView() {
  return (
    <>
      <JsonLd data={hananuiStructuredData()} />
      <LightboxProvider>
        <LocationHero
          {...heroFrameFor("hananui")}
          title="Stewart Island, Hananui"
          subtitle={
            <>
              <p>A secluded sanctuary above the sea</p>
              <p>
                PurePod Hananui is a secluded retreat into Stewart Island&apos;s
                wild calm. Set within a predator-free sanctuary, it offers
                forest stillness, ocean views and a rare sense of true
                isolation.
              </p>
              <p>
                By night, stars, birdsong and the chance to spot kiwi define the
                experience.
              </p>
            </>
          }
          imageSrc={heroImage}
          imageAlt="PurePod Hananui glass cabin with native forest and ocean outlook above Lee Bay, Stewart Island, New Zealand"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            galleryVariant="podTextBottom"
            title="The experience of the Pod — Hananui"
            hint="The essentials, no fluff"
            paragraphs={[
              "Set above Lee Bay, the pod is surrounded by native forest, birdsong and wide ocean views.",
              "At night, stars and the chance of kiwi create a rare, intimate connection with the wild.",
            ]}
            gallery={[
              {
                src: podAerial,
                alt: "Aerial view of Hananui PurePod above Lee Bay and native forest on Stewart Island, New Zealand",
                position: "50% 50%",
                big: true,
              },
              {
                src: podUnderStars,
                alt: "PurePod Hananui outdoor deck with ocean views and private seating, Stewart Island, New Zealand",
                position: "center 52%",
                fillGap: true,
              },
              {
                src: podSeaView,
                alt: "PurePod Hananui glass cabin with ocean views on Stewart Island, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="At night, stars and the chance of kiwi create a rare, intimate connection with the wild."
          />
          <ExperiencesSection
            title="The experiences that define Hananui"
            hint="Stewart Island · native forest & island wildlife · South Island"
            intro="Ulva Island, Mason Bay and Paterson Inlet."
            experiences={[
              {
                title: "Ulva Island — Predator-Free Sanctuary",
                image: expUlva,
                imageAlt:
                  "Native birdlife in forest on Stewart Island, New Zealand",
                paragraphs: [
                  "A world-class wildlife sanctuary where native birds thrive in a completely predator-free environment. Ancient forest, close encounters and the rare feeling of walking among New Zealand's most iconic birdlife.",
                  "Why it's special: rare native birds (tīeke, kākāriki, mōhua) + pristine forest + close wildlife encounters",
                ],
                links: [
                  {
                    label: "Explore Ulva Island Guided Walks",
                    href: "https://www.ulva.co.nz/",
                  },
                ],
              },
              {
                title: "Mason Bay — Wild West Coast",
                image: expMason,
                imageAlt:
                  "Coastal landscape and open sea from above, Stewart Island, New Zealand",
                paragraphs: [
                  "A vast, remote beach on Stewart Island's wild west coast, shaped by dunes, ocean swells and powerful isolation. One of the best places on the island to experience true wilderness.",
                  "Why it's special: wild beaches + dunes + chance to spot kiwi + seals & sea lions + extreme isolation",
                ],
                links: [
                  {
                    label: "Explore Mason Bay Stewart Island Discovery Expeditions",
                    href: "https://www.realnz.com/en/experiences/expedition-cruises/stewart-island-discovery-expeditions/",
                  },
                  {
                    label: "Rakiura Charters — all tours",
                    href: "https://www.rakiuracharters.co.nz/category/all-tours/",
                  },
                ],
              },
              {
                title: "Paterson Inlet — Cruise or Kayak",
                image: expPaterson,
                imagePosition: "40% 34%",
                imageAlt:
                  "Yellow-eyed penguin and coastal wildlife near Paterson Inlet, Stewart Island, New Zealand",
                paragraphs: [
                  "Sheltered waters ideal for exploring Stewart Island by boat or kayak. Cruising Paterson Inlet reveals quiet bays, small islands and rich marine life in one of the island's most peaceful settings.",
                  "Why it's special: dolphins + little blue penguins + seals + seabirds + sheltered waters",
                ],
                links: [
                  {
                    label: "Explore Paterson Inlet Discovery Cruise",
                    href: "https://www.rakiuracharters.co.nz/paterson-inlet-discovery-cruise/",
                  },
                ],
              },
            ]}
          />
          <TravelSection
            title="Know before you go"
            hint="Practical details, without losing the mood"
            cards={[
              {
                type: "withImages",
                title: "The Journey",
                images: [
                  {
                    src: travelAerial,
                    alt: "Aerial view of Hananui PurePod at Mamaku Point Conservation Reserve, Stewart Island, New Zealand",
                  },
                  {
                    src: travelJourneyRight,
                    alt: "Hananui PurePod exterior with forest and ocean outlook, Stewart Island, New Zealand",
                  },
                ],
                body: JOURNEY_BODY,
              },
              {
                type: "withImages",
                title: "The Food",
                images: [
                  {
                    src: travelFood,
                    alt: "Local food platter with Southland produce at Hananui PurePod, Stewart Island, New Zealand",
                  },
                  {
                    src: travelExterior,
                    alt: "Hananui PurePod with forest and ocean views, Stewart Island, New Zealand",
                  },
                ],
                body: "Bring your own supplies or pre-order a breakfast and dinner hamper featuring locally sourced Southland produce. Meals are simple and generous, perfect for relaxed evenings and slow mornings at the pod.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $890.00 — / night"
            bookHref={HANANUI_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
