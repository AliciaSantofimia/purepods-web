import Link from "next/link";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import { NightFallsChrome } from "@/components/experiences/NightFallsChrome";
import { NightFallsBooking } from "@/components/experiences/NightFallsBooking";
import { NightFallsEffects } from "@/components/experiences/NightFallsEffects";
import { NightFallsMoonTabs } from "@/components/experiences/NightFallsMoonTabs";
import { Footer } from "@/components/layout/Footer";

const faq = [
  {
    q: "What is Night Falls at PurePods?",
    a: "Night Falls is PurePods' dark-sky experience, designed for guests who want to enjoy remote New Zealand landscapes after sunset, with minimal light pollution and exceptional stargazing conditions.",
  },
  {
    q: "Do I need astronomy knowledge to enjoy Night Falls?",
    a: "No. Night Falls is designed to be simple and immersive, whether you already know the night sky or simply want to slow down and experience it in silence.",
  },
  {
    q: "When is the best time to experience Night Falls?",
    a: "The best nights are usually around the new moon, when the sky is darkest and stars, planets and the Milky Way can be seen more clearly.",
  },
];

export function NightFallsView() {
  return (
    <>
      <div className="night-falls-ref">
        <NightFallsEffects />

        <NightFallsChrome
          navItems={[
            { href: "#calendario", label: "Follow the Moon" },
            { href: "#vivir", label: "How to live the night" },
            { href: "#faq", label: "FAQ" },
          ]}
        >
          <header className="hero" id="top">
            <ExpRefImage
              src="/assets/img/experiences/night-falls/night-falls-stargazing.jpg"
              alt="Night Falls starry sky experience"
              fill
              sizes="100vw"
              className="heroImg"
              priority
            />
            <div className="heroStars" aria-hidden="true" />
            <div className="heroInner">
              <h1>Night Falls: dark-sky stargazing by PurePods</h1>
              <p>
                When the light fades, the universe takes center stage. Silence,
                true darkness, and a sky you won&apos;t forget. A stargazing
                experience in New Zealand like no other.
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
            <section className="section" id="essentials">
              <p className="eyebrow">
                {" "}
                <strong>What is Night Falls</strong>{" "}
              </p>
              <p>
                Night Falls is the art of choosing the moment. Arrive when the
                moon stays hidden, when the stars multiply, and time slows down
                enough to look up again. This is PurePods’ dark-sky stargazing
                experience in remote New Zealand landscapes, designed for Milky
                Way viewing on the best nights.
              </p>
              <p>
                No schedules. No performances. Just space, stillness, and the
                chance to see more than you expected.
              </p>
            </section>

            <div className="nightBlock">
              <div className="nightImg">
                <ExpRefImage
                  src="/assets/img/experiences/night-falls/dark-sky-purepod.jpg"
                  alt="Dark sky stargazing above a PurePod glass cabin in New Zealand"
                  fill
                  sizes="(max-width:860px) 100vw, 50vw"
                />
              </div>
              <div className="nightText">
                <h3>The Dark Sky</h3>
                <p>
                  On <strong>new moon</strong> nights — when the moon barely
                  shows — the sky reaches its deepest darkness. Far from any
                  city lights, thousands of stars appear, along with distant
                  nebulae and the dusty detail of the Milky Way.
                </p>
                <p>
                  It’s the <strong>best moment</strong> for anyone who wants to
                  see the galaxy as it truly is: vast, silent, and completely
                  real.
                </p>
                <Link href="#calendario" className="nightBtn">
                  Choose your date
                </Link>
              </div>
            </div>

            <div className="nightBlock reverse">
              <div className="nightImg">
                <ExpRefImage
                  src="/assets/img/experiences/night-falls/purepod-full-moon.jpg"
                  alt="PurePod glass cabin under a full moon in New Zealand"
                  fill
                  sizes="(max-width:860px) 100vw, 50vw"
                />
              </div>
              <div className="nightText">
                <h3>The Lunar Experience</h3>
                <p>
                  When the moon lights the landscape, the sky changes character.
                  Fainter stars fade, but a silver glow appears — outlining
                  hills and mountains with almost unreal clarity.
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
                <div className="nightImg">
                  <ExpRefImage
                    src="/assets/img/experiences/night-falls/southern-aurora-purepod.jpg"
                    alt="Southern Aurora visible above a PurePod glass cabin in New Zealand"
                    fill
                    sizes="(max-width:860px) 100vw, 50vw"
                  />
                </div>
                <div className="nightText">
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
                    href="https://purepods.com/booking/?cart=Checkout"
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

            <NightFallsMoonTabs />

            <section
              className="section nightCalendarCta"
              aria-labelledby="night-calendar-cta-heading"
            >
              <div className="nightCalendarCta__panel">
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
              <div className="sectionHeader">
                <h2> How to live the night</h2>
                <p className="hint">slowly, with intention</p>
              </div>

              <div className="momentsGrid">
                <div className="moment">
                  <h3>1) Switch the world off</h3>
                  <p>
                    Put your phone away, lower the lights and listen. The
                    silence here is not empty — it is part of the experience.
                  </p>
                  <small>
                    Tip: a warm light torch helps preserve the atmosphere.
                  </small>
                </div>
                <div className="moment">
                  <h3>2) Look up</h3>
                  <p>
                    When the sky opens, everything changes. If you arrive during
                    a new moon, you will understand why this is called Night
                    Falls.
                  </p>
                  <small>
                    Tip: give your eyes 10 minutes without light to fully adapt.
                  </small>
                </div>
                <div className="moment">
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
                <div className="moment">
                  <h3>4) Keep it simple</h3>
                  <p>
                    A simple dinner, a glass of wine, a blanket. The night will
                    take care of the rest. The key is not to overplan.
                  </p>
                  <small>
                    Tip: the best moments happen when you don’t force them.
                  </small>
                </div>
              </div>

              <NightFallsBooking />
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
          </main>
        </NightFallsChrome>
      </div>
      <Footer brandLogo />
    </>
  );
}
