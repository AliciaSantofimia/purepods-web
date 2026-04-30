import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <main
      className="wrap"
      style={{ padding: "clamp(96px, 14vw, 140px) 0 72px" }}
    >
      <h1>Our Story</h1>
      <p style={{ color: "var(--muted)" }}>Content coming soon.</p>
    </main>
  );
}
