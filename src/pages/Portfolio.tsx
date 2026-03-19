import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { GallerySection } from "@/components/GallerySection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import forestlandHero from "@/assets/forestland-hero.jpg";
import family1 from "@/assets/family-1.jpg";
import newborn1 from "@/assets/newborn-1.jpg";
import studioPortrait1 from "@/assets/studio-portrait-1.jpg";
import heroSlide22 from "@/assets/hero-slide-22.jpg";

const categories = [
  { title: "Wedding Photography", image: weddingCeremony, href: "/wedding-photography-slovenia", alt: "Wedding photography portfolio Slovenia" },
  { title: "Wedding Photography Austria", image: heroSlide22, href: "/wedding-photographer-austria", alt: "Wedding photography portfolio Austria" },
  { title: "Event Photography", image: forestlandHero, href: "/event-photography", alt: "Event photography portfolio" },
  { title: "Family Photography", image: family1, href: "/family-photography", alt: "Family photography portfolio Slovenia" },
  { title: "Newborn Photography", image: newborn1, href: "/newborn-photography", alt: "Newborn baby photography" },
  { title: "Studio Photography", image: studioPortrait1, href: "/studio", alt: "Professional studio photography" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Wedding Photography Portfolio | Proflipp"
        description="Explore wedding, family and event photography portfolio in Slovenia and Austria."
        canonical="/portfolio"
      />
      <Navigation />

      <section className="relative pt-20">
        <div className="absolute inset-0 h-[40vh]">
          <img src={weddingCeremony} alt="Wedding photography portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <div className="container-wide relative z-10 pt-16 pb-20">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Our Work</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            Wedding Photography Portfolio
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Explore our collection of authentic moments from weddings, events and family sessions across Slovenia and Austria.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.title} to={cat.href} className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-card">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-4">Like What You See?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">Let's create something beautiful together.</p>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light">
            <Link to="/contact">Book a Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
