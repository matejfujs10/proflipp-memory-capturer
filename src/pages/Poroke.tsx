import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { WeddingGalleryCard } from "@/components/WeddingGalleryCard";
import { GiftVoucherSection } from "@/components/GiftVoucherSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Heart, Camera, Clock, Shield } from "lucide-react";
// Hero slideshow images
import weddingCollage1 from "@/assets/wedding-collage-1.jpg";
import weddingCollage2 from "@/assets/wedding-collage-2.png";

// Gallery collage images
import weddingCollage3 from "@/assets/wedding-collage-3.png";
import weddingCollage4 from "@/assets/wedding-collage-4.png";

// R & L Vrhnika wedding images
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingKiss from "@/assets/wedding-kiss.jpg";
import weddingRings from "@/assets/wedding-rings.jpg";
import weddingEmotion from "@/assets/wedding-emotion.jpg";
import weddingConfetti from "@/assets/wedding-confetti.jpg";
import weddingFun from "@/assets/wedding-fun.jpg";
import weddingBridge from "@/assets/wedding-bridge.jpg";
import weddingToast from "@/assets/wedding-toast.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";

// K & A Murska Sobota wedding images
import msWedding1 from "@/assets/ms-wedding-1.jpg";
import msWedding2 from "@/assets/ms-wedding-2.jpg";
import msWedding3 from "@/assets/ms-wedding-3.jpg";
import msWedding4 from "@/assets/ms-wedding-4.jpg";
import msWedding5 from "@/assets/ms-wedding-5.jpg";
import msWedding6 from "@/assets/ms-wedding-6.jpg";
import msWedding7 from "@/assets/ms-wedding-7.jpg";
import msWedding8 from "@/assets/ms-wedding-8.jpg";
import msWedding9 from "@/assets/ms-wedding-9.jpg";
import msWedding10 from "@/assets/ms-wedding-10.jpg";

// I & J Trebnje wedding images
import trebnjeWedding1 from "@/assets/trebnje-wedding-1.jpg";
import trebnjeWedding2 from "@/assets/trebnje-wedding-2.jpg";
import trebnjeWedding3 from "@/assets/trebnje-wedding-3.jpg";
import trebnjeWedding4 from "@/assets/trebnje-wedding-4.jpg";
import trebnjeWedding5 from "@/assets/trebnje-wedding-5.jpg";
import trebnjeWedding6 from "@/assets/trebnje-wedding-6.jpg";
import trebnjeWedding7 from "@/assets/trebnje-wedding-7.jpg";
import trebnjeWedding8 from "@/assets/trebnje-wedding-8.jpg";
import trebnjeWedding9 from "@/assets/trebnje-wedding-9.jpg";
import trebnjeWedding10 from "@/assets/trebnje-wedding-10.jpg";

// P & D Murska Sobota wedding images
import pdWedding1 from "@/assets/pd-wedding-1.jpg";
import pdWedding2 from "@/assets/pd-wedding-2.jpg";
import pdWedding3 from "@/assets/pd-wedding-3.jpg";
import pdWedding4 from "@/assets/pd-wedding-4.jpg";
import pdWedding5 from "@/assets/pd-wedding-5.jpg";
import pdWedding6 from "@/assets/pd-wedding-6.jpg";
import pdWedding7 from "@/assets/pd-wedding-7.jpg";
import pdWedding8 from "@/assets/pd-wedding-8.jpg";
import pdWedding9 from "@/assets/pd-wedding-9.jpg";
import pdWedding10 from "@/assets/pd-wedding-10.jpg";

// K & A Portorož wedding images
import kaWedding1 from "@/assets/ka-wedding-1.jpg";
import kaWedding2 from "@/assets/ka-wedding-2.jpg";
import kaWedding3 from "@/assets/ka-wedding-3.jpg";
import kaWedding4 from "@/assets/ka-wedding-4.jpg";
import kaWedding5 from "@/assets/ka-wedding-5.jpg";
import kaWedding6 from "@/assets/ka-wedding-6.jpg";
import kaWedding7 from "@/assets/ka-wedding-7.jpg";
import kaWedding8 from "@/assets/ka-wedding-8.jpg";
import kaWedding9 from "@/assets/ka-wedding-9.jpg";
import kaWedding10 from "@/assets/ka-wedding-10.jpg";

