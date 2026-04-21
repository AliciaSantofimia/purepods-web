"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Adds `relax-coastal--in-view` to scroll-reveal targets inside Relax & Coastal only.
 * CSS handles motion (desktop: translate; mobile: fade-only / none).
 */
export function RelaxCoastalMotionRoot({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.querySelector(".relax-coastal-page");
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(".relax-coastal-reveal");
    if (targets.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("relax-coastal--in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("relax-coastal--in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}
