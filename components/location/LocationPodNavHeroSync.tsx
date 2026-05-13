"use client";

import { useEffect } from "react";
import {
  getLocationPodPastHeroFromDom,
  LOCATION_POD_PAST_HERO_EVENT,
} from "@/lib/locationPods/locationHeaderHeroSync";

/**
 * Measures the editorial pod hero (`#top`) and dispatches {@link LOCATION_POD_PAST_HERO_EVENT}
 * so the shared {@link Header} can switch between transparent (hero) and light glass (body).
 */
export function LocationPodNavHeroSync() {
  useEffect(() => {
    let raf = 0;
    const emit = () => {
      const pastHero = getLocationPodPastHeroFromDom();
      document.dispatchEvent(
        new CustomEvent(LOCATION_POD_PAST_HERO_EVENT, {
          detail: { pastHero },
        }),
      );
    };
    const schedule = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        emit();
      });
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const hero = document.getElementById("top");
    const ro =
      typeof ResizeObserver !== "undefined" && hero
        ? new ResizeObserver(schedule)
        : null;
    if (hero && ro) ro.observe(hero);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (ro && hero) ro.unobserve(hero);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
