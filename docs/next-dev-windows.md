# Next.js en Windows (`Cannot find module './<n>.js'`)

## Causa que se corrigió en código

La ruta `app/location/[slug]/page.tsx` importaba `LOCATION_POD_REGISTRY` desde `@/lib/locationPods`, lo que arrastraba **`registry.ts` y todas las páginas de pods en un solo bundle del servidor**. Webpack generaba muchos chunks numeréricos; en `next dev`, tras guardar cambios, el runtime podía seguir pidiendo un chunk ya sustituido → **`Cannot find module './819.js'`** (el número varía).

**Solución:** `lib/locationPods/locationPodPageLoader.ts` carga **solo el pod pedido** con `import()` por `slug`. `[slug]/page.tsx` importa únicamente `slugs` + ese loader, no el registry completo.

## Producción vs desarrollo

- **`npm run build`**: suele pasar aunque el dev falle, porque el grafo de producción es distinto.
- **`npm run dev`**: debe ser estable con el loader por slug; si algo falla, prueba un arranque limpio.

## Flujo local recomendado

1. **Una sola instancia** de `next dev` (un puerto). Varias pestañas del mismo servidor suelen estar bien; **varios `npm run dev` en el mismo proyecto** pueden pisar `.next`.
2. Tras actualizar dependencias o si ves errores raros de chunks: **`npm run dev:fresh`** (borra `.next` y `node_modules/.cache` con `rimraf`, luego `next dev`).
3. Antivirus o carpetas sincronizadas (OneDrive, etc.) sobre el repo pueden empeorar condiciones de carrera al escribir `.next`.

## Scripts

| Script        | Uso                                      |
|---------------|------------------------------------------|
| `npm run dev` | Desarrollo normal                        |
| `npm run dev:fresh` | Arranque limpio (Windows/macOS/Linux) |
