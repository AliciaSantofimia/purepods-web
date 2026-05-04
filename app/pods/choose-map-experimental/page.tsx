import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "@/components/layout/Footer";
import xstyles from "../../../components/pods/ExplorePageWithMapExperimental.module.css";
import { ChooseMapExperimentalClient } from "../../../components/pods/choose-map-experimental/ChooseMapExperimentalClient";
import { parseChooseMapRegionParam } from "@/lib/chooseMapExperimentalData";
import styles from "../explore.module.css";

export const metadata: Metadata = {
  title: { absolute: "Pods (choose map experimental) — PurePods" },
  description:
    "Experimental Choose your place layout with editorial Leaflet map — not indexed.",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ChooseMapExperimentalPage({ searchParams }: PageProps) {
  const raw = searchParams.region;
  const initialRegion = parseChooseMapRegionParam(
    Array.isArray(raw) ? raw[0] : raw,
  );
  return (
    <div className={`${styles.page} ${xstyles.pageRoot}`}>
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
            <Link href="/pods">Pods</Link>
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
            Not every silence sounds the same. Discover where you want to spend the night.
          </p>
        </section>

        <ChooseMapExperimentalClient initialRegion={initialRegion} />
      </main>

      <Footer brandLogo simplified />
    </div>
  );
}
