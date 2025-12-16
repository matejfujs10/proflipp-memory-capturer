import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Camera, Users } from "lucide-react";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingBridge from "@/assets/wedding-bridge.jpg";

export default function ONas() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingVeil} alt="O nas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="container-wide relative z-10 pt-20 pb-32">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Proflipp</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">O nas</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">We Create Emotions!</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">Poročna fotografija je naša posebna strast</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Verjamemo v podporo skozi celoten proces – od iskanja idealnih kotičkov do izbire najboljše svetlobe – 
                da boste na fotografijah videti čudovito in predvsem sproščeno.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Poleg porok fotografiramo tudi družine, nosečniške portrete, pare, potovanja in dogodke. 
                Vsak projekt vzamemo osebno – ker vemo, da ustvarjamo spomine, ki ostanejo generacijam.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Heart, title: "Strast", description: "Ljubezen do fotografije" },
                  { icon: Camera, title: "Izkušnje", description: "10+ let v panogi" },
                  { icon: Users, title: "Pristop", description: "Sproščen in naraven" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={weddingBridge} alt="Proflipp fotografija" className="rounded-2xl shadow-card" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg">
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Porok</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
