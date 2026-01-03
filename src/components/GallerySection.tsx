// Spontane, ujete trenutke iz različnih galerij
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
