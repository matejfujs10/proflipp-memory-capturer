import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { ContactFormModal } from "@/components/ContactSection";
import { WeddingGalleryCard } from "@/components/WeddingGalleryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import weddingHero from "@/assets/wedding-ceremony.jpg";

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

export default function Poroke() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingHero} alt="Poročna fotografija" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{t('weddings.services')}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">{t('weddings.title')}</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            {t('weddings.description')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">{t('weddings.choose_package')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('weddings.choose_desc')}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm">
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

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">{t('weddings.video_packages')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('weddings.video_desc')}</p>
          </div>
          
          {/* Video showcase */}
          <div className="mb-12">
            <video 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl" 
              controls 
              poster={weddingHero}
            >
              <source src="/videos/wedding-video.mp4" type="video/mp4" />
              Vaš brskalnik ne podpira video predvajanja.
            </video>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoPackages.map((pkg) => <PackageCard key={pkg.name} {...pkg} onSelect={() => setIsModalOpen(true)} />)}
          </div>
        </div>
      </section>

      {/* Why Choose PROFLIPP Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">
              Zakaj izbrati ekipo PROFLIPP
            </h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Poroka ni le dogodek – je zgodba, polna čustev, pristnih trenutkov in neponovljivih detajlov. Pri PROFLIPP verjamemo, da si zasluži biti ujeta iskreno, estetsko in brez vsiljivosti.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Smo uigrana ekipa fotografa in videografa, ki deluje sproščeno, zanesljivo in profesionalno. Naši pari pravijo o nas, da že pred poročnim dnem ustvarimo občutek zaupanja, saj svetujemo, kako naj sestavijo časovnico, da bo dovolj časa za vse, da bo umirjeno in potekalo vse brez skrbi, kar bo omogočilo, da se na svoj dan resnično sprostijo in uživajo. Naredimo tudi predporočno pogodbo. To vse se odraža tudi v številnih odličnih ocenah in priporočilih zadovoljnih parov.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
                Delamo premišljeno, s poudarkom na:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-6 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Pristnih trenutkih – vodimo obred, postavljamo svate, svetujemo, poziranja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Jasni komunikaciji in dobri pripravi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Celostni zgodbi poročnega dne, od jutranjih priprav do večernega slavja</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Rezultat so brezčasne fotografije in video vsebine, ki ne sledijo kratkoročnim trendom, temveč vaši zgodbi. Naš cilj ni le končni izdelek, temveč celotna izkušnja – takšna, zaradi katere se svojega poročnega dne spominjate z nasmehom in brez skrbi. <span className="font-medium text-primary">Ustvarjamo čustveno fotografijo.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">{t('weddings.gallery')}</h2>
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
        </div>
      </section>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
