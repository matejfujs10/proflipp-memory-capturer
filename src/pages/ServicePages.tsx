import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import familyHero from "@/assets/wedding-fun.jpg";
import family1 from "@/assets/family-1.jpg";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/family-3.jpg";
import family4 from "@/assets/family-4.jpg";

const defaultPackages = [
  { name: "MINI PRO", price: "150", duration: "1 ura fotografiranja", description: "Kratek, sproščen session za naravne trenutke.", features: ["Vodeno, a naravno", "Izbor najboljših fotografij", "Digitalna dostava"] },
  { name: "GOLD PRO", price: "196", duration: "2 uri fotografiranja", description: "Več časa, več raznolikih kadrov.", features: ["Več kombinacij", "Sproščeno v vašem ritmu", "Online fotoknjiga"], popular: true },
  { name: "DIAMANT PRO", price: "274", duration: "3 ure fotografiranja", description: "Bogat nabor spominov.", features: ["Več lokacij", "Največ raznolikosti", "Premium obdelava"] },
];

const travelPackages = [
  { 
    name: "KRATEK IZLET", 
    price: "450", 
    duration: "Do 6 ur fotografiranja", 
    description: "Idealno za krajše enodnevne dogodivščine.", 
    features: [
      "150+ profesionalno obdelanih fotografij",
      "Osnovna barvna korekcija in stilizacija",
      "Spletna galerija za prenos in deljenje",
      "Licenca za osebno in promocijsko uporabo"
    ] 
  },
  { 
    name: "DALJŠI IZLET", 
    price: "850", 
    duration: "Do 10 ur fotografiranja", 
    description: "Popolno za daljše izlete z video vsebino.", 
    features: [
      "300+ profesionalno obdelanih fotografij",
      "EVENT CONTENT VIDEO (30–60 s)",
      "Primerno za Instagram Reels / TikTok / Shorts",
      "Dinamična montaža + color grading",
      "Spletna galerija + video prenos",
      "Licenca za komercialno uporabo"
    ],
    popular: true 
  },
  { 
    name: "CELODNEVNI IZLET", 
    price: "1600", 
    duration: "Do 24 ur prisotnosti", 
    description: "Fleksibilno fotografiranje za celodnevne projekte.", 
    features: [
      "600+ profesionalno obdelanih fotografij",
      "EVENT CONTENT VIDEO – RAZŠIRJEN (60–90 s)",
      "2–3 kratki social media klipi",
      "Napredna montaža + color grading",
      "Premium spletna galerija",
      "Polna komercialna licenca"
    ] 
  },
];

const familyGalleryImages = [family1, family2, family3, family4];

interface PackageType {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  showGallery?: boolean;
  galleryImages?: string[];
  customPackages?: PackageType[];
  additionalInfo?: string[];
}

function ServicePage({ title, subtitle, description, showGallery, galleryImages, customPackages, additionalInfo }: ServicePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const packages = customPackages || defaultPackages;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={familyHero} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{subtitle}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">{title}</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Izberite paket</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sproščeni sessioni za pristne spomine.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
          
          {additionalInfo && additionalInfo.length > 0 && (
            <div className="mt-12 max-w-2xl mx-auto">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">Dodatne informacije</h3>
              <ul className="space-y-2">
                {additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-gold mt-1">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {showGallery && galleryImages && galleryImages.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Galerija</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Poglejte si nekaj naših družinskih fotografij.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Družinska fotografija ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Povečana fotografija" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export function Druzine() {
  return <ServicePage 
    title="Družinsko fotografiranje" 
    subtitle="Storitve" 
    description="Sproščen pristop za naravne družinske trenutke. Vsak session prilagodimo vam."
    showGallery={true}
    galleryImages={familyGalleryImages}
  />;
}

export function Novorojencki() {
  return <ServicePage title="Fotografiranje novorojenčkov" subtitle="Prvi dnevi. Najlepši spomini." description="Prihod dojenčka je enkraten trenutek. Ujemimo ga nežno in sproščeno." />;
}

export function Potovanja() {
  const additionalInfo = [
    "Potni stroški niso vključeni v ceno",
    "Nočitve pri večdnevnih projektih niso vključene",
    "Hitra dostava (48 h): +150 €",
    "Možnost foto-knjige ali dodatnih video vsebin po dogovoru"
  ];
  
  return (
    <ServicePage 
      title="Potovalno fotografiranje" 
      subtitle="Potovanje mine. Fotografije ostanejo." 
      description="Potovanja in doživetja so neponovljiva — in ravno zato si zaslužijo fotografije, ki jih boste z veseljem podoživljali."
      customPackages={travelPackages}
      additionalInfo={additionalInfo}
    />
  );
}
