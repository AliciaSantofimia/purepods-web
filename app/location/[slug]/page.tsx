import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceFromBackLink } from "@/components/location/ExperienceFromBackLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { LOCATION_POD_BREADCRUMB_LABELS } from "@/lib/locationPods/breadcrumbLabels";
import { loadLocationPodPage } from "@/lib/locationPods/locationPodPageLoader";
import {
  getLocationPodSlugsForDynamicSegmentStaticParams,
  isLocationPodSlug,
} from "@/lib/locationPods/slugs";
import { createBreadcrumbListJsonLd } from "@/lib/seo/breadcrumbList";

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
  const slug = params.slug;
  const { PodView } = await loadLocationPodPage(slug);
  const breadcrumbJsonLd = createBreadcrumbListJsonLd([
    { name: "Home", item: "https://purepods.com/" },
    { name: "Pods", item: "https://purepods.com/pods" },
    {
      name: LOCATION_POD_BREADCRUMB_LABELS[slug],
      item: `https://purepods.com/location/${slug}/`,
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
