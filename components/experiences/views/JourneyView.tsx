import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { ForestCarouselBlock } from "@/components/experiences/ForestCarouselBlock";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import {
  journeyAboutLeadHtml,
  journeyCyclingSlides,
  journeyFaq,
  journeyForestSlides,
  journeyHero,
  journeyHikingSlides,
} from "@/lib/experiencesData/journeyData";

export function JourneyView() {
  return (
    <div className="experience-ref">
      <Link href="#main" className="visually-hidden skip-link">
        Skip to main content
      </Link>
      <ExpStandardChrome
        navItems={[
          { href: "#forest-walks", label: "Forest walks" },
          { href: "#hiking", label: "Hiking" },
          { href: "#cycling", label: "Cycling" },
        ]}
      >
        <header className="hero hero--journey" id="top">
          <ExpRefImage
            src={journeyHero.src}
            alt={journeyHero.alt}
            fill
            className="heroImg"
            sizes="100vw"
            priority
          />
          <div className="heroBg" aria-hidden="true" />
          <div className="heroInner">
            <h1>Journey</h1>
            <p className="impact-summary">
              Journey brings together walking, hiking and cycling experiences across New Zealand, paired with PurePods:
              private glass eco cabins in remote natural settings. Explore forest walks, day hikes, multi-day routes and
              cycle trails in regions such as Rotorua, Waikato, the Kāpiti Coast, Central Otago, the Coromandel, Waipara
              and Auckland’s west coast, each matched with a nearby PurePod stay.
            </p>
            <Link className="btnGhost" href="#about">
              Read on
            </Link>
          </div>
        </header>

        <main id="main">
          <section id="about" aria-labelledby="journey-about-heading">
            <div className="wrap">
              <h2 id="journey-about-heading" className="visually-hidden">
                About the Journey experience
              </h2>
              <p className="lead" dangerouslySetInnerHTML={{ __html: journeyAboutLeadHtml }} />
            </div>
          </section>

          <section className="wrap" aria-labelledby="journey-chapters-heading">
            <h2 id="journey-chapters-heading" className="visually-hidden">
              Walking, hiking and cycling examples by region
            </h2>

            <article className="journey-chapter" id="forest-walks">
              <ForestCarouselBlock
                ariaLabel="Forest walks and nature trails"
                slides={journeyForestSlides}
                chapterTitle={<h2 className="journey-title">Forest walks &amp; nature trails</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Rotating examples of forest walks and short nature trails, with a matched PurePod stay where one is
                    suggested on each slide.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="hiking">
              <HikingCarouselBlock
                ariaLabel="Hiking and multi-day routes"
                slides={journeyHikingSlides}
                chapterTitle={<h2 className="journey-title">Hiking &amp; multi-day routes</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Day walks and multi-day style routes in forest and open country; some entries offer more than one
                    nearby PurePod booking option.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="cycling">
              <HikingCarouselBlock
                ariaLabel="Cycling and trail journeys"
                slides={journeyCyclingSlides}
                chapterTitle={<h2 className="journey-title" id="cycling-heading">Cycling &amp; trail journeys</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Rail trails, riverside paths, bike park riding and scenic road-adjacent routes; each slide suggests
                    a PurePod in the same broad region.
                  </p>
                }
                ctaClassName="journey-pod cycling-pod-cta"
              />
            </article>
          </section>

          <section className="pod-bridge" id="the-pod" aria-labelledby="pod-bridge-heading">
            <div className="wrap" style={{ padding: "56px 0" }}>
              <div className="inner">
                <div
                  className="pod-bridge__media"
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
                    src="/assets/img/experiences/journeys/journey-purepod-bedroom-relax-view-new-zealand.jpg"
                    alt="Person relaxing on a bed inside a PurePod with panoramic views of New Zealand landscape"
                    fill
                    sizes="(max-width:900px) 100vw, min(1120px, 90vw)"
                    className="pod-bridge__img"
                  />
                </div>

                <h2 id="pod-bridge-heading" className="pod-bridge__title">
                  Nights in a PurePod after your route
                </h2>

                <p>
                  PurePods are glass eco-cabins in remote New Zealand settings, designed to sit lightly in the landscape
                  so you can experience light, weather and views from inside. After walking or riding, you return to the
                  same accommodation for rest and overnight stay, booked via the links on this page or the main booking
                  entry points.
                </p>

                <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
                  Site-specific details and inclusions are confirmed when you book; this page pairs outdoor route ideas
                  with a suggested nearby pod.
                </p>

                <Link
                  href="/pods/explore-map-experimental-v2"
                  className="btnGhost"
                  style={{
                    marginTop: 18,
                    display: "inline-block",
                    borderColor: "rgba(92, 95, 62, .18)",
                    background: "rgba(255, 255, 255, .42)",
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
                  {journeyFaq.map((f) => (
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
                  Journey
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
                  Check booking availability, then align your preferred walk, hike or ride with a nearby PurePod stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
