import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import {
  adrenalineSlides,
  adventureAboutLeadHtml,
  adventureFaq,
  adventureHero,
  marineSlides,
  natureSlides,
} from "@/lib/experiencesData/adventureWildlife";

export function AdventureWildlifeView() {
  return (
    <div className="experience-ref">
      <ExpStandardChrome
        navItems={[
          { href: "/experiences", label: "Experiences" },
          { href: "#blocks", label: "Highlights" },
          { href: "#faq", label: "FAQ" },
        ]}
      >
        <header className="hero" id="top">
          <ExpRefImage
            src={adventureHero.src}
            alt={adventureHero.alt}
            fill
            className="heroImg"
            sizes="100vw"
            priority
            objectPosition="center"
          />
          <div className="heroInner">
            <h1>Adventure &amp; Wildlife</h1>
            <p className="impact-summary">
              From marine wildlife encounters to forest trails and high-energy activities, explore curated outdoor
              experiences across New Zealand—each with a link to the operator or place, and a suggested nearby PurePods
              glass eco-cabin stay when the region lines up.
            </p>
            <Link className="btnGhost" href="#about">
              Read on
            </Link>
          </div>
        </header>

        <main id="main">
          <section id="about" aria-labelledby="about-heading">
            <div className="wrap">
              <h2 id="about-heading" className="visually-hidden">
                About this page
              </h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: adventureAboutLeadHtml }}
              />
            </div>
          </section>

          <section className="wrap" id="blocks" aria-label="Adventure and wildlife content blocks">
            <section className="journey-chapter chapter" id="marine-wildlife" aria-labelledby="marine-wildlife-heading">
              <HikingCarouselBlock
                ariaLabel="Marine and iconic wildlife experiences"
                slides={marineSlides}
                chapterTitle={
                  <h2 className="journey-title" id="marine-wildlife-heading">
                    Marine &amp; iconic wildlife
                  </h2>
                }
                chapterIntro={
                  <p className="journey-intro">
                    Encounters along the coast and offshore — whales, seals, dolphins and seabirds — paced for wild water
                    and quiet observation.
                  </p>
                }
              />
            </section>

            <section
              className="journey-chapter chapter"
              id="nature-exploration"
              aria-labelledby="nature-exploration-heading"
            >
              <HikingCarouselBlock
                ariaLabel="Nature exploration and outdoor discovery experiences"
                slides={natureSlides}
                chapterTitle={
                  <h2 className="journey-title" id="nature-exploration-heading">
                    Nature exploration &amp; outdoor discovery
                  </h2>
                }
                chapterIntro={
                  <p className="journey-intro">
                    Slower ways into the landscape — paddles, forest trails and birds overhead — without rushing the
                    reward.
                  </p>
                }
              />
            </section>

            <section
              className="journey-chapter chapter"
              id="adventure-adrenaline"
              aria-labelledby="adventure-adrenaline-heading"
            >
              <HikingCarouselBlock
                ariaLabel="Adventure and adrenaline experiences"
                slides={adrenalineSlides}
                chapterTitle={
                  <h2 className="journey-title" id="adventure-adrenaline-heading">
                    Adventure &amp; adrenaline
                  </h2>
                }
                chapterIntro={
                  <p className="journey-intro">
                    River, canopy and sky — guided activities that ask something of you and repay you with unforgettable
                    views.
                  </p>
                }
              />
            </section>
          </section>

          <section className="pod-bridge" aria-labelledby="pod-bridge-heading" style={{ background: "#EDEBE6" }}>
            <div className="wrap" style={{ padding: "56px 0" }}>
              <div className="inner">
                <div
                  style={{
                    position: "relative",
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "var(--shadow)",
                    aspectRatio: "16/9",
                    marginBottom: 28,
                  }}
                >
                  <ExpRefImage
                    src="/assets/img/experiences/adventure-wildlife/purepods-new-zealand-glass-cabin-starry-night-remote-nature-stay.jpg"
                    alt="PurePods glass cabin in New Zealand under a starry night sky in a remote natural setting"
                    fill
                    sizes="(max-width:900px) 100vw, min(1120px, 90vw)"
                    className="pod-bridge__img"
                    objectPosition="center 90%"
                  />
                </div>

                <h2 id="pod-bridge-heading" className="pod-bridge__title">
                  From active exploration to quiet overnight stay
                </h2>

                <p>
                  After a day focused on landscapes and wildlife, this experience transitions naturally into a PurePods
                  stay. PurePods are glass eco-cabins in remote natural settings, designed for calm immersion in
                  surrounding light, weather and views.
                </p>

                <Link className="pod-bridge__cta" href="/pods">
                  Discover Slow travel
                </Link>
              </div>
            </div>
          </section>

          <section className="faq" id="faq" aria-labelledby="faq-heading">
            <div className="wrap">
              <div className="surface">
                <h2 id="faq-heading">Frequently asked questions</h2>
                <ul>
                  {adventureFaq.map((f) => (
                    <li key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="cta" aria-labelledby="cta-heading">
            <div className="wrap">
              <div className="cta-panel">
                <h2 id="cta-heading" className="eyebrow">
                  Adventure &amp; Wildlife
                </h2>
                <a
                  className="btn-primary"
                  href="https://purepods.com/booking/?cart=Checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find your PurePod
                </a>
                <p className="cta-support">
                  Check booking availability, then align your preferred outdoor experience with a nearby PurePod stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
