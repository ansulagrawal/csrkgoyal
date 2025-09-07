import { DisclaimerModal } from "@/components/home/DisclaimerModal";
import HomePage from "./home/page";

export default function RootPage() {
  return (
    <>
      <DisclaimerModal />
      <HomePage />
    </>
  );
}
