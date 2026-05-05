import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function PromoBanner() {
  return (
    <Link
      to="/contact"
      className="block bg-gradient-to-r from-gold via-amber-400 to-gold text-accent-foreground py-3 md:py-4 px-4 text-center font-bold text-sm md:text-base shadow-md hover:brightness-105 transition-all"
    >
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
        <span className="uppercase tracking-wide">PREVERI ZADNJE PROSTE TERMINE 2026</span>
        <span className="hidden sm:inline">in si pridobi</span>
        <span className="bg-foreground text-background px-2 py-0.5 rounded">10 % POPUSTA</span>
      </span>
    </Link>
  );
}

export function EarlyBird2027Section() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-primary/5 via-cream to-gold/10 border-y border-gold/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            🕊️ EARLY BIRD 2027: <span className="text-primary">Rezerviraj svoj datum pravočasno!</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            Ne dovolite, da vam drugi zasedejo termin. Za vse rezervacije porok v letu 2027,
            sklenjene do <strong className="text-foreground">31. 12. 2026</strong>, podarimo
            <strong className="text-foreground"> GRATIS predporočno fotografiranje</strong> ali
            <strong className="text-foreground"> 10 % popust</strong>.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm md:text-base shadow-lg"
          >
            Preveri razpoložljivost 2027
          </Link>
        </div>
      </div>
    </section>
  );
}
