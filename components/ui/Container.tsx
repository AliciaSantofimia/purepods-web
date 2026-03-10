import { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`${styles.wrap} ${className}`.trim()}>
      {children}
    </Component>
  );
}
