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

/* Tokoeka images — assets/img/tokoeka */
const heroImage = "/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg";
const podAerial = "/assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg";
const podBedroom = `/assets/img/tokoeka/${encodeURIComponent(
  "PurePod Tokoeka glass cabin deck with ocean views and native forest New Zealand.jpg",
)}`;
const podAstro = `/assets/img/tokoeka/${encodeURIComponent(
  "PurePod Tokoeka glass cabin bedroom with ocean sunset view New Zealand.jpg",
)}`;
const expUlva = "/assets/img/tokoeka/stewart-island-native-bird-wildlife.jpg";
const expMason = "/assets/img/tokoeka/stewart-island-tokoeka-kiwi-wildlife..jpg";
const expPaterson = "/assets/img/tokoeka/stewart-island-yellow-eyed-penguin-wildlife.jpg";
const travelAerial = "/assets/img/tokoeka/tokoeka-purepod-forest-walkway-sign.jpg";
const travelForest = "/assets/img/tokoeka/stewart-island-coastal-forest-landscape.jpg";
const travelFood = "/assets/img/tokoeka/tokoeka-local-food-platter-stewart-island..jpg";
const travelBedroom = "/assets/img/tokoeka/tokoeka-purepod-gourmet-food-platter.jpg";

const CANONICAL_URL = "https://purepods.com/location/tokoeka/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg";

const TOKOEKA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=11";

const META_DESCRIPTION =
  "PurePod Tokoeka: glass cabin for two in a predator-free eco-sanctuary on Stewart Island. Flight from Invercargill or ferry from Bluff; final walk through the predator-proof fence. Native forest, birdsong and stars.";

const SEO_TITLE_ABSOLUTE =
  "Tokoeka PurePod | Stewart Island Eco-Sanctuary, New Zealand";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Tokoeka?",
    answer:
      "Reach Tokoeka by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The final walk is about 380 metres and takes roughly five to ten minutes, including passing through the predator-proof fence into the sanctuary.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Stewart Island has a cool, changeable coastal climate. Rain and cooler temperatures are common, so waterproof clothing is recommended year-round.",
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

function tokoekaStructuredData() {
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
        name: "PurePod Tokoeka",
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
            name: "Private glass cabin within Mamaku Point predator-free eco-sanctuary",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Native forest setting with wildlife and night-sky outlook",
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
        alt: "PurePod Tokoeka glass cabin at sunset in native forest on Stewart Island, New Zealand",
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
      <JsonLd data={tokoekaStructuredData()} />
      <LightboxProvider>
        <LocationHero
          {...heroFrameFor("tokoeka")}
          title="Stewart Island, Tokoeka"
          subtitle={
            <>
              <p>Stewart Island · native forest &amp; island wildlife · South Island</p>
              <p>A hidden sanctuary in New Zealand&apos;s far south</p>
              <p>
                PurePod Tokoeka is a complete immersion into New Zealand&apos;s
                wildest nature. Set within a predator-free eco-sanctuary and
                surrounded by native forest and wildlife, this is a place of deep
                silence, birdsong, stars and the rare chance to see kiwi in the
                wild.
              </p>
            </>
          }
          imageSrc={heroImage}
          imageAlt="PurePod Tokoeka glass cabin at sunset in native forest on Stewart Island, New Zealand"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            galleryVariant="podTextBottom"
            title="The experience of the Pod — Tokoeka"
            hint="The essentials, no fluff"
            paragraphs={[
              "Surrounded by native forest, the pod feels completely secluded, with birdsong, forest views and a deep connection to nature.",
              "At night, special red lighting offers the rare opportunity to spot kiwi directly from the pod.",
            ]}
            gallery={[
              {
                src: podAerial,
                alt: "Aerial view of Tokoeka PurePod set in native forest on Stewart Island, New Zealand",
                position: "50% 50%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Tokoeka PurePod glass cabin deck with ocean views and native forest, Stewart Island, New Zealand",
                position: "50% 52%",
                fillGap: true,
              },
              {
                src: podAstro,
                alt: "Tokoeka PurePod glass cabin bedroom with ocean sunset view, Stewart Island, New Zealand",
                position: "50% 48%",
              },
            ]}
            galleryCaption="At night, special red lighting offers the rare opportunity to spot kiwi directly from the pod."
          />
          <ExperiencesSection
            title="The experiences that define Tokoeka"
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
                  "Coastal forest and wild landscape on Stewart Island, New Zealand",
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
                    alt: "Aerial view of Tokoeka PurePod in native forest at Mamaku Point Conservation Reserve, Stewart Island, New Zealand",
                  },
                  {
                    src: travelForest,
                    alt: "Native coastal forest on Stewart Island, New Zealand",
                  },
                ],
                body: "Reach Tokoeka by a 15-minute flight from Invercargill or a 60-minute ferry from Bluff, followed by a short transfer to Mamaku Point Conservation Reserve. A final 380-metre nature walk (5–10 minutes) takes you through the predator-proof fence and into the sanctuary.",
              },
              {
                type: "plain",
                title: "The Weather",
                body: "Stewart Island has a cool, changeable coastal climate. Rain and cooler temperatures are common, so waterproof clothing is recommended year-round.",
              },
              {
                type: "withImages",
                title: "The Food",
                images: [
                  {
                    src: travelFood,
                    alt: "Local food platter with Southland produce at Tokoeka PurePod, Stewart Island, New Zealand",
                  },
                  {
                    src: travelBedroom,
                    alt: "Tokoeka PurePod bedroom with ocean view for relaxed mornings and evenings, Stewart Island, New Zealand",
                  },
                ],
                body: "Bring your own supplies or pre-order a breakfast and dinner hamper featuring locally sourced Southland produce. Meals are simple and generous, perfect for relaxed evenings and slow mornings at the pod.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $890.00 — / night"
            bookHref={TOKOEKA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
