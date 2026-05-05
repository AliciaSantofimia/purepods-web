import type { Metadata } from "next";
import Image from "next/image";
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
        <section className={styles.hero} aria-labelledby="story-heading">
          <Image
            src="/assets/img/experiences/night-falls/night-falls-stargazing.jpg"
            alt="PurePod glass cabin beneath a clear New Zealand night sky"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroVeil} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1 id="story-heading">The PurePods Story</h1>
            <p>
              A unique experience and immersion into Pure New Zealand.
            </p>
            <Link className={styles.heroButton} href="/pods">
              Explore our PurePods
            </Link>
          </div>
        </section>

        <section className={`${styles.textBlock} ${styles.reveal}`}>
          <div className={styles.narrow}>
            <p>
              The PurePods concept comes from a deep love for nature combined
              with a desire to share that love in a way that is memorable for you
              – an intensely personal deep immersion into Pure New Zealand.
            </p>
            <p>
              All over this spectacular country are private, secret pockets of
              amazing beauty filled with unique plants, birds and animals.
            </p>
            <p>
              To stay in a PurePod is to totally engage all five senses
              experiencing this beauty.
            </p>
          </div>
        </section>

        <section className={`${styles.split} ${styles.reveal}`}>
          <figure className={styles.imageFrame}>
            <Image
              src="/assets/img/rest-stay-carousel/greystone-purepod-glass-doors-open-hills-view-north-canterbury-new-zealand.jpg"
              alt="PurePod glass doors open to rolling New Zealand hills"
              fill
              className={styles.sectionImage}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </figure>
          <div className={styles.storyCopy}>
            <p>
              Every day nature puts on a show and you are invited to participate
              in a way that even when the doors are shut you are not shut out.
            </p>
            <p>
              Your PurePod is a glass eco-cabin — that&apos;s right, even the roof.
            </p>
            <p>
              At night you sleep beneath the Southern Cross and millions of stars.
              By day, dramatic landscapes surround you — your own private slice of
              New Zealand at every side.
            </p>
          </div>
        </section>

        <section className={`${styles.highlight} ${styles.reveal}`}>
          <div className={styles.narrow}>
            <h2>Relax, let nature refuel your soul.</h2>
            <p>
              PurePods are designed to ensure you experience nature vividly,
              engaging all your senses while remaining sheltered in luxury.
            </p>
            <p>The effect is incredible — the stress of life disappears.</p>
          </div>
        </section>

        <section className={`${styles.imageStatement} ${styles.reveal}`}>
          <Image
            src="/assets/img/kahutara/kahutara-purepod-glass-cabin-mountain-landscape-kaikoura.jpg"
            alt="A tiny PurePod glass cabin surrounded by mountains and open nature"
            fill
            className={styles.statementImage}
            sizes="100vw"
          />
          <div className={styles.statementOverlay} aria-hidden="true" />
          <div className={styles.statementCopy}>
            <p>
              The privacy, the isolation of a tiny glass hut completely
              surrounded by nature takes you to another world.
            </p>
          </div>
        </section>

        <section className={`${styles.experience} ${styles.reveal}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>The experience</p>
            <h2>What is a PurePods experience like?</h2>
          </div>
          <div className={styles.experienceGrid}>
            <p>
              On a hot day, slide open all three glass walls and let nature in.
              Raise the ceiling blinds and enjoy complete privacy.
            </p>
            <p>
              On colder days, stay warm and cosy while watching rain or snow fall
              around you — hearing every sound, feeling every moment.
            </p>
            <p>
              Explore the surrounding landscape or simply stay still.
            </p>
            <p>
              The PurePod experience ensures you are always safe, warm and dry —
              whether you&apos;re watching rain fall or gazing at the Milky Way.
            </p>
          </div>
        </section>

        <section className={`${styles.ctaSection} ${styles.reveal}`}>
          <Image
            src="/assets/img/kokomea/kokomea-purepod-glass-cabin-night-stars-kapiti-coast.jpg"
            alt="PurePod glass cabin glowing beneath a starry New Zealand sky"
            fill
            className={styles.ctaImage}
            sizes="100vw"
          />
          <div className={styles.ctaOverlay} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <h2>Experience it for yourself</h2>
            <Link className={styles.ctaButton} href="/pods">
              Explore our PurePods
            </Link>
          </div>
        </section>

        <section className={`${styles.sustainability} ${styles.reveal}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Sustainability</p>
            <h2>Keeping Pure New Zealand pure</h2>
          </div>
          <div className={styles.sustainabilityCopy}>
            <p>
              Building an environmentally friendly space goes far beyond glass
              walls.
            </p>
            <p>
              PurePods use sustainable energy, local water systems, and return
              water to the land as clean as it came. Rainwater nourishes native
              plants, and waste is treated naturally using eco-friendly processes.
            </p>
            <p>
              Conservation is at the heart of what we do. By partnering with
              landowners committed to sustainability, each PurePod helps expand
              conservation efforts and protect sensitive landscapes.
            </p>
            <p>
              We&apos;re passionate about sharing the best of Pure New Zealand —
              and keeping it pure.
            </p>
          </div>
        </section>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
