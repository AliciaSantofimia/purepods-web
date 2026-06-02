import Link from "next/link";
import { ExperienceRevealMotionRoot } from "@/components/experiences/ExperienceRevealMotionRoot";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { NightFallsChrome } from "@/components/experiences/NightFallsChrome";
import { NightFallsFaqAccordion } from "@/components/experiences/NightFallsFaqAccordion";
import { NightFallsEffects } from "@/components/experiences/NightFallsEffects";
import { NightFallsMoonTabs } from "@/components/experiences/NightFallsMoonTabs";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { EXPERIENCE_PAGES } from "@/lib/experiencesData";

const faq = [
  {
    q: "What is Night Falls by PurePods?",
    a: "Night Falls is the PurePods stargazing experience: a way to plan your stay around New Zealand’s night sky, from deep new-moon darkness and Milky Way viewing to full-moon glow, meteor showers and quiet nights in a private off-grid glass cabin.",
  },
  {
    q: "When is the best time for stargazing at PurePods?",
    a: "The darkest skies are usually around the new moon, when moonlight is low and stars, the Milky Way and faint night-sky detail are easier to see. Night Falls highlights upcoming dark-sky windows, full moons and meteor showers so guests can choose the type of night they want to experience.",
  },
  {
    q: "Is a new moon better than a full moon for stargazing?",
    a: "A new moon is usually better for seeing the darkest skies, the Milky Way and more stars. A full moon creates a different kind of experience, with silver light across the landscape, strong moonlit views and a softer, more atmospheric night.",
  },
  {
    q: "Can you see meteor showers from a PurePod?",
    a: "Meteor showers can be visible from PurePods when conditions are right, especially away from city lights and during clear, dark nights. Night Falls highlights key meteor-shower windows, but visibility always depends on weather, cloud cover and the timing of the event.",
  },
  {
    q: "Can you see the Milky Way from a PurePod?",
    a: "In dark-sky conditions, the Milky Way may be visible from many PurePods, especially around the new moon and away from bright artificial light. Visibility depends on the season, cloud cover, moonlight and local conditions on the night of your stay.",
  },
  {
    q: "What happens if the weather is cloudy?",
    a: "Cloud cover can affect any stargazing experience. Night Falls helps guests choose promising moon phases and meteor-shower windows, but the sky is still part of nature. Even on cloudier nights, the experience remains a quiet off-grid escape in a private glass cabin.",
  },
  {
    q: "What should I bring for a Night Falls stay?",
    a: "Bring warm layers, comfortable footwear, any favourite drinks and a sense of patience for the night sky. A torch or headlamp can be useful, but keep lighting low where possible so your eyes can adjust to the dark.",
  },
  {
    q: "Is Night Falls suitable for a romantic getaway?",
    a: "Yes. Night Falls suits couples looking for a quiet, romantic night escape in nature, with stargazing, moonlight, silence and the privacy of a glass cabin designed for two.",
  },
  {
    q: "Can you see the Aurora Australis from PurePods?",
    a: "The Aurora Australis, or Southern Lights, is never guaranteed. It may be possible in some parts of New Zealand when solar and weather conditions align, but Night Falls should be planned around stargazing, dark skies, moon phases and meteor showers rather than a guaranteed aurora sighting.",
  },
  {
    q: "Do PurePods have glass roofs or glass walls for stargazing?",
    a: "PurePods are designed as glass cabins, with large glass walls and immersive views into the surrounding landscape and sky. The exact outlook varies by pod, but the experience is designed to bring nature, darkness and the night sky close.",
  },
];

