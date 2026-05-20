import type { Metadata } from "next";
import { PamuExperimentalView } from "@/components/location/experimental/PamuExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { PAMU_FAQ_ITEMS } from "@/lib/locationPods/experimental/pamuExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/pamu/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg";

const META_DESCRIPTION =
  "Pāmu PurePod is a private off-grid glass cabin for two in Rotorua, set within green farmland near geothermal landscapes, Māori culture, wellness experiences and forest adventures.";

const SEO_TITLE_ABSOLUTE =
  "Pāmu PurePod, Rotorua | Private Off-Grid Glass Cabin";

function pamuStructuredData() {
  const faqEntities = PAMU_FAQ_ITEMS.map((item) => ({
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
        name: "Pāmu PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rotorua",
          addressRegion: "Bay of Plenty",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin in Rotorua geothermal and farm landscape",
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
        alt: "Pāmu PurePod glass cabin in the Rotorua landscape, New Zealand",
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
 * Editorial UI aligned with Rewarewa, Mākōha and Ruru; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/PamuExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={pamuStructuredData()} />
      <PamuExperimentalView />
    </>
  );
}
