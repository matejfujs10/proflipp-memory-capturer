import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSlide3 from "@/assets/hero-slide-3.webp";
import heroSlide7 from "@/assets/hero-slide-7.webp";
import heroSlide15 from "@/assets/hero-slide-15.webp";
import heroSlide18 from "@/assets/hero-slide-18.webp";

export default function CouplesPhotography() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Couples Photography | Proflipp"
        description="Romantic couples photography in Slovenia and Austria."
        canonical="/couples-photography"
      />
      <Navigation />

      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={heroSlide3} alt="Romantic couples photography in Slovenia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <div className="container-wide relative z-10 pt-20 pb-28">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Photography Sessions</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            Couples Photography
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Natural, relaxed and romantic couples photography capturing your unique connection.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Your Love Story, Authentically Captured
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Whether it's an engagement session, anniversary celebration, or simply capturing your 
                  connection, our couples photography is all about real emotions and genuine moments.
                </p>
                <p>
                  We guide you gently through the session – no awkward poses, just natural interactions 
                  that reveal the true bond between you. Perfect for couples who want beautiful photos 
                  without feeling like they're "performing."
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Book a Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroSlide7} alt="Couple portrait photography outdoors" className="w-full rounded-xl object-cover aspect-[3/4]" loading="lazy" />
              <img src={heroSlide15} alt="Natural couples photography session" className="w-full rounded-xl object-cover aspect-[3/4] mt-8" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroSlide3, heroSlide7, heroSlide15, heroSlide18].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl">
                <img src={img} alt={`Couples photography ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-4">Ready to Capture Your Story?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">Contact us to book your couples photography session.</p>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
