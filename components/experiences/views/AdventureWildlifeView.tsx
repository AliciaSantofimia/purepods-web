import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { AdventureExperienceCarousel } from "@/components/experiences/AdventureExperienceCarousel";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { AdventureRestClosingCarousel } from "@/components/experiences/AdventureRestClosingCarousel";
import {
  adventureExperienceSlides,
  adventureFaq,
  adventureHero,
  adventureIntroParagraph,
  adventureRestClosingSlides,
} from "@/lib/experiencesData/adventureWildlife";

export function AdventureWildlifeView() {
  return (
    <div className="experience-ref adventure-wildlife-ref">
      <ExperienceRevealMotionRoot
        rootSelector=".experience-ref.adventure-wildlife-ref"
        revealSelector=".adventure-reveal"
        inViewClass="adventure--in-view"
      >
        <ExpStandardChrome
          hashInPageAnchorsNative
          navItems={[
            { href: "#experiences-carousel", label: "Top experiences" },
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
                From marine wildlife encounters to forest trails and high-energy
                activities, explore curated outdoor experiences across New
                Zealand—each with a link to the operator or place, and a
                suggested nearby PurePods glass eco-cabin stay when the region
                lines up.
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
              id="experiences-carousel"
              className="aw-xp-band adventure-reveal"
              aria-labelledby="experiences-carousel-heading"
            >
              <h2
                id="experiences-carousel-heading"
                className="visually-hidden"
              >
                Top New Zealand experiences near PurePods
              </h2>
              <AdventureExperienceCarousel slides={adventureExperienceSlides} />
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

            <section className="faq" id="faq" aria-labelledby="faq-heading">
              <div className="wrap">
                <div className="surface adventure-reveal">
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
                    Check booking availability, then align your preferred
                    outdoor experience with a nearby PurePod stay.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </ExpStandardChrome>
      </ExperienceRevealMotionRoot>
    </div>
  );
}
