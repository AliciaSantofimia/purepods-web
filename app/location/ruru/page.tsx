import type { Metadata } from "next";
import { ExperienceFromBackLink } from "@/components/location/ExperienceFromBackLink";
import { podMetadata, PodView } from "@/lib/locationPods/pages/ruru";

/**
 * `/location/ruru` — same UI as the former `/location/ruru-experimental` preview:
 * `PodView` = JSON-LD + `RuruExperimentalView` (`components/location/experimental/RuruExperimentalView.tsx`).
 */
export const metadata: Metadata = podMetadata;

type Props = { searchParams?: { from?: string | string[] } };

export default function RuruLocationPage({ searchParams }: Props) {
  return (
    <>
      <ExperienceFromBackLink from={searchParams?.from} />
      <PodView />
    </>
  );
}