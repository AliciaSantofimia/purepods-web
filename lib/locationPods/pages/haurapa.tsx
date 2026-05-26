import type { Metadata } from "next";
import { HaurapaExperimentalView } from "@/components/location/experimental/HaurapaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { HAURAPA_FAQ_ITEMS } from "@/lib/locationPods/experimental/haurapaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/haurapa/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/haurapa/haurapa-purepod-bedroom-view-mountains-central-otago-new-zealand.jpg";

const META_DESCRIPTION =
  "Haurapa PurePod is a private off-grid glass cabin for two near Cromwell, Central Otago, with Pisa Range views, Lake Dunstan landscapes and high-country stillness.";

const SEO_TITLE =
  "Haurapa PurePod, Central Otago | Private Off-Grid Glass Cabin";

function haurapaStructuredData() {
  const faqEntities = HAURAPA_FAQ_ITEMS.map((item) => ({
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
        name: SEO_TITLE,
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
        name: "Haurapa PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cromwell",
          addressRegion: "Otago",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Secluded glass cabin in Central Otago with wide views across the Pisa Range",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "700 m uphill walk from the car park following historic gold-mining tracks",
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
  title: SEO_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        alt: "Haurapa PurePod bedroom with panoramic mountain views in Central Otago, New Zealand",
      },
    ],
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

/**
 * Editorial UI aligned with Pōhue, Pāmu and other migrated pods.
 * JSON-LD FAQ matches `HAURAPA_FAQ_ITEMS` on the page.
 * @see `@/components/location/experimental/HaurapaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={haurapaStructuredData()} />
      <HaurapaExperimentalView />
    </>
  );
}
