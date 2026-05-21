import type { Metadata } from "next";
import { KokomeaExperimentalView } from "@/components/location/experimental/KokomeaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { KOKOMEA_FAQ_ITEMS } from "@/lib/locationPods/experimental/kokomeaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/kokomea/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/kokomea/kokomea-purepod-glass-cabin-sunset-view-kapiti-coast.jpg";

const META_DESCRIPTION =
  "Kokomea PurePod is a private off-grid glass cabin for two on the Kāpiti Coast near Wellington, with Kāpiti Island views and sunset skies.";

const SEO_TITLE_ABSOLUTE =
  "Kokomea PurePod, Kāpiti Coast | Private Off-Grid Glass Cabin";

function kokomeaStructuredData() {
  const faqEntities = KOKOMEA_FAQ_ITEMS.map((item) => ({
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
        name: "Kokomea PurePod",
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

/**
 * Editorial UI aligned with Pāmu, Rewarewa, Mākōha and Ruru; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/KokomeaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={kokomeaStructuredData()} />
      <KokomeaExperimentalView />
    </>
  );
}
