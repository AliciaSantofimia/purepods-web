"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { RuruExperimentalLightboxImage } from "./RuruExperimentalLightboxImage";
import styles from "./ruruExperimentalImageCarousel.module.css";

export type CarouselImageItem = {
  src: string;
  alt: string;
  imageStyle?: CSSProperties;
};

type Props = {
  items: CarouselImageItem[];
  ariaLabel: string;
  sizes?: string;
  /** Extra class on the focusable carousel wrapper (e.g. rounded pod band). */
  className?: string;
  /** `feature` = taller cinematic slides for The Pod section. */
  slideVariant?: "default" | "feature";
  priorityFirst?: boolean;
};

export function RuruExperimentalImageCarousel({
  items,
  ariaLabel,
  sizes = "(max-width: 720px) 100vw, min(1040px, 92vw)",
  className = "",
  slideVariant = "default",
  priorityFirst = false,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const [index, setIndex] = useState(0);
  const n = items.length;
  const touchStartX = useRef<number | null>(null);
  const itemsKey = useMemo(() => items.map((it) => it.src).join("|"), [items]);

  useEffect(() => {
    setIndex(0);
  }, [itemsKey]);

  const go = useCallback(
    (delta: number) => {
      if (n <= 1) return;
      setIndex((i) => (i + delta + n) % n);
    },
    [n],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (n <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    },
    [go, n],
  );

  const onTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (n <= 1) return;
      touchStartX.current = e.touches[0]?.clientX ?? null;
    },
    [n],
  );

  const onTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (n <= 1 || touchStartX.current == null) return;
      const endX = e.changedTouches[0]?.clientX;
      if (endX == null) return;
      const dx = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(dx) < 48) return;
      if (dx > 0) go(-1);
      else go(1);
    },
    [go, n],
  );

  if (n === 0) return null;

  const slidePct = 100 / n;
  const slideClass =
    slideVariant === "feature"
      ? `${styles.slide} ${styles.slideFeature}`
      : styles.slide;

  return (
    <div
      className={`${styles.mediaWrap} ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      id={`${uid}-carousel`}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${(index * 100) / n}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.src}
              className={slideClass}
              style={{ width: `${slidePct}%` }}
              aria-hidden={i !== index}
            >
              <RuruExperimentalLightboxImage
                src={item.src}
                alt={item.alt}
                sizes={sizes}
                priority={priorityFirst && i === 0}
                buttonClassName={styles.slideButton}
                imageClassName={styles.slideImg}
                imageStyle={item.imageStyle}
              />
            </div>
          ))}
        </div>
      </div>

      {n > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => go(-1)}
            aria-controls={`${uid}-carousel`}
            aria-label="Previous photo"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => go(1)}
            aria-controls={`${uid}-carousel`}
            aria-label="Next photo"
          >
            <span aria-hidden>›</span>
          </button>
          <div className={styles.dots} role="tablist" aria-label="Choose photo">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Photo ${i + 1} of ${n}`}
                className={`${styles.dot}${i === index ? ` ${styles.dotActive}` : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
