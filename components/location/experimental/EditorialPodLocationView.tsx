import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { LightboxProvider } from "@/components/ui/LightboxContext";
import {
  LocationCta,
  LocationFaqSection,
  LocationReviewsSection,
} from "@/components/location";
import { LocationPodNavHeroSync } from "@/components/location/LocationPodNavHeroSync";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { EditorialPodLocationConfig } from "@/lib/locationPods/experimental/editorialPodLocationTypes";
import { RuruExperimentalImageCarousel } from "./RuruExperimentalImageCarousel";
import { RuruExperimentalLightboxImage } from "./RuruExperimentalLightboxImage";
import { RuruTravelCarouselCard } from "./RuruTravelCarouselCard";
import { RuruTravelEditorialCard } from "./RuruTravelEditorialCard";
import styles from "./ruruExperimental.module.css";

type Props = { config: EditorialPodLocationConfig };

function fallbackReviewsForPod(
  podName: string,
): EditorialPodLocationConfig["reviews"] {
  return {
    title: "Guest reviews",
    hint: "What guests often highlight",
    intro: `Early review placeholders for ${podName}. Update with final approved testimonials per pod when available.`,
    items: [
      {
        quote:
          "The privacy was exactly what we were looking for. It felt easy to disconnect and settle into the landscape.",
        author: "Guest feedback",
        context: `${podName} stay`,
      },
      {
        quote:
          "Waking up to open views and ending the day under the night sky made the stay feel genuinely restorative.",
        author: "Guest feedback",
        context: `${podName} stay`,
      },
      {
        quote:
          "The pod felt comfortable and simple in the best way, with nature always present but no distractions.",
        author: "Guest feedback",
        context: `${podName} stay`,
      },
    ],
  };
}

function heroImageStyle(hero: EditorialPodLocationConfig["hero"]): CSSProperties {
  return {
    "--hero-obj": hero.imagePosition,
    "--hero-obj-md": hero.imagePositionMd,
    "--hero-obj-xl": hero.imagePositionXl,
  } as CSSProperties;
}

function hasMoreEditorialContent(
  block: EditorialPodLocationConfig["experiencesBlock"],
): boolean {
  return (
    Boolean(block.moreTitle?.trim()) ||
    Boolean(block.moreSubtitle?.trim()) ||
    Boolean(block.moreBody?.trim()) ||
    Boolean(block.moreExploreLead?.trim()) ||
    Boolean(block.moreExploreClosing?.trim()) ||
    (block.moreExploreGroups?.length ?? 0) > 0 ||
    block.moreRecommendations.length > 0
  );
}

