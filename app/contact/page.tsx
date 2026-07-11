import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";
import ContactFooter from "./ContactFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <ContactHeader />
      <ContactContent />
      <ContactFooter />
    </main>
  );
}