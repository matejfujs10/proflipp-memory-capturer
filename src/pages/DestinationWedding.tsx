import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Camera, Heart } from "lucide-react";
import heroSlide2 from "@/assets/hero-slide-2.webp";
import heroSlide20 from "@/assets/hero-slide-20.webp";
import heroSlide28 from "@/assets/hero-slide-28.webp";
import heroSlide31 from "@/assets/hero-slide-31.webp";

const destinations = [
  "Lake Bled, Slovenia", "Piran, Slovenia", "Vienna, Austria", "Hallstatt, Austria",
  "Rovinj, Croatia", "Lake Bohinj, Slovenia", "Salzburg, Austria", "Dubrovnik, Croatia"
];

export default function DestinationWedding() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Destination Wedding Photography | Proflipp"
        description="Elegant destination wedding photography with emotional storytelling."
        canonical="/destination-wedding-photography"
      />
      <Navigation />

      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={heroSlide2} alt="Destination wedding photography at Lake Bled" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <div className="container-wide relative z-10 pt-20 pb-28">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Weddings Across Europe</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            Destination Wedding Photography
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            From Alpine lakes to Mediterranean coastlines – we travel wherever your love story takes you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Your Dream Location, Our Expertise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A destination wedding deserves a photographer who understands travel, light, and how to capture 
                  the magic of unfamiliar places. Based in <Link to="/wedding-photography-slovenia" className="text-primary hover:underline">Slovenia</Link>, 
                  we're perfectly positioned to cover weddings across Central and Southern Europe.
                </p>
                <p>
                  We handle everything – from scouting the best photo spots to coordinating timing with 
                  your planner. You focus on your day; we'll capture every moment.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Europe-wide</p>
                </div>
                <div className="text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">1000+ edited photos</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Emotional storytelling</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroSlide20} alt="Destination wedding at Logarska dolina" className="w-full rounded-xl object-cover aspect-[3/4]" loading="lazy" />
              <img src={heroSlide31} alt="Destination wedding in Rovinj, Croatia" className="w-full rounded-xl object-cover aspect-[3/4] mt-8" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {destinations.map((loc) => (
              <div key={loc} className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{loc}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroSlide2, heroSlide28, heroSlide20, heroSlide31].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={img} alt={`Destination wedding photography ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-4">Planning a Destination Wedding?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">Let's discuss your wedding photography needs.</p>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
