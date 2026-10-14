import { Check, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatEur, offerPrice } from "@/lib/weddingPhotoPackages";
import { getWeddingPricing } from "@/lib/weddingPhotoPricingI18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { PackageAdvisor } from "@/components/PackageAdvisor";

interface Props {
  onSelect: (packageLabel: string) => void;
}

export function WeddingPhotoPricing({ onSelect }: Props) {
  const { language } = useLanguage();
  const { ui, commonServices, packages: weddingPhotoPackages } = getWeddingPricing(language);
  return (
    <div>
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {ui.title}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          {ui.intro}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {weddingPhotoPackages.map((pkg) => {
          const offer = offerPrice(pkg.regular);
          const saving = pkg.regular - offer;
          const label = `${pkg.name} – ${pkg.duration}`;
          return (
            <article
              key={pkg.name}
              className={cn(
                "relative bg-card rounded-2xl p-6 lg:p-8 shadow-card flex flex-col",
                pkg.recommended && "ring-2 ring-gold"
              )}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-accent-foreground text-sm font-medium rounded-full">
                  {ui.recommended}
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold text-foreground">{pkg.name}</h3>
              <p className="text-primary font-medium mt-1">{pkg.duration}</p>
              <p className="text-muted-foreground mt-3">{pkg.description}</p>

              <div className="mt-5">
                <div className="text-sm text-muted-foreground">
                  {ui.regular} <span className="line-through">{formatEur(pkg.regular)} €</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display text-4xl font-bold text-primary">{formatEur(offer)}</span>
                  <span className="text-muted-foreground">€</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-gold text-accent-foreground text-sm font-semibold">−20 %</span>
                  <span className="text-sm text-foreground">{ui.saving} {formatEur(saving)} €</span>
                </div>
              </div>

              <div className="mt-6 flex-grow">
                <p className="text-sm font-semibold text-foreground mb-2">{ui.inPackage}</p>
                <ul className="space-y-2 mb-4">
                  {pkg.extras.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.note && <p className="text-sm italic text-muted-foreground mb-4">{pkg.note}</p>}
                <p className="text-sm font-semibold text-foreground mb-2">{ui.inAll}</p>
                <ul className="space-y-2">
                  {commonServices.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-muted p-4">
                <p className="font-medium text-foreground flex items-center gap-2">
                  <Film className="w-4 h-4 text-primary" /> {ui.videoTitle}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {ui.videoText}
                </p>
              </div>

              <Button
                size="lg"
                variant={pkg.recommended ? "default" : "outline"}
                className="w-full mt-6"
                onClick={() => onSelect(label)}
              >
                {ui.cta}
              </Button>
            </article>
          );
        })}
      </div>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-8">
        {ui.photoCountNote}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">{ui.contentVideoTitle}</h3>
          <p className="text-foreground mb-3">
            {ui.contentVideoP1}
          </p>
          <p className="text-sm text-muted-foreground">
            {ui.contentVideoP2}
          </p>
        </div>
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">{ui.goodToKnow}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            {ui.goodToKnowItems.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </div>

      <PackageAdvisor onSelect={onSelect} />
    </div>
  );
}
