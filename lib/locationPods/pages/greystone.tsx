import type { Metadata } from "next";
import { GreystoneExperimentalView } from "@/components/location/experimental/GreystoneExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { GREYSTONE_FAQ_ITEMS } from "@/lib/locationPods/experimental/greystoneExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/greystone/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/greystone/greystone-purepod-aerial-vineyard-landscape-waipara.jpg";

const META_DESCRIPTION =
  "PurePod Greystone: glass cabin for two above Greystone vineyard, Waipara Valley. ~10 min uphill walk. Under 1 hr from Christchurch. Wine country; self-contained.";

const SEO_TITLE_ABSOLUTE =
  "Greystone PurePod | Glass Cabin in Waipara Valley, New Zealand";

function greystoneStructuredData() {
  const faqEntities = GREYSTONE_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Greystone",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Waipara Valley",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin above a working vineyard",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Self-contained stay with provisions supplied on site",
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
        alt: "Aerial view of Greystone PurePod surrounded by vineyards and rolling hills in Waipara, New Zealand",
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
 * Editorial UI aligned with Korimako, Atatū and other migrated pods; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/GreystoneExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={greystoneStructuredData()} />
      <GreystoneExperimentalView />
    </>
  );
}
