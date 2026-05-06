import type { Metadata } from "next";
import FrequentlyAskedQuestionsPage from "@/app/frequently-asked-questions/page";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ | PurePods",
  },
  description:
    "Frequently asked questions about PurePods, including privacy, cooking facilities, bookings, check-in, check-out, mobile reception and emergency contact.",
  alternates: { canonical: "/faq/" },
};

export default FrequentlyAskedQuestionsPage;
