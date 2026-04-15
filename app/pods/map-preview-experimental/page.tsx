import type { Metadata } from "next";
import { LocationAwarenessExperimental } from "@/components/pods/LocationAwarenessExperimental";

export const metadata: Metadata = {
  title: { absolute: "Map preview (experimental) — PurePods" },
  robots: { index: false, follow: false },
};

/**
 * Sandbox URL only — visual review of `LocationAwarenessExperimental`.
 * Not linked from site nav; safe to remove when no longer needed.
 */
export default function MapPreviewExperimentalPage() {
  return (
    <div style={{ padding: "clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px) 48px" }}>
      <LocationAwarenessExperimental />
    </div>
  );
}
