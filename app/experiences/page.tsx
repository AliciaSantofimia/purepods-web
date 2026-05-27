import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    absolute:
      "Experiences at PurePods | Stargazing, Romantic Getaways & Nature — PurePods",
  },
  description:
    "Explore PurePods experiences in New Zealand — stargazing, romantic getaways, scenic journeys, wildlife, wine, culture and nature.",
  alternates: { canonical: "/experiences" },
};

const featured = {
  href: "/experiences/stargazing",
  tag: "Stargazing",
  title: "Night Falls",
  description:
    "Stargazing, dark skies and night-sky moments from a private off-grid glass cabin.",
  cta: "View Night Falls →",
  image: "/assets/img/experiences/night-falls/purepods-dark-sky-stargazing-glass-cabin-new-zealand.jpg",
  imageAlt:
    "PurePods glass cabin under a dark night sky for stargazing in New Zealand",
};

type GridCard = {
  href: string;
  tag: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  /** `object-position` for the photo (matches previous background-position). */
  mediaPos?: string;
  /** Optional decorative / SEO alt for card media (defaults to empty). */
  imageAlt?: string;
};

const experiencesPrimary: GridCard[] = [
  {
    href: "/experiences/romantic",
    tag: "Retreat",
    title: "Romantic",
    description:
      "A romantic escape for slow mornings, secluded landscapes and time together in nature.",
    cta: "View Romantic →",
    image:
      "/assets/img/experiences/romantic/purepods-romantic-getaway-bedroom-fireplace-night.jpg",
    imageAlt: "Romantic PurePods bedroom with fireplace at night",
  },
  {
    href: "/experiences/journey",
    tag: "Journeys",
    title: "Scenic routes",
    description:
      "Scenic routes and slow travel through New Zealand landscapes, from one PurePod to the next.",
    cta: "Explore Scenic Journeys →",
    image:
      "/assets/img/experiences/journeys/new-zealand-native-forest-sunrise-landscape.jpg",
    imageAlt:
      "New Zealand native forest sunrise landscape for scenic PurePods journeys",
  },
];

const experiencesMore: GridCard[] = [
  {
    href: "/experiences/adventure-wildlife",
    tag: "Adventure & Wildlife",
    title: "Adventure & Wildlife",
    description:
      "Nature and wildlife experiences shaped by forests, rivers, coastlines and wild New Zealand places.",
    cta: "Explore Adventure & Wildlife →",
    image:
      "/assets/img/experiences/experiences/new-zealand-adventure-wildlife-kayaking.jpg",
    imageAlt: "Kayaking beneath a waterfall in a New Zealand adventure setting",
    mediaPos: "center 90%",
  },
  {
    href: "/experiences/wine-dine",
    tag: "Wine & Dine",
    title: "Wine & Dine",
    description:
      "Local food, wine country and vineyard moments woven into the PurePods experience.",
    cta: "Explore Wine & Dine →",
    image:
      "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
    imageAlt:
      "Local food and wine experience at a PurePods stay in New Zealand wine country",
  },
  {
    href: "/experiences/relax-coastal",
    tag: "Relax & Coastal",
    title: "Relax & Coastal",
    description:
      "Coastal and relaxation experiences — sea air, open space and quiet places to unwind.",
    cta: "Explore Relax & Coastal →",
    image:
      "/assets/img/experiences/experiences/secret-spot-hot-tubs-forest-rotorua-new-zealand.jpg",
    imageAlt:
      "People relaxing in forest hot tubs at Secret Spot, Rotorua, New Zealand surrounded by native ferns",
  },
  {
    href: "/experiences/culture",
    tag: "Culture",
    title: "Culture",
    description:
      "Stories of Aotearoa, rich culture, living traditions and places that shape the journey.",
    cta: "Explore Culture →",
    image:
      "/assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
    imageAlt: "Māori cultural ceremony in Rotorua, New Zealand",
  },
];

const CARD_MEDIA_SIZES =
  "(max-width: 640px) calc(100vw - 32px), (max-width: 900px) calc(100vw - 32px), min(50vw, 520px)";

const FEATURED_SIZES =
  "(max-width: 640px) calc(100vw - 32px), min(920px, calc(100vw - 32px))";

export default function ExperiencesPage() {
  return (
    <>
      <header className="nav nav--solid experiences-nav" role="banner">
        <div className="nav__bar">
          <a className="nav-brand" href="/" aria-label="PurePods — Home">
            <Image
              src="/assets/img/LogoPCverdesinfondo.png"
              alt="PurePods"
              width={603}
              height={414}
              sizes="(max-width: 720px) min(200px, 52vw), min(200px, 42vw)"
              decoding="async"
              priority
            />
          </a>

          <nav className="nav__links" aria-label="Primary">
            <a href="/pods">Pods</a>
          </nav>

          <a className="nav__book" href="https://purepods.com/booking/">
            Book
          </a>
        </div>
      </header>

      <main className="experiences-index wrap">
        <section className="hero" aria-labelledby="experiences-hero-heading">
          <span className="kicker">Experiences</span>
          <h1 id="experiences-hero-heading">
            Experience New Zealand, your way
          </h1>
          <p className="lead">
            Choose your way into the remote New Zealand landscape, from private
            off-grid glass cabins and dark skies to scenic routes, wildlife,
            wine country and stories of Aotearoa.
          </p>
        </section>

        <p className="intro">
          Each PurePod sits in a remote New Zealand landscape, designed for
          quiet, immersive stays. Around it, you&apos;ll find nature
          experiences, scenic routes, dark skies and local stories that shape
          your stay — before, during and after your night.
        </p>

        <a className="featured" href={featured.href}>
          <span className="featured__media" aria-hidden>
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes={FEATURED_SIZES}
              style={{
                objectFit: "cover",
                objectPosition: "center 40%",
              }}
              priority
              decoding="async"
            />
          </span>
          <div className="featured-inner">
            <span className="tag">{featured.tag}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <span className="go">{featured.cta}</span>
          </div>
        </a>

        <section className="section" aria-labelledby="experiences-grid-title">
          <h2 id="experiences-grid-title" className="section-title">
            Experiences
          </h2>
          <div className="grid">
            {experiencesPrimary.map((item) => (
              <a key={item.href} className="card" href={item.href}>
                <div className="media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    sizes={CARD_MEDIA_SIZES}
                    style={{
                      objectFit: "cover",
                      objectPosition: item.mediaPos ?? "center",
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="body">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="go">{item.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="soon-section" aria-labelledby="more-experiences-title">
          <h2 id="more-experiences-title">More experiences</h2>
          <div className="soon-grid">
            {experiencesMore.map((item) => (
              <a key={item.href} className="card" href={item.href}>
                <div className="media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    sizes={CARD_MEDIA_SIZES}
                    style={{
                      objectFit: "cover",
                      objectPosition: item.mediaPos ?? "center",
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="body">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="go">{item.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer brandLogo simplified />
    </>
  );
}
