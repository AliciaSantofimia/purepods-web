import type { LocationPodSlug } from "./slugs";

/** Hero framing from reference HTML under `reference-html/location` (object-position + overlay). */
export type HeroFrameProps = {
  imagePosition: string;
  imagePositionMd?: string;
  imagePositionXl?: string;
  heroTallUltra?: boolean;
  heroOverlay?: "default" | "none";
};

const HERO_FRAMES: Record<LocationPodSlug, HeroFrameProps> = {
  atatu: {
    imagePosition: "70% 90%",
    imagePositionMd: "60% 75%",
    imagePositionXl: "55% 70%",
    heroTallUltra: true,
  },
  greystone: {
    imagePosition: "70% 70%",
    imagePositionMd: "60% 75%",
    imagePositionXl: "55% 70%",
    heroTallUltra: true,
  },
  kahutara: { imagePosition: "70% 85%" },
  pohue: { imagePosition: "50% 75%" },
  makoha: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  korimako: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  manakau: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  kokomea: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  pamu: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  matu: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  ruru: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  rewarewa: {
    imagePosition: "70% 50%",
    imagePositionMd: "60% 55%",
    imagePositionXl: "55% 60%",
    heroTallUltra: true,
  },
  taima: {
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
    heroTallUltra: true,
    heroOverlay: "none",
  },
  tokoeka: {
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
    heroTallUltra: true,
    heroOverlay: "none",
  },
  hananui: {
    imagePosition: "50% 55%",
    imagePositionMd: "50% 55%",
    imagePositionXl: "50% 55%",
    heroTallUltra: true,
    heroOverlay: "none",
  },
  haurapa: {
    imagePosition: "50% 78%",
    imagePositionMd: "50% 78%",
    imagePositionXl: "50% 78%",
    heroTallUltra: true,
    heroOverlay: "none",
  },
};

export function heroFrameFor(slug: LocationPodSlug): HeroFrameProps {
  return HERO_FRAMES[slug];
}
