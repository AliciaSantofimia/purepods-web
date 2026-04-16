import {
  EXPLORE_POD_CARDS,
  type ExploreIslandFilter,
  type ExplorePodCard,
} from "@/lib/podsExploreData";

export type PodsMegaRegionId = ExploreIslandFilter;

export type PodsMegaRegion = {
  id: PodsMegaRegionId;
  title: string;
  subtitle: string;
  pods: ExplorePodCard[];
};

const REGION_ORDER: PodsMegaRegionId[] = ["north", "south", "stewart"];

const REGION_COPY: Record<PodsMegaRegionId, { title: string; subtitle: string }> = {
  north: {
    title: "North Island",
    subtitle: "Coast, forest & geothermal pockets",
  },
  south: {
    title: "South Island",
    subtitle: "Harbour hills, high country & bays",
  },
  stewart: {
    title: "Stewart Island",
    subtitle: "Sanctuary quiet & wild shoreline",
  },
};

/** Regional groups for the PODS nav mega menu — from `/pods` explore data. */
export function getPodsMegaRegions(): PodsMegaRegion[] {
  return REGION_ORDER.map((id) => ({
    id,
    title: REGION_COPY[id].title,
    subtitle: REGION_COPY[id].subtitle,
    pods: EXPLORE_POD_CARDS.filter((c) => c.filter === id),
  }));
}
