import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { kokomeaEditorialConfig } from "@/lib/locationPods/experimental/kokomeaExperimentalData";

export function KokomeaExperimentalView() {
  return <EditorialPodLocationView config={kokomeaEditorialConfig} />;
}
