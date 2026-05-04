import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { taimaEditorialConfig } from "@/lib/locationPods/experimental/taimaExperimentalData";

export function TaimaExperimentalView() {
  return <EditorialPodLocationView config={taimaEditorialConfig} />;
}
