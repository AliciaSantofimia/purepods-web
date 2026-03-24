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

import heroImage from "@/assets/img/kiromako/kiromako-purepod-remote-glass-cabin-nature-new-zealand.jpg";
import podAerial from "@/assets/img/kiromako/kiromako-purepod-aerial-coastal-landscape-new-zealand.jpg";
import podShower from "@/assets/img/kiromako/kiromako-purepod-shower-sunset-view-new-zealand.jpg";
import podBed from "@/assets/img/kiromako/kiromako-purepod-glass-cabin-interior-bed-new-zealand.jpg";
import expGully from "@/assets/img/kiromako/kiromako-experience-cathedral-gully-coastal-landscape-new-zealand.jpg";
import expWine from "@/assets/img/kiromako/kiromako-experience-waipara-valley-wine-tasting-new-zealand.jpg";
import expCoast from "@/assets/img/kiromako/kiromako-experience-waipara-coast-cliffs-beach-new-zealand.jpg";
import travelPath from "@/assets/img/kiromako/kiromako-purepod-walking-path-arrival-new-zealand.jpg";
import travelForest from "@/assets/img/kiromako/kiromako-purepod-forest-path-walking-trail-new-zealand.jpg";
import travelDining from "@/assets/img/kiromako/kiromako-purepod-local-produce-dining-experience-new-zealand.jpg";
import travelDinner from "@/assets/img/kiromako/kiromako-purepod-local-dinner-meal-new-zealand.jpg";

const CANONICAL_URL = "https://purepods.com/location/korimako/";
const OG_IMAGE_URL =
  "https://purepods.com/assets/img/kiromako/kiromako-purepod-remote-glass-cabin-nature-new-zealand.jpg";

const KORIMAKO_BOOKING_URL = "https://purepods.com/booking/?force_site_id=6";

const META_DESCRIPTION =
  "PurePod Korimako: glass cabin for two in Hurunui, North Canterbury. Final access: 750 m walk (10–15 min) with steps. About 90 min north of Christchurch; open views and privacy.";

const SEO_TITLE_ABSOLUTE =
  "Korimako PurePod | Glass Cabin, Hurunui, New Zealand";

/** Hero lead: factual + tone; access detail lives in The Pod & Before you travel. */
const HERO_SUBTITLE =
  "PurePod Korimako is a private glass cabin for two, set high in the Hurunui hills of North Canterbury — open fields, long horizons and light that moves across the land. A short walk completes the arrival; there are no neighbours here, only space, glass and the wide Canterbury sky.";

const FAQ_ITEMS: LocationFaqItem[] = [
  {
    question: "How do I get to PurePod Korimako?",
    answer:
      "The drive to PurePod Korimako is about 90 minutes north of Christchurch (100 km), through historic farming country. The final part of the journey includes a 750 m walk to the pod. The track has steps and uneven ground, so suitable footwear is recommended.",
  },
  {
    question: "What is the walk to the pod like?",
    answer:
      "Arrival is part of the journey: a 10–15 minute walk (about 750 m) marks the transition into calm. The track has steps and uneven ground, so suitable footwear is recommended.",
  },
  {
    question: "What is the climate usually like?",
    answer:
      "Korimako enjoys a warm, dry inland climate. Days are often sunny, with cooler evenings and clear mornings. Layered clothing is recommended. The mix of open hills and distant sea keeps the air clear and the light strong.",
  },
  {
    question: "How does food work at the pod?",
    answer:
      "Your PurePod Korimako is fully equipped for a quiet, comfortable and self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
  },
  {
    question: "How many people can stay?",
    answer:
      "PurePod Korimako is designed for two. At the end of the walk there are no neighbours or distractions — only space, privacy and views that open in every direction.",
  },
];

