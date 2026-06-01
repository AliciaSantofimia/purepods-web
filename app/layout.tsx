import type { Metadata } from "next";
import "./globals.css";

/**
 * TEMPORARY — pre-launch SEO protection (entire site).
 * Blocks search indexing while the project is developed on interim Vercel/GitHub
 * accounts, before migration to official PurePods infrastructure and public launch.
 *
 * REMOVE before go-live: delete `PRE_LAUNCH_NOINDEX` and the `robots` field below
 * (restore indexing via root metadata only; per-route robots overrides stay as-is).
 */
const PRE_LAUNCH_NOINDEX = true;

export const metadata: Metadata = {
  title: {
    default: "PurePods | Unique accommodation in New Zealand",
    template: "%s | PurePods",
  },
  description:
    "PurePods are glass eco-cabins set in the natural landscapes of New Zealand. Complete privacy, connection with nature, and stargazing from bed.",
  ...(PRE_LAUNCH_NOINDEX
    ? {
        robots: {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}