import Link from "next/link";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export const metadata = {
  title: "Experiences",
  description: "Experiences that define PurePods stays.",
};

export default function ExperiencesPage() {
  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Experiences</h1>
        <p className={styles.intro}>
          Experience pages will be built here, guided by reference-html.
        </p>
        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      </Container>
    </div>
  );
}
