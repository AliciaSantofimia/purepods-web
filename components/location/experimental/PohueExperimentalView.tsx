import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { pohueEditorialConfig } from "@/lib/locationPods/experimental/pohueExperimentalData";

export function PohueExperimentalView() {
  return <EditorialPodLocationView config={pohueEditorialConfig} />;
}
