import type { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "./LocationHero.module.css";

interface LocationHeroProps {
  title: string;
  /** Single line or rich content (e.g. impact summary + poetic lead). */
  subtitle: string | ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imagePosition?: string;
}

export function LocationHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imagePosition = "70% 85%",
}: LocationHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="location-title">
      <div className={styles.media}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.img}
          sizes="100vw"
          priority
          style={{ objectPosition: imagePosition }}
        />
        <div className={styles.overlay} aria-hidden />
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
