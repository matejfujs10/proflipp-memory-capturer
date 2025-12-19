import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface WeddingGalleryCardProps {
  title: string;
  coverImage: string;
  images: string[];
  description?: string;
}

export function WeddingGalleryCard({ title, coverImage, images, description }: WeddingGalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();
  
  const defaultDescription = language === 'en' 
    ? "Selected photos from the gallery. More photos available on Facebook PROFLIPP and Instagram."
    : language === 'de'
    ? "Ausgewählte Fotos aus der Galerie. Weitere Fotos auf Facebook PROFLIPP und Instagram."
    : "Izbrane fotografije iz galerije. Več fotografij si lahko ogledate na FB PROFLIPP in Instagramu.";

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-card">{title}</h3>
          <p className="text-card/70 text-sm mt-1">{images.length} {language === 'en' ? 'photos' : language === 'de' ? 'Fotos' : 'fotografij'}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mt-3 px-1">{description || defaultDescription}</p>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-full p-0 bg-foreground border-none">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/20 text-card hover:bg-card/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] bg-foreground">
              <img
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/20 text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/20 text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 bg-foreground">
              <h3 className="text-card font-semibold text-lg text-center">{title}</h3>
              <p className="text-card/60 text-sm text-center mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="p-4 bg-foreground/90 overflow-x-auto">
              <div className="flex gap-2 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
