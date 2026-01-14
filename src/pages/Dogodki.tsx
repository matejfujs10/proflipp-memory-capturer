import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { EventGalleryCard } from "@/components/EventGalleryCard";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";
import { Lightbox } from "@/components/Lightbox";
import eventsHero from "@/assets/forestland-hero.jpg";
import eventDog from "@/assets/event-dog.jpg";
import eventHorse from "@/assets/event-horse.jpg";
import eventParty from "@/assets/event-party.jpg";
import eventDog2 from "@/assets/event-dog2.jpg";
import eventBw from "@/assets/event-bw.jpg";
import eventCake from "@/assets/event-cake.jpg";

// Festival Koper images
import festivalKoper1 from "@/assets/festival-koper-1.jpg";
import festivalKoper2 from "@/assets/festival-koper-2.jpg";
import festivalKoper3 from "@/assets/festival-koper-3.jpg";
import festivalKoper4 from "@/assets/festival-koper-4.jpg";
import festivalKoper5 from "@/assets/festival-koper-5.jpg";
import festivalKoper6 from "@/assets/festival-koper-6.jpg";
import festivalKoper7 from "@/assets/festival-koper-7.jpg";

// Martur images
import martur1 from "@/assets/martur-1.jpg";
import martur2 from "@/assets/martur-2.jpg";
import martur3 from "@/assets/martur-3.jpg";

// Forestland images
import forestland1 from "@/assets/forestland-1.jpg";
import forestland2 from "@/assets/forestland-2.jpg";
import forestland3 from "@/assets/forestland-3.jpg";
import forestland4 from "@/assets/forestland-4.jpg";
import forestland5 from "@/assets/forestland-5.jpg";
import forestland6 from "@/assets/forestland-6.jpg";

// Gasilci images
import gasilci1 from "@/assets/gasilci-1.jpg";
import gasilci2 from "@/assets/gasilci-2.jpg";
import gasilci3 from "@/assets/gasilci-3.jpg";

const packages = [
  { name: "MINI PRO", price: "196", duration: "2 uri prisotnosti", description: "Hitra, učinkovita pokritost dogodka.", features: ["Reportažne fotografije dogajanja", "Ključni kadri", "Ekspresna obdelava"] },
  { name: "GOLD PRO", price: "343", duration: "4 ure prisotnosti", description: "Najboljša izbira za večino dogodkov.", features: ["Širši zajem dogajanja", "»PR-ready« fotografije", "Urejena galerija"], popular: true },
  { name: "DIAMANT PRO", price: "441", duration: "6 ur prisotnosti", description: "Za večje dogodke s celovitim vizualnim materialom.", features: ["Celovit reportažni pristop", "Premium izbor", "Kratki content video"] },
];

const videoPackages = [
  { name: "EVENTvideo START", price: "450", duration: "Do 4 ure", description: "Za krajše dogodke.", features: ["60–120 s »after movie«", "Osnovna montaža"] },
  { name: "EVENTvideo PRO", price: "730", duration: "Do 8 ur", description: "Za konference in večje dogodke.", features: ["2–3 min »after movie«", "»Brand« občutek"] },
  { name: "EVENTvideo MAX", price: "1.030", duration: "Do 10 ur", description: "Celodnevni dogodek.", features: ["3–5 min »after movie«", "Več »B-roll« materiala"] },
];

const galleryImages = [
  { src: eventParty, alt: "Zabava na dogodku" },
  { src: eventCake, alt: "Rezanje torte" },
  { src: eventDog, alt: "Pes na dogodku" },
  { src: eventHorse, alt: "Konj" },
  { src: eventDog2, alt: "Pes s pentljo" },
  { src: eventBw, alt: "Druženje na zabavi" },
];

const festivalKoperImages = [
  { src: festivalKoper1, alt: "Festival Koper 1" },
  { src: festivalKoper2, alt: "Festival Koper 2" },
  { src: festivalKoper3, alt: "Festival Koper 3" },
  { src: festivalKoper4, alt: "Festival Koper 4" },
  { src: festivalKoper5, alt: "Festival Koper 5" },
  { src: festivalKoper6, alt: "Festival Koper 6" },
  { src: festivalKoper7, alt: "Festival Koper 7" },
];

const marturImages = [
  { src: martur1, alt: "Martur obletnica 1" },
  { src: martur2, alt: "Martur obletnica 2" },
  { src: martur3, alt: "Martur obletnica 3" },
];

const forestlandImages = [
  { src: forestland1, alt: "Forestland festival" },
  { src: forestland2, alt: "Forestland DJ" },
  { src: forestland3, alt: "Forestland tehnik" },
  { src: forestland4, alt: "Forestland koncert" },
  { src: forestland5, alt: "Forestland zabava" },
  { src: forestland6, alt: "Forestland luna" },
];

const gasilciImages = [
  { src: gasilci1, alt: "Gasilsko tekmovanje ekipa" },
  { src: gasilci2, alt: "Gasilsko tekmovanje" },
  { src: gasilci3, alt: "Gasilsko tekmovanje skok" },
];

export default function Dogodki() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allGalleryImagesSrc = galleryImages.map(img => img.src);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[40vh]">
          <img src={eventsHero} alt="Fotografiranje dogodkov" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-16 pb-20">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Storitve</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">Fotografiranje dogodkov</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Dobro fotografijo dogodka naredi trenutek – in fotograf, ki je točno tam, kjer mora biti.
          </p>
        </div>
      </section>

      {/* Event Galleries Section */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="text-center mb-8">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Pretekli dogodki</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-3">Naše reference</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <EventGalleryCard
              title="Forestland festival"
              coverImage={forestland1}
              images={forestlandImages}
            />
            <EventGalleryCard
              title="Gasilsko tekmovanje"
              coverImage={gasilci1}
              images={gasilciImages}
            />
            <EventGalleryCard
              title="3. mednarodni festival Žganje kuha Koper 2025"
              coverImage={festivalKoper1}
              images={festivalKoperImages}
            />
            <EventGalleryCard
              title="3. obletnica Martur 17. 10. 2024"
              coverImage={martur1}
              images={marturImages}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-8">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Galerija</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-3">Utrinki z dogodkov</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          
          {/* Gift Voucher Section */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">Izberite paket</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">Videopaketi za dogodke</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {videoPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <Lightbox 
        images={allGalleryImagesSrc} 
        initialIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
