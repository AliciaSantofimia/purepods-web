import type { Metadata } from "next";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationHero,
  PodSection,
  ExperiencesSection,
  TravelSection,
  LocationCta,
} from "@/components/location";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

/* Kahutara images — from assets/img/kahutara */
import heroImage from "@/assets/img/kahutara/kahutara-purepod-glass-cabin-kaikoura-new-zealand.jpg";
import podRiverValley from "@/assets/img/kahutara/kahutara-purepod-river-valley-view-kaikoura.jpg";
import podBedroom from "@/assets/img/kahutara/kahutara-purepod-bedroom-view-kaikoura-mountain.jpg";
import podMountain from "@/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg";
import podKitchen from "@/assets/img/kahutara/kahutara-purepod-kitchen-view-kaikoura-mountains.jpg";
import expWhale from "@/assets/img/kahutara/kaikoura-whale-watching-new-zealand.jpg";
import expPeninsula from "@/assets/img/kahutara/kaikoura-peninsula-walkway-coastal-track.jpg";
import expSeal from "@/assets/img/kahutara/kaikoura-seal-colony-new-zealand.jpg";
import travelValley from "@/assets/img/kahutara/kaikoura-river-valley-landscape.jpg";
import travelFarm from "@/assets/img/kahutara/kaikoura-countryside-farm-entrance.jpg";
import travelFood from "@/assets/img/kahutara/kahutara-local-food-platter-kaikoura.jpg";
import travelWine from "@/assets/img/kahutara/kahutara-wine-and-cheese-board-kaikoura.jpg";

export const metadata: Metadata = {
  title: "Kahutara",
  description:
    "PurePod Kahutara is a remote glass cabin retreat on the Kaikōura coast. Open skies, native landscape and complete privacy for two in a unique off-grid escape.",
  alternates: { canonical: "https://purepods.com/location/kahutara/" },
};

