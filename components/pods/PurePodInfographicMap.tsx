"use client";

import dynamic from "next/dynamic";
import styles from "./PurePodInfographicMap.module.css";

const PurePodInfographicMapLeaflet = dynamic(
  () => import("./PurePodInfographicMapLeaflet"),
  { ssr: false, loading: () => <div className={styles.mapLoading} aria-busy="true" /> },
);

type Pod = {
  name: string;
  lat: number;
  lng: number;
  region: "North Island" | "South Island" | "Stewart Island";
};

type City = {
  name: string;
  lat: number;
  lng: number;
};

const PODS: Pod[] = [
  { name: "Matū", lat: -38.2615, lng: 175.1123, region: "North Island" },
  { name: "Mākoha", lat: -35.204, lng: 173.9485, region: "North Island" },
  { name: "Ruru", lat: -37.4208, lng: 175.762, region: "North Island" },
  { name: "Pāmu", lat: -38.1825, lng: 176.252, region: "North Island" },
  { name: "Rewarewa", lat: -36.824, lng: 174.4195, region: "North Island" },
  { name: "Kokomea", lat: -40.81559036922355, lng: 175.10623434237164, region: "North Island" },
  { name: "Tokoeka", lat: -46.8975, lng: 168.129, region: "Stewart Island" },
  { name: "Hananui", lat: -46.9005, lng: 168.1305, region: "Stewart Island" },
  { name: "Haurapa", lat: -45.05, lng: 169.21, region: "South Island" },
  { name: "Tāima", lat: -45.068021549825716, lng: 169.0647641734164, region: "South Island" },
  { name: "Pōhue", lat: -43.733, lng: 172.866, region: "South Island" },
  { name: "Greystone", lat: -43.08, lng: 172.76, region: "South Island" },
  { name: "Korimako", lat: -42.85, lng: 173.2, region: "South Island" },
  { name: "Atatū", lat: -42.855, lng: 173.205, region: "South Island" },
  { name: "Kahutara", lat: -42.4, lng: 173.68, region: "South Island" },
  { name: "Manakau", lat: -42.45, lng: 173.55, region: "South Island" },
];

const CITIES: City[] = [
  { name: "Auckland", lat: -36.8485, lng: 174.7633 },
  { name: "Hamilton", lat: -37.787, lng: 175.2793 },
  { name: "Rotorua", lat: -38.1368, lng: 176.2497 },
  { name: "Wellington", lat: -41.2866, lng: 174.7756 },
  { name: "Nelson", lat: -41.2706, lng: 173.284 },
  { name: "Christchurch", lat: -43.5321, lng: 172.6362 },
  { name: "Queenstown", lat: -45.0312, lng: 168.6626 },
  { name: "Dunedin", lat: -45.8788, lng: 170.5028 },
  { name: "Invercargill", lat: -46.4132, lng: 168.3538 },
  { name: "Greymouth", lat: -42.4506, lng: 171.2103 },
  { name: "Kaikōura", lat: -42.4, lng: 173.681 },
];

const REGION_ORDER: Pod["region"][] = ["North Island", "South Island", "Stewart Island"];

export default function PurePodInfographicMap() {
  return (
    <section className={styles.wrapper} aria-label="PurePod infographic map">
      <aside className={styles.editorialPanel}>
        <p className={styles.kicker}>PurePod</p>
        <h1 className={styles.title}>The PurePod Collection</h1>
        <p className={styles.subtitle}>Eco-luxury escapes across New Zealand</p>
        <p className={styles.description}>
          Explore secluded glass eco-cabins placed in some of Aotearoa&apos;s most extraordinary landscapes.
        </p>

        <div className={styles.legend} aria-label="Map legend">
          <span className={styles.legendItem}>
            <span className={styles.podDot} aria-hidden="true" />
            PurePod locations
          </span>
          <span className={styles.legendItem}>
            <span className={styles.cityDot} aria-hidden="true" />
            Orientation cities
          </span>
        </div>

        <div className={styles.regionCards} aria-label="Region summary cards">
          {REGION_ORDER.map((region) => (
            <article key={region} className={styles.regionCard}>
              <p className={styles.regionName}>{region}</p>
              <p className={styles.regionCount}>
                {PODS.filter((pod) => pod.region === region).length} PurePods
              </p>
            </article>
          ))}
        </div>
      </aside>

      <div className={styles.mapShell}>
        <PurePodInfographicMapLeaflet pods={PODS} cities={CITIES} />
      </div>
    </section>
  );
}
