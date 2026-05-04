import type { Metadata } from "next";
import { TokoekaExperimentalView } from "@/components/location/experimental/TokoekaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { TOKOEKA_FAQ_ITEMS } from "@/lib/locationPods/experimental/tokoekaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/tokoeka/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/tokoeka/tokoeka-purepod-exterior-sunset-view-stewart-island.jpg";

const META_DESCRIPTION =
  "PurePod Tokoeka: glass cabin for two in a predator-free eco-sanctuary on Stewart Island. Flight from Invercargill or ferry from Bluff; final walk through the predator-proof fence. Native forest, birdsong and stars.";

const SEO_TITLE_ABSOLUTE =
  "Tokoeka PurePod | Stewart Island Eco-Sanctuary, New Zealand";

function tokoekaStructuredData() {
  const faqEntities = TOKOEKA_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Tokoeka",
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
            name: "Private glass cabin within Mamaku Point predator-free eco-sanctuary",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Native forest setting with wildlife and night-sky outlook",
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
        alt: "PurePod Tokoeka glass cabin at sunset in native forest on Stewart Island, New Zealand",
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
 * Editorial UI aligned with Rewarewa, Tāima and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/TokoekaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={tokoekaStructuredData()} />
      <TokoekaExperimentalView />
    </>
  );
}
