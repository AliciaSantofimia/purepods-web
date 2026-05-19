import type { Metadata } from "next";
import { PodsLuxuryTestShell } from "@/components/pods/luxury-test/PodsLuxuryTestShell";
import { parseChooseMapRegionParam } from "@/lib/chooseMapExperimentalData";

const CANONICAL = "https://purepods.com/pods";

export const metadata: Metadata = {
  title: { absolute: "Pods — PurePods" },
  description:
    "Explore PurePods — glass eco-cabins across New Zealand. Choose your place on the map: each pod has its own rhythm.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Pods — PurePods",
    description:
      "Explore PurePods — glass eco-cabins across New Zealand. Choose your place on the map: each pod has its own rhythm.",
    url: CANONICAL,
    siteName: "PurePods",
    locale: "en_NZ",
    type: "website",
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
