import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "The PurePods Story | PurePods",
  },
  description:
    "The PurePods concept comes from a deep love for nature and a desire to share an intensely personal immersion into Pure New Zealand.",
  alternates: { canonical: "/our-story/" },
};

export default function OurStoryPage() {
  return (
    <>
      <FaqHeader />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1>The PurePods Story</h1>
            <p className={styles.intro}>
              The PurePods concept comes from a deep love for nature combined
              with a desire to share that love in a way that is memorable for
              you.
            </p>
          </header>

          <div className={styles.sections}>
            <section className={styles.section}>
              <h2>A unique experience and immersion into pure New Zealand</h2>
              <div className={styles.copy}>
                <p>
                  Every day nature puts on a show and you are invited to
                  participate in a way that even when the doors are shut you are
                  not shut out.
                </p>
                <p>
                  Your PurePod is a glass eco-cabin, that&apos;s right even the
                  roof! At night you sleep with the Southern Cross and millions
                  of other stars above.
                </p>
                <p>
                  By day you are surrounded by dramatic natural landscapes with
                  your own secret slice of pure New Zealand literally at the back
                  door (and the front door, and the side door!).
                </p>
                <p>Relax, let nature refuel your soul.</p>
                <p>
                  PurePods are designed to ensure you experience nature&apos;s show
                  vividly, utilising all your senses whilst remaining sheltered
                  in luxury. The effect is incredible. The stress of life
                  disappears.
                </p>
                <p>
                  The privacy, the isolation of a tiny glass hut completely
                  surrounded by nature takes you to another world.
                </p>
              </div>
            </section>

          <section className={styles.section}>
            <h2>What is a PurePods experience like?</h2>
            <div className={styles.softList}>
              <p>
                On a hot day you can pull back the sliding doors on all three
                glassed sides, turn up the shade on the ceiling blinds and
                indulge the privacy.
              </p>
              <p>
                If it&apos;s cold you are warm and cosy with our heating system,
                but you can see the rain or snow falling all around you,
                experience the sounds and marvel at nature.
              </p>
              <p>
                Venture into the neighbouring landscape if you wish or stay
                totally still.
              </p>
              <p>
                The unique PurePod experience ensures you are safe, warm and dry.
              </p>
              <p>
                Watching the rain fall onto the roof or gazing in wonder at the
                Milky Way, the experience is yours alone.
              </p>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <p>Explore our PurePods</p>
            <Link className={styles.ctaButton} href="/pods">
              Explore our PurePods
            </Link>
          </section>

          <section className={styles.section}>
            <h2>Environmentally friendly</h2>
            <div className={styles.copy}>
              <p>
                Building an environmentally friendly building takes more than
                simply using glass for roofing, flooring and walls.
              </p>
            </div>
            <div className={styles.pointGrid}>
              <article className={styles.point}>
                <h3>Sustainable energy</h3>
                <ul>
                  <li>Using sustainable energy</li>
                  <li>Minimising non-renewable energy sources</li>
                </ul>
              </article>
              <article className={styles.point}>
                <h3>Water usage</h3>
                <ul>
                  <li>Using local water</li>
                  <li>Returning water to the local environment clean</li>
                </ul>
                <p>
                  Rainwater that falls on the roof is returned to the
                  surrounding area to water the native plants.
                </p>
                <p>Waste is cleaned naturally, and eco-friendly cleaners are used.</p>
              </article>
              <article className={styles.point}>
                <h3>Conservation</h3>
                <p>
                  Conservation and reclamation of the natural environment is
                  close to the heart of PurePods.
                </p>
                <p>
                  We partner with landowners who are committed to sustainability.
                  The commercial returns from a PurePod enable landowners to
                  expand their conservation activities through:
                </p>
                <ul>
                  <li>Extension of nature covenants</li>
                  <li>Reduction of stock grazing in sensitive areas</li>
                </ul>
              </article>
            </div>
            <div className={styles.copy}>
              <p>
                We&apos;re passionate about sharing the best possible experience
                of Pure New Zealand and we&apos;re passionate about keeping New
                Zealand pure.
              </p>
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
