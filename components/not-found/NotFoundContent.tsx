import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./NotFoundContent.module.css";

export function NotFoundContent() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>404</p>
        <h1>This path has gone off-grid</h1>
        <p className={styles.lead}>
          The page you&apos;re looking for isn&apos;t available, but your escape
          is still within reach.
        </p>
        <div className={styles.actions}>
          <Link href="/pods" className={styles.btnPrimary}>
            Explore Pods
          </Link>
          <Link href="/experiences" className={styles.btnSecondary}>
            View Experiences
          </Link>
          <a
            className={styles.btnBook}
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your stay
          </a>
        </div>
        <Link href="/" className={styles.homeLink}>
          ← Return to Home
        </Link>
      </div>
    </main>
  );
}
