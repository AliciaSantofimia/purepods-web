"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import {
  adventureGuestExperienceReviews,
  adventureGuestExperiencesClosing,
  adventureGuestExperiencesExploreHref,
  adventureGuestExperiencesIntro,
} from "@/lib/experiencesData/adventureWildlife";

const WIDE_MQ = "(min-width: 900px)";

/**
 * Guest experiences: full copy stays in the DOM inside <details> (native
 * disclosure — no lazy load). On narrow viewports the drawer starts closed
 * to shorten scroll; on desktop the summary is hidden and the panel stays open.
 */
export function AdventureWildlifeGuestExperiences() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(WIDE_MQ);
    const apply = () => {
      if (mq.matches) setDrawerOpen(true);
      else setDrawerOpen(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      className="aw-guest-experiences adventure-reveal"
      aria-labelledby="guest-experiences-heading"
    >
      <div className="wrap">
        <header className="aw-guest-experiences__header">
          <h2
            id="guest-experiences-heading"
            className="aw-guest-experiences__headline"
          >
            Guest experiences
          </h2>
          <p className="aw-guest-experiences__intro">
            {adventureGuestExperiencesIntro}
          </p>
        </header>

        <details
          className="aw-guest-experiences__drawer"
          open={drawerOpen}
          suppressHydrationWarning
          onToggle={(e) => {
            if (typeof window === "undefined") return;
            if (window.matchMedia(WIDE_MQ).matches) return;
            setDrawerOpen(e.currentTarget.open);
          }}
        >
          <summary className="aw-guest-experiences__toggle">
            Read guest experiences
          </summary>
          <div className="aw-guest-experiences__drawer-body">
            <div className="aw-guest-experiences__grid">
              {adventureGuestExperienceReviews.map((r) => (
                <article
                  key={`${r.guestName}-${r.podName}`}
                  className="aw-guest-experiences__review"
                >
                  <blockquote className="aw-guest-experiences__blockquote">
                    <p className="aw-guest-experiences__quote">{r.quote}</p>
                  </blockquote>
                  <p className="aw-guest-experiences__body">{r.body}</p>
                  <footer className="aw-guest-experiences__attribution">
                    <span className="aw-guest-experiences__guest">
                      {r.guestName}
                    </span>
                    <span className="aw-guest-experiences__pod">
                      {r.podName}
                    </span>
                  </footer>
                </article>
              ))}
            </div>

            <footer className="aw-guest-experiences__footer">
              <p className="aw-guest-experiences__closing">
                {adventureGuestExperiencesClosing}
              </p>
              <p className="aw-guest-experiences__more">
                <Link
                  className="aw-guest-experiences__link"
                  href={adventureGuestExperiencesExploreHref}
                >
                  Explore stays across New Zealand →
                </Link>
              </p>
            </footer>
          </div>
        </details>
      </div>
    </section>
  );
}
