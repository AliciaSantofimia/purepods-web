import Link from "next/link";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export const metadata = {
  title: "Pods",
  description: "Explore PurePods locations across New Zealand.",
};

const PODS: { href: string; label: string; region: string }[] = [
  { href: "/location/atatu", label: "Atatū", region: "Canterbury" },
  { href: "/location/greystone", label: "Greystone", region: "Canterbury" },
  {
    href: "/location/haurapa",
    label: "Haurapa",
    region: "Central Otago",
  },
  { href: "/location/taima", label: "Tāima", region: "Central Otago" },
  { href: "/location/kahutara", label: "Kahutara", region: "Kaikōura" },
  { href: "/location/manakau", label: "Manakau", region: "Kaikōura" },
  { href: "/location/kokomea", label: "Kokomea", region: "Kāpiti Coast" },
  { href: "/location/korimako", label: "Korimako", region: "Hurunui" },
  { href: "/location/makoha", label: "Mākōha", region: "Northland" },
  { href: "/location/matu", label: "Matū", region: "Waitomo" },
  { href: "/location/pamu", label: "Pāmu", region: "Rotorua" },
  { href: "/location/pohue", label: "Pōhue", region: "Banks Peninsula" },
  { href: "/location/rewarewa", label: "Rewarewa", region: "Muriwai Coast" },
  { href: "/location/ruru", label: "Ruru", region: "Coromandel" },
  { href: "/location/tokoeka", label: "Tokoeka", region: "Stewart Island" },
  { href: "/location/hananui", label: "Hananui", region: "Stewart Island" },
];

export default function PodsPage() {
  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Pods</h1>
        <p className={styles.intro}>
          Each pod is a private glass cabin for two. Choose a location to see
          details, practical notes and booking.
        </p>
        <ul className={styles.podList}>
          {PODS.map((pod) => (
            <li key={pod.href} className={styles.podItem}>
              <Link href={pod.href} className={styles.podLink}>
                <span className={styles.podName}>{pod.label}</span>
                <span className={styles.podRegion}>{pod.region}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      </Container>
    </div>
  );
}
