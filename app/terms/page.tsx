import TermsHeader from "./TermsHeader";
import TermsContent from "./TermsContent";
import TermsFooter from "./TermsFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <TermsHeader />
      <TermsContent />
      <TermsFooter />
    </main>
  );
}