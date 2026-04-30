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
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const activeSection = sections[activeSectionIndex];
  const activePanelId = `faq-section-panel-${activeSectionIndex}`;

  const selectSection = (sectionIndex: number) => {
    setActiveSectionIndex(sectionIndex);
    setOpenId(null);
  };

  if (!activeSection) return null;

  return (
    <div className={styles.faqTabs}>
      <div className={styles.tabsScroller}>
        <div className={styles.tabs} role="group" aria-label="FAQ categories">
          {sections.map((section, sectionIndex) => {
            const isActive = sectionIndex === activeSectionIndex;

            return (
              <button
                key={section.title}
                type="button"
                id={`faq-tab-${sectionIndex}`}
                className={`${styles.tab}${isActive ? ` ${styles.tabActive}` : ""}`}
                aria-pressed={isActive}
                onClick={() => selectSection(sectionIndex)}
              >
                {section.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.sections}>
        <section
          key={activeSection.title}
          id={activePanelId}
          className={styles.section}
          aria-labelledby={`faq-section-${activeSectionIndex}`}
        >
          <h2 id={`faq-section-${activeSectionIndex}`}>{activeSection.title}</h2>
          <div className={styles.accordion}>
            {activeSection.items.map((item, itemIndex) => {
              const itemId = `faq-${activeSectionIndex}-${itemIndex}`;
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
      </div>
    </div>
  );
}
