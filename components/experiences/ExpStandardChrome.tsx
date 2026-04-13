import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type NavItem = { href: string; label: string };

export function ExpStandardChrome({
  navItems,
  children,
}: {
  navItems: NavItem[];
  children: ReactNode;
}) {
  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label="PurePods Home">
            <Image
              src="/assets/img/purepods-logo-new-zealand.jpg"
              width={42}
              height={42}
              alt="PurePods logo"
            />
            <b>PurePods</b>
          </Link>
          <div className="links">
            {navItems.map((l) => (
              <Link key={l.href + l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
            <a
              className="btn-primary"
              href="https://purepods.com/booking/?cart=Checkout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </div>
        </div>
      </nav>
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
              <a href="https://purepods.com/booking/" target="_blank" rel="noopener noreferrer">
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
