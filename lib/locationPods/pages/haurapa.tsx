import type { Metadata } from "next";
import { heroFrameFor } from "@/lib/locationPods/heroReference";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationHero,
  PodSection,
  ExperiencesSection,
  TravelSection,
  LocationCta,
} from "@/components/location";
import { Container } from "@/components/ui";
import styles from "@/app/location/locationLayout.module.css";

/* Haurapa images — from assets/img/haurapa */
const heroImage = "/assets/img/haurapa/haurapa-purepod-bedroom-view-mountains-central-otago-new-zealand.jpg";
const podExterior = "/assets/img/haurapa/haurapa-purepod-exterior-landscape-central-otago.jpg";
const podInterior = "/assets/img/haurapa/haurapa-purepod-interior-view-central-otago.jpg";
const podBedroomSunset = "/assets/img/haurapa/haurapa-purepod-bedroom-sunset-central-otago.jpg";
const expHiking = "/assets/img/haurapa/haurapa-hiking-trail-central-otago-landscape-new-zealand.jpg";
const expOliveGrove = "/assets/img/haurapa/haurapa-olive-grove-central-otago-landscape-new-zealand.jpg";
const expVineyard = "/assets/img/haurapa/tekano-estate-vineyard-central-otago-wine-region-new-zealand.jpg";
const journeyWalking = "/assets/img/haurapa/haurapa-purepod-walking-track-arrival-central-otago-new-zealand.jpg";
const journeyTrack = "/assets/img/haurapa/haurapa-purepod-access-track-central-otago-new-zealand.jpg";
const foodDining = "/assets/img/haurapa/haurapa-outdoor-dining-local-produce-central-otago-new-zealand.jpg";
const foodHamper = "/assets/img/haurapa/haurapa-purepod-food-hamper-lunch-central-otago.jpg";

const CANONICAL_URL = "https://purepods.com/location/haurapa/";
const OG_IMAGE_URL = "https://purepods.com/assets/img/haurapa/haurapa-purepod-bedroom-view-mountains-central-otago-new-zealand.jpg";

export const podMetadata: Metadata = {
  title: "Haurapa PurePod | Glass Cabin in Central Otago, New Zealand",
  description:
    "PurePod Haurapa is a secluded glass cabin retreat in Central Otago. High-country calm, wide views across the Pisa Range and complete privacy for two above Cromwell.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: "Haurapa PurePod | Glass Cabin in Central Otago, New Zealand",
    description:
      "PurePod Haurapa is a secluded glass cabin retreat in Central Otago. High-country calm, wide views across the Pisa Range and complete privacy for two above Cromwell.",
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        alt: "Haurapa PurePod bedroom with panoramic mountain views in Central Otago, New Zealand",
      },
    ],
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haurapa PurePod | Glass Cabin in Central Otago, New Zealand",
    description:
      "PurePod Haurapa is a secluded glass cabin retreat in Central Otago. High-country calm, wide views across the Pisa Range and complete privacy for two above Cromwell.",
    images: [OG_IMAGE_URL],
  },
};

const HAURAPA_BOOKING_URL = "https://purepods.com/booking/?force_site_id=9";

