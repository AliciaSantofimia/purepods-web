"use client";

import { useSyncExternalStore } from "react";
import { EXP_NAV_DESKTOP_MIN_PX } from "@/lib/experiencesData/experienceNavBreakpoints";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(`(min-width: ${EXP_NAV_DESKTOP_MIN_PX}px)`);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(`(min-width: ${EXP_NAV_DESKTOP_MIN_PX}px)`).matches;
}

export function useExpNavIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
