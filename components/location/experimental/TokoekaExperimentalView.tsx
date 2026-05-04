import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { tokoekaEditorialConfig } from "@/lib/locationPods/experimental/tokoekaExperimentalData";

export function TokoekaExperimentalView() {
  return <EditorialPodLocationView config={tokoekaEditorialConfig} />;
}
