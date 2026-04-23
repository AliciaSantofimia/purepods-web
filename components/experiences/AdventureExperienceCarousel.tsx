"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useId, useState } from "react";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const AUTO_MS = 7000;

type Props = {
  slides: AdventureExperienceSlide[];
};

export function AdventureExperienceCarousel({ slides }: Props) {
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

  const metaLine = `${active.distance} · ${active.timing}`;

  return (
    <div
      className="aw-xp-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Curated wildlife and adventure experiences"
    >
      <div
        className="aw-xp-carousel__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="aw-xp-carousel__slides">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={`aw-xp-carousel__slide${i === index ? " is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <ExpRefImage
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 720px) 100vw, min(1180px, 92vw)"
                className="aw-xp-carousel__img"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <div className="aw-xp-carousel__overlay" aria-hidden="true" />
        <div className="aw-xp-carousel__caption" aria-live="polite">
          <h3 className="aw-xp-carousel__title">{active.title}</h3>
          <p className="aw-xp-carousel__desc">{active.description}</p>
          <p className="aw-xp-carousel__meta">{metaLine}</p>
          <p className="aw-xp-carousel__nearby">
            <span className="aw-xp-carousel__nearbyLabel">Stay nearby:</span>{" "}
            {active.pods.map((pod, i) => (
              <Fragment key={pod.href}>
                {i > 0 ? (
                  <span className="aw-xp-carousel__nearbySep" aria-hidden="true">
                    {" "}
                    ·{" "}
                  </span>
                ) : null}
                <Link href={pod.href} className="aw-xp-carousel__podLink">
                  {pod.label}
                </Link>
              </Fragment>
            ))}
          </p>
          <a
            className="aw-xp-carousel__cta"
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View experience
          </a>
        </div>
      </div>

      <div className="aw-xp-carousel__controls">
        <div className="aw-xp-carousel__counter" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>
        <div
          className="aw-xp-carousel__nav"
          role="group"
          aria-label="Carousel navigation"
        >
          <button
            type="button"
            className="aw-xp-carousel__btn"
            aria-label="Previous experience"
            onClick={goPrev}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="aw-xp-carousel__btn"
            aria-label="Next experience"
            onClick={goNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div
          className="aw-xp-carousel__dots"
          role="tablist"
          aria-label="Choose experience"
        >
          {slides.map((_, i) => (
            <button
              key={`${uid}-d-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show experience ${i + 1} of ${n}`}
              tabIndex={i === index ? 0 : -1}
              className={`aw-xp-carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
