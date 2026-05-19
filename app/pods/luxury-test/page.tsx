import type { Metadata } from "next";
import { PodsLuxuryTestShell } from "@/components/pods/luxury-test/PodsLuxuryTestShell";
import { parseChooseMapRegionParam } from "@/lib/chooseMapExperimentalData";

export const metadata: Metadata = {
  title: { absolute: "Pods (luxury test) — PurePods" },
  description:
    "Experimental luxury editorial layout for PurePods — glass eco-cabins across New Zealand. Not indexed.",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function PodsLuxuryTestPage({ searchParams }: PageProps) {
  const raw = searchParams.region;
  const initialRegion = parseChooseMapRegionParam(
    Array.isArray(raw) ? raw[0] : raw,
  );
  return <PodsLuxuryTestShell initialRegion={initialRegion} />;
}