// M & B Murska Sobota 2024 wedding images
import mbWedding1 from "@/assets/mb-wedding-1.jpg";
import mbWedding2 from "@/assets/mb-wedding-2.jpg";
import mbWedding3 from "@/assets/mb-wedding-3.jpg";
import mbWedding4 from "@/assets/mb-wedding-4.jpg";
import mbWedding5 from "@/assets/mb-wedding-5.jpg";
import mbWedding6 from "@/assets/mb-wedding-6.jpg";
import mbWedding7 from "@/assets/mb-wedding-7.jpg";
import mbWedding8 from "@/assets/mb-wedding-8.jpg";
import mbWedding9 from "@/assets/mb-wedding-9.jpg";
import mbWedding10 from "@/assets/mb-wedding-10.jpg";

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

const weddingGalleries = [
  {
    title: "M & B Murska Sobota 2024",
    coverImage: mbWedding1,
    images: [
      mbWedding1,
      mbWedding2,
      mbWedding3,
      mbWedding4,
      mbWedding5,
      mbWedding6,
      mbWedding7,
      mbWedding8,
      mbWedding9,
      mbWedding10,
    ],
  },
  {
    title: "K & A Portorož 2025",
    coverImage: kaWedding1,
    images: [
      kaWedding1,
      kaWedding2,
      kaWedding3,
      kaWedding4,
      kaWedding5,
      kaWedding6,
      kaWedding7,
      kaWedding8,
      kaWedding9,
      kaWedding10,
    ],
  },
  {
    title: "P & D Murska Sobota 2025",
    coverImage: pdWedding1,
    images: [
      pdWedding1,
      pdWedding2,
      pdWedding3,
      pdWedding4,
      pdWedding5,
      pdWedding6,
      pdWedding7,
      pdWedding8,
      pdWedding9,
      pdWedding10,
    ],
  },
  {
    title: "I & J Trebnje 2025",
    coverImage: trebnjeWedding1,
    images: [
      trebnjeWedding1,
      trebnjeWedding2,
      trebnjeWedding3,
      trebnjeWedding4,
      trebnjeWedding5,
      trebnjeWedding6,
      trebnjeWedding7,
      trebnjeWedding8,
      trebnjeWedding9,
      trebnjeWedding10,
    ],
  },
  {
    title: "K & A Murska Sobota 2025",
    coverImage: msWedding1,
    images: [
      msWedding1,
      msWedding2,
      msWedding3,
      msWedding4,
      msWedding5,
      msWedding6,
      msWedding7,
      msWedding8,
      msWedding9,
      msWedding10,
    ],
  },
  {
    title: "R & L Vrhnika 2025",
    coverImage: weddingCeremony,
    images: [
      weddingCeremony,
      weddingVeil,
      weddingKiss,
      weddingRings,
      weddingEmotion,
      weddingConfetti,
      weddingFun,
      weddingBridge,
      weddingToast,
      weddingDetails,
    ],
  },
];

const heroSlideImages = [weddingCollage1, weddingCollage2];

