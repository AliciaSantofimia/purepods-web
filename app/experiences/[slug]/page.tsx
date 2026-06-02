import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  EXPERIENCE_PAGES,
  EXPERIENCE_SLUGS,
  type ExperienceSlug,
  isExperienceSlug,
} from "@/lib/experiencesData";
import { AdventureWildlifeView } from "@/components/experiences/views/AdventureWildlifeView";
import { CultureView } from "@/components/experiences/views/CultureView";
import { JourneyView } from "@/components/experiences/views/JourneyView";
import { NightFallsView } from "@/components/experiences/views/NightFallsView";
import { RelaxCoastalView } from "@/components/experiences/views/RelaxCoastalView";
import { RomanticView } from "@/components/experiences/views/RomanticView";
import { WineDineView } from "@/components/experiences/views/WineDineView";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbListJsonLd } from "@/lib/seo/breadcrumbList";
import "../experienceRef.css";
import "../adventureWildlifeRef.css";
import "../romanticRef.css";
import "../nightFallsRef.css";
import "../cultureRef.css";
import "../journeyRef.css";
import "../wineDineRef.css";

const SITE_URL = "https://purepods.com";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return EXPERIENCE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isExperienceSlug(params.slug)) {
    return {};
  }
  const p = EXPERIENCE_PAGES[params.slug as ExperienceSlug];
  const canonical = `${SITE_URL}/experiences/${params.slug}`;
  const socialImage = `${SITE_URL}${p.heroSrc}`;

  return {
    title: { absolute: p.metaTitle },
    description: p.description,
    alternates: { canonical },
    openGraph: {
      title: p.metaTitle,
      description: p.description,
      url: canonical,
      siteName: "PurePods",
      type: "website",
      images: [
        {
          url: socialImage,
          alt: p.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.description,
      images: [socialImage],
    },
  };
}

export default function ExperienceDetailPage({ params }: Props) {
  if (!isExperienceSlug(params.slug)) {
    notFound();
  }

  const slug = params.slug as ExperienceSlug;
  const breadcrumbJsonLd = createBreadcrumbListJsonLd([
    { name: "Home", item: "https://purepods.com/" },
    { name: "Experiences", item: "https://purepods.com/experiences" },
    {
      name: EXPERIENCE_PAGES[slug].breadcrumbLabel,
      item: `${SITE_URL}/experiences/${slug}`,
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {renderExperienceView(slug)}
    </>
  );
}

function renderExperienceView(slug: ExperienceSlug) {
  switch (slug) {
    case "adventure-wildlife":
      return <AdventureWildlifeView />;
    case "romance":
      return <RomanticView />;
    case "journey":
      return <JourneyView />;
    case "culture":
      return <CultureView />;
    case "relax-coastal":
      return <RelaxCoastalView />;
    case "wine-dine":
      return <WineDineView />;
    case "stargazing":
      return <NightFallsView />;
  }
}
