import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main
      className="wrap"
      style={{ padding: "clamp(96px, 14vw, 140px) 0 72px" }}
    >
      <h1>Frequently Asked Questions</h1>
      <p style={{ color: "var(--muted)" }}>Content coming soon.</p>
    </main>
  );
}
