import type { Metadata } from "next";
import type { ComponentType } from "react";
import { podMetadata as atatuMeta, PodView as AtatuPodView } from "./pages/atatu";
import { podMetadata as greystoneMeta, PodView as GreystonePodView } from "./pages/greystone";
import { podMetadata as makohaMeta, PodView as MakohaPodView } from "./pages/makoha";
import { podMetadata as hananuiMeta, PodView as HananuiPodView } from "./pages/hananui";
import { podMetadata as kahutaraMeta, PodView as KahutaraPodView } from "./pages/kahutara";
import { podMetadata as korimakoMeta, PodView as KorimakoPodView } from "./pages/korimako";
import { podMetadata as manakauMeta, PodView as ManakauPodView } from "./pages/manakau";
import { podMetadata as tokoekaMeta, PodView as TokoekaPodView } from "./pages/tokoeka";
import { podMetadata as kokomeaMeta, PodView as KokomeaPodView } from "./pages/kokomea";
import { podMetadata as taimaMeta, PodView as TaimaPodView } from "./pages/taima";
import { podMetadata as haurapaMeta, PodView as HaurapaPodView } from "./pages/haurapa";
import { podMetadata as rewarewaMeta, PodView as RewarewaPodView } from "./pages/rewarewa";
import { podMetadata as pohueMeta, PodView as PohuePodView } from "./pages/pohue";
import { podMetadata as pamuMeta, PodView as PamuPodView } from "./pages/pamu";
import { podMetadata as matuMeta, PodView as MatuPodView } from "./pages/matu";
import { podMetadata as ruruMeta, PodView as RuruPodView } from "./pages/ruru";
import type { LocationPodSlug } from "./slugs";

export type LocationPodEntry = {
  podMetadata: Metadata;
  PodView: ComponentType;
};

export const LOCATION_POD_REGISTRY: Record<LocationPodSlug, LocationPodEntry> = {
  atatu: { podMetadata: atatuMeta, PodView: AtatuPodView },
  greystone: { podMetadata: greystoneMeta, PodView: GreystonePodView },
  makoha: { podMetadata: makohaMeta, PodView: MakohaPodView },
  hananui: { podMetadata: hananuiMeta, PodView: HananuiPodView },
  kahutara: { podMetadata: kahutaraMeta, PodView: KahutaraPodView },
  korimako: { podMetadata: korimakoMeta, PodView: KorimakoPodView },
  manakau: { podMetadata: manakauMeta, PodView: ManakauPodView },
  tokoeka: { podMetadata: tokoekaMeta, PodView: TokoekaPodView },
  kokomea: { podMetadata: kokomeaMeta, PodView: KokomeaPodView },
  taima: { podMetadata: taimaMeta, PodView: TaimaPodView },
  haurapa: { podMetadata: haurapaMeta, PodView: HaurapaPodView },
  rewarewa: { podMetadata: rewarewaMeta, PodView: RewarewaPodView },
  pohue: { podMetadata: pohueMeta, PodView: PohuePodView },
  pamu: { podMetadata: pamuMeta, PodView: PamuPodView },
  matu: { podMetadata: matuMeta, PodView: MatuPodView },
  ruru: { podMetadata: ruruMeta, PodView: RuruPodView },
};