export default function Poroke() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  // Hero slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[40vh]">
          {heroSlideImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Poročna fotografija ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-16 pb-20">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{t('weddings.services')}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">{t('weddings.title')}</h1>
          <p className="text-foreground text-lg max-w-2xl leading-relaxed">
            {t('weddings.description')}
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">{t('weddings.choose_package')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('weddings.choose_desc')}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm">
              {t('weddings.pricing_note')}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2 text-sm">
              {t('weddings.follow_promo')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      <section className="py-10 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">{t('weddings.video_packages')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('weddings.video_desc')}</p>
          </div>
          
          {/* Video showcase */}
          <div className="mb-12">
            <video 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl" 
              controls 
              poster={weddingCollage1}
            >
              <source src="/videos/wedding-video.mp4" type="video/mp4" />
              Vaš brskalnik ne podpira video predvajanja.
            </video>
          </div>
          
          {/* Collage gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={weddingCollage3} alt="Poročni kolaž" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={weddingCollage4} alt="Poročni kolaž" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      {/* Why Choose PROFLIPP Section - Trust Building */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Poroka ni vaja.<br />
                <span className="text-primary">Ni ponovitve. In ni druge priložnosti.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Zato vemo, da <strong className="text-foreground">izbira poročnega fotografa ni lahka odločitev</strong> – ampak ena najbolj stresnih. 
                Pari ne iščejo samo lepih fotografij. Iščejo <strong className="text-foreground">mir v glavi, zaupanje</strong> in občutek, da je nekdo res na njihovi strani.
              </p>
              <p className="text-xl font-semibold text-primary mt-6">
                Pri PROFLIPP TEAM-u smo ustvarili sistem, ki točno to omogoča.
              </p>
            </div>

            {/* Understanding Section */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Razumemo, zakaj pari oklevajo
                </h3>
              </div>
              <p className="text-lg text-primary font-medium mb-6">Slišimo vas. In razumemo vas.</p>
              
              <div className="space-y-4 mb-6">
                <blockquote className="border-l-4 border-primary/30 pl-4 py-2 text-muted-foreground italic">
                  »Pregledala sva ogromno portfolijev, vsi so lepi… ampak <strong className="text-foreground not-italic">kako veva, da ne bova izbrala napačnega fotografa?</strong>«
                </blockquote>
                <blockquote className="border-l-4 border-primary/30 pl-4 py-2 text-muted-foreground italic">
                  »Kaj če <strong className="text-foreground not-italic">fotograf zamudi, ne ujame pomembnih trenutkov</strong> ali pa se sploh ne ujemamo?«
                </blockquote>
                <blockquote className="border-l-4 border-primary/30 pl-4 py-2 text-muted-foreground italic">
                  »Kaj če bova pred kamero <strong className="text-foreground not-italic">izgledala čudno, zakrčeno, nenaravno?</strong>«
                </blockquote>
                <blockquote className="border-l-4 border-primary/30 pl-4 py-2 text-muted-foreground italic">
                  »Kaj če bo poročni dan minil <strong className="text-foreground not-italic">v stresu in fotografiranju</strong>, namesto da bi ga res doživela?«
                </blockquote>
              </div>
              
              <p className="text-foreground font-medium">
                To niso pretirani strahovi. To so <strong>resnične skrbi</strong>, ki jih ima večina parov – in jih večina fotografov ignorira.
              </p>
              <p className="text-xl font-bold text-primary mt-4">Mi jih ne.</p>
            </div>

            {/* Trust Building */}
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ne prodajamo samo fotografij. <span className="text-primary">Gradimo zaupanje.</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Pri PROFLIPP TEAM-u ne verjamemo v pristop »oglej portfolio in upaj na najboljše«. 
                Verjamemo v <strong className="text-foreground">jasen proces, transparentnost in aktivno zmanjševanje stresa</strong>.
              </p>
              <p className="text-lg font-semibold text-primary mt-4">Zato pari izberejo nas.</p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Zero-stress */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Zero-stress fotografska izkušnja</h4>
                </div>
                <p className="text-muted-foreground mb-4">Na poročni dan ne želite razmišljati:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• ali bo fotograf prišel pravočasno,</li>
                  <li>• ali bo ujel ključne trenutke,</li>
                  <li>• ali bo vse potekalo, kot je bilo obljubljeno.</li>
                </ul>
                <p className="text-foreground font-medium mb-3">Naš cilj je, da lahko <strong>mirno zadihate</strong> in se prepustite dnevu, ker veste, da:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>imamo <strong>jasen potek dela</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>smo <strong>ves čas v komunikaciji</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span><strong>prevzamemo odgovornost</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>imamo vedno <strong>varnostni načrt</strong>.</span>
                  </li>
                </ul>
                <p className="text-primary font-semibold mt-4">Vi doživljate poroko. Mi poskrbimo, da ostane ujeta za vedno.</p>
              </div>

              {/* Camera shy */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Popoln pristop za pare, ki niso sproščeni pred kamero</h4>
                </div>
                <p className="text-muted-foreground mb-4">Velika večina parov nama pove: <em>»Nisva fotogenična.«</em></p>
                <p className="text-foreground font-medium mb-4">In to je <strong>povsem normalno</strong>.</p>
                <p className="text-muted-foreground mb-3">Zato:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong className="text-foreground">ne pričakujemo</strong>, da bosta znala pozirati,</li>
                  <li>• <strong className="text-foreground">ne silimo</strong> v umetne poze,</li>
                  <li>• <strong className="text-foreground">ne ustvarjamo</strong> občutka nastopanja.</li>
                </ul>
                <p className="text-foreground font-medium mb-3">Namesto tega:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span><strong>vodimo na nevsiljiv način</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>pomagamo z <strong>jasnimi, enostavnimi usmeritvami</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>ustvarimo <strong>sproščeno okolje</strong>, kjer pozabite na kamero.</span>
                  </li>
                </ul>
                <p className="text-primary font-semibold mt-4">Rezultat so naravne fotografije, pravi izrazi in pristna čustva – ne prisiljeni nasmehi.</p>
              </div>

              {/* Your story */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Vajina zgodba. Ne generičen stil.</h4>
                </div>
                <p className="text-muted-foreground mb-4">Eden največjih strahov parov je, da bo njihova poroka na fotografijah <strong className="text-foreground">izgledala kot vse druge</strong>.</p>
                <p className="text-foreground font-medium mb-3">Pri PROFLIPP TEAM-u:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong className="text-foreground">ne delamo po šabloni</strong>,</li>
                  <li>• <strong className="text-foreground">ne reproduciramo</strong> istih poz,</li>
                  <li>• <strong className="text-foreground">ne vsiljujemo</strong> svojega »house style-a«.</li>
                </ul>
                <p className="text-foreground font-medium">Vsak par je drugačen. Vsaka zgodba je drugačna.</p>
                <p className="text-primary font-semibold mt-4">Zato fotografiramo vajino energijo, vajin odnos, vajine ljudi – tako, kot se je zares zgodilo.</p>
              </div>

              {/* More experiencing */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground">Več doživljanja, manj »foto seanse«</h4>
                </div>
                <p className="text-muted-foreground mb-4">Pari se pogosto bojijo, da bodo:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• večino dneva <strong className="text-foreground">preživeli stran od gostov</strong>,</li>
                  <li>• zamudili smeh, objeme in <strong className="text-foreground">spontane trenutke</strong>,</li>
                  <li>• imeli občutek, da ves čas <strong className="text-foreground">»nastopajo«</strong>.</li>
                </ul>
                <p className="text-foreground font-medium mb-3">Naš pristop je drugačen. Z učinkovitim potekom dneva in premišljenim timingom:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>skupinske fotografije opravimo <strong>hitro in brez kaosa</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>fotografiranje vključimo v <strong>naravni tok dneva</strong>,</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>vi pa ostanete <strong>prisotni v svoji poroki</strong>.</span>
                  </li>
                </ul>
                <p className="text-primary font-semibold mt-4">Maksimalni spomini. Minimalen poseg.</p>
              </div>
            </div>

            {/* Clear value */}
            <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl p-8 md:p-10 mb-10 border border-primary/20">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
                Jasna vrednost. <span className="text-primary">Brez dvomov.</span>
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Ne iščemo parov, ki iščejo najcenejšo možnost. Iščemo pare, ki želijo <strong className="text-foreground">najboljšo vrednost za svojo odločitev</strong>.
              </p>
              <p className="text-foreground font-medium text-center mb-4">Pri nas točno veste:</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm">✓ kaj dobite</span>
                <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm">✓ kako poteka proces</span>
                <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm">✓ zakaj je vsak del pomemben</span>
              </div>
              <p className="text-primary font-semibold text-center">Tako lahko svojo odločitev brez težav utemeljite sebi – in drugim.</p>
            </div>

            {/* Why PROFLIPP TEAM */}
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Zakaj <span className="text-primary">PROFLIPP TEAM</span>
              </h3>
              <p className="text-lg text-foreground mb-6">Ker nismo samo fotografi. <strong>Smo ekipa, ki:</strong></p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground"><strong>razume vajine strahove</strong>,</span>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">zna ustvariti <strong>varnost in zaupanje</strong>,</span>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">poskrbi, da se na poročni dan <strong>počutite sproščeno</strong>,</span>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">in <strong>ujame trenutke</strong>, ki jih ne morete ponoviti.</span>
                </div>
              </div>
              <p className="text-xl font-bold text-primary mb-2">PROFLIPP TEAM</p>
              <p className="text-lg text-muted-foreground italic">Za pare, ki si želijo poroko doživeti – in jo znova občutiti skozi fotografije.</p>
            </div>

            {/* CTA to Reviews */}
            <div className="bg-primary/10 rounded-2xl p-8 md:p-10 text-center border-2 border-primary/30">
              <div className="flex justify-center mb-4">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                DA VSE TO PRIČAJO TUDI ŠTEVILNA POZITIVNA MNENJA
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Preberite, kaj o nas pravijo pari, ki so nam zaupali svoj najpomembnejši dan.
              </p>
              <Link to="/mnenja">
                <Button size="lg" className="text-lg px-8 py-6">
                  Oglejte si mnenja
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Gallery */}
      <section className="py-10 bg-background">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">{t('weddings.gallery')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('weddings.gallery_desc')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingGalleries.map((gallery) => (
              <WeddingGalleryCard
                key={gallery.title}
                title={gallery.title}
                coverImage={gallery.coverImage}
                images={gallery.images}
              />
            ))}
          </div>
          
          {/* Gift Voucher Section */}
          <GiftVoucherSection onReserve={() => setIsModalOpen(true)} />
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
