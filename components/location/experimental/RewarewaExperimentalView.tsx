import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { rewarewaEditorialConfig } from "@/lib/locationPods/experimental/rewarewaExperimentalData";

export function RewarewaExperimentalView() {
  return <EditorialPodLocationView config={rewarewaEditorialConfig} />;
}
