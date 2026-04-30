import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <>
      <FaqHeader />
      <main
        className="wrap"
        style={{ padding: "clamp(96px, 14vw, 140px) 0 72px" }}
      >
        <h1>Terms of Service</h1>
        <p style={{ color: "var(--muted)" }}>Content coming soon.</p>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
