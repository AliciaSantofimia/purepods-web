import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import styles from "./page.module.css";

const CANONICAL = "https://purepods.com/privacy-policy";
const SEO_TITLE = "Privacy Policy | PurePods";
const META_DESCRIPTION =
  "Read the PurePods privacy policy to understand how we collect, use, protect and handle personal information.";
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <FaqHeader />
      <main className={styles.page}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1>Privacy Policy</h1>
            <p>
              This privacy policy explains how PurePods collects, uses, protects
              and otherwise handles personal information through our website.
            </p>
          </header>
          <section className={styles.section}>
            <p>
              This privacy policy has been compiled to better serve those who are concerned with how their &lsquo;Personally Identifiable Information&rsquo; (PII) is being used online.
            </p>
            <p>Please read our privacy policy carefully to understand how we handle your Personally Identifiable Information in accordance with our website.</p>
          </section>

          <section className={styles.section}>
            <h2>What personal information do we collect?</h2>
            <p>
              When ordering, registering or interacting via live chat on our site, as appropriate, you may be asked to enter your name, email address, phone number, credit card information or other details to help you with your experience.
            </p>
          </section>

          <section className={styles.section}>
            <h2>When do we collect information?</h2>
            <p>
              We collect information from you when you fill out a form or enter information on our site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>How do we use your information?</h2>
            <p>We may use the information we collect from you through purchases, newsletter signups, surveys, marketing communications and other site features.</p>
            <ul>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer a contest, promotion, survey or other site feature.</li>
              <li>To quickly process your transactions.</li>
              <li>To send periodic emails regarding your order or other products and services.</li>
              <li>To follow up with them after correspondence, including live chat, email or phone inquiries.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How do we protect your information?</h2>
            <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p>
            <p>Your personal information is kept behind secured networks. Access is restricted to people with special access rights who are required to keep the information confidential.</p>
            <p>All sensitive and credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
            <p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>
          </section>

          <section className={styles.section}>
            <h2>Do we use &lsquo;cookies&rsquo;?</h2>
            <p>If you leave a comment on our site you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
            <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
            <p>When you log in, we will set up several cookies to save your login information and your screen display choices. Login cookies last for two days and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
            <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
            <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. Since every browser is a little different, look at your browser&rsquo;s Help Menu to learn the correct way to modify your cookies.</p>
            <p>If you turn cookies off, some of the features that make your site experience more efficient may not function properly.</p>
          </section>

          <section className={styles.section}>
            <h2>Third-party disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice.</p>
            <p>This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
            <p>We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others&rsquo; rights, property or safety.</p>
            <p>However, non-personally identifiable visitor information may be provided to our food suppliers and cleaning teams, so they may include a welcome note with your first name and ensure your dietary requirements are met.</p>
          </section>

          <section className={styles.section}>
            <h2>Third-party links</h2>
            <p>Our website can include third-party products or services. These third-party sites have separate and independent privacy policies.</p>
            <p>We have no responsibility or liability for the content and activities of linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
          </section>

          <section className={styles.section}>
            <h2>Google</h2>
            <p>
              Google&rsquo;s advertising requirements can be summed up by Google&rsquo;s Advertising Principles. They are put in place to provide a positive experience for users.
            </p>
            <p>
              <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en" target="_blank" rel="noopener noreferrer">
                Google Advertising Principles
              </a>
            </p>
            <p>We may use Google AdSense Advertising on our website.</p>
            <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google&rsquo;s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet.</p>
            <p>Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>
            <p>We may implement remarketing with Google AdSense, demographics reporting and interests reporting.</p>
            <p>We, along with third-party vendors such as Google, use first-party cookies and third-party cookies or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>
          </section>
        </article>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
