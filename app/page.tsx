"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Footer } from "@/components/layout/Footer";

const LOGO = {
  src: "/assets/img/LogoPCblancosinfondo.png",
  width: 603,
  height: 414,
} as const;

const HERO_SLIDES = [
  {
    src: "/assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg",
    alt: "",
  },
  {
    src: "/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg",
    alt: "",
  },
  {
    src: "/assets/img/atatu/atatu-purepod-glass-cabin-night-stars-new-zealand.jpg",
    alt: "",
  },
  {
    src: "/assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg",
    alt: "",
  },
  {
    src: "/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg",
    alt: "",
  },
  {
    src: "/assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg",
    alt: "",
  },
] as const;

const LANDSCAPE_SLIDES = [
  {
    src: "/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg",
    alt: "Matū PurePod and Waitomo countryside from above",
  },
  {
    src: "/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg",
    alt: "Mākōha PurePod above Northland forest near Kerikeri",
  },
  {
    src: "/assets/img/rewarewa/rewarewa-purepod-glass-cabin-night-stars-muriwai-coast.jpg",
    alt: "Rewarewa PurePod aerial view over Muriwai coast",
  },
  {
    src: "/assets/img/pamu/pamu-purepod-glass-cabin-exterior-landscape-rotorua.jpg",
    alt: "Pāmu PurePod and Rotorua landscape from above",
  },
  {
    src: "/assets/img/ruru/ruru-purepod-glass-cabin-night-sky-coromandel.jpg",
    alt: "Ruru PurePod aerial view on the Coromandel",
  },
  {
    src: "/assets/img/kokomea/kokomea-purepod-aerial-countryside-landscape-kapiti-coast.jpg",
    alt: "Kokomea PurePod aerial view over Kāpiti countryside",
  },
  {
    src: "/assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg",
    alt: "Manakau PurePod above Kaikōura hills",
  },
  {
    src: "/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg",
    alt: "Kahutara PurePod with Kaikōura mountain landscape",
  },
  {
    src: "/assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg",
    alt: "Atatū PurePod on a Hurunui hilltop",
  },
  {
    src: "/assets/img/kiromako/kiromako-purepod-aerial-coastal-landscape-new-zealand.jpg",
    alt: "Korimako PurePod aerial coastal view near Hurunui",
  },
  {
    src: "/assets/img/greystone/greystone-purepod-aerial-vineyard-landscape-waipara.jpg",
    alt: "Greystone PurePod aerial view over Waipara vineyards",
  },
  {
    src: "/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg",
    alt: "Pōhue PurePod among coastal hills on Banks Peninsula",
  },
  {
    src: "/assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg",
    alt: "Haurapa PurePod in Central Otago landscape",
  },
  {
    src: "/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg",
    alt: "Tāima PurePod vineyard view in Central Otago",
  },
  {
    src: "/assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg",
    alt: "Tokoeka PurePod aerial view over Stewart Island forest",
  },
  {
    src: "/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg",
    alt: "Hananui PurePod aerial coastal view on Stewart Island",
  },
] as const;

/** Same order as `LANDSCAPE_SLIDES` — links to Next.js pod detail routes. */
const LANDSCAPE_POD_HREFS = [
  "/location/matu",
  "/location/makoha",
  "/location/rewarewa",
  "/location/pamu",
  "/location/ruru",
  "/location/kokomea",
  "/location/manakau",
  "/location/kahutara",
  "/location/atatu",
  "/location/korimako",
  "/location/greystone",
  "/location/pohue",
  "/location/haurapa",
  "/location/taima",
  "/location/tokoeka",
  "/location/hananui",
] as const;

