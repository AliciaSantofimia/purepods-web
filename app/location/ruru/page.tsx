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

const heroImage = "/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg";
const podSunset = "/assets/img/ruru/ruru-purepod-glass-cabin-exterior-sunset-coromandel.jpg";
const podDeck = "/assets/img/ruru/ruru-purepod-interior-view-deck-coromandel.jpg";
const podNight = "/assets/img/ruru/ruru-purepod-glass-cabin-night-sky-coromandel.jpg";
const expKarangahake = "/assets/img/ruru/karangahake-gorge-hiking-suspension-bridge.jpg";
const expOrokawa = "/assets/img/ruru/orokawa-bay-coastal-walk-coromandel.jpg";
const expWhiritoa = "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg";
const travelForestPath = "/assets/img/ruru/coromandel-forest-path-to-ruru-purepod.jpg";
const travelHillside = "/assets/img/ruru/ruru-purepod-hillside-access-road-coromandel.jpg";
const travelPicnic = "/assets/img/ruru/ruru-purepod-picnic-local-food-coromandel.jpg";
const travelBreakfast = "/assets/img/ruru/ruru-purepod-breakfast-coromandel.jpg";

const CANONICAL_URL = "https://purepods.com/location/ruru/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg";

const RURU_BOOKING_URL = "https://purepods.com/booking/?force_site_id=7";

const META_DESCRIPTION =
  "PurePod Ruru: glass cabin for two in the Coromandel Peninsula, Waikato. Native bush & coast nearby; forest walk-in, private site. Self-contained stay with local provisions.";

const SEO_TITLE_ABSOLUTE =
  "Ruru PurePod | Glass Cabin, Coromandel, New Zealand";

const HERO_SUBTITLE =
  "In the Coromandel — where forest meets the coast — PurePod Ruru is a private glass cabin for two in the hills amid native bush. A short walk through forest from the road leads to a hidden site with no neighbours; sturdy footwear is recommended. Slow down, breathe and let the landscape take over.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Ruru?",
    answer:
      "Reaching PurePod Ruru is a drive through the Coromandel, followed by a short walk through forest to the pod. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track. The journey is part of the experience: leaving the road behind and arriving slowly in the bush.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short walk from the road through native forest brings you into your own private world — no neighbours, no distractions. Sturdy footwear helps on the track. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Coromandel has a mild, often humid climate — warm in summer, cooler in winter. Rain is part of the landscape and keeps the bush green. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the stillness of the forest, the changing light and the sense of being away from the everyday. A short walk from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

function ruruStructuredData() {
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
        name: "PurePod Ruru",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Coromandel Peninsula",
          addressRegion: "Waikato",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in the Coromandel with bush outlook and coast within reach",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Short forest walk-in access from the road",
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
        alt: "Ruru PurePod glass cabin in the Coromandel landscape, New Zealand",
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

export default function RuruPage() {
  return (
    <>
      <JsonLd data={ruruStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Ruru"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Ruru PurePod glass cabin in the Coromandel landscape, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Ruru sits in the Coromandel — a region of green hills, native bush and a coastline of bays and beaches. The pod is designed for two: a simple, comfortable base from which to experience the stillness of the forest, the changing light and the sense of being away from the everyday. Here the land feels close — birdsong, wind in the trees and the quiet of the hills.",
              "Arrival is part of the experience. A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
            ]}
            gallery={[
              {
                src: podSunset,
                alt: "Ruru PurePod glass cabin at sunset in the Coromandel, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podDeck,
                alt: "Interior and deck view at Ruru PurePod, Coromandel, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podNight,
                alt: "Night sky from Ruru PurePod, Coromandel, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Ruru is not just a place to sleep but an immersion in the Coromandel landscape. The bush, the hills and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the land. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Ruru"
            hint="Gorge, coast and forest"
            intro="A curated selection of three experiences that capture the essence of the Coromandel — historic gorge walks, coastal tracks and the quiet of the peninsula."
            experiences={[
              {
                title: "Karangahake Gorge",
                image: expKarangahake,
                imageAlt:
                  "Karangahake Gorge suspension bridge and walking track, Coromandel, New Zealand",
                paragraphs: [
                  "A historic gorge with walking and cycling tracks, old railway tunnels and a suspension bridge over the river. The landscape mixes bush, water and the remains of the gold-mining era — a place where history and nature sit side by side.",
                  "A gentle way to explore the inland Coromandel.",
                ],
                links: [
                  {
                    label: "Karangahake Gorge",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/karangahake-gorge/",
                  },
                ],
              },
              {
                title: "Orokawa Bay coastal walk",
                image: expOrokawa,
                imageAlt: "Orokawa Bay coastal walk, Coromandel, New Zealand",
                paragraphs: [
                  "A coastal track that leads to a quiet bay — native bush, views of the ocean and the sense of reaching a place that feels tucked away. The walk is well formed and rewards a slow pace with light, shade and the sound of the sea.",
                  "Where the bush meets the coast.",
                ],
                links: [
                  {
                    label: "Orokawa Bay walk",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/whenuakura-orokawa-coastal-walk/",
                  },
                ],
              },
              {
                title: "Whiritoa Beach",
                image: expWhiritoa,
                imageAlt:
                  "Whiritoa Beach coastal landscape, Coromandel, New Zealand",
                paragraphs: [
                  "A stretch of coast that captures the Coromandel mood — beach, dunes and the open Pacific. A place for long walks, swimming and the kind of stillness that comes with a quiet stretch of sand and sea.",
                  "The coast in its simplest form — sand, sky and horizon.",
                ],
                links: [
                  {
                    label: "Whiritoa Beach",
                    href: "https://www.thecoromandel.com/visit/whiritoa/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore the Coromandel"
            extraBody={
              <>
                <p>
                  <strong>Forest, coast and slow discovery.</strong>
                </p>
                <p>
                  The peninsula offers hot pools, cathedral coves and countless
                  bays. You can fill a day with driving and walking or simply
                  stay close to the pod and let the bush and the birdsong take
                  over. The Coromandel rewards both exploration and rest.
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
                    src: travelForestPath,
                    alt: "Forest path to Ruru PurePod, Coromandel, New Zealand",
                  },
                  {
                    src: travelHillside,
                    alt: "Hillside access road to Ruru PurePod, Coromandel, New Zealand",
                  },
                ],
                body: "Reaching PurePod Ruru is a drive through the Coromandel, followed by a short walk through forest to the pod. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track. The journey is part of the experience: leaving the road behind and arriving slowly in the bush.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "The Coromandel has a mild, often humid climate — warm in summer, cooler in winter. Rain is part of the landscape and keeps the bush green. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelPicnic,
                    alt: "Picnic and local food at Ruru PurePod, Coromandel, New Zealand",
                  },
                  {
                    src: travelBreakfast,
                    alt: "Breakfast at Ruru PurePod, Coromandel, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={RURU_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
