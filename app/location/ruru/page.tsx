import type { Metadata } from "next";
import { ExperienceFromBackLink } from "@/components/location/ExperienceFromBackLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { LOCATION_POD_BREADCRUMB_LABELS } from "@/lib/locationPods/breadcrumbLabels";
import { podMetadata, PodView } from "@/lib/locationPods/pages/ruru";
import { createBreadcrumbListJsonLd } from "@/lib/seo/breadcrumbList";

/**
 * `/location/ruru` — same UI as the former `/location/ruru-experimental` preview:
 * `PodView` = JSON-LD + `RuruExperimentalView` (`components/location/experimental/RuruExperimentalView.tsx`).
 */
export const metadata: Metadata = podMetadata;

type Props = { searchParams?: { from?: string | string[] } };

export default function RuruLocationPage({ searchParams }: Props) {
  const breadcrumbJsonLd = createBreadcrumbListJsonLd([
    { name: "Home", item: "https://purepods.com/" },
    { name: "Pods", item: "https://purepods.com/pods" },
    {
      name: LOCATION_POD_BREADCRUMB_LABELS.ruru,
      item: "https://purepods.com/location/ruru/",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ExperienceFromBackLink from={searchParams?.from} />
      <PodView />
    </>
  );
}