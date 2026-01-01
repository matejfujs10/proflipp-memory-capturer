import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import weddingImage from "@/assets/trebnje-wedding-1.jpg";
import eventsImage from "@/assets/forestland-hero.jpg";
import familyImage from "@/assets/family-1.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.weddings'),
      description: t('services.weddings_desc'),
      image: weddingImage,
      href: "/poroke",
    },
    {
      title: t('services.events'),
      description: t('services.events_desc'),
      image: eventsImage,
      href: "/dogodki",
    },
    {
      title: t('services.families'),
      description: t('services.families_desc'),
      image: familyImage,
      href: "/druzine",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('services.title')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-card mb-2">{service.title}</h3>
                <p className="text-card/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{t('services.more')}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
