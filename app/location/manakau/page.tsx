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

import heroImage from "@/assets/img/manakau/manakau-purepod-glass-cabin-seaward-kaikoura-mountains.jpg";
import podHills from "@/assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg";
import podBedroom from "@/assets/img/manakau/manakau-purepod-bedroom-view-kaikoura.jpg";
import podStars from "@/assets/img/manakau/manakau-purepod-milky-way-stargazing-kaikoura.jpg";
import expWhale from "@/assets/img/manakau/kaikoura-whale-watching-sperm-whale.jpg";
import expWalkway from "@/assets/img/manakau/kaikoura-peninsula-walkway-coastal-view.jpg";
import expSeals from "@/assets/img/manakau/kaikoura-seal-colony-new-zealand.jpg";
import travelFarm from "@/assets/img/manakau/kaikoura-countryside-farm-entrance.jpg";
import travelValley from "@/assets/img/manakau/kaikoura-river-valley-landscape.jpg";
import travelPlatter from "@/assets/img/manakau/manakau-local-food-platter-kaikoura.jpg";
import travelBreakfast from "@/assets/img/manakau/manakau-breakfast-outdoor-kaikoura.jpg";

const CANONICAL_URL = "https://purepods.com/location/manakau/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/manakau/manakau-purepod-glass-cabin-seaward-kaikoura-mountains.jpg";

const MANAKAU_BOOKING_URL = "https://purepods.com/booking/?force_site_id=2";

const META_DESCRIPTION =
  "PurePod Manakau: glass cabin for two in the Kaikōura region, Canterbury. Seaward mountains & Pacific; short walk-in, private site. Self-contained stay with local provisions.";

const SEO_TITLE_ABSOLUTE =
  "Manakau PurePod | Glass Cabin, Kaikōura, New Zealand";

/** Single hero block: original hook + minimal GEO; full detail stays in The Pod & Before you travel. */
const HERO_SUBTITLE =
  "Where the mountains meet the ocean. PurePod Manakau is a private glass cabin for two in Kaikōura — dramatic peaks, Pacific coast and wildlife all around. A short walk from the road leads to a fully private site with no neighbours; suitable footwear helps. Slow down, breathe and let the landscape take over.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Manakau?",
    answer:
      "Reaching PurePod Manakau is part of the experience. The drive from Christchurch to the Kaikōura region is one of the South Island’s most scenic — coastal road, mountain views and the sense of leaving the everyday behind. The final approach to the pod is via quiet roads and a short walk. Suitable footwear is recommended.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Kaikōura has a temperate maritime climate. Days can be warm and clear; evenings are often cooler. The weather can change quickly with the mountains and ocean nearby. Layered clothing and a windproof layer are recommended so you can enjoy the outdoors in comfort.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
  },
  {
    question: "How many people can stay, and how private is it?",
    answer:
      "The pod is designed for two: a simple, comfortable base from which to watch the light change on the mountains, the stars at night and the quiet life of the coast. A short walk from the road brings you into your own private world — no neighbours, no distractions.",
  },
];

