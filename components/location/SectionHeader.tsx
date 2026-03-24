import { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  hint?: ReactNode;
  /** Optional id for the h2 (e.g. aria-labelledby targets). */
  titleId?: string;
}

export function SectionHeader({ title, hint, titleId }: SectionHeaderProps) {
  return (
    <div className={styles.wrap}>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
