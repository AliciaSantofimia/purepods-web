"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useExpNavIsDesktop } from "@/components/experiences/useExpNavIsDesktop";
import { getExperienceFromNav } from "@/lib/experiencesData/experienceFromNav";
import styles from "./Header.module.css";

/**
 * On `/location/*`: show "← All Pods" unless a valid `?from=` is present on **narrow** viewports,
 * where `ExperienceFromBackLink` handles return (header pill hidden to avoid duplication).
 * On **desktop** with `from=`, the contextual row is CSS-hidden — show this link again for wayfinding.
 */
export function LocationPodHeaderBack() {
  const searchParams = useSearchParams();
  const isDesktop = useExpNavIsDesktop();
  const from = searchParams.get("from");
  const hasExperienceReturn = !!getExperienceFromNav(from);
  if (hasExperienceReturn && !isDesktop) return null;
  return (
    <Link className={styles.back} href="/pods">
      ← All Pods
    </Link>
  );
}
