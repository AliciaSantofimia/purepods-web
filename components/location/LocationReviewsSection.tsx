import styles from "./LocationReviewsSection.module.css";

export type LocationReviewItem = {
  quote: string;
  author: string;
  context?: string;
};

export type LocationReviewsSectionProps = {
  title: string;
  hint?: string;
  intro?: string;
  reviews: LocationReviewItem[];
};

export function LocationReviewsSection({
  title,
  hint,
  intro,
  reviews,
}: LocationReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="pod-reviews-heading">
      <div className={styles.wrap}>
        <header className={styles.head}>
          <h2 id="pod-reviews-heading" className={styles.title}>
            {title}
          </h2>
          {hint ? <p className={styles.hint}>{hint}</p> : null}
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </header>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className={styles.card}
              aria-label={`Review by ${review.author}`}
            >
              <blockquote className={styles.quote}>
                <p>{review.quote}</p>
              </blockquote>
              <footer className={styles.footer}>
                <span className={styles.author}>{review.author}</span>
                {review.context ? (
                  <span className={styles.context}>{review.context}</span>
                ) : null}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
