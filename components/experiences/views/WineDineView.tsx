import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import {
  wineDineAboutLeadHtml,
  wineDineFaq,
  wineDineHero,
  wineDineLocalSlides,
  wineDineRestaurantSlides,
  wineDineViewSlides,
  wineDineVineyardSlides,
} from "@/lib/experiencesData/wineDineData";

export function WineDineView() {
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
            src={wineDineHero.src}
            alt={wineDineHero.alt}
            fill
            sizes="100vw"
            className="heroImg"
            priority
          />
          <div className="heroInner">
            <h1>Wine &amp; Dine in New Zealand</h1>
            <p className="impact-summary">
              From world-class wineries to relaxed local favourites, discover New Zealand through its flavours. These
              curated experiences bring together landscape, craftsmanship and atmosphere — places worth slowing down
              for.
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
              <p className="lead" dangerouslySetInnerHTML={{ __html: wineDineAboutLeadHtml }} />
            </div>
          </section>

          <section className="wrap" id="blocks" aria-label="Wine and dine content blocks">
            <article className="journey-chapter" id="wine-vineyard">
              <HikingCarouselBlock
                ariaLabel="Vineyard dining and wine tastings"
                slides={wineDineVineyardSlides}
                chapterTitle={<h2 className="journey-title">Vineyard dining &amp; wine tastings</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Explore some of New Zealand&apos;s most celebrated wine regions, where tastings are shaped by
                    landscape, architecture and a deep sense of place.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="wine-restaurants">
              <HikingCarouselBlock
                ariaLabel="Winery restaurants and full experiences"
                slides={wineDineRestaurantSlides}
                chapterTitle={<h2 className="journey-title">Winery restaurants &amp; full experiences</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    More than tastings — these places combine food, wine and setting into a complete, immersive
                    experience.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="wine-view">
              <HikingCarouselBlock
                ariaLabel="Dining with a view"
                slides={wineDineViewSlides}
                chapterTitle={<h2 className="journey-title">Dining with a view</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Memorable meals shaped by their surroundings — from lakeside settings to elevated viewpoints.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="wine-local">
              <HikingCarouselBlock
                ariaLabel="Relaxed local favourites"
                slides={wineDineLocalSlides}
                chapterTitle={<h2 className="journey-title">Relaxed local favourites</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Casual, authentic and full of character — these are the places that locals love.
                  </p>
                }
              />
            </article>
          </section>

          <section className="pod-bridge" id="the-pod" aria-labelledby="pod-bridge-heading">
            <div className="wrap" style={{ padding: "56px 0" }}>
              <div>
                <div
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "var(--shadow)",
                    border: "1px solid var(--stroke)",
                    aspectRatio: "16/9",
                    marginBottom: 28,
                    position: "relative",
                  }}
                >
                  <ExpRefImage
                    src="/assets/img/experiences/culture/purepod-glass-cabin-lake-view-new-zealand-remote-nature-stay.jpg"
                    alt="PurePod glass cabin overlooking a remote lake and rolling hills in New Zealand, peaceful nature stay experience"
                    fill
                    sizes="(max-width:900px) 100vw, min(1120px, 90vw)"
                    className="pod-bridge__img"
                  />
                </div>
                <h2 id="pod-bridge-heading" className="pod-bridge__title">
                  From wine-country days to quiet immersion in nature
                </h2>
                <p>
                  After tastings, long lunches and tables with a view, a PurePods stay offers space to slow down and let
                  the flavours settle.
                </p>
                <p style={{ marginTop: 12 }}>
                  Set in remote natural landscapes, these glass eco-cabins invite you to reconnect — through stillness,
                  light and the environment beyond the glass.
                </p>
                <p style={{ marginTop: 12 }}>
                  This rhythm is part of the journey: from savouring a place, to quietly being in it.
                </p>
                <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
                  Site-specific details and inclusions are confirmed when you book; this page pairs dining visits with a
                  suggested nearby pod.
                </p>
                <Link
                  href="/pods"
                  className="btnGhost"
                  style={{
                    marginTop: 18,
                    display: "inline-block",
                    borderColor: "rgba(92,95,62,.18)",
                    background: "rgba(255,255,255,.42)",
                    color: "var(--ink)",
                  }}
                >
                  Discover slow travel
                </Link>
              </div>
            </div>
          </section>

          <section className="faq" id="faq" aria-labelledby="faq-heading">
            <div className="wrap">
              <div className="surface">
                <h2 id="faq-heading">Frequently asked questions</h2>
                <ul>
                  {wineDineFaq.map((f) => (
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
                  Wine &amp; Dine
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
                  Check booking availability, then pair your preferred wine or dining experience with a nearby PurePod
                  stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
