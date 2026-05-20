import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { AdventureExperienceCarousel } from "@/components/experiences/AdventureExperienceCarousel";
import { AdventureRestClosingCarousel } from "@/components/experiences/AdventureRestClosingCarousel";
import { AdventureWildlifeChrome } from "@/components/experiences/AdventureWildlifeChrome";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { AdventureWildlifeFaqAccordion } from "@/components/experiences/views/AdventureWildlifeFaqAccordion";
import type {
  AdventureExperienceSlide,
  AdventureRestClosingSlide,
} from "@/lib/experiencesData/adventureWildlife";

type FaqItem = { q: string; a: string };

type AdventureWildlifePageTemplateProps = {
  faqJsonLd?: Record<string, unknown>;
  hero: {
    src: string;
    alt: string;
  };
  heroTitle: string;
  heroSummary: string;
  contextHeading: string;
  contextBody: string;
  carouselHeading: string;
  carouselIntro: string;
  experienceSlides: AdventureExperienceSlide[];
  restEyebrow: string;
  restHeading: string;
  restLead: readonly string[];
  restSlides: AdventureRestClosingSlide[];
  faqItems: readonly FaqItem[];
  stayClosingHeading: string;
  stayClosingBody: readonly string[];
  ctaEyebrow: string;
  ctaTopSupport: string;
  ctaLabel: string;
  ctaHref: string;
  ctaBottomSupport: string;
};

export function AdventureWildlifePageTemplate({
  faqJsonLd,
  hero,
  heroTitle,
  heroSummary,
  contextHeading,
  contextBody,
  carouselHeading,
  carouselIntro,
  experienceSlides,
  restEyebrow,
  restHeading,
  restLead,
  restSlides,
  faqItems,
  stayClosingHeading,
  stayClosingBody,
  ctaEyebrow,
  ctaTopSupport,
  ctaLabel,
  ctaHref,
  ctaBottomSupport,
}: AdventureWildlifePageTemplateProps) {
  return (
    <>
      <div className="experience-ref adventure-wildlife-ref">
        {faqJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd),
            }}
          />
        ) : null}
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
                src={hero.src}
                alt={hero.alt}
                fill
                className="heroImg"
                sizes="100vw"
                priority
              />
              <div className="heroInner">
                <h1>{heroTitle}</h1>
                <p className="impact-summary">{heroSummary}</p>
              </div>
            </header>

            <main id="main">
              <section
                className="wrap aw-context-block adventure-reveal"
                aria-labelledby="context-heading"
              >
                <h2 id="context-heading" className="aw-context-block__title">
                  {contextHeading}
                </h2>
                <p className="aw-context-block__body">{contextBody}</p>
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
                    {carouselHeading}
                  </h2>
                  <p className="aw-context-block__body aw-xp-section-headIntro">
                    {carouselIntro}
                  </p>
                </div>
                <AdventureExperienceCarousel slides={experienceSlides} />
                <div className="wrap">
                  <p className="aw-xp-carouselSwipeHint">Swipe to explore</p>
                </div>
              </section>

              <section
                id="the-pod"
                className="adv-rest-closing adventure-reveal"
                aria-labelledby="adv-rest-heading"
              >
                <div className="wrap adv-rest-closing__inner">
                  <header className="adv-rest-closing__head">
                    <p className="adv-rest-closing__eyebrow">{restEyebrow}</p>
                    <h2
                      id="adv-rest-heading"
                      className="adv-rest-closing__title"
                    >
                      {restHeading}
                    </h2>
                    <p className="adv-rest-closing__lead">
                      {restLead.map((line, index) => (
                        <span key={`${line}-${index}`}>
                          {index > 0 ? (
                            <>
                              <br />
                              <br />
                            </>
                          ) : null}
                          {line}
                        </span>
                      ))}
                    </p>
                  </header>

                  <AdventureRestClosingCarousel slides={restSlides} />

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
                    <AdventureWildlifeFaqAccordion items={faqItems} />
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
                  {stayClosingHeading}
                </h2>
                <p className="aw-context-block__body">
                  {stayClosingBody.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {index > 0 ? (
                        <>
                          <br />
                          <br />
                        </>
                      ) : null}
                      {line}
                    </span>
                  ))}
                </p>
              </section>

              <section
                className="cta adventure-reveal"
                aria-labelledby="cta-heading"
              >
                <div className="wrap">
                  <div className="cta-panel">
                    <h2 id="cta-heading" className="eyebrow">
                      {ctaEyebrow}
                    </h2>
                    <p className="cta-support">{ctaTopSupport}</p>
                    <a className="btn-primary" href={ctaHref}>
                      {ctaLabel}
                    </a>
                    <p className="cta-support">{ctaBottomSupport}</p>
                  </div>
                </div>
              </section>
            </main>
          </AdventureWildlifeChrome>
        </ExperienceRevealMotionRoot>
      </div>
      <Footer brandLogo simplified />
    </>
  );
}
