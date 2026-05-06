import type { Metadata } from "next";
import Link from "next/link";
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
        <div className={styles.contactShell}>
          <section className={styles.heroPanel} aria-labelledby="contact-heading">
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Contact PurePods</p>
              <h1 id="contact-heading">How can we help?</h1>
              <p className={styles.lead}>
                Whether you’re planning a stay, have a question about an
                existing booking, or want to get in touch about media or
                partnerships, send us a note and our team will get back to you.
              </p>
              <div className={styles.supportNote}>
                <p>
                  Choose the enquiry type that best matches your message. For
                  booking enquiries, please include your preferred dates, region,
                  or PurePod if you already have one in mind.
                </p>
                <Link href="/frequently-asked-questions/">
                  Read frequently asked questions
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.formPanel} aria-label="Contact form">
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
