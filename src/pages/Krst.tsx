import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

import krstHero from "@/assets/krst-1.jpg";
import krst1 from "@/assets/krst-1.jpg";
import krst2 from "@/assets/krst-2.jpg";
import krst3 from "@/assets/krst-3.jpg";
import krst4 from "@/assets/krst-4.jpg";

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
      "USB ključek + mini foto knjiga",
      "Potni stroški do ~50 km vključeni",
    ],
  },
];

const additionalOptions = [
  "Izdelava fotoknjige ali foto albuma (od ~60 €+)",
  "Tisk izbranih fotografij v velikostih 10×15 ali več",
  "Portretna mini-seansa pred ali po obredu",
  "Ekspresna obdelava fotografij",
];

const galleryImages = [krst1, krst2, krst3, krst4];

export default function Krst() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={krstHero} alt="Fotografiranje krsta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{t('nav.baptism') || 'Storitve'}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">
            {t('baptism.title') || 'Fotografiranje krsta'}
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Vsak krst je edinstven in poln čustev — od trenutkov priprav doma, svetega obreda v cerkvi, do prvih skupinskih fotografij z botri in družino.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-background">
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
                👉 Po obredu prejmete profesionalno obdelane fotografije v digitalni obliki preko spletne galerije ali USB ključka, dodatno po želji tudi foto knjigo ali tiskane fotografije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
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
            <p className="text-muted-foreground text-sm mt-6 italic">
              Cene dodatkov se razlikujejo po ponudnikih.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Galerija krstov
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Poglejte naše fotografije krstov.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Krst fotografija ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
