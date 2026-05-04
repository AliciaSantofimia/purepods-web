# Next.js en Windows (dev estable)

## Dos clases de problemas distintos

### A) Webpack: `Cannot find module './<n>.js'` (`webpack-runtime.js`)

En **`next dev`** con **Webpack**, el servidor del App Router se parte en **chunks numeréricos**. Tras muchos guardados (HMR), en Windows a veces el runtime sigue pidiendo un chunk ya sustituido.

**Mitigación en este repo:** `lib/locationPods/locationPodPageLoader.ts` (carga por `slug`), **`onDemandEntries`** en `next.config.js`, un solo proceso `dev`, y (si hace falta) **`npm run dev:fresh`**.

### B) Turbopack: `ENOENT` … `app-build-manifest.json` (pantalla en blanco)

Con **`next dev --turbo`**, en algunos entornos (sobre todo **Windows**) Next/Turbopack puede intentar leer rutas de manifiesto mal resueltas bajo **`.next/server/app/...`**, p. ej. **`app-build-manifest.json` ausente**, mensajes tipo **“missing required error components”**, aunque **`npm run build`** pase. Esto es un **bug / limitación del pipeline de Turbopack en dev**, no un fallo concreto de una página como `/location/pohue`.

**Recomendación:** usar **`npm run dev`** (Webpack) como desarrollo por defecto. Reserva **`npm run dev:turbo`** para pruebas si quieres comparar.

## Scripts

| Script | Uso |
|--------|-----|
| **`npm run dev`** | Desarrollo con **Webpack** (recomendado en Windows). |
| **`npm run dev:turbo`** | Desarrollo con **Turbopack** (opcional; puede fallar con manifests en dev). |
| **`npm run dev:fresh`** | Borra `.next` y `node_modules/.cache`, luego **Webpack**. |
| **`npm run dev:fresh:turbo`** | Igual, luego **Turbopack**. |

**Producción:** `npm run build` → `npm run start`.

## Rutas de assets con espacios / “Pōhue” en el nombre de fichero

Para **`/assets/img/pohue/...`** se usan **literales con `%20` y `%C5%8D`** (misma URL que `encodeURIComponent` en el navegador), para evitar plantillas dinámicas con Unicode en módulos compartidos. Las **`alt`** de las imágenes siguen llevando el texto legible con **Pōhue**.

## Otras medidas

1. **Un solo** `next dev` por clon del repo.
2. Excluir **`.next`** del análisis en tiempo real del antivirus si puedes.
3. Evitar el repo dentro de carpetas **sincronizadas** (OneDrive, etc.) si ves carreras al escribir `.next`.
4. En discos de red / VM: **`WATCHPACK_POLLING=true`** solo si el watcher falla a menudo.

## `onDemandEntries` en `next.config.js`

Aumenta el tiempo en buffer en **dev con Webpack** para reducir presión sobre HMR. No afecta a **`next build`**.
