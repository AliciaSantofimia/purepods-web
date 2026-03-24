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

import heroImage from "@/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg";
import podNight from "@/assets/img/makoha/makoha-purepod-glass-cabin-exterior-night-kerikeri.jpg";
import podBedroom from "@/assets/img/makoha/makoha-purepod-bedroom-interior-glass-cabin-kerikeri.jpg";
import podLandscape from "@/assets/img/makoha/makoha-purepod-native-forest-landscape-kerikeri.jpg";
import expBoat from "@/assets/img/makoha/bay-of-islands-boat-cruise-aerial.jpg";
import expWaitangi from "@/assets/img/makoha/waitangi-treaty-grounds-maori-meeting-hous.jpg";
import expMahinepua from "@/assets/img/makoha/mahinepua-peninsula-coastal-walk-bay-of-islands.jpg";
import travelForest from "@/assets/img/makoha/kerikeri-native-forest-walking-track.jpg";
import travelBridge from "@/assets/img/makoha/kerikeri-native-forest-bridge-walking-track.jpg";
import travelPlatter from "@/assets/img/makoha/makoha-local-food-platter-kerikeri.jpg";
import travelDinner from "@/assets/img/makoha/makoha-dinner-outdoor-dining-kerikeri.jpg";

const CANONICAL_URL = "https://purepods.com/location/makoha/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg";

const MAKOHA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=14";

const META_DESCRIPTION =
  "PurePod Mākōha: glass cabin for two near Kerikeri, Bay of Islands, Northland. Final access: 5–10 min walk in native forest. Private site; self-contained stay with local meals.";

const SEO_TITLE_ABSOLUTE =
  "Mākōha PurePod | Glass Cabin, Kerikeri / Bay of Islands, New Zealand";

/** Factual lead for GEO; existing hero line kept verbatim below. */
const HERO_GEO =
  "PurePod Mākōha is a private glass cabin for two near Kerikeri in the Bay of Islands, Northland, New Zealand. Guests complete arrival with a 5–10 minute walk through native forest; suitable footwear is recommended. The site is fully private with no neighbours, set in subtropical forest with the coast and islands within reach.";

const HERO_EXISTING =
  "A private, quiet retreat for two, where you can slow down and discover the wilder side of the north — no big towns, no crowds, just nature. Native forest, coastal walks and some of the clearest night skies you will find.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Mākōha?",
    answer:
      "The final part of your journey follows quiet rural roads and ends with a 5–10 minute walk through native forest. This last stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "Your arrival ends with a gentle 5–10 minute walk through native forest, where the sound of roads and towns fades away. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Bay of Islands has a subtropical climate — warm and humid in summer, cooler and sometimes rainy in winter. Rain is part of the landscape here, deepening the lush, green, almost jungle-like character of the place.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Northland producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the views. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable, easy and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "Designed for two, it is a place to stop, disconnect and experience the Bay of Islands at its most pure. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
  },
];

