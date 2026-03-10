import Link from "next/link";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export const metadata = {
  title: "Pods",
  description: "Explore PurePods locations across New Zealand.",
};

export default function PodsPage() {
  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Pods</h1>
        <p className={styles.intro}>
          Each pod is a unique retreat. Pod listing and detail pages will be
          built here.
        </p>
        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      </Container>
    </div>
  );
}
