import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";
import { TravelReservationForm } from "@/components/TravelReservationForm";
import { Lightbox } from "@/components/Lightbox";
import familyHero from "@/assets/wedding-fun.webp";
import family1 from "@/assets/family-1.webp";
import family2 from "@/assets/family-2.webp";
import family3 from "@/assets/family-3.webp";
import family4 from "@/assets/family-4.webp";

// Travel images
import travelHero from "@/assets/travel-hero.webp";
import travel1 from "@/assets/travel-1.webp";
import travel2 from "@/assets/travel-2.webp";
import travel3 from "@/assets/travel-3.webp";
import travel4 from "@/assets/travel-4.webp";
import travel5 from "@/assets/travel-5.webp";
import travel6 from "@/assets/travel-6.webp";
import travel7 from "@/assets/travel-7.webp";
import travel8 from "@/assets/travel-8.webp";
import travel9 from "@/assets/travel-9.webp";

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

const travelGalleryImages = [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9];

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
        <div className="absolute inset-0 h-[40vh]">
          <img src={familyHero} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-16 pb-20">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{subtitle}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">{title}</h1>
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
                    loading="lazy"
                    decoding="async"
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
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const additionalInfo = [
    "Potni stroški niso vključeni v ceno",
    "Nočitve pri večdnevnih projektih niso vključene",
    "Hitra dostava (48 h): +150 €",
    "Možnost fotoknjige ali dodatnih videovsebine po dogovoru"
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh] md:h-[60vh]">
          <img 
            src={travelHero} 
            alt="Potovalno fotografiranje" 
            className="w-full h-full object-cover" 
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Potovanje mine. Fotografije ostanejo.</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">Potovalno fotografiranje</h1>
          <p className="text-xl font-semibold mt-4">
            <span className="text-[#4a9fe8]">We Create </span>
            <span className="text-gold italic">Emotions!</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-foreground/90 space-y-6">
              <p className="text-lg leading-relaxed">
                Vsak izlet ima svojo zgodbo. Naj bo to kratek pobeg iz vsakdana, spontana avantura, obisk muzeja ali posebne ustanove – vse je vredno, da se zabeleži. Trenutki, ki jih doživite danes, bodo jutri spomini, ki jih boste želeli znova občutiti. Prav zato potovalno fotografiranje ni razkošje, ampak naložba v spomine, ki ostanejo.
              </p>
              <p className="text-lg leading-relaxed">
                Mi ne lovimo le lepih kadrov – lovimo občutke, dinamiko in pristnost trenutka. Ujamemo vzdušje kraja, energijo ljudi in zgodbo poti, ki jo doživljate.
              </p>
            </div>

            {/* Why PROFLIPP */}
            <div className="mt-12 bg-cream rounded-2xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">Zakaj najeti PROFLIPP ekipo?</h2>
              <p className="text-foreground/80 mb-6">
                Ker združujemo profesionalno fotografijo, video produkcijo in občutek za zgodbo. Smo ekipa ustvarjalcev, ki razume, kako pomembno je, da se trenutki ne le posnamejo, ampak tudi pravilno predstavijo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-gold text-lg">✔</span>
                  <span>Izkušeni fotografi in videografi</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-gold text-lg">✔</span>
                  <span>Diskreten, sproščen pristop brez poziranja</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-gold text-lg">✔</span>
                  <span>Vrhunska postprodukcija in hiter turnaround</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-gold text-lg">✔</span>
                  <span>Prilagoditev vašemu stilu, cilju ali blagovni znamki</span>
                </li>
              </ul>
            </div>

            {/* Event Content */}
            <div className="mt-8 p-6 border-l-4 border-gold bg-gold/5 rounded-r-lg">
              <p className="text-foreground/90 leading-relaxed">
                Poleg fotografij ustvarjamo tudi kratke <strong>EVENT CONTENT videje</strong> – dinamične, sodobne video posnetke, idealne za družbena omrežja, spletne strani ali promocijo. Popolni za prikaz doživetja, atmosfere in energije dogodka ali potovanja.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <p className="text-lg text-foreground/80 flex items-center justify-center gap-2">
                <span className="text-gold">📍</span>
                Izlet, avantura ali kulturni obisk – mi poskrbimo, da vaša zgodba dobi vizualno obliko, ki jo boste z veseljem delili in ohranili.
              </p>
              <p className="text-xl font-semibold mt-4">
                <span className="text-[#4a9fe8]">We Create </span>
                <span className="text-gold italic">Emotions!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Galerija potovanj</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Poglejte si nekaj naših potovalnih fotografij iz različnih destinacij.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {travelGalleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image} 
                  alt={`Potovalna fotografija ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Izberite paket</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sproščeni sessioni za pristne spomine.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {travelPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsReservationOpen(true)} />)}
          </div>
          
          {/* Additional Info */}
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

          {/* Gift Voucher Section */}
          <GiftVoucherSection 
            onReserve={() => setIsReservationOpen(true)} 
            title="Rezervirajte vaše potovanje"
          />
        </div>
      </section>

      <Footer />
      
      {/* Lightbox */}
      <Lightbox
        images={travelGalleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      
      {/* Reservation Form */}
      <TravelReservationForm isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  );
}
