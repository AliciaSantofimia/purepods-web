import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import type { ChooseMapRegion } from "@/lib/chooseMapExperimentalData";
import { PodsLuxuryTestClient } from "./PodsLuxuryTestClient";
import luxury from "./podsLuxuryTest.module.css";

type Props = { initialRegion: ChooseMapRegion };

/** Shell editorial de Pods — usado en `/pods` (producción) y `/pods/luxury-test` (preview). */
export function PodsLuxuryTestShell({ initialRegion }: Props) {
  return (
    <div className={luxury.page}>
      <header className="nav nav--solid" role="banner">
        <div className="nav__bar">
          <Link className="nav-brand" href="/" aria-label="PurePods — Home">
            <Image
              src="/assets/img/LogoPCverdesinfondo.png"
              alt="PurePods"
              width={603}
              height={414}
              sizes="(max-width: 720px) min(200px, 52vw), min(200px, 42vw)"
              priority
            />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <Link href="/experiences">Experiences</Link>
          </nav>
          <a
            className="nav__book"
            href="https://purepods.com/booking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
        </div>
      </header>

      <main className={`wrap ${luxury.main}`}>
        <section
          id="pods-luxury-choose-place"
          className={luxury.hero}
          aria-labelledby="pods-luxury-hero-heading"
        >
          <span className={luxury.kicker}>Private stays</span>
          <h1 id="pods-luxury-hero-heading">Choose your place</h1>
          <p className={luxury.lead}>
            Not every silence sounds the same. A curated selection of glass eco-cabins
            across New Zealand — each with its own rhythm, none louder than another.
          </p>
        </section>

        <PodsLuxuryTestClient initialRegion={initialRegion} />

        <div className={luxury.pageClose} aria-label="Page close">
          <p className={luxury.pageCloseLine} aria-hidden="true" />
          <p className={luxury.pageCloseText}>
            Every PurePod holds its own silence — find the landscape that matches yours.
          </p>
          <a
            className={luxury.pageCloseCta}
            href="https://purepods.com/booking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Begin your stay →
          </a>
        </div>
      </main>

      <div className={luxury.footerZone}>
        <Footer brandLogo simplified />
      </div>
    </div>
  );
}
