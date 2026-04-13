"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useLightbox } from "@/components/ui/LightboxContext";
import { SectionHeader } from "./SectionHeader";
import styles from "./PodSection.module.css";

export type PodGalleryVariant = "tallRight" | "fillGapSpan" | "podTextBottom";

export interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  position?: string;
  big?: boolean;
  fillGap?: boolean;
  /** Greystone-style bedroom tile (240px vs 170px). */
  tall?: boolean;
}

interface PodSectionProps {
  title: string;
  hint: string;
  /** Optional rich intro (e.g. inline links) rendered before `paragraphs`. */
  lead?: ReactNode;
  paragraphs: string[];
  /** Order: [big, fillGap, …rest]. Caption is rendered between big and fillGap in the grid. */
  gallery: GalleryImage[];
  /** Paragraph shown in grid next to fillGap image */
  galleryCaption?: string;
  /** Matches reference-html/location per-pod gallery rules. */
  galleryVariant?: PodGalleryVariant;
}

export function PodSection({
  title,
  hint,
  lead,
  paragraphs,
  gallery,
  galleryCaption,
  galleryVariant = "tallRight",
}: PodSectionProps) {
  const lightbox = useLightbox();

  const handleImageClick = (img: GalleryImage) => {
    lightbox?.openLightbox(img.src, img.alt);
  };

  const [big, fillGap, ...rest] = gallery;

  const captionClass =
    galleryVariant === "podTextBottom"
      ? `${styles.caption} ${styles.captionPodText}`
      : styles.caption;

  const sideSizes =
    galleryVariant === "podTextBottom"
      ? "(max-width: 640px) 100vw, 50vw"
      : "(max-width: 640px) 100vw, 50vw";

  return (
    <section className={styles.section} aria-labelledby="pod-heading">
      <SectionHeader title={title} hint={hint} />
      <div className={styles.card}>
        {lead}
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className={styles.gallery} data-gallery={galleryVariant}>
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
          {galleryCaption && <p className={captionClass}>{galleryCaption}</p>}
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
                  sizes={sideSizes}
                  style={fillGap.position ? { objectPosition: fillGap.position } : undefined}
                />
              </button>
            </figure>
          )}
          {rest.map((img, i) => {
            const isBottomLeft =
              galleryVariant === "podTextBottom" && i === rest.length - 1;
            const thumbClass = [
              styles.thumb,
              img.tall ? styles.tall : "",
              isBottomLeft ? styles.bottomLeft : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <figure key={i} className={thumbClass}>
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
                    sizes={sideSizes}
                    style={img.position ? { objectPosition: img.position } : undefined}
                  />
                </button>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
