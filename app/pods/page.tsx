import type { Metadata } from "next";
import { PodsLuxuryTestShell } from "@/components/pods/luxury-test/PodsLuxuryTestShell";
import { parseChooseMapRegionParam } from "@/lib/chooseMapExperimentalData";

const CANONICAL = "https://purepods.com/pods";
const SEO_TITLE = "Pods — PurePods";
const META_DESCRIPTION =
  "Explore PurePods — glass eco-cabins across New Zealand. Choose your place on the map: each pod has its own rhythm.";
const SOCIAL_IMAGE =
  "https://purepods.com/assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg";
const SOCIAL_IMAGE_ALT =
  "PurePods private off-grid glass cabin in a secluded New Zealand landscape";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    siteName: "PurePods",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE,
        alt: SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

type PodsPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function PodsPage({ searchParams }: PodsPageProps) {
  const raw = searchParams.region;
  const initialRegion = parseChooseMapRegionParam(
    Array.isArray(raw) ? raw[0] : raw,
  );
  return <PodsLuxuryTestShell initialRegion={initialRegion} />;
}
