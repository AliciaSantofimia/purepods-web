import type { Metadata } from "next";
import { ExplorePodsMapExperimentalV2Shell } from "@/components/pods/ExplorePodsMapExperimentalV2Shell";

export const metadata: Metadata = {
  title: { absolute: "Pods (map preview v2) — PurePods" },
  description: "Experimental Explore layout with map v2 — city labels — not indexed.",
  robots: { index: false, follow: false },
};

export default function ExploreMapExperimentalV2Page() {
  return <ExplorePodsMapExperimentalV2Shell />;
}
