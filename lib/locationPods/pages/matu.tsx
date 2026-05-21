import type { Metadata } from "next";
import { MatuExperimentalView } from "@/components/location/experimental/MatuExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { MATU_FAQ_ITEMS } from "@/lib/locationPods/experimental/matuExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/matu/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg";

const META_DESCRIPTION =
  "Matū PurePod is a private off-grid glass cabin for two near Waitomo and Ōtorohanga, with rolling farmland, native bush, King Country views and glowworm cave experiences nearby.";

const SEO_TITLE_ABSOLUTE =
  "Matū PurePod, Waitomo | Private Off-Grid Glass Cabin";

function matuStructuredData() {
  const faqEntities = MATU_FAQ_ITEMS.map((item) => ({
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
        name: "Matū PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Waitomo",
          addressRegion: "Waikato",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in Waitomo forest and limestone landscape",
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
        alt: "Matū PurePod glass cabin in the Waitomo landscape, New Zealand",
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
 * @see `@/components/location/experimental/MatuExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={matuStructuredData()} />
      <MatuExperimentalView />
    </>
  );
}