const experiences = [
  {
    tag: "Night falls",
    title: "Stars without stage lights",
    description:
      "Deep dark, slow minutes, and the night sky as the main event.",
    image: "/assets/img/experiences/night-falls/purepods-dark-sky-stargazing-glass-cabin-new-zealand.jpg",
    alt: "Dark sky above a PurePod",
    link: "/experiences/night-falls",
    width: 1104,
    height: 1104,
  },
  {
    tag: "Romantic",
    title: "Time, unshared",
    description:
      "Space for two — unhurried mornings, long views, soft light.",
    image:
      "/assets/img/experiences/romantic/purepods-romantic-getaway-stargazing-bed-glass-roof.jpg",
    alt: "Couple stargazing from bed inside a PurePod",
    link: "/experiences/romantic",
    width: 1024,
    height: 1536,
  },
  {
    tag: "Adventure & wildlife",
    title: "Wildlife on its own clock",
    description:
      "From ocean giants to quiet trails — encounter, don’t perform.",
    image:
      "/assets/img/experiences/adventure-wildlife/kaikoura-whale-watch-sperm-whale-coast-new-zealand.jpg",
    alt: "Whale watching off the Kaikōura coast",
    link: "/experiences/adventure-wildlife",
    width: 892,
    height: 587,
  },
  {
    tag: "Culture",
    title: "Stories in the stone",
    description:
      "Gardens, heritage, and living culture — close to the land’s memory.",
    image:
      "/assets/img/experiences/culture/ohinetahi-gardens-lyttelton-harbour-christchurch-new-zealand-historic-estate.jpg",
    alt: "Ōhinetahi gardens above Lyttelton Harbour",
    link: "/experiences/culture",
    width: 743,
    height: 559,
  },
  {
    tag: "Journey",
    title: "Paths that reward slowness",
    description:
      "Forest boards, river trails, and journeys measured in breaths.",
    image: "/assets/img/experiences/journeys/redwoods-treewalk-rotorua.jpg",
    alt: "Redwoods Treewalk in Rotorua",
    link: "/experiences/journey",
    width: 1536,
    height: 1024,
  },
  {
    tag: "Relax coastal",
    title: "Salt air, soft agenda",
    description: "Beaches, bays, and the simple luxury of nowhere to be.",
    image: "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg",
    alt: "Whiritoa Beach coastal landscape on the Coromandel",
    link: "/experiences/relax-coastal",
    width: 1080,
    height: 680,
  },
  {
    tag: "Wine & dine",
    title: "Tables with a view",
    description:
      "Local flavour, open air, and the kind of meal that lingers.",
    image:
      "/assets/img/experiences/experiences/romantic-picnic-wine-cheese-board-nature-experience.jpg",
    alt: "Wine and local produce picnic in nature",
    link: "/experiences/wine-dine",
    width: 1536,
    height: 1024,
  },
];

