import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceFromBackLink } from "@/components/location/ExperienceFromBackLink";
import {
  isLocationPodSlug,
  LOCATION_POD_REGISTRY,
  LOCATION_POD_SLUGS,
} from "@/lib/locationPods";

type Props = { params: { slug: string }; searchParams?: { from?: string | string[] } };

export function generateStaticParams() {
  return LOCATION_POD_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocationPodSlug(params.slug)) {
    return {};
  }
  return LOCATION_POD_REGISTRY[params.slug].podMetadata;
}

export default function LocationPodPage({ params, searchParams }: Props) {
  if (!isLocationPodSlug(params.slug)) {
    notFound();
  }
  const { PodView } = LOCATION_POD_REGISTRY[params.slug];
  return (
    <>
      <ExperienceFromBackLink from={searchParams?.from} />
      <PodView />
    </>
  );
}
