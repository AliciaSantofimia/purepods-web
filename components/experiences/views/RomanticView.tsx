import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { ExpStandardChrome } from "@/components/experiences/ExpStandardChrome";
import { RomanticBookingClient } from "@/components/experiences/RomanticBookingClient";
import { RomanticGalleryClient } from "@/components/experiences/RomanticGalleryClient";
import { romanticFaq, romanticGallery } from "@/lib/experiencesData/romanticData";

export function RomanticView() {
  return (
    <div className="experience-ref romantic-ref">
      <ExpStandardChrome
        navItems={[
          { href: "#moments", label: "Moments" },
          { href: "#gallery", label: "Gallery" },
          { href: "#night", label: "Night" },
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
              An intimate retreat to disconnect, raise a glass without rush, and watch the light shift in silence — until
              the night fills with stars.
            </p>
            <Link className="btnGhost" href="#moments">
              Explore the experience
            </Link>
          </div>
        </header>

        <main id="main">
          <section className="experience-block" id="essentials">
            <div className="wrap">
              <h2 className="eyebrow center">The experience you&apos;ll never forget</h2>
              <p className="lead center">
                PurePods is more than accommodation. It&apos;s a place where moments become lasting memories, and where
                connection is felt in every detail.
              </p>
              <div className="experience-text">
                <p>
                  PurePods is more than accommodation: it&apos;s an experience designed for connection, calm and depth.
                  Here you&apos;ll have <strong>complete privacy</strong> in your own glass sanctuary in the heart of nature
                  — no interruptions, no distractions, just the two of you and the horizon.
                </p>
                <p>
                  You&apos;re surrounded by New Zealand&apos;s <strong>wild landscape</strong> at its purest: breathtaking
                  views, one-of-a-kind sunrises and sunsets that feel made for you. Everything invites you to slow down and
                  reconnect with what matters.
                </p>
                <p>
                  When night falls, the <strong>starry skies</strong> take centre stage. Thousands of stars light your
                  evenings under some of the clearest skies in the southern hemisphere, creating an intimate, almost unreal
                  setting to share in silence.
                </p>
                <p>
                  Away from noise and screens, PurePods invites you to <strong>reconnect in earnest</strong>: unhurried
                  time together, conversations that flow, and the calm of being fully present for each other, with nothing
                  in the way.
                </p>
              </div>
            </div>
          </section>

          <section id="moments">
            <div className="wrap">
              <div className="section-title">
                <h2 className="section-kicker center">Moments that deserve something extraordinary</h2>
                <p className="lead center">
                  Every love story is unique. Whatever your special moment, PurePods makes it unforgettable.
                </p>
              </div>

              <div className="moment">
                <div className="media">
                  <ExpRefImage
                    src="/assets/img/experiences/romantic/purepods-romantic-getaway-couple-sunset-view-new-zealand.jpg"
                    alt="Couple watching sunset from PurePods deck with mountain views in New Zealand"
                    fill
                    sizes="(max-width:900px) 100vw, 50vw"
                  />
                </div>
                <div className="copy">
                  <h3>Memorable anniversaries</h3>
                  <p>
                    Some dates deserve more than a special dinner. Every love story deserves its own celebration, and
                    PurePods is the perfect place to mark <strong>wedding anniversaries, silver or golden anniversaries</strong>
                    , or that <strong>milestone together</strong> that changed everything. A quiet toast, the sun setting over
                    the landscape, and the feeling that time has stopped just for you. An intimate setting to look back on
                    what you&apos;ve shared, renew your promises and create new memories you&apos;ll treasure.
                  </p>
                  <Link className="btn" href="#cta">
                    Choose your date
                  </Link>
                </div>
              </div>

              <div className="moment reverse">
                <div className="copy">
                  <h3>The perfect question</h3>
                  <p>
                    PurePods has been the setting for many <strong>unforgettable proposals</strong>. A place to commit to
                    each other, to take that important step surrounded by silence, nature and time together. A sunset that
                    wraps around you, the calm you need, and the certainty that you&apos;ve chosen the right place to ask in
                    your own way — no rush, no audience, just the two of you and the moment. Here, the words find their way…
                    and the memory lasts forever.
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
                  />
                </div>
              </div>

              <div className="moment">
                <div className="media">
                  <ExpRefImage
                    src="/assets/img/experiences/romantic/purepods-romantic-getaway-picnic-wine-experience-new-zealand.jpg"
                    alt="Special celebrations: picnic and wine at a PurePods glass cabin in New Zealand"
                    fill
                    sizes="(max-width:900px) 100vw, 50vw"
                    className="img-contain"
                  />
                </div>
                <div className="copy">
                  <h3>Special celebrations</h3>
                  <p>
                    Some occasions call for something out of the ordinary. <strong>Valentine&apos;s</strong> away from the
                    noise, a <strong>birthday</strong> celebrated at your own pace, or <strong>good news</strong> that deserves a
                    proper toast. At PurePods, these moments are different: long sunsets, a drink as night falls, and the
                    feeling of being in a place made for just you. An intimate setting where every celebration becomes a
                    lasting memory.
                  </p>
                  <Link className="btn" href="#cta">
                    Book your special moment
                  </Link>
                </div>
              </div>

              <div className="moment reverse">
                <div className="copy">
                  <h3>No occasion, just us</h3>
                  <p>
                    It&apos;s not a celebration. <strong>It&apos;s a chance to escape.</strong> Here there&apos;s no schedule
                    and no alarm. Just long pauses, looks that say everything without words, and nights in no hurry to end.
                    Some getaways work best with no plan at all: an intimate space, silence around you, and the freedom to
                    simply be. At PurePods, connection deepens and every moment invites you to stay a little closer.
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
                  />
                </div>
              </div>
            </div>
          </section>

          <RomanticGalleryClient items={romanticGallery} />

          <section className="night-soft" id="night">
            <div className="wrap">
              <div className="section-title">
                <h2>Night, unfiltered</h2>
                <p>Fewer lights. More stars. And the feeling of being far from everything.</p>
              </div>
              <div className="quote-grid">
                <div className="quote">
                  <p>“We did nothing and it was perfect. Just being there, listening to the land and watching the sky.”</p>
                  <b>Getaway for two</b>
                  <span>One night</span>
                </div>
                <div className="quote">
                  <p>“Sunset from bed… and then total darkness. That calm is hard to put into words.”</p>
                  <b>Weekend</b>
                  <span>Two nights</span>
                </div>
                <div className="quote">
                  <p>“Simple dinner, drink in hand, and the feeling that time stretches.”</p>
                  <b>Celebration</b>
                  <span>One night</span>
                </div>
              </div>
            </div>
          </section>

          <section className="faq" id="faq" aria-labelledby="faq-heading">
            <div className="wrap">
              <div className="surface">
                <h2 id="faq-heading">Frequently asked questions</h2>
                <ul>
                  {romanticFaq.map((f) => (
                    <li key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <RomanticBookingClient />
        </main>
      </ExpStandardChrome>
    </div>
  );
}
