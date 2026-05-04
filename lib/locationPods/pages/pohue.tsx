import type { Metadata } from "next";
import { PohueExperimentalView } from "@/components/location/experimental/PohueExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { POHUE_FAQ_ITEMS } from "@/lib/locationPods/experimental/pohueExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/pohue/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg";

const META_DESCRIPTION =
  "PurePod Pōhue: glass cabin for two above Port Levy, Banks Peninsula. Access: 1.2 km uphill walk, 20–25 min. Harbour views; private; no shared spaces.";

const SEO_TITLE_ABSOLUTE =
  "Pōhue PurePod | Glass Cabin Above Port Levy, Banks Peninsula, New Zealand";

function pohueStructuredData() {
  const faqEntities = POHUE_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Pōhue",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Port Levy",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass eco-cabin with panoramic views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "No shared spaces or neighbouring guests",
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
        alt: "Pōhue PurePod glass cabin above coastal hills with views toward Port Levy and Banks Peninsula, New Zealand",
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
 * Editorial UI aligned with Pāmu, Mākōha and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/PohueExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={pohueStructuredData()} />
      <PohueExperimentalView />
    </>
  );
}
