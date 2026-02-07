import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Smile } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import heroSlide7 from "@/assets/hero-slide-7.jpg";
import heroSlide8 from "@/assets/hero-slide-8.jpg";
import heroSlide9 from "@/assets/hero-slide-9.jpg";
import heroSlide10 from "@/assets/hero-slide-10.jpg";
import heroSlide11 from "@/assets/hero-slide-11.jpg";
import heroSlide12 from "@/assets/hero-slide-12.jpg";
import heroSlide13 from "@/assets/hero-slide-13.jpg";
import heroSlide14 from "@/assets/hero-slide-14.jpg";
import heroSlide15 from "@/assets/hero-slide-15.jpg";
import heroSlide16 from "@/assets/hero-slide-16.jpg";
import heroSlide17 from "@/assets/hero-slide-17.jpg";
import heroSlide18 from "@/assets/hero-slide-18.jpg";
import heroSlide19 from "@/assets/hero-slide-19.jpg";
import heroSlide20 from "@/assets/hero-slide-20.jpg";
import heroSlide21 from "@/assets/hero-slide-21.jpg";
import heroSlide22 from "@/assets/hero-slide-22.jpg";
import heroSlide23 from "@/assets/hero-slide-23.jpg";
import heroSlide24 from "@/assets/hero-slide-24.jpg";
import heroSlide25 from "@/assets/hero-slide-25.jpg";
import heroSlide26 from "@/assets/hero-slide-26.jpg";
import heroSlide27 from "@/assets/hero-slide-27.jpg";
import heroSlide28 from "@/assets/hero-slide-28.jpg";
import heroSlide29 from "@/assets/hero-slide-29.jpg";
import heroSlide30 from "@/assets/hero-slide-30.jpg";
import heroSlide31 from "@/assets/hero-slide-31.jpg";
import heroSlide32 from "@/assets/hero-slide-32.jpg";
import heroSlide33 from "@/assets/hero-slide-33.jpg";
import heroSlide34 from "@/assets/hero-slide-34.jpg";
import heroSlide35 from "@/assets/hero-slide-35.jpg";

const heroImages = [
  { src: heroSlide1, alt: "Poročna fotografija v Ljubljani – Proflipp" },
  { src: heroSlide2, alt: "Poročna fotografija na Bledu – Proflipp" },
  { src: heroSlide3, alt: "Poročna fotografija v Mariboru – Proflipp" },
  { src: heroSlide4, alt: "Poročna fotografija v Kranju – Proflipp" },
  { src: heroSlide5, alt: "Poročna fotografija v Celju – Proflipp" },
  { src: heroSlide6, alt: "Poročna fotografija v Kopru – Proflipp" },
  { src: heroSlide7, alt: "Poročna fotografija v Piranu – Proflipp" },
  { src: heroSlide8, alt: "Poročna fotografija v Portorožu – Proflipp" },
  { src: heroSlide9, alt: "Poročna fotografija v Novi Gorici – Proflipp" },
  { src: heroSlide10, alt: "Poročna fotografija v Postojni – Proflipp" },
  { src: heroSlide11, alt: "Poročna fotografija na Ptuju – Proflipp" },
  { src: heroSlide12, alt: "Poročna fotografija v Murski Soboti – Proflipp" },
  { src: heroSlide13, alt: "Poročna fotografija v Velenju – Proflipp" },
  { src: heroSlide14, alt: "Poročna fotografija v Kamniku – Proflipp" },
  { src: heroSlide15, alt: "Poročna fotografija v Škofji Loki – Proflipp" },
  { src: heroSlide16, alt: "Poročna fotografija v Radovljici – Proflipp" },
  { src: heroSlide17, alt: "Poročna fotografija na Bohinju – Proflipp" },
  { src: heroSlide18, alt: "Poročna fotografija v Izoli – Proflipp" },
  { src: heroSlide19, alt: "Poročna fotografija v Ankaranu – Proflipp" },
  { src: heroSlide20, alt: "Poročna fotografija v Logarski dolini – Proflipp" },
  { src: heroSlide21, alt: "Poročna fotografija v Gradcu – Proflipp" },
  { src: heroSlide22, alt: "Poročna fotografija na Dunaju – Proflipp" },
  { src: heroSlide23, alt: "Poročna fotografija v Salzburgu – Proflipp" },
  { src: heroSlide24, alt: "Poročna fotografija v Celovcu – Proflipp" },
  { src: heroSlide25, alt: "Poročna fotografija v Beljaku – Proflipp" },
  { src: heroSlide26, alt: "Poročna fotografija v Linzu – Proflipp" },
  { src: heroSlide27, alt: "Poročna fotografija v Innsbrucku – Proflipp" },
  { src: heroSlide28, alt: "Poročna fotografija v Hallstattu – Proflipp" },
  { src: heroSlide29, alt: "Poročna fotografija v Zagrebu – Proflipp" },
  { src: heroSlide30, alt: "Poročna fotografija v Opatiji – Proflipp" },
  { src: heroSlide31, alt: "Poročna fotografija v Rovinju – Proflipp" },
  { src: heroSlide32, alt: "Poročna fotografija v Sarajevu – Proflipp" },
  { src: heroSlide33, alt: "Poročna fotografija v Mostarju – Proflipp" },
  { src: heroSlide34, alt: "Poročna fotografija v Banja Luki – Proflipp" },
  { src: heroSlide35, alt: "Poročna fotografija v Beogradu – Proflipp" },
];

export function HeroSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Heart, text: t('hero.emotions_text') },
    { icon: Camera, text: t('hero.media') },
    { icon: Smile, text: t('hero.memories') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute w-full h-full object-cover object-top transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm font-medium text-card">{t('hero.tagline')}</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-card mb-4 leading-tight animate-fade-up">
            {t('hero.title')}{" "}
            <span className="italic text-gold">{t('hero.emotions')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-card/90 font-light mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t('hero.subtitle')}
          </p>

          <p className="text-base md:text-lg text-card/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-card/90">
                <item.icon className="w-4 h-4 text-gold" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-sky-dark shadow-lg">
              <Link to="/kontakt">{t('hero.inquiry')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-card text-card bg-transparent hover:bg-card/10">
              <Link to="/poroke">{t('hero.packages')}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gold w-6" : "bg-card/50 hover:bg-card/70"
            }`}
            aria-label={`Pojdi na sliko ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
