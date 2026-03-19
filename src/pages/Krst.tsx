import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";
import { Lightbox } from "@/components/Lightbox";
import { useLanguage } from "@/contexts/LanguageContext";

import krstHero from "@/assets/krst-1.jpg";
import krst1 from "@/assets/krst-1.jpg";
import krst2 from "@/assets/krst-2.jpg";
import krst3 from "@/assets/krst-3.jpg";
import krst4 from "@/assets/krst-4.jpg";
import krst5 from "@/assets/krst-5.jpg";
import krst6 from "@/assets/krst-6.jpg";
import krst7 from "@/assets/krst-7.jpg";
import krst8 from "@/assets/krst-8.jpg";
import krst9 from "@/assets/krst-9.jpg";
import krst10 from "@/assets/krst-10.jpg";
import krst11 from "@/assets/krst-11.jpg";
import krst12 from "@/assets/krst-12.jpg";
import krst13 from "@/assets/krst-13.jpg";
import krst14 from "@/assets/krst-14.jpg";
import krst15 from "@/assets/krst-15.jpg";
import krst16 from "@/assets/krst-16.jpg";

const packages = [
  {
    name: "Paket Bazični – Družinski spomini",
    price: "190",
    duration: "1,5 ure prisotnosti",
    description: "Idealno za manjši, intimni krst ali če želite pokriti samo najpomembnejše trenutke.",
    features: [
      "Fotografiranje obreda v cerkvi",
      "Portretne in skupinske fotografije s starši, botri in družino",
      "Obdelane digitalne fotografije (50–80 kosov)",
      "Spletna galerija za prenos",
    ],
  },
  {
    name: "Paket Standard – Celotna zgodba",
    price: "250",
    duration: "2,5 ure prisotnosti",
    description: "Za tiste, ki želite ujeti celoten potek krsta od priprav do obreda.",
    features: [
      "Fotografiranje priprav pred cerkvijo",
      "Cerkvenega obreda in obrednega dogajanja",
      "Portretno fotografiranje z družino in botri",
      "80–120 profesionalno obdelanih fotografij",
      "USB ali spletna galerija",
      "Izdelava spletne fotoknjige, idealne za deljenje",
      "10x tiskane fotografije 10×15",
    ],
    popular: true,
  },
  {
    name: "Paket Premium – Razširjena zgodba",
    price: "350",
    duration: "Do 3,5 ure prisotnosti",
    description: "Popolna pokritost krsta, priprav in praznovanja.",
    features: [
      "Fotografiranje priprav + cerkvenega obreda + praznovanja",
      "120+ obdelanih fotografij",
      "USB ključek + mini fotoknjiga",
      "Potni stroški do ~50 km vključeni",
      "Izdelava spletne fotoknjige, idealne za deljenje",
      "20x tiskane fotografije 10×15",
      "Kratki content videji (2–5 videjev)",
    ],
  },
];

const additionalOptions = [
  "Izdelava fotoknjige ali fotoalbuma (od ~60 €+)",
  "Tisk izbranih fotografij v velikostih 10×15 ali več",
  "Portretna mini seansa pred ali po obredu",
  "Ekspresna obdelava fotografij",
];

const galleryImages = [krst1, krst2, krst3, krst4, krst5, krst6, krst7, krst8, krst9, krst10, krst11, krst12, krst13, krst14, krst15, krst16];

export default function Krst() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useLanguage();

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Baptism Photography | Proflipp"
        description="Capturing precious baptism ceremony moments with professional and discreet photography."
        canonical="/baptism-photography"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[40vh]">
          <img src={krstHero} alt="Fotografiranje krsta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-16 pb-20">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{t('nav.baptism') || 'Storitve'}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            {t('baptism.title') || 'Fotografiranje krsta'}
          </h1>
          <p className="text-foreground text-lg max-w-2xl leading-relaxed">
            Vsak krst je edinstven in poln čustev — od trenutkov priprav doma, svetega obreda v cerkvi, do prvih skupinskih fotografij z botri in družino.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Naša naloga je ujeti pristne, iskrene trenutke v visokokakovostnih fotografijah, ki bodo ostale vaš neprecenljiv spomin za vse generacije.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                👉 Fotografiranje poteka z diskretno prisotnostjo, spoštovanjem do obreda in z občutkom za detajle. Pred dogodkom se dogovorimo o poteku in vaših željah (lokacija, čas, posebne želje fotografiranja).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                👉 Po obredu prejmete profesionalno obdelane fotografije v digitalni obliki prek spletne galerije ali USB ključka, dodatno po želji tudi fotoknjigo ali tiskane fotografije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
              {t('baptism.packages') || 'Izberite paket'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Izberite paket, ki najbolje ustreza vašemu krstu.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Dodatne možnosti
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <span className="text-primary">✔</span>
                  <span className="text-muted-foreground text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Galerija krstov
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oglejte si naše fotografije krstov.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image} 
                  alt={`Fotografija krsta ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Gift Voucher Section */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      <Lightbox 
        images={galleryImages} 
        initialIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
