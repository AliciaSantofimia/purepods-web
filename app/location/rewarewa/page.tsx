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

import heroImage from "@/assets/img/rewarewa/rewarewa-purepod-aerial-landscape-muriwai-coast.jpg";
import podStairs from "@/assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-stairs-muriwai-coast.jpg";
import podBedroom from "@/assets/img/rewarewa/rewarewa-purepod-bedroom-interior-muriwai-coast.jpg";
import podStars from "@/assets/img/rewarewa/rewarewa-purepod-glass-cabin-night-stars-muriwai-coast.jpg";
import expBeach from "@/assets/img/rewarewa/muriwai-black-sand-beach-coastline.jpg";
import expRanges from "@/assets/img/rewarewa/waitakere-ranges-coastal-landscape-auckland.jpg";
import expTeHenga from "@/assets/img/rewarewa/te-henga-coastal-landscape-muriwai.jpg";
import travelRoad from "@/assets/img/rewarewa/muriwai-countryside-access-road.jpg";
import travelExterior from "@/assets/img/rewarewa/rewarewa-purepod-glass-cabin-exterior-muriwai-coast..jpg";
import travelPlatter from "@/assets/img/rewarewa/rewarewa-local-food-platter-muriwai-coast.JPG";
import travelBreakfast from "@/assets/img/rewarewa/rewarewa-breakfast-basket-muriwai-coast.JPG";

const CANONICAL_URL = "https://purepods.com/location/rewarewa/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/rewarewa/rewarewa-purepod-aerial-landscape-muriwai-coast.jpg";

const REWAREWA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=15";

const META_DESCRIPTION =
  "PurePod Rewarewa: glass cabin for two on the Muriwai Coast, Auckland. Black sand beaches & Waitākere Ranges; short walk-in, private site. Self-contained coastal stay.";

const SEO_TITLE_ABSOLUTE =
  "Rewarewa PurePod | Glass Cabin, Muriwai Coast, New Zealand";

const HERO_SUBTITLE =
  "On the Muriwai Coast — where black sand beaches meet the Waitākere Ranges — PurePod Rewarewa is a private glass cabin for two near Auckland. A short approach from the road leads to a fully private site with no neighbours; suitable footwear helps. Slow down, breathe and let the coast take over.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Rewarewa?",
    answer:
      "Reaching PurePod Rewarewa is a drive from Auckland through the Waitākere Ranges or along the coast — about 45 minutes to an hour. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the city behind and arriving slowly at the edge of the coast.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Muriwai Coast has a temperate maritime climate — often windy, with mild temperatures year-round. The west coast can be changeable; layered clothing and a windproof layer are recommended so you can enjoy both the pod and the beach in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the sound of the coast. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to experience the sound of the ocean, the changing light and the sense of being away from the city. A short approach from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

