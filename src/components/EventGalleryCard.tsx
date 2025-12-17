import { useState } from "react";
import { X } from "lucide-react";

interface EventGalleryCardProps {
  title: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

export function EventGalleryCard({ title, coverImage, images }: EventGalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
      >
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-card font-semibold text-lg leading-tight">{title}</h3>
          <p className="text-card/70 text-sm mt-1">Klikni za več fotografij</p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm overflow-y-auto">
          <div className="container-wide py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-card text-2xl font-semibold">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-card hover:text-card/80 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {images.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
