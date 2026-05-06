import Link from "next/link";
import { Button } from "@/components/ui";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./LocationCta.module.css";

interface LocationCtaProps {
  priceFrom: string | number;
  /** Pod-specific booking: use BOOKING_URL (force_site_id=16) per agent.md */
  bookHref?: string;
}

const DEFAULT_FROM_PRICE_NZD = 890;

function formatPriceFrom(priceFrom: string | number): string {
  if (typeof priceFrom === "number" && Number.isFinite(priceFrom)) {
    const normalized =
      Math.floor(priceFrom) === priceFrom
        ? priceFrom.toFixed(0)
        : priceFrom.toFixed(2);
    return `From $${normalized} NZD / night`;
  }

  const matched = priceFrom.match(/(\d[\d,.]*)/);
  if (matched) {
    const parsed = Number.parseFloat(matched[1].replaceAll(",", ""));
    if (Number.isFinite(parsed)) {
      const normalized =
        Math.floor(parsed) === parsed ? parsed.toFixed(0) : parsed.toFixed(2);
      return `From $${normalized} NZD / night`;
    }
  }

  return `From $${DEFAULT_FROM_PRICE_NZD} NZD / night`;
}

export function LocationCta({
  priceFrom,
  bookHref = BOOKING_URL,
}: LocationCtaProps) {
  return (
    <div className={styles.cta} id="reserve">
      <div className={styles.inner}>
        <span className={styles.price}>{formatPriceFrom(priceFrom)}</span>
        <Button
          href={bookHref}
          external
          variant="primary"
          className={styles.btn}
        >
          Book now
        </Button>
        <Button href="/pods" variant="secondary" className={styles.btn}>
          View other pods
        </Button>
      </div>
    </div>
  );
}
