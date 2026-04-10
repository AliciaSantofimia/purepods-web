import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PurePods | Unique accommodation in New Zealand",
    template: "%s | PurePods",
  },
  description:
    "PurePods are glass eco-cabins set in the natural landscapes of New Zealand. Complete privacy, connection with nature, and stargazing from bed.",
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