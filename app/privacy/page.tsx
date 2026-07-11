import PrivacyFooter from "./PrivacyFooter";
import PrivacyHeader from "./PrivacyHeader";
import PrivacyContent from "./PrivacyContent";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <PrivacyHeader />
      <PrivacyContent />
      <PrivacyFooter />
    </main>
  );
}