import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import eventsHero from "@/assets/wedding-toast.jpg";
import eventDog from "@/assets/event-dog.jpg";
import eventHorse from "@/assets/event-horse.jpg";
import eventParty from "@/assets/event-party.jpg";
import eventDog2 from "@/assets/event-dog2.jpg";
import eventBw from "@/assets/event-bw.jpg";
import eventCake from "@/assets/event-cake.jpg";

const packages = [
  { name: "MINI PRO", price: "196", duration: "2 uri prisotnosti", description: "Hitra, učinkovita pokritost dogodka.", features: ["Reportažne fotografije dogajanja", "Ključni kadri", "Ekspresna obdelava"] },
  { name: "GOLD PRO", price: "343", duration: "4 ure prisotnosti", description: "Najboljša izbira za večino dogodkov.", features: ["Širši zajem dogajanja", "'PR-ready' fotografije", "Urejena galerija"], popular: true },
  { name: "DIAMANT PRO", price: "441", duration: "6 ur prisotnosti", description: "Za večje dogodke s celovitim vizualnim materialom.", features: ["Celovit reportažni pristop", "Premium izbor", "Kratki event content video"] },
];

const videoPackages = [
  { name: "EVENTvideo START", price: "450", duration: "Do 4 ure", description: "Za krajše dogodke.", features: ["60–120 s 'after movie'", "Osnovna montaža"] },
  { name: "EVENTvideo PRO", price: "730", duration: "Do 8 ur", description: "Za konference in večje evente.", features: ["2–3 min 'after movie'", "'Brand' občutek"] },
  { name: "EVENTvideo MAX", price: "1.030", duration: "Do 10 ur", description: "Celodnevni event.", features: ["3–5 min 'after movie'", "Več 'B-roll' materiala"] },
];

const galleryImages = [
  { src: eventParty, alt: "Zabava na dogodku" },
  { src: eventCake, alt: "Rezanje torte" },
  { src: eventDog, alt: "Pes na dogodku" },
  { src: eventHorse, alt: "Konj" },
  { src: eventDog2, alt: "Pes s pentljo" },
  { src: eventBw, alt: "Druženje na zabavi" },
];

export default function Dogodki() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={eventsHero} alt="Fotografiranje dogodkov" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Storitve</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">Fotografiranje dogodkov</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Dobro fotografijo dogodka naredi trenutek – in fotograf, ki je točno tam, kjer mora biti.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Galerija</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">Utrinki z dogodkov</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
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
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Izberite paket</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Video paketi za dogodke</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {videoPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
