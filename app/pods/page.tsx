import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExploreFooter } from "@/components/pods/ExploreFooter";
import { ExplorePageClient } from "@/components/pods/ExplorePageClient";
import { EXPLORE_POD_CARDS } from "@/lib/podsExploreData";
import styles from "./explore.module.css";

const CANONICAL = "https://purepods.com/pods";

export const metadata: Metadata = {
  title: { absolute: "Pods — PurePods" },
  description:
    "Explore PurePods — glass eco-cabins across New Zealand. Each pod has its own rhythm. Choose where you want to spend the night.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Pods — PurePods",
    description:
      "Explore PurePods — glass eco-cabins across New Zealand. Each pod has its own rhythm. Choose where you want to spend the night.",
    url: CANONICAL,
    siteName: "PurePods",
    locale: "en_NZ",
    type: "website",
  },
};

export default function PodsPage() {
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

        <ExplorePageClient pods={EXPLORE_POD_CARDS} />
      </main>

      <ExploreFooter />
    </div>
  );
}
