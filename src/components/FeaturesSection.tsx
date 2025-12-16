import { Heart, Camera, Users, Award } from "lucide-react";

const features = [
  { icon: Heart, title: "Pristna čustva", description: "Ujamemo smeh, solze, dotike in spontane trenutke – brez prisile in poziranja." },
  { icon: Camera, title: "Profesionalna oprema", description: "Najnovejša fotografska oprema za najboljše rezultate v vseh svetlobnih pogojih." },
  { icon: Users, title: "Sproščen pristop", description: "Neopazna ekipa, ki poskrbi, da se počutite udobno in naravno." },
  { icon: Award, title: "Izkušnje", description: "Leta izkušenj pri porokah, dogodkih in družinskem fotografiranju." },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Zakaj mi?</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Ustvarjamo spomine,<br />ki ostanejo
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Poročna fotografija je naša posebna strast. Verjamemo v podporo skozi 
              celoten proces – od iskanja idealnih kotičkov do izbire najboljše 
              svetlobe – da boste na fotografijah videti čudovito in predvsem sproščeno.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Porok" },
              { number: "10+", label: "Let izkušenj" },
              { number: "1000+", label: "Zadovoljnih strank" },
              { number: "50k+", label: "Fotografij" },
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 lg:p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-300">
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
