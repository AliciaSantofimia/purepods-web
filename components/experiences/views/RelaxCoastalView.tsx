import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { ForestCarouselBlock } from "@/components/experiences/ForestCarouselBlock";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import {
  relaxAboutLeadHtml,
  relaxBeachesSlides,
  relaxFaq,
  relaxGentleSlides,
  relaxHero,
  relaxThermalSlides,
  relaxWatersSlides,
} from "@/lib/experiencesData/relaxCoastalData";

export function RelaxCoastalView() {
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
          <ExpRefImage src={relaxHero.src} alt={relaxHero.alt} fill sizes="100vw" className="heroImg" priority />
          <div className="heroInner">
            <h1>Relax &amp; Coastal</h1>
            <p className="impact-summary">
              Slow waters, open coastlines and places that invite you to pause. Discover calm landscapes, geothermal
              bathing, hidden beaches and quiet nature experiences across New Zealand, each paired with a nearby PurePod
              stay.
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
              <p className="lead" dangerouslySetInnerHTML={{ __html: relaxAboutLeadHtml }} />
            </div>
          </section>

          <section className="wrap" id="blocks" aria-label="Relax and coastal content blocks">
            <article className="journey-chapter" id="relax-thermal">
              <ForestCarouselBlock
                ariaLabel="Thermal waters and geothermal relaxation"
                slides={relaxThermalSlides}
                chapterTitle={<h2 className="journey-title">Thermal waters &amp; geothermal relaxation</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Natural heat, mineral water and slow time. In Rotorua, geothermal landscapes offer one of New
                    Zealand’s most distinctive ways to unwind — where bathing becomes part of the setting, not just an
                    activity.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="relax-coastal-beaches">
              <HikingCarouselBlock
                ariaLabel="Coastal calm and hidden beaches"
                slides={relaxBeachesSlides}
                chapterTitle={<h2 className="journey-title">Coastal calm &amp; hidden beaches</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Some places do not ask for much — only time. These coastlines and bays offer open space, sea air and
                    the kind of quiet that shifts the pace of a stay.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="relax-waters">
              <HikingCarouselBlock
                ariaLabel="Rivers, lakes and quiet inland waters"
                slides={relaxWatersSlides}
                chapterTitle={<h2 className="journey-title">Rivers, lakes &amp; quiet inland landscapes</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Away from the coast, water shapes the land in quieter ways — through springs, estuaries, riverbanks and
                    inland views that invite a slower kind of exploration.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="relax-gentle">
              <HikingCarouselBlock
                ariaLabel="Gentle nature and restorative wandering"
                slides={relaxGentleSlides}
                chapterTitle={<h2 className="journey-title">Gentle nature &amp; restorative wandering</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Not every memorable experience needs drama. Some are simply about moving slowly — through gardens,
                    reserves, forest paths and small places that feel restorative.
                  </p>
                }
              />
            </article>
          </section>

          <section className="pod-bridge" id="the-pod" aria-labelledby="pod-bridge-heading">
            <div className="wrap" style={{ padding: "56px 0" }}>
              <div className="inner">
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
                  From restorative landscapes to quiet overnight stays
                </h2>
                <p>
                  After geothermal pools, coastal air or a long quiet walk, a PurePods stay continues the same rhythm —
                  calm, private and immersed in the landscape. These glass eco-cabins offer space to slow down and stay
                  with the feeling of the day a little longer.
                </p>
                <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
                  Site-specific details and inclusions are confirmed when you book; this page pairs restorative stops
                  with a suggested nearby pod.
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
                  {relaxFaq.map((f) => (
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
                  Relax &amp; Coastal
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
                  Check booking availability, then pair your preferred coastal or restorative experience with a nearby
                  PurePod stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
