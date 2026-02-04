import { Heart, Camera, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Heart, title: t('features.authentic'), description: t('features.authentic_desc') },
    { icon: Camera, title: t('features.equipment'), description: t('features.equipment_desc') },
    { icon: Users, title: t('features.approach'), description: t('features.approach_desc') },
    { icon: Award, title: t('features.experience'), description: t('features.experience_desc') },
  ];

  const stats = [
    { number: "500+", label: t('features.weddings') },
    { number: "10+", label: t('features.years') },
    { number: "1000+", label: t('features.clients') },
    { number: "50k+", label: t('features.photos') },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('features.title')}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
              {t('features.heading')}<br className="hidden md:block" />{t('features.heading2')}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t('features.description')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-300">
                <div className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-xs md:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}