function makohaStructuredData() {
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
        name: "PurePod Mākōha",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kerikeri",
          addressRegion: "Northland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in native forest near the Bay of Islands",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walk-in access via native forest track (about 5–10 minutes)",
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
        alt: "Mākōha PurePod glass cabin in native forest near Kerikeri, Bay of Islands, New Zealand",
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

export default function MakohaPage() {
  return (
    <>
      <JsonLd data={makohaStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Mākōha"
          subtitle={
            <>
              <p>{HERO_GEO}</p>
              <p>{HERO_EXISTING}</p>
            </>
          }
          imageSrc={heroImage}
          imageAlt="Mākōha PurePod glass cabin in native forest near Kerikeri, Bay of Islands, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "In the far north of New Zealand, where subtropical forest meets the sea, PurePod Mākōha offers a different kind of escape — quiet, private and deeply connected to nature. Designed for two, it is a place to stop, disconnect and experience the Bay of Islands at its most pure: wild beaches, coastal walks, glowworms at night and vast, clear skies.",
              "Inside, the minimalist design and warm materials let nature take centre stage. The bed faces the landscape. Your arrival ends with a gentle 5–10 minute walk through native forest, where the sound of roads and towns fades away. At the end of the track you find a fully private pod — no neighbours, no distractions, only birdsong, wind in the trees and the distant sound of the sea.",
            ]}
            gallery={[
              {
                src: podNight,
                alt: "Mākōha PurePod glass cabin at night in native forest, Kerikeri, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom inside Mākōha PurePod glass cabin, Kerikeri, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podLandscape,
                alt: "Native forest landscape around Mākōha PurePod, Kerikeri, Northland, New Zealand",
                position: "50% 45%",
              },
            ]}
            galleryCaption="PurePod Mākōha is not a typical accommodation. It is an immersion in the natural world of Northland. Inside, everything is designed for two: a warm, comfortable retreat from which to watch the forest, the sky and the changing light — all from the intimacy of your hideaway in the heart of nature."
          />
          <ExperiencesSection
            title="Experiences that define Mākōha"
            hint="Sea, culture and wild landscape"
            intro="A curated selection of three experiences that capture the essence of this place: sea, culture and wild landscape."
            experiences={[
              {
                title: "Bay of Islands by boat",
                image: expBoat,
                imageAlt:
                  "Boat cruise in the Bay of Islands near Kerikeri, Northland, New Zealand",
                paragraphs: [
                  "Explore one of New Zealand’s most iconic coastal regions by boat — a scattered archipelago of islands, turquoise water and marine life that reflects the untamed coast surrounding PurePod Mākōha.",
                  "Seeing the Bay of Islands from the water is the best way to understand why this region feels so remote and extraordinary.",
                ],
                links: [
                  {
                    label: "Explore Bay of Islands cruises",
                    href: "https://www.exploregroup.co.nz/bay-of-islands/",
                  },
                ],
              },
              {
                title: "Waitangi Treaty Grounds",
                image: expWaitangi,
                imageAlt:
                  "Māori meeting house at Waitangi Treaty Grounds near Kerikeri, Bay of Islands, New Zealand",
                paragraphs: [
                  "The spiritual and historical heart of New Zealand. Walk the place where Māori and European cultures first met and discover the stories that shaped the country.",
                  "Staying at Mākōha puts you at the centre of this rich cultural landscape.",
                ],
                links: [
                  {
                    label: "Visit Waitangi Treaty Grounds",
                    href: "https://www.waitangi.org.nz/",
                  },
                ],
              },
              {
                title: "Mahinepua Peninsula Track",
                image: expMahinepua,
                imageAlt:
                  "Mahinepua Peninsula coastal walk, Bay of Islands near Kerikeri, New Zealand",
                paragraphs: [
                  "A striking coastal walk that winds through green hills and opens onto hidden beaches and wide ocean views.",
                  "Here the Bay of Islands shows its wildest, most untouched side — the perfect complement to the sense of isolation and nature you experience at PurePod Mākōha.",
                ],
                links: [
                  {
                    label: "Mahinepua Peninsula Track",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/whangaroa-area/things-to-do/mahinepua-peninsula-track/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore the Bay of Islands"
            extraBody={
              <>
                <p>
                  <strong>
                    Beyond the pod, the landscape continues to unfold at a
                    gentle pace.
                  </strong>
                </p>
                <p>
                  Kawiti Glowworm Caves and the Kerikeri River track to Rainbow
                  Falls offer a softer, quieter side of the region — forest,
                  water and shade, ideal for a relaxed half-day walk.
                </p>
                <p>
                  For open horizons and sea air, nearby beaches such as Matauri
                  Bay and Te Ngaere Bay invite long walks, quiet swims and slow
                  afternoons by the water.
                </p>
              </>
            }
          />
          <TravelSection
            title="Before you travel"
            hint="Practical details, without losing the mood"
            cards={[
              {
                type: "withImages",
                title: "The journey",
                images: [
                  {
                    src: travelForest,
                    alt: "Native forest walking track near Mākōha PurePod, Kerikeri, Northland, New Zealand",
                  },
                  {
                    src: travelBridge,
                    alt: "Bridge on native forest walking track near Mākōha PurePod, Kerikeri, New Zealand",
                  },
                ],
                body: "The final part of your journey follows quiet rural roads and ends with a 5–10 minute walk through native forest. This last stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "The Bay of Islands has a subtropical climate — warm and humid in summer, cooler and sometimes rainy in winter. Rain is part of the landscape here, deepening the lush, green, almost jungle-like character of the place.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelPlatter,
                    alt: "Local food platter at Mākōha PurePod, Kerikeri, New Zealand",
                  },
                  {
                    src: travelDinner,
                    alt: "Outdoor dinner at Mākōha PurePod, Kerikeri, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Northland producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the views. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable, easy and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={MAKOHA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
