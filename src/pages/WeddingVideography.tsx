import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Camera, Check } from "lucide-react";
import weddingCollage1 from "@/assets/wedding-collage-1.webp";

const features = [
  "Cinematic highlight film (3–5 min)",
  "Full ceremony coverage",
  "4K resolution recording",
  "Professional colour grading",
  "Licensed music soundtrack",
  "Delivery within 6–8 weeks",
];

export default function WeddingVideography() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Wedding Videography | Proflipp"
        description="Cinematic wedding videography capturing real emotions."
        canonical="/wedding-videography"
      />
      <Navigation />

      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingCollage1} alt="Cinematic wedding videography" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        <div className="container-wide relative z-10 pt-20 pb-28">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Film & Video</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-4">
            Wedding Videography
          </h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">
            Cinematic wedding films that let you relive every emotion, every word, every moment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Your Wedding Day, in Motion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  While <Link to="/wedding-photography-slovenia" className="text-primary hover:underline">wedding photography</Link> captures 
                  the perfect moments, videography brings the full experience to life – the vows, the laughter, 
                  the music, and the dance.
                </p>
                <p>
                  Our videography team works alongside our photographers to create a seamless, 
                  unobtrusive coverage of your entire day.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Video className="w-10 h-10 text-primary" />
                <span className="text-xl font-display">+</span>
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Photo + Video Combo
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get the best value by combining wedding photography and videography. 
                One coordinated team, one seamless experience, complete wedding coverage.
              </p>
              <Button asChild size="lg" className="w-full">
                <Link to="/wedding-photography-slovenia">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video showcase */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Wedding Film Preview
          </h2>
          <video
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
            controls
            poster={weddingCollage1}
            preload="none"
          >
            <source src="/videos/wedding-video.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-4">Want a Wedding Film?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">Contact us for videography packages and availability.</p>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
