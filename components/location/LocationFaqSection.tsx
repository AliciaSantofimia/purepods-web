import { SectionHeader } from "./SectionHeader";
import styles from "./LocationFaqSection.module.css";

export interface LocationFaqItem {
  question: string;
  answer: string;
}

interface LocationFaqSectionProps {
  id?: string;
  title?: string;
  hint?: string;
  items: LocationFaqItem[];
}

export function LocationFaqSection({
  id = "faqs",
  title = "Frequently asked questions",
  hint,
  items,
}: LocationFaqSectionProps) {
  return (
    <section
      className={styles.section}
      id={id}
      aria-labelledby="faq-heading"
    >
      <SectionHeader title={title} hint={hint} titleId="faq-heading" />
      <div className={styles.card}>
        <div className={styles.stack}>
          {items.map((item, i) => (
            <details key={i} className={styles.disclosure}>
              <summary className={styles.summary}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
