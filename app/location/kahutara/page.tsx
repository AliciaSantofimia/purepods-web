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

/* Kahutara images — from assets/img/kahutara */
const heroImage = "/assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg";
const podRiverValley = "/assets/img/kahutara/kahutara-purepod-river-valley-view-kaikoura.jpg";
const podBedroom = "/assets/img/kahutara/kahutara-purepod-bedroom-view-kaikoura-mountain.jpg";
const podMountain = "/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg";
const podKitchen = "/assets/img/kahutara/kahutara-purepod-kitchen-view-kaikoura-mountains.jpg";
const expWhale = "/assets/img/kahutara/kaikoura-whale-watching-new-zealand.jpg";
const expPeninsula = "/assets/img/kahutara/kaikoura-peninsula-walkway-coastal-track.jpg";
const expSeal = "/assets/img/kahutara/kaikoura-seal-colony-new-zealand.jpg";
const travelValley = "/assets/img/kahutara/kaikoura-river-valley-landscape.jpg";
const travelFarm = "/assets/img/kahutara/kaikoura-countryside-farm-entrance.jpg";
const travelFood = "/assets/img/kahutara/kahutara-local-food-platter-kaikoura.jpg";
const travelWine = "/assets/img/kahutara/kahutara-wine-and-cheese-board-kaikoura.jpg";

const CANONICAL_URL = "https://purepods.com/location/kahutara/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg";

const KAHUTARA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=1";

const META_DESCRIPTION =
  "PurePod Kahutara: remote glass cabin for two on the Kaikōura coast. Access: 10–15 min walk from parking. Coast, mountains and seclusion—no shared spaces.";

const SEO_TITLE_ABSOLUTE =
  "Kahutara PurePod | Glass Cabin on the Kaikōura Coast, New Zealand";

const IMPACT_SUMMARY =
  "PurePod Kahutara is a private glass cabin for two on the wild Kaikōura coast, Canterbury, New Zealand. Guests reach the pod on foot after a 10–15 minute walk from the parking area. The retreat sits among open hills and native landscape with the ocean and mountains near, with no neighbours or shared spaces.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Kahutara?",
    answer:
      "The final part of the journey is completed on foot. A short 10–15 minute walk leads you from the parking area to the pod, creating a sense of privacy and gentle disconnection from the outside world.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The walk from the parking area to the pod takes about 10–15 minutes.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Kahutara sits on the exposed Kaikōura coast, where conditions can change quickly. Expect fresh air, coastal winds and cooler evenings throughout the year. Rain is part of the landscape and often adds even more atmosphere to the experience.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Each PurePod is equipped with a gas cooktop, barbecue, small fridge and all the essential cookware — utensils, pots, plates and cutlery — to prepare simple meals during your stay. You will also find a selection of tea and coffee to enjoy at the pod. You are welcome to bring your own food or pre-book a PurePod locally sourced dinner and breakfast package, ready to prepare and enjoy at your own pace.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

