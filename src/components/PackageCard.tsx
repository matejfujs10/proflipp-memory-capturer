import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  duration?: string;
  popular?: boolean;
  onSelect?: () => void;
}

export function PackageCard({ name, price, description, features, duration, popular, onSelect }: PackageCardProps) {
  return (
    <div className={cn(
      "relative bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col",
      popular && "ring-2 ring-gold"
    )}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-accent-foreground text-sm font-medium rounded-full">
          Najbolj priljubljen
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">€</span>
        </div>
        {duration && <p className="text-sm text-primary font-medium mt-1">{duration}</p>}
      </div>

      <p className="text-muted-foreground mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button onClick={onSelect} variant={popular ? "default" : "outline"} className="w-full">
        Izberi paket
      </Button>
    </div>
  );
}
