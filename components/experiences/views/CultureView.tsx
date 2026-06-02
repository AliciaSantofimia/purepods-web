import { AdventureWildlifePageTemplate } from "@/components/experiences/views/AdventureWildlifePageTemplate";
import { EXPERIENCE_PAGES } from "@/lib/experiencesData";
import { adventureRestClosingSlides } from "@/lib/experiencesData/adventureWildlife";
import {
  cultureContextBody,
  cultureContextHeading,
  cultureExperienceSlides,
  cultureFaq,
  cultureHero,
} from "@/lib/experiencesData/cultureData";

export function CultureView() {
  return (
    <AdventureWildlifePageTemplate
      experienceClassName="culture-ref"
      hero={cultureHero}
      breadcrumbLabel={EXPERIENCE_PAGES.culture.breadcrumbLabel}
      heroTitle="Culture Experiences in New Zealand"
      heroSummary="Culture by PurePods connects heritage places, Māori cultural experiences, local stories and meaningful travel across Aotearoa New Zealand with nearby private glass cabins made for quiet reflection after the day."
      contextHeading={cultureContextHeading}
      contextBody={cultureContextBody}
      carouselHeading="Curated culture experiences"
      carouselIntro="A curated starting point for days shaped by heritage, storytelling and a deeper sense of place."
      experienceSlides={cultureExperienceSlides}
      restEyebrow="When the day unfolds"
      restHeading="From cultural connection to complete stillness"
      restLead={[
        "Days here aren't rushed — they're layered.",
        "A morning with stories of place, an afternoon among heritage streets or taonga, and a night where the landscape settles around you.",
      ]}
      restSlides={adventureRestClosingSlides}
      faqItems={cultureFaq}
      stayClosingHeading="Stay somewhere that changes how you experience it all"
      stayClosingBody={[
        "PurePods are placed to give you access to these moments — but more importantly, to what comes after them.",
        "Stillness. Space. And a deeper sense of place.",
      ]}
      ctaEyebrow="Culture"
      ctaTopSupport="Check real-time availability across all PurePods."
      ctaLabel="Check availability"
      ctaHref="https://purepods.com/booking/"
      ctaBottomSupport="Choose your PurePod and plan your stay around it."
    />
  );
}
