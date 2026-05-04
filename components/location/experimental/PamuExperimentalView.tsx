import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { pamuEditorialConfig } from "@/lib/locationPods/experimental/pamuExperimentalData";

export function PamuExperimentalView() {
  return <EditorialPodLocationView config={pamuEditorialConfig} />;
}
