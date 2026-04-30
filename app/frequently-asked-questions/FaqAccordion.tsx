"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type FaqAnswer = {
  paragraphs: string[];
  list?: string[];
};

export type FaqItem = {
  question: string;
  answer: FaqAnswer;
};

export type FaqSection = {
  title: string;
  items: FaqItem[];
};

type Props = {
  sections: FaqSection[];
};

export function FaqAccordion({ sections }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={styles.sections}>
      {sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={styles.section}
          aria-labelledby={`faq-section-${sectionIndex}`}
        >
          <h2 id={`faq-section-${sectionIndex}`}>{section.title}</h2>
          <div className={styles.accordion}>
            {section.items.map((item, itemIndex) => {
              const itemId = `faq-${sectionIndex}-${itemIndex}`;
              const panelId = `${itemId}-panel`;
              const isOpen = openId === itemId;

              return (
                <article key={item.question} className={styles.item}>
                  <h3 className={styles.questionHeading}>
                    <button
                      type="button"
                      id={itemId}
                      className={styles.question}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : itemId)}
                    >
                      <span>{item.question}</span>
                      <span className={styles.icon} aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    className={`${styles.panel}${isOpen ? ` ${styles.panelOpen}` : ""}`}
                    role="region"
                    aria-labelledby={itemId}
                  >
                    <div className={styles.panelInner}>
                      {item.answer.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {item.answer.list ? (
                        <ul>
                          {item.answer.list.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
