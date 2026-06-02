import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { StayAtLink } from "@/components/experiences/stayAtLink";
import { RelaxCoastalMotionRoot } from "@/components/experiences/views/RelaxCoastalMotionRoot";
import { AdventureWildlifePageTemplate } from "@/components/experiences/views/AdventureWildlifePageTemplate";
import { EXPERIENCE_PAGES } from "@/lib/experiencesData";
import { adventureRestClosingSlides } from "@/lib/experiencesData/adventureWildlife";
import {
  relaxAboutParagraphs,
  relaxContextBody,
  relaxContextHeading,
  relaxExperienceSlides,
  relaxFaq,
  relaxHero,
  relaxRcChapters,
  type RelaxRcChapter,
  type RelaxRcPlace,
} from "@/lib/experiencesData/relaxCoastalData";

const RELAX_POD_BRIDGE_MAIN = {
  src: "/assets/img/experiences/culture/purepod-glass-cabin-lake-view-new-zealand-remote-nature-stay.jpg",
  alt: "PurePod glass cabin overlooking a remote lake and rolling hills in New Zealand, peaceful nature stay experience",
} as const;

function RelaxRcJsonLd() {
  const flatPlaces = relaxRcChapters.flatMap((chapter) => chapter.places);
  const itemListElement = flatPlaces.map((place, idx) => ({
    "@type": "ListItem" as const,
    position: idx + 1,
    name: place.name,
    description: place.paragraphs.join(" ").slice(0, 220),
    url: `https://purepods.com/experiences/relax-coastal#${place.id}`,
  }));

  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Relax & Coastal — serenity, wellness and restorative landscapes in New Zealand",
    description:
      "Curated geothermal relaxation in Rotorua and coastal calm from Northland to Stewart Island and Hurunui — each place opens to visitor information with a suggested PurePod glass eco-cabin stay.",
    numberOfItems: itemListElement.length,
    itemListElement,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function RelaxRcPlaceBody({ paragraphs }: { paragraphs: RelaxRcPlace["paragraphs"] }) {
  const lines = paragraphs.filter((p) => p.trim().length > 0);
  return (
    <div className="relax-rc-place__body-stack">
      {lines.map((para, i) => (
        <p key={i} className="relax-rc-place__body">
          {para}
        </p>
      ))}
    </div>
  );
}

function RelaxRcPlaceTitle({
  id,
  name,
  nameClassName,
  officialHref,
}: {
  id: string;
  name: string;
  nameClassName: string;
  officialHref: string;
}) {
  const href = officialHref.trim();
  if (href) {
    return (
      <h3 id={id} className={nameClassName}>
        <a className="relax-rc-place__name-link" href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
    );
  }
  return (
    <h3 id={id} className={nameClassName}>
      {name}
    </h3>
  );
}

function RelaxRcPlaceArticle({ place }: { place: RelaxRcPlace }) {
  const { figure, layout = "image-left", name, eyebrow, paragraphs, officialHref, ctas } = place;
  const titleId = `${place.id}-title`;

  if (!figure) {
    return (
      <article className="relax-rc-place relax-rc-place--prose" aria-labelledby={titleId} id={place.id}>
        <div className="relax-rc-place__prose-inner">
          <p className="relax-rc-place__eyebrow">{eyebrow}</p>
          <RelaxRcPlaceTitle id={titleId} name={name} nameClassName="relax-rc-place__name" officialHref={officialHref} />
          <RelaxRcPlaceBody paragraphs={paragraphs} />
          <div className="hiking-ctas relax-rc-place__ctas">
            {ctas.map((c) => (
              <StayAtLink key={`${c.href}-${c.label}`} href={c.href} label={c.label} className="journey-pod hiking-pod-cta" />
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (layout === "full-bleed") {
    const cinematicBleed = place.id === "hells-gate-mud-spa";
    return (
      <article
        className={`relax-rc-place relax-rc-place--bleed${cinematicBleed ? " relax-rc-place--cinematic" : ""}`}
        aria-labelledby={titleId}
        id={place.id}
      >
        <div className="relax-rc-place__bleed-stage">
          <figure className="relax-rc-place__bleed-figure">
            <div className="relax-rc-place__bleed-media">
              <ExpRefImage
                src={figure.src}
                alt={figure.alt}
                fill
                sizes="(max-width: 900px) 100vw, min(1200px, 92vw)"
                className="relax-rc-place__bleed-img"
              />
            </div>
          </figure>
          <div className="relax-rc-place__bleed-copy">
            <p className="relax-rc-place__eyebrow">{eyebrow}</p>
            <RelaxRcPlaceTitle
              id={titleId}
              name={name}
              nameClassName="relax-rc-place__name relax-rc-place__name--bleed"
              officialHref={officialHref}
            />
            <RelaxRcPlaceBody paragraphs={paragraphs} />
            <div className="hiking-ctas relax-rc-place__ctas">
              {ctas.map((c) => (
                <StayAtLink key={`${c.href}-${c.label}`} href={c.href} label={c.label} className="journey-pod hiking-pod-cta" />
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  const imageFirst = layout === "image-left";

  const mediaBlock = (
    <div className="relax-rc-place__split-media">
      <figure className="relax-rc-place__split-figure">
        <div className="relax-rc-place__split-frame">
          <ExpRefImage
            src={figure.src}
            alt={figure.alt}
            fill
            sizes="(max-width: 900px) 100vw, min(560px, 45vw)"
            className="relax-rc-place__split-img"
          />
        </div>
      </figure>
    </div>
  );

  const copyBlock = (
    <div className="relax-rc-place__split-copy">
      <p className="relax-rc-place__eyebrow">{eyebrow}</p>
      <RelaxRcPlaceTitle id={titleId} name={name} nameClassName="relax-rc-place__name" officialHref={officialHref} />
      <RelaxRcPlaceBody paragraphs={paragraphs} />
      <div className="hiking-ctas relax-rc-place__ctas">
        {ctas.map((c) => (
          <StayAtLink key={`${c.href}-${c.label}`} href={c.href} label={c.label} className="journey-pod hiking-pod-cta" />
        ))}
      </div>
    </div>
  );

  return (
    <article className="relax-rc-place relax-rc-place--split" aria-labelledby={titleId} id={place.id}>
      {imageFirst ? (
        <>
          {mediaBlock}
          {copyBlock}
        </>
      ) : (
        <>
          {copyBlock}
          {mediaBlock}
        </>
      )}
    </article>
  );
}

function RelaxRcChapterSection({ chapter, index }: { chapter: RelaxRcChapter; index: number }) {
  const headingId = `${chapter.id}-heading`;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <section
      className="relax-rc-chapter journey-chapter relax-coastal-reveal relax-coastal-reveal--chapter"
      id={chapter.id}
      aria-labelledby={headingId}
    >
      <div className="relax-rc-chapter__mast">
        <div className="relax-rc-chapter__mast-shade" aria-hidden />
        <div className="wrap relax-rc-chapter__mast-inner">
          <span className="relax-rc-chapter__index" aria-hidden="true">
            {indexLabel}
          </span>
          <header className="relax-rc-chapter__header">
            <p className="relax-rc-chapter__eyebrow">{chapter.eyebrow}</p>
            <h2 id={headingId} className="journey-title section-title-premium relax-rc-chapter__title">
              {chapter.title}
            </h2>
            <div className="relax-rc-chapter__intro-stack">
              {chapter.intro.map((line, i) =>
                line.trim() ? (
                  <p key={i} className="journey-intro relax-rc-chapter__intro-line">
                    {line}
                  </p>
                ) : null,
              )}
            </div>
          </header>
        </div>
      </div>

      <div className="wrap relax-rc-chapter__sheet">
        {chapter.moodFigure ? (
          <figure className="relax-rc-mood">
            <div className="relax-rc-mood__frame">
              <ExpRefImage
                src={chapter.moodFigure.src}
                alt={chapter.moodFigure.alt}
                fill
                sizes="(max-width: 900px) 100vw, min(1120px, 90vw)"
                className="relax-rc-mood__img"
              />
            </div>
            {chapter.moodFigure.caption ? (
              <figcaption className="relax-rc-mood__caption">{chapter.moodFigure.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className="relax-rc-chapter__places">
          {chapter.places.map((place) => (
            <RelaxRcPlaceArticle key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelaxCoastalView() {
  return (
    <AdventureWildlifePageTemplate
      hero={relaxHero}
      breadcrumbLabel={EXPERIENCE_PAGES["relax-coastal"].breadcrumbLabel}
      heroTitle="Relax & Coastal Experiences in New Zealand"
      heroSummary="Relax & Coastal by PurePods brings together geothermal waters, forest springs, coastal air and private glass cabins across New Zealand, made for slow mornings, quiet evenings and restorative time in nature."
      contextHeading={relaxContextHeading}
      contextBody={relaxContextBody}
      carouselHeading="Curated relax and coastal experiences"
      carouselIntro="A curated starting point for days shaped by wellness, warm water and coastal air."
      experienceSlides={relaxExperienceSlides}
      restEyebrow="When the day unfolds"
      restHeading="From restorative landscapes to complete stillness"
      restLead={[
        "Days here aren't rushed — they're softened.",
        "A morning in geothermal water, an afternoon by the coast, and a night where the landscape becomes the only schedule.",
      ]}
      restSlides={adventureRestClosingSlides}
      faqItems={relaxFaq}
      stayClosingHeading="Stay somewhere that changes how you experience it all"
      stayClosingBody={[
        "PurePods are placed to give you access to these moments — but more importantly, to what comes after them.",
        "Stillness. Space. And a deeper sense of place.",
      ]}
      ctaEyebrow="Relax & Coastal"
      ctaTopSupport="Check real-time availability across all PurePods."
      ctaLabel="Check availability"
      ctaHref="https://purepods.com/booking/"
      ctaBottomSupport="Choose your PurePod and plan your stay around it."
    />
  );
}
