import type { Metadata } from "next";
import styles from "./booking.module.css";

export const metadata: Metadata = {
  title: "Book your stay",
  description: "Book your PurePods experience. Select your pod and dates.",
};

/**
 * Booking page — restricted modification zone (agent.md).
 * The Newbook engine is embedded here. Preserve:
 * - The container id: newbook_content-container
 * - Do not replace with custom booking UI or logic.
 */
export default function BookingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Book your stay</h1>
        <p className={styles.intro}>
          Select your pod and dates. Availability and pricing are managed by our
          booking system.
        </p>
        {/* Required by Newbook integration — do not remove or rename */}
        <div id="newbook_content-container" className={styles.container} />
      </div>
    </div>
  );
}
