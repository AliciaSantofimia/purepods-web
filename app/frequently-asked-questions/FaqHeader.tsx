"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import styles from "./page.module.css";

export function FaqHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.siteHeader} role="banner">
      <div className={styles.siteHeaderInner}>
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
        <Link href="/" className={styles.brandLink} aria-label="PurePods — Home">
          <Image
            src="/assets/img/LogoPCverdesinfondo.png"
            alt="PurePods"
            width={603}
            height={414}
            className={styles.brandLogo}
            sizes="(max-width: 640px) 120px, 150px"
            priority
          />
        </Link>
        <nav className={styles.siteNav} aria-label="Primary">
          <Link href="/pods">Pods</Link>
          <Link href="/experiences">Experiences</Link>
        </nav>
        <a
          className={styles.bookLink}
          href="https://purepods.com/booking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book
        </a>
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
