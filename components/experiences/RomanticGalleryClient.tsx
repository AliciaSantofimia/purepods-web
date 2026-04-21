"use client";

import { useCallback, useEffect, useState } from "react";
import { ExpRefImage } from "./ExpRefImage";

export function RomanticGalleryClient({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);

  const openGallery = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const fromHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#gallery") {
        openGallery();
      }
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [openGallery]);

  useEffect(() => {
    const root = document.querySelector(".experience-ref.romantic-ref");
    if (!root) return;

    const onNavGalleryClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a[href=\"#gallery\"]");
      if (!link || !root.contains(link)) return;
      requestAnimationFrame(openGallery);
      window.setTimeout(openGallery, 450);
    };

    document.addEventListener("click", onNavGalleryClick, true);
    return () => document.removeEventListener("click", onNavGalleryClick, true);
  }, [openGallery]);

  return (
    <div>
      <div className="wrap">
        <div
          className="section-title gallery-trigger"
          id="toggleGallery"
          role="button"
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
        >
          <p className="eyebrow center">Imagine yourself here</p>
        </div>

        <div className={`gallery-grid2 gallery-hidden${open ? " is-open" : ""}`} id="galleryHidden">
          {items.map((it) => (
            <figure className="gitem" key={it.src}>
              <ExpRefImage src={it.src} alt={it.alt} fill sizes="(max-width:560px) 100vw, 33vw" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
