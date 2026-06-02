import { AdventureWildlifePageTemplate } from "@/components/experiences/views/AdventureWildlifePageTemplate";
import { EXPERIENCE_PAGES } from "@/lib/experiencesData";
import {
  adventureContextBody,
  adventureContextHeading,
  adventureExperienceSlides,
  adventureFaq,
  adventureHero,
  adventureRestClosingSlides,
  adventureWildlifeFaqPageJsonLd,
} from "@/lib/experiencesData/adventureWildlife";

export function AdventureWildlifeView() {
  const faqJsonLd = adventureWildlifeFaqPageJsonLd();

  return (
    <AdventureWildlifePageTemplate
      faqJsonLd={faqJsonLd}
      hero={adventureHero}
      breadcrumbLabel={EXPERIENCE_PAGES["adventure-wildlife"].breadcrumbLabel}
      heroTitle="Adventure & Wildlife Experiences in New Zealand"
      heroSummary="Days shaped by wildlife, water and open landscapes across New Zealand — then nights in your PurePod, where remote glass cabins settle you into stillness and the sound of the bush."
      contextHeading={adventureContextHeading}
      contextBody={adventureContextBody}
      carouselHeading="Curated wildlife and adventure experiences"
      carouselIntro="A curated starting point for days shaped by wildlife, landscape and distance."
      experienceSlides={adventureExperienceSlides}
      restEyebrow="When the day unfolds"
      restHeading="From wild encounters to complete stillness"
      restLead={[
        "Days here aren't packed — they're shaped.",
        "A morning on the ocean, an afternoon in geothermal silence, and a night where the only sound is the wind through the landscape.",
      ]}
      restSlides={adventureRestClosingSlides}
      faqItems={adventureFaq}
      stayClosingHeading="Stay somewhere that changes how you experience it all"
      stayClosingBody={[
        "PurePods are placed to give you access to these moments — but more importantly, to what comes after them.",
        "Stillness. Space. And a deeper sense of place.",
      ]}
      ctaEyebrow="Adventure & Wildlife"
      ctaTopSupport="Check real-time availability across all PurePods."
      ctaLabel="Check availability"
      ctaHref="https://purepods.com/booking/"
      ctaBottomSupport="Choose your PurePod and plan your stay around it."
    />
  );
}
