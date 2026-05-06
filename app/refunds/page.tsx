import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import styles from "@/app/privacy-policy/page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Refund Policy | PurePods",
  },
  description:
    "Read the PurePods Refund Policy for accommodation bookings, food hamper bookings, specials and discounts.",
  alternates: { canonical: "/refunds/" },
};

export default function RefundsPage() {
  return (
    <>
      <FaqHeader />
      <main className={styles.page}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1>Refund Policy</h1>
            <p>
              We understand that sometimes plans change. Here&rsquo;s everything
              you need to know about amending or cancelling your PurePod booking.
            </p>
          </header>

          <section className={styles.section}>
            <h2>Accommodation Bookings</h2>
            <ul>
              <li>
                You can amend or cancel your booking free of charge up to 14
                days before your reserved stay.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Food Hamper Bookings</h2>
            <ul>
              <li>
                You can cancel your food hamper booking and receive a full
                refund up to 14 days before your arrival.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Specials &amp; Discounts</h2>
            <p>
              The terms of specials and discounts may vary and will always be
              subject to availability, require payment in full and have
              restricted cancellation terms.
            </p>
            <p>Please see your confirmation for details.</p>
          </section>

          <section className={styles.section}>
            <p>
              If you need help amending or cancelling your booking, just get in
              touch with us. We&rsquo;re here to help.
            </p>
          </section>
        </article>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
