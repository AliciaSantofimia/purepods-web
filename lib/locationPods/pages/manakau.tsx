import type { Metadata } from "next";
import { ManakauExperimentalView } from "@/components/location/experimental/ManakauExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { MANAKAU_FAQ_ITEMS } from "@/lib/locationPods/experimental/manakauExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/manakau/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/manakau/manakau-purepod-sunrise-over-mountain-landscape.jpg";

const META_DESCRIPTION =
  "Manakau PurePod is a private off-grid glass cabin for two on an isolated sheep station inland from Kaikōura, with views toward Mt Manakau.";

const SEO_TITLE_ABSOLUTE =
  "Manakau PurePod | Private Off-Grid Glass Cabin near Kaikōura";

function manakauStructuredData() {
  const faqEntities = MANAKAU_FAQ_ITEMS.map((item) => ({
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
        name: "Manakau PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        image: OG_IMAGE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kaikōura",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private off-grid glass cabin with views toward Mt Manakau and the Seaward Kaikōura Range",
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
        alt: "Manakau PurePod glass cabin with views toward Mt Manakau and the Seaward Kaikōura Range, New Zealand",
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

/**
 * Editorial UI aligned with North Island pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/ManakauExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={manakauStructuredData()} />
      <ManakauExperimentalView />
    </>
  );
}
