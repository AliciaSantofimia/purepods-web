"use client";

import { RuruExperimentalImageCarousel } from "./RuruExperimentalImageCarousel";
import styles from "./ruruTravelCarouselCard.module.css";

export type TravelCarouselImage = { src: string; alt: string };

type Props = {
  title: string;
  body: string;
  images: TravelCarouselImage[];
};

export function RuruTravelCarouselCard({ title, body, images }: Props) {
  const n = images.length;

  if (n === 0) {
    return (
      <article className={styles.card}>
        <div className={styles.mediaPlaceholder} aria-hidden />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardBody}>{body}</p>
      </article>
    );
  }

  const items = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <article className={styles.card}>
      <RuruExperimentalImageCarousel
        items={items}
        ariaLabel={`${title} — photos`}
        sizes="(max-width: 819px) 92vw, 30vw"
        slideVariant="default"
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>
    </article>
  );
}
