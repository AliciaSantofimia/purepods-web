"use client";

import { useRef, type SyntheticEvent } from "react";

export type NightFallsFaqItem = { q: string; a: string };

export function NightFallsFaqAccordion({
  items,
}: {
  items: readonly NightFallsFaqItem[];
}) {
  const listRef = useRef<HTMLUListElement>(null);

  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
    const opened = e.currentTarget;
    if (!opened.open) return;

    listRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details")
      .forEach((details) => {
        if (details !== opened && details.open) details.open = false;
      });
  };

  return (
    <ul ref={listRef} className="nightFaqAccordion">
      {items.map((item) => (
        <li key={item.q}>
          <details
            className="nightFaqAccordion__details"
            onToggle={handleToggle}
          >
            <summary className="nightFaqAccordion__summary">
              <h3>{item.q}</h3>
              <span className="nightFaqAccordion__chevron" aria-hidden="true" />
            </summary>
            <div className="nightFaqAccordion__answer">
              <p>{item.a}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
