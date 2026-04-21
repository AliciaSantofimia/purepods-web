"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ExpRefImage } from "./ExpRefImage";

export function RomanticGalleryClient({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const lightboxTitleId = useId();

  const openGallery = useCallback(() => {
    setOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i <= 0 ? items.length - 1 : i - 1;
    });
  }, [items.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i >= items.length - 1 ? 0 : i + 1;
    });
  }, [items.length]);

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
      const link = target?.closest?.('a[href="#gallery"]');
      if (!link || !root.contains(link)) return;
      requestAnimationFrame(openGallery);
      window.setTimeout(openGallery, 450);
    };

    document.addEventListener("click", onNavGalleryClick, true);
    return () => document.removeEventListener("click", onNavGalleryClick, true);
  }, [openGallery]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    queueMicrotask(() => closeBtnRef.current?.focus());

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  const active = lightboxIndex !== null ? items[lightboxIndex] : null;

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
          {items.map((it, i) => (
            <figure className="gitem" key={it.src}>
              <button
                type="button"
                className="romantic-gallery__thumb"
                aria-label={`Open larger view: ${it.alt}`}
                onClick={() => setLightboxIndex(i)}
              >
                <ExpRefImage src={it.src} alt="" fill sizes="(max-width:560px) 100vw, 33vw" />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="romantic-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxTitleId}
        >
          <button
            type="button"
            className="romantic-lightbox__backdrop"
            aria-label="Close gallery view"
            onClick={closeLightbox}
          />
          <div
            className="romantic-lightbox__shell"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchStartX.current;
              touchStartX.current = null;
              if (start === null) return;
              const end = e.changedTouches[0]?.clientX;
              if (end === undefined) return;
              const d = end - start;
              if (d < -48) goNext();
              else if (d > 48) goPrev();
            }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="romantic-lightbox__close"
              aria-label="Close"
              onClick={closeLightbox}
            >
              ×
            </button>
            <button type="button" className="romantic-lightbox__nav romantic-lightbox__nav--prev" aria-label="Previous image" onClick={goPrev}>
              ‹
            </button>
            <button type="button" className="romantic-lightbox__nav romantic-lightbox__nav--next" aria-label="Next image" onClick={goNext}>
              ›
            </button>
            <div className="romantic-lightbox__stage">
              <ExpRefImage
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                objectFit="contain"
                priority
              />
            </div>
            <p id={lightboxTitleId} className="romantic-lightbox__caption">
              {active.alt}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
