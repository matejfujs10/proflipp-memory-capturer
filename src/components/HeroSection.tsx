import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Smile } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useCallback } from "react";
import { trackCTA } from "@/lib/analytics";

// Only statically import the first image for instant FCP
import heroSlide1 from "@/assets/hero-slide-1.jpg";

const heroAlts = [
  "Poročna fotografija v Ljubljani – Proflipp",
  "Poročna fotografija na Bledu – Proflipp",
  "Poročna fotografija v Mariboru – Proflipp",
  "Poročna fotografija v Kranju – Proflipp",
  "Poročna fotografija v Celju – Proflipp",
  "Poročna fotografija v Kopru – Proflipp",
  "Poročna fotografija v Piranu – Proflipp",
  "Poročna fotografija v Portorožu – Proflipp",
  "Poročna fotografija v Novi Gorici – Proflipp",
  "Poročna fotografija v Postojni – Proflipp",
  "Poročna fotografija na Ptuju – Proflipp",
  "Poročna fotografija v Murski Soboti – Proflipp",
  "Poročna fotografija v Velenju – Proflipp",
  "Poročna fotografija v Kamniku – Proflipp",
  "Poročna fotografija v Škofji Loki – Proflipp",
  "Poročna fotografija v Radovljici – Proflipp",
  "Poročna fotografija na Bohinju – Proflipp",
  "Poročna fotografija v Izoli – Proflipp",
  "Poročna fotografija v Ankaranu – Proflipp",
  "Poročna fotografija v Logarski dolini – Proflipp",
  "Poročna fotografija v Gradcu – Proflipp",
  "Poročna fotografija na Dunaju – Proflipp",
  "Poročna fotografija v Salzburgu – Proflipp",
  "Poročna fotografija v Celovcu – Proflipp",
  "Poročna fotografija v Beljaku – Proflipp",
  "Poročna fotografija v Linzu – Proflipp",
  "Poročna fotografija v Innsbrucku – Proflipp",
  "Poročna fotografija v Hallstattu – Proflipp",
  "Poročna fotografija v Zagrebu – Proflipp",
  "Poročna fotografija v Opatiji – Proflipp",
  "Poročna fotografija v Rovinju – Proflipp",
  "Poročna fotografija v Sarajevu – Proflipp",
  "Poročna fotografija v Mostarju – Proflipp",
  "Poročna fotografija v Banja Luki – Proflipp",
  "Poročna fotografija v Beogradu – Proflipp",
];

const TOTAL_SLIDES = 35;

// Dynamic import map for hero images (lazy loaded on demand)
const imageImports = import.meta.glob<{ default: string }>("/src/assets/hero-slide-*.jpg", { eager: false });

function getImagePath(index: number): string {
  return `/src/assets/hero-slide-${index + 1}.jpg`;
}

export function HeroSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({ 0: heroSlide1 });

  const preloadImage = useCallback(async (index: number) => {
    if (loadedImages[index]) return;
    const path = getImagePath(index);
    const loader = imageImports[path];
    if (loader) {
      const mod = await loader();
      setLoadedImages(prev => ({ ...prev, [index]: mod.default }));
    }
  }, [loadedImages]);

  // Preload next few images ahead of time
  useEffect(() => {
    const next = (currentIndex + 1) % TOTAL_SLIDES;
    const next2 = (currentIndex + 2) % TOTAL_SLIDES;
    preloadImage(next);
    preloadImage(next2);
  }, [currentIndex, preloadImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_SLIDES);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Only render current, previous and next images for performance
  const visibleIndices = new Set([
    currentIndex,
    (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES,
    (currentIndex + 1) % TOTAL_SLIDES,
  ]);

  const features = [
    { icon: Heart, text: t('hero.emotions_text') },
    { icon: Camera, text: t('hero.media') },
    { icon: Smile, text: t('hero.memories') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: TOTAL_SLIDES }, (_, index) => {
          if (!visibleIndices.has(index)) return null;
          const src = loadedImages[index];
          if (!src) return null;
          return (
            <img
              key={index}
              src={src}
              alt={heroAlts[index]}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              {...(index === 0 ? { fetchpriority: "high" as const } : {})}
              className={`absolute w-full h-full object-cover object-top transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30">
              <Heart className="w-4 h-4 text-gold" fill="currentColor" />
              <span className="text-sm font-medium text-card">{t('hero.tagline')}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30">
              <Camera className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-card">{t('hero.badge_service')}</span>
            </div>
          </div>

          <h1 className="sr-only">Wedding Photographer in Slovenia & Austria</h1>
          <p className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-card mb-4 leading-tight animate-fade-up" role="presentation">
            {t('hero.title')}{" "}
            <span className="italic text-gold">{t('hero.emotions')}</span>
          </p>

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
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-sky-dark shadow-lg" onClick={() => trackCTA('hero_inquiry')}>
              <Link to="/contact">{t('hero.inquiry')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-card text-card bg-transparent hover:bg-card/10" onClick={() => trackCTA('hero_packages')}>
              <Link to="/wedding-photography-slovenia">{t('hero.packages')}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {Array.from({ length: TOTAL_SLIDES }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              preloadImage(index);
              setCurrentIndex(index);
            }}
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