export function NightFallsView() {
  return (
    <>
      <div className="night-falls-ref">
        <NightFallsEffects />

        <ExperienceRevealMotionRoot
          rootSelector=".night-falls-ref"
          revealSelector=".night-reveal"
          inViewClass="night--in-view"
        >
          <NightFallsChrome
            navItems={[
              { href: "#calendario", label: "Follow the Moon" },
              { href: "#vivir", label: "How to live the night" },
              { href: "#faq", label: "FAQ" },
            ]}
          >
            <header className="hero" id="top">
              <ExpRefImage
                src="/assets/img/experiences/night-falls/purepods-night-falls-stargazing-new-zealand-night-sky.jpg"
                alt="A star-filled night sky above a remote PurePod in New Zealand"
                fill
                sizes="100vw"
                className="heroImg"
                priority
              />
              <div className="heroStars" aria-hidden="true" />
              <div className="heroInner">
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Experiences", href: "/experiences" },
                    { label: EXPERIENCE_PAGES.stargazing.breadcrumbLabel },
                  ]}
                />
                <h1>Night Falls: dark-sky stargazing by PurePods</h1>
                <p>
                  As the lights of the world fall away, your private off-grid
                  glass cabin becomes a front-row seat to New Zealand’s night
                  sky — from quiet new-moon darkness to full-moon glow, the
                  Milky Way and meteor-shower nights.
                </p>
                <div className="heroCtas">
                  <a className="btnGhost" href="#calendario">
                    View the lunar calendar
                  </a>
                  <a className="btnGhost" href="#vivir">
                    How to live Night Falls
                  </a>
                </div>
              </div>
            </header>

            <main className="wrap padBottom">
              <section
                className="section night-reveal night-reveal--text"
                id="essentials"
              >
                <p className="eyebrow">
                  {" "}
                  <strong>What is Night Falls</strong>{" "}
                </p>
                <p>
                  Night Falls is the art of choosing the moment. Arrive when the
                  moon stays hidden, when the stars multiply, and time slows
                  down enough to look up again. This is PurePods’ dark-sky
                  stargazing experience in remote New Zealand landscapes,
                  designed for Milky Way viewing on the best nights.
                </p>
                <p>
                  No schedules. No performances. Just space, stillness, and the
                  chance to see more than you expected.
                </p>
              </section>

              <div className="nightBlock">
                <div className="nightImg night-reveal night-reveal--image">
                  <ExpRefImage
                    src="/assets/img/experiences/night-falls/purepods-dark-sky-stargazing-glass-cabin-new-zealand.jpg"
                    alt="Dark night sky above a PurePod glass cabin in remote New Zealand"
                    fill
                    sizes="(max-width:860px) 100vw, 50vw"
                  />
                </div>
                <div className="nightText night-reveal night-reveal--text">
                  <h3>The Dark Sky</h3>
                  <p>
                    On <strong>new moon</strong> nights — when the moon barely
                    shows — the sky reaches its deepest darkness. Far from any
                    city lights, thousands of stars appear, along with distant
                    nebulae and the dusty detail of the Milky Way.
                  </p>
                  <p>
                    It’s the <strong>best moment</strong> for anyone who wants
                    to see the galaxy as it truly is: vast, silent, and
                    completely real.
                  </p>
                  <Link href="#calendario" className="nightBtn">
                    Choose your date
                  </Link>
                </div>
              </div>

              <div className="nightBlock reverse">
                <div className="nightImg night-reveal night-reveal--image">
                  <ExpRefImage
                    src="/assets/img/experiences/night-falls/purepods-glass-cabin-full-moon-new-zealand-night-sky.jpg"
                    alt="A PurePod glass cabin under a full moon in New Zealand"
                    fill
                    sizes="(max-width:860px) 100vw, 50vw"
                  />
                </div>
                <div className="nightText night-reveal night-reveal--text">
                  <h3>The Lunar Experience</h3>
                  <p>
                    When the moon lights the landscape, the sky changes
                    character. Fainter stars fade, but a silver glow appears —
                    outlining hills and mountains with almost unreal clarity.
                  </p>
                  <p>
                    It’s a different kind of night: calmer, more contemplative,
                    perfect for looking at lunar detail — or simply letting the
                    light wrap around everything.
                  </p>
                  <Link href="#calendario" className="nightBtn">
                    Pick the moment
                  </Link>
                </div>
              </div>

              <section className="section nightSection" id="night-sections">
                <div className="nightBlock">
                  <div className="nightImg night-reveal night-reveal--image">
                    <ExpRefImage
                      src="/assets/img/experiences/night-falls/aurora-australis-purepod-glass-cabin-new-zealand-night-sky.jpg"
                      alt="Aurora Australis glowing above a PurePod glass cabin in New Zealand"
                      fill
                      sizes="(max-width:860px) 100vw, 50vw"
                    />
                  </div>
                  <div className="nightText night-reveal night-reveal--text">
                    <h3>Special Phenomena</h3>
                    <p>
                      Some nights offer something extra. Around March and
                      September, there’s a chance — never guaranteed — of seeing
                      the <strong>Southern Aurora</strong> glow on the southern
                      horizon.
                    </p>
                    <p>
                      Sometimes it’s only minutes. Sometimes it doesn’t show up.
                      And yet the sky still delivers: bright planets, naked-eye
                      stars, and extraordinary darkness.
                    </p>
                    <a
                      href="https://purepods.com/booking/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nightBtn primary"
                    >
                      Book a special night
                    </a>
                    <div className="nightNote">
                      In Māori tradition, the stars were guidance, time, and
                      story. Looking up has always been a way of listening.
                    </div>
                  </div>
                </div>
              </section>

              <div className="night-reveal night-reveal--section">
                <NightFallsMoonTabs />
              </div>

              <section
                className="section nightCalendarCta"
                aria-labelledby="night-calendar-cta-heading"
              >
                <div className="nightCalendarCta__panel night-reveal night-reveal--section">
                  <p className="eyebrow">Night Falls</p>
                  <h2 id="night-calendar-cta-heading">
                    Choose your night under the stars
                  </h2>
                  <p>
                    Check availability, then plan your stay around dark skies,
                    moon phases and quiet nights in nature.
                  </p>
                  <a
                    className="nightCalendarCta__button"
                    href="https://purepods.com/booking/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check availability
                  </a>
                </div>
              </section>

              <section className="section" id="vivir">
                <div className="sectionHeader night-reveal night-reveal--text">
                  <h2> How to live the night</h2>
                  <p className="hint">slowly, with intention</p>
                </div>

                <div className="momentsGrid">
                  <div className="moment night-reveal night-reveal--card night-reveal--delay-1">
                    <h3>1) Switch the world off</h3>
                    <p>
                      Put your phone away, lower the lights and listen. The
                      silence here is not empty — it is part of the experience.
                    </p>
                    <small>
                      Tip: a warm light torch helps preserve the atmosphere.
                    </small>
                  </div>
                  <div className="moment night-reveal night-reveal--card night-reveal--delay-2">
                    <h3>2) Look up</h3>
                    <p>
                      When the sky opens, everything changes. If you arrive
                      during a new moon, you will understand why this is called
                      Night Falls.
                    </p>
                    <small>
                      Tip: give your eyes 10 minutes without light to fully
                      adapt.
                    </small>
                  </div>
                  <div className="moment night-reveal night-reveal--card night-reveal--delay-3">
                    <h3>3) Choose the moment</h3>
                    <p>
                      It’s not just about booking a night — it’s about choosing
                      the type of sky you want. That’s why the lunar calendar
                      exists.
                    </p>
                    <small>
                      Tip: if you want to see the Milky Way clearly, prioritise
                      dark sky nights.
                    </small>
                  </div>
                  <div className="moment night-reveal night-reveal--card night-reveal--delay-4">
                    <h3>4) Keep it simple</h3>
                    <p>
                      A simple dinner, a glass of wine, a blanket. The night
                      will take care of the rest. The key is not to overplan.
                    </p>
                    <small>
                      Tip: the best moments happen when you don’t force them.
                    </small>
                  </div>
                </div>
              </section>

              <section className="faq" id="faq" aria-labelledby="faq-heading">
                <div className="wrap">
                  <div className="surface night-reveal night-reveal--section">
                    <h2 id="faq-heading">Frequently asked questions</h2>
                    <NightFallsFaqAccordion items={faq} />
                  </div>
                </div>
              </section>

              <section
                className="section nightVideoClosing"
                aria-labelledby="night-video-closing-heading"
              >
                <div className="nightVideoClosing__intro">
                  <p className="eyebrow">Night Falls</p>
                  <h2 id="night-video-closing-heading">
                    When the night settles
                  </h2>
                  <p>
                    A quiet glimpse of what Night Falls feels like — glass,
                    darkness, stars and stillness.
                  </p>
                </div>
                <div className="nightVideoClosing__frame">
                  <video autoPlay muted loop playsInline preload="none">
                    <source
                      src="/video/Pure%20Stargazing.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </section>
            </main>
          </NightFallsChrome>
        </ExperienceRevealMotionRoot>
      </div>
      <Footer brandLogo simplified />
    </>
  );
}
