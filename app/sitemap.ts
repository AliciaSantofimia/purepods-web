import type { MetadataRoute } from "next";

const SITE_URL = "https://purepods.com";

const ROUTES = [
  "/",
  "/pods",
  "/location/atatu/",
  "/location/greystone/",
  "/location/makoha/",
  "/location/hananui/",
  "/location/kahutara/",
  "/location/korimako/",
  "/location/manakau/",
  "/location/tokoeka/",
  "/location/kokomea/",
  "/location/taima/",
  "/location/haurapa/",
  "/location/rewarewa/",
  "/location/pohue/",
  "/location/pamu/",
  "/location/matu/",
  "/location/ruru/",
  "/experiences",
  "/experiences/stargazing",
  "/experiences/romance",
  "/experiences/journey",
  "/experiences/relax-coastal",
  "/experiences/culture",
  "/experiences/wine-dine",
  "/experiences/adventure-wildlife",
  "/our-story",
  "/frequently-asked-questions",
  "/contact-us",
  "/privacy-policy",
  "/terms-of-service",
  "/refunds",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
  }));
}
