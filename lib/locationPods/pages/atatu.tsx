import type { Metadata } from "next";
import { AtatuExperimentalView } from "@/components/location/experimental/AtatuExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { ATATU_FAQ_ITEMS } from "@/lib/locationPods/experimental/atatuExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/atatu/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/atatu/atatu-purepod-glass-cabin-night-stars-new-zealand.jpg";

const META_DESCRIPTION =
  "Atatū PurePod is a private off-grid glass cabin for two above the Greta Valley coastline, with sweeping sea views, sunrise light, rolling hills and native forest.";

const SEO_TITLE_ABSOLUTE =
  "Atatū PurePod | Hilltop Glass Cabin, Greta Valley Coast";

function atatuStructuredData() {
  const faqEntities = ATATU_FAQ_ITEMS.map((item) => ({
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
        name: "Atatū PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        image: OG_IMAGE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greta Valley",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private hilltop glass cabin with panoramic views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Self-contained stay with provisions supplied on site",
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
        alt: "Atatū PurePod glass cabin on a Hurunui hilltop above the Greta Valley coastline, New Zealand",
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
 * Editorial UI aligned with other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/AtatuExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={atatuStructuredData()} />
      <AtatuExperimentalView />
    </>
  );
}
