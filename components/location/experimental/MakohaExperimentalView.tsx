import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { makohaEditorialConfig } from "@/lib/locationPods/experimental/makohaExperimentalData";

export function MakohaExperimentalView() {
  return <EditorialPodLocationView config={makohaEditorialConfig} />;
}
