import styles from "./ruruTravelEditorialCard.module.css";

type Props = {
  title: string;
  body: string;
  editorialEyebrow: string;
  editorialLead: string;
};

/**
 * Travel topic without photography — typographic band aligned to photo card height.
 */
export function RuruTravelEditorialCard({
  title,
  body,
  editorialEyebrow,
  editorialLead,
}: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.mast}>
        <div className={styles.mastInner}>
          <p className={styles.eyebrow}>{editorialEyebrow}</p>
          <p className={styles.lead}>{editorialLead}</p>
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>
    </article>
  );
}
