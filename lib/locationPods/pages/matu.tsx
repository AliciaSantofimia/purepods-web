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

const heroImage = "/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg";
const podExterior = "/assets/img/matu/matu-purepod-glass-cabin-exterior-waitomo.jpg";
const podBedroom = "/assets/img/matu/matu-purepod-bedroom-sunset-view-waitomo.jpg";
const podSunset = "/assets/img/matu/matu-purepod-glass-cabin-sunset-exterior-waitomo.jpg";
const expGlowworm = "/assets/img/matu/waitomo-glowworm-cave-boat-ride.jpg";
const expRuakuri = "/assets/img/matu/waitomo-ruakuri-cave-spiral.jpg";
const expMarokopa = "/assets/img/matu/waitomo-marokopa-waterfall.jpg";
const travelRoad = "/assets/img/matu/waitomo-countryside-access-road.jpg";
const travelForest = "/assets/img/matu/waitomo-native-forest-walking-track.jpg";
const travelPlatter = "/assets/img/matu/matu-local-food-platter-waitomo.jpg";
const travelBreakfast = "/assets/img/matu/matu-breakfast-board-waitomo.jpg";

const CANONICAL_URL = "https://purepods.com/location/matu/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg";

const MATU_BOOKING_URL = "https://purepods.com/booking/?force_site_id=16";

const META_DESCRIPTION =
  "PurePod Matū: glass cabin for two in Waitomo, Waikato. Native forest & limestone country; short walk-in, private site. Self-contained stay — caves, bush & night skies nearby.";

const SEO_TITLE_ABSOLUTE =
  "Matū PurePod | Glass Cabin, Waitomo, New Zealand";

/** Original tone + minimal GEO; detail stays in The Pod & Before you travel. */
const HERO_SUBTITLE =
  "In the heart of the Waitomo region, where native forest meets limestone country, PurePod Matū is a private glass cabin for two — green hills and bush above, glowworm caves below. A short walk from the road leads to a fully private site; suitable footwear helps. Slow down, listen and let the landscape take over.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Matū?",
    answer:
      "Reaching PurePod Matū is a scenic drive through the Waitomo region, followed by a short walk through native forest. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the forest and the sky always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Waitomo has a temperate climate — cooler in the forest and inside the caves. Layered clothing is recommended, especially for cave visits and evenings. Rain is part of the landscape here and keeps the bush green and the atmosphere rich.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the forest, the light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the bush, the night sky and the calm of the land. A short walk from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

function matuStructuredData() {
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
        name: "PurePod Matū",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Waitomo",
          addressRegion: "Waikato",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in Waitomo forest and limestone landscape",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Short walk-in access from the road",
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
        alt: "Matū PurePod glass cabin in the Waitomo landscape, New Zealand",
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
      <JsonLd data={matuStructuredData()} />
      <LightboxProvider>
        <LocationHero
          {...heroFrameFor("matu")}
          title="Matū"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Matū PurePod glass cabin in the Waitomo landscape, New Zealand"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Matū sits in the Waitomo landscape — rolling green hills, native forest and the quiet of the countryside. The region is known for its caves and glowworms, but above ground it is equally rich: birdsong, changing light and a strong sense of seclusion. The pod is designed for two: a simple, comfortable base from which to experience the bush, the night sky and the calm of the land.",
              "Arrival is part of the experience. A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the forest and the sky always in view. Warm, minimal and built for slowing down.",
            ]}
            gallery={[
              {
                src: podExterior,
                alt: "Matū PurePod glass cabin exterior in the Waitomo landscape, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom at sunset inside Matū PurePod, Waitomo, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podSunset,
                alt: "Matū PurePod at sunset, Waitomo, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Matū is not just a place to sleep but an immersion in the Waitomo landscape. The forest, the hills and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the bush. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Matū"
            hint="Caves, glowworms and forest landscape"
            intro="A curated selection of three experiences that capture the essence of the Waitomo region — glowworm caves, limestone formations and the native forest above."
            experiences={[
              {
                title: "Waitomo Glowworm Caves",
                image: expGlowworm,
                imageAlt: "Glowworm cave boat ride in Waitomo, New Zealand",
                paragraphs: [
                  "The iconic experience of Waitomo. Drift through limestone caves lit by thousands of glowworms — a silent, almost unreal atmosphere that is unique in the world.",
                  "Darkness, stillness and the soft light of the glowworms.",
                ],
                links: [
                  {
                    label: "Waitomo Glowworm Caves",
                    href: "https://www.waitomo.com/glowworms-and-caves/waitomo-glowworm-caves",
                  },
                ],
              },
              {
                title: "Ruakuri Cave",
                image: expRuakuri,
                imageAlt: "Ruakuri Cave spiral entrance, Waitomo, New Zealand",
                paragraphs: [
                  "A striking cave system that combines glowworms, underground streams and dramatic limestone formations. The spiral entrance and walkways make it an accessible yet immersive journey underground.",
                  "A different way to experience the hidden landscape of Waitomo.",
                ],
                links: [
                  {
                    label: "Ruakuri Cave",
                    href: "https://www.waitomo.com/glowworms-and-caves/ruakuri-cave",
                  },
                ],
              },
              {
                title: "Marokopa Falls",
                image: expMarokopa,
                imageAlt: "Marokopa Falls in the Waitomo region, New Zealand",
                paragraphs: [
                  "One of the North Island’s most beautiful waterfalls, set in native bush and reached by a short, easy walk. A place where water, forest and the sense of discovery come together.",
                  "The perfect complement to the cave experiences — open sky, green and the sound of water.",
                ],
                links: [
                  {
                    label: "Marokopa Falls Walk",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/waikato/places/waitomo-area/tracks/marokopa-falls-walk/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Waitomo"
            extraBody={
              <>
                <p>
                  <strong>Forest walks and quiet discovery.</strong>
                </p>
                <p>
                  Beyond the caves, the Waitomo region offers native forest
                  walks, river tracks and the calm of the countryside. Black
                  Water Rafting is an option for those who want to float through
                  glowworm-lit caves; the Otorohanga Kiwi House connects you with
                  local wildlife. The landscape above and below ground rewards
                  slow exploration.
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
                    src: travelRoad,
                    alt: "Countryside access road in the Waitomo region, New Zealand",
                  },
                  {
                    src: travelForest,
                    alt: "Native forest walking track near Matū PurePod, Waitomo, New Zealand",
                  },
                ],
                body: "Reaching PurePod Matū is a scenic drive through the Waitomo region, followed by a short walk through native forest. The final stretch is what makes the pod feel truly hidden and private. Suitable footwear is recommended for the track.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "Waitomo has a temperate climate — cooler in the forest and inside the caves. Layered clothing is recommended, especially for cave visits and evenings. Rain is part of the landscape here and keeps the bush green and the atmosphere rich.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelPlatter,
                    alt: "Local food platter at Matū PurePod, Waitomo, New Zealand",
                  },
                  {
                    src: travelBreakfast,
                    alt: "Breakfast at Matū PurePod, Waitomo, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the forest, the light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={MATU_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