const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState<Record<number, boolean>>({
    0: true,
  });

  const [landIndex, setLandIndex] = useState(0);
  const [landSeen, setLandSeen] = useState(false);
  const [landLoaded, setLandLoaded] = useState<Record<number, boolean>>({});

  const landStageRef = useRef<HTMLDivElement | null>(null);
  const expTrackRef = useRef<HTMLDivElement | null>(null);

  const heroCount = HERO_SLIDES.length;
  const landCount = LANDSCAPE_SLIDES.length;

  useEffect(() => {
    setHeroLoaded((prev) => ({ ...prev, [heroIndex]: true }));
  }, [heroIndex]);

  useEffect(() => {
    if (!landSeen) return;
    setLandLoaded((prev) => ({ ...prev, [landIndex]: true }));
  }, [landSeen, landIndex]);

  useEffect(() => {
    const el = landStageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLandSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setLandSeen(true);
      },
      { rootMargin: "140px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (heroCount <= 1) return;
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroCount);
    }, 6200);
    return () => window.clearInterval(id);
  }, [heroCount]);

  useEffect(() => {
    if (landCount <= 1) return;
    const id = window.setInterval(() => {
      setLandIndex((i) => (i + 1) % landCount);
    }, 10400);
    return () => window.clearInterval(id);
  }, [landCount]);

  const preloadHeroNeighbor = useCallback((completedIndex: number) => {
    setHeroLoaded((prev) => ({
      ...prev,
      [(completedIndex + 1) % heroCount]: true,
    }));
  }, [heroCount]);

  const preloadLandNeighbor = useCallback((completedIndex: number) => {
    setLandLoaded((prev) => ({
      ...prev,
      [(completedIndex + 1) % landCount]: true,
    }));
  }, [landCount]);

  const goLand = useCallback(
    (delta: number) => {
      setLandIndex((i) => (i + delta + landCount) % landCount);
    },
    [landCount]
  );

  const scrollExp = useCallback((dir: number) => {
    expTrackRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  }, []);

  const heroSizes = "100vw";
  const landSizes =
    "(max-width: 600px) calc(100vw - 24px), min(1180px, calc(100vw - 24px))";
  const expSizes = "(max-width: 480px) calc(100vw - 56px), 380px";

  const landCounterText = useMemo(
    () => `${pad2(landIndex + 1)} / ${pad2(landCount)}`,
    [landIndex, landCount]
  );

  return (
    <>
      <header className="nav" role="banner">
        <div className="nav__bar">
          <a className="nav-brand" href="/" aria-label="PurePods — Home">
            <Image
              src={LOGO.src}
              alt="PurePods"
              width={LOGO.width}
              height={LOGO.height}
              sizes="(max-width: 720px) min(260px, 78vw), min(240px, 42vw)"
              decoding="async"
            />
          </a>

          <nav className="nav__links" aria-label="Primary">
            <a href="/pods">Pods</a>
            <a href="/experiences">Experiences</a>
          </nav>

          <a className="nav__book" href="https://purepods.com/booking/">
            Book
          </a>
        </div>
      </header>

      <section className="hero" aria-label="PurePods — hero">
        <div className="hero__visual" aria-hidden="true">
          {HERO_SLIDES.map((slide, j) => (
            <div
              key={slide.src}
              className={`hero__slide${j === heroIndex ? " is-active" : ""}`}
            >
              {heroLoaded[j] ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes={heroSizes}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={j === 0}
                  loading={j === 0 ? "eager" : "lazy"}
                  fetchPriority={j === 0 ? "high" : "low"}
                  decoding="async"
                  onLoadingComplete={() => preloadHeroNeighbor(j)}
                />
              ) : null}
            </div>
          ))}
          <div className="hero__veil"></div>
          <div className="hero__grain"></div>
        </div>

        <div className="hero__content">
          <p className="eyebrow eyebrow--on-dark hero__eyebrow">
            New Zealand · Private glass eco-cabins
          </p>
          <h1 className="heroTitle">
            Arrive slowly.
            <br />
            Stay present.
          </h1>
          <p className="hero__lead">
            PurePods are secluded glass cabins set in real landscapes — calm,
            minimal, and designed for two.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="https://purepods.com/booking/">
              Check availability
            </a>
            <a className="btn" href="/pods">
              Discover pods
            </a>
          </div>
          <ul
            className="hero__dots"
            id="hero-dots"
            aria-label="Hero image slides"
          ></ul>
        </div>
      </section>

      <section className="editorial" aria-labelledby="editorial-heading">
        <div className="editorial__inner">
          <h2 id="editorial-heading">A small footprint. A wide horizon.</h2>
          <p>
            This is not a hotel corridor or a busy lodge. Each PurePod sits in
            partnership with its land — private, unhurried, and tuned to weather,
            birdsong, and night light. You come for the stillness; the landscape
            supplies the rest.
          </p>
        </div>
      </section>

      <section className="landscapes" aria-labelledby="landscapes-heading">
        <div className="landscapes__head">
          <div>
            <p className="eyebrow eyebrow--on-dark">Immersion</p>
            <h2 id="landscapes-heading">
              Sixteen private stages. One quiet brief.
            </h2>
          </div>
          <p>
            Scroll the filmstrip — sixteen pods, each with its own climate,
            geology, and mood. The architecture stays minimal; the view carries
            the drama.
          </p>
        </div>

        <div className="landscapes__stage" ref={landStageRef}>
          <div
            className="landscapes__slides"
            id="landscapes-slides"
            aria-live="polite"
          >
            {LANDSCAPE_SLIDES.map((slide, j) => (
              <div
                key={slide.src + String(j)}
                className={`landscapes__slide${
                  j === landIndex ? " is-active" : ""
                }`}
              >
                {landSeen && landLoaded[j] ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes={landSizes}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    loading="lazy"
                    decoding="async"
                    onLoadingComplete={() => preloadLandNeighbor(j)}
                  />
                ) : null}
                <Link
                  className="landscapes__caption"
                  href={LANDSCAPE_POD_HREFS[j]}
                  prefetch={false}
                  aria-label={`View ${
                    [
                      "Matū",
                      "Mākōha",
                      "Rewarewa",
                      "Pāmu",
                      "Ruru",
                      "Kokomea",
                      "Manakau",
                      "Kahutara",
                      "Atatū",
                      "Korimako",
                      "Greystone",
                      "Pōhue",
                      "Haurapa",
                      "Tāima",
                      "Tokoeka",
                      "Hananui",
                    ][j]
                  } pod`}
                >
                  <strong>
                    {
                      [
                        "Matū",
                        "Mākōha",
                        "Rewarewa",
                        "Pāmu",
                        "Ruru",
                        "Kokomea",
                        "Manakau",
                        "Kahutara",
                        "Atatū",
                        "Korimako",
                        "Greystone",
                        "Pōhue",
                        "Haurapa",
                        "Tāima",
                        "Tokoeka",
                        "Hananui",
                      ][j]
                    }
                  </strong>
                  <span>
                    {
                      [
                        "Limestone country and green distance — Waitomo from the air.",
                        "Glass above deep forest — calm canopy light near Kerikeri.",
                        "Coastline and hinterland scale above the Muriwai shore.",
                        "Geothermal haze, forest, and glass — Rotorua from above.",
                        "Hills, bush, and sea air — the Coromandel in one wide frame.",
                        "Rolling country and open sky above the Kāpiti coast.",
                        "Coastal ranges and wide sky above Kaikōura country.",
                        "Mountain scale and river valley calm beside Kaikōura.",
                        "Hilltop glass and long horizons above Hurunui country.",
                        "Coast cliffs and quiet distance — Hurunui from the air.",
                        "Waipara vines, terraces, and soft evening light from above.",
                        "Banks Peninsula folds — glass set in coastal hills.",
                        "Central Otago clarity — dry air, big sky, minimal form.",
                        "Vine rows and mountain backdrop — slow Central Otago light.",
                        "Forest edge and Rakiura quiet — Stewart Island from above.",
                        "Native bush meeting sea — a coastal stage on Stewart Island.",
                      ][j]
                    }
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="landscapes__controls">
          <span
            className="landscapes__counter"
            id="landscapes-counter"
            aria-hidden="true"
          >
            {landCounterText}
          </span>
          <div className="landscapes__nav-group">
            <button
              type="button"
              className="carousel-btn"
              id="land-prev"
              aria-label="Previous landscape"
              onClick={() => goLand(-1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="carousel-btn"
              id="land-next"
              aria-label="Next landscape"
              onClick={() => goLand(1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="experiences" aria-labelledby="experiences-heading">
        <div className="experiences__head">
          <p className="eyebrow">Beyond the glass</p>
          <h2 id="experiences-heading">Curated ways to read the land</h2>
          <p>
            A PurePod stay is the centrepiece — then the region offers its own
            rhythm: night skies, wildlife, heritage walks, coastal ease, and
            slow tables. Wander wide, then return to quiet.
          </p>
        </div>

        <div className="experiences__rail">
          <div className="experiences__track-wrap">
            <div
              className="experiences__track"
              id="exp-track"
              ref={expTrackRef}
              tabIndex={0}
              aria-label="Experience categories — horizontal list"
            >
              {experiences.map((exp) => (
                <a key={exp.title} className="exp-card" href={exp.link}>
                  <div className="exp-card__media">
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      width={exp.width}
                      height={exp.height}
                      sizes={expSizes}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="exp-card__body">
                    <span className="exp-card__tag">{exp.tag}</span>
                    <h3>{exp.title}</h3>
                    <p>{exp.description}</p>
                    <span className="exp-card__cta">Discover</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="experiences__arrows">
            <button
              type="button"
              className="carousel-btn carousel-btn--light"
              id="exp-prev"
              aria-label="Scroll experiences left"
              onClick={() => scrollExp(-1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              className="carousel-btn carousel-btn--light"
              id="exp-next"
              aria-label="Scroll experiences right"
              onClick={() => scrollExp(1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="invitation" aria-labelledby="invite-heading">
        <div className="wrap">
          <h2 id="invite-heading">
            When you are ready, the landscape keeps its appointment.
          </h2>
          <div className="invitation__actions">
            <a className="btn btn-primary" href="https://purepods.com/booking/">
              Book
            </a>
            <a className="btn" href="/pods">
              Choose a pod
            </a>
            <a className="btn" href="/experiences">
              Browse experiences
            </a>
          </div>
        </div>
      </section>

      <Footer brandLogo simplified />
    </>
  );
}
