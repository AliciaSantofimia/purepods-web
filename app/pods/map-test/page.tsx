import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExploreFooter } from "@/components/pods/ExploreFooter";
import { ExploreMapTestClient } from "@/components/pods/ExploreMapTestClient";
import { EXPLORE_POD_CARDS } from "@/lib/podsExploreData";
import styles from "../explore.module.css";

export const metadata: Metadata = {
  title: { absolute: "Pods map test — PurePods" },
  robots: { index: false, follow: false },
};

export default function PodsMapTestPage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <div className={`wrap ${styles.navInner}`}>
          <Link className={styles.brand} href="/" aria-label="PurePods — Home">
            <Image
              src="/assets/img/LogoPCverdesinfondo.png"
              alt="PurePods"
              width={603}
              height={414}
              className={styles.brandImg}
              priority
            />
          </Link>
          <nav className={styles.links} aria-label="Main">
            <Link href="/pods/explore-map-experimental-v2">Pods</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/my-journey">My journey</Link>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="https://purepods.com/booking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </nav>
        </div>
      </header>

      <main className={`wrap ${styles.main}`}>
        <section className={styles.hero}>
          <h1>Choose your place</h1>
          <p className={styles.lead}>
            Not every silence sounds the same. Discover where you want to spend
            the night.
          </p>
        </section>

        <ExploreMapTestClient pods={EXPLORE_POD_CARDS} />
      </main>

      <ExploreFooter />
    </div>
  );
}
