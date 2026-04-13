import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "./LocationHero.module.css";

export interface LocationHeroProps {
  title: string;
  /** Single line or rich content (e.g. impact summary + poetic lead). */
  subtitle: string | ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  /** Base `object-position` (matches reference mobile hero). */
  imagePosition?: string;
  /** `object-position` from 1200px — defaults to `imagePosition` when omitted. */
  imagePositionMd?: string;
  /** `object-position` from 1600px — defaults to `imagePositionMd` or `imagePosition`. */
  imagePositionXl?: string;
  /** Taller hero height from 1600px, as in reference HTML. */
  heroTallUltra?: boolean;
  /** Reference pods without the dark gradient vignette on the hero. */
  heroOverlay?: "default" | "none";
}

export function LocationHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imagePosition = "70% 85%",
  imagePositionMd,
  imagePositionXl,
  heroTallUltra = false,
  heroOverlay = "default",
}: LocationHeroProps) {
  const imgStyle = {
    "--hero-obj": imagePosition,
    "--hero-obj-md": imagePositionMd ?? imagePosition,
    "--hero-obj-xl": imagePositionXl ?? imagePositionMd ?? imagePosition,
  } as CSSProperties;

  return (
    <section className={styles.hero} aria-labelledby="location-title">
      <div
        className={`${styles.media} ${heroTallUltra ? styles.mediaTallUltra : ""}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.img}
          sizes="100vw"
          priority
          decoding="async"
          style={imgStyle}
        />
        <div
          className={`${styles.overlay} ${heroOverlay === "none" ? styles.overlayNone : ""}`}
          aria-hidden
        />
        <div className={styles.content}>
          <div className={styles.inner}>
            <h1 id="location-title" className={styles.title}>
              {title}
            </h1>
            {typeof subtitle === "string" ? (
              <p className={styles.subtitle}>{subtitle}</p>
            ) : (
              <div className={styles.subtitleWrap}>{subtitle}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
