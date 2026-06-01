import { Footer } from "@/components/layout/Footer";
import { FaqHeader } from "@/app/frequently-asked-questions/FaqHeader";
import { NotFoundContent } from "./NotFoundContent";

/** Full-page 404 chrome for segments without their own Header/Footer layout. */
export function NotFoundPageShell() {
  return (
    <>
      <FaqHeader />
      <NotFoundContent />
      <Footer brandLogo simplified />
    </>
  );
}
