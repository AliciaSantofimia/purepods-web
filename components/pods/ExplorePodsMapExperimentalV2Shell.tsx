import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ExplorePageWithMapClientExperimentalV2 } from "@/components/pods/ExplorePageWithMapClientExperimentalV2";
import { EXPLORE_POD_CARDS } from "@/lib/podsExploreData";
import styles from "@/app/pods/explore.module.css";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";

export function ExplorePodsMapExperimentalV2Shell() {
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

        <ExplorePageWithMapClientExperimentalV2 pods={EXPLORE_POD_CARDS} />
      </main>

      <Footer brandLogo simplified />
    </div>
  );
}
