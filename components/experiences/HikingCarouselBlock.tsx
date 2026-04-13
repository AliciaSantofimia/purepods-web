"use client";

import {
  useCallback,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { shouldMountCarouselImage } from "./carouselImageMount";
import { ExpRefImage } from "./ExpRefImage";
import { StayAtLink } from "./stayAtLink";

export type HikingSlide = {
  image?: string | null;
  alt?: string;
  title: string;
  placeHref: string;
  description: string;
  ctas: { label: string; href: string }[];
  overlayTitle?: string;
  overlayLocation?: string;
  noVisual?: boolean;
};

type Props = {
  ariaLabel: string;
  slides: HikingSlide[];
  chapterTitle: ReactNode;
  chapterIntro: ReactNode;
  /** Use cycling-pod-cta for journey cycling chapter */
  ctaClassName?: string;
};

export function HikingCarouselBlock({
  ariaLabel,
  slides,
  chapterTitle,
  chapterIntro,
  ctaClassName = "journey-pod hiking-pod-cta",
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

  if (!item) return null;

  const len = slides.length;
  const mountImg = (idx: number) => shouldMountCarouselImage(i, idx, len);

  return (
    <div className="moment">
      <div
        className="media journey-carousel hiking-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${ariaLabel}: ${item.title}`}
        tabIndex={0}
        onKeyDown={onKey}
      >
        <div className="hiking-carousel__viewport">
          <div className="hiking-carousel__slides">
            {slides.map((s, idx) => (
              <figure
                key={`${s.title}-${idx}`}
                className={`journey-item hiking-carousel__slide${idx === i ? " is-active" : ""}${
                  s.noVisual ? " hiking-carousel__slide--no-visual" : ""
                }`}
              >
                {s.noVisual || !s.image ? (
                  <div className="hiking-carousel__no-img" aria-hidden={s.noVisual ? undefined : true} />
                ) : mountImg(idx) ? (
                  <>
                    <ExpRefImage
                      src={s.image}
                      alt={s.alt ?? ""}
                      fill
                      sizes="(max-width: 900px) 100vw, 45vw"
                      priority={idx === i && idx === 0}
                      className="hiking-carousel__img"
                    />
                    {s.overlayTitle || s.overlayLocation ? (
                      <div className="carousel-slide-overlay" aria-hidden="true">
                        {s.overlayTitle ? (
                          <span className="carousel-slide-overlay__title">{s.overlayTitle}</span>
                        ) : null}
                        {s.overlayLocation ? (
                          <span className="carousel-slide-overlay__location">{s.overlayLocation}</span>
                        ) : null}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div
                    className="hiking-carousel__img hiking-carousel__img--pending"
                    aria-hidden
                  />
                )}
              </figure>
            ))}
          </div>
          <button
            type="button"
            className="hiking-carousel__btn hiking-carousel__btn--prev"
            aria-label="Previous experience"
            onClick={() => setI((x) => (x - 1 + slides.length) % slides.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="hiking-carousel__btn hiking-carousel__btn--next"
            aria-label="Next experience"
            onClick={() => setI((x) => (x + 1) % slides.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="hiking-carousel__dots" role="tablist" aria-label="Choose an experience">
            {slides.map((_, idx) => (
              <button
                key={`${uid}-hd-${idx}`}
                type="button"
                className={`hiking-carousel__dot${idx === i ? " is-active" : ""}`}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Show experience ${idx + 1} of ${slides.length}`}
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
        <div className="hiking-panel" aria-live="polite" aria-atomic="true">
          <a className="hiking-place-link" href={item.placeHref} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <p className="hiking-desc">{item.description}</p>
          <div className="hiking-ctas">
            {item.ctas.map((c) => (
              <StayAtLink key={c.href + c.label} href={c.href} label={c.label} className={ctaClassName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
