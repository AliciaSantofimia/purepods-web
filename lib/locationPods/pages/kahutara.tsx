import type { Metadata } from "next";
import { KahutaraExperimentalView } from "@/components/location/experimental/KahutaraExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { KAHUTARA_FAQ_ITEMS } from "@/lib/locationPods/experimental/kahutaraExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/kahutara/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/kahutara/kahutara-purepod-sunrise-over-river-valley.jpg";

const META_DESCRIPTION =
  "Kahutara PurePod is a private off-grid glass cabin for two high above the Kahutara River, inland from Kaikōura, with views to the Seaward Kaikōura Range.";

const SEO_TITLE_ABSOLUTE =
  "Kahutara PurePod | Glass Cabin above the Kahutara River near Kaikōura";

function kahutaraStructuredData() {
  const faqEntities = KAHUTARA_FAQ_ITEMS.map((item) => ({
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
        name: "Kahutara PurePod",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kaikōura",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private off-grid glass cabin above the Kahutara River with views to the Seaward Kaikōura Range",
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
        alt: "Kahutara PurePod glass cabin above the Kahutara River with views to the Seaward Kaikōura Range, New Zealand",
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
 * Editorial UI aligned with Manakau and North Island pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/KahutaraExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={kahutaraStructuredData()} />
      <KahutaraExperimentalView />
    </>
  );
}
