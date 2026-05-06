import type { Metadata } from "next";
import { HaurapaExperimentalView } from "@/components/location/experimental/HaurapaExperimentalView";

const CANONICAL_URL = "https://purepods.com/location/haurapa/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/haurapa/haurapa-purepod-bedroom-view-mountains-central-otago-new-zealand.jpg";

const META_DESCRIPTION =
  "PurePod Haurapa is a secluded glass cabin retreat in Central Otago. High-country calm, wide views across the Pisa Range and complete privacy for two above Cromwell.";

const SEO_TITLE = "Haurapa PurePod | Glass Cabin in Central Otago, New Zealand";

export const podMetadata: Metadata = {
  title: SEO_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        alt: "Haurapa PurePod bedroom with panoramic mountain views in Central Otago, New Zealand",
      },
    ],
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

/**
 * Editorial UI aligned with Pōhue, Pāmu and other migrated pods.
 * @see `@/components/location/experimental/HaurapaExperimentalView`
 */
export function PodView() {
  return <HaurapaExperimentalView />;
}
