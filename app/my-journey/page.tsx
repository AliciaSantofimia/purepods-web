import type { Metadata } from "next";
import Link from "next/link";
import styles from "./myJourney.module.css";

const BOOKING_CHECKOUT = "https://purepods.com/booking/";

export const metadata: Metadata = {
  title: { absolute: "Mi viaje — PurePods (Demo)" },
  description:
    "Área personal (demo): reservas, detalles del pod, recomendaciones y seguimiento. Placeholder que muestra el concepto.",
  alternates: { canonical: "https://purepods.com/my-journey" },
  openGraph: {
    title: "Mi viaje — PurePods (Demo)",
    description:
      "Área personal (demo): reservas, detalles del pod, recomendaciones y seguimiento.",
    url: "https://purepods.com/my-journey",
    siteName: "PurePods",
    locale: "es_NZ",
    type: "website",
  },
};

export default function MyJourneyPage() {
  return (
    <div className={styles.page} lang="es">
      <div className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <Link className={styles.brand} href="/">
            PUREPODS
          </Link>
          <div className={styles.links}>
            <Link href="/pods">Pods</Link>
            <Link href="/experiences">Experiencias</Link>
            <Link href="/my-journey" aria-current="page" className={styles.navCurrent}>
              Mi viaje
            </Link>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={BOOKING_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>

      <main className={styles.wrap}>
        <section className={styles.hero}>
          <div className={styles.kicker}>Área personal (demo)</div>
          <h1>Mi viaje</h1>
          <p className={styles.lead}>
            Aquí viviría todo lo relacionado con tu estancia: reservas, detalles
            del pod, recomendaciones y seguimiento. En esta demo es un
            placeholder para mostrar el concepto.
          </p>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.hd}>
              <div className={styles.kicker}>Próximas reservas</div>
            </div>
            <div className={styles.bd}>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>Reserva pendiente (ejemplo)</div>
                  <div className={styles.meta}>Pod: — · Fechas: — · 2 personas</div>
                </div>
                <span className={styles.pill}>Ver detalles →</span>
              </div>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>Historial (ejemplo)</div>
                  <div className={styles.meta}>
                    Tus viajes anteriores aparecerán aquí
                  </div>
                </div>
                <span className={styles.pill}>Ver historial →</span>
              </div>
              <p className={`${styles.note} ${styles.noteMargin}`}>
                Nota: en la versión real, esta información se completaría tras la
                reserva (Newbook) y quedaría accesible desde aquí.
              </p>
            </div>
          </article>

          <aside className={styles.card}>
            <div className={styles.hd}>
              <div className={styles.kicker}>Acciones rápidas</div>
            </div>
            <div className={styles.bd}>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>Gestionar mi reserva</div>
                  <div className={styles.meta}>
                    Cambios, mensajes, confirmación
                  </div>
                </div>
                <a className={styles.pill} href={BOOKING_CHECKOUT}>
                  Abrir →
                </a>
              </div>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>Explorar experiencias</div>
                  <div className={styles.meta}>Romantic, Night Falls, Journeys…</div>
                </div>
                <Link className={styles.pill} href="/experiences">
                  Explorar →
                </Link>
              </div>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>Explorar pods</div>
                  <div className={styles.meta}>Ver detalles por ubicación</div>
                </div>
                <Link className={styles.pill} href="/pods">
                  Ver pods →
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
