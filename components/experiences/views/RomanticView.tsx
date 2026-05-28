import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { RomanticGalleryClient } from "@/components/experiences/RomanticGalleryClient";
import { AdventureWildlifeFaqAccordion } from "@/components/experiences/views/AdventureWildlifeFaqAccordion";
import {
  romanticFaq,
  romanticGallery,
} from "@/lib/experiencesData/romanticData";

export function RomanticView() {
  return (
    <div className="experience-ref romantic-ref">
      <ExperienceRevealMotionRoot
        rootSelector=".experience-ref.romantic-ref"
        revealSelector=".romantic-reveal"
        inViewClass="romantic--in-view"
      >
        <ExpStandardChrome
          hashInPageAnchorsNative
          navItems={[
            { href: "#moments", label: "Moments" },
            { href: "#gallery", label: "Gallery" },
            { href: "#faq", label: "FAQ" },
          ]}
        >
          <header className="hero" id="top">
            <ExpRefImage
              src="/assets/img/experiences/romantic/romantic-getaway-new-zealand-purepods-hero.jpg"
              alt="Romantic PurePods glass cabin getaway in New Zealand"
              fill
              sizes="100vw"
              className="heroImg"
              priority
              objectPosition="center 42%"
            />
            <div className="heroInner">
              <h1>Where time moves slower.</h1>
              <p className="impact-summary">
                A romantic getaway in New Zealand for two: a private off-grid
                glass cabin where privacy, nature, stars and stillness create
                space for anniversaries, proposals, honeymoons or simply time
                together.
              </p>
              <Link className="btnGhost" href="#moments">
                Explore the experience
              </Link>
            </div>
          </header>

          <main id="main">
            <section
              className="experience-block romantic-reveal"
              id="essentials"
            >
              <div className="wrap">
                <h2 className="eyebrow center">
                  The experience you&apos;ll never forget
                </h2>
                <p className="lead center">
                  PurePods is more than accommodation. It&apos;s a place where
                  moments become lasting memories, and where connection is felt
                  in every detail.
                </p>
                <div className="experience-text">
                  <p>
                    PurePods is more than accommodation: it&apos;s an experience
                    designed for connection, calm and depth. Here you&apos;ll
                    have <strong>complete privacy</strong> in your own glass
                    sanctuary in the heart of nature — no interruptions, no
                    distractions, just the two of you and the horizon.
                  </p>
                  <p>
                    You&apos;re surrounded by New Zealand&apos;s{" "}
                    <strong>wild landscape</strong> at its purest: breathtaking
                    views, one-of-a-kind sunrises and sunsets that feel made for
                    you. Everything invites you to slow down and reconnect with
                    what matters.
                  </p>
                  <p>
                    When night falls, the <strong>starry skies</strong> take
                    centre stage. Thousands of stars light your evenings under
                    some of the clearest skies in the southern hemisphere,
                    creating an intimate, almost unreal setting to share in
                    silence.
                  </p>
                  <p>
                    Away from noise and screens, PurePods invites you to{" "}
                    <strong>reconnect in earnest</strong>: unhurried time
                    together, conversations that flow, and the calm of being
                    fully present for each other, with nothing in the way.
                  </p>
                </div>
              </div>
            </section>

            <section id="moments">
              <div className="wrap">
                <div className="section-title romantic-reveal">
                  <h2 className="section-kicker center">
                    Moments that deserve something extraordinary
                  </h2>
                  <p className="lead center">
                    Every love story is unique. Whatever your special moment,
                    PurePods makes it unforgettable.
                  </p>
                </div>

                <div className="moment romantic-reveal">
                  <div className="media">
                    <ExpRefImage
                      src="/assets/img/experiences/romantic/purepods-romantic-getaway-couple-sunset-view-new-zealand.jpg"
                      alt="Couple watching sunset from PurePods deck with mountain views in New Zealand"
                      fill
                      sizes="(max-width:900px) 100vw, 50vw"
                      className="romantic-moment-img romantic-moment-img--anniversaries"
                    />
                  </div>
                  <div className="copy">
                    <h3>Memorable anniversaries</h3>
                    <p>
                      Some dates deserve more than a special dinner. Every love
                      story deserves its own celebration, and PurePods is the
                      perfect place to mark{" "}
                      <strong>
                        wedding anniversaries, silver or golden anniversaries
                      </strong>
                      , or that <strong>milestone together</strong> that changed
                      everything. A quiet toast, the sun setting over the
                      landscape, and the feeling that time has stopped just for
                      you. An intimate setting to look back on what you&apos;ve
                      shared, renew your promises and create new memories
                      you&apos;ll treasure.
                    </p>
                    <Link className="btn" href="#cta">
                      Choose your date
                    </Link>
                  </div>
                </div>

                <div className="moment reverse romantic-reveal">
                  <div className="copy">
                    <h3>The perfect question</h3>
                    <p>
                      PurePods has been the setting for many{" "}
                      <strong>unforgettable proposals</strong>. A place to
                      commit to each other, to take that important step
                      surrounded by silence, nature and time together. A sunset
                      that wraps around you, the calm you need, and the
                      certainty that you&apos;ve chosen the right place to ask
                      in your own way — no rush, no audience, just the two of
                      you and the moment. Here, the words find their way… and
                      the memory lasts forever.
                    </p>
                    <Link className="btn" href="#cta">
                      Choose your moment
                    </Link>
                  </div>
                  <div className="media">
                    <ExpRefImage
                      src="/assets/img/experiences/romantic/purepods-romantic-proposal-experience-new-zealand.jpg"
                      alt="Marriage proposal at PurePods glass cabin during sunset in New Zealand"
                      fill
                      sizes="(max-width:900px) 100vw, 50vw"
                      className="romantic-moment-img romantic-moment-img--proposal"
                    />
                  </div>
                </div>

                <div className="moment romantic-reveal">
                  <div className="media">
                    <ExpRefImage
                      src="/assets/img/experiences/romantic/purepods-romantic-getaway-picnic-wine-experience-new-zealand.jpg"
                      alt="Picnic and wine set up for a romantic PurePods getaway in New Zealand"
                      fill
                      sizes="(max-width:900px) 100vw, 50vw"
                      className="img-contain romantic-moment-img romantic-moment-img--celebrations"
                      objectPosition="center 45%"
                    />
                  </div>
                  <div className="copy">
                    <h3>Special celebrations</h3>
                    <p>
                      Some occasions call for something out of the ordinary.{" "}
                      <strong>Valentine&apos;s</strong> away from the noise, a{" "}
                      <strong>birthday</strong> celebrated at your own pace, or{" "}
                      <strong>good news</strong> that deserves a proper toast.
                      At PurePods, these moments are different: long sunsets, a
                      drink as night falls, and the feeling of being in a place
                      made for just you. An intimate setting where every
                      celebration becomes a lasting memory.
                    </p>
                    <Link className="btn" href="#cta">
                      Book your special moment
                    </Link>
                  </div>
                </div>

                <div className="moment reverse romantic-reveal">
                  <div className="copy">
                    <h3>No occasion, just us</h3>
                    <p>
                      It&apos;s not a celebration.{" "}
                      <strong>It&apos;s a chance to escape.</strong> Here
                      there&apos;s no schedule and no alarm. Just long pauses,
                      looks that say everything without words, and nights in no
                      hurry to end. Some getaways work best with no plan at all:
                      an intimate space, silence around you, and the freedom to
                      simply be. At PurePods, connection deepens and every
                      moment invites you to stay a little closer.
                    </p>
                    <Link className="btn" href="#cta">
                      Make it yours
                    </Link>
                  </div>
                  <div className="media">
                    <ExpRefImage
                      src="/assets/img/experiences/romantic/purepods-romantic-getaway-bedroom-fireplace-night.jpg"
                      alt="Romantic PurePods bedroom at night with fireplace and candles"
                      fill
                      sizes="(max-width:900px) 100vw, 50vw"
                      className="romantic-moment-img romantic-moment-img--escape"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="gallery" aria-label="Gallery">
              <div className="romantic-reveal">
                <RomanticGalleryClient items={romanticGallery} />
              </div>
            </section>

            <section className="night-soft romantic-reveal" id="night">
              <div className="wrap">
                <div className="section-title">
                  <h2>Night, unfiltered</h2>
                  <p>
                    Fewer lights. More stars. And the feeling of being far from
                    everything.
                  </p>
                </div>
                <div className="quote-grid">
                  <div className="quote">
                    <p>
                      “We did nothing and it was perfect. Just being there,
                      listening to the land and watching the sky.”
                    </p>
                    <b>Getaway for two</b>
                    <span>One night</span>
                  </div>
                  <div className="quote">
                    <p>
                      “Sunset from bed… and then total darkness. That calm is
                      hard to put into words.”
                    </p>
                    <b>Weekend</b>
                    <span>Two nights</span>
                  </div>
                  <div className="quote">
                    <p>
                      “Simple dinner, drink in hand, and the feeling that time
                      stretches.”
                    </p>
                    <b>Celebration</b>
                    <span>One night</span>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="faq aw-faq-accordion"
              id="faq"
              aria-labelledby="faq-heading"
            >
              <div className="wrap">
                <div className="surface romantic-reveal">
                  <h2 id="faq-heading">Frequently asked questions</h2>
                  <AdventureWildlifeFaqAccordion items={romanticFaq} />
                </div>
              </div>
            </section>

            <section
              className="cta romantic-reveal"
              id="cta"
              aria-labelledby="romantic-cta-heading"
            >
              <div className="wrap cta-inner">
                <div className="cta-panel">
                  <div className="cta-icon" aria-hidden="true">
                    ♥
                  </div>
                  <p id="romantic-cta-heading" className="cta-kicker">
                    Romantic escapes in New Zealand
                  </p>
                  <p className="cta-text">
                    A private glass cabin made for two, surrounded by stillness,
                    nature and some of New Zealand&apos;s most secluded
                    landscapes.
                  </p>
                  <div className="cta-actions">
                    <a
                      className="btn btn-primary"
                      href="https://purepods.com/booking/"
                    >
                      See available PurePods →
                    </a>
                  </div>
                  <p className="cta-note">
                    Choose your PurePod and plan a romantic escape that feels
                    completely your own.
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
