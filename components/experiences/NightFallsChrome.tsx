"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

type NavItem = { href: string; label: string };

const BOOK_HREF = "https://purepods.com/booking/";

export function NightFallsChrome({
  navItems,
  children,
}: {
  navItems: NavItem[];
  children: ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerEntered, setDrawerEntered] = useState(false);
  const drawerPanelId = useId();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setDrawerEntered(false);
  }, []);

  useLayoutEffect(() => {
    if (!drawerOpen) {
      setDrawerEntered(false);
      return;
    }
    const id = window.requestAnimationFrame(() => setDrawerEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeDrawer();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  return (
    <>
      <header
        className={`nav nav--solid nf-nav${drawerOpen ? " nf-nav--open" : ""}`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="nav__bar nf-nav__bar">
          <Link
            className="nav-brand nf-nav__brand"
            href="/"
            aria-label="PurePods — Home"
          >
            <Image
              src="/assets/img/LogoPCverdesinfondo.png"
              alt="PurePods"
              width={603}
              height={414}
              sizes="(max-width: 820px) min(200px, 46vw), min(200px, 42vw)"
              decoding="async"
              priority
            />
          </Link>

          <nav className="nav__links links nf-nav__links" aria-label="Primary">
            <Link href="/experiences">Experiences</Link>
            <Link href="/pods">Pods</Link>
            {navItems.map((item) => (
              <a key={item.href + item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nf-nav__actions">
            <a
              className="nav__book nf-nav__book"
              href={BOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
            <button
              type="button"
              className="nf-nav__toggle"
              aria-expanded={drawerOpen}
              aria-controls={drawerPanelId}
              onClick={() => setDrawerOpen((open) => !open)}
            >
              <span className="visually-hidden">
                {drawerOpen ? "Close menu" : "Open menu"}
              </span>
              <span className="nf-nav__toggle-bars" aria-hidden>
                <span className="nf-nav__toggle-bar" />
                <span className="nf-nav__toggle-bar" />
                <span className="nf-nav__toggle-bar" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {drawerOpen ? (
        <div
          className={`nf-nav-drawer${drawerEntered ? " nf-nav-drawer--visible" : ""}`}
          id={drawerPanelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            className="nf-nav-drawer__backdrop"
            aria-label="Close menu"
            onClick={closeDrawer}
          />
          <div className="nf-nav-drawer__panel">
            <div className="nf-nav-drawer__panel-top">
              <button
                type="button"
                className="nf-nav-drawer__close"
                onClick={closeDrawer}
                aria-label="Close menu"
              >
                <span aria-hidden>×</span>
              </button>
            </div>
            <div className="nf-nav-drawer__scroll">
              <nav className="nf-nav-drawer__nav" aria-label="Primary">
                <Link
                  className="nf-nav-drawer__link"
                  href="/experiences"
                  onClick={closeDrawer}
                >
                  Experiences
                </Link>
                <Link
                  className="nf-nav-drawer__link"
                  href="/pods"
                  onClick={closeDrawer}
                >
                  Pods
                </Link>
                {navItems.map((item) => (
                  <a
                    key={item.href + item.label}
                    className="nf-nav-drawer__link"
                    href={item.href}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="nf-nav-drawer__cta-wrap">
                <a
                  className="nf-nav-drawer__cta"
                  href={BOOK_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {children}
    </>
  );
}
