import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  confirmEmail?: unknown;
  enquiryType?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
};

const MAX_MESSAGE_LENGTH = 600;
const CONTACT_TO = "reservations@purepods.com";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Configure RECAPTCHA_SECRET_KEY in production. Local development may use the
  // frontend fallback checkbox, which posts this development-only token.
  if (!secret) {
    return process.env.NODE_ENV !== "production" && token === "dev-recaptcha-token";
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

function plainTextEmail({
  firstName,
  lastName,
  email,
  enquiryType,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  enquiryType: string;
  message: string;
}) {
  return [
    "New contact enquiry from PurePods website",
    "",
    `First name: ${firstName}`,
    `Last name: ${lastName}`,
    `Email: ${email}`,
    `Enquiry type: ${enquiryType}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

async function sendContactEmail(payload: {
  firstName: string;
  lastName: string;
  email: string;
  enquiryType: string;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;

  // Email provider configuration:
  // - RESEND_API_KEY: secret API key from Resend.
  // - CONTACT_EMAIL_FROM: verified sender address/domain in Resend.
  // - CONTACT_EMAIL_TO: optional override; defaults to reservations@purepods.com.
  // Do not expose these values with NEXT_PUBLIC_*.
  if (!resendApiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Contact form email not sent. Configure RESEND_API_KEY and CONTACT_EMAIL_FROM.", payload);
      return;
    }
    throw new Error("Email provider is not configured.");
  }

  const to = process.env.CONTACT_EMAIL_TO || CONTACT_TO;
  const text = plainTextEmail(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: "New contact enquiry from PurePods website",
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("Email provider rejected the message.");
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("Invalid request body.");
  }

  const firstName = asString(body.firstName);
  const lastName = asString(body.lastName);
  const email = asString(body.email);
  const confirmEmail = asString(body.confirmEmail);
  const enquiryType = asString(body.enquiryType);
  const message = asString(body.message);
  const recaptchaToken = asString(body.recaptchaToken);

  if (!firstName || !lastName || !email || !confirmEmail || !enquiryType || !message) {
    return jsonError("Please complete all required fields.");
  }

  if (!validEmail(email)) return jsonError("Please enter a valid email address.");

  if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
    return jsonError("Email addresses must match.");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonError(`Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`);
  }

  if (!recaptchaToken) return jsonError("Please complete the captcha.");

  const recaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaValid) return jsonError("Captcha verification failed.", 403);

  try {
    await sendContactEmail({
      firstName,
      lastName,
      email,
      enquiryType,
      message,
    });
  } catch {
    return jsonError("We could not send your enquiry. Please try again.", 502);
  }

  return NextResponse.json({ message: "Your enquiry has been sent." });
}
