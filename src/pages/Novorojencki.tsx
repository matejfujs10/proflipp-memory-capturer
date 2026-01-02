import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { Check } from "lucide-react";

import newborn1 from "@/assets/newborn-1.jpg";
import newborn2 from "@/assets/newborn-2.jpg";
import newborn3 from "@/assets/newborn-3.jpg";
import newborn4 from "@/assets/newborn-4.png";
import newborn5 from "@/assets/newborn-5.jpg";
import newborn6 from "@/assets/newborn-6.jpg";
import newborn7 from "@/assets/newborn-7.jpg";
import newborn8 from "@/assets/newborn-8.webp";
import newborn9 from "@/assets/newborn-9.jpg";

const packages = [
  { 
    name: "MINI PRO", 
    price: "150", 
    duration: "1 ura fotografiranja", 
    description: "Kratek, nežen session za osnovne spomine.", 
    features: ["Nežno usmerjanje", "Izbor najboljših fotografij", "Digitalna dostava"] 
  },
  { 
    name: "GOLD PRO", 
    price: "196", 
    duration: "2 uri fotografiranja", 
    description: "Več časa za popolne trenutke.", 
    features: ["Prilagojeno ritmu dojenčka", "Vključeni starši in detajli", "Online fotoknjiga"], 
    popular: true 
  },
  { 
    name: "DIAMANT PRO", 
    price: "274", 
    duration: "3 ure fotografiranja", 
    description: "Bogat nabor prvih spominov.", 
    features: ["Popolna prilagodljivost", "Celotna družina", "Premium obdelava"] 
  },
];

const galleryImages = [newborn1, newborn2, newborn3, newborn5, newborn6, newborn7, newborn8, newborn9];

export default function Novorojencki() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[60vh]">
          <img src={newborn2} alt="Fotografiranje novorojenčkov" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-24 pb-36">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Prvi dnevi. Najlepši spomini.</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">Fotografiranje novorojenčkov</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Prihod dojenčka je enkraten trenutek. Ujemimo ga nežno in sproščeno.
          </p>
        </div>
      </section>

      {/* Zakaj imeti fotografiranje novorojenčka? */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Zakaj imeti fotografiranje novorojenčka?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Prvi dnevi z novorojenčkom so nekaj najbolj nežnega in hkrati minljivega. 
                  Drobni prsti, speči izrazi, varni objemi in tista posebna tišina, ki jo prinese 
                  novo življenje – vse to se spremeni hitreje, kot si mislimo.
                </p>
                <p>
                  Fotografiranje novorojenčka ohrani te prve trenutke takšne, kot so – resnične, 
                  čustvene in polne topline.
                </p>
                <p className="font-medium text-foreground">
                  Ne gre za popolnost, ampak za spomin na začetek vaše zgodbe kot družine.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src={newborn1} alt="Novorojenček" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <img src={newborn5} alt="Novorojenček" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery strip */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img src={newborn3} alt="Novorojenček" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img src={newborn9} alt="Novorojenček" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img src={newborn6} alt="Novorojenček" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Kako poteka fotografiranje novorojenčka? */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img src={newborn7} alt="Fotografiranje novorojenčka" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img src={newborn4} alt="Fotografiranje novorojenčka" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Kako poteka fotografiranje novorojenčka?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fotografiranje poteka mirno, nežno in popolnoma prilagojeno ritmu vašega dojenčka. 
                  Najpogosteje se izvaja v domačem okolju, kjer se vi in novorojenček počutite 
                  najbolj varno in sproščeno.
                </p>
                <p>
                  Ni hitenja in ni vsiljenih poz. Če je čas za hranjenje, previjanje ali crkljanje 
                  – si ga vzamemo. Fotografiram naravne trenutke: spečega dojenčka, drobne detajle, 
                  starševske poglede, prve dotike in bližino.
                </p>
                <p>
                  Starši ne potrebujete nobenih izkušenj pred kamero. Vse poteka spontano, z nežnim 
                  usmerjanjem in veliko občutka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Another image strip */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[newborn8, newborn1, newborn2, newborn5].map((img, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Novorojenček ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketi */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Izberite paket</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nežni sessioni za prve spomine.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Zakaj izbrati Proflipp */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Zakaj izbrati Proflipp za fotografiranje novorojenčka?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Pri Proflipp verjamemo, da je fotografiranje novorojenčka predvsem izkušnja – mirna, 
                  varna in polna topline. Z razumevanjem starševstva in občutkom za detajle ustvarjamo 
                  fotografije, ki bodo z leti dobivale vedno večjo vrednost.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  "Nežen, naraven in brezčasen stil",
                  "Fotografiranje brez prisile in brez studijskega stresa",
                  "Prilagajanje ritmu dojenčka",
                  "Profesionalna obdelava in skrbno izbrane fotografije"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground italic">
                Naš cilj ni le lepa fotografija, ampak spomin na občutek, ko je bil vaš otrok še čisto 
                majhen – in vi popolnoma zaljubljeni.
              </p>
              <p className="text-gold font-medium mt-4 text-lg">We Create Emotions!</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src={newborn9} alt="Proflipp fotografiranje" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <img src={newborn3} alt="Proflipp fotografiranje" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Galerija</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Poglejte si nekaj naših fotografij novorojenčkov.</p>
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
                  alt={`Novorojenček ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
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
