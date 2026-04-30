import type { LocationFaqItem } from "@/components/location/LocationFaqSection";

export type EditorialTravelCard =
  | {
      key: string;
      variant: "photos";
      title: string;
      body: string;
      images: { src: string; alt: string }[];
    }
  | {
      key: string;
      variant: "editorial";
      title: string;
      body: string;
      editorialEyebrow: string;
      editorialLead: string;
    };

export type EditorialExperienceItem = {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
};

export type EditorialPodLocationConfig = {
  heroKicker: string;
  hero: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitleParagraphs: string[];
    imagePosition: string;
    imagePositionMd?: string;
    imagePositionXl?: string;
  };
  podCarouselAriaLabel: string;
  podNarrative: {
    title: string;
    hint: string;
    paragraphs: string[];
    galleryCaption: string;
    gallery: { src: string; alt: string; position: string }[];
  };
  travelBlock: {
    title: string;
    hint: string;
    cards: EditorialTravelCard[];
  };
  experiencesCollapsible: {
    summaryTitle: string;
    summaryIntro: string;
  };
  experiencesBlock: {
    title: string;
    hint: string;
    intro: string;
    items: EditorialExperienceItem[];
    moreTitle: string;
    moreSubtitle: string;
    moreBody: string;
    moreRecommendations: { label: string; place: string; href: string }[];
  };
  faqItems: LocationFaqItem[];
  cta: { priceFrom: string; bookHref: string };
};
