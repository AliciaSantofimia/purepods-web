"use client";

import { useRef, type SyntheticEvent } from "react";

export type AdventureWildlifeFaqItem = { q: string; a: string };

type Props = {
  items: readonly AdventureWildlifeFaqItem[];
};

/**
 * Native <details> FAQ: all answers stay in the DOM; only one panel open at a time.
 */
export function AdventureWildlifeFaqAccordion({ items }: Props) {
  const listRef = useRef<HTMLUListElement>(null);

  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
    const opened = e.currentTarget;
    if (!opened.open) return;
    const root = listRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLDetailsElement>("details").forEach((d) => {
      if (d !== opened && d.open) d.open = false;
    });
  };

  return (
    <ul ref={listRef} className="aw-faq-accordion__list">
      {items.map((f) => (
        <li key={f.q} className="aw-faq-accordion__item">
          <details
            className="aw-faq-accordion__details"
            onToggle={handleToggle}
          >
            <summary className="aw-faq-accordion__summary">
              <h3 className="aw-faq-accordion__q">{f.q}</h3>
              <span
                className="aw-faq-accordion__chevron"
                aria-hidden="true"
              />
            </summary>
            <div className="aw-faq-accordion__answer">
              <p>{f.a}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
