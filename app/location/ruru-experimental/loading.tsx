/** Next.js route loading UI — shown during client navigations to this path. */
export default function RuruExperimentalLoading() {
  return (
    <div
      style={{
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F7F6F3",
        color: "#5C5F3E",
        fontFamily: "system-ui, Segoe UI, sans-serif",
        fontSize: 14,
        letterSpacing: "0.02em",
      }}
    >
      Cargando…
    </div>
  );
}
