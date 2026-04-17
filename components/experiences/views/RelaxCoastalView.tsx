import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { ForestCarouselBlock } from "@/components/experiences/ForestCarouselBlock";
import { StayAtLink } from "@/components/experiences/stayAtLink";
import type { HikingSlide } from "@/components/experiences/HikingCarouselBlock";
import {
  relaxAboutLeadHtml,
  relaxBeachesSlides,
  relaxFaq,
  relaxGentleSlides,
  relaxHero,
  relaxThermalSlides,
  relaxWatersSlides,
} from "@/lib/experiencesData/relaxCoastalData";

/** Featured beach visual (slide data is no-visual only; asset matches Northland coast mood). */
const MATAURI_BAY_FEATURE_IMAGE = {
  src: "/assets/img/experiences/adventure-wildlife/bay-of-islands-sea-kayaking-moana-kayaks-coastal-new-zealand.jpg",
  alt: "Sheltered Northland coastline — calm sea and islands, New Zealand",
} as const;

/** Temporary: no Boyes Beach / Lake Ōkāreka asset in repo yet — swap path when available. */
const FEATURED_WATER_PLACEHOLDER_IMAGE = {
  src: "/assets/img/experiences/journeys/rainbow-mountain-crater-lake-rotorua-new-zealand.jpg",
  alt: "Forest-fringed lake near Rotorua, New Zealand — placeholder for lakeside calm (Lake Ōkāreka block)",
} as const;

/** Temporary: no Auckland Botanic Gardens asset in repo — swap when available. */
const FEATURED_GENTLE_PLACEHOLDER_IMAGE = {
  src: "/assets/img/experiences/culture/ohinetahi-gardens-lyttelton-harbour-christchurch-new-zealand-historic-estate.jpg",
  alt: "Historic garden paths and calm planting, New Zealand — placeholder for Auckland Botanic Gardens feature",
} as const;

const RELAX_POD_BRIDGE_MAIN = {
  src: "/assets/img/experiences/culture/purepod-glass-cabin-lake-view-new-zealand-remote-nature-stay.jpg",
  alt: "PurePod glass cabin overlooking a remote lake and rolling hills in New Zealand, peaceful nature stay experience",
} as const;

