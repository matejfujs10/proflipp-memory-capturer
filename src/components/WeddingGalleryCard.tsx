import { useState, useEffect } from "react";
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
  const { t } = useLanguage();
  
  const defaultDescription = t('weddings.gallery_note');

  const nextImage = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, images.length]);

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
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
            alt={`${title} - Proflipp poročna fotografija`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-card">{title}</h3>
          <p className="text-card/70 text-sm mt-1">{images.length} {t('weddings.photos')}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mt-3 px-1">{description || defaultDescription}</p>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl w-full h-[90vh] md:h-auto p-0 bg-foreground border-none overflow-hidden">
          <div className="relative h-full flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 p-2 rounded-full bg-card/20 text-card hover:bg-card/40 transition-colors"
              aria-label="Zapri"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 text-card/80 text-sm bg-foreground/50 px-2 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main image container */}
            <div 
              className="relative flex-1 bg-foreground flex items-center justify-center min-h-0"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                className="max-w-full max-h-[60vh] md:max-h-[70vh] w-auto h-auto object-contain"
              />

              {/* Navigation buttons - larger touch targets on mobile */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 p-3 md:p-2 rounded-full bg-card/30 text-card hover:bg-card/50 active:bg-card/60 transition-colors z-10"
                    aria-label="Prejšnja fotografija"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-2 rounded-full bg-card/30 text-card hover:bg-card/50 active:bg-card/60 transition-colors z-10"
                    aria-label="Naslednja fotografija"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </>
              )}
            </div>

            {/* Title */}
            <div className="p-2 md:p-4 bg-foreground text-center">
              <h3 className="text-card font-semibold text-base md:text-lg">{title}</h3>
            </div>

            {/* Thumbnails - scrollable on mobile */}
            <div className="p-2 md:p-4 bg-foreground/90 overflow-x-auto flex-shrink-0">
              <div className="flex gap-2 justify-start md:justify-center min-w-max md:min-w-0">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-12 h-9 md:w-16 md:h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Sličica ${index + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
