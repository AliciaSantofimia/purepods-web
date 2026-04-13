import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute:
      "Experiences at PurePods | Stargazing, Romantic Getaways & Nature — PurePods",
  },
  description:
    "Discover experiences around PurePods — stargazing, romantic retreats, scenic journeys and nature. Choose how you want to live the landscape.",
  alternates: { canonical: "/experiences" },
};

const featured = {
  href: "/experiences/night-falls",
  tag: "Stargazing",
  title: "Night Falls",
  description:
    "Dark sky stargazing in remote New Zealand — pure silence and a deep connection to the night.",
  cta: "View Night Falls →",
  image: "/assets/img/experiences/night-falls/dark-sky-purepod.jpg",
};

type GridCard = {
  href: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  /** `object-position` for the photo (matches previous background-position). */
  mediaPos?: string;
};

const experiencesPrimary: GridCard[] = [
  {
    href: "/experiences/romantic",
    tag: "Retreat",
    title: "Romantic",
    description:
      "Romantic stays in nature — slow down, switch off and reconnect in a private eco-cabin.",
    image:
      "/assets/img/experiences/romantic/purepods-romantic-getaway-bedroom-fireplace-night.jpg",
  },
  {
    href: "/experiences/journey",
    tag: "Journeys",
    title: "Scenic routes",
    description:
      "Scenic routes across New Zealand — discover landscapes, stops and journeys around your stay.",
    image:
      "/assets/img/experiences/journeys/new-zealand-native-forest-sunrise-landscape.jpg",
  },
];

const experiencesMore: GridCard[] = [
  {
    href: "/experiences/adventure-wildlife",
    tag: "Adventure & Wildlife",
    title: "Adventure & Wildlife",
    description:
      "Wildlife and outdoor experiences in New Zealand — explore, walk and observe nature up close.",
    image:
      "/assets/img/experiences/experiences/new-zealand-adventure-wildlife-kayaking.jpg",
    mediaPos: "center 90%",
  },
  {
    href: "/experiences/wine-dine",
    tag: "Wine & Dine",
    title: "Wine & Dine",
    description:
      "Food and wine experiences in New Zealand — local flavours, small producers and slow dining.",
    image:
      "/assets/img/experiences/experiences/new-zealand-wine-dine-local-food-experience.jpg",
  },
  {
    href: "/experiences/relax-coastal",
    tag: "Relax & Coastal",
    title: "Relax & Coastal",
    description:
      "Coastal and relaxation experiences — sea air, open space and quiet places to unwind.",
    image:
      "/assets/img/experiences/experiences/rotorua-relax-coastal-geothermal-lake.jpg",
  },
  {
    href: "/experiences/culture",
    tag: "Culture",
    title: "Culture",
    description:
      "Cultural experiences in New Zealand — stories of place, heritage and living traditions.",
    image:
      "/assets/img/experiences/experiences/rotorua-culture-maori-ceremony.jpg",
  },
];

const CARD_MEDIA_SIZES =
  "(max-width: 640px) calc(100vw - 32px), (max-width: 900px) calc(100vw - 32px), min(50vw, 520px)";

const FEATURED_SIZES =
  "(max-width: 640px) calc(100vw - 32px), min(920px, calc(100vw - 32px))";

export default function ExperiencesPage() {
  return (
    <>
      <header className="nav nav--solid" role="banner">
        <div className="nav__bar">
          <a className="nav-brand" href="/" aria-label="PurePods — Home">
            <Image
              src="/assets/img/purepods-logo-new-zealand.jpg"
              alt="PurePods"
              width={1000}
              height={1000}
              sizes="(max-width: 720px) min(260px, 78vw), min(240px, 42vw)"
              decoding="async"
            />
          </a>

          <nav className="nav__links" aria-label="Primary">
            <a href="/pods">Pods</a>
            <a href="/experiences" aria-current="page">
              Experiences
            </a>
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
            Nature, stargazing and slow travel experiences around PurePods
            eco-cabins.
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
              alt=""
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
                    alt=""
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
                  <span className="go">View more →</span>
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
                    alt=""
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
                  <span className="go">View more →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          PurePods · <a href="/">Home</a> · <a href="/pods">Pods</a> ·{" "}
          <a href="/experiences">Experiences</a> ·{" "}
          <a href="https://purepods.com/booking/">Book</a>
        </div>
      </footer>
    </>
  );
}