export default function KahutaraPage() {
  return (
    <LightboxProvider>
      <LocationHero
        title="Kaikōura, Kahutara"
        subtitle="Open hills, endless skies and the Seaward Kaikōura Range rising behind you. A remote retreat where everything slows down and nature sets the pace."
        imageSrc={heroImage}
        imageAlt="Kahutara PurePod glass cabin overlooking the Kaikōura mountains and river valley in New Zealand"
        imagePosition="70% 85%"
      />
      <Container as="div" className={styles.locationContent}>
        <PodSection
          title="The Pod"
          hint="The essentials, no fluff"
          paragraphs={[
            "On the wild Kaikōura coast, where open hills and endless skies meet the ocean, PurePod Kahutara offers a rare escape — quiet, private and deeply connected to the landscape.",
            "Arrival is part of the experience. A short walk takes you away from the everyday world and into complete stillness. At the end of the track, a fully private retreat awaits — no neighbours, no distractions, just you and the natural world.",
          ]}
          gallery={[
            {
              src: podRiverValley,
              alt: "Kahutara PurePod glass cabin at sunset in the Kaikōura countryside, New Zealand",
              position: "50% 78%",
              big: true,
            },
            {
              src: podBedroom,
              alt: "Bed inside Kahutara PurePod with panoramic view of the Kaikōura mountains, New Zealand",
              position: "50% 58%",
              fillGap: true,
            },
            {
              src: podMountain,
              alt: "Kahutara PurePod glass cabin surrounded by hills and Kaikōura mountains in New Zealand",
              position: "50% 70%",
            },
            {
              src: podKitchen,
              alt: "Kitchen and living area in Kahutara PurePod with Kaikōura mountain views, New Zealand",
              position: "50% 50%",
            },
          ]}
          galleryCaption="PurePod Kahutara is not a typical place to stay. It is a full immersion in the natural landscape of the Kaikōura coast. Surrounded by open hills and native vegetation, the pod is completely secluded — no neighbours, no shared spaces, just wind across the hills, silence, and a deep sense of being in nature. Inside, everything is designed for two: a warm and comfortable retreat from which to watch the wide sky, shifting light and open landscape, all from the privacy of your own hideaway in nature."
        />
        <ExperiencesSection
          title="Experiences that define Kahutara"
          hint="Mountains meeting the sea, marine wildlife and open horizons"
          intro="A curated selection of three experiences that capture the essence of this place — wild coastline, marine wildlife and dramatic landscapes."
          experiences={[
            {
              title: "Kaikōura Whale Experiences",
              image: expWhale,
              imageAlt:
                "Sperm whale tail diving in the ocean during whale watching in Kaikōura, New Zealand",
              paragraphs: [
                "A unique opportunity to see whales both from the air and from the ocean, revealing the full scale and beauty of Kaikōura's marine landscape — where deep waters, dramatic mountains and open sea meet.",
                "An iconic Kaikōura experience combining extraordinary marine wildlife, open horizons and the striking mountain range rising beside the ocean.",
              ],
              links: [
                {
                  label: "Explore Whale Watch Kaikōura",
                  href: "https://whalewatch.co.nz/your-experience/our-tours/whale-watch-trip-gift-voucher/",
                },
                {
                  label: "Explore Kaikōura Scenic Flights",
                  href: "https://gchaviation.com/kaikoura-scenic-flights/",
                },
              ],
            },
            {
              title: "Kaikōura Peninsula Walkway",
              image: expPeninsula,
              imageAlt:
                "Coastal cliffs along the Kaikōura Peninsula Walkway in New Zealand",
              paragraphs: [
                "A scenic coastal walk with open ocean views, rocky headlands and distant mountains — perfect for exploring at a relaxed pace while observing wildlife in its natural habitat, including New Zealand fur seals, seabirds and, at times, dolphins and whales offshore.",
                "Staying at Kahutara places you right in the heart of this wild coastal landscape.",
              ],
              links: [
                {
                  label: "Explore Kaikōura Peninsula Walkway",
                  href: "https://www.google.com/maps/place/Kaik%C5%8Dura+Peninsula+Walkway,+Canterbury+Region+7300,+New+Zealand/@-42.4256257,173.6889881,17z",
                },
              ],
            },
            {
              title: "Seal Kayak & Seal Swim Kaikōura",
              image: expSeal,
              imageAlt:
                "New Zealand fur seal resting on rocks near the Kaikōura coast",
              paragraphs: [
                "An active and immersive way to explore the coastline — paddling alongside seals or swimming with them in their natural habitat for a truly close-to-nature experience.",
                "A signature Kaikōura experience where wild coastline, marine wildlife and open ocean combine in a direct encounter with nature.",
              ],
              links: [
                {
                  label: "Explore Seal Kayak Kaikōura",
                  href: "https://www.sealkayakkaikoura.com/tours/seal-kayak-tour",
                },
                {
                  label: "Explore Seal Swim Kaikōura",
                  href: "https://www.sealswimkaikoura.co.nz/",
                },
              ],
            },
          ]}
          extraTitle="More ways to explore Kaikōura"
          extraParagraphs={[
            "Beyond the pod, the coastline continues to unfold at a gentle pace.",
            "Coastal walks and easy trails invite you to explore without hurry. Lookouts such as Ohau Point Lookout, Point Kean Viewpoint and Dolphin View Lookout offer wide horizons and ever-changing ocean views.",
            "The constant presence of the sea and marine wildlife accompanies every journey. Quiet hills and inland vineyards complete the feeling of space, stillness and open sky.",
          ]}
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
                  src: travelValley,
                  alt: "River valley landscape in the Kaikōura countryside, New Zealand",
                },
                {
                  src: travelFarm,
                  alt: "Countryside farm entrance along the rural road near Kahutara PurePod in the Kaikōura region",
                },
              ],
              body: "The final part of the journey is completed on foot. A short 10–15 minute walk leads you from the parking area to the pod, creating a sense of privacy and gentle disconnection from the outside world.",
            },
            {
              type: "plain",
              title: "The climate",
              body: "Kahutara sits on the exposed Kaikōura coast, where conditions can change quickly. Expect fresh air, coastal winds and cooler evenings throughout the year. Rain is part of the landscape and often adds even more atmosphere to the experience.",
            },
            {
              type: "withImages",
              title: "Food & dining",
              images: [
                {
                  src: travelFood,
                  alt: "Local food platter served at Kahutara PurePod with mountain views in Kaikōura",
                },
                {
                  src: travelWine,
                  alt: "Wine and cheese board on the deck at Kahutara PurePod with countryside views in Kaikōura",
                },
              ],
              body: "Each PurePod is equipped with a gas cooktop, barbecue, small fridge and all the essential cookware — utensils, pots, plates and cutlery — to prepare simple meals during your stay. You will also find a selection of tea and coffee to enjoy at the pod. You are welcome to bring your own food or pre-book a PurePod locally sourced dinner and breakfast package, ready to prepare and enjoy at your own pace.",
            },
          ]}
        />
        <LocationCta priceFrom="From $890.00 — / night" />
      </Container>
    </LightboxProvider>
  );
}
