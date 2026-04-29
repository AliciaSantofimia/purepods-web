"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";
import {
  bookingUrlForLocationSlug,
  LOCATION_POD_BOOKING,
} from "@/lib/locationPods";
import styles from "./Header.module.css";

const RURU_EXPERIMENTAL_PATH = "/location/ruru-experimental";

export function Header() {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  const isRuruExperimental =
    pathname === RURU_EXPERIMENTAL_PATH ||
    pathname?.startsWith(`${RURU_EXPERIMENTAL_PATH}/`);

  useEffect(() => {
    const threshold = isRuruExperimental ? 64 : 40;
    function onScroll() {
      setIsSolid(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isRuruExperimental]);

  const isLocationPage = pathname?.startsWith("/location/");
  const showBackToPods = isLocationPage || pathname === "/experiences";

  const bookingHref = useMemo(() => {
    if (isRuruExperimental) {
      return LOCATION_POD_BOOKING.ruru;
    }
    const m = pathname?.match(/^\/location\/([^/]+)\/?$/);
    if (m?.[1]) {
      const pod = bookingUrlForLocationSlug(m[1]);
      if (pod) return pod;
    }
    return BOOKING_URL;
  }, [pathname, isRuruExperimental]);

  return (
    <header
      className={`${styles.topnav} ${
        isSolid
          ? isRuruExperimental
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
          <Link className={styles.brand} href="/">
            PurePods
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
