"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";
import { bookingUrlForLocationSlug } from "@/lib/locationPods";
import styles from "./Header.module.css";

const RURU_LOCATION_PATH = "/location/ruru";
const MAKOHA_LOCATION_PATH = "/location/makoha";

function pathnameMatchesBase(pathname: string | null, base: string): boolean {
  if (!pathname) return false;
  return pathname === base || pathname.startsWith(`${base}/`);
}

/** Shared with `/location/ruru`: translucent bar + blur on scroll (not heavy solid green). */
export function Header() {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  const isMakohaLocation = pathnameMatchesBase(pathname, MAKOHA_LOCATION_PATH);

  const isEditorialLocationPage =
    pathnameMatchesBase(pathname, RURU_LOCATION_PATH) || isMakohaLocation;

  useEffect(() => {
    const threshold = isEditorialLocationPage ? 64 : 40;
    function onScroll() {
      setIsSolid(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isEditorialLocationPage]);

  const isLocationPage = pathname?.startsWith("/location/");
  /** Mākōha: cleaner editorial header — no back link (other locations unchanged). */
  const showBackToPods =
    (Boolean(isLocationPage) && !isMakohaLocation) ||
    pathname === "/experiences";

  const bookingHref = useMemo(() => {
    const m = pathname?.match(/^\/location\/([^/]+)\/?$/);
    if (m?.[1]) {
      const pod = bookingUrlForLocationSlug(m[1]);
      if (pod) return pod;
    }
    return BOOKING_URL;
  }, [pathname]);

  return (
    <header
      className={`${styles.topnav} ${
        isSolid
          ? isEditorialLocationPage
            ? styles.topnavGlass
            : styles.topnavSolid
          : ""
      }`}
      role="banner"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          {showBackToPods && (
            <Link className={styles.back} href="/pods">
              ← All Pods
            </Link>
          )}
          <Link
            className={
              isMakohaLocation
                ? `${styles.brand} ${styles.brandWithLogo}`
                : styles.brand
            }
            href="/"
            aria-label="PurePods — Home"
          >
            {isMakohaLocation ? (
              // Native <img>: avoids next/image wrapper lifecycle racing with scroll-driven
              // re-renders (removeChild on null). Static public asset; CSS controls display size.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/assets/img/LogoPCblancosinfondo.png"
                alt=""
                width={603}
                height={414}
                className={styles.brandLogoImg}
                decoding="async"
                fetchPriority="high"
              />
            ) : (
              "PurePods"
            )}
          </Link>
        </div>
        <nav className={styles.links} aria-label="Main">
          <Link href="/pods">Pods</Link>
          <Link href="/experiences">Experiences</Link>
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
    </header>
  );
}
