import type { Metadata } from "next";
import { RuruExperimentalView } from "@/components/location/experimental/RuruExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { RURU_FAQ_ITEMS } from "@/lib/locationPods/experimental/ruruExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/ruru/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg";

const META_DESCRIPTION =
  "Ruru PurePod is a private off-grid glass cabin for two in Waikino, Coromandel, with Mount Karangahake views, native bush, farmland and nearby Waihi.";

const SEO_TITLE_ABSOLUTE =
  "Ruru PurePod, Coromandel | Private Off-Grid Glass Cabin";

function ruruStructuredData() {
  const faqEntities = RURU_FAQ_ITEMS.map((item) => ({
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
        name: "Ruru PurePod",
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

/**
 * Same editorial UI as the old preview route; adds Schema.org JSON-LD for production SEO.
 * @see `@/components/location/experimental/RuruExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={ruruStructuredData()} />
      <RuruExperimentalView />
    </>
  );
}
