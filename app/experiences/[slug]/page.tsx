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
import "../experienceRef.css";
import "../romanticRef.css";
import "../nightFallsRef.css";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return EXPERIENCE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isExperienceSlug(params.slug)) {
    return {};
  }
  const p = EXPERIENCE_PAGES[params.slug as ExperienceSlug];
  return {
    title: { absolute: p.metaTitle },
    description: p.description,
    alternates: { canonical: `/experiences/${params.slug}` },
  };
}

export default function ExperienceDetailPage({ params }: Props) {
  if (!isExperienceSlug(params.slug)) {
    notFound();
  }

  const slug = params.slug as ExperienceSlug;

  switch (slug) {
    case "adventure-wildlife":
      return <AdventureWildlifeView />;
    case "romantic":
      return <RomanticView />;
    case "journey":
      return <JourneyView />;
    case "culture":
      return <CultureView />;
    case "relax-coastal":
      return <RelaxCoastalView />;
    case "wine-dine":
      return <WineDineView />;
    case "night-falls":
      return <NightFallsView />;
    default:
      notFound();
  }
}
