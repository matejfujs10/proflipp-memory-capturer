import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";
import { Check } from "lucide-react";

// Hero image
import heroImage from "@/assets/family-10.jpg";

// Gallery images
import family1 from "@/assets/family-1.jpg";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/family-3.jpg";
import family4 from "@/assets/family-4.jpg";
import family5 from "@/assets/family-5.jpg";
import family6 from "@/assets/family-6.jpg";
import family7 from "@/assets/family-7.jpg";
import family8 from "@/assets/family-8.jpg";
import family9 from "@/assets/family-9.jpg";
import family10 from "@/assets/family-10.jpg";
import family11 from "@/assets/family-11.jpg";
import family12 from "@/assets/family-12.jpg";
import family13 from "@/assets/family-13.jpg";
import family14 from "@/assets/family-14.jpg";

const packages = [
  { 
    name: "MINI PRO", 
    price: "150", 
    duration: "1 ura fotografiranja", 
    description: "Kratek, sproščen session za naravne trenutke.", 
    features: ["Vodeno, a naravno", "Izbor najboljših fotografij", "Digitalna dostava"] 
  },
  { 
    name: "GOLD PRO", 
    price: "196", 
    duration: "2 uri fotografiranja", 
    description: "Več časa, več raznolikih kadrov.", 
    features: ["Več kombinacij", "Sproščeno v vašem ritmu", "Online fotoknjiga"], 
    popular: true 
  },
  { 
    name: "DIAMANT PRO", 
    price: "274", 
    duration: "3 ure fotografiranja", 
    description: "Bogat nabor spominov.", 
    features: ["Več lokacij", "Največ raznolikosti", "Premium obdelava"] 
  },
];

const galleryImages = [
  family1, family2, family3, family4, family5, family6, family7, 
  family8, family9, family10, family11, family12, family13, family14
];

const whyChooseFeatures = [
  "Naraven, brezčasen stil fotografije",
  "Sproščen pristop in prijetna izkušnja",
  "Pozornost do detajlov in čustev",
  "Profesionalna obdelava in hitra dostava fotografij"
];

export function Druzine() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[60vh]">
          <img src={heroImage} alt="Družinsko fotografiranje" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-24 pb-40">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Storitve</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">
            Družinsko fotografiranje
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Sproščen pristop za naravne družinske trenutke. Vsak session prilagodimo vam.
          </p>
        </div>
      </section>

      {/* Section 1: Why Family Photography */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Zakaj družinsko fotografiranje?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Čas z družino mine hitreje, kot si mislimo. Otroci rastejo, izrazi se spreminjajo, 
                  trenutki pa pogosto ostanejo le v spominu ali na telefonu. Družinsko fotografiranje 
                  je priložnost, da te trenutke za vedno ujamemo – pristno, iskreno in brez prisile.
                </p>
                <p>
                  Ne gre le za lepe fotografije, ampak za zgodbo vaše družine. Za smeh, objeme, 
                  drobne poglede in povezavo, ki jo boste čutili tudi čez leta, ko boste fotografije 
                  gledali skupaj. To so spomini, ki postanejo del vašega doma – na stenah, v albumih 
                  in v srcih.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={family5} alt="Družina v naravi" className="w-full rounded-lg object-cover aspect-[4/5]" />
                <img src={family8} alt="Otrok se igra" className="w-full rounded-lg object-cover aspect-square" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={family6} alt="Otrok v travi" className="w-full rounded-lg object-cover aspect-square" />
                <img src={family7} alt="Otrok teče" className="w-full rounded-lg object-cover aspect-[4/5]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src={family9} alt="Otrok na travi" className="w-full rounded-lg object-cover aspect-[3/4]" />
              <img src={family11} alt="Otroci tečejo" className="w-full rounded-lg object-cover aspect-[3/4]" />
              <img src={family13} alt="Družina ob drevesu" className="w-full rounded-lg object-cover col-span-2 aspect-[16/9]" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Kako poteka družinsko fotografiranje?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fotografiranje poteka sproščeno, brez togih poz in umetnih nasmehov. 
                  Pred fotografiranjem se pogovorimo o vaših željah, lokaciji in vzdušju, 
                  ki si ga želite. Skupaj izberemo okolje, kjer se boste počutili dobro – 
                  v naravi, doma ali na vam ljubem kraju.
                </p>
                <p>
                  Med fotografiranjem vas nežno usmerjam, a hkrati pustim prostor spontanosti. 
                  Otroci se lahko igrajo, starši ste lahko to, kar ste – prisotni, povezani in sproščeni. 
                  Tako nastanejo fotografije, ki niso le lepe, ampak resnične.
                </p>
                <p>
                  Fotografiranje je prilagojeno vašemu tempu, brez hitenja in brez pritiska. 
                  Cilj je prijetna izkušnja za vso družino – tudi za tiste, ki pravijo, da "niso fotogenični".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Galerija
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Poglejte si nekaj naših družinskih fotografij.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          
          {/* Gift Voucher Section */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Izberite paket
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sproščeni sessioni za pristne spomine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Proflipp Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Zakaj izbrati Proflipp?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Pri Proflipp verjamemo, da so najboljše fotografije tiste, ki nekaj čutiš. 
                  Z izkušnjami dela z družinami, dogodki in porokami znamo ujeti prave trenutke – 
                  tudi takrat, ko jih sami skoraj ne opazite.
                </p>
              </div>
              <ul className="space-y-3">
                {whyChooseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Vsako družino obravnavamo individualno, z občutkom in spoštovanjem. 
                Naš cilj ni le fotografiranje, ampak ustvarjanje spominov, ki jih boste 
                z veseljem gledali znova in znova.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={family14} alt="Družina s dežniki" className="w-full rounded-lg object-cover aspect-[3/4]" />
              <img src={family12} alt="Družinski ogenj" className="w-full rounded-lg object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>

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
