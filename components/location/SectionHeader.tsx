import { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  hint?: ReactNode;
}

export function SectionHeader({ title, hint }: SectionHeaderProps) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
