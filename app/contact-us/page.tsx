import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import { ContactForm } from "@/app/contact-us/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | PurePods",
  description:
    "Contact PurePods for booking enquiries, gift vouchers, media requests and general questions.",
};

export default function ContactUsPage() {
  return (
    <>
      <FaqHeader />
      <main className={styles.contactPage}>
        <div className="wrap">
          <section className={styles.heroPanel} aria-labelledby="contact-heading">
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Contact PurePods</p>
              <h1 id="contact-heading">How can we help?</h1>
              <p className={styles.lead}>
                Tell us what you need and the PurePods team will come back to
                you. For booking questions, include your preferred dates, region
                or PurePod if you already have one in mind.
              </p>
            </div>
          </section>

          <section className={styles.contentGrid} aria-label="Contact form">
            <div className={styles.formCard}>
              <h2>Send an enquiry</h2>
              <p className={styles.formIntro}>
                All fields are required. Your message will be sent to our
                reservations team.
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
