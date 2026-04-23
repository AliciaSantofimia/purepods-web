import Link from "next/link";
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
  adventureIntroParagraph,
  adventureRestClosingSlides,
  adventureWildlifeFaqPageJsonLd,
} from "@/lib/experiencesData/adventureWildlife";

export function AdventureWildlifeView() {
  const faqJsonLd = adventureWildlifeFaqPageJsonLd();

  return (
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
              <h1>Adventure &amp; Wildlife</h1>
              <p className="impact-summary">
                Plan whale watching, rafting, scenic flights and wildlife
                encounters across New Zealand — then pair each day with nearby
                PurePod stays in quiet natural settings.
              </p>
              <Link className="btnGhost" href="#about">
                Read on
              </Link>
            </div>
          </header>

          <main id="main">
            <section
              id="about"
              className="wrap adventure-reveal"
              aria-labelledby="about-heading"
            >
              <h2 id="about-heading" className="visually-hidden">
                Introduction
              </h2>
              <p className="aw-xp-intro">{adventureIntroParagraph}</p>
            </section>

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
              </div>
              <AdventureExperienceCarousel slides={adventureExperienceSlides} />
            </section>

            <section
              className="aw-guest-perspective adventure-reveal"
              aria-labelledby="guest-perspective-heading"
            >
              <div className="wrap">
                <h2
                  id="guest-perspective-heading"
                  className="aw-guest-perspective__title"
                >
                  Guest perspective
                </h2>
                <p className="aw-guest-perspective__note">
                  Guests often describe these stays as a rare balance of wild
                  nature and complete stillness — a way to experience New
                  Zealand beyond the usual paths.
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
                    When the day is done
                  </p>
                  <h2 id="adv-rest-heading" className="adv-rest-closing__title">
                    From active exploration to quiet overnight stay
                  </h2>
                  <p className="adv-rest-closing__lead">
                    After landscapes, wildlife and adrenaline, the rhythm
                    changes. PurePods are glass eco-cabins in remote settings —
                    built for slowing down, sleeping deeply, and waking inside
                    the view.
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
              className="faq aw-faq-accordion"
              id="faq"
              aria-labelledby="faq-heading"
            >
              <div className="wrap">
                <div className="surface adventure-reveal">
                  <h2 id="faq-heading">Frequently asked questions</h2>
                  {/*
                    Native details/summary: every answer stays in the DOM on load;
                    only presentation toggles. Matches FAQPage JSON-LD.
                  */}
                  <ul className="aw-faq-accordion__list">
                    {adventureFaq.map((f, i) => (
                      <li key={f.q} className="aw-faq-accordion__item">
                        <details
                          className="aw-faq-accordion__details"
                          open={i === 0}
                        >
                          <summary className="aw-faq-accordion__summary">
                            <h3 className="aw-faq-accordion__q">{f.q}</h3>
                            <span
                              className="aw-faq-accordion__chevron"
                              aria-hidden="true"
                            />
                          </summary>
                          <div className="aw-faq-accordion__answer">
                            <p>{f.a}</p>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* TODO: integrate Google Reviews widget (crawlable text required) */}
            <section
              className="aw-guest-experiences adventure-reveal"
              aria-labelledby="guest-experiences-heading"
            >
              <div className="wrap">
                <h2
                  id="guest-experiences-heading"
                  className="aw-guest-experiences__title"
                >
                  Guest experiences
                </h2>
                <p className="aw-guest-experiences__placeholder">
                  Short verified guest stories will be added here when the
                  reviews integration is live.
                </p>
              </div>
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
                  <a
                    className="btn-primary"
                    href="https://purepods.com/booking/?cart=Checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find your PurePod
                  </a>
                  <p className="cta-support">
                    Check availability for your chosen PurePod, then match your
                    itinerary to the experiences and regions that fit best.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </AdventureWildlifeChrome>
      </ExperienceRevealMotionRoot>
    </div>
  );
}
