import type { Metadata } from "next";
import { TaimaExperimentalView } from "@/components/location/experimental/TaimaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { TAIMA_FAQ_ITEMS } from "@/lib/locationPods/experimental/taimaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/taima/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";

const META_DESCRIPTION =
  "Tāima PurePod is a private off-grid glass cabin for two near Cromwell, Central Otago, with Kawarau Gorge views, rocky outcrops, Lake Dunstan and rugged mountain scenery.";

const SEO_TITLE_ABSOLUTE =
  "Tāima PurePod, Central Otago | Private Off-Grid Glass Cabin";

function taimaStructuredData() {
  const faqEntities = TAIMA_FAQ_ITEMS.map((item) => ({
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
        name: "Tāima PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        image: OG_IMAGE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cromwell",
          addressRegion: "Otago",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with wide Central Otago outlook",
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
        alt: "Tāima PurePod glass cabin with vineyard and Central Otago hills, New Zealand",
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
 * Editorial UI aligned with Rewarewa, Pōhue and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/TaimaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={taimaStructuredData()} />
      <TaimaExperimentalView />
    </>
  );
}
