import type { Metadata } from "next";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationHero,
  PodSection,
  ExperiencesSection,
  TravelSection,
  LocationCta,
  LocationFaqSection,
  type LocationFaqItem,
} from "@/components/location";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

/* Tāima images — from assets/img/taima only */
import heroImage from "@/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";
import podExterior from "@/assets/img/taima/taima-purepod-exterior-landscape-central-otago.png";
import podBedroom from "@/assets/img/taima/taima-purepod-bedroom-mountain-view-central-otago.jpg";
import podGlassVineyard from "@/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";
import expSluicings from "@/assets/img/taima/central-otago-rocky-canyon-hiking-trail.jpg";
import expLakeDunstan from "@/assets/img/taima/central-otago-lake-dunstan-cycling-trail.jpg";
import expWine from "@/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";
import travelClutha from "@/assets/img/taima/taima-clutha-river-autumn-landscape-central-otago-new-zealand.jpg";
import travelExterior from "@/assets/img/taima/taima-purepod-exterior-landscape-central-otago.png";
import travelFood from "@/assets/img/taima/taima-local-food-platter-central-otago.jpg";
import travelVineyard from "@/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";

const CANONICAL_URL = "https://purepods.com/location/taima/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg";

const TAIMA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=13";

const META_DESCRIPTION =
  "PurePod Tāima: private glass cabin for two above the Kawarau Gorge near Cromwell, Central Otago. Final walk: about 300 metres across gold-mining ground. Wide views, no shared spaces.";

const SEO_TITLE_ABSOLUTE =
  "Tāima PurePod | Glass Cabin above the Kawarau Gorge, Central Otago, New Zealand";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Tāima?",
    answer:
      "PurePod Tāima is located near Cromwell, around one hour from Queenstown following the Kawarau Gorge. The final section includes a short walk across historic gold-mining ground, where views begin to open.",
  },
  {
    question: "How long is the walk from the car park?",
    answer:
      "The final walk is about 300 metres and takes roughly five to ten minutes.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Central Otago experiences hot, dry summers and cold winters. Layers are recommended year-round.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "You may bring your own food or pre-order a breakfast and dinner hamper when booking. Meals are designed to be simple and enjoyed at the pod with wide open views.",
  },
  {
    question: "How many people can stay?",
    answer:
      "Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature.",
  },
];

