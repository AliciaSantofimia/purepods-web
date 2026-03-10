import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>PurePods</h1>
        <p className={styles.subtitle}>
          Unique accommodation experiences in the natural landscapes of New
          Zealand.
        </p>
        <div className={styles.actions}>
          <Link href="/pods" className={styles.primary}>
            Explore Pods
          </Link>
          <Link href="/experiences" className={styles.secondary}>
            Experiences
          </Link>
        </div>
      </div>
    </div>
  );
}
