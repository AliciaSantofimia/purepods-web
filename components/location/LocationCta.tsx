import { Button } from "@/components/ui";
import { BOOKING_URL } from "@/lib/constants";
import styles from "./LocationCta.module.css";

interface LocationCtaProps {
  /** Pod-specific booking: use BOOKING_URL (force_site_id=16) per agent.md */
  bookHref?: string;
}

/** Shown instead of a fixed nightly rate — live pricing comes from NewBook after “Book now”. */
const CTA_AVAILABILITY_COPY = "Check availability & rates";

export function LocationCta({ bookHref = BOOKING_URL }: LocationCtaProps) {
  return (
    <div className={styles.cta} id="reserve">
      <div className={styles.inner}>
        <span className={styles.price}>{CTA_AVAILABILITY_COPY}</span>
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
