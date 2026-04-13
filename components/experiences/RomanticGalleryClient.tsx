"use client";

import { useState } from "react";
import { ExpRefImage } from "./ExpRefImage";

export function RomanticGalleryClient({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <section id="gallery">
      <div className="wrap">
        <div
          className="section-title gallery-trigger"
          id="toggleGallery"
          role="button"
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
        >
          <p className="eyebrow center">Imagine yourself here</p>
        </div>

        <div className={`gallery-grid2 gallery-hidden${open ? " is-open" : ""}`} id="galleryHidden">
          {items.map((it) => (
            <figure className="gitem" key={it.src}>
              <ExpRefImage src={it.src} alt={it.alt} fill sizes="(max-width:560px) 100vw, 33vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
