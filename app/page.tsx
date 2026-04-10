"use client";

import { useEffect } from "react";

const experiences = [
  {
    tag: "Night falls",
    title: "Stars without stage lights",
    description:
      "Deep dark, slow minutes, and the night sky as the main event.",
    image: "/assets/img/experiences/night-falls/dark-sky-purepod.jpg",
    alt: "Dark sky above a PurePod",
    link: "/experiences/night-falls",
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
  },
  {
    tag: "Journey",
    title: "Paths that reward slowness",
    description:
      "Forest boards, river trails, and journeys measured in breaths.",
    image: "/assets/img/experiences/journeys/redwoods-treewalk-rotorua.jpg",
    alt: "Redwoods Treewalk in Rotorua",
    link: "/experiences/journey",
  },
  {
    tag: "Relax coastal",
    title: "Salt air, soft agenda",
    description: "Beaches, bays, and the simple luxury of nowhere to be.",
    image: "/assets/img/ruru/whiritoa-beach-coastal-landscape-coromandel.jpg",
    alt: "Whiritoa Beach coastal landscape on the Coromandel",
    link: "/experiences/relax-coastal",
  },
  {
    tag: "Wine & dine",
    title: "Tables with a view",
    description:
      "Local flavour, open air, and the kind of meal that lingers.",
    image:
      "/assets/img/experiences/journeys/romantic-picnic-wine-cheese-board-nature-experience.jpg",
    alt: "Wine and local produce picnic in nature",
    link: "/experiences/wine-dine",
  },
];

