import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { greystoneEditorialConfig } from "@/lib/locationPods/experimental/greystoneExperimentalData";

export function GreystoneExperimentalView() {
  return <EditorialPodLocationView config={greystoneEditorialConfig} />;
}
