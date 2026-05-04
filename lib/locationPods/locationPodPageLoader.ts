import type { Metadata } from "next";
import type { ComponentType } from "react";
import { cache } from "react";
import type { LocationPodSlug } from "./slugs";

export type LocationPodPageModule = {
  podMetadata: Metadata;
  PodView: ComponentType;
};

/**
 * Loads exactly one pod page module per slug via `import()`.
 * Keeps `app/location/[slug]` from statically bundling every pod into one server chunk,
 * which otherwise produces huge Webpack split graphs and intermittent
 * `Cannot find module './<n>.js'` in `next dev` on Windows after edits/HMR.
 */
async function loadLocationPodPageImpl(
  slug: LocationPodSlug,
): Promise<LocationPodPageModule> {
  switch (slug) {
    case "atatu":
      return import("./pages/atatu");
    case "greystone":
      return import("./pages/greystone");
    case "makoha":
      return import("./pages/makoha");
    case "hananui":
      return import("./pages/hananui");
    case "kahutara":
      return import("./pages/kahutara");
    case "korimako":
      return import("./pages/korimako");
    case "manakau":
      return import("./pages/manakau");
    case "tokoeka":
      return import("./pages/tokoeka");
    case "kokomea":
      return import("./pages/kokomea");
    case "taima":
      return import("./pages/taima");
    case "haurapa":
      return import("./pages/haurapa");
    case "rewarewa":
      return import("./pages/rewarewa");
    case "pohue":
      return import("./pages/pohue");
    case "pamu":
      return import("./pages/pamu");
    case "matu":
      return import("./pages/matu");
    case "ruru":
      return import("./pages/ruru");
    default: {
      const _exhaustive: never = slug;
      return _exhaustive;
    }
  }
}

/** Dedupe within the same React render pass when metadata and page both need the module. */
export const loadLocationPodPage = cache(loadLocationPodPageImpl);
