import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { AdventureExperienceCarousel } from "@/components/experiences/AdventureExperienceCarousel";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { AdventureWildlifeChrome } from "@/components/experiences/AdventureWildlifeChrome";
import { AdventureRestClosingCarousel } from "@/components/experiences/AdventureRestClosingCarousel";
import {
  adventureContextBody,
  adventureContextHeading,
  adventureExperienceSlides,
  adventureFaq,
  adventureHero,
  adventureRestClosingSlides,
  adventureWildlifeFaqPageJsonLd,
} from "@/lib/experiencesData/adventureWildlife";
import { AdventureWildlifeFaqAccordion } from "@/components/experiences/views/AdventureWildlifeFaqAccordion";
import { AdventureWildlifeGuestExperiences } from "@/components/experiences/views/AdventureWildlifeGuestExperiences";

const STAY_DECISION_SHORTCUTS = [
  {
    label: "Coastal & wildlife",
    detail: "Kahutara · Manakau — Kaikōura",
  },
  {
    label: "Geothermal & lakes",
    detail: "Pāmu — Rotorua",
  },
  {
    label: "Remote & untouched",
    detail: "Tokoeka · Hananui — Stewart Island / Rakiura",
  },
  {
    label: "Quiet countryside",
    detail: "Pōhue · Matū — North Island countryside",
  },
] as const;

export function AdventureWildlifeView() {
  const faqJsonLd = adventureWildlifeFaqPageJsonLd();

  return (
    <>
    <div className="experience-ref adventure-wildlife-ref">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <ExperienceRevealMotionRoot
        rootSelector=".experience-ref.adventure-wildlife-ref"
        revealSelector=".adventure-reveal"
        inViewClass="adventure--in-view"
      >
        <AdventureWildlifeChrome
          hashInPageAnchorsNative
          navItems={[
            { href: "#experiences-carousel", label: "What to do" },
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
            />
            <div className="heroInner">
              <h1>Adventure &amp; Wildlife Experiences in New Zealand</h1>
              <p className="impact-summary">
                Days shaped by wildlife, water and open landscapes across New
                Zealand — then nights in your PurePod, where remote glass cabins
                settle you into stillness and the sound of the bush.
              </p>
              <Link className="btnGhost" href="#context-heading">
                Read on
              </Link>
            </div>
          </header>

          <main id="main">
            <section
              className="wrap aw-context-block adventure-reveal"
              aria-labelledby="context-heading"
            >
              <h2 id="context-heading" className="aw-context-block__title">
                {adventureContextHeading}
              </h2>
              <p className="aw-context-block__body">{adventureContextBody}</p>
            </section>

            <section
              id="experiences-carousel"
              className="aw-xp-band adventure-reveal"
              aria-labelledby="experiences-carousel-heading"
            >
              <div className="wrap aw-xp-section-head">
                <h2
                  id="experiences-carousel-heading"
                  className="aw-xp-section-title"
                >
                  Curated wildlife and adventure experiences
                </h2>
                <p className="aw-context-block__body aw-xp-section-headIntro">
                  A curated starting point for days shaped by wildlife,
                  landscape and distance.
                </p>
              </div>
              <AdventureExperienceCarousel slides={adventureExperienceSlides} />
              <div className="wrap">
                <p className="aw-xp-carouselSwipeHint">
                  Swipe to explore
                </p>
              </div>
            </section>

            <section
              id="the-pod"
              className="adv-rest-closing adventure-reveal"
              aria-labelledby="adv-rest-heading"
            >
              <div className="wrap adv-rest-closing__inner">
                <header className="adv-rest-closing__head">
                  <p className="adv-rest-closing__eyebrow">
                    When the day unfolds
                  </p>
                  <h2 id="adv-rest-heading" className="adv-rest-closing__title">
                    From wild encounters to complete stillness
                  </h2>
                  <p className="adv-rest-closing__lead">
                    Days here aren&apos;t packed — they&apos;re shaped.
                    <br />
                    <br />
                    A morning on the ocean, an afternoon in geothermal silence,
                    and a night where the only sound is the wind through the
                    landscape.
                  </p>
                </header>

                <AdventureRestClosingCarousel
                  slides={adventureRestClosingSlides}
                />

                <div className="adv-rest-closing__footer">
                  <Link className="adv-rest-closing__cta" href="/pods">
                    Discover PurePods stays
                  </Link>
                </div>
              </div>
            </section>

            <section
              id="choose-stay"
              className="wrap aw-stay-shortcuts adventure-reveal"
              aria-labelledby="choose-stay-heading"
            >
              <h2
                id="choose-stay-heading"
                className="aw-context-block__title"
              >
                Choose where to stay
              </h2>
              <p className="aw-context-block__body aw-stay-shortcuts__intro">
                Different parts of New Zealand offer different rhythms. Choose
                what draws you most.
              </p>
              <ul className="aw-stay-shortcuts__list">
                {STAY_DECISION_SHORTCUTS.map((row) => (
                  <li key={row.label} className="aw-stay-shortcuts__item">
                    <Link
                      href="/pods"
                      className="aw-stay-shortcuts__link"
                      aria-label={`${row.label}: browse stays`}
                    >
                      <span className="aw-stay-shortcuts__label">
                        {row.label}
                      </span>
                      <span className="aw-stay-shortcuts__detail">
                        {row.detail}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <AdventureWildlifeGuestExperiences />

            <section
              className="faq aw-faq-accordion"
              id="faq"
              aria-labelledby="faq-heading"
            >
              <div className="wrap">
                <div className="surface adventure-reveal">
                  <h2 id="faq-heading">Frequently asked questions</h2>
                  {/*
                    Native details/summary: every answer stays in the DOM on load;
                    only one open at a time (client accordion). Matches FAQPage JSON-LD.
                  */}
                  <AdventureWildlifeFaqAccordion items={adventureFaq} />
                </div>
              </div>
            </section>

            <section
              className="wrap aw-context-block aw-stay-closing adventure-reveal"
              aria-labelledby="aw-stay-closing-heading"
            >
              <h2
                id="aw-stay-closing-heading"
                className="aw-context-block__title"
              >
                Stay somewhere that changes how you experience it all
              </h2>
              <p className="aw-context-block__body">
                PurePods are placed to give you access to these moments — but
                more importantly, to what comes after them.
                <br />
                <br />
                Stillness. Space. And a deeper sense of place.
              </p>
            </section>

            <section
              className="cta adventure-reveal"
              aria-labelledby="cta-heading"
            >
              <div className="wrap">
                <div className="cta-panel">
                  <h2 id="cta-heading" className="eyebrow">
                    Adventure &amp; Wildlife
                  </h2>
                  <p className="cta-support">
                    Check real-time availability across all PurePods.
                  </p>
                  <a className="btn-primary" href="https://purepods.com/booking/">
                    Check availability
                  </a>
                  <p className="cta-support">
                    Choose your PurePod and plan your stay around it.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </AdventureWildlifeChrome>
      </ExperienceRevealMotionRoot>
    </div>
    <Footer brandLogo />
    </>
  );
}