export function EditorialPodLocationView({ config }: Props) {
  const hero = config.hero;
  const { podNarrative, travelBlock, experiencesBlock, experiencesCollapsible } =
    config;
  const showMoreEditorial = hasMoreEditorialContent(experiencesBlock);
  const reviews = config.reviews ?? fallbackReviewsForPod(hero.title);
  const experiencePreviewItems = experiencesBlock.items.slice(0, 3);
  const experienceCountLabel = `${experiencesBlock.items.length} curated ${
    experiencesBlock.items.length === 1 ? "experience" : "experiences"
  }`;
  const experienceNamePreview = experiencePreviewItems
    .map((xp) => xp.title)
    .join(" · ");

  return (
    <div className={styles.root}>
      <LightboxProvider>
        <header
          className={[
            styles.hero,
            hero.heroNightOverlay && styles.heroNightOverlay,
            hero.heroPhotoForwardComposition && styles.heroPhotoForward,
            hero.heroSunsetOverlay && styles.heroSunsetOverlay,
          ]
            .filter(Boolean)
            .join(" ")}
          id="top"
        >
          <div className={styles.heroMedia}>
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroImg}
              style={heroImageStyle(hero)}
            />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Pods", href: "/pods" },
                  { label: hero.title },
                ]}
              />
              <p className={styles.heroKicker}>{config.heroKicker}</p>
              <h1 className={styles.heroTitle}>{hero.title}</h1>
              {hero.subtitleParagraphs.map((para, i) => (
                <p key={i} className={styles.heroLead}>
                  {para}
                </p>
              ))}
              <Link href="#the-pod" className={styles.heroCta}>
                Continue
              </Link>
            </div>
          </div>
          <div className={styles.heroFadeToPage} aria-hidden="true" />
        </header>
        <LocationPodNavHeroSync />

        <main className={styles.main} id="main">
          <section
            id="the-pod"
            className={styles.podSection}
            aria-labelledby="the-pod-heading"
          >
            <div className={styles.wrap}>
              <header className={`${styles.sectionHead} ${styles.podHead}`}>
                <span className={styles.podHeadRule} aria-hidden="true" />
                <h2
                  id="the-pod-heading"
                  className={`${styles.sectionTitle} ${styles.podFocusTitle}`}
                >
                  {podNarrative.title}
                </h2>
                <p className={styles.sectionHint}>{podNarrative.hint}</p>
              </header>

              <div className={styles.podEditorial}>
                <div className={styles.podTextColumn}>
                  <div className={styles.podTextStack}>
                    {podNarrative.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className={i === 0 ? styles.podLead : styles.podBody}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.podVisualColumn}>
                  <p className={styles.podGalleryHint}>
                    Use the arrows or swipe to see more photos of the pod.
                  </p>
                  <RuruExperimentalImageCarousel
                    items={podNarrative.gallery.map((item) => ({
                      src: item.src,
                      alt: item.alt,
                      imageStyle: { objectPosition: item.position },
                    }))}
                    ariaLabel={config.podCarouselAriaLabel}
                    sizes="(max-width: 899px) 100vw, min(720px, 62vw)"
                    className={styles.podCarousel}
                    slideVariant="feature"
                    priorityFirst
                  />
                  <figure
                    className={styles.podCaptionFigure}
                    aria-label="About the stay"
                  >
                    <blockquote
                      className={styles.podCaptionQuote}
                      cite="#the-pod"
                    >
                      <p className={styles.podCaptionText}>
                        {podNarrative.galleryCaption}
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
                  {travelBlock.title}
                </h2>
                <p className={styles.sectionHint}>{travelBlock.hint}</p>
              </header>
              <p className={styles.travelMediaHint}>
                Swipe through the photos for a closer look at the journey, the setting and
                what to expect before you arrive. Climate is covered in text only.
              </p>
              <div className={styles.travelGrid}>
                {travelBlock.cards.map((card) =>
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
                  {experiencesCollapsible.summaryTitle}
                </span>
                <span className={styles.xpCollapsibleIntro}>
                  {experiencesCollapsible.summaryIntro}
                </span>
                <span className={styles.xpCollapsiblePreview}>
                  <span className={styles.xpPreviewThumbs} aria-hidden>
                    {experiencePreviewItems.map((xp) => (
                      <span key={xp.title} className={styles.xpPreviewThumb}>
                        <Image
                          src={xp.image}
                          alt={xp.imageAlt}
                          fill
                          sizes="(max-width: 640px) 22vw, 110px"
                          className={styles.xpPreviewThumbImg}
                          style={
                            xp.imageObjectPosition
                              ? { objectPosition: xp.imageObjectPosition }
                              : undefined
                          }
                        />
                      </span>
                    ))}
                  </span>
                  <span className={styles.xpPreviewMeta}>
                    <span className={styles.xpPreviewCount}>
                      {experienceCountLabel}
                    </span>
                    <span className={styles.xpPreviewNames}>
                      {experienceNamePreview}
                    </span>
                  </span>
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
                      {experiencesBlock.title}
                    </h2>
                    <p className={styles.sectionHint}>{experiencesBlock.hint}</p>
                    <p className={styles.xpIntro}>{experiencesBlock.intro}</p>
                  </header>

                  {experiencesBlock.items.map((xp, index) => {
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
                        imageStyle={
                          xp.imageObjectPosition
                            ? { objectPosition: xp.imageObjectPosition }
                            : undefined
                        }
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

                  {showMoreEditorial ? (
                    <div className={styles.moreEditorial}>
                      <h3 className={styles.moreEditorialTitle}>
                        {experiencesBlock.moreTitle}
                      </h3>
                      {experiencesBlock.moreExploreGroups &&
                      experiencesBlock.moreExploreGroups.length > 0 ? (
                        <>
                          {experiencesBlock.moreExploreLead ? (
                            <p className={styles.moreExploreLead}>
                              {experiencesBlock.moreExploreLead}
                            </p>
                          ) : null}
                          <div className={styles.moreExploreGroups}>
                            {experiencesBlock.moreExploreGroups.map((group, gi) => (
                              <section
                                key={`${group.heading}-${gi}`}
                                className={
                                  gi > 0
                                    ? `${styles.moreExploreGroup} ${styles.moreExploreGroupFollows}`
                                    : styles.moreExploreGroup
                                }
                                aria-labelledby={`more-explore-${gi}-heading`}
                              >
                                <h4
                                  id={`more-explore-${gi}-heading`}
                                  className={styles.moreExploreGroupHeading}
                                >
                                  {group.heading}
                                </h4>
                                <p className={styles.moreExploreGroupIntro}>
                                  {group.intro}
                                </p>
                                {group.links.length > 0 ? (
                                  <ul className={styles.moreEditorialRecs}>
                                    {group.links.map((link) => (
                                      <li
                                        key={link.href}
                                        className={styles.moreEditorialRecItem}
                                      >
                                        <a
                                          href={link.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={styles.moreEditorialRecLink}
                                        >
                                          <strong>{link.name}</strong>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </section>
                            ))}
                          </div>
                          {experiencesBlock.moreExploreClosing ? (
                            <p className={styles.moreExploreClosing}>
                              {experiencesBlock.moreExploreClosing}
                            </p>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <p className={styles.moreEditorialSubtitle}>
                            {experiencesBlock.moreSubtitle}
                          </p>
                          <p className={styles.moreEditorialBody}>
                            {experiencesBlock.moreBody}
                          </p>
                          {experiencesBlock.moreRecommendations.length > 0 ? (
                            <ul className={styles.moreEditorialRecs}>
                              {experiencesBlock.moreRecommendations.map((rec) => (
                                <li
                                  key={rec.href}
                                  className={styles.moreEditorialRecItem}
                                >
                                  <span className={styles.moreEditorialRecLabel}>
                                    {rec.label}
                                  </span>
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
                          ) : null}
                        </>
                      )}
                    </div>
                  ) : null}
                </div>
              </section>
            </div>
          </details>

          {reviews && (
            <LocationReviewsSection
              title={reviews.title}
              hint={reviews.hint}
              intro={reviews.intro}
              reviews={reviews.items}
            />
          )}

          {config.faqItems.length > 0 ? (
            <div className={`${styles.faqSlot} ${styles.wrap}`}>
              <LocationFaqSection items={config.faqItems} />
            </div>
          ) : null}

          <div className={styles.ctaSlot}>
            <LocationCta bookHref={config.cta.bookHref} />
          </div>
        </main>
      </LightboxProvider>
    </div>
  );
}
