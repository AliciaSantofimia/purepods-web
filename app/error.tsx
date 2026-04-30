"use client";

/**
 * Root error boundary — avoids Next.js dev “missing required error components”
 * when a segment throws and the overlay cannot load fallback UI.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "1.25rem", marginTop: 0 }}>Something went wrong</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        {process.env.NODE_ENV === "development" ? error.message : "Please try again."}
      </p>
      <button type="button" onClick={() => reset()} style={{ padding: "8px 16px" }}>
        Try again
      </button>
    </div>
  );
}
