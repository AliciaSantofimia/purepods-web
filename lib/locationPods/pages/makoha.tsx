import type { Metadata } from "next";
import { MakohaExperimentalView } from "@/components/location/experimental/MakohaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { MAKOHA_FAQ_ITEMS } from "@/lib/locationPods/experimental/makohaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/makoha/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg";

const META_DESCRIPTION =
  "Mākoha PurePod is a private off-grid glass cabin near Kerikeri, designed for a quiet luxury escape among native bush, birdsong and Bay of Islands experiences.";

const SEO_TITLE_ABSOLUTE =
  "Mākoha PurePod, Kerikeri | Private Off-Grid Glass Cabin";

function makohaStructuredData() {
  const faqEntities = MAKOHA_FAQ_ITEMS.map((item) => ({
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
        name: "Mākoha PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kerikeri",
          addressRegion: "Northland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in native forest near the Bay of Islands",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walk-in access via native forest track (about 5–10 minutes)",
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
        alt: "Mākoha PurePod glass cabin in native forest near Kerikeri, Northland, New Zealand",
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
 * Editorial UI aligned with `/location/ruru`; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/MakohaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={makohaStructuredData()} />
      <MakohaExperimentalView />
    </>
  );
}
