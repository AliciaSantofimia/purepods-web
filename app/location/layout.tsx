import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import styles from "./locationLayout.module.css";

export default function LocationLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.locationShell}>
      <Header />
      {children}
    </div>
  );
}
