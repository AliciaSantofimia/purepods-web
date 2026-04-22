import Link from "next/link";
import styles from "@/app/pods/explore.module.css";

export function ExploreFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={`wrap ${styles.footerNav}`} aria-label="Footer">
        <Link href="/" className={styles.footerLink}>
          PurePods
        </Link>
        <span className={styles.footerSep} aria-hidden="true">
          ·
        </span>
        <Link href="/" className={styles.footerLink}>
          Home
        </Link>
        <span className={styles.footerSep} aria-hidden="true">
          ·
        </span>
        <Link href="/pods" className={styles.footerLink}>
          Pods
        </Link>
        <span className={styles.footerSep} aria-hidden="true">
          ·
        </span>
        <Link href="/experiences" className={styles.footerLink}>
          Experiences
        </Link>
        <span className={styles.footerSep} aria-hidden="true">
          ·
        </span>
        <Link href="/my-journey" className={styles.footerLink}>
          My journey
        </Link>
      </nav>
    </footer>
  );
}
