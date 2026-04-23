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

const heroImage = "/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-view-kapiti-coast.jpg";
const podSunrise = "/assets/img/kokomea/kokomea-purepod-glass-cabin-isolated-landscape-sunset-new-zealand.jpg";
const podNight = "/assets/img/kokomea/kokomea-purepod-glass-cabin-night-exterior-kapiti-coast.jpg";
const podBedroom = "/assets/img/kokomea/kokomea-purepod-bedroom-interior-sunset-kapiti-coast.jpg";
const expIsland = "/assets/img/kokomea/kapiti-island-aerial-landscape-kapiti-coast.jpg";
const expEscarpment = "/assets/img/kokomea/paekākāriki-escarpment-track.jpg";
const expLagoon = "/assets/img/kokomea/kapiti-coast-river-lagoon-landscape.jpg";
const travelRoad = "/assets/img/kokomea/kokomea-countryside-access-road-kapiti-coast.jpg";
const travelSunrise = "/assets/img/kokomea/kokomea-purepod-exterior-sunrise-landscape-kapiti-coast.jpg";
const travelDinner = "/assets/img/kokomea/kokomea-local-food-dinner-platter-kapiti-coast.jpg";
const travelBreakfast = "/assets/img/kokomea/kokomea-breakfast-outdoor-table-kapiti-coast.jpg";

const CANONICAL_URL = "https://purepods.com/location/kokomea/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-view-kapiti-coast.jpg";

const KOKOMEA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=10";

const META_DESCRIPTION =
  "PurePod Kokomea: glass cabin for two on the Kāpiti Coast. Walk-in access through the hills. Forest, birdsong and privacy; BYO food or hampers.";

const SEO_TITLE_ABSOLUTE =
  "Kokomea PurePod | Glass Cabin, Kāpiti Coast, New Zealand";

const IMPACT_SUMMARY =
  "PurePod Kokomea is a private glass cabin for two in the Kāpiti Coast hills, North Island, New Zealand. Guests reach the pod on a walk through rural hills; comfortable footwear is recommended. The stay offers forest, birdsong and coastal character with no shared spaces.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Kokomea?",
    answer:
      "Reaching PurePod Kokomea is a gentle walk through the hills of the Kāpiti Coast. Part of the experience is leaving the everyday behind and arriving slowly, surrounded by nature and silence. Comfortable footwear is recommended for the track.",
  },
  {
    question: "What footwear should I bring?",
    answer:
      "Comfortable footwear is recommended for the track into the pod.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "The Kāpiti Coast has a mild, often windy climate. Evenings can be cool year-round; layered clothing is recommended. The mix of ocean and hills makes the weather changeable — part of the character of the place.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Bring your own supplies or pre-book a breakfast and dinner basket with local produce when you reserve. Everything is designed to be simple, comforting and enjoyed at your own pace — the kind of moments that stay with you long after you leave.",
  },
  {
    question: "How many people can stay, and what is in the pod?",
    answer:
      "The pod is fully private and designed for two, offering the feeling of being alone with nature. Inside, everything is simple and welcoming: king bed, hot shower, flush toilet, essential kitchen and comfortable heating for cooler evenings.",
  },
];

