import type { Metadata } from "next";
import { RewarewaExperimentalView } from "@/components/location/experimental/RewarewaExperimentalView";
import { JsonLd } from "@/components/seo/JsonLd";
import { REWAREWA_FAQ_ITEMS } from "@/lib/locationPods/experimental/rewarewaExperimentalData";

const CANONICAL_URL = "https://purepods.com/location/rewarewa/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/rewarewa/rewarewa-purepod-aerial-landscape-muriwai-coast.jpg";

const META_DESCRIPTION =
  "Rewarewa PurePod is a private off-grid glass cabin for two near Auckland and the Muriwai Coast, designed for a secluded nature escape among native bush, farmland, birdlife and wide western skies.";

const SEO_TITLE_ABSOLUTE =
  "Rewarewa PurePod, Muriwai Coast | Private Off-Grid Glass Cabin";

function rewarewaStructuredData() {
  const faqEntities = REWAREWA_FAQ_ITEMS.map((item) => ({
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
        name: "PurePod Rewarewa",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muriwai",
          addressRegion: "Auckland",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin on the Muriwai Coast with ocean and ranges outlook",
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
        alt: "Rewarewa PurePod glass cabin in the Muriwai Coast landscape, New Zealand",
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
 * Editorial UI aligned with `/location/makoha` and `/location/ruru`; JSON-LD FAQ matches page FAQ copy.
 * @see `@/components/location/experimental/RewarewaExperimentalView`
 */
export function PodView() {
  return (
    <>
      <JsonLd data={rewarewaStructuredData()} />
      <RewarewaExperimentalView />
    </>
  );
}
