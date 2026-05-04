import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { atatuEditorialConfig } from "@/lib/locationPods/experimental/atatuExperimentalData";

export function AtatuExperimentalView() {
  return <EditorialPodLocationView config={atatuEditorialConfig} />;
}
