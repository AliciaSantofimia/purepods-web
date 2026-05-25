import type { Metadata } from "next";
import { KorimakoExperimentalView } from "@/components/location/experimental/KorimakoExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { KORIMAKO_FAQ_ITEMS } from "@/lib/locationPods/experimental/korimakoExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/korimako/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/korimako/korimako-purepod-glass-cabin-native-bush-greta-valley-new-zealand.jpg";

const META_DESCRIPTION =
  "PurePod Korimako: glass cabin for two in Hurunui, North Canterbury. Final access: 750 m walk (10–15 min) with steps. About 90 min north of Christchurch; open views and privacy.";

const SEO_TITLE_ABSOLUTE =
  "Korimako PurePod | Glass Cabin, Hurunui, New Zealand";

function korimakoStructuredData() {
  const faqEntities = KORIMAKO_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Korimako",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hurunui",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with open Hurunui landscape views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walk-in access (~750 m, steps and uneven ground)",
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
        alt: "Korimako PurePod glass cabin in the Hurunui landscape, New Zealand",
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
 * Editorial UI aligned with Rewarewa, Atatū and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/KorimakoExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={korimakoStructuredData()} />
      <KorimakoExperimentalView />
    </>
  );
}
