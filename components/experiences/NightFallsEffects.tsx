"use client";

import { useEffect } from "react";

export function NightFallsEffects() {
  useEffect(() => {
    const nav = document.getElementById("topnav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
