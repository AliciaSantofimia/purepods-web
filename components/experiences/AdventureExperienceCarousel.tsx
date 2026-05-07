"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ExpRefImage } from "@/components/experiences/ExpRefImage";
import type { AdventureExperienceSlide } from "@/lib/experiencesData/adventureWildlife";

const AUTO_MS = 7000;

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role=\"button\"]";

const TAP_MOVE_PX = 12;

const SWIPE_MIN_PX = 40;

/** Viewport breakpoint aligned with adventure-wildlife carousel CSS (mobile = swipe-first, no stage click-to-open). */
const MOBILE_CAROUSEL_MQ = "(max-width: 720px)";

function elementFromEventTarget(target: EventTarget | null): Element | null {
  if (target instanceof Element) return target;
  if (target instanceof Text) return target.parentElement;
  return null;
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  const el = elementFromEventTarget(target);
  if (!el) return false;
  return Boolean(el.closest(INTERACTIVE_SELECTOR));
}

function openExternalUrl(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
}

type Props = {
  slides: AdventureExperienceSlide[];
};

export function AdventureExperienceCarousel({ slides }: Props) {
  const uid = useId().replace(/:/g, "");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);
  const [stayMenuOpen, setStayMenuOpen] = useState(false);

  const gestureRef = useRef<{
    pointerId: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);

  const blockStageOpenClickRef = useRef(false);

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
    const mq = window.matchMedia(MOBILE_CAROUSEL_MQ);
    const sync = () => setIsMobileCarousel(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || n <= 1 || paused || stayMenuOpen) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, stayMenuOpen, n]);

  useEffect(() => {
    setStayMenuOpen(false);
  }, [index]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  const scheduleUnblockStageClick = useCallback(() => {
    blockStageOpenClickRef.current = true;
    window.setTimeout(() => {
      blockStageOpenClickRef.current = false;
    }, 120);
  }, []);

  const onStagePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!e.isPrimary) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (isInteractiveTarget(e.target)) {
        gestureRef.current = null;
        return;
      }
      gestureRef.current = {
        pointerId: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        moved: false,
      };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* setPointerCapture can fail if the element is not eligible */
      }
    },
    [],
  );

  const onStagePointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    if (!g || g.pointerId !== e.pointerId) return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;
    if (Math.hypot(dx, dy) > TAP_MOVE_PX) g.moved = true;
  }, []);

  const onStagePointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const g = gestureRef.current;
      if (!g || g.pointerId !== e.pointerId) return;

      const dx = e.clientX - g.x;
      const dy = e.clientY - g.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      /* Do not require g.moved: some touch stacks only deliver down+up on quick flicks. */
      const isHorizontalSwipe =
        absDx >= SWIPE_MIN_PX && absDx > absDy * 1.1;

      gestureRef.current = null;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        /* releasePointerCapture can fail if not captured */
      }

      /* Swipe must not depend on pointerup target (finger often lifts over caption/CTA). */
      if (isHorizontalSwipe) {
        scheduleUnblockStageClick();
        if (dx < 0) goNext();
        else goPrev();
        return;
      }

      if (g.moved) scheduleUnblockStageClick();
    },
    [goNext, goPrev, scheduleUnblockStageClick],
  );

  const onStagePointerCancel = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const g = gestureRef.current;
      if (!g || g.pointerId !== e.pointerId) return;
      gestureRef.current = null;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        /* ignore */
      }
    },
    [],
  );

  const onStageClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobileCarousel) return;
      if (blockStageOpenClickRef.current) return;
      if (isInteractiveTarget(e.target)) return;
      const url = slides[index]?.url;
      if (!url) return;
      openExternalUrl(url);
    },
    [isMobileCarousel, slides, index],
  );

  if (!active || n === 0) return null;

  const firstPod = active.pods[0];
  const hasMultiplePods = active.pods.length > 1;
  const nearbyContext = active.nearbyRegion?.replace(/^\s*—\s*/, "") ?? "";
  const stayMenuId = `${uid}-stay-nearby`;

  return (
    <div
      className="aw-xp-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Curated wildlife and adventure experiences"
    >
      <div
        className="aw-xp-carousel__stage"
        aria-label={
          isMobileCarousel ? undefined : `Open experience: ${active.title}`
        }
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onStagePointerDown}
        onPointerMove={onStagePointerMove}
        onPointerUp={onStagePointerUp}
        onPointerCancel={onStagePointerCancel}
        onClick={onStageClick}
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
                objectPosition={slide.imagePosition}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <div className="aw-xp-carousel__overlay" aria-hidden="true" />
        <div className="aw-xp-carousel__caption" aria-live="polite">
          <h3 className="aw-xp-carousel__title">{active.title}</h3>
          <p className="aw-xp-carousel__desc">{active.description}</p>
          <div className="aw-xp-carousel__actions">
            <a
              className="aw-xp-carousel__cta"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore this experience
            </a>
            {firstPod ? (
              hasMultiplePods ? (
                <button
                  type="button"
                  className="aw-xp-carousel__cta aw-xp-carousel__cta--stay"
                  aria-expanded={stayMenuOpen}
                  aria-controls={stayMenuId}
                  onClick={() => setStayMenuOpen((open) => !open)}
                >
                  Stay nearby
                </button>
              ) : (
                <Link
                  href={firstPod.href}
                  className="aw-xp-carousel__cta aw-xp-carousel__cta--stay"
                >
                  Stay nearby
                </Link>
              )
            ) : null}
          </div>
          {firstPod ? (
            <div className="aw-xp-carousel__stay">
              {!hasMultiplePods ? (
                <p className="aw-xp-carousel__stayContext">
                  {firstPod.label}
                  {nearbyContext ? ` — ${nearbyContext}` : null}
                </p>
              ) : (
                <div
                  id={stayMenuId}
                  className={`aw-xp-carousel__stayPanel${
                    stayMenuOpen ? " is-open" : ""
                  }`}
                  hidden={!stayMenuOpen}
                >
                  <p className="aw-xp-carousel__stayPanelLabel">
                    Choose your nearby PurePod
                  </p>
                  <ul className="aw-xp-carousel__stayList">
                    {active.pods.map((pod) => (
                      <li key={pod.href} className="aw-xp-carousel__stayItem">
                        <Link href={pod.href} className="aw-xp-carousel__stayLink">
                          <span className="aw-xp-carousel__stayName">
                            {pod.label}
                          </span>
                          {nearbyContext ? (
                            <span className="aw-xp-carousel__stayRegion">
                              {nearbyContext}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : null}
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
