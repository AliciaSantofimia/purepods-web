import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { StayAtLink } from "@/components/experiences/stayAtLink";
import {
  relaxAboutParagraphs,
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
      "Curated geothermal relaxation in Rotorua and coastal calm from Northland to Stewart Island and Hurunui — each place with an official visitor link and a suggested PurePod glass eco-cabin stay.",
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

function RelaxRcOfficialLink({ name, href }: { name: string; href: string }) {
  if (!href.trim()) return null;
  return (
    <p className="relax-rc-place__official">
      <a className="relax-rc-place__official-link" href={href} target="_blank" rel="noopener noreferrer">
        <span className="relax-rc-place__official-label">Official visitor information</span>
        <span className="visually-hidden"> — {name}</span>
      </a>
    </p>
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
          <h3 id={titleId} className="relax-rc-place__name">
            {name}
          </h3>
          <RelaxRcOfficialLink name={name} href={officialHref} />
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
    return (
      <article className="relax-rc-place relax-rc-place--bleed" aria-labelledby={titleId} id={place.id}>
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
          <h3 id={titleId} className="relax-rc-place__name relax-rc-place__name--bleed">
            {name}
          </h3>
          <RelaxRcOfficialLink name={name} href={officialHref} />
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
      <h3 id={titleId} className="relax-rc-place__name">
        {name}
      </h3>
      <RelaxRcOfficialLink name={name} href={officialHref} />
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
    <section className="relax-rc-chapter journey-chapter" id={chapter.id} aria-labelledby={headingId}>
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
    <div className="experience-ref">
      <RelaxRcJsonLd />
      <ExpStandardChrome
        navItems={[
          { href: "#relax-rc-thermal", label: "Thermal" },
          { href: "#relax-rc-coastal", label: "Coastal" },
          { href: "#faq", label: "FAQ" },
        ]}
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
            <p className="relax-rc-hero-eyebrow">Serenity &amp; wellness</p>
            <h1>Relax &amp; Coastal</h1>
            <p className="impact-summary">
              A calm, premium field note to geothermal Rotorua, open Northland coast, Rakiura skies above Paterson Inlet,
              and Hurunui&apos;s elemental shore — each stop paired with a suggested PurePod when the geography agrees.
            </p>
            <p className="impact-summary relax-v1-hero__summary-sub">
              Seven intentional places in two movements: thermal waters first, then coastal calm and hidden landscapes.
            </p>
            <Link className="btnGhost" href="#relax-rc-deck">
              Read on
            </Link>
          </div>
        </header>

        <main id="main">
          <section id="relax-rc-deck" className="relax-rc-deck" aria-labelledby="about-heading">
            <div className="relax-rc-deck__ribbon" aria-hidden="true" />
            <div className="wrap relax-rc-deck__wrap">
              <h2 id="about-heading" className="visually-hidden">
                About this Relax &amp; Coastal guide
              </h2>
              <p className="relax-rc-deck__kicker">Editorial · New Zealand</p>
              <div className="relax-rc-deck__grid">
                <p className="relax-rc-deck__line relax-rc-deck__line--primary">{relaxAboutParagraphs[0]}</p>
                <div className="relax-rc-deck__col">
                  <p className="relax-rc-deck__line">{relaxAboutParagraphs[1]}</p>
                  <p className="relax-rc-deck__line relax-rc-deck__line--linkline">
                    Browse the full set on{" "}
                    <Link className="relax-rc-text-link" href="/experiences">
                      Experiences
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="relax-rc-visual-gap" aria-hidden="true" />

          <section className="relax-v1-blocks relax-rc" id="blocks" aria-label="Curated Relax and Coastal places">
            <div className="wrap">
              <header className="relax-rc-toc">
              <div className="relax-rc-toc__label">Contents</div>
              <h2 className="journey-title section-title-premium relax-rc-toc__title">Curated for calm pacing</h2>
              <div className="relax-rc-toc__intro-stack">
                <p className="journey-intro relax-rc-toc__intro-lead">
                  Seven places in two movements — thermal waters and geothermal relaxation in Rotorua, then coastal calm
                  and hidden landscapes from Northland to Stewart Island and Hurunui.
                </p>
                <p className="journey-intro relax-rc-toc__intro-sub">
                  Each listing includes an official visitor link you can update in code when final URLs are ready.
                  Photographs appear only where we hold an honest file; the rest is typography and space.
                </p>
              </div>
              <ol className="relax-rc-toc__list" aria-label="Chapter shortcuts">
                {relaxRcChapters.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`}>{c.title}</a>
                  </li>
                ))}
              </ol>
              </header>
            </div>

            {relaxRcChapters.map((chapter, index) => (
              <RelaxRcChapterSection key={chapter.id} chapter={chapter} index={index} />
            ))}
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
                <p className="relax-rc-pod-bridge-note">
                  Site-specific details and inclusions are confirmed when you book; this page pairs restorative stops with
                  a suggested nearby pod.
                </p>
                <Link href="/pods" className="btnGhost relax-rc-pod-bridge-btn">
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
