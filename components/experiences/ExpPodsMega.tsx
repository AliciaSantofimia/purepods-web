"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useExpNavIsDesktop } from "@/components/experiences/useExpNavIsDesktop";
import { withExperienceFromParam } from "@/lib/experiencesData/experienceFromNav";
import { experienceSlugFromPathname } from "@/lib/experiencesData/experienceNavMega";
import {
  getPodsMegaRegions,
  type PodsMegaRegionId,
} from "@/lib/experiencesData/podsNavMegaData";

function podHref(podPath: string, pathname: string) {
  const fromSlug = experienceSlugFromPathname(pathname);
  if (!fromSlug) return podPath;
  return withExperienceFromParam(podPath, fromSlug);
}

export function ExpPodsMega() {
  const pathname = usePathname() ?? "";
  const isDesktop = useExpNavIsDesktop();
  const regions = getPodsMegaRegions();

  return isDesktop ? (
    <ExpPodsMegaDesktop regions={regions} pathname={pathname} />
  ) : (
    <ExpPodsMegaMobile regions={regions} pathname={pathname} />
  );
}

function ExpPodsMegaDesktop({
  regions,
  pathname,
}: {
  regions: ReturnType<typeof getPodsMegaRegions>;
  pathname: string;
}) {
  return (
    <div className="exp-nav-pods-mega">
      <button type="button" className="exp-nav-pods-mega__trigger" aria-haspopup="menu">
        Pods
      </button>
      <div className="exp-nav-pods-mega__dropdown" role="presentation">
        <div className="exp-nav-pods-mega__panel">
          <div className="exp-nav-pods-mega__cols" role="list">
            {regions.map((region) => (
              <div key={region.id} className="exp-nav-pods-mega__col" role="listitem">
                <div className="exp-nav-pods-mega__col-head">
                  <span className="exp-nav-pods-mega__col-title">{region.title}</span>
                  <span className="exp-nav-pods-mega__col-sub">{region.subtitle}</span>
                </div>
                <ul className="exp-nav-pods-mega__list">
                  {region.pods.map((pod) => (
                    <li key={pod.slug}>
                      <Link className="exp-nav-mega__link" href={podHref(pod.href, pathname)}>
                        <span className="exp-nav-mega__link-title">{pod.title}</span>
                        <span className="exp-nav-mega__link-sub">{pod.pill}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link className="exp-nav-pods-mega__all" href="/pods/explore-map-experimental-v2">
            View all pods
          </Link>
        </div>
      </div>
    </div>
  );
}

function ExpPodsMegaMobile({
  regions,
  pathname,
}: {
  regions: ReturnType<typeof getPodsMegaRegions>;
  pathname: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRegion, setOpenRegion] = useState<PodsMegaRegionId | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenRegion(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((o) => !o);
    setOpenRegion(null);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onDocPointerDown(e: PointerEvent) {
      const el = rootRef.current;
      if (el && !el.contains(e.target as Node)) closeMenu();
    }
    document.addEventListener("pointerdown", onDocPointerDown, true);
    return () => document.removeEventListener("pointerdown", onDocPointerDown, true);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <div
      ref={rootRef}
      className={`exp-nav-pods-mega exp-nav-pods-mega--mobile${menuOpen ? " exp-nav-pods-mega--mobile-open" : ""}`}
    >
      <button
        type="button"
        className="exp-nav-pods-mega__trigger exp-nav-pods-mega__trigger--mobile"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-controls={panelId}
        onClick={toggleMenu}
      >
        <span>Pods</span>
        <span className="exp-nav-pods-mega__chevron" aria-hidden />
      </button>
      <div id={panelId} className="exp-nav-pods-mega__mobile-panel" aria-hidden={!menuOpen}>
        <div className="exp-nav-pods-mega__mobile-panel-inner">
          <div className="exp-nav-pods-mega__mobile-scroll">
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
                    onClick={() => setOpenRegion((r) => (r === region.id ? null : region.id))}
                  >
                    <span className="exp-nav-pods-mega__mobile-region-label">
                      <span className="exp-nav-pods-mega__mobile-region-title">{region.title}</span>
                      <span className="exp-nav-pods-mega__mobile-region-sub">{region.subtitle}</span>
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
                              onClick={closeMenu}
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
            <Link className="exp-nav-pods-mega__mobile-all" href="/pods/explore-map-experimental-v2" onClick={closeMenu}>
              View all pods
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
