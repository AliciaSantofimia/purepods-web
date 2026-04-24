"use client";

import type { FormEvent } from "react";
import styles from "./Footer.module.css";

const NEWSLETTER_ACTION = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;

/**
 * Optional POST endpoint (e.g. Mailchimp / ConvertKit form URL).
 * If unset, submit opens the visitor’s email client with a simple subscribe request.
 */
export function FooterSubscribe() {
  const handleMailtoFallback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    if (!email) return;
    const subject = encodeURIComponent("PurePods updates");
    const body = encodeURIComponent(
      `Please add this address to your updates list:\n\n${email}`,
    );
    window.location.href = `mailto:hello@purepods.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.subscribe}>
      <h2 className={styles.subscribeHeadline}>Stay connected with PurePods</h2>
      <p className={styles.subscribeText}>
        Receive occasional updates, new locations and seasonal availability.
      </p>
      <form
        className={styles.subscribeForm}
        {...(NEWSLETTER_ACTION
          ? { action: NEWSLETTER_ACTION, method: "post" as const }
          : { onSubmit: handleMailtoFallback })}
        aria-label="Subscribe to PurePods email updates"
      >
        <label htmlFor="footer-subscribe-email" className={styles.visuallyHidden}>
          Email address
        </label>
        <input
          id="footer-subscribe-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="Email address"
          className={styles.subscribeInput}
          required
        />
        <button type="submit" className={styles.subscribeBtn}>
          Subscribe
        </button>
      </form>
    </div>
  );
}
