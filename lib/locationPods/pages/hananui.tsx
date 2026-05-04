import type { Metadata } from "next";
import { HananuiExperimentalView } from "@/components/location/experimental/HananuiExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { HANANUI_FAQ_ITEMS } from "@/lib/locationPods/experimental/hananuiExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/hananui/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/hananui/hananui-purepod-exterior-forest-view-stewart-island.jpg";

const META_DESCRIPTION =
  "PurePod Hananui: secluded retreat above Lee Bay on Stewart Island. Predator-free sanctuary, forest stillness and ocean views. Travel by flight or ferry, then a short walk through the predator-proof fence.";

const SEO_TITLE_ABSOLUTE =
  "Hananui PurePod | Lee Bay, Stewart Island, New Zealand";

function hananuiStructuredData() {
  const faqEntities = HANANUI_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Hananui",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stewart Island",
          addressRegion: "Southland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin above Lee Bay within a predator-free sanctuary",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Native forest and ocean views",
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
        alt: "PurePod Hananui glass cabin with native forest and ocean outlook above Lee Bay, Stewart Island, New Zealand",
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
 * Editorial UI aligned with Tokoeka, Rewarewa and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/HananuiExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={hananuiStructuredData()} />
      <HananuiExperimentalView />
    </>
  );
}
