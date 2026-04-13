import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";

const P = "/assets/img/experiences/placeholders/";

const blocks = [
  {
    img: `${P}wine-dine-block-01.jpg`,
    alt: "Placeholder image for a vineyard tasting experience in New Zealand",
    h: "Vineyard tasting placeholder",
    p: "Use this block for a verified tasting room, vineyard visit or cellar-door style experience. Replace with confirmed details only, including opening context, regional reference and why it fits this Wine & Dine theme.",
    ext: "https://example.com/replace-with-vineyard-reference",
    extLabel: "View wine reference (placeholder) →",
  },
  {
    img: `${P}wine-dine-block-02.jpg`,
    alt: "Placeholder image for a regional producer and local food experience",
    h: "Regional producer placeholder",
    p: "Use this block for a verified producer-led visit such as artisan food, farm gate or craft beverage context. Keep the description practical and factual, with clear replacement fields for final names and confirmed visitor information.",
    ext: "https://example.com/replace-with-producer-reference",
    extLabel: "View producer reference (placeholder) →",
  },
  {
    img: `${P}wine-dine-block-03.jpg`,
    alt: "Placeholder image for a destination dining and seasonal menu experience",
    h: "Destination dining placeholder",
    p: "Use this block for a verified destination dining or seasonal menu experience. Preserve a calm editorial tone and keep all claims replaceable until final venue details, service model and regional pairing are validated.",
    ext: "https://example.com/replace-with-dining-reference",
    extLabel: "View dining reference (placeholder) →",
  },
];

const faq = [
  {
    q: "What does this Wine & Dine page include?",
    a: "This draft page groups food and wine-oriented experience blocks with a visual placeholder, a practical description, an external reference link and a PurePods booking pathway.",
  },
  {
    q: "Are the producers and dining venues final?",
    a: "No. The current version uses clearly replaceable placeholders so final producer names, regions and pairings can be added once confirmed.",
  },
  {
    q: "How do I proceed to booking from this page?",
    a: "Each block includes a booking pathway, and the final call to action leads to PurePods booking to review availability and choose a suitable stay.",
  },
];

export function WineDineView() {
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
            src={`${P}wine-dine-hero-placeholder.jpg`}
            alt="Vineyard and table landscape placeholder for Wine and Dine hero image"
            fill
            sizes="100vw"
            className="heroImg"
            priority
          />
          <div className="heroInner">
            <h1>Wine &amp; Dine</h1>
            <p className="impact-summary">
              Wine &amp; Dine brings together draft food and wine experience blocks for New Zealand planning with PurePods.
              The page is structured for producer, tasting and dining examples, each paired with a practical external
              reference link and a direct booking pathway to a nearby glass eco-cabin stay.
            </p>
            <Link className="btnGhost" href="#about">
              Read on
            </Link>
          </div>
        </header>

        <main id="main">
          <section id="about" aria-labelledby="about-heading">
            <div className="wrap">
              <div className="surface">
                <h2 id="about-heading" className="visually-hidden">
                  About this page
                </h2>
                <p className="lead">
                  This draft page follows the same Experience architecture as the page family: hero, orientation text,
                  structured content blocks, pod bridge, FAQ and booking CTA. The block copy is intentionally replaceable
                  so final producer, dining and regional details can be inserted after verification. Explore all themes in{" "}
                  <Link href="/experiences">Experiences</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="wrap" id="blocks" aria-label="Wine and dine content blocks">
            {blocks.map((b) => (
              <article key={b.h} className="chapter">
                <div className="moment">
                  <div className="media">
                    <ExpRefImage src={b.img} alt={b.alt} fill sizes="(max-width:900px) 100vw, 45vw" />
                  </div>
                  <div className="copy">
                    <h2>{b.h}</h2>
                    <p>{b.p}</p>
                    <div className="links-row">
                      <a className="external-link" href={b.ext} target="_blank" rel="noopener noreferrer">
                        {b.extLabel}
                      </a>
                      <a
                        className="journey-pod"
                        href="https://purepods.com/booking/?cart=Checkout"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stay at <strong className="journey-pod-name">Nearby PurePod (placeholder)</strong> →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="pod-bridge" aria-labelledby="pod-bridge-heading">
            <div className="wrap">
              <h2 id="pod-bridge-heading" className="pod-bridge__title">
                From regional food moments to a slower overnight rhythm
              </h2>
              <p>
                Wine and dining experiences pair naturally with a PurePods stay before or after your outing. PurePods are
                glass eco-cabins in remote natural settings, creating a quiet base for conversation, rest and time in the
                landscape.
              </p>
              <p>
                This bridge section is designed to connect verified producer and dining content with a clear booking
                pathway, without overstatement or unverified claims.
              </p>
            </div>
          </section>

          <section className="faq" id="faq" aria-labelledby="faq-heading">
            <div className="wrap">
              <div className="surface">
                <h2 id="faq-heading">Frequently asked questions</h2>
                <ul>
                  {faq.map((f) => (
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
                  Wine &amp; Dine
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
                  Check booking availability, then pair your preferred food and wine experience with a nearby PurePod stay.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ExpStandardChrome>
    </div>
  );
}
