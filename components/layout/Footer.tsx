import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_URL,
  PUREPODS_FACEBOOK_URL,
  PUREPODS_INSTAGRAM_URL,
} from "@/lib/constants";
import { FooterSubscribe } from "@/components/layout/FooterSubscribe";
import styles from "./Footer.module.css";

/** Same asset as `AdventureWildlifeChrome` nav brand (header). */
const HEADER_BRAND_LOGO_SRC = "/assets/img/LogoPCverdesinfondo.png";

export type FooterProps = {
  /** When true, show the header-matching logo instead of the “PurePods” wordmark. */
  brandLogo?: boolean;
  /** Minimal footer variant for editorial landing pages. */
  simplified?: boolean;
};

const informationalLinks = [
  { href: "/our-story/", label: "Our Story" },
  { href: "/frequently-asked-questions/", label: "FAQ" },
  { href: "/contact-us/", label: "Contact Us" },
] as const;

const legalLinks = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-of-service/", label: "Terms of Service" },
  { href: "/refunds/", label: "Refund Policy" },
] as const;

export function Footer({ brandLogo = false, simplified = false }: FooterProps) {
  return (
    <footer
      className={`${styles.footer}${simplified ? ` ${styles.footerSimple}` : ""}`}
      role="contentinfo"
    >
      <div className={styles.wrap}>
        <div className={styles.brand}>
          {brandLogo ? (
            <Link
              href="/"
              className={styles.brandLogoLink}
              aria-label="PurePods — Home"
            >
              <Image
                src={HEADER_BRAND_LOGO_SRC}
                alt=""
                width={603}
                height={414}
                className={styles.brandLogoImg}
                sizes="(max-width: 480px) 112px, 128px"
              />
            </Link>
          ) : (
            <Link href="/">PurePods</Link>
          )}
        </div>
        {simplified ? (
          <>
            <div className={`${styles.social} ${styles.socialFeatured}`}>
              <p className={styles.socialLabel}>Follow PurePods</p>
              <div className={styles.socialLinks}>
                <a
                  className={styles.socialLink}
                  href={PUREPODS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PurePods on Instagram"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="2.75"
                      y="2.75"
                      width="18.5"
                      height="18.5"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4.25"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.1"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  className={styles.socialLink}
                  href={PUREPODS_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PurePods on Facebook"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            <nav className={styles.infoLinks} aria-label="Footer information">
              {informationalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className={styles.legalLinks} aria-label="Footer legal">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </>
        ) : (
          <>
            <nav className={styles.nav} aria-label="Footer">
              <Link href="/pods">Pods</Link>
              <Link href="/experiences">Experiences</Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book
              </a>
            </nav>
            <FooterSubscribe />
            <div className={styles.social}>
              <p className={styles.socialLabel}>Stay connected with PurePods</p>
              <div className={styles.socialLinks}>
                <a
                  className={styles.socialLink}
                  href={PUREPODS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PurePods on Instagram"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="2.75"
                      y="2.75"
                      width="18.5"
                      height="18.5"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4.25"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.1"
                      stroke="currentColor"
                      strokeWidth="1.35"
                    />
                  </svg>
                </a>
                <a
                  className={styles.socialLink}
                  href={PUREPODS_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PurePods on Facebook"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <p className={styles.copy}>
              Unique accommodation experiences in the natural landscapes of New
              Zealand.
            </p>
          </>
        )}
      </div>
    </footer>
  );
}
