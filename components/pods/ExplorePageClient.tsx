"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ExploreIslandFilter, ExplorePodCard } from "@/lib/podsExploreData";
import styles from "@/app/pods/explore.module.css";

const TABS: { filter: ExploreIslandFilter; label: string }[] = [
  { filter: "north", label: "North Island" },
  { filter: "south", label: "South Island" },
  { filter: "stewart", label: "Stewart Island" },
];

export function ExplorePageClient({ pods }: { pods: ExplorePodCard[] }) {
  const [filter, setFilter] = useState<ExploreIslandFilter>("north");

  const visiblePods = useMemo(
    () => pods.filter((p) => p.filter === filter),
    [pods, filter],
  );

  const countLabel = useMemo(() => {
    const n = visiblePods.length;
    return `${n} ${n === 1 ? "pod" : "pods"}`;
  }, [visiblePods.length]);

  return (
    <>
      <div className={styles.tabsWrap}>
        <div className="wrap">
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Filter by island"
          >
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

        <div className={styles.grid}>
          {visiblePods.map((pod, index) => (
            <Link
              key={pod.slug}
              href={pod.href}
              className={styles.pod}
              data-island={pod.filter}
              prefetch={false}
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
          ))}
        </div>
      </section>
    </>
  );
}
