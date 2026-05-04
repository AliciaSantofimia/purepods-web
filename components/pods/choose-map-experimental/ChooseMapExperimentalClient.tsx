"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "@/app/pods/explore.module.css";
import xstyles from "@/components/pods/ExplorePageWithMapExperimental.module.css";
import {
  CHOOSE_MAP_EXPERIMENTAL_PODS,
  type ChooseMapPod,
  type ChooseMapRegion,
} from "@/lib/chooseMapExperimentalData";
import chooseMapStyles from "./chooseMapExperimental.module.css";

/** Same shell as production map column while the Leaflet chunk loads (dynamic ssr: false). */
function MapPlaceholder() {
  return (
    <div className={`${xstyles.exmapShell} ${chooseMapStyles.chooseMapLeafTune}`} aria-busy="true">
      <p className={xstyles.exmapCaption}>New Zealand</p>
      <div className={xstyles.exmapMap} />
    </div>
  );
}

const ChooseMapLeafletMap = dynamic(
  () => import(/* webpackChunkName: "choose-map-leaflet" */ "./ChooseMapLeafletMap"),
  {
    ssr: false,
    loading: () => <MapPlaceholder />,
  },
);

const TABS: { filter: ChooseMapRegion; label: string }[] = [
  { filter: "north", label: "North Island" },
  { filter: "south", label: "South Island" },
  { filter: "stewart", label: "Stewart Island" },
];

type ClientProps = { initialRegion: ChooseMapRegion };

export function ChooseMapExperimentalClient({ initialRegion }: ClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState<ChooseMapRegion>(initialRegion);
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);
  const [scrollSlug, setScrollSlug] = useState<string | null>(null);

  useEffect(() => {
    setFilter((prev) => (prev === initialRegion ? prev : initialRegion));
  }, [initialRegion]);

  const setIslandTab = useCallback(
    (next: ChooseMapRegion) => {
      setFilter(next);
      const path = pathname || "/pods";
      router.replace(`${path}?region=${next}`, { scroll: false });
    },
    [router, pathname],
  );

  const splitRef = useRef<HTMLDivElement>(null);
  const cardsScrollerRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const rafId = useRef(0);

  const [compactLayout, setCompactLayout] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 980px)").matches;
  });

  const visiblePods = useMemo(
    () => CHOOSE_MAP_EXPERIMENTAL_PODS.filter((p) => p.filter === filter),
    [filter],
  );

  const visibleSlugsKey = useMemo(() => visiblePods.map((p) => p.slug).join("\0"), [visiblePods]);

  const countLabel = useMemo(() => {
    const n = visiblePods.length;
    return `${n} ${n === 1 ? "pod" : "pods"}`;
  }, [visiblePods.length]);

  const markerHighlightSlug = hoverSlug ?? scrollSlug;

  const setHoverFromMapPin = useCallback((slug: string | null) => {
    setHoverSlug(slug);
  }, []);

  useEffect(() => {
    setScrollSlug(null);
    ratiosRef.current.clear();
  }, [filter]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 980px)");
    const sync = () => setCompactLayout(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const scroller = cardsScrollerRef.current;
    if (!scroller || typeof IntersectionObserver === "undefined") return;

    const cards = scroller.querySelectorAll<HTMLElement>("[data-map-card]");
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

    const ioRoot: Element | null = compactLayout ? null : scroller;
    const rootMargin = compactLayout ? "-12% 0px -18% 0px" : "-10% 0px -14% 0px";

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
        root: ioRoot,
        threshold: [0, 0.1, 0.18, 0.28, 0.42, 0.55, 0.72],
        rootMargin,
      },
    );

    cards.forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    };
  }, [visibleSlugsKey, filter, compactLayout]);

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
                onClick={() => setIslandTab(t.filter)}
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
          className={`${xstyles.split} ${chooseMapStyles.chooseMapPodsLayout}`}
          onMouseLeave={() => setHoverSlug(null)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHoverSlug(null);
          }}
        >
          <aside className={xstyles.splitMap} aria-label="Map of pod locations">
            <ChooseMapLeafletMap
              pods={visiblePods}
              region={filter}
              highlightSlug={markerHighlightSlug}
              onHighlightSlug={setHoverFromMapPin}
            />
          </aside>

          <div className={`${xstyles.splitCards} ${chooseMapStyles.chooseMapPodsCards}`}>
            <div ref={cardsScrollerRef} className={chooseMapStyles.chooseMapCardsScroll}>
              <div className={styles.grid}>
              {visiblePods.map((pod: ChooseMapPod, index: number) => {
                const isHover = hoverSlug === pod.slug;
                const isScrollCue = scrollSlug === pod.slug && !hoverSlug;
                return (
                  <Link
                    key={pod.slug}
                    href={pod.href}
                    className={`${styles.pod} ${isHover ? xstyles.podMapHighlight : ""} ${isHover ? chooseMapStyles.chooseMapPodLinkActive : ""} ${isScrollCue ? xstyles.podScrollCue : ""}`}
                    data-island={pod.filter}
                    data-map-card
                    data-pod-slug={pod.slug}
                    prefetch={false}
                    onMouseEnter={() => setHoverSlug(pod.slug)}
                    onFocus={() => setHoverSlug(pod.slug)}
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
        </div>
      </section>
    </>
  );
}
