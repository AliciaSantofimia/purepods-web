import type { Metadata } from "next";
import { ChooseMapPodsShell } from "@/components/pods/choose-map-experimental/ChooseMapPodsShell";

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

export default function PodsPage() {
  return <ChooseMapPodsShell />;
}
