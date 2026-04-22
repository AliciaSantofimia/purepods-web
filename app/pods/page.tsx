import type { Metadata } from "next";
import { ExplorePodsMapExperimentalV2Shell } from "@/components/pods/ExplorePodsMapExperimentalV2Shell";

const CANONICAL = "https://purepods.com/pods";

export const metadata: Metadata = {
  title: { absolute: "Pods — PurePods" },
  description:
    "Explore PurePods — glass eco-cabins across New Zealand. Each pod has its own rhythm. Choose where you want to spend the night.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Pods — PurePods",
    description:
      "Explore PurePods — glass eco-cabins across New Zealand. Each pod has its own rhythm. Choose where you want to spend the night.",
    url: CANONICAL,
    siteName: "PurePods",
    locale: "en_NZ",
    type: "website",
  },
};

export default function PodsPage() {
  return <ExplorePodsMapExperimentalV2Shell />;
}
