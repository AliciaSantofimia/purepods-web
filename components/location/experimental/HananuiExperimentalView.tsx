import { EditorialPodLocationView } from "./EditorialPodLocationView";
import { hananuiEditorialConfig } from "@/lib/locationPods/experimental/hananuiExperimentalData";

export function HananuiExperimentalView() {
  return <EditorialPodLocationView config={hananuiEditorialConfig} />;
}
