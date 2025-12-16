import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import familyHero from "@/assets/wedding-fun.jpg";

const packages = [
  { name: "MINI PRO", price: "150", duration: "1 ura fotografiranja", description: "Kratek, sproščen session za naravne trenutke.", features: ["Vodeno, a naravno", "Izbor najboljših fotografij", "Digitalna dostava"] },
  { name: "GOLD PRO", price: "196", duration: "2 uri fotografiranja", description: "Več časa, več raznolikih kadrov.", features: ["Več kombinacij", "Sproščeno v vašem ritmu", "Online fotoknjiga"], popular: true },
  { name: "DIAMANT PRO", price: "274", duration: "3 ure fotografiranja", description: "Bogat nabor spominov.", features: ["Več lokacij", "Največ raznolikosti", "Premium obdelava"] },
];

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
}

function ServicePage({ title, subtitle, description }: ServicePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export function Druzine() {
  return <ServicePage title="Družinsko fotografiranje" subtitle="Storitve" description="Sproščen pristop za naravne družinske trenutke. Vsak session prilagodimo vam." />;
}

export function Novorojencki() {
  return <ServicePage title="Fotografiranje novorojenčkov" subtitle="Prvi dnevi. Najlepši spomini." description="Prihod dojenčka je enkraten trenutek. Ujemimo ga nežno in sproščeno." />;
}

export function Potovanja() {
  return <ServicePage title="Potovalno fotografiranje" subtitle="Potovanje mine. Fotografije ostanejo." description="Potovanja in doživetja so neponovljiva — in ravno zato si zaslužijo fotografije, ki jih boste z veseljem podoživljali." />;
}
