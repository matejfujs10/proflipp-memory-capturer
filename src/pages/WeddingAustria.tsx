import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Camera, MapPin, Star } from "lucide-react";
import heroSlide22 from "@/assets/hero-slide-22.jpg";
import heroSlide23 from "@/assets/hero-slide-23.jpg";
import heroSlide24 from "@/assets/hero-slide-24.jpg";
import heroSlide27 from "@/assets/hero-slide-27.jpg";
import heroSlide28 from "@/assets/hero-slide-28.jpg";

const locations = [
  "Vienna (Wien)", "Graz", "Salzburg", "Klagenfurt (Celovec)",
  "Villach (Beljak)", "Linz", "Innsbruck", "Hallstatt"
];

export default function WeddingAustria() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Wedding Photographer Austria | Proflipp"
        description="Looking for a wedding photographer in Austria? Proflipp captures emotional, natural and elegant wedding stories."
        canonical="/wedding-photographer-austria"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={heroSlide22} alt="Wedding photography in Vienna, Austria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <div className="container-wide relative z-10 pt-20 pb-28">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Destination Wedding Photography</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            Wedding Photographer Austria
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Capturing authentic love stories across Austria – from Vienna's palaces to Alpine lakeside ceremonies.
          </p>
        </div>
      </section>

      {/* Why Austria */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Why Choose Proflipp for Your Austrian Wedding?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Austria offers breathtaking backdrops for weddings – from imperial Vienna palaces to 
                  the romantic shores of Hallstatt. As experienced <Link to="/wedding-photography-slovenia" className="text-primary hover:underline">wedding photographers</Link> based 
                  in neighbouring Slovenia, we bring an intimate understanding of Central European wedding traditions.
                </p>
                <p>
                  Our documentary approach captures the real emotions, laughter, and spontaneous moments 
                  that make your day unforgettable. No stiff poses – just authentic storytelling.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Emotional storytelling</p>
                </div>
                <div className="text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">500+ weddings</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">5.0 rating</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroSlide23} alt="Wedding ceremony in Salzburg, Austria" className="w-full rounded-xl object-cover aspect-[3/4]" loading="lazy" />
              <img src={heroSlide27} alt="Bride and groom portrait in Innsbruck" className="w-full rounded-xl object-cover aspect-[3/4] mt-8" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Where We Photograph in Austria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cover weddings across Austria. Here are some of our most popular locations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {locations.map((loc) => (
              <div key={loc} className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Austrian Wedding Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroSlide22, heroSlide24, heroSlide28, heroSlide23].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={img} alt={`Wedding photography Austria ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Planning a Wedding in Austria?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Let's create timeless memories together. Contact us today for a personalised quote.
          </p>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
