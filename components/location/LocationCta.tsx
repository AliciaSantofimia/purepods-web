import Link from "next/link";
import { Button } from "@/components/ui";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./LocationCta.module.css";

interface LocationCtaProps {
  priceFrom: string;
  /** Pod-specific booking: use BOOKING_URL (force_site_id=16) per agent.md */
  bookHref?: string;
}

export function LocationCta({
  priceFrom,
  bookHref = BOOKING_URL,
}: LocationCtaProps) {
  return (
    <div className={styles.cta} id="reserve">
      <div className={styles.inner}>
        <span className={styles.price}>{priceFrom}</span>
        <Button href="/pods" variant="secondary" className={styles.btn}>
          View other pods
        </Button>
        <Button
          href={bookHref}
          external
          variant="primary"
          className={styles.btn}
        >
          Book now
        </Button>
      </div>
    </div>
  );
}
