import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WeddingContentSection } from "@/components/WeddingContentSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PromoBanner, EarlyBird2027Section } from "@/components/PromoBanner";
import { SEOHead } from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    trackEvent('landing_view');
  }, []);
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Poročni fotograf Slovenija & Austria | Wedding Photographer Europe | Proflipp"
        description="Poročni fotograf za Slovenijo in Avstrijo. Wedding photographer za destination weddings po Evropi. Ujamemo pristne trenutke in ustvarimo brezčasne fotografije."
        canonical="/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <PromoBanner />
        <EarlyBird2027Section />
        {/* SEO content – visually hidden, accessible to search engines */}
        <div className="sr-only" aria-hidden="true">
          <h1>Poročni fotograf Slovenija, Avstrija & Evropa</h1>
          <p>Proflipp je profesionalni poročni fotograf v Sloveniji in Avstriji, specializiran za dokumentarno poročno fotografijo, ki ujame pristne trenutke in čustva. Fotografiramo poroke po Sloveniji, Avstriji in Evropi.</p>
          <p>If you are looking for a wedding photographer in Austria, Slovenia or anywhere in Europe, we create timeless and emotional wedding photography that tells your story.</p>
          <p>Če iščete poročnega fotografa v Ljubljani, Mariboru, Gradcu (Graz), Dunaju (Vienna) ali za destination wedding, ustvarjamo brezčasne fotografije, ki pripovedujejo vašo zgodbo.</p>
          <p>Naše storitve vključujejo poročno fotografijo, fotografiranje dogodkov in družinsko fotografijo. Vsaka fotografija je skrbno obdelana in pripravljena za dolgoročne spomine.</p>
          <p>Wedding photography is more than just taking photos – it is storytelling. As a wedding photographer in Austria and Slovenia, we focus on natural, candid and emotional moments.</p>
          <p>Delujemo po celotni Sloveniji, Avstriji in Evropi kot destination wedding photographer. Naš cilj je ujeti resnične trenutke brez poziranja.</p>
          <p>Poročni fotograf Ljubljana. Poročni fotograf Maribor. Poročni fotograf Slovenija.</p>
          <p>Hochzeitsfotograf Wien. Hochzeitsfotograf Graz. Hochzeitsfotograf Österreich.</p>
          <p>Wedding photographer Vienna. Wedding photographer Austria. Wedding photographer Slovenia. Destination wedding photographer Europe.</p>
          <p>Proflipp je izkušen poročni fotograf v Sloveniji in Avstriji, ki pokriva poroke v Ljubljani, Mariboru, na Dunaju in v Gradcu ter širše po Evropi. Specializirani smo za wedding photography, destination weddings in ustvarjanje brezčasnih poročnih fotografij.</p>
          <p>As a wedding photographer Austria & Slovenia, we offer full-day coverage, more than 1000 edited photos, online gallery and storytelling approach focused on real emotions.</p>
        </div>
        <WeddingContentSection />
        <ServicesSection />
        <GallerySection />
        <FeaturesSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
