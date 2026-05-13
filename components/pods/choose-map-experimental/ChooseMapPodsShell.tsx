import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import styles from "@/app/pods/explore.module.css";
import type { ChooseMapRegion } from "@/lib/chooseMapExperimentalData";
import { ChooseMapExperimentalClient } from "./ChooseMapExperimentalClient";

type Props = { initialRegion: ChooseMapRegion };

/** Shell completo de la página Pods con mapa editorial e islas (tabs). */
export function ChooseMapPodsShell({ initialRegion }: Props) {
  return (
    <div className={`${styles.page} ${styles.pagePodsChoose} ${xstyles.pageRoot}`}>
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
            <Link href="/experiences">Experiences</Link>
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
        <section id="pods-choose-place" className={styles.hero}>
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
