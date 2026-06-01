import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";
import { JsonLd } from "@/components/seo/JsonLd";

const HOME_URL = "https://purepods.com/";
const SEO_TITLE = "PurePods | Private Off-Grid Glass Cabins in New Zealand";
const META_DESCRIPTION =
  "PurePods are private off-grid glass cabins in New Zealand, designed for two guests seeking secluded nature stays, stillness, stargazing and complete privacy.";
const HOME_OG_IMAGE_PATH =
  "/assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg";
const HOME_OG_IMAGE_URL = `https://purepods.com${HOME_OG_IMAGE_PATH}`;
const HOME_OG_IMAGE_ALT =
  "PurePods private off-grid glass cabin in a secluded New Zealand landscape";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: HOME_URL },
  openGraph: {
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: HOME_URL,
    siteName: "PurePods",
    type: "website",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        alt: HOME_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [HOME_OG_IMAGE_URL],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${HOME_URL}#organization`,
      name: "PurePods",
      url: HOME_URL,
      description: META_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${HOME_URL}#website`,
      name: "PurePods",
      url: HOME_URL,
      inLanguage: "en-NZ",
      publisher: {
        "@id": `${HOME_URL}#organization`,
      },
      description: META_DESCRIPTION,
    },
    {
      "@type": "WebPage",
      "@id": `${HOME_URL}#webpage`,
      name: SEO_TITLE,
      url: HOME_URL,
      inLanguage: "en-NZ",
      isPartOf: {
        "@id": `${HOME_URL}#website`,
      },
      about: [
        { "@type": "Thing", name: "Private off-grid glass cabins" },
        { "@type": "Thing", name: "New Zealand" },
        { "@type": "Thing", name: "Secluded nature stays for two guests" },
        { "@type": "Thing", name: "Stargazing" },
        { "@type": "Thing", name: "Complete privacy" },
      ],
      description: META_DESCRIPTION,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: HOME_OG_IMAGE_URL,
        caption: HOME_OG_IMAGE_ALT,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomePageClient />
    </>
  );
}