export function PodView() {
  return (
    <LightboxProvider>
      <LocationHero
          {...heroFrameFor("haurapa")}
        title="Central Otago, Haurapa"
        subtitle="A peaceful retreat in the dramatic heart of Central Otago. PurePod Haurapa offers high-country calm and wide, rugged landscapes above Cromwell, with views across rocky formations and toward the Pisa Range. Shaped by geology and extreme seasons, it's a place of expansive days, quiet nights and a deep sense of space."
        imageSrc={heroImage}
        imageAlt="Haurapa PurePod bedroom with panoramic mountain views in Central Otago, New Zealand"
      />
      <Container as="div" className={styles.locationContent}>
        <PodSection
          galleryVariant="podTextBottom"
          title="The Pod"
          hint="The essentials, no fluff"
          paragraphs={[
            "A 700-metre walk (15–20 minutes) leads to the pod, following historic gold-rush tracks as views open and privacy increases. Set high above the landscape, the pod feels completely secluded, with no neighbours or shared spaces.",
            "Designed for two, it offers a warm, comfortable base to take in the vastness of Central Otago — simple accommodation where the landscape takes the lead.",
          ]}
          gallery={[
            {
              src: podExterior,
              alt: "Haurapa PurePod exterior in Central Otago landscape, New Zealand",
              position: "50% 55%",
              big: true,
            },
            {
              src: podInterior,
              alt: "Interior view from Haurapa PurePod with bed, dining table and mountain landscape in Central Otago",
              position: "50% 70%",
              fillGap: true,
            },
            {
              src: podBedroomSunset,
              alt: "Glass cabin bedroom at Haurapa PurePod with sunset reflections in Central Otago",
              position: "50% 70%",
            },
          ]}
          galleryCaption="High-country calm and wide views across rocky formations and the Pisa Range — a place to rest, walk and let the vast Central Otago landscape shape your stay."
        />
        <ExperiencesSection
          title="Experiences that define Haurapa"
          hint="Wine country, rugged landscapes and cycling trails"
          intro="A curated selection of experiences that capture the essence of Central Otago — lakeside trails, gold-mining heritage and the region's celebrated wines."
          experiences={[
            {
              title: "Lake Dunstan Trail — Bannockburn Bridge",
              image: expHiking,
              imageAlt:
                "Lake Dunstan Trail hiking path with lakeside and valley views in Central Otago, New Zealand",
              paragraphs: [
                "One of Central Otago's most scenic routes, following the lakeshore between rugged cliffs and open water. Starting near Bannockburn Bridge, the trail offers wide valley views and a strong sense of space, ideal for cycling or walking.",
                "Why it's special: lakeside trail, dramatic geology, cycling and walking, open landscapes.",
              ],
              links: [
                {
                  label: "Explore Lake Dunstan Trail",
                  href: "https://www.southernlakestrails.nz/lake-dunstan-trail",
                },
              ],
            },
            {
              title: "Bannockburn Sluicings — Gold-Mining Landscapes",
              image: expOliveGrove,
              imageAlt:
                "Bannockburn Sluicings sculpted gold-mining landscapes in Central Otago, New Zealand",
              paragraphs: [
                "This historic reserve reveals landscapes sculpted by Central Otago's gold-mining past. Eroded cliffs and exposed earth create a striking setting that connects directly with the region's geology and history.",
                "Why it's special: gold-mining heritage, sculpted landscapes, geology, history in the land.",
              ],
              links: [
                {
                  label: "Explore Bannockburn Sluicings Historic Reserve",
                  href: "https://doc.govt.nz/parks-and-recreation/places-to-go/otago/places/bannockburn-area/things-to-do/bannockburn-sluicings-track",
                },
              ],
            },
            {
              title: "Wine Tasting — Te Kano Estate or Mt Difficulty",
              image: expVineyard,
              imageAlt:
                "Te Kano Estate vineyard and Central Otago wine region landscape, New Zealand",
              paragraphs: [
                "Bannockburn sits at the heart of one of the world's great cool-climate wine regions. A tasting at Te Kano Estate or Mt Difficulty offers the chance to experience Central Otago's celebrated Pinot Noir among vines and rugged hills.",
                "Why it's special: Central Otago wines, Pinot Noir, vineyard views, local flavour.",
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
                  src: journeyWalking,
                  alt: "Walking track to Haurapa PurePod arrival in Central Otago, New Zealand",
                },
                {
                  src: journeyTrack,
                  alt: "Haurapa PurePod access track through Central Otago high-country, New Zealand",
                },
              ],
              body: "PurePod Haurapa is located near Cromwell, approximately one hour from Queenstown. The final part of the journey includes a 700 m uphill walk, following historic gold-mining tracks.",
            },
            {
              type: "plain",
              title: "The Weather",
              body: "Central Otago experiences strong seasonal contrasts — hot, dry summers and cold winters with possible snow. Layers are essential year-round.",
            },
            {
              type: "withImages",
              title: "The Food",
              images: [
                {
                  src: foodDining,
                  alt: "Outdoor dining with local produce at Haurapa PurePod, Central Otago, New Zealand",
                },
                {
                  src: foodHamper,
                  alt: "Food hamper lunch at Haurapa PurePod with local produce and mountain views in Central Otago, New Zealand",
                },
              ],
              body: "You may bring your own food or pre-order a breakfast and dinner hamper when booking. Hampers feature fresh Central Otago produce and are designed for simple meals enjoyed at the pod, with uninterrupted views across the landscape.",
            },
          ]}
        />
        <LocationCta
          priceFrom="From $890.00 — / night"
          bookHref={HAURAPA_BOOKING_URL}
        />
      </Container>
    </LightboxProvider>
  );
}
