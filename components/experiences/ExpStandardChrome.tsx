import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ExpExperiencesMega } from "@/components/experiences/ExpExperiencesMega";
import { ExpPodsMega } from "@/components/experiences/ExpPodsMega";
import { Footer } from "@/components/layout/Footer";

type NavItem = { href: string; label: string };

export function ExpStandardChrome({
  navItems,
  children,
  hashInPageAnchorsNative = false,
}: {
  navItems: NavItem[];
  children: ReactNode;
  /** When true, `href` values starting with `#` render as `<a>` for reliable in-page scroll (optional per page). */
  hashInPageAnchorsNative?: boolean;
}) {
  return (
    <>
      <header className="nav nav--solid" role="banner" aria-label="Main navigation">
        <div className="nav__bar">
          <Link className="nav-brand" href="/" aria-label="PurePods — Home">
            <Image
              src="/assets/img/LogoPCverdesinfondo.png"
              alt="PurePods"
              width={603}
              height={414}
              sizes="(max-width: 720px) min(200px, 52vw), min(200px, 42vw)"
              decoding="async"
              priority
            />
          </Link>
          <nav className="nav__links links" aria-label="Primary">
            <ExpExperiencesMega />
            <ExpPodsMega />
            {navItems.map((l) =>
              hashInPageAnchorsNative && l.href.startsWith("#") ? (
                <a key={l.href + l.label} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.href + l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </nav>
          <a
            className="nav__book"
            href="https://purepods.com/booking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
        </div>
      </header>
      {children}
      <Footer brandLogo simplified />
    </>
  );
}
