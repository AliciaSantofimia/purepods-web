import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.wrap}>
        <div className={styles.brand}>
          <Link href="/">PurePods</Link>
        </div>
        <nav className={styles.nav} aria-label="Footer">
          <Link href="/pods">Pods</Link>
          <Link href="/experiences">Experiences</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book
          </a>
        </nav>
        <p className={styles.copy}>
          Unique accommodation experiences in the natural landscapes of New
          Zealand.
        </p>
      </div>
    </footer>
  );
}
