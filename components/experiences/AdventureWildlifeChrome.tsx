"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ExpExperiencesMega } from "@/components/experiences/ExpExperiencesMega";
import { ExpPodsMega } from "@/components/experiences/ExpPodsMega";
import { withExperienceFromParam } from "@/lib/experiencesData/experienceFromNav";
import { EXP_NAV_DESKTOP_MIN_PX } from "@/lib/experiencesData/experienceNavBreakpoints";
import {
  EXPERIENCE_MEGA_ENTRIES,
  experienceSlugFromPathname,
} from "@/lib/experiencesData/experienceNavMega";
import {
  getPodsMegaRegions,
  type PodsMegaRegionId,
} from "@/lib/experiencesData/podsNavMegaData";

type NavItem = { href: string; label: string };

function useWideExperienceNav() {
  const min = EXP_NAV_DESKTOP_MIN_PX;
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(`(min-width: ${min}px)`);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(`(min-width: ${min}px)`).matches,
    () => true,
  );
}

function podHref(podPath: string, pathname: string) {
  const fromSlug = experienceSlugFromPathname(pathname);
  if (!fromSlug) return podPath;
  return withExperienceFromParam(podPath, fromSlug);
}

function AdventureWildlifeDrawerPods({
  pathname,
  onNavigate,
  podsOpen,
}: {
  pathname: string;
  onNavigate: () => void;
  /** When outer “Pods” accordion closes, collapse regional sections. */
  podsOpen: boolean;
}) {
  const panelId = useId();
  const [openRegion, setOpenRegion] = useState<PodsMegaRegionId | null>(null);
  const regions = getPodsMegaRegions();

  useEffect(() => {
    if (!podsOpen) setOpenRegion(null);
  }, [podsOpen]);

  return (
    <div className="aw-mnav-drawer__pods">
      {regions.map((region) => {
        const expanded = openRegion === region.id;
        const sectionId = `${panelId}-${region.id}`;
        return (
          <section key={region.id} className="exp-nav-pods-mega__mobile-region">
            <button
              type="button"
              className="exp-nav-pods-mega__mobile-region-toggle"
              aria-expanded={expanded}
              aria-controls={sectionId}
              id={`${sectionId}-btn`}
              onClick={() =>
                setOpenRegion((r) => (r === region.id ? null : region.id))
              }
            >
              <span className="exp-nav-pods-mega__mobile-region-label">
                <span className="exp-nav-pods-mega__mobile-region-title">
                  {region.title}
                </span>
                <span className="exp-nav-pods-mega__mobile-region-sub">
                  {region.subtitle}
                </span>
              </span>
              <span
                className={`exp-nav-pods-mega__chevron exp-nav-pods-mega__chevron--region${expanded ? " exp-nav-pods-mega__chevron--open" : ""}`}
                aria-hidden
              />
            </button>
            <div
              id={sectionId}
              role="region"
              aria-labelledby={`${sectionId}-btn`}
              className={`exp-nav-pods-mega__mobile-region-body${expanded ? " exp-nav-pods-mega__mobile-region-body--open" : ""}`}
            >
              <div className="exp-nav-pods-mega__mobile-region-body-inner">
                <ul className="exp-nav-pods-mega__mobile-pod-list">
                  {region.pods.map((pod) => (
                    <li key={pod.slug}>
                      <Link
                        className="exp-nav-pods-mega__mobile-pod-link"
                        href={podHref(pod.href, pathname)}
                        onClick={onNavigate}
                      >
                        <span className="exp-nav-mega__link-title">{pod.title}</span>
                        <span className="exp-nav-mega__link-sub">{pod.pill}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function AdventureWildlifeChrome({
  navItems,
  hashInPageAnchorsNative = false,
  children,
}: {
  navItems: NavItem[];
  hashInPageAnchorsNative?: boolean;
  children: ReactNode;
}) {
  const isWide = useWideExperienceNav();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerEntered, setDrawerEntered] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [podsOpen, setPodsOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const drawerPanelId = useId();
  const expPanelId = useId();
  const expTriggerId = useId();
  const podsPanelId = useId();
  const podsTriggerId = useId();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setDrawerEntered(false);
    setExperiencesOpen(false);
    setPodsOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((o) => !o);
  }, []);

  useEffect(() => {
    if (isWide) closeDrawer();
  }, [isWide, closeDrawer]);

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

  const currentSlug = experienceSlugFromPathname(pathname);
  const experienceItems = EXPERIENCE_MEGA_ENTRIES.filter(
    (e) => e.slug !== currentSlug,
  );

  const whatToDoItem =
    navItems.find((i) => i.href === "#experiences-carousel") ?? {
      href: "#experiences-carousel",
      label: "What to do",
    };
  const faqItem =
    navItems.find((i) => i.href === "#faq") ?? {
      href: "#faq",
      label: "FAQ",
    };

  const toggleExperiences = useCallback(() => {
    setExperiencesOpen((prev) => {
      const next = !prev;
      if (next) setPodsOpen(false);
      return next;
    });
  }, []);

  const togglePods = useCallback(() => {
    setPodsOpen((prev) => {
      const next = !prev;
      if (next) setExperiencesOpen(false);
      return next;
    });
  }, []);

  const renderDesktopNavLinks = () =>
    navItems.map((l) =>
      hashInPageAnchorsNative && l.href.startsWith("#") ? (
        <a key={l.href + l.label} href={l.href}>
          {l.label}
        </a>
      ) : (
        <Link key={l.href + l.label} href={l.href}>
          {l.label}
        </Link>
      ),
    );

  const bookHref = "https://purepods.com/booking/?cart=Checkout";

  return (
    <>
      {isWide ? (
        <header className="nav nav--solid" role="banner" aria-label="Main navigation">
          <div className="nav__bar">
            <Link className="nav-brand" href="/" aria-label="PurePods — Home">
              <Image
                src="/assets/img/LogoPCverdesinfondo.png"
                alt="PurePods"
                width={603}
                height={414}
                sizes="(max-width: 820px) min(200px, 52vw), min(200px, 42vw)"
                decoding="async"
                priority
              />
            </Link>
            <nav className="nav__links links" aria-label="Primary">
              <ExpExperiencesMega />
              <ExpPodsMega />
              {renderDesktopNavLinks()}
            </nav>
            <a
              className="nav__book"
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </div>
        </header>
      ) : (
        <>
          <header
            className={`nav nav--solid aw-mnav${drawerOpen ? " aw-mnav--open" : ""}`}
            role="banner"
            aria-label="Main navigation"
          >
            <div className="aw-mnav__bar">
              <Link
                className="nav-brand aw-mnav__brand"
                href="/"
                aria-label="PurePods — Home"
              >
                <Image
                  src="/assets/img/LogoPCverdesinfondo.png"
                  alt="PurePods"
                  width={603}
                  height={414}
                  sizes="min(200px, 46vw)"
                  decoding="async"
                  priority
                />
              </Link>
              <div className="aw-mnav__actions">
                <a
                  className="nav__book aw-mnav__book"
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book
                </a>
                <button
                  type="button"
                  className="aw-mnav__toggle"
                  aria-expanded={drawerOpen}
                  aria-controls={drawerPanelId}
                  onClick={toggleDrawer}
                >
                  <span className="visually-hidden">
                    {drawerOpen ? "Close menu" : "Open menu"}
                  </span>
                  <span className="aw-mnav__toggle-bars" aria-hidden>
                    <span className="aw-mnav__toggle-bar" />
                    <span className="aw-mnav__toggle-bar" />
                    <span className="aw-mnav__toggle-bar" />
                  </span>
                </button>
              </div>
            </div>
          </header>

          {drawerOpen ? (
            <div
              className={`aw-mnav-drawer${drawerEntered ? " aw-mnav-drawer--visible" : ""}`}
              id={drawerPanelId}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <button
                type="button"
                className="aw-mnav-drawer__backdrop"
                aria-label="Close menu"
                onClick={closeDrawer}
              />
              <div className="aw-mnav-drawer__panel">
                <div className="aw-mnav-drawer__panel-top">
                  <button
                    type="button"
                    className="aw-mnav-drawer__close"
                    onClick={closeDrawer}
                    aria-label="Close menu"
                  >
                    <span aria-hidden>×</span>
                  </button>
                </div>
                <div className="aw-mnav-drawer__scroll">
                  <nav className="aw-mnav-drawer__nav" aria-label="Primary">
                    {hashInPageAnchorsNative ? (
                      <a
                        className="aw-mnav-drawer__link aw-mnav-drawer__link--primary"
                        href={whatToDoItem.href}
                        onClick={closeDrawer}
                      >
                        {whatToDoItem.label}
                      </a>
                    ) : (
                      <Link
                        className="aw-mnav-drawer__link aw-mnav-drawer__link--primary"
                        href={whatToDoItem.href}
                        onClick={closeDrawer}
                      >
                        {whatToDoItem.label}
                      </Link>
                    )}

                    <div className="aw-mnav-disclosure">
                      <button
                        type="button"
                        id={expTriggerId}
                        className="aw-mnav-disclosure__trigger"
                        aria-expanded={experiencesOpen}
                        aria-controls={expPanelId}
                        onClick={toggleExperiences}
                      >
                        <span className="aw-mnav-disclosure__label">Experiences</span>
                        <span
                          className={`aw-mnav-disclosure__chevron${experiencesOpen ? " aw-mnav-disclosure__chevron--open" : ""}`}
                          aria-hidden
                        />
                      </button>
                      <div
                        id={expPanelId}
                        role="region"
                        aria-labelledby={expTriggerId}
                        hidden={!experiencesOpen}
                        className="aw-mnav-disclosure__panel"
                      >
                        <ul className="aw-mnav-drawer__sublist" role="list">
                          {experienceItems.map((item) => (
                            <li key={item.slug}>
                              <Link
                                className="aw-mnav-drawer__sublink"
                                href={item.href}
                                onClick={closeDrawer}
                              >
                                <span className="exp-nav-mega__link-title">
                                  {item.title}
                                </span>
                                <span className="exp-nav-mega__link-sub">
                                  {item.subtitle}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          className="aw-mnav-drawer__view-all aw-mnav-drawer__view-all--inset"
                          href="/experiences"
                          onClick={closeDrawer}
                        >
                          View all experiences
                        </Link>
                      </div>
                    </div>

                    <div className="aw-mnav-disclosure">
                      <button
                        type="button"
                        id={podsTriggerId}
                        className="aw-mnav-disclosure__trigger"
                        aria-expanded={podsOpen}
                        aria-controls={podsPanelId}
                        onClick={togglePods}
                      >
                        <span className="aw-mnav-disclosure__label">Pods</span>
                        <span
                          className={`aw-mnav-disclosure__chevron${podsOpen ? " aw-mnav-disclosure__chevron--open" : ""}`}
                          aria-hidden
                        />
                      </button>
                      <div
                        id={podsPanelId}
                        role="region"
                        aria-labelledby={podsTriggerId}
                        hidden={!podsOpen}
                        className="aw-mnav-disclosure__panel"
                      >
                        <AdventureWildlifeDrawerPods
                          pathname={pathname}
                          onNavigate={closeDrawer}
                          podsOpen={podsOpen}
                        />
                        <Link
                          className="aw-mnav-drawer__view-all aw-mnav-drawer__view-all--inset"
                          href="/pods"
                          onClick={closeDrawer}
                        >
                          View all pods
                        </Link>
                      </div>
                    </div>

                    {hashInPageAnchorsNative ? (
                      <a
                        className="aw-mnav-drawer__link aw-mnav-drawer__link--primary"
                        href={faqItem.href}
                        onClick={closeDrawer}
                      >
                        {faqItem.label}
                      </a>
                    ) : (
                      <Link
                        className="aw-mnav-drawer__link aw-mnav-drawer__link--primary"
                        href={faqItem.href}
                        onClick={closeDrawer}
                      >
                        {faqItem.label}
                      </Link>
                    )}
                  </nav>

                  <div className="aw-mnav-drawer__cta-wrap">
                    <a
                      className="aw-mnav-drawer__cta"
                      href={bookHref}
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
        </>
      )}

      {children}

      <footer>
        <div className="wrap foot">
          <div className="foot-brand">
            <Image
              src="/assets/img/purepods-logo-new-zealand.jpg"
              width={28}
              height={28}
              alt="PurePods New Zealand"
            />
            <div>
              PurePods · <Link href="/">Home</Link> · <Link href="/pods">Pods</Link> ·{" "}
              <Link href="/experiences">Experiences</Link> ·{" "}
              <a
                href="https://purepods.com/booking/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </a>
            </div>
          </div>
          <div>© PurePods</div>
        </div>
      </footer>
    </>
  );
}
