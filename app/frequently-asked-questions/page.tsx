import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion, type FaqSection } from "./FaqAccordion";
import { FaqHeader } from "./FaqHeader";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Frequently Asked Questions | PurePods",
  },
  description:
    "Frequently asked questions about PurePods, including privacy, cooking facilities, bookings, check-in, check-out, mobile reception and emergency contact.",
  alternates: { canonical: "https://purepods.com/frequently-asked-questions" },
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
          blocks: [
            {
              type: "paragraph",
              text: "Very private! Each PurePod is carefully placed to ensure you’re completely secluded, with no unwanted interruptions. You can truly relax and immerse yourself in nature without worrying about being seen.",
            },
          ],
        },
      },
      {
        question: "Is it too cold or hot with all that glass?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Not at all! The PurePod is designed with comfort in mind. The glass is double-glazed and insulated, and there’s both heating and ways to cool the space to keep the temperature just right, no matter the season.",
            },
          ],
        },
      },
      {
        question: "What are the cooking facilities, do we have to bring our own food?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Each PurePod has a gas cooktop, a small fridge, and all the cookware, plates, and cutlery you need.",
            },
            {
              type: "paragraph",
              text: "You’re welcome to bring your own food, or you can pre-order a delicious locally sourced dinner and breakfast hamper.",
            },
          ],
        },
      },
      {
        question: "What do I do all day – what activities are there?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "PurePods are designed to encourage a couple of days to just relax and do nothing. Breathe deeply, take time to reflect, and experience nature at nature’s pace.",
            },
            {
              type: "paragraph",
              text: "Some properties have marked and mapped tracks for you to follow to experience the unique local features.",
            },
          ],
        },
      },
      {
        question: "Can I drive right up to the PurePod?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Access to all PurePods is on foot. The nature walk is part of the experience, and it is worth it.",
            },
            {
              type: "paragraph",
              text: "We recommend light luggage and a small backpack, as the tracks can cover uneven terrain, steps, and steeper sections.",
            },
            {
              type: "paragraph",
              text: "Each location page has detailed information on the type of nature walk and length required.",
            },
            {
              type: "paragraph",
              text: "If you have specific requirements or more questions, please contact us to discuss which location is the best fit for your needs.",
            },
          ],
        },
      },
      {
        question: "How long is the walk from the carpark to the PurePod?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "The walk from the carpark to the PurePod is an important part of your PurePod experience. It introduces you to the local environment and reinforces the privacy and isolation of the location.",
            },
            {
              type: "paragraph",
              text: "We understand not everyone is keen on a strenuous or long hike, so we have done our best to keep the walk to between 5 and 25 minutes long.",
            },
            {
              type: "paragraph",
              text: "Please ensure you have suitable walking shoes. A backpack or small carry bag is best. Avoid large suitcases and wheelie bags.",
            },
          ],
        },
      },
      {
        question: "Which is the best PurePod for stargazing?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "That is very tricky to answer, as all PurePod locations offer great stargazing on a clear night.",
            },
            {
              type: "paragraph",
              text: "However, there are some extra special locations you might want to consider. The Hananui and Tokoeka PurePods are on beautiful Rakiura Stewart Island, which is the southernmost Dark Sky Sanctuary in the world and offers one of the darkest locations to view the night sky.",
            },
            {
              type: "paragraph",
              text: "The stars on a clear night are absolutely spectacular there, and if you are extra lucky, you might even get to witness the Aurora Australis, also known as the Southern Lights, usually between March and September.",
            },
            {
              type: "paragraph",
              text: "Manakau and Kahutara PurePods are in the Kaikōura Dark Sky Sanctuary and are another excellent location for observing the stars.",
            },
          ],
        },
      },
      {
        question: "Does it have a proper toilet & shower?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Yes! Each PurePod has a fully plumbed piping hot shower and a flush toilet.",
            },
            {
              type: "paragraph",
              text: "Everything is designed to be eco-friendly while still giving you a comfortable experience.",
            },
          ],
        },
      },
      {
        question: "Can anyone see me in the bathroom?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "No. Each PurePod is located on private property, away from roads, the public, and other houses, so we can guarantee you absolute privacy.",
            },
            {
              type: "paragraph",
              text: "There are shower curtains and blinds on all windows and the ceiling if you feel like pulling them at any time during your stay.",
            },
          ],
        },
      },
      {
        question: "Can we bring our dog?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "We love dogs, but unfortunately PurePods are not pet-friendly.",
            },
            {
              type: "paragraph",
              text: "This helps us protect the surrounding wildlife and keep the experience pristine for future guests.",
            },
          ],
        },
      },
      {
        question: "Is there mobile phone reception?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Most PurePods are in remote locations with limited mobile reception depending on your provider, and some have none.",
            },
            {
              type: "paragraph",
              text: "It’s the perfect excuse to switch off and enjoy the moment.",
            },
          ],
        },
      },
      {
        question: "Are there 240V power points available if it is solar powered?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "There are no standard 240V power plugs due to the off-grid nature of the PurePod, as these require a high level of power.",
            },
            {
              type: "paragraph",
              text: "However, if your device is USB chargeable, there is a USB charging point available on the control panel above the kitchen sink.",
            },
          ],
        },
      },
      {
        question: "Can I charge my CPAP machine in the PurePod?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "If you need to plug in a CPAP machine overnight, we have extra power available at Rewarewa, Ruru, Kokomea, Haurapa, and Tāima PurePods.",
            },
            {
              type: "paragraph",
              text: "Just let us know in advance so we can switch it on for you.",
            },
          ],
        },
      },
      {
        question: "Do you cater for dietary requirements?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Yes! You can select dietary options when booking, or add details in the notes section if yours isn’t listed.",
            },
            {
              type: "paragraph",
              text: "Some special requests may have a small extra charge due to our remote locations.",
            },
          ],
        },
      },
      {
        question: "Is there WiFi?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "No, there’s no WiFi. PurePods are all about unplugging and unwinding.",
            },
            {
              type: "paragraph",
              text: "You might see a router at some locations for our solar systems, but it’s not accessible to guests.",
            },
            {
              type: "paragraph",
              text: "Some mobile networks may have reception, and there’s an emergency phone if needed.",
            },
          ],
        },
      },
      {
        question: "What should I bring?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Pack for comfort and adventure.",
            },
            {
              type: "paragraph",
              text: "Bring cosy layers, sturdy shoes, and a waterproof jacket. New Zealand weather can be unpredictable.",
            },
            {
              type: "paragraph",
              text: "Don’t forget any personal essentials, plus a good book, your knitting, painting supplies, or your favourite card games.",
            },
            {
              type: "paragraph",
              text: "And of course, bring your favourite beverage to sip while soaking in the views.",
            },
          ],
        },
      },
      {
        question: "Can I fly a drone?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "As our PurePods are on private land, to fly your drone you need to get the consent of property owners and people who could be interrupted.",
            },
            {
              type: "paragraph",
              text: "Remember:",
            },
            {
              type: "list",
              items: [
                "You must not fly over people unless you have their consent.",
                "You must not fly your aircraft over any property unless you have consent.",
              ],
            },
            {
              type: "paragraph",
              text: "If you have booked a PurePod stay and want to use a drone, please let us know and our team can ask on your behalf.",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Bookings",
    items: [
      {
        question: "What can I do if the date I need is booked out?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "We understand you might need a specific date to celebrate a special occasion.",
            },
            {
              type: "paragraph",
              text: "If this date is booked out, please get in contact and we can put you on a waitlist or help you choose another location, as we have a number of PurePods nationwide.",
            },
          ],
        },
      },
      {
        question: "Can I bring a third guest / children?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "No, sorry. PurePods are designed for two guests only.",
            },
            {
              type: "paragraph",
              text: "For safety reasons, we can’t allow a third person to stay, as it would block the exits.",
            },
          ],
        },
      },
      {
        question: "How does check-in work?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "There’s no reception — just pure freedom.",
            },
            {
              type: "paragraph",
              text: "Before your stay, we’ll email you to confirm your arrival time and vehicle details so the landowner knows when to expect you.",
            },
            {
              type: "paragraph",
              text: "That’s it — you’re all set.",
            },
          ],
        },
      },
      {
        question: "How does check-out work?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Super easy. Just leave by 11am, and our team will take care of the rest.",
            },
            {
              type: "paragraph",
              text: "No need to check out anywhere, just head off when you’re ready.",
            },
          ],
        },
      },
      {
        question: "Do I need 4WD?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Some locations benefit from a 4WD depending on the season, but if you don’t have one, we’ll provide alternative driving instructions.",
            },
            {
              type: "paragraph",
              text: "Most sites are accessible with an AWD, as the roads are gravel.",
            },
            {
              type: "paragraph",
              text: "If you are new to driving on gravel roads, take it slow, follow the wheel marks, and avoid rapid acceleration.",
            },
          ],
        },
      },
      {
        question: "Are all prices on the website in NZD?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Yes, all rates listed on the PurePods website are in New Zealand Dollars, NZD.",
            },
            {
              type: "paragraph",
              text: "You may see other currencies on other websites and booking platforms, so it pays to check which currency they are referring to.",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Emergency",
    items: [
      {
        question: "Can I call someone if there is an emergency?",
        answer: {
          blocks: [
            {
              type: "paragraph",
              text: "Each PurePod has communication facilities for emergencies.",
            },
            {
              type: "paragraph",
              text: "Instructions are available in each PurePod to ensure you can explain your location.",
            },
            {
              type: "paragraph",
              text: "Each PurePod also has a personal location beacon for added safety.",
            },
          ],
        },
      },
    ],
  },
];

function answerToText(item: FaqSection["items"][number]) {
  return item.answer.blocks
    .flatMap((block) => (block.type === "paragraph" ? block.text : block.items))
    .join(" ");
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <FaqHeader />
      <main id="main" className={styles.page}>
        <div id="faq-content" className={styles.wrap}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>PurePods</p>
            <h1>Frequently Asked Questions</h1>
            <p className={styles.intro}>
              To make sure you&apos;re fully prepared for your unforgettable
              PurePods experience, we&apos;ve put together answers to some of the
              most common questions.
            </p>
          </header>
          <FaqAccordion sections={faqSections} />
        </div>
      </main>
      <Footer brandLogo simplified />
    </>
  );
}
