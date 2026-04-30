import type { Metadata } from "next";
import { FaqAccordion, type FaqSection } from "./FaqAccordion";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Frequently Asked Questions | PurePods",
  },
  description:
    "Frequently asked questions about PurePods, including privacy, cooking facilities, bookings, check-in, check-out, mobile reception and emergency contact.",
  alternates: { canonical: "/frequently-asked-questions/" },
  openGraph: {
    type: "website",
    siteName: "PurePods",
    title: "Frequently Asked Questions | PurePods",
    description:
      "Frequently asked questions about PurePods, including privacy, cooking facilities, bookings, check-in, check-out, mobile reception and emergency contact.",
    url: "https://purepods.com/frequently-asked-questions/",
    images: [
      {
        url: "https://purepods.com/assets/img/purepods-logo-new-zealand.jpg",
        alt: "PurePods logo",
      },
    ],
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | PurePods",
    description:
      "Frequently asked questions about PurePods, including privacy, cooking facilities, bookings, check-in, check-out, mobile reception and emergency contact.",
    images: ["https://purepods.com/assets/img/purepods-logo-new-zealand.jpg"],
  },
};

const faqSections: FaqSection[] = [
  {
    title: "General",
    items: [
      {
        question: "How private are the PurePods?",
        answer: {
          paragraphs: [
            "Very private! Each PurePod is carefully placed to ensure you’re completely secluded.",
          ],
        },
      },
      {
        question: "Is it too cold or hot with all that glass?",
        answer: {
          paragraphs: [
            "Not at all! The PurePod is double-glazed and insulated, with heating and cooling options.",
          ],
        },
      },
      {
        question: "What are the cooking facilities?",
        answer: {
          paragraphs: ["Each PurePod has:", "You can bring food or pre-order a hamper."],
          list: ["Gas cooktop", "Small fridge", "Cookware, plates, cutlery"],
        },
      },
      {
        question: "What do I do all day?",
        answer: { paragraphs: ["Relax, breathe, and experience nature."] },
      },
      {
        question: "Can we bring our dog?",
        answer: { paragraphs: ["No — to protect wildlife."] },
      },
      {
        question: "Is there mobile reception?",
        answer: { paragraphs: ["Limited or none depending on location."] },
      },
      {
        question: "Are there power points?",
        answer: {
          paragraphs: ["No 240V plugs."],
          list: ["USB charging available"],
        },
      },
      {
        question: "CPAP machine?",
        answer: { paragraphs: ["Available in selected pods."] },
      },
      {
        question: "Dietary requirements?",
        answer: { paragraphs: ["Yes — selectable at booking."] },
      },
      {
        question: "Can I fly a drone?",
        answer: { paragraphs: ["Only with consent."] },
      },
    ],
  },
  {
    title: "Bookings",
    items: [
      {
        question: "What if my date is booked?",
        answer: { paragraphs: ["Contact us to join waitlist."] },
      },
      {
        question: "Can I bring a third guest?",
        answer: { paragraphs: ["No — max 2 people."] },
      },
      {
        question: "Check-in?",
        answer: { paragraphs: ["No reception. Instructions sent via email."] },
      },
      {
        question: "Check-out?",
        answer: { paragraphs: ["Leave by 11am."] },
      },
      {
        question: "Do I need 4WD?",
        answer: { paragraphs: ["Sometimes recommended."] },
      },
    ],
  },
  {
    title: "Emergency",
    items: [
      {
        question: "Emergency contact?",
        answer: { paragraphs: ["Each pod has communication tools + beacon."] },
      },
    ],
  },
];

function answerToText(item: FaqSection["items"][number]) {
  return [
    item.answer.paragraphs[0],
    ...(item.answer.list ?? []),
    ...item.answer.paragraphs.slice(1),
  ].join(" ");
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerToText(item),
        },
      })),
    ),
  };
}

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>PurePods</p>
          <h1>Frequently Asked Questions</h1>
        </header>
        <FaqAccordion sections={faqSections} />
      </div>
    </main>
  );
}
