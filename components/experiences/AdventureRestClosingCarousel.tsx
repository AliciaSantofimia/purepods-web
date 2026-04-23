"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import type { AdventureRestClosingSlide } from "@/lib/experiencesData/adventureWildlife";

const AUTO_MS = 7200;

type Props = {
  slides: AdventureRestClosingSlide[];
};

export function AdventureRestClosingCarousel({ slides }: Props) {
  const uid = useId().replace(/:/g, "");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const n = slides.length;
  const active = slides[index] ?? slides[0];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || n <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, n]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  if (!active || n === 0) return null;

  return (
    <div className="adv-rest-closing__carousel">
      <div
        className="adv-rest-closing__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="adv-rest-closing__slides">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`adv-rest-closing__slide${i === index ? " is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <ExpRefImage
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 720px) 100vw, min(1180px, 92vw)"
                className="adv-rest-closing__img"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <div className="adv-rest-closing__caption" aria-live="polite">
          <strong>{active.label}</strong>
          <span>{active.subline}</span>
        </div>
      </div>

      <div className="adv-rest-closing__controls">
        <div className="adv-rest-closing__counter" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>
        <div
          className="adv-rest-closing__nav"
          role="group"
          aria-label="Carousel navigation"
        >
          <button
            type="button"
            className="adv-rest-closing__btn"
            aria-label="Previous image"
            onClick={goPrev}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="adv-rest-closing__btn"
            aria-label="Next image"
            onClick={goNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div
          className="adv-rest-closing__dots"
          role="tablist"
          aria-label="Choose slide"
        >
          {slides.map((_, i) => (
            <button
              key={`${uid}-d-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1} of ${n}`}
              tabIndex={i === index ? 0 : -1}
              className={`adv-rest-closing__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
