import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { ForestCarouselBlock } from "@/components/experiences/ForestCarouselBlock";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import { AdventureWildlifePageTemplate } from "@/components/experiences/views/AdventureWildlifePageTemplate";
import { adventureRestClosingSlides } from "@/lib/experiencesData/adventureWildlife";
import {
  journeyAboutLeadHtml,
  journeyContextBody,
  journeyContextHeading,
  journeyCyclingSlides,
  journeyExperienceSlides,
  journeyFaq,
  journeyForestSlides,
  journeyHero,
  journeyHikingSlides,
} from "@/lib/experiencesData/journeyData";

export function JourneyView() {
  return (
    <AdventureWildlifePageTemplate
      hero={journeyHero}
      heroTitle="Journey Experiences in New Zealand"
      heroSummary="Days shaped by trails, forests, coastlines and open landscapes — then nights in your PurePod, where remote glass cabins give the journey space to settle."
      contextHeading={journeyContextHeading}
      contextBody={journeyContextBody}
      carouselHeading="Curated journey experiences"
      carouselIntro="A curated starting point for days shaped by walking, riding and moving through the landscape."
      experienceSlides={journeyExperienceSlides}
      restEyebrow="When the day unfolds"
      restHeading="From the route to complete stillness"
      restLead={[
        "Days here aren't rushed — they're travelled.",
        "A morning on the trail, an afternoon crossing forest or coast, and a night where the view does the quiet work.",
      ]}
      restSlides={adventureRestClosingSlides}
      faqItems={journeyFaq}
      stayClosingHeading="Stay somewhere that changes how you experience it all"
      stayClosingBody={[
        "PurePods are placed to give you access to these moments — but more importantly, to what comes after them.",
        "Stillness. Space. And a deeper sense of place.",
      ]}
      ctaEyebrow="Journey"
      ctaTopSupport="Check real-time availability across all PurePods."
      ctaLabel="Check availability"
      ctaHref="https://purepods.com/booking/"
      ctaBottomSupport="Choose your PurePod and plan your stay around it."
    />
  );
}
