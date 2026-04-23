"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ExploreIslandFilter, ExplorePodCard } from "@/lib/podsExploreData";
import styles from "@/app/pods/explore.module.css";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import { ExploreNzMapPanelExperimental } from "@/components/pods/ExploreNzMapPanelExperimental";
import { attachMapPinsToExplorePods, hasValidMapPin } from "@/lib/exploreMapPinsExperimental";

const TABS: { filter: ExploreIslandFilter; label: string }[] = [
  { filter: "north", label: "North Island" },
  { filter: "south", label: "South Island" },
  { filter: "stewart", label: "Stewart Island" },
];

export function ExplorePageWithMapClient({ pods }: { pods: ExplorePodCard[] }) {
  const [filter, setFilter] = useState<ExploreIslandFilter>("north");
  /** Pointer / keyboard focus from map or cards */
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);
  /** Card most visible in viewport (scroll-linked marker cue) */
  const [scrollSlug, setScrollSlug] = useState<string | null>(null);

  const splitRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const rafId = useRef(0);

  const podsWithPins = useMemo(() => attachMapPinsToExplorePods(pods), [pods]);

  const visiblePods = useMemo(() => {
    if (filter === "south") {
      return podsWithPins.filter((p) => p.filter === "south");
    }
    return podsWithPins.filter((p) => p.filter === filter);
  }, [podsWithPins, filter]);

  const mapPods = useMemo(() => visiblePods.filter(hasValidMapPin), [visiblePods]);

  const visibleSlugsKey = useMemo(() => visiblePods.map((p) => p.slug).join("\0"), [visiblePods]);

  const countLabel = useMemo(() => {
    const n = visiblePods.length;
    return `${n} ${n === 1 ? "pod" : "pods"}`;
  }, [visiblePods.length]);

  const markerHighlightSlug = hoverSlug ?? scrollSlug;

  const setHover = useCallback((slug: string | null) => {
    setHoverSlug(slug);
  }, []);

  useEffect(() => {
    setScrollSlug(null);
    ratiosRef.current.clear();
  }, [filter]);

  useEffect(() => {
    const root = splitRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const cards = root.querySelectorAll<HTMLElement>("[data-map-card]");
    if (!cards.length) return;

    const flush = () => {
      let best: string | null = null;
      let bestR = 0;
      ratiosRef.current.forEach((r, slug) => {
        if (r > bestR) {
          bestR = r;
          best = slug;
        }
      });
      setScrollSlug(bestR >= 0.14 ? best : null);
    };

    const schedule = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0;
        flush();
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const slug = (e.target as HTMLElement).dataset.podSlug;
          if (!slug) continue;
          if (e.isIntersecting && e.intersectionRatio > 0) {
            ratiosRef.current.set(slug, e.intersectionRatio);
          } else {
            ratiosRef.current.delete(slug);
          }
        }
        schedule();
      },
      {
        threshold: [0, 0.1, 0.18, 0.28, 0.42, 0.55, 0.72],
        rootMargin: "-8% 0px -12% 0px",
      },
    );

    cards.forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    };
  }, [visibleSlugsKey, filter]);

  return (
    <>
      <div className={styles.tabsWrap}>
        <div className="wrap">
          <div className={styles.tabs} role="tablist" aria-label="Filter by island">
            {TABS.map((t) => (
              <button
                key={t.filter}
                type="button"
                role="tab"
                aria-selected={filter === t.filter}
                className={`${styles.tab} ${filter === t.filter ? styles.tabActive : ""}`}
                data-filter={t.filter}
                onClick={() => setFilter(t.filter)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.count} aria-live="polite">
            {countLabel}
          </div>
        </div>

        <div
          ref={splitRef}
          className={xstyles.split}
          onMouseLeave={() => setHoverSlug(null)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHoverSlug(null);
          }}
        >
          <aside className={xstyles.splitMap} aria-label="Map of pod locations">
            <ExploreNzMapPanelExperimental
              pods={mapPods.map((p) => ({
                slug: p.slug,
                title: p.title,
                pill: p.pill,
                lat: p.lat,
                lon: p.lon,
                href: p.href,
              }))}
              highlightSlug={markerHighlightSlug}
              onHighlightSlug={setHover}
            />
          </aside>

          <div className={xstyles.splitCards}>
            <div className={styles.grid}>
              {visiblePods.map((pod, index) => {
                const isHover = hoverSlug === pod.slug;
                const isScrollCue = scrollSlug === pod.slug && !hoverSlug;
                return (
                  <Link
                    key={pod.slug}
                    href={pod.href}
                    className={`${styles.pod} ${isHover ? xstyles.podMapHighlight : ""} ${isScrollCue ? xstyles.podScrollCue : ""}`}
                    data-island={pod.filter}
                    data-map-card
                    data-pod-slug={pod.slug}
                    prefetch={false}
                    onMouseEnter={() => setHover(pod.slug)}
                    onFocus={() => setHover(pod.slug)}
                  >
                    <div className={styles.media}>
                      <Image
                        src={pod.imageSrc}
                        alt={pod.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: pod.imagePosition ?? "center 35%",
                        }}
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                        decoding="async"
                      />
                    </div>
                    <div className={styles.body}>
                      <span className={styles.pill}>{pod.pill}</span>
                      <h3 className={styles.podTitle}>{pod.title}</h3>
                      <div className={styles.meta}>{pod.islandLine}</div>
                      <div className={styles.spacer} />
                      <span className={styles.cta}>View details →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
