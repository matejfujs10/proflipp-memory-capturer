import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEOHead } from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";

export default function Kontakt() {
  useEffect(() => {
    trackEvent('contact_page_view');
  }, []);
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Proflipp | Wedding Photography Slovenia & Austria"
        description="Get in touch for wedding, family and event photography bookings."
        canonical="/contact"
      />
      <Navigation />
      <div className="h-20" />
      <ContactSection />
      <Footer />
    </div>
  );
}