function rewarewaStructuredData() {
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
        name: "PurePod Rewarewa",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muriwai",
          addressRegion: "Auckland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin on the Muriwai Coast with ocean and ranges outlook",
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
        alt: "Rewarewa PurePod glass cabin in the Muriwai Coast landscape, New Zealand",
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

export default function RewarewaPage() {
  return (
    <>
      <JsonLd data={rewarewaStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Rewarewa"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Rewarewa PurePod glass cabin in the Muriwai Coast landscape, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Rewarewa sits on the Muriwai Coast — the wild west coast near Auckland, where black sand, surf and the Waitākere Ranges define the landscape. The pod is designed for two: a simple, comfortable base from which to experience the sound of the ocean, the changing light and the sense of being away from the city. Here the coast feels close — wind, birds and the quiet of the bush.",
              "Arrival is part of the experience. A short approach from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
            ]}
            gallery={[
              {
                src: podStairs,
                alt: "Rewarewa PurePod glass cabin exterior on the Muriwai Coast, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom interior at Rewarewa PurePod, Muriwai Coast, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podStars,
                alt: "Stargazing from Rewarewa PurePod at night, Muriwai Coast, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Rewarewa is not just a place to sleep but an immersion in the Muriwai landscape. The coast, the ranges and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the land. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Rewarewa"
            hint="Black sand, coast and ranges"
            intro="A curated selection of three experiences that capture the essence of the Muriwai Coast — black sand beaches, the Waitākere Ranges and the coastal landscape."
            experiences={[
              {
                title: "Muriwai Beach & black sand coast",
                image: expBeach,
                imageAlt: "Muriwai black sand beach and coastline, New Zealand",
                paragraphs: [
                  "Muriwai’s black sand beach is one of the region’s defining experiences — long stretches of coast, surf and the sound of the Tasman Sea. Walk the beach, watch the gannet colony on the headland and feel the wind and the scale of the ocean.",
                  "A landscape that feels raw and open.",
                ],
                links: [
                  {
                    label: "Muriwai Beach",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/muriwai-beach/",
                  },
                ],
              },
              {
                title: "Waitākere Ranges",
                image: expRanges,
                imageAlt:
                  "Waitākere Ranges coastal landscape near Auckland, New Zealand",
                paragraphs: [
                  "The Waitākere Ranges form the backdrop to the coast — native forest, walking tracks and the green hills that run down to the sea. Scenic drives and short walks reveal waterfalls, bush and the sense of being in a different world, minutes from the city.",
                  "Where bush and coast meet.",
                ],
                links: [
                  {
                    label: "Waitākere Ranges Regional Park",
                    href: "https://www.aucklandcouncil.govt.nz/parks-recreation/places-to-go/regional-parks/Pages/waitakere-ranges-regional-park.aspx",
                  },
                ],
              },
              {
                title: "Te Henga (Bethells Beach)",
                image: expTeHenga,
                imageAlt:
                  "Te Henga (Bethells Beach) coastal landscape, Muriwai region, New Zealand",
                paragraphs: [
                  "Te Henga is another stretch of wild coast — black sand, dunes and the same sense of space and wind. A short drive from the pod, it offers long walks, surf and the feeling of being at the edge of the land.",
                  "Another face of the same coast — raw, open and quiet.",
                ],
                links: [
                  {
                    label: "Te Henga / Bethells Beach",
                    href: "https://www.aucklandcouncil.govt.nz/parks-recreation/places-to-go/regional-parks/Pages/te-henga-bethells-beach.aspx",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore the Muriwai Coast"
            extraBody={
              <>
                <p>
                  <strong>Coastal walks and quiet discovery.</strong>
                </p>
                <p>
                  Beyond the main beaches, the coast offers hidden bays, coastal
                  tracks and the constant presence of the ocean. The region is a
                  place where you can fill a day with walking and surf or simply
                  slow down at the pod and let the sound of the wind and the sea
                  take over.
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
                    alt: "Countryside access road on the Muriwai Coast, New Zealand",
                  },
                  {
                    src: travelExterior,
                    alt: "Rewarewa PurePod glass cabin on the Muriwai Coast, New Zealand",
                  },
                ],
                body: "Reaching PurePod Rewarewa is a drive from Auckland through the Waitākere Ranges or along the coast — about 45 minutes to an hour. The final approach is via quiet roads and a short walk to the pod. Suitable footwear is recommended. The journey is part of the experience: leaving the city behind and arriving slowly at the edge of the coast.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "The Muriwai Coast has a temperate maritime climate — often windy, with mild temperatures year-round. The west coast can be changeable; layered clothing and a windproof layer are recommended so you can enjoy both the pod and the beach in comfort.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelPlatter,
                    alt: "Local food platter at Rewarewa PurePod, Muriwai Coast, New Zealand",
                  },
                  {
                    src: travelBreakfast,
                    alt: "Breakfast basket at Rewarewa PurePod, Muriwai Coast, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the sound of the coast. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={REWAREWA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