function kokomeaStructuredData() {
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
        name: "PurePod Kokomea",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kāpiti Coast",
          addressRegion: "Wellington",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with rural and coastal outlook",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walk-in access via hill track",
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
        alt: "Kokomea PurePod glass cabin at sunset on the Kāpiti Coast, New Zealand",
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
      <JsonLd data={kokomeaStructuredData()} />
      <LightboxProvider>
        <LocationHero
          {...heroFrameFor("kokomea")}
          title="Kokomea"
          subtitle={IMPACT_SUMMARY}
          imageSrc={heroImage}
          imageAlt="Kokomea PurePod glass cabin at sunset on the Kāpiti Coast, New Zealand"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "Where the land slows down and birds set the pace. A retreat between forest and sea, made for walking slowly, listening to the surroundings and letting the landscape shape the day.",
              "A gentle walk leads you into the hills of the Kāpiti Coast, where forest, birdsong and open skies replace the noise of the world. The pod sits in a serene rural landscape, surrounded by native vegetation, soft ridges and the distant sound of the ocean.",
              "The pod is fully private and designed for two, offering the feeling of being alone with nature. Inside, everything is simple and welcoming: king bed, hot shower, flush toilet, essential kitchen and comfortable heating for cooler evenings.",
            ]}
            gallery={[
              {
                src: podSunrise,
                alt: "Kokomea PurePod glass cabin at sunset in the Kāpiti Coast landscape, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podNight,
                alt: "Kokomea PurePod glass cabin at night on the Kāpiti Coast",
                position: "50% 60%",
                fillGap: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom inside Kokomea PurePod with sunset light, Kāpiti Coast",
                position: "50% 45%",
              },
            ]}
            galleryCaption="Glass walls open the space completely to the landscape, so that light, mist and birds become part of the stay. Outside, the deck invites slow mornings and long evenings — coffee in hand, wind in the trees and a silence that stretches. This is a place to watch, listen, walk and do almost nothing."
          />
          <ExperiencesSection
            title="Experiences that define Kokomea"
            hint="Island sanctuary, coastal tracks and quiet discovery"
            intro="A curated selection of three experiences that capture the essence of the Kāpiti Coast — native island, escarpment walks and the meeting of land and sea."
            experiences={[
              {
                title: "Kāpiti Island",
                image: expIsland,
                imageAlt:
                  "Aerial view of Kapiti Island nature reserve, Kāpiti Coast, New Zealand",
                paragraphs: [
                  "A protected nature reserve visible from the coast, Kāpiti Island is home to native birds and restored forest. Access is by boat; visits are guided and limited, keeping the island quiet and wild.",
                  "A chance to step into a world where birdsong and forest take over.",
                ],
                links: [
                  {
                    label: "Explore Kāpiti Island",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/kapiti-island-nature-reserve/",
                  },
                ],
              },
              {
                title: "Paekākāriki Escarpment Track",
                image: expEscarpment,
                imageAlt:
                  "Paekākāriki Escarpment Track on the Kāpiti Coast, New Zealand",
                paragraphs: [
                  "A striking walk along the coastal escarpment with wide views over the Tasman Sea and Kāpiti Island. The track climbs and winds through native scrub and coastal landscape, offering a strong sense of space and horizon.",
                  "One of the region's most memorable walks — sea, sky and steady pace.",
                ],
                links: [
                  {
                    label: "Explore Paekākāriki Escarpment Track",
                    href: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/paekakariki-escapment-track/",
                  },
                ],
              },
              {
                title: "Coast, lagoons & slow exploration",
                image: expLagoon,
                imageAlt:
                  "River and lagoon landscape on the Kāpiti Coast, New Zealand",
                paragraphs: [
                  "The Kāpiti Coast is a mix of beach, river mouths and lagoons, with quiet roads and small settlements. Explore at a gentle pace — coastal reserves, river walks and the constant presence of the sea and the island on the horizon.",
                  "A landscape made for unhurried discovery.",
                ],
                links: [
                  {
                    label: "Explore the Kāpiti Coast",
                    href: "https://www.kapiticoast.govt.nz/our-district/visit-kapiti/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore the coast"
            extraBody={
              <>
                <p>
                  <strong>Local life and quiet corners.</strong>
                </p>
                <p>
                  Beyond the pod, the coast offers small cafés, local markets and
                  easy walks along beaches and estuaries. The region is known for
                  its relaxed pace and connection to the sea — a place where a
                  short drive or a slow walk can lead to a completely different
                  view of the same landscape.
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
                    alt: "Countryside access road to Kokomea PurePod on the Kāpiti Coast",
                  },
                  {
                    src: travelSunrise,
                    alt: "Kokomea PurePod at sunrise in the Kāpiti Coast landscape",
                  },
                ],
                body: "Reaching PurePod Kokomea is a gentle walk through the hills of the Kāpiti Coast. Part of the experience is leaving the everyday behind and arriving slowly, surrounded by nature and silence. Comfortable footwear is recommended for the track.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "The Kāpiti Coast has a mild, often windy climate. Evenings can be cool year-round; layered clothing is recommended. The mix of ocean and hills makes the weather changeable — part of the character of the place.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelDinner,
                    alt: "Local food platter at Kokomea PurePod, Kāpiti Coast",
                  },
                  {
                    src: travelBreakfast,
                    alt: "Breakfast outdoors at Kokomea PurePod, Kāpiti Coast",
                  },
                ],
                body: "Bring your own supplies or pre-book a breakfast and dinner basket with local produce when you reserve. Everything is designed to be simple, comforting and enjoyed at your own pace — the kind of moments that stay with you long after you leave.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={KOKOMEA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
