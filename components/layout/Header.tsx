"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useMemo, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";
import { bookingUrlForLocationSlug } from "@/lib/locationPods";
import {
  getLocationPodPastHeroFromDom,
  LOCATION_POD_PAST_HERO_EVENT,
} from "@/lib/locationPods/locationHeaderHeroSync";
import styles from "./Header.module.css";

/** Location pod pages: transparent over hero; light glass + dark nav once the hero clears the bar (see `LocationPodNavHeroSync`). */
export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [isSolid, setIsSolid] = useState(false);
  const [locationPastHero, setLocationPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isLocationPage = pathname?.startsWith("/location/");
  const isEditorialLocationPage = Boolean(isLocationPage);

  useLayoutEffect(() => {
    if (!isEditorialLocationPage) {
      setLocationPastHero(false);
      return;
    }
    setLocationPastHero(getLocationPodPastHeroFromDom());
  }, [isEditorialLocationPage, pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isEditorialLocationPage) return;
    function onPastHero(e: Event) {
      const ce = e as CustomEvent<{ pastHero: boolean }>;
      setLocationPastHero(Boolean(ce.detail?.pastHero));
    }
    document.addEventListener(LOCATION_POD_PAST_HERO_EVENT, onPastHero);
    return () =>
      document.removeEventListener(LOCATION_POD_PAST_HERO_EVENT, onPastHero);
  }, [isEditorialLocationPage]);

  useEffect(() => {
    if (isEditorialLocationPage) return;
    function onScroll() {
      setIsSolid(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isEditorialLocationPage]);

  /** Editorial location pages share the same clean header treatment. */
  const showBackToPods = pathname === "/experiences";

  const bookingHref = useMemo(() => {
    const m = pathname?.match(/^\/location\/([^/]+)\/?$/);
    if (m?.[1]) {
      const pod = bookingUrlForLocationSlug(m[1]);
      if (pod) return pod;
    }
    return BOOKING_URL;
  }, [pathname]);

  const topnavMods = [
    styles.topnav,
    isEditorialLocationPage && !locationPastHero ? styles.topnavLocationHero : "",
    isEditorialLocationPage && locationPastHero ? styles.topnavLocationLightGlass : "",
    !isEditorialLocationPage && isSolid ? styles.topnavSolid : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={topnavMods} role="banner">
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuBars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className={styles.left}>
          {showBackToPods && (
            <Link className={styles.back} href="/pods">
              ← All Pods
            </Link>
          )}
          <Link
            className={
              isLocationPage
                ? `${styles.brand} ${styles.brandWithLogo}`
                : styles.brand
            }
            href="/"
            aria-label="PurePods — Home"
          >
            {isLocationPage ? (
              <span className={styles.brandLogoDual}>
                {/* Native <img>: avoids next/image wrapper lifecycle racing with scroll-driven re-renders. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/LogoPCblancosinfondo.png"
                  alt=""
                  width={603}
                  height={414}
                  className={`${styles.brandLogoImg} ${locationPastHero ? styles.brandLogoSwapHidden : styles.brandLogoSwapShown}`}
                  decoding="async"
                  fetchPriority="high"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/LogoPCverdesinfondo.png"
                  alt=""
                  width={603}
                  height={414}
                  className={`${styles.brandLogoImg} ${styles.brandLogoImgGreen} ${locationPastHero ? styles.brandLogoSwapShown : styles.brandLogoSwapHidden}`}
                  decoding="async"
                />
              </span>
            ) : (
              "PurePods"
            )}
          </Link>
        </div>
        <nav className={styles.links} aria-label="Main">
          <Link href="/pods" className={styles.navLink}>
            Pods
          </Link>
          <Link href="/experiences" className={styles.navLink}>
            Experiences
          </Link>
          <a
            className={styles.cta}
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
        </nav>
      </div>
      <div
        id={menuId}
        className={`${styles.mobileMenu}${menuOpen ? ` ${styles.mobileMenuOpen}` : ""}`}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileMenuNav} aria-label="Mobile primary">
          <Link href="/pods" onClick={closeMenu}>
            Pods
          </Link>
          <Link href="/experiences" onClick={closeMenu}>
            Experiences
          </Link>
        </nav>
      </div>
    </header>
  );
}