function kahutaraStructuredData() {
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
        name: "PurePod Kahutara",
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
            name: "Private glass cabin with coastal and mountain outlook",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Secluded setting with no shared spaces",
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
        alt: "Kahutara PurePod glass cabin overlooking the Kaikōura mountains and river valley in New Zealand",
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

export default function KahutaraPage() {
  return (
    <>
      <JsonLd data={kahutaraStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Kaikōura, Kahutara"
          subtitle={IMPACT_SUMMARY}
          imageSrc={heroImage}
          imageAlt="Kahutara PurePod glass cabin overlooking the Kaikōura mountains and river valley in New Zealand"
          imagePosition="70% 85%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "Open hills, endless skies and the Seaward Kaikōura Range rising behind you. A remote retreat where everything slows down and nature sets the pace.",
              "On the wild Kaikōura coast, where open hills and endless skies meet the ocean, PurePod Kahutara offers a rare escape — quiet, private and deeply connected to the landscape.",
              "Arrival is part of the experience. A short walk takes you away from the everyday world and into complete stillness. At the end of the track, a fully private retreat awaits — no neighbours, no distractions, just you and the natural world.",
            ]}
            gallery={[
              {
                src: podRiverValley,
                alt: "Kahutara PurePod glass cabin at sunset in the Kaikōura countryside, New Zealand",
                position: "50% 78%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bed inside Kahutara PurePod with panoramic view of the Kaikōura mountains, New Zealand",
                position: "50% 58%",
                fillGap: true,
              },
              {
                src: podMountain,
                alt: "Kahutara PurePod glass cabin surrounded by hills and Kaikōura mountains in New Zealand",
                position: "50% 70%",
              },
              {
                src: podKitchen,
                alt: "Kitchen and living area in Kahutara PurePod with Kaikōura mountain views, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Kahutara is not a typical place to stay. It is a full immersion in the natural landscape of the Kaikōura coast. Surrounded by open hills and native vegetation, the pod is completely secluded — no neighbours, no shared spaces, just wind across the hills, silence, and a deep sense of being in nature. Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature."
          />
          <ExperiencesSection
            title="Experiences that define Kahutara"
            hint="Mountains meeting the sea, marine wildlife and open horizons"
            intro="A curated selection of three experiences that capture the essence of this place — wild coastline, marine wildlife and dramatic landscapes."
            experiences={[
              {
                title: "Kaikōura Whale Experiences",
                image: expWhale,
                imageAlt:
                  "Sperm whale tail diving in the ocean during whale watching in Kaikōura, New Zealand",
                paragraphs: [
                  "A unique opportunity to see whales both from the air and from the ocean, revealing the full scale and beauty of Kaikōura's marine landscape — where deep waters, dramatic mountains and open sea meet.",
                  "An iconic Kaikōura experience combining extraordinary marine wildlife, open horizons and the striking mountain range rising beside the ocean.",
                ],
                links: [
                  {
                    label: "Explore Whale Watch Kaikōura",
                    href: "https://whalewatch.co.nz/your-experience/our-tours/whale-watch-trip-gift-voucher/",
                  },
                  {
                    label: "Explore Kaikōura Scenic Flights",
                    href: "https://gchaviation.com/kaikoura-scenic-flights/",
                  },
                ],
              },
              {
                title: "Kaikōura Peninsula Walkway",
                image: expPeninsula,
                imageAlt:
                  "Coastal cliffs along the Kaikōura Peninsula Walkway in New Zealand",
                paragraphs: [
                  "A scenic coastal walk with open ocean views, rocky headlands and distant mountains — perfect for exploring at a relaxed pace while observing wildlife in its natural habitat, including New Zealand fur seals, seabirds and, at times, dolphins and whales offshore.",
                  "Staying at Kahutara places you right in the heart of this wild coastal landscape.",
                ],
                links: [
                  {
                    label: "Explore Kaikōura Peninsula Walkway",
                    href: "https://www.google.com/maps/place/Kaik%C5%8Dura+Peninsula+Walkway,+Canterbury+Region+7300,+New+Zealand/@-42.4256257,173.6889881,17z",
                  },
                ],
              },
              {
                title: "Seal Kayak & Seal Swim Kaikōura",
                image: expSeal,
                imageAlt:
                  "New Zealand fur seal resting on rocks near the Kaikōura coast",
                paragraphs: [
                  "An active and immersive way to explore the coastline — paddling alongside seals or swimming with them in their natural habitat for a truly close-to-nature experience.",
                  "A signature Kaikōura experience where wild coastline, marine wildlife and open ocean combine in a direct encounter with nature.",
                ],
                links: [
                  {
                    label: "Explore Seal Kayak Kaikōura",
                    href: "https://www.sealkayakkaikoura.com/tours/seal-kayak-tour",
                  },
                  {
                    label: "Explore Seal Swim Kaikōura",
                    href: "https://www.sealswimkaikoura.co.nz/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Kaikōura"
            extraBody={
              <>
                <p>
                  <strong>
                    Beyond the pod, the coastline continues to unfold at a
                    gentle pace.
                  </strong>
                </p>
                <p>
                  Coastal walks and easy trails invite you to explore without
                  hurry. Lookouts such as Ohau Point Lookout, Point Kean
                  Viewpoint and Dolphin View Lookout offer wide horizons and
                  ever-changing ocean views.
                </p>
                <p>
                  The constant presence of the sea and marine wildlife
                  accompanies every journey. Quiet hills and inland vineyards
                  complete the feeling of space, stillness and open sky.
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
                    src: travelValley,
                    alt: "River valley landscape in the Kaikōura countryside, New Zealand",
                  },
                  {
                    src: travelFarm,
                    alt: "Countryside farm entrance along the rural road near Kahutara PurePod in the Kaikōura region",
                  },
                ],
                body: "The final part of the journey is completed on foot. A short 10–15 minute walk leads you from the parking area to the pod, creating a sense of privacy and gentle disconnection from the outside world.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "Kahutara sits on the exposed Kaikōura coast, where conditions can change quickly. Expect fresh air, coastal winds and cooler evenings throughout the year. Rain is part of the landscape and often adds even more atmosphere to the experience.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelFood,
                    alt: "Local food platter served at Kahutara PurePod with mountain views in Kaikōura",
                  },
                  {
                    src: travelWine,
                    alt: "Wine and cheese board on the deck at Kahutara PurePod with countryside views in Kaikōura",
                  },
                ],
                body: "Each PurePod is equipped with a gas cooktop, barbecue, small fridge and all the essential cookware — utensils, pots, plates and cutlery — to prepare simple meals during your stay. You will also find a selection of tea and coffee to enjoy at the pod. You are welcome to bring your own food or pre-book a PurePod locally sourced dinner and breakfast package, ready to prepare and enjoy at your own pace.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $890.00 — / night"
            bookHref={KAHUTARA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
