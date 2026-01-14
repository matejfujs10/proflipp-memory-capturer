import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Camera, Clock, Image, Gift, Scissors, Sparkles, Package } from "lucide-react";
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactSection";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";

// Studio images
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";
import studio5 from "@/assets/studio-5.jpg";
import studio6 from "@/assets/studio-6.jpg";
import studio7 from "@/assets/studio-7.jpg";
import studio8 from "@/assets/studio-8.jpg";
import studio9 from "@/assets/studio-9.jpg";
import studio10 from "@/assets/studio-10.jpg";

// New studio images
import studioHeroNew from "@/assets/studio-hero-new.png";
import studioBand1 from "@/assets/studio-band-1.png";
import studioBand2 from "@/assets/studio-band-2.png";
import studioBand3 from "@/assets/studio-band-3.png";
import studioBand4 from "@/assets/studio-band-4.png";
import studioBand5 from "@/assets/studio-band-5.png";
import studioBand6 from "@/assets/studio-band-6.png";
import studioPortrait1 from "@/assets/studio-portrait-1.jpg";
import studioPortrait2 from "@/assets/studio-portrait-2.jpg";
import studioPortrait3 from "@/assets/studio-portrait-3.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const packages = [
  {
    name: "MINI PORTRET",
    price: "79 €",
    description: "Za hiter in učinkovit profesionalni portret.",
    features: [
      "Trajanje: do 30 minut",
      "1 ozadje / 1 styling",
      "Vodenje poziranja",
      "Izbor najboljših posnetkov",
      "5 profesionalno obdelanih fotografij",
      "Digitalna dostava (splet + tisk)"
    ]
  },
  {
    name: "STANDARD PORTRET / DRUŽINA",
    price: "149 €",
    description: "Najbolj priljubljen paket za posameznike, pare in družine.",
    popular: true,
    features: [
      "Trajanje: do 60 minut",
      "2 ozadji ali 2 stylinga",
      "Vodenje in sproščena režija",
      "Spletna galerija za izbor",
      "12 profesionalno obdelanih fotografij",
      "Digitalna dostava"
    ]
  },
  {
    name: "PREMIUM PERSONAL BRANDING",
    price: "249 €",
    description: "Za podjetnike, ustvarjalce in vse, ki potrebujejo več vsebin za splet in promocijo.",
    features: [
      "Trajanje: 90–120 minut",
      "3–4 stylingi / outfiti",
      "Različna ozadja in svetlobni setupi",
      "Portreti + detajlni in 'lifestyle' kadri",
      "Svetovanje glede uporabe fotografij",
      "25 profesionalno obdelanih fotografij",
      "Digitalna dostava"
    ]
  },
  {
    name: "BAND / ARTIST PROMO",
    price: "299 €",
    description: "Studijsko fotografiranje glasbenih skupin in izvajalcev.",
    features: [
      "Trajanje: do 90 minut",
      "Skupinski portreti + posamezni portreti članov",
      "2 vizualna koncepta",
      "Fotografije primerne za PR, splet, plakate in naslovnice",
      "20 profesionalno obdelanih fotografij",
      "Digitalna dostava"
    ]
  }
];

const commercialPackages = [
  {
    name: "PRODUKTNA FOTOGRAFIJA",
    price: "od 15 € / izdelek",
    description: "Fotografije izdelkov za spletne trgovine, kataloge in oglaševanje.",
    features: [
      "Fotografiranje na belem ozadju ali tematskem setu",
      "Dosledna svetloba in barve",
      "Optimizacija za spletno prodajo",
      "Končna cena glede na število izdelkov"
    ]
  },
  {
    name: "KOMERCIALNA FOTOGRAFIJA",
    price: "Po ponudbi",
    description: "Za kampanje, lookbooke in blagovne znamke.",
    features: [
      "Načrtovanje fotografiranja",
      "Možnost sodelovanja z vizažistom, stilistom in modeli",
      "Studijska ali prilagojena postavitev",
      "Uporaba fotografij po dogovoru"
    ]
  }
];

const additionalServices = [
  {
    icon: Image,
    title: "Dodatno obdelane fotografije",
    items: ["1 fotografija: 15 €", "Paket 5 fotografij: 65 €", "Paket 10 fotografij: 120 €"]
  },
  {
    icon: Clock,
    title: "Ekspresna dostava",
    items: ["Dostava v 48 urah: 25 €", "Dostava v 24 urah: 40 €"]
  },
  {
    icon: Package,
    title: "Printi in fotoknjige",
    items: ["Print A4: 12 €", "Print A3: 22 €", "Okvirjen print A3: 45 €", "Premium fotoknjiga (20 strani): 95 €", "Dodatna stran: 4 €"]
  },
  {
    icon: Scissors,
    title: "Vizažist",
    items: ["Osnovni makeup: 40 €", "Makeup in frizura: 65 €"]
  },
  {
    icon: Sparkles,
    title: "Rekviziti in ozadja",
    items: ["Osnovni rekviziti: 10 €", "Posebno ozadje: 15 €", "Tematski set: 30 €"]
  },
  {
    icon: Gift,
    title: "Darilni bon",
    items: ["Digitalni darilni bon: brezplačno", "Tiskani darilni bon: 5 €"]
  }
];

