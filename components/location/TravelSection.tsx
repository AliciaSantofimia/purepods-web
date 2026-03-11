"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useLightbox } from "@/components/ui/LightboxContext";
import { SectionHeader } from "./SectionHeader";
import styles from "./TravelSection.module.css";

interface TravelCardWithImages {
  type: "withImages";
  title: string;
  images: { src: string | StaticImageData; alt: string }[];
  body: string;
}

interface TravelCardPlain {
  type: "plain";
  title: string;
  body: string;
}

type TravelCard = TravelCardWithImages | TravelCardPlain;

interface TravelSectionProps {
  title: string;
  hint: string;
  cards: TravelCard[];
}

export function TravelSection({ title, hint, cards }: TravelSectionProps) {
  const lightbox = useLightbox();

  return (
    <section className={styles.section} aria-labelledby="travel-heading">
      <SectionHeader title={title} hint={hint} />
      <div className={styles.grid}>
        {cards.map((card, i) =>
          card.type === "withImages" ? (
            <div key={i} className={styles.card}>
              <div className={styles.collage}>
                {card.images.map((img, j) => (
                  <div
                    key={j}
                    className={styles.shot}
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      lightbox?.openLightbox(img.src, img.alt)
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      lightbox?.openLightbox(img.src, img.alt)
                    }
                    aria-label={`View ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.body}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
          ) : (
            <div key={i} className={`${styles.card} ${styles.plain}`}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
