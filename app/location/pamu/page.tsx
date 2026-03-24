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

import heroImage from "@/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg";
import podExterior from "@/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg";
import podBedroom from "@/assets/img/pamu/pamu-purepod-bedroom-view-landscape-rotorua.jpg";
import podBathroom from "@/assets/img/pamu/pamu-purepod-bathroom-shower-view-rotorua.jpg";
import expGeothermal from "@/assets/img/pamu/rotorua-geothermal-hot-springs-lake-new-zealand.jpg";
import expMaori from "@/assets/img/pamu/rotorua-maori-cultural-experience-village-new-zealand.jpg";
import expValley from "@/assets/img/pamu/rotorua-volcanic-geothermal-valley-landscape-new-zealand..jpg";
import travelFence from "@/assets/img/pamu/pamu-purepod-farm-fence-landscape-rotorua.jpg";
import travelAerial from "@/assets/img/pamu/pamu-purepod-aerial-landscape-valley-rotorua.jpg";
import travelCheese from "@/assets/img/pamu/pamu-purepod-local-cheese-platter-food-rotorua.jpg";
import travelBbq from "@/assets/img/pamu/pamu-purepod-outdoor-bbq-cooking-view-rotorua.jpg";

const CANONICAL_URL = "https://purepods.com/location/pamu/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg";

const PAMU_BOOKING_URL = "https://purepods.com/booking/?force_site_id=8";

const META_DESCRIPTION =
  "PurePod Pāmu: glass cabin for two near Rotorua, Bay of Plenty. Geothermal country, lakes & farmland; short walk-in, private site. Self-contained stay with outdoor cooking.";

const SEO_TITLE_ABSOLUTE =
  "Pāmu PurePod | Glass Cabin, Rotorua, New Zealand";

const HERO_SUBTITLE =
  "In the Rotorua region — where geothermal steam meets farming country and lakes — PurePod Pāmu is a private glass cabin for two. A short approach from the road leads to a fully private site with no neighbours; suitable footwear helps. Slow down, breathe and let the land take over.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Pāmu?",
    answer:
      "Reaching PurePod Pāmu is a drive through the Rotorua region — past lakes, geothermal areas and farming country. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the everyday behind and arriving slowly.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Rotorua has a temperate climate with warm summers and cooler winters. Geothermal areas can feel warmer and sometimes humid; the rest of the region is mild. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. The outdoor cooking area lets you eat with the landscape in view. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the stillness of the land, the changing light and the sense of being away from the everyday. A short approach from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

function pamuStructuredData() {
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
        name: "PurePod Pāmu",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rotorua",
          addressRegion: "Bay of Plenty",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in Rotorua geothermal and farm landscape",
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
        alt: "Pāmu PurePod glass cabin in the Rotorua landscape, New Zealand",
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

export default function PamuPage() {
  return (
    <>
      <JsonLd data={pamuStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Pāmu"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Pāmu PurePod glass cabin in the Rotorua landscape, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Pāmu sits in the Rotorua region — a place defined by geothermal activity, lakes and rolling farmland. The pod is designed for two: a simple, comfortable base from which to experience the stillness of the land, the changing light and the sense of being away from the everyday. Here the earth feels close — steam, warmth and the quiet of the countryside.",
              "Arrival is part of the experience. A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
            ]}
            gallery={[
              {
                src: podExterior,
                alt: "Pāmu PurePod glass cabin exterior in the Rotorua landscape, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom with landscape view inside Pāmu PurePod, Rotorua, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podBathroom,
                alt: "Bathroom and shower with view at Pāmu PurePod, Rotorua, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Pāmu is not just a place to sleep but an immersion in the Rotorua landscape. The hills, the sky and the quiet of the farm country are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light and the stillness of the land. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Pāmu"
            hint="Geothermal, culture and landscape"
            intro="A curated selection of three experiences that capture the essence of the Rotorua region — geothermal lakes, Māori culture and the volcanic landscape."
            experiences={[
              {
                title: "Geothermal lakes & hot springs",
                image: expGeothermal,
                imageAlt:
                  "Geothermal hot springs and lake in the Rotorua region, New Zealand",
                paragraphs: [
                  "The Rotorua region is defined by geothermal activity — hot springs, steaming lakes and the sense that the earth is alive beneath you. A walk or drive through the geothermal valleys reveals colours, steam and a landscape that feels unlike anywhere else.",
                  "A chance to experience the raw character of the land.",
                ],
                links: [
                  {
                    label: "Explore geothermal Rotorua",
                    href: "https://www.rotoruanz.com/see-and-do/geothermal",
                  },
                ],
              },
              {
                title: "Māori culture & heritage",
                image: expMaori,
                imageAlt:
                  "Māori cultural experience in the Rotorua region, New Zealand",
                paragraphs: [
                  "Rotorua is a centre of Māori culture — living villages, storytelling and the connection between people and the land. Visiting a marae or cultural experience offers a deeper understanding of the place and its history.",
                  "The human heart of the region, woven into the landscape.",
                ],
                links: [
                  {
                    label: "Māori culture in Rotorua",
                    href: "https://www.rotoruanz.com/see-and-do/maori-culture",
                  },
                ],
              },
              {
                title: "Volcanic valley & landscape",
                image: expValley,
                imageAlt:
                  "Volcanic geothermal valley landscape in the Rotorua region, New Zealand",
                paragraphs: [
                  "The wider Rotorua landscape combines volcanic terrain, forest and farmland. Scenic drives and short walks reveal craters, lakes and the quiet of the countryside — a region that rewards slow exploration.",
                  "Where the land tells its own story.",
                ],
                links: [
                  {
                    label: "Explore Rotorua",
                    href: "https://www.rotoruanz.com/see-and-do",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Rotorua"
            extraBody={
              <>
                <p>
                  <strong>Lakes, forest and quiet discovery.</strong>
                </p>
                <p>
                  Beyond the geothermal sites, the region offers lake walks,
                  redwood forest and the calm of farming country. Rotorua is a
                  place where you can fill a day with activity or simply slow
                  down and let the landscape lead. The pod gives you a base to
                  return to — private, quiet and connected to the same land.
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
                    src: travelFence,
                    alt: "Farm fence and landscape near Pāmu PurePod, Rotorua, New Zealand",
                  },
                  {
                    src: travelAerial,
                    alt: "Aerial view of valley landscape near Pāmu PurePod, Rotorua, New Zealand",
                  },
                ],
                body: "Reaching PurePod Pāmu is a drive through the Rotorua region — past lakes, geothermal areas and farming country. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the everyday behind and arriving slowly.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "Rotorua has a temperate climate with warm summers and cooler winters. Geothermal areas can feel warmer and sometimes humid; the rest of the region is mild. Layered clothing is recommended so you can enjoy both the pod and the outdoors in comfort.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelCheese,
                    alt: "Local cheese platter and food at Pāmu PurePod, Rotorua, New Zealand",
                  },
                  {
                    src: travelBbq,
                    alt: "Outdoor BBQ and cooking at Pāmu PurePod, Rotorua, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. The outdoor cooking area lets you eat with the landscape in view. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={PAMU_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
