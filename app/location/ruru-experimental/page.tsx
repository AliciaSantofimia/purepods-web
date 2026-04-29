import type { Metadata } from "next";
import { RuruExperimentalView } from "@/components/location/experimental/RuruExperimentalView";

const TITLE = "Ruru PurePod — design exploration | PurePods";

const DESCRIPTION =
  "Experimental layout preview for PurePod Ruru (Coromandel). For the live page, see /location/ruru.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

export default function RuruExperimentalPage() {
  return (
    <>
      <noscript>
        <div
          style={{
            padding: "24px 18px",
            fontFamily: "system-ui, Segoe UI, sans-serif",
            background: "#F7F6F3",
            color: "#5C5F3E",
            lineHeight: 1.5,
          }}
        >
          Activa JavaScript en el navegador para ver esta página. Si ya está activado,
          recarga o prueba otro navegador.
        </div>
      </noscript>
      <RuruExperimentalView />
    </>
  );
}
