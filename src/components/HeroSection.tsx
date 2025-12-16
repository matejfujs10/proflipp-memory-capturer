import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Smile } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Poročna fotografija - par ob sončnem zahodu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm font-medium text-card">Poročna & družinska fotografija</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-card mb-4 leading-tight animate-fade-up">
            We Create{" "}
            <span className="italic text-gold">Emotions!</span>
          </h1>

          <p className="text-xl md:text-2xl text-card/90 font-light mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Uživajte v dnevu – mi ujamemo zgodbo.
          </p>

          <p className="text-base md:text-lg text-card/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Naj bo vaš poročni dan sproščen. Vi uživate, mi pa poskrbimo, da bodo 
            fotografije polne ponosa, sreče in pristnih trenutkov – od detajlov, 
            skupinskih do spontanih fotografij.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Heart, text: "Čustva, smeh, solze" },
              { icon: Camera, text: "Video & fotografije" },
              { icon: Smile, text: "Večni spomini" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-card/90">
                <item.icon className="w-4 h-4 text-gold" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-sky-dark shadow-lg">
              <Link to="/kontakt">Pošlji povpraševanje</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-card text-card bg-transparent hover:bg-card/10">
              <Link to="/poroke">Izberi paket</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
