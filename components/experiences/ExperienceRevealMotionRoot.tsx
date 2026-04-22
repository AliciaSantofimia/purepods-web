"use client";

import { useEffect, type ReactNode } from "react";

export type ExperienceRevealMotionRootProps = {
  children: ReactNode;
  /** Scoped layout root, e.g. `.experience-ref.romantic-ref` */
  rootSelector: string;
  /** Elements to reveal, e.g. `.romantic-reveal` */
  revealSelector: string;
  /** Class applied on first intersection, e.g. `romantic--in-view` */
  inViewClass: string;
};

/**
 * IntersectionObserver scroll-reveal: adds `inViewClass` once, then unobserves.
 * If `prefers-reduced-motion: reduce`, marks all targets visible immediately (no observe).
 */
export function ExperienceRevealMotionRoot({
  children,
  rootSelector,
  revealSelector,
  inViewClass,
}: ExperienceRevealMotionRootProps) {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(revealSelector);
    if (targets.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add(inViewClass));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add(inViewClass);
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootSelector, revealSelector, inViewClass]);

  return <>{children}</>;
}
