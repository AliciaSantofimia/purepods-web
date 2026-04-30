import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { ruruEditorialConfig } from "@/lib/locationPods/experimental/ruruExperimentalData";

export function RuruExperimentalView() {
  return <EditorialPodLocationView config={ruruEditorialConfig} />;
}
