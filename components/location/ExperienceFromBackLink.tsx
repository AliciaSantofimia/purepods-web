import Link from "next/link";
import { getExperienceFromNav } from "@/lib/experiencesData/experienceFromNav";
import styles from "@/app/location/locationLayout.module.css";

type Props = { from?: string | string[] | null };

export function ExperienceFromBackLink({ from }: Props) {
  const raw = Array.isArray(from) ? from[0] : from;
  const nav = getExperienceFromNav(raw);
  if (!nav) return null;

  return (
    <div
      className={styles.locationFromBar}
      role="navigation"
      aria-label="Return to experience"
    >
      <div className={styles.locationFromBarInner}>
        <Link className={styles.locationFromLink} href={nav.href}>
          ← Back to {nav.label}
        </Link>
      </div>
    </div>
  );
}
