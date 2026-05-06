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

type ContactFieldErrors = Partial<
  Record<
    | "firstName"
    | "lastName"
    | "email"
    | "confirmEmail"
    | "enquiryType"
    | "message"
    | "recaptchaToken"
    | "form",
    string
  >
>;

const MAX_MESSAGE_LENGTH = 600;
const CONTACT_TO = "reservations@purepods.com";
const ENQUIRY_TYPES = new Set([
  "Booking a stay",
  "Changing an existing booking",
  "Media or partnerships",
  "General enquiry",
]);

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonError(message: string, status = 400, errors?: ContactFieldErrors) {
  return NextResponse.json({ message, errors }, { status });
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

function validateContactPayload(body: ContactPayload) {
  const firstName = asString(body.firstName);
  const lastName = asString(body.lastName);
  const email = asString(body.email);
  const confirmEmail = asString(body.confirmEmail);
  const enquiryType = asString(body.enquiryType);
  const message = asString(body.message);
  const recaptchaToken = asString(body.recaptchaToken);
  const errors: ContactFieldErrors = {};

  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!validEmail(email)) errors.email = "Enter a valid email address.";
  if (!confirmEmail) errors.confirmEmail = "Please confirm your email.";
  else if (!validEmail(confirmEmail)) {
    errors.confirmEmail = "Enter a valid confirmation email address.";
  } else if (email && email.toLowerCase() !== confirmEmail.toLowerCase()) {
    errors.confirmEmail = "The email addresses do not match. Please check and try again.";
  }
  if (!enquiryType) errors.enquiryType = "Please choose an enquiry type.";
  else if (!ENQUIRY_TYPES.has(enquiryType)) errors.enquiryType = "Please choose a valid enquiry type.";
  if (!message) errors.message = "Message is required.";
  else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
  }
  if (!recaptchaToken) errors.recaptchaToken = "Please complete the captcha.";

  return {
    values: {
      firstName,
      lastName,
      email,
      confirmEmail,
      enquiryType,
      message,
      recaptchaToken,
    },
    errors,
  };
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

  const { values, errors } = validateContactPayload(body);
  const { firstName, lastName, email, enquiryType, message, recaptchaToken } = values;

  if (Object.keys(errors).length > 0) {
    return jsonError("Please check the highlighted fields.", 400, errors);
  }

  const recaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaValid) {
    return jsonError("Please complete the captcha again.", 403, {
      recaptchaToken: "Captcha verification failed. Please try again.",
    });
  }

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