function taimaStructuredData() {
  const faqEntities = FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        name: SEO_TITLE_ABSOLUTE,
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        inLanguage: "en-NZ",
        isPartOf: {
          "@type": "WebSite",
          name: "PurePods",
          url: "https://purepods.com",
        },
        about: { "@id": `${CANONICAL_URL}#lodging` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE_URL,
        },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${CANONICAL_URL}#lodging`,
        name: "PurePod Tāima",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cromwell",
          addressRegion: "Otago",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with wide Central Otago outlook",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Secluded setting with no shared spaces",
            value: true,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE_ABSOLUTE },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: SEO_TITLE_ABSOLUTE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    locale: "en_NZ",
    images: [
      {
        url: OG_IMAGE_URL,
        alt: "Tāima PurePod glass cabin with vineyard and Central Otago hills, New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PUREPODS",
    title: SEO_TITLE_ABSOLUTE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function TaimaPage() {
  return (
    <>
      <JsonLd data={taimaStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Central Otago, Tāima"
          subtitle={
            <>
              <p>A relaxed retreat above Central Otago&apos;s rugged landscapes</p>
              <p>
                PurePod Tāima is defined by open space and dramatic landscapes
                above the Kawarau Gorge near Cromwell, with wide views across
                rocky valleys, rivers and mountain ranges. Golden sunsets and
                clear southern skies shape slow days and quiet nights in the
                heart of Central Otago.
              </p>
            </>
          }
          imageSrc={heroImage}
          imageAlt="Tāima PurePod glass cabin with vineyard views and Central Otago hills near Cromwell, New Zealand"
          imagePosition="50% 55%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The experience of the Pod — Tāima"
            hint="The essentials, no fluff"
            paragraphs={[
              "Set at around 350 metres above sea level, the pod feels suspended above the landscape, with wide views and a strong sense of isolation.",
              "With no neighbours or shared spaces, the experience is shaped by silence, space and changing light — a retreat to slow down and take in Central Otago.",
              "Inside, everything is designed for two: a quiet, comfortable base from which to watch the shifting light and the wide horizon.",
            ]}
            gallery={[
              {
                src: podExterior,
                alt: "Tāima PurePod glass cabin exterior set in the Central Otago high country near Cromwell, New Zealand",
                position: "50% 50%",
                big: true,
              },
              {
                src: podBedroom,
                alt: "Bedroom in Tāima PurePod with panoramic mountain and valley views in Central Otago, New Zealand",
                position: "50% 58%",
                fillGap: true,
              },
              {
                src: podGlassVineyard,
                alt: "Tāima PurePod glass living space overlooking vines and rugged hills in Central Otago, New Zealand",
                position: "50% 50%",
              },
            ]}
            galleryCaption="PurePod Tāima is not a typical place to stay. It is a full immersion in Central Otago above the Kawarau Gorge — open space, dramatic landforms and clear southern skies. With no neighbours and no shared spaces, the pod is shaped by silence and changing light. Inside, everything is designed for two: a private retreat from which to take in rocky valleys, rivers and distant ranges at an unhurried pace."
          />
          <ExperiencesSection
            title="The experiences that define Tāima"
            hint="Central Otago · active landscapes, scenic drives & wine country · South Island"
            intro="A small selection of experiences that reflect Central Otago's landscapes, movement and relaxed pace."
            experiences={[
              {
                title: "Bannockburn Sluicings — Gold-Mining Landscapes",
                image: expSluicings,
                imageAlt:
                  "Rocky canyon and eroded landforms in Central Otago, echoing gold-era sculpted landscapes near Bannockburn, New Zealand",
                paragraphs: [
                  "This historic reserve reveals landscapes sculpted by Central Otago's gold-mining past. Eroded cliffs and exposed earth create a striking setting that connects directly with the region's geology and history.",
                  "Why it's special: gold-mining heritage + sculpted landscapes + geology + history in the land.",
                ],
                links: [
                  {
                    label: "Explore Bannockburn Sluicings Historic Reserve",
                    href: "https://doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bannockburn-area/things-to-do/bannockburn-sluicings-track",
                  },
                ],
              },
              {
                title: "Lake Dunstan Trail — Bannockburn Bridge",
                image: expLakeDunstan,
                imageAlt:
                  "Lake Dunstan Trail along the lakeshore with cliffs and open water in Central Otago, New Zealand",
                paragraphs: [
                  "One of Central Otago's most scenic routes, following the lakeshore between rugged cliffs and open water. Starting near Bannockburn Bridge, the trail offers wide valley views and a strong sense of space, ideal for cycling or walking.",
                  "Why it's special: lakeside trail + dramatic geology + cycling & walking + open landscapes.",
                ],
                links: [
                  {
                    label: "Explore Lake Dunstan Trail",
                    href: "https://www.southernlakestrails.nz/lake-dunstan-trail",
                  },
                ],
              },
              {
                title: "Wine Tasting — Te Kano Estate or Mt Difficulty",
                image: expWine,
                imageAlt:
                  "Tāima PurePod with vineyard rows and rugged Central Otago hills near Bannockburn wine country, New Zealand",
                paragraphs: [
                  "Bannockburn sits at the heart of one of the world's great cool-climate wine regions. A tasting at Te Kano Estate or Mt Difficulty offers the chance to experience Central Otago's celebrated Pinot Noir among vines and rugged hills.",
                  "Why it's special: Central Otago wines + Pinot Noir + vineyard views + local flavour.",
                ],
                links: [
                  {
                    label: "Explore Te Kano Estate",
                    href: "https://www.tekanoestate.com/",
                  },
                  {
                    label: "Explore Mt Difficulty",
                    href: "https://www.mtdifficulty.nz/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Central Otago"
            extraParagraphs={[
              "Beyond the pod, the region offers cycling trails, vineyard visits and dramatic landscapes shaped by gold and geology. Cromwell and Bannockburn are gateways to wine tasting, historic sites and the vast, open character of Central Otago.",
            ]}
          />
          <TravelSection
            title="Know before you go"
            hint="Practical details, without losing the mood"
            cards={[
              {
                type: "withImages",
                title: "The Journey",
                images: [
                  {
                    src: travelClutha,
                    alt: "Clutha River and autumn tones in the Central Otago landscape near Cromwell, New Zealand",
                  },
                  {
                    src: travelExterior,
                    alt: "Tāima PurePod in the Central Otago landscape, approached along the Kawarau Gorge near Cromwell, New Zealand",
                  },
                ],
                body: "PurePod Tāima is located near Cromwell, around one hour from Queenstown, following the Kawarau Gorge. The final section includes a short 300-metre walk (5–10 minutes) across historic gold-mining ground, where views begin to open.",
              },
              {
                type: "plain",
                title: "The Weather",
                body: "Central Otago experiences hot, dry summers and cold winters. Layers are recommended year-round.",
              },
              {
                type: "withImages",
                title: "The Food",
                images: [
                  {
                    src: travelFood,
                    alt: "Local food platter ready to enjoy at Tāima PurePod in Central Otago, New Zealand",
                  },
                  {
                    src: travelVineyard,
                    alt: "Tāima PurePod glass cabin with vineyard outlook — a setting for simple meals with wide views, Central Otago, New Zealand",
                  },
                ],
                body: "You may bring your own food or pre-order a breakfast and dinner hamper when booking. Meals are designed to be simple and enjoyed at the pod with wide open views.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $890.00 — / night"
            bookHref={TAIMA_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
