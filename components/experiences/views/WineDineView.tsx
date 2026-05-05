import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import { AdventureWildlifePageTemplate } from "@/components/experiences/views/AdventureWildlifePageTemplate";
import { adventureRestClosingSlides } from "@/lib/experiencesData/adventureWildlife";
import {
  wineDineAboutLeadHtml,
  wineDineContextBody,
  wineDineContextHeading,
  wineDineExperienceSlides,
  wineDineFaq,
  wineDineHero,
  wineDineLocalSlides,
  wineDineRestaurantSlides,
  wineDineViewSlides,
  wineDineVineyardSlides,
} from "@/lib/experiencesData/wineDineData";

export function WineDineView() {
  return (
    <AdventureWildlifePageTemplate
      hero={wineDineHero}
      heroTitle="Wine & Dine Experiences in New Zealand"
      heroSummary="Days shaped by vineyards, long lunches and local flavours — then nights in your PurePod, where the landscape gives every taste time to settle."
      contextHeading={wineDineContextHeading}
      contextBody={wineDineContextBody}
      carouselHeading="Curated wine and dining experiences"
      carouselIntro="A curated starting point for days shaped by food, wine, views and regional character."
      experienceSlides={wineDineExperienceSlides}
      restEyebrow="When the day unfolds"
      restHeading="From wine-country days to complete stillness"
      restLead={[
        "Days here aren't hurried — they're savoured.",
        "A tasting among vines, a table with a view, and a night where the landscape stays with you after the meal.",
      ]}
      restSlides={adventureRestClosingSlides}
      faqItems={wineDineFaq}
      stayClosingHeading="Stay somewhere that changes how you experience it all"
      stayClosingBody={[
        "PurePods are placed to give you access to these moments — but more importantly, to what comes after them.",
        "Stillness. Space. And a deeper sense of place.",
      ]}
      ctaEyebrow="Wine & Dine"
      ctaTopSupport="Check real-time availability across all PurePods."
      ctaLabel="Check availability"
      ctaHref="https://purepods.com/booking/"
      ctaBottomSupport="Choose your PurePod and plan your stay around it."
    />
  );
}
