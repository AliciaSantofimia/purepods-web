"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EXPERIENCE_MEGA_ENTRIES,
  experienceSlugFromPathname,
} from "@/lib/experiencesData/experienceNavMega";

export function ExpExperiencesMega() {
  const pathname = usePathname() ?? "";
  const currentSlug = experienceSlugFromPathname(pathname);
  const items = EXPERIENCE_MEGA_ENTRIES.filter((e) => e.slug !== currentSlug);

  return (
    <div className="exp-nav-mega">
      <button type="button" className="exp-nav-mega__trigger" aria-haspopup="menu">
        Experiences
      </button>
      <div className="exp-nav-mega__dropdown" role="presentation">
        <div className="exp-nav-mega__panel">
          <ul className="exp-nav-mega__list" role="list">
            {items.map((item) => (
              <li key={item.slug}>
                <Link className="exp-nav-mega__link" href={item.href}>
                  <span className="exp-nav-mega__link-title">{item.title}</span>
                  <span className="exp-nav-mega__link-sub">{item.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="exp-nav-mega__all" href="/experiences">
            View all experiences
          </Link>
        </div>
      </div>
    </div>
  );
}
