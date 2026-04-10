import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EXPERIENCE_PAGES,
  EXPERIENCE_SLUGS,
  type ExperienceSlug,
  isExperienceSlug,
} from "../experienceContent";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return EXPERIENCE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isExperienceSlug(params.slug)) {
    return {};
  }
  const p = EXPERIENCE_PAGES[params.slug];
  return {
    title: { absolute: p.metaTitle },
    description: p.description,
    alternates: { canonical: `/experiences/${params.slug}` },
  };
}

export default function ExperienceDetailPage({ params }: Props) {
  if (!isExperienceSlug(params.slug)) {
    notFound();
  }

  const p = EXPERIENCE_PAGES[params.slug as ExperienceSlug];

  return (
    <>
      <header className="nav nav--solid" role="banner">
        <div className="nav__bar">
          <Link className="nav-brand" href="/" aria-label="PurePods — Home">
            <img
              src="/assets/img/purepods-logo-new-zealand.jpg"
              alt="PurePods"
              decoding="async"
            />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            <Link href="/pods">Pods</Link>
            <Link href="/experiences">Experiences</Link>
          </nav>

          <a className="nav__book" href="https://purepods.com/booking/">
            Book
          </a>
        </div>
      </header>

      <main className="experience-detail wrap">
        <Link href="/experiences" className="experience-detail__back">
          ← All experiences
        </Link>

        <article>
          <div className="experience-detail__hero">
            <img
              src={p.heroSrc}
              alt={p.heroAlt}
              loading="eager"
              decoding="async"
            />
          </div>

          <p className="eyebrow">{p.kicker}</p>
          <h1>{p.heading}</h1>
          <p className="experience-detail__lead">{p.description}</p>

          <div className="experience-detail__actions">
            <a className="btn btn-primary" href="https://purepods.com/booking/">
              Book
            </a>
            <Link className="btn" href="/experiences">
              More experiences
            </Link>
          </div>
        </article>
      </main>

      <footer>
        <div className="wrap">
          PurePods · <Link href="/">Home</Link> · <Link href="/pods">Pods</Link>{" "}
          · <Link href="/experiences">Experiences</Link> ·{" "}
          <a href="https://purepods.com/booking/">Book</a>
        </div>
      </footer>
    </>
  );
}
