import type { Metadata } from "next";
import { ManakauExperimentalView } from "@/components/location/experimental/ManakauExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { MANAKAU_FAQ_ITEMS } from "@/lib/locationPods/experimental/manakauExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/manakau/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/manakau/manakau-purepod-glass-cabin-seaward-kaikoura-mountains.jpg";

const META_DESCRIPTION =
  "PurePod Manakau: glass cabin for two in the Kaikōura region, Canterbury. Seaward mountains & Pacific; short walk-in, private site. Self-contained stay with local provisions.";

const SEO_TITLE_ABSOLUTE =
  "Manakau PurePod | Glass Cabin, Kaikōura, New Zealand";

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