function RelaxEditorialCards({ slides }: { slides: HikingSlide[] }) {
  return (
    <div className="relax-v1-editorial__grid">
      {slides.map((s) => (
        <article key={s.title} className="relax-v1-card">
          <h3 className="relax-v1-card__title">
            <a className="hiking-place-link" href={s.placeHref} target="_blank" rel="noopener noreferrer">
              {s.title}
            </a>
          </h3>
          <p className="hiking-desc">{s.description}</p>
          <div className="hiking-ctas">
            {s.ctas.map((c) => (
              <StayAtLink key={`${c.href}-${c.label}`} href={c.href} label={c.label} className="journey-pod hiking-pod-cta" />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function RelaxCoastalView() {
  const featuredBeach = relaxBeachesSlides[0];
  const restBeaches = relaxBeachesSlides.slice(1);
  const featuredWater = relaxWatersSlides[0];
  const restWaters = relaxWatersSlides.slice(1);
  const featuredGentle = relaxGentleSlides[0];
  const restBeachesVisible = restBeaches.slice(0, 2);
  const restWatersVisible = restWaters.slice(0, 2);
  const gentleClosingStay = featuredGentle?.ctas[0];

  return (
    <div className="experience-ref">
      <ExpStandardChrome
        navItems={[{ href: "#faq", label: "FAQ" }]}
      >
        <header className="hero relax-v1-hero" id="top">
          <ExpRefImage
            src={relaxHero.image}
            alt={relaxHero.alt}
            fill
            sizes="100vw"
            className="heroImg"
            priority
            objectPosition="center 75%"
          />
          <div className="heroInner">
            <h1>Relax &amp; Coastal</h1>
            <p className="impact-summary">
              Slow waters, open coastlines and places that invite you to pause. From geothermal bathing to quiet inland
              landscapes, this is a softer way to move through New Zealand — unhurried, immersive and deeply restorative.
            </p>
            <Link className="btnGhost" href="#about">
              Read on
            </Link>
          </div>
        </header>

        <main id="main">
          <section id="about" className="relax-v1-editorial-intro" aria-labelledby="about-heading">
            <div className="wrap">
              <div className="relax-v1-editorial-intro__inner">
                <h2 id="about-heading" className="visually-hidden">
                  About this page
                </h2>
                <p className="relax-v1-editorial-intro__kicker">Relax &amp; Coastal</p>
                <p className="lead relax-v1-editorial-intro__lead" dangerouslySetInnerHTML={{ __html: relaxAboutLeadHtml }} />
              </div>
            </div>
          </section>

          <section className="wrap relax-v1-blocks" id="blocks" aria-label="Relax and coastal content blocks">
            <article className="journey-chapter relax-v1-thermal" id="relax-thermal">
              <ForestCarouselBlock
                ariaLabel="Thermal waters and geothermal relaxation"
              
                slides={relaxThermalSlides}
                chapterTitle={
                  <h2 className="journey-title section-title-premium">Thermal waters &amp; geothermal relaxation</h2>
                }
                chapterIntro={
                  <p className="journey-intro">
                    Natural heat, mineral water and slow time. In Rotorua, geothermal landscapes offer one of New
                    Zealand’s most distinctive ways to unwind — where bathing becomes part of the setting, not just an
                    activity.
                  </p>
                }
              />
            </article>

            <article
              className="journey-chapter relax-v1-editorial relax-v1-trio-chapter"
              id="relax-coastal-beaches"
            >
              <header>
                <h2 className="journey-title section-title-premium">Coastal calm &amp; hidden beaches</h2>
                <p className="journey-intro">
                  Some places do not ask for much — only time. These coastlines and bays offer open space, sea air and
                  the kind of quiet that shifts the pace of a stay.
                </p>
              </header>
              {featuredBeach ? (
                <div className="relax-v1-trio-curation">
                  <div className="relax-v1-beach-featured">
                    <div className="relax-v1-beach-featured__frame">
                      <ExpRefImage
                        src={MATAURI_BAY_FEATURE_IMAGE.src}
                        alt={MATAURI_BAY_FEATURE_IMAGE.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, min(1120px, 90vw)"
                        className="relax-v1-beach-featured__img"
                      />
                      <div className="relax-v1-beach-featured__gradient" aria-hidden />
                      <div className="relax-v1-beach-featured__overlay">
                        <h3 className="relax-v1-beach-featured__title">
                          <a
                            className="relax-v1-beach-featured__title-link"
                            href={featuredBeach.placeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {featuredBeach.title}
                          </a>
                        </h3>
                        <p className="relax-v1-beach-featured__desc">{featuredBeach.description}</p>
                        <div className="relax-v1-beach-featured__ctas hiking-ctas">
                          {featuredBeach.ctas.map((c) => (
                            <StayAtLink
                              key={`${c.href}-${c.label}`}
                              href={c.href}
                              label={c.label}
                              className="journey-pod hiking-pod-cta relax-v1-beach-featured__pod"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <RelaxEditorialCards slides={restBeachesVisible} />
                </div>
              ) : (
                <RelaxEditorialCards slides={restBeachesVisible} />
              )}
            </article>

            <article
              className="journey-chapter relax-v1-editorial relax-v1-waters relax-v1-trio-chapter"
              id="relax-waters"
            >
              <header>
                <h2 className="journey-title section-title-premium">Rivers, lakes &amp; quiet inland landscapes</h2>
                <p className="journey-intro">
                  Away from the coast, water shapes the land in quieter ways — through springs, estuaries, riverbanks
                  and inland views that invite a slower kind of exploration.
                </p>
              </header>
              {featuredWater ? (
                <div className="relax-v1-trio-curation">
                  <div className="relax-v1-beach-featured">
                    <div className="relax-v1-beach-featured__frame">
                      <ExpRefImage
                        src={FEATURED_WATER_PLACEHOLDER_IMAGE.src}
                        alt={FEATURED_WATER_PLACEHOLDER_IMAGE.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, min(1120px, 90vw)"
                        className="relax-v1-beach-featured__img"
                      />
                      <div className="relax-v1-beach-featured__gradient" aria-hidden />
                      <div className="relax-v1-beach-featured__overlay">
                        <h3 className="relax-v1-beach-featured__title">
                          <a
                            className="relax-v1-beach-featured__title-link"
                            href={featuredWater.placeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {featuredWater.title}
                          </a>
                        </h3>
                        <p className="relax-v1-beach-featured__desc">{featuredWater.description}</p>
                        <div className="relax-v1-beach-featured__ctas hiking-ctas">
                          {featuredWater.ctas.map((c) => (
                            <StayAtLink
                              key={`${c.href}-${c.label}`}
                              href={c.href}
                              label={c.label}
                              className="journey-pod hiking-pod-cta relax-v1-beach-featured__pod"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <RelaxEditorialCards slides={restWatersVisible} />
                </div>
              ) : (
                <RelaxEditorialCards slides={restWatersVisible} />
              )}
            </article>

            <article className="journey-chapter relax-v1-editorial relax-v1-gentle-outro" id="relax-gentle">
              {featuredGentle ? (
                <div className="relax-v1-gentle-outro__inner">
                  <div className="relax-v1-gentle-outro__media">
                    <ExpRefImage
                      src={FEATURED_GENTLE_PLACEHOLDER_IMAGE.src}
                      alt={FEATURED_GENTLE_PLACEHOLDER_IMAGE.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, min(1040px, 92vw)"
                      className="relax-v1-gentle-outro__img"
                    />
                  </div>
                  <div className="relax-v1-gentle-outro__copy">
                    <h2 className="relax-v1-gentle-outro__title section-title-premium">
                      Gentle nature &amp; restorative wandering
                    </h2>
                    <p className="relax-v1-gentle-outro__lede">
                      Some days need no climax — only a slower stride, green quiet, and room to notice light on leaves.
                      That is its own kind of arrival: not a finish line, but a place where the world feels wide again.
                    </p>
                    <p className="relax-v1-gentle-outro__footnote">
                      <a
                        className="relax-v1-gentle-outro__place"
                        href={featuredGentle.placeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {featuredGentle.title}
                      </a>
                      {gentleClosingStay ? (
                        <>
                          <span className="relax-v1-gentle-outro__sep" aria-hidden>
                            {" "}
                            ·{" "}
                          </span>
                          <StayAtLink
                            href={gentleClosingStay.href}
                            label={gentleClosingStay.label}
                            className="relax-v1-gentle-outro__stay"
                          />
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
              ) : null}
            </article>
          </section>

          <section
            className="pod-bridge pod-bridge--relax-landscape relax-v1-pod-bridge"
            id="the-pod"
            aria-labelledby="pod-bridge-heading"
          >
            <div className="wrap relax-v1-pod-bridge__wrap">
              <div className="inner">
                <div className="relax-v1-pod-bridge__visual">
                  <div className="relax-v1-pod-bridge__main-frame">
                    <ExpRefImage
                      src={RELAX_POD_BRIDGE_MAIN.src}
                      alt={RELAX_POD_BRIDGE_MAIN.alt}
                      fill
                      sizes="(max-width:900px) 100vw, min(1120px, 90vw)"
                      className="pod-bridge__img"
                    />
                    <div className="relax-v1-pod-bridge__scrim" aria-hidden />
                  </div>
                </div>
                <h2 id="pod-bridge-heading" className="pod-bridge__title section-title-premium">
                  From restorative landscapes to quiet overnight stays
                </h2>
                <p>
                  After geothermal pools, coastal air or a long quiet walk, a PurePods stay continues the same rhythm —
                  calm, private and immersed in the landscape. These glass eco-cabins offer space to slow down and stay
                  with the feeling of the day a little longer.
                </p>
                <p style={{ marginTop: 12, fontSize: 15 }}>
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
                <h2 id="faq-heading" className="section-title-premium">
                  Frequently asked questions
                </h2>
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
