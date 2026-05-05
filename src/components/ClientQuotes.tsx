import { Star, Quote } from "lucide-react";

interface ClientQuote {
  text: string;
  author: string;
}

const defaultQuotes: ClientQuote[] = [
  {
    text: "Najboljša odločitev za najino poroko! PROFLIPP je ujel vsak pomemben trenutek, fotografije pa so naravnost magične.",
    author: "Maja & Luka",
  },
  {
    text: "Sproščenost in profesionalizem na enem mestu. Priporočamo vsem!",
    author: "Anja",
  },
];

export function ClientQuotes({ quotes = defaultQuotes }: { quotes?: ClientQuote[] }) {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="relative bg-cream rounded-2xl p-6 md:p-8 shadow-sm border border-border"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-gold/40" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-4 text-sm md:text-base">
                "{q.text}"
              </p>
              <p className="text-primary font-semibold text-sm">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
