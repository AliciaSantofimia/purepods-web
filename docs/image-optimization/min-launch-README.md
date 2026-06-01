# Optimización mínima pre-lanzamiento (imágenes)

Documentación de la optimización aplicada en fases **A**, **B** y **D** (sin Fase C masiva de galerías).

## Resumen

| Fase | Archivos | Antes | Después | Ahorro |
|------|----------|-------|---------|--------|
| A — Hero + OG | 3 | 56,03 MB | 1,97 MB | ~96,5 % |
| B — Mapa `/pods` | 2 | 20,60 MB | 336 KB | ~98,4 % |
| **Total sustituidos** | **5** | **76,63 MB** | **2,29 MB** | **~97,0 %** |

Datos exactos por archivo: [`min-launch-manifest.json`](./min-launch-manifest.json).

## Copias de seguridad

Los originales sin comprimir se guardaron en:

```
.image-backups/min-launch/
```

Esta carpeta está en `.gitignore` (no se sube al repositorio). Para restaurar un archivo:

```bash
cp .image-backups/min-launch/assets/img/<ruta> public/assets/img/<ruta>
```

## Fase A — Hero + Open Graph

| Archivo | Dimensiones antes → después | Peso antes → después |
|---------|----------------------------|----------------------|
| `pohue/pohue-purepod-lakeside-glass-cabin-sunset-retreat-new-zealand.jpg` | 6000×3997 → 2560×1705 | 26,29 MB → 553 KB |
| `kahutara/kahutara-purepod-sunrise-over-river-valley.jpg` | 6000×4000 → 2560×1707 | 17,04 MB → 636 KB |
| `manakau/manakau-purepod-sunrise-over-mountain-landscape.jpg` | 5367×3578 → 2560×1707 | 12,70 MB → 820 KB |

**Receta:** JPG progresivo, mozjpeg, calidad **84**, ancho máximo **2560 px** (sin ampliar).

**Rutas de código que usan estos archivos (sin cambios):**

- `lib/locationPods/experimental/{pohue,kahutara,manakau}ExperimentalData.ts` — hero
- `lib/locationPods/pages/{pohue,kahutara,manakau}.tsx` — `OG_IMAGE_URL`

## Fase B — Pins mapa `/pods`

| Archivo | Dimensiones antes → después | Peso antes → después |
|---------|----------------------------|----------------------|
| `makoha/purepod-makoha-aerial-view-native-forest-new-zealand.jpg` | 5272×2966 → 1200×675 | 14,05 MB → 184 KB |
| `kiromako/korimako-purepod-glass-cabin-native-forest-aerial-new-zealand.jpg` | 3600×2025 → 1200×675 | 6,55 MB → 152 KB |

**Receta:** JPG progresivo, mozjpeg, calidad **82**, ancho máximo **1200 px**.

**Ruta de código:** `lib/chooseMapExperimentalData.ts` — `imageSrc` de Mākōha y Korimako.

## Fase D — Lightbox

**Archivo modificado:** `components/ui/Lightbox.tsx`

- Sustituido `<img src={original}>` por `next/image` con `fill`, `quality={85}` y `sizes` acotado a **2400 px**.
- El usuario ya no descarga el master JPEG de `public/` al ampliar; recibe la versión del optimizador de Next.js.
- Sin cambios en CSS (`Lightbox.module.css`) ni en rutas de imágenes.

## Script reutilizable

```bash
node scripts/optimize-min-launch-images.mjs
```

Idempotente respecto a backups (no sobrescribe backup existente). **No re-ejecutar** sobre archivos ya optimizados sin restaurar desde backup.

## Qué no se tocó

- Home hero, Experiences, galerías Location restantes (~80 JPG >2 MB)
- Metadata, rutas URL, diseño visual
- `next.config.js`

## Cómo probar visualmente

1. **Hero + OG (Fase A)**  
   - `/location/pohue`, `/location/kahutara`, `/location/manakau` — comprobar hero a pantalla completa (nitidez, color, recorte).  
   - DevTools → Network: el hero debe cargar ~550–820 KB (o menos vía `/_next/image`), no decenas de MB.

2. **Mapa (Fase B)**  
   - `/pods` — pins Mākōha y Korimako; zoom del mapa y popover/card si aplica.  
   - Network: thumbnails ~150–200 KB.

3. **Lightbox (Fase D)**  
   - Cualquier `/location/<pod>` → clic en imagen de galería o travel.  
   - Network: URL `/_next/image?...&w=...` (no JPG directo de 15+ MB).  
   - Comprobar cierre con Escape, scroll bloqueado, `object-fit: contain` igual que antes.

4. **Regresión**  
   - Home, `/experiences`, pods no optimizados — sin cambios esperados.

## Build

Tras los cambios: `npm run build` (verificar en CI/local).
