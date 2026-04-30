import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationCta,
  LocationFaqSection,
} from "@/components/location";
import {
  ruruCta,
  ruruExperiencesBlock,
  ruruExperimentalHero,
  ruruPodNarrative,
  ruruTravelBlock,
  RURU_FAQ_ITEMS,
} from "@/lib/locationPods/experimental/ruruExperimentalData";
import { RuruExperimentalImageCarousel } from "./RuruExperimentalImageCarousel";
import { RuruExperimentalLightboxImage } from "./RuruExperimentalLightboxImage";
import { RuruTravelCarouselCard } from "./RuruTravelCarouselCard";
import { RuruTravelEditorialCard } from "./RuruTravelEditorialCard";
import styles from "./ruruExperimental.module.css";

function heroImageStyle(): CSSProperties {
  const h = ruruExperimentalHero;
  return {
    "--hero-obj": h.imagePosition,
    "--hero-obj-md": h.imagePositionMd,
    "--hero-obj-xl": h.imagePositionXl,
  } as CSSProperties;
}

export function RuruExperimentalView() {
  const hero = ruruExperimentalHero;
  const [podLead, podBody] = ruruPodNarrative.paragraphs;

  return (
    <div className={styles.root}>
      <LightboxProvider>
        <header className={styles.hero} id="top">
          <div className={styles.heroMedia}>
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroImg}
              style={heroImageStyle()}
            />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.heroKicker}>PurePod · Coromandel</p>
              <h1 className={styles.heroTitle}>{hero.title}</h1>
              <p className={styles.heroLead}>{hero.subtitle}</p>
              <Link href="#the-pod" className={styles.heroCta}>
                Continue
              </Link>
            </div>
          </div>
          <div className={styles.heroFadeToPage} aria-hidden="true" />
        </header>

        <main className={styles.main} id="main">
          <section
            id="the-pod"
            className={styles.podSection}
            aria-labelledby="the-pod-heading"
          >
            <div className={styles.wrap}>
              <header className={`${styles.sectionHead} ${styles.podHead}`}>
                <span className={styles.podHeadRule} aria-hidden="true" />
                <h2 id="the-pod-heading" className={`${styles.sectionTitle} ${styles.podFocusTitle}`}>
                  {ruruPodNarrative.title}
                </h2>
                <p className={styles.sectionHint}>{ruruPodNarrative.hint}</p>
              </header>

              <div className={styles.podEditorial}>
                <div className={styles.podTextColumn}>
                  <div className={styles.podTextStack}>
                    {podLead ? <p className={styles.podLead}>{podLead}</p> : null}
                    {podBody ? <p className={styles.podBody}>{podBody}</p> : null}
                  </div>
                </div>
                <div className={styles.podVisualColumn}>
                  <p className={styles.podGalleryHint}>
                    Use the arrows or swipe to see more photos of the pod.
                  </p>
                  <RuruExperimentalImageCarousel
                    items={ruruPodNarrative.gallery.map((item) => ({
                      src: item.src,
                      alt: item.alt,
                      imageStyle: { objectPosition: item.position },
                    }))}
                    ariaLabel="PurePod Ruru — photo gallery"
                    sizes="(max-width: 899px) 100vw, min(720px, 62vw)"
                    className={styles.podCarousel}
                    slideVariant="feature"
                    priorityFirst
                  />
                  <figure className={styles.podCaptionFigure} aria-label="About the stay">
                    <blockquote className={styles.podCaptionQuote} cite="#the-pod">
                      <p className={styles.podCaptionText}>
                        {ruruPodNarrative.galleryCaption}
                      </p>
                    </blockquote>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section
            id="travel"
            className={styles.travelSection}
            aria-labelledby="travel-heading"
          >
            <div className={styles.wrap}>
              <header className={styles.sectionHead}>
                <h2 id="travel-heading" className={styles.sectionTitle}>
                  {ruruTravelBlock.title}
                </h2>
                <p className={styles.sectionHint}>{ruruTravelBlock.hint}</p>
              </header>
              <p className={styles.travelMediaHint}>
                Journey and dining include two photos each — swipe or use arrows. Climate is
                covered in text only.
              </p>
              <div className={styles.travelGrid}>
                {ruruTravelBlock.cards.map((card) =>
                  card.variant === "editorial" ? (
                    <RuruTravelEditorialCard
                      key={card.key}
                      title={card.title}
                      body={card.body}
                      editorialEyebrow={card.editorialEyebrow}
                      editorialLead={card.editorialLead}
                    />
                  ) : (
                    <RuruTravelCarouselCard
                      key={card.key}
                      title={card.title}
                      body={card.body}
                      images={card.images}
                    />
                  ),
                )}
              </div>
            </div>
          </section>

          <details id="experiences" className={styles.xpCollapsible}>
            <summary className={styles.xpCollapsibleSummary}>
              <span className={styles.xpCollapsibleSummaryText}>
                <span className={styles.xpCollapsibleTitle}>
                  Explore around Ruru
                </span>
                <span className={styles.xpCollapsibleIntro}>
                  Coastal walks, hidden beaches and quiet places nearby.
                </span>
              </span>
              <span className={styles.xpCollapsibleChevron} aria-hidden />
            </summary>
            <div className={styles.xpCollapsiblePanel}>
              <section
                className={`${styles.xpSection} ${styles.xpSectionAsPanel}`}
                aria-labelledby="experiences-heading"
              >
                <div className={styles.wrap}>
                  <header className={`${styles.sectionHead} ${styles.xpEdHead}`}>
                    <h2 id="experiences-heading" className={styles.sectionTitle}>
                      {ruruExperiencesBlock.title}
                    </h2>
                    <p className={styles.sectionHint}>{ruruExperiencesBlock.hint}</p>
                    <p className={styles.xpIntro}>{ruruExperiencesBlock.intro}</p>
                  </header>

                  {ruruExperiencesBlock.items.map((xp, index) => {
                    const copy = (
                      <div className={styles.xpSplitCopy}>
                        <h3 id={`xp-${index}-title`}>{xp.title}</h3>
                        {xp.paragraphs.map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                        <ul className={styles.xpLinks}>
                          {xp.links.map((l) => (
                            <li key={l.href}>
                              <a
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {l.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                    const figure = (
                      <RuruExperimentalLightboxImage
                        src={xp.image}
                        alt={xp.imageAlt}
                        sizes="(max-width: 899px) 100vw, min(30vw, 320px)"
                        buttonClassName={styles.xpSplitFigure}
                        imageClassName={styles.xpEdFigureImg}
                      />
                    );

                    return (
                      <article
                        key={xp.title}
                        className={styles.xpSplit}
                        aria-labelledby={`xp-${index}-title`}
                      >
                        {figure}
                        {copy}
                      </article>
                    );
                  })}

                  <div className={styles.moreEditorial}>
                    <h3 className={styles.moreEditorialTitle}>
                      {ruruExperiencesBlock.moreTitle}
                    </h3>
                    <p className={styles.moreEditorialSubtitle}>
                      {ruruExperiencesBlock.moreSubtitle}
                    </p>
                    <p className={styles.moreEditorialBody}>{ruruExperiencesBlock.moreBody}</p>
                    <ul className={styles.moreEditorialRecs}>
                      {ruruExperiencesBlock.moreRecommendations.map((rec) => (
                        <li key={rec.href} className={styles.moreEditorialRecItem}>
                          <span className={styles.moreEditorialRecLabel}>{rec.label}</span>
                          <a
                            href={rec.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.moreEditorialRecLink}
                          >
                            <strong>{rec.place}</strong>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </details>

          <div className={`${styles.faqSlot} ${styles.wrap}`}>
            <LocationFaqSection items={RURU_FAQ_ITEMS} />
          </div>

          <div className={styles.ctaSlot}>
            <LocationCta
              priceFrom={ruruCta.priceFrom}
              bookHref={ruruCta.bookHref}
            />
          </div>
        </main>
      </LightboxProvider>
    </div>
  );
}
