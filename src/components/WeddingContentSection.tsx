import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Camera, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function WeddingContentSection() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: MapPin,
      title: t('wedding_content.section1_title'),
      description: t('wedding_content.section1_desc'),
    },
    {
      icon: Camera,
      title: t('wedding_content.section2_title'),
      description: t('wedding_content.section2_desc'),
    },
    {
      icon: Calendar,
      title: t('wedding_content.section3_title'),
      description: t('wedding_content.section3_desc'),
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {t('wedding_content.intro')}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-sky-dark">
              <Link to="/kontakt">{t('hero.inquiry')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
