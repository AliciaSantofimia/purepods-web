import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { ForestCarouselBlock } from "@/components/experiences/ForestCarouselBlock";
import { HikingCarouselBlock } from "@/components/experiences/HikingCarouselBlock";
import {
  cultureAboutLeadHtml,
  cultureFaq,
  cultureHero,
  cultureHeritageSlides,
  cultureIndustrySlides,
  cultureMaoriSlides,
  cultureMuseumsSlides,
} from "@/lib/experiencesData/cultureData";

export function CultureView() {
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
            src={cultureHero.src}
            alt={cultureHero.alt}
            fill
            sizes="100vw"
            className="heroImg"
            priority
          />
          <div className="heroInner">
            <h1>Culture</h1>
            <p className="impact-summary">
              Stories of place, living traditions and quietly remarkable heritage — woven together with slow travel and
              time in the landscape. Use this guide to plan cultural days, then retreat to a PurePods glass eco-cabin when
              you are ready for stillness.
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
              <p className="lead" dangerouslySetInnerHTML={{ __html: cultureAboutLeadHtml }} />
            </div>
          </section>

          <section className="wrap" id="blocks" aria-label="Culture content blocks">
            <article className="journey-chapter" id="culture-maori">
              <ForestCarouselBlock
                ariaLabel="Māori culture and living heritage"
                slides={cultureMaoriSlides}
                chapterTitle={<h2 className="journey-title">Māori culture &amp; living heritage</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Encounters grounded in tikanga, performance and everyday life — places where history is not only
                    told but lived, often in extraordinary natural settings.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="culture-heritage">
              <HikingCarouselBlock
                ariaLabel="Historic towns, settlements and heritage sites"
                slides={cultureHeritageSlides}
                chapterTitle={
                  <h2 className="journey-title">Historic towns, settlements &amp; heritage sites</h2>
                }
                chapterIntro={
                  <p className="journey-intro">
                    Streetscapes, river bends and gardens where the past is still legible — ideal for unhurried wandering
                    before you return to the quiet of your pod.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="culture-museums">
              <HikingCarouselBlock
                ariaLabel="Museums, galleries and cultural centres"
                slides={cultureMuseumsSlides}
                chapterTitle={<h2 className="journey-title">Museums, galleries &amp; cultural centres</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Spaces that distil identity, craft and the relationship between people and sea, ice, and sky —
                    rewarding visits that pair well with a coastal or alpine drive.
                  </p>
                }
              />
            </article>

            <article className="journey-chapter" id="culture-industry">
              <HikingCarouselBlock
                ariaLabel="Industry, crafts and local stories"
                slides={cultureIndustrySlides}
                chapterTitle={<h2 className="journey-title">Industry, crafts &amp; local stories</h2>}
                chapterIntro={
                  <p className="journey-intro">
                    Hands-on heritage — gold, stone, steel and timber — where the ingenuity of earlier generations still
                    resonates in the landforms around you.
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
                  From cultural connection to quiet immersion in nature
                </h2>
                <p>
                  After a day of stories, places and cultural encounters, a PurePods stay offers space to slow down and
                  absorb it all. Set in remote natural landscapes, these glass eco-cabins invite you to reconnect — not
                  through activity, but through stillness, light and the surrounding environment. This transition is part
                  of the experience: from understanding a place, to quietly being in it.
                </p>
                <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
                  Site-specific details and inclusions are confirmed when you book; this page pairs cultural visits with
                  a suggested nearby pod.
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
                  {cultureFaq.map((f) => (
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
                  Culture
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
                  Check booking availability, then align your preferred cultural experiences with a nearby PurePod stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
