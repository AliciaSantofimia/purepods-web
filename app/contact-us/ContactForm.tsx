"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./page.module.css";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  enquiryType: string;
  message: string;
  recaptchaToken: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState | "form", string>>;

type ContactApiResponse = {
  message?: string;
  errors?: ContactFormErrors;
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

const MAX_MESSAGE_LENGTH = 600;
const DEFAULT_ENQUIRY = "Booking a stay";
const RECAPTCHA_SCRIPT_ID = "google-recaptcha-v2";

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  enquiryType: DEFAULT_ENQUIRY,
  message: "",
  recaptchaToken: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!validateEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.confirmEmail.trim()) errors.confirmEmail = "Please confirm your email.";
  else if (!validateEmail(values.confirmEmail)) {
    errors.confirmEmail = "Enter a valid confirmation email address.";
  } else if (values.email.trim().toLowerCase() !== values.confirmEmail.trim().toLowerCase()) {
    errors.confirmEmail = "The email addresses do not match. Please check and try again.";
  }
  if (!values.enquiryType.trim()) errors.enquiryType = "Please choose an enquiry type.";
  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
  }
  if (!values.recaptchaToken) errors.recaptchaToken = "Please complete the captcha.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const remainingCharacters = MAX_MESSAGE_LENGTH - values.message.length;
  const isSubmitting = status === "submitting";

  const recaptchaHelp = useMemo(() => {
    if (siteKey) return "Complete the verification before submitting.";
    return "Complete the verification before submitting.";
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey || typeof window === "undefined") return;

    const markReady = () => setRecaptchaReady(true);

    if (window.grecaptcha) {
      markReady();
      return;
    }

    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", markReady);
      return () => existingScript.removeEventListener("load", markReady);
    }

    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", markReady);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", markReady);
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey || !recaptchaReady || !recaptchaRef.current || !window.grecaptcha) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
      sitekey: siteKey,
      callback: (token) => {
        setValues((current) => ({ ...current, recaptchaToken: token }));
        setErrors((current) => ({ ...current, recaptchaToken: undefined }));
      },
      "expired-callback": () => {
        setValues((current) => ({ ...current, recaptchaToken: "" }));
      },
      "error-callback": () => {
        setValues((current) => ({ ...current, recaptchaToken: "" }));
        setErrors((current) => ({
          ...current,
          recaptchaToken: "Captcha could not load. Please try again.",
        }));
      },
    });
  }, [recaptchaReady, siteKey]);

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined, form: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        if (result.errors) setErrors((current) => ({ ...current, ...result.errors }));
        throw new Error(result.message || "We could not send your enquiry.");
      }

      setStatus("success");
      setValues(initialState);
      if (widgetIdRef.current !== null) window.grecaptcha?.reset(widgetIdRef.current);
    } catch (error) {
      setStatus("error");
      setErrors((current) => ({
        ...current,
        form:
          error instanceof Error
            ? error.message
            : "We could not send your enquiry. Please try again.",
      }));
      if (widgetIdRef.current !== null) window.grecaptcha?.reset(widgetIdRef.current);
      setValues((current) => ({ ...current, recaptchaToken: "" }));
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>
            First Name <span className={styles.requiredMark} aria-hidden="true">*</span>
          </span>
          <input
            type="text"
            autoComplete="given-name"
            required
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "first-name-error" : undefined}
          />
          {errors.firstName ? (
            <small id="first-name-error" className={styles.errorText}>
              {errors.firstName}
            </small>
          ) : null}
        </label>

        <label className={styles.field}>
          <span>
            Last Name <span className={styles.requiredMark} aria-hidden="true">*</span>
          </span>
          <input
            type="text"
            autoComplete="family-name"
            required
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "last-name-error" : undefined}
          />
          {errors.lastName ? (
            <small id="last-name-error" className={styles.errorText}>
              {errors.lastName}
            </small>
          ) : null}
        </label>
      </div>

      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>
            Email Address <span className={styles.requiredMark} aria-hidden="true">*</span>
          </span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <small id="email-error" className={styles.errorText}>
              {errors.email}
            </small>
          ) : null}
        </label>

        <label className={styles.field}>
          <span>
            Confirm Email Address{" "}
            <span className={styles.requiredMark} aria-hidden="true">*</span>
          </span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.confirmEmail}
            onChange={(event) => updateField("confirmEmail", event.target.value)}
            aria-invalid={Boolean(errors.confirmEmail)}
            aria-describedby={errors.confirmEmail ? "confirm-email-error" : undefined}
          />
          {errors.confirmEmail ? (
            <small id="confirm-email-error" className={styles.errorText}>
              {errors.confirmEmail}
            </small>
          ) : null}
        </label>
      </div>

      <label className={styles.field}>
        <span>
          What is your inquiry about?{" "}
          <span className={styles.requiredMark} aria-hidden="true">*</span>
        </span>
        <select
          value={values.enquiryType}
          required
          onChange={(event) => updateField("enquiryType", event.target.value)}
          aria-invalid={Boolean(errors.enquiryType)}
          aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
        >
          <option>Booking a stay</option>
          <option>Changing an existing booking</option>
          <option>Media or partnerships</option>
          <option>General enquiry</option>
        </select>
        {errors.enquiryType ? (
          <small id="enquiry-error" className={styles.errorText}>
            {errors.enquiryType}
          </small>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>
          Message <span className={styles.requiredMark} aria-hidden="true">*</span>
        </span>
        <textarea
          rows={7}
          required
          maxLength={MAX_MESSAGE_LENGTH}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`message-counter${errors.message ? " message-error" : ""}`}
        />
        <span className={styles.counter} id="message-counter">
          {remainingCharacters} characters remaining
        </span>
        {errors.message ? (
          <small id="message-error" className={styles.errorText}>
            {errors.message}
          </small>
        ) : null}
      </label>

      <div
        className={styles.captchaField}
        aria-invalid={Boolean(errors.recaptchaToken)}
        aria-describedby={`recaptcha-help${errors.recaptchaToken ? " recaptcha-error" : ""}`}
      >
        <span className={styles.captchaLabel}>
          Verification <span className={styles.requiredMark} aria-hidden="true">*</span>
        </span>
        {siteKey ? (
          <div className={styles.recaptchaShell}>
            <div ref={recaptchaRef} />
          </div>
        ) : (
          <label className={styles.fallbackCaptcha}>
            <input
              type="checkbox"
              required
              checked={Boolean(values.recaptchaToken)}
              onChange={(event) =>
                updateField(
                  "recaptchaToken",
                  event.target.checked ? "dev-recaptcha-token" : "",
                )
              }
            />
            <span>I&apos;m not a robot</span>
          </label>
        )}
        <small id="recaptcha-help" className={styles.helpText}>
          {recaptchaHelp}
        </small>
        {errors.recaptchaToken ? (
          <small id="recaptcha-error" className={styles.errorText}>
            {errors.recaptchaToken}
          </small>
        ) : null}
      </div>

      {errors.form ? (
        <div className={styles.formMessageError} role="alert">
          {errors.form}
        </div>
      ) : null}

      {status === "success" ? (
        <div className={styles.formMessageSuccess} role="status">
          Thank you. Your enquiry has been sent to the PurePods team.
        </div>
      ) : null}

      <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
      </button>
    </form>
  );
}
