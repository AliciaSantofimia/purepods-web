"use client";

import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ExpRefImage } from "./ExpRefImage";
import { StayAtLink } from "./stayAtLink";

export type ForestSlide = {
  image: string;
  alt: string;
  title: string;
  placeHref: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

type Props = {
  ariaLabel: string;
  slides: ForestSlide[];
  chapterTitle: ReactNode;
  chapterIntro: ReactNode;
};

export function ForestCarouselBlock({
  ariaLabel,
  slides,
  chapterTitle,
  chapterIntro,
}: Props) {
  const [i, setI] = useState(0);
  const uid = useId().replace(/:/g, "");
  const item = slides[i] ?? slides[0];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setI((x) => (x - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setI((x) => (x + 1) % slides.length);
      }
    },
    [slides.length],
  );

  useEffect(() => {
    setI(0);
  }, [slides]);

  if (!item) return null;

  return (
    <div className="moment">
      <div
        className="media forest-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKey}
      >
        <div className="forest-carousel__viewport">
          <div className="forest-carousel__slides">
            {slides.map((s, idx) => (
              <figure
                key={s.image + idx}
                className={`forest-carousel__slide${idx === i ? " is-active" : ""}`}
                data-slide={idx}
              >
                <ExpRefImage
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  priority={idx === 0}
                  className="forest-carousel__img"
                />
              </figure>
            ))}
          </div>
          <button
            type="button"
            className="forest-carousel__btn forest-carousel__btn--prev"
            aria-label="Previous place"
            onClick={() => setI((x) => (x - 1 + slides.length) % slides.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="forest-carousel__btn forest-carousel__btn--next"
            aria-label="Next place"
            onClick={() => setI((x) => (x + 1) % slides.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="forest-carousel__dots" role="tablist" aria-label="Choose a place">
            {slides.map((_, idx) => (
              <button
                key={`${uid}-d-${idx}`}
                type="button"
                className={`forest-carousel__dot${idx === i ? " is-active" : ""}`}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Show slide ${idx + 1} of ${slides.length}`}
                tabIndex={idx === i ? 0 : -1}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="copy">
        {chapterTitle}
        {chapterIntro}
        <div className="forest-walks-panel" aria-live="polite" aria-atomic="true">
          <a className="forest-place-link" href={item.placeHref} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <p className="forest-desc">{item.description}</p>
          <StayAtLink className="journey-pod forest-cta" href={item.ctaHref} label={item.ctaLabel} />
        </div>
      </div>
    </div>
  );
}
