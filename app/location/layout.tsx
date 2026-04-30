import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "./locationLayout.module.css";

export default function LocationLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.locationShell}>
      <Header />
      {children}
      <Footer brandLogo simplified />
    </div>
  );
}