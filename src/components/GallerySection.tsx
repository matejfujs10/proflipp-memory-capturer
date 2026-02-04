// Spontane, ujete trenutke iz različnih galerij
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide7 from "@/assets/hero-slide-7.jpg";
import heroSlide12 from "@/assets/hero-slide-12.jpg";
import heroSlide15 from "@/assets/hero-slide-15.jpg";
import heroSlide18 from "@/assets/hero-slide-18.jpg";
import heroSlide21 from "@/assets/hero-slide-21.jpg";
import eventDog from "@/assets/event-dog.jpg";
import eventParty from "@/assets/event-party.jpg";
import family3 from "@/assets/family-3.jpg";
import family7 from "@/assets/family-7.jpg";
import newborn1 from "@/assets/newborn-1.jpg";
import newborn5 from "@/assets/newborn-5.jpg";

const images = [
  { src: heroSlide21, alt: "Spontan smeh na poroki" },
  { src: eventDog, alt: "Pes na dogodku" },
  { src: family7, alt: "Družinski trenutek" },
  { src: heroSlide3, alt: "Čustveni trenutek" },
  { src: newborn5, alt: "Novorojenček v objemu" },
  { src: eventParty, alt: "Veselje na zabavi" },
  { src: heroSlide12, alt: "Naravni pogled" },
  { src: family3, alt: "Igriva družina" },
  { src: heroSlide15, alt: "Pristen smeh" },
  { src: newborn1, alt: "Nežni dotik" },
  { src: heroSlide7, alt: "Spontana radost" },
  { src: heroSlide18, alt: "Ujet trenutek" },
];

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };
  
  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('gallery.title')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            {t('gallery.heading')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-lg md:rounded-xl group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            
            {selectedIndex !== null && (
              <div className="flex items-center justify-center w-full h-[90vh]">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {selectedIndex !== null && `${selectedIndex + 1} / ${images.length}`}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}