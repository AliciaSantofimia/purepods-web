import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { korimakoEditorialConfig } from "@/lib/locationPods/experimental/korimakoExperimentalData";

export function KorimakoExperimentalView() {
  return <EditorialPodLocationView config={korimakoEditorialConfig} />;
}