const services = [
  "Posameznike (portreti, CV, LinkedIn, osebna raba)",
  "Družine, pare, nosečniške in novorojenčke",
  "Glasbene skupine in izvajalce (promo, PR, album cover)",
  "Izdelke za spletne trgovine, kataloge in oglase",
  "Podjetja in ekipe (poslovni portreti, branding)",
  "Vsebine za socialna omrežja in oglaševalske kampanje"
];

export default function Studio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={studioHeroNew} 
            alt="PROFLIPP Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-medium text-sm tracking-wider uppercase mb-2">
            <span className="text-[#4a9fe8]">PROFLIPP </span>
            <span className="text-gold italic">We Create Emotions!</span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-card mb-4">
            Studijsko fotografiranje
          </h1>
          <p className="text-xl md:text-2xl">
            <span className="text-[#4a9fe8]">PROFLIPP </span>
            <span className="text-gold italic">Studio</span>
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ustvarjamo fotografije z jasnim namenom
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                V studiu PROFLIPP ustvarjamo fotografije z jasnim namenom – za osebno predstavitev, 
                poslovno rabo, promocijo ali prodajo. Ne gre zgolj za fotografiranje, temveč za voden 
                proces, kjer poskrbimo za svetlobo, kompozicijo, izraz in končni videz fotografij.
              </p>
              <p className="text-muted-foreground text-lg">
                Vsako fotografiranje poteka sproščeno, a profesionalno, z jasnim ciljem: da dobite 
                fotografije, ki vas ali vašo blagovno znamko predstavijo samozavestno, verodostojno 
                in vizualno dovršeno.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src={studioPortrait1} 
                alt="Studio PROFLIPP" 
                className="rounded-2xl shadow-card w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Photograph */}
      <section className="py-8 bg-muted/30">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-8"
            {...fadeInUp}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Naše storitve</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Fotografiramo
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="grid grid-cols-2 gap-4"
              {...staggerContainer}
            >
              <motion.img 
                src={studioPortrait2} 
                alt="Studio work" 
                className="rounded-xl shadow-card w-full aspect-[3/4] object-cover"
                {...fadeInUp}
              />
              <motion.img 
                src={studioPortrait3} 
                alt="Studio work" 
                className="rounded-xl shadow-card w-full aspect-[3/4] object-cover mt-8"
                {...fadeInUp}
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Camera className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground text-lg">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Band/Group Gallery */}
      <motion.section 
        className="py-0"
        {...fadeInUp}
      >
        <div className="grid grid-cols-3 gap-2">
          <img src={studioBand1} alt="Band photography" className="w-full aspect-square object-cover" />
          <img src={studioBand2} alt="Band photography" className="w-full aspect-square object-cover" />
          <img src={studioBand3} alt="Band photography" className="w-full aspect-square object-cover" />
        </div>
      </motion.section>

      {/* Main Packages */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-8"
            {...fadeInUp}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Cenik</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-3">
              Paketi studijskega fotografiranja
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            {...staggerContainer}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border ${pkg.popular ? 'border-primary' : 'border-border'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Najbolj priljubljen
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-3">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Gift Voucher Section for Main Packages */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* More Band Images */}
      <motion.section 
        className="py-0"
        {...fadeInUp}
      >
        <div className="grid grid-cols-3 gap-2">
          <img src={studioBand4} alt="Band photography" className="w-full aspect-square object-cover" />
          <img src={studioBand5} alt="Band photography" className="w-full aspect-square object-cover" />
          <img src={studioBand6} alt="Band photography" className="w-full aspect-square object-cover" />
        </div>
      </motion.section>

      {/* Commercial Packages */}
      <section className="py-8 bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Za podjetja</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                Komercialna fotografija
              </h2>
              
              <div className="space-y-6">
                {commercialPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    className="bg-card rounded-xl p-6 shadow-card border border-border"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">{pkg.name}</h3>
                      <span className="text-primary font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Gift Voucher Section for Commercial */}
              <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
            </motion.div>
            
            <motion.div 
              className="relative"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src={studio8} 
                alt="Commercial photography" 
                className="rounded-2xl shadow-card w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-8"
            {...fadeInUp}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Dodatne storitve</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Dokup storitev
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            {...staggerContainer}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <ul className="space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Gift Voucher Section for Additional Services */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* Gallery */}
      <motion.section 
        className="py-0"
        {...fadeInUp}
      >
        <div className="grid grid-cols-4 gap-2">
          <img src={studio1} alt="Studio work" className="w-full aspect-square object-cover" />
          <img src={studio2} alt="Studio work" className="w-full aspect-square object-cover" />
          <img src={studio9} alt="Studio work" className="w-full aspect-square object-cover" />
          <img src={studio10} alt="Studio work" className="w-full aspect-square object-cover" />
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Rezervirajte termin
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ste pripravljeni na profesionalno studijsko fotografiranje? Kontaktirajte nas in rezervirajte svoj termin.
            </p>
            <Button size="lg" asChild>
              <Link to="/kontakt">Kontaktirajte nas</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
