import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import weddingHero from "@/assets/wedding-ceremony.jpg";

const packages = [
  {
    name: "FLIPPmikro",
    price: "345",
    duration: "2 uri prisotnosti",
    description: "Kratek, a močan paket za civilni obred ali krajše poročno dogajanje.",
    features: ["Reportažni pristop (naravno, brez poziranja)", "Izbor najboljših trenutkov + detajli", "Profesionalno urejene fotografije", "Ekspresna obdelava"],
  },
  {
    name: "FLIPPmini",
    price: "490",
    duration: "4 ure prisotnosti",
    description: "Idealno za manjše poroke ali poročni del dneva, kjer želiš lepo zgodbo brez stresa.",
    features: ["Celovit mini-reportažni potek", "Skupinske + spontane fotografije", "Urejena online galerija za deljenje z gosti"],
  },
  {
    name: "FLIPPgold",
    price: "882",
    duration: "8 ur prisotnosti",
    description: "Najbolj uravnotežena izbira za 'klasičen' poročni dan.",
    features: ["Profesionalno, sproščeno fotografiranje", "Spontani trenutki v iskrenih čustvih", "Personaliziran digitalni foto album", "Izbrane printane fotografije", "Posebno DARILO za mladoporočenca"],
    popular: true,
  },
  {
    name: "FLIPPdiamant",
    price: "1.470",
    duration: "12 ur prisotnosti",
    description: "Za pare, ki želijo maksimalno pokritost in top rezultat.",
    features: ["Razširjena ponudba za popolno zgodbo", "ONLINE fotoalbum + Slide Show", "Printane fotografije", "Posebno DARILO za mladoporočenca", "Premium obdelava + 'best of' izbor"],
  },
];

const videoPackages = [
  { name: "FLIPP Content video", price: "250", duration: "2-6x kratki Content Video", description: "Dodatek k fotografiji: kratek, čustven povzetek dneva.", features: ["Kratki video povzetki", "Dinamičen 'social' format", "Dostava digitalno"] },
  { name: "FLIPPvideo MINI", price: "350", duration: "Do 3 ure snemanja", description: "Za civilni obred / krajšo poroko.", features: ["Highlight film (3–5 min)", "Dostava digitalno"] },
  { name: "FLIPPvideo CLASSIC", price: "550", duration: "Do 12 ur prisotnosti", description: "Zgodba dneva v lepem tempu, čustva in vsi pomembni trenutki.", features: ["1 snemalec", "Highlight film + daljši film", "Barvna korekcija"] },
  { name: "FLIPPvideo PREMIUM", price: "850", duration: "Do 13 ur prisotnosti", description: "Ko želiš več dinamike in bolj 'filmski' občutek.", features: ["Kreativni film (15–25 min)", "Snemanje v 4K", "Naprednejši 'grading'"] },
];

export default function Poroke() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingHero} alt="Poročna fotografija" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Storitve</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">Poročna fotografija</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Ljubezen je v drobnih stvareh: pogledih, dotikih, nasmehih in tistih čisto vajinih trenutkih. 
            Na poročni dan sta v ospredju vidva – mi pa ujamemo zgodbo tako, da bodo fotografije pristne, vesele in polne čustev.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Izberita paket</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Izberita paket, ki najbolj ustreza vajinemu dnevu.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Video paketi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Dodajte video k fotografiji za popolno zgodbo vajinega dne.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
