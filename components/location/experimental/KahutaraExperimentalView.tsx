import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { kahutaraEditorialConfig } from "@/lib/locationPods/experimental/kahutaraExperimentalData";

export function KahutaraExperimentalView() {
  return <EditorialPodLocationView config={kahutaraEditorialConfig} />;
}
