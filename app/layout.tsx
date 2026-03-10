import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
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
      <body className="layout">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
