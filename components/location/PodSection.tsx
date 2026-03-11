"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useLightbox } from "@/components/ui/LightboxContext";
import { SectionHeader } from "./SectionHeader";
import styles from "./PodSection.module.css";

export interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  position?: string;
  big?: boolean;
  fillGap?: boolean;
}

interface PodSectionProps {
  title: string;
  hint: string;
  paragraphs: string[];
  /** Order: [big, fillGap, img, img]. Caption is rendered between big and fillGap in the grid. */
  gallery: GalleryImage[];
  /** Paragraph shown in grid next to fillGap image */
  galleryCaption?: string;
}

export function PodSection({
  title,
  hint,
  paragraphs,
  gallery,
  galleryCaption,
}: PodSectionProps) {
  const lightbox = useLightbox();

  const handleImageClick = (img: GalleryImage) => {
    lightbox?.openLightbox(img.src, img.alt);
  };

  const [big, fillGap, ...rest] = gallery;

  return (
    <section className={styles.section} aria-labelledby="pod-heading">
      <SectionHeader title={title} hint={hint} />
      <div className={styles.card}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className={styles.gallery}>
          {big && (
            <figure className={`${styles.thumb} ${styles.big}`}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => handleImageClick(big)}
                aria-label={`View ${big.alt}`}
              >
                <Image
                  src={big.src}
                  alt={big.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 980px"
                  style={big.position ? { objectPosition: big.position } : undefined}
                />
              </button>
            </figure>
          )}
          {galleryCaption && <p className={styles.caption}>{galleryCaption}</p>}
          {fillGap && (
            <figure className={`${styles.thumb} ${styles.fillGap}`}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => handleImageClick(fillGap)}
                aria-label={`View ${fillGap.alt}`}
              >
                <Image
                  src={fillGap.src}
                  alt={fillGap.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, 50vw"
                  style={fillGap.position ? { objectPosition: fillGap.position } : undefined}
                />
              </button>
            </figure>
          )}
          {rest.map((img, i) => (
            <figure key={i} className={styles.thumb}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => handleImageClick(img)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, 50vw"
                  style={img.position ? { objectPosition: img.position } : undefined}
                />
              </button>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