export default function HomePage() {
  useEffect(() => {
    const heroSlides = Array.from(
      document.querySelectorAll("[data-hero-slide]")
    ) as HTMLElement[];

    let heroIndex = 0;
    let heroTimer: ReturnType<typeof setInterval> | null = null;

    const goHero = (i: number) => {
      if (!heroSlides.length) return;
      heroIndex = (i + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((el, j) => {
        el.classList.toggle("is-active", j === heroIndex);
      });
    };

    if (heroSlides.length > 1) {
      heroTimer = setInterval(() => {
        goHero(heroIndex + 1);
      }, 6200);
    }

    const landSlides = Array.from(
      document.querySelectorAll("[data-land-slide]")
    ) as HTMLElement[];

    const landCounter = document.getElementById("landscapes-counter");
    const landPrev = document.getElementById("land-prev");
    const landNext = document.getElementById("land-next");

    let landIndex = 0;
    let landTimer: ReturnType<typeof setInterval> | null = null;

    const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

    const renderLand = () => {
      if (!landSlides.length) return;

      landSlides.forEach((el, j) => {
        el.classList.toggle("is-active", j === landIndex);
      });

      if (landCounter) {
        landCounter.textContent = `${pad2(landIndex + 1)} / ${pad2(
          landSlides.length
        )}`;
      }
    };

    const goLand = (delta: number) => {
      if (!landSlides.length) return;
      landIndex = (landIndex + delta + landSlides.length) % landSlides.length;
      renderLand();
    };

    function handlePrev() {
      goLand(-1);
    }

    function handleNext() {
      goLand(1);
    }

    if (landSlides.length) {
      renderLand();

      landPrev?.addEventListener("click", handlePrev);
      landNext?.addEventListener("click", handleNext);

      if (landSlides.length > 1) {
        landTimer = setInterval(() => {
          goLand(1);
        }, 10400);
      }
    }

    const expTrack = document.getElementById("exp-track");
    const expPrev = document.getElementById("exp-prev");
    const expNext = document.getElementById("exp-next");

    const scrollExp = (dir: number) => {
      if (!expTrack) return;
      expTrack.scrollBy({
        left: dir * 400,
        behavior: "smooth",
      });
    };

    function handleExpPrev() {
      scrollExp(-1);
    }

    function handleExpNext() {
      scrollExp(1);
    }

    expPrev?.addEventListener("click", handleExpPrev);
    expNext?.addEventListener("click", handleExpNext);

    return () => {
      if (heroTimer) clearInterval(heroTimer);
      if (landTimer) clearInterval(landTimer);

      landPrev?.removeEventListener("click", handlePrev);
      landNext?.removeEventListener("click", handleNext);

      expPrev?.removeEventListener("click", handleExpPrev);
      expNext?.removeEventListener("click", handleExpNext);
    };
  }, []);

  return (
    <>
      <header className="nav" role="banner">
        <div className="nav__bar">
          <a className="nav-brand" href="/" aria-label="PurePods — Home">
            <img
              src="/assets/img/LogoPCblancosinfondo.png"
              alt="PurePods"
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
          <div className="hero__slide is-active" data-hero-slide>
            <img
              src="/assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <div className="hero__slide" data-hero-slide>
            <img
              src="/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <div className="hero__slide" data-hero-slide>
            <img
              src="/assets/img/atatu/atatu-purepod-glass-cabin-night-stars-new-zealand.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <div className="hero__slide" data-hero-slide>
            <img
              src="/assets/img/atatu/atatu-purepod-glass-cabin-bedroom-ocean-view-new-zealand.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <div className="hero__slide" data-hero-slide>
            <img
              src="/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg"
              alt=""
              decoding="async"
            />
          </div>
          <div className="hero__slide" data-hero-slide>
            <img
              src="/assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg"
              alt=""
              decoding="async"
            />
          </div>
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

        <div className="landscapes__stage">
          <div
            className="landscapes__slides"
            id="landscapes-slides"
            aria-live="polite"
          >
            <div className="landscapes__slide is-active" data-land-slide>
              <img
                src="/assets/img/matu/matu-purepod-aerial-landscape-waitomo.jpg"
                alt="Matū PurePod and Waitomo countryside from above"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Matū</strong>
                <span>
                  Limestone country and green distance — Waitomo from the air.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/makoha/makoha-purepod-aerial-glass-cabin-forest-kerikeri.jpg"
                alt="Mākōha PurePod above Northland forest near Kerikeri"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Mākōha</strong>
                <span>
                  Glass above deep forest — calm canopy light near Kerikeri.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/rewarewa/rewarewa-purepod-aerial-landscape-muriwai-coast.jpg"
                alt="Rewarewa PurePod aerial view over Muriwai coast"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Rewarewa</strong>
                <span>
                  Coastline and hinterland scale above the Muriwai shore.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/pamu/pamu-purepod-aerial-glass-cabin-landscape-rotorua.jpg"
                alt="Pāmu PurePod and Rotorua landscape from above"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Pāmu</strong>
                <span>
                  Geothermal haze, forest, and glass — Rotorua from above.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/ruru/ruru-purepod-glass-cabin-aerial-view-coromandel.jpg"
                alt="Ruru PurePod aerial view on the Coromandel"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Ruru</strong>
                <span>
                  Hills, bush, and sea air — the Coromandel in one wide frame.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/kokomea/kokomea-purepod-aerial-countryside-landscape-kapiti-coast.jpg"
                alt="Kokomea PurePod aerial view over Kāpiti countryside"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Kokomea</strong>
                <span>Rolling country and open sky above the Kāpiti coast.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/manakau/manakau-purepod-glass-cabin-hills-landscape-kaikoura.jpg"
                alt="Manakau PurePod above Kaikōura hills"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Manakau</strong>
                <span>
                  Coastal ranges and wide sky above Kaikōura country.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg"
                alt="Kahutara PurePod with Kaikōura mountain landscape"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Kahutara</strong>
                <span>Mountain scale and river valley calm beside Kaikōura.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/atatu/atatu-purepod-glass-cabin-hilltop-landscape-new-zealand.jpg"
                alt="Atatū PurePod on a Hurunui hilltop"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Atatū</strong>
                <span>Hilltop glass and long horizons above Hurunui country.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/kiromako/kiromako-purepod-aerial-coastal-landscape-new-zealand.jpg"
                alt="Korimako PurePod aerial coastal view near Hurunui"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Korimako</strong>
                <span>Coast cliffs and quiet distance — Hurunui from the air.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/greystone/greystone-purepod-aerial-vineyard-landscape-waipara.jpg"
                alt="Greystone PurePod aerial view over Waipara vineyards"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Greystone</strong>
                <span>
                  Waipara vines, terraces, and soft evening light from above.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/pohue/pohue-purepod-glass-cabin-coastal-hills-new-zealand.jpg"
                alt="Pōhue PurePod among coastal hills on Banks Peninsula"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Pōhue</strong>
                <span>Banks Peninsula folds — glass set in coastal hills.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/haurapa/haurapa-purepod-glass-cabin-central-otago-landscape-new-zealand.jpg"
                alt="Haurapa PurePod in Central Otago landscape"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Haurapa</strong>
                <span>Central Otago clarity — dry air, big sky, minimal form.</span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/taima/taima-purepod-glass-cabin-vineyard-view-central-otago.jpg"
                alt="Tāima PurePod vineyard view in Central Otago"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Tāima</strong>
                <span>
                  Vine rows and mountain backdrop — slow Central Otago light.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/tokoeka/tokoeka-purepod-aerial-forest-location-stewart-island.jpg"
                alt="Tokoeka PurePod aerial view over Stewart Island forest"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Tokoeka</strong>
                <span>
                  Forest edge and Rakiura quiet — Stewart Island from above.
                </span>
              </div>
            </div>

            <div className="landscapes__slide" data-land-slide>
              <img
                src="/assets/img/hananui/hananui-purepod-aerial-coastal-location-stewart-island.jpg"
                alt="Hananui PurePod aerial coastal view on Stewart Island"
                decoding="async"
              />
              <div className="landscapes__caption">
                <strong>Hananui</strong>
                <span>
                  Native bush meeting sea — a coastal stage on Stewart Island.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="landscapes__controls">
          <span
            className="landscapes__counter"
            id="landscapes-counter"
            aria-hidden="true"
          >
            01 / 16
          </span>
          <div className="landscapes__nav-group">
            <button
              type="button"
              className="carousel-btn"
              id="land-prev"
              aria-label="Previous landscape"
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
              tabIndex={0}
              aria-label="Experience categories — horizontal list"
            >
              {experiences.map((exp) => (
                <a key={exp.title} className="exp-card" href={exp.link}>
                  <div className="exp-card__media">
                    <img
                      src={exp.image}
                      alt={exp.alt}
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

      <footer>
        <div className="wrap">PurePods · Home · Pods · Experiences · Book</div>
      </footer>
    </>
  );
}