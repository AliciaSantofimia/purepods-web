import type { Metadata } from "next";
import { PodGeographicMapExperimental } from "@/components/pods/PodGeographicMapExperimental";

export const metadata: Metadata = {
  title: { absolute: "Mapa geográfico (vista previa) — PurePods" },
  robots: { index: false, follow: false },
};

export default function GeoMapPreviewPage() {
  return (
    <div style={{ padding: "clamp(16px, 4vw, 40px) clamp(12px, 3vw, 24px) 56px" }}>
      <PodGeographicMapExperimental />
    </div>
  );
}
