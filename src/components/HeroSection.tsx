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
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5,
  heroSlide6,
  heroSlide7,
  heroSlide8,
  heroSlide9,
  heroSlide10,
  heroSlide11,
  heroSlide12,
  heroSlide13,
  heroSlide14,
  heroSlide15,
  heroSlide16,
  heroSlide17,
  heroSlide18,
  heroSlide19,
  heroSlide20,
  heroSlide21,
  heroSlide22,
  heroSlide23,
  heroSlide24,
  heroSlide25,
  heroSlide26,
  heroSlide27,
  heroSlide28,
  heroSlide29,
  heroSlide30,
  heroSlide31,
  heroSlide32,
  heroSlide33,
  heroSlide34,
  heroSlide35,
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
            src={image}
            alt={`Poročna fotografija ${index + 1} - Proflipp profesionalno fotografiranje`}
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
