import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Kontakt() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-20" />
      <ContactSection />
      <Footer />
    </div>
  );
}
