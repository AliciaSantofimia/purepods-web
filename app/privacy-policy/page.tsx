import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      className="wrap"
      style={{ padding: "clamp(96px, 14vw, 140px) 0 72px" }}
    >
      <h1>Privacy Policy</h1>
      <p style={{ color: "var(--muted)" }}>Content coming soon.</p>
    </main>
  );
}
