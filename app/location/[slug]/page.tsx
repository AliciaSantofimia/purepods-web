import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceFromBackLink } from "@/components/location/ExperienceFromBackLink";
import { loadLocationPodPage } from "@/lib/locationPods/locationPodPageLoader";
import {
  getLocationPodSlugsForDynamicSegmentStaticParams,
  isLocationPodSlug,
} from "@/lib/locationPods/slugs";

type Props = { params: { slug: string }; searchParams?: { from?: string | string[] } };

export function generateStaticParams() {
  return getLocationPodSlugsForDynamicSegmentStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocationPodSlug(params.slug)) {
    return {};
  }
  const mod = await loadLocationPodPage(params.slug);
  return mod.podMetadata;
}

export default async function LocationPodPage({ params, searchParams }: Props) {
  if (!isLocationPodSlug(params.slug)) {
    notFound();
  }
  const { PodView } = await loadLocationPodPage(params.slug);
  return (
    <>
      <ExperienceFromBackLink from={searchParams?.from} />
      <PodView />
    </>
  );
}
