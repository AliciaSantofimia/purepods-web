"use client";

/**
 * Route-level error UI — if something throws while rendering the experimental page,
 * the user sees this instead of a blank screen.
 */
export default function RuruExperimentalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        margin: "48px auto",
        maxWidth: 560,
        padding: "24px 18px",
        fontFamily: "system-ui, Segoe UI, sans-serif",
        color: "#3d4129",
        background: "#f7f6f3",
        minHeight: "40vh",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 12px" }}>
        No se pudo cargar la vista experimental
      </h1>
      <p style={{ margin: "0 0 16px", lineHeight: 1.55 }}>
        Ha ocurrido un error al mostrar esta página. Prueba a recargar o borrar la
        caché de compilación (carpeta{" "}
        <code style={{ fontSize: "0.9em" }}>.next</code>) y volver a ejecutar{" "}
        <code style={{ fontSize: "0.9em" }}>npm run dev</code>.
      </p>
      {process.env.NODE_ENV === "development" ? (
        <pre
          style={{
            margin: "0 0 20px",
            padding: 12,
            background: "rgba(92, 95, 62, 0.08)",
            borderRadius: 6,
            overflow: "auto",
            fontSize: 13,
            lineHeight: 1.45,
          }}
        >
          {error.message}
        </pre>
      ) : null}
      <button
        type="button"
        onClick={reset}
        style={{
          padding: "10px 18px",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          border: "1px solid rgba(92, 95, 62, 0.35)",
          borderRadius: 8,
          background: "#fff",
          color: "#5c5f3e",
        }}
      >
        Reintentar
      </button>
    </div>
  );
}
