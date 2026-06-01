import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import styles from "@/app/privacy-policy/page.module.css";

const CANONICAL = "https://purepods.com/terms-of-service";
const SEO_TITLE = "Terms of Service | PurePods";
const META_DESCRIPTION =
  "Read the PurePods Terms of Service for website use, bookings, guest responsibilities and stays at PurePod locations across New Zealand.";
const SOCIAL_IMAGE =
  "https://purepods.com/assets/img/purepods-glass-eco-cabin-new-zealand-nature-stay-hero-home.jpg";
const SOCIAL_IMAGE_ALT =
  "PurePods private off-grid glass cabin in a secluded New Zealand landscape";

export const metadata: Metadata = {
  title: {
    absolute: SEO_TITLE,
  },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    siteName: "PurePods",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE,
        alt: SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <FaqHeader />
      <main className={styles.page}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1>Terms of Service</h1>
            <p>
              These Terms govern your use of our website and booking platform,
              and your stay at any PurePod location across New Zealand.
            </p>
          </header>

          <section className={styles.section}>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              our website and booking platform, and your stay at any PurePod
              location across New Zealand. By accessing our website or making a
              booking, you agree to be bound by these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Use of Website</h2>
            <p>
              Our website is designed to provide information about our
              accommodation offerings and enable direct bookings. You agree not
              to use the website for any unlawful purpose or in a way that could
              impair its function or disrupt other users.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Bookings</h2>
            <p>
              All bookings are subject to availability and confirmation. By
              placing a booking, you confirm that all details provided are
              accurate and that you have the legal right to make the booking.
            </p>
            <p>
              Once a booking is confirmed, our Refund &amp; Cancellation Policy
              applies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Guest Responsibilities</h2>
            <p>Guests are responsible for:</p>
            <ul>
              <li>
                Respecting the property and the surrounding natural environment
              </li>
              <li>
                Complying with all provided instructions and safety information
              </li>
              <li>Notifying us of any damage or issues during your stay</li>
            </ul>
            <p>
              PurePods are off-grid and located in remote areas. You accept that
              your stay involves certain risks and agree to take reasonable
              precautions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including photos, logos, and text, is
              the property of PurePods or our licensors and is protected by
              copyright laws. You may not use our content without permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, PurePods is not liable for
              any loss, injury, or damage incurred during your stay, except
              where caused by our negligence. We are not responsible for
              third-party services, acts of nature, or guest actions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued
              use of our website and services after changes are made will
              constitute your acceptance of the new Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Governing Law</h2>
            <p>These Terms are governed by the laws of New Zealand.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us on +64
              021 630460.
            </p>
          </section>
        </article>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
