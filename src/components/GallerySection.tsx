import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingConfetti from "@/assets/wedding-confetti.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";
import weddingEmotion from "@/assets/wedding-emotion.jpg";
import weddingKiss from "@/assets/wedding-kiss.jpg";

const images = [
  { src: weddingCeremony, alt: "Poročni obred na prostem" },
  { src: weddingVeil, alt: "Srečen poročni par" },
  { src: weddingConfetti, alt: "Mladoporočenca s konfeti" },
  { src: weddingDetails, alt: "Poročni detajli" },
  { src: weddingEmotion, alt: "Čustveni trenutki" },
  { src: weddingKiss, alt: "Romantičen poljub" },
];

export function GallerySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Galerija</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Ujeti trenutki
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vsaka fotografija pripoveduje svojo zgodbo. Poglejte, kako ujamemo čustva in spomine.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
