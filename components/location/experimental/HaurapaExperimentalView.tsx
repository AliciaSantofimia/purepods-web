import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { haurapaEditorialConfig } from "@/lib/locationPods/experimental/haurapaExperimentalData";

export function HaurapaExperimentalView() {
  return <EditorialPodLocationView config={haurapaEditorialConfig} />;
}