function manakauStructuredData() {
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
        name: "PurePod Manakau",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kaikōura",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with Seaward Kaikōura and ocean outlook",
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
        alt: "Manakau PurePod glass cabin with view toward the Seaward Kaikōura mountains, New Zealand",
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

export default function ManakauPage() {
  return (
    <>
      <JsonLd data={manakauStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Manakau"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Manakau PurePod glass cabin with view toward the Seaward Kaikōura mountains, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Manakau is a secluded retreat in one of New Zealand’s most striking landscapes. The Kaikōura region — with the Seaward Kaikōura range rising behind and the Pacific in front — offers a sense of space and stillness that is rare. The pod is designed for two: a simple, comfortable base from which to watch the light change on the mountains, the stars at night and the quiet life of the coast.",
              "Arrival is part of the experience. A short walk from the road brings you into your own private world — no neighbours, no distractions. Inside, the glass cabin brings the outside in: you sleep, eat and rest with the landscape always in view. Warm, minimal and built for slowing down.",
            ]}
            gallery={[
              {
                src: podHills,
                alt: "Manakau PurePod glass cabin in the Kaikōura hills landscape, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom view inside Manakau PurePod, Kaikōura, New Zealand",
                position: "50% 50%",
                fillGap: true,
              },
              {
                src: podStars,
                alt: "Stargazing and Milky Way from Manakau PurePod, Kaikōura, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Manakau is not just a place to sleep but an immersion in the Kaikōura landscape. The mountains, the ocean and the wide sky are part of every moment. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the stars and the stillness of the land. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Manakau"
            hint="Wildlife, coast and mountain landscape"
            intro="A curated selection of three experiences that capture the essence of the Kaikōura region — marine wildlife, coastal walks and the meeting of mountains and sea."
            experiences={[
              {
                title: "Whale watching",
                image: expWhale,
                imageAlt: "Sperm whale off the coast of Kaikōura, New Zealand",
                paragraphs: [
                  "Kaikōura is one of the few places in the world where you can see sperm whales year-round. Boat trips take you offshore into the deep waters where these giants feed — a powerful, humbling encounter with wild ocean life.",
                  "A chance to see the ocean from a different perspective.",
                ],
                links: [
                  {
                    label: "Whale Watch Kaikōura",
                    href: "https://www.whalewatch.co.nz/",
                  },
                ],
              },
              {
                title: "Kaikōura Peninsula Walkway",
                image: expWalkway,
                imageAlt: "Kaikōura Peninsula Walkway coastal view, New Zealand",
                paragraphs: [
                  "A coastal walk that winds around the peninsula with sweeping views of the mountains and the Pacific. The track is well formed and suitable for a gentle half-day — ocean on one side, peaks on the other.",
                  "One of the region’s most rewarding walks — sea, sky and steady pace.",
                ],
                links: [
                  {
                    label: "Kaikōura Peninsula Walkway",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/kaikoura-peninsula/things-to-do/kaikoura-peninsula-walkway/",
                  },
                ],
              },
              {
                title: "Seal colony & coastal wildlife",
                image: expSeals,
                imageAlt: "New Zealand fur seals at Kaikōura coast, New Zealand",
                paragraphs: [
                  "The Kaikōura coast is home to New Zealand fur seals — you can see them from viewpoints and short walks along the shore. Dolphins, albatross and other seabirds are often seen from the peninsula. The region is a wildlife corridor where land, sea and sky meet.",
                  "A place where wildlife and landscape share the same stage.",
                ],
                links: [
                  {
                    label: "Explore Kaikōura Peninsula",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/kaikoura-peninsula/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Kaikōura"
            extraBody={
              <>
                <p>
                  <strong>River valley, countryside and slow discovery.</strong>
                </p>
                <p>
                  Beyond the coast, the Kaikōura region offers river valleys,
                  farming country and mountain views. Scenic drives and short
                  walks reveal a landscape that changes from sea level to
                  alpine — a region that rewards slow exploration and quiet
                  moments.
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
                    src: travelFarm,
                    alt: "Countryside and farm entrance in the Kaikōura region, New Zealand",
                  },
                  {
                    src: travelValley,
                    alt: "River valley landscape in the Kaikōura region, New Zealand",
                  },
                ],
                body: "Reaching PurePod Manakau is part of the experience. The drive from Christchurch to the Kaikōura region is one of the South Island’s most scenic — coastal road, mountain views and the sense of leaving the everyday behind. The final approach to the pod is via quiet roads and a short walk. Suitable footwear is recommended.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "Kaikōura has a temperate maritime climate. Days can be warm and clear; evenings are often cooler. The weather can change quickly with the mountains and ocean nearby. Layered clothing and a windproof layer are recommended so you can enjoy the outdoors in comfort.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelPlatter,
                    alt: "Local food platter at Manakau PurePod, Kaikōura, New Zealand",
                  },
                  {
                    src: travelBreakfast,
                    alt: "Breakfast outdoors at Manakau PurePod, Kaikōura, New Zealand",
                  },
                ],
                body: "Your PurePod is fully equipped for a relaxed, self-contained stay. Inside you will find a selection of meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local producers. Meals are designed to be simple to prepare, so you spend less time in the kitchen and more time enjoying the views and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={MANAKAU_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
