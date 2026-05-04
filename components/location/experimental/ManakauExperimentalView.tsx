import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { manakauEditorialConfig } from "@/lib/locationPods/experimental/manakauExperimentalData";

export function ManakauExperimentalView() {
  return <EditorialPodLocationView config={manakauEditorialConfig} />;
}
