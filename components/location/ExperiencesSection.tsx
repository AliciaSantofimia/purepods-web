"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useLightbox } from "@/components/ui/LightboxContext";
import { SectionHeader } from "./SectionHeader";
import styles from "./ExperiencesSection.module.css";

export interface ExperienceItem {
  title: string;
  image: string | StaticImageData;
  imageAlt: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
}

interface ExperiencesSectionProps {
  title: string;
  hint: string;
  intro: string;
  experiences: ExperienceItem[];
  extraTitle?: string;
  extraParagraphs?: string[];
}

export function ExperiencesSection({
  title,
  hint,
  intro,
  experiences,
  extraTitle,
  extraParagraphs,
}: ExperiencesSectionProps) {
  const lightbox = useLightbox();

  return (
    <section className={styles.section} aria-labelledby="experiences-heading">
      <SectionHeader title={title} hint={hint} />
      <div className={styles.card}>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.grid}>
          {experiences.map((exp, i) => (
            <article key={i} className={styles.item}>
              <div
                className={styles.media}
                role="button"
                tabIndex={0}
                onClick={() => lightbox?.openLightbox(exp.image, exp.imageAlt)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  lightbox?.openLightbox(exp.image, exp.imageAlt)
                }
                aria-label={`View ${exp.imageAlt}`}
              >
                <Image
                  src={exp.image}
                  alt={exp.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.itemTitle}>{exp.title}</h3>
                {exp.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                <div className={styles.links}>
                  {exp.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        {extraTitle && extraParagraphs && extraParagraphs.length > 0 && (
          <div className={styles.extra}>
            <h3 className={styles.extraTitle}>{extraTitle}</h3>
            {extraParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