function korimakoStructuredData() {
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
        name: "PurePod Korimako",
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hurunui",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private glass cabin with open Hurunui landscape views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Accommodation for two guests",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walk-in access (~750 m, steps and uneven ground)",
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
        alt: "Korimako PurePod glass cabin in the Hurunui landscape, New Zealand",
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

export default function KorimakoPage() {
  return (
    <>
      <JsonLd data={korimakoStructuredData()} />
      <LightboxProvider>
        <LocationHero
          title="Korimako"
          subtitle={HERO_SUBTITLE}
          imageSrc={heroImage}
          imageAlt="Korimako PurePod glass cabin in the Hurunui landscape, New Zealand"
          imagePosition="70% 50%"
        />
        <Container as="div" className={styles.locationContent}>
          <PodSection
            title="The Pod"
            hint="The essentials, no fluff"
            paragraphs={[
              "PurePod Korimako is an open, quiet escape deeply connected to the land. Set high on the Hurunui landscape, the pod is surrounded by gentle hills, open fields and wide horizons stretching toward distant mountains; on clear days, the ocean appears on the horizon.",
              "Arrival is part of the journey: a 10–15 minute walk (about 750 m) marks the transition into calm. At the end there are no neighbours or distractions — only space, privacy and views that open in every direction. Designed for two, it is a simple, comfortable retreat to rest, breathe and let the pace of the day slow down.",
            ]}
            gallery={[
              {
                src: podAerial,
                alt: "Aerial view of Korimako PurePod in the Hurunui landscape, New Zealand",
                position: "50% 55%",
                big: true,
              },
              {
                src: podShower,
                alt: "Sunset view from Korimako PurePod, Hurunui, New Zealand",
                position: "50% 60%",
                fillGap: true,
              },
              {
                src: podBed,
                alt: "Interior of Korimako PurePod glass cabin with bed, Hurunui, New Zealand",
                position: "50% 65%",
              },
            ]}
            galleryCaption="PurePod Korimako is not just a place to sleep but an immersion in a wide, open landscape. Surrounded by fields and rolling hills, the pod feels elevated and free, with a direct connection to the natural setting. Inside, everything is designed for two: a warm, comfortable space from which to watch the changing light, the vast sky and the stillness of the land. A place to disconnect, observe and simply be."
          />
          <ExperiencesSection
            title="Experiences that define Korimako"
            hint="Limestone landscape, open coast and rural life"
            intro="A curated selection of three experiences that capture the essence of Hurunui — open landscapes, sculpted coast and rural calm."
            experiences={[
              {
                title: "Cathedral Gully & Gore Bay",
                image: expGully,
                imageAlt:
                  "Cathedral Gully and Gore Bay coastal landscape, North Canterbury, New Zealand",
                paragraphs: [
                  "Limestone formations, sculpted cliffs and an open coast define this part of North Canterbury. Cathedral Gully and Gore Bay reveal wide beaches, clear horizons and a strong sense of space.",
                  "A landscape where time moves slowly and nature sets the pace.",
                ],
                links: [
                  {
                    label: "Explore Cathedral Gully",
                    href: "https://maps.app.goo.gl/NBLG9s4ZR81d762y9",
                  },
                  {
                    label: "Explore Gore Bay",
                    href: "https://maps.app.goo.gl/Krv1Yfp9jmSp6tUz9",
                  },
                ],
              },
              {
                title: "Wine & local flavour — Waipara",
                image: expWine,
                imageAlt:
                  "Wine tasting in Waipara Valley near Korimako PurePod, New Zealand",
                paragraphs: [
                  "Cool-climate vineyards and family-run wineries offer a relaxed way to discover the region’s food culture. Waipara Springs Winery & Restaurant is known for seasonal cooking and local wines, with tables among the vines.",
                  "About 25 minutes from PurePod Korimako, it is a perfect pause between landscape and flavour.",
                ],
                links: [
                  {
                    label: "Visit Waipara Springs Winery & Restaurant",
                    href: "https://www.waiparasprings.co.nz/",
                  },
                ],
              },
              {
                title: "Rural heritage & slow discoveries",
                image: expCoast,
                imageAlt:
                  "Waipara coast with cliffs and beach near Korimako PurePod, New Zealand",
                paragraphs: [
                  "Local experiences reflect the rural character of the region. The historic Weka Pass Railway offers a gentle journey through farming country, while the Amberley Farmers’ Market connects you with local produce and the rhythm of the community.",
                  "Tradition, community and rural life in an open, serene setting.",
                ],
                links: [
                  {
                    label: "Explore Hurunui region",
                    href: "https://visithurunui.co.nz/",
                  },
                ],
              },
            ]}
            extraTitle="More ways to explore Hurunui"
            extraBody={
              <>
                <p>
                  <strong>Local life and quiet discoveries.</strong>
                </p>
                <p>
                  Beyond the open landscape, Korimako also connects with
                  Hurunui’s rural life. The{" "}
                  <a
                    href="https://www.wekapassrailway.co.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weka Pass Railway
                  </a>
                  , a heritage train that runs through hills and vineyards,
                  operates on selected days (usually Sundays and holidays) and
                  offers a quiet, scenic way to experience local railway
                  history.
                </p>
                <p>
                  The{" "}
                  <a
                    href="https://www.facebook.com/amberleyfarmersmarket/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amberley Farmers’ Market
                  </a>
                  , every Saturday morning year-round, brings together local
                  produce, artisan food and the slow pace of the community.
                  Simple experiences that reveal the authentic side of the
                  place.
                </p>
              </>
            }
          />
          <TravelSection
            title="Before you travel"
            hint="Practical details, without losing the mood"
            cards={[
              {
                type: "withImages",
                title: "The journey",
                images: [
                  {
                    src: travelPath,
                    alt: "Walking path toward Korimako PurePod in the Hurunui, New Zealand",
                  },
                  {
                    src: travelForest,
                    alt: "Forest path and walking trail near Korimako PurePod, New Zealand",
                  },
                ],
                body: "The final part of the journey includes a 750 m walk to the pod. The track has steps and uneven ground, so suitable footwear is recommended. The drive to PurePod Korimako is about 90 minutes north of Christchurch (100 km), through historic farming country.",
              },
              {
                type: "plain",
                title: "The climate",
                body: "Korimako enjoys a warm, dry inland climate. Days are often sunny, with cooler evenings and clear mornings. Layered clothing is recommended. The mix of open hills and distant sea keeps the air clear and the light strong.",
              },
              {
                type: "withImages",
                title: "Food & dining",
                images: [
                  {
                    src: travelDining,
                    alt: "Local produce and dining at Korimako PurePod, Hurunui, New Zealand",
                  },
                  {
                    src: travelDinner,
                    alt: "Dinner at Korimako PurePod, Hurunui, New Zealand",
                  },
                ],
                body: "Your PurePod Korimako is fully equipped for a quiet, comfortable and self-contained stay. Inside you will find a selection of gourmet meals ready to heat, breakfast provisions, snacks, tea and coffee — wherever possible from local Hurunui producers. Meals are designed to be simple to prepare, so you spend less time cooking and more time enjoying the landscape, the changing light and the calm. As there are no shops or restaurants nearby, everything is provided so your stay is easy, comfortable and worry-free.",
              },
            ]}
          />
          <LocationFaqSection items={FAQ_ITEMS} />
          <LocationCta
            priceFrom="From $— / night"
            bookHref={KORIMAKO_BOOKING_URL}
          />
        </Container>
      </LightboxProvider>
    </>
  );
}
