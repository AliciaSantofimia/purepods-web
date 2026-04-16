"use client";

import { useSyncExternalStore } from "react";
import { EXP_NAV_DESKTOP_MIN_PX } from "@/lib/experiencesData/experienceNavBreakpoints";

function subscribeMinWidth(minPx: number, onStoreChange: () => void) {
  const mq = window.matchMedia(`(min-width: ${minPx}px)`);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function snapshotMinWidth(minPx: number) {
  return window.matchMedia(`(min-width: ${minPx}px)`).matches;
}

/** `matchMedia('(min-width: 821px)')` — desktop mega vs mobile tap (experiences + pod header). */
export function useExpNavIsDesktop() {
  return useSyncExternalStore(
    (cb) => subscribeMinWidth(EXP_NAV_DESKTOP_MIN_PX, cb),
    () => snapshotMinWidth(EXP_NAV_DESKTOP_MIN_PX),
    () => true,
  );
}
