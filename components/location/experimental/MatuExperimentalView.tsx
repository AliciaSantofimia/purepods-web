import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { matuEditorialConfig } from "@/lib/locationPods/experimental/matuExperimentalData";

export function MatuExperimentalView() {
  return <EditorialPodLocationView config={matuEditorialConfig} />;
}
