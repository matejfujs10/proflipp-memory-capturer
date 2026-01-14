import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Star, Facebook, ExternalLink } from "lucide-react";
import { facebookReviews, omisliReviews } from "@/components/TestimonialsSection";

function StarRating({ size = "sm" }: { size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${sizeClass} fill-gold text-gold`} />
      ))}
    </div>
  );
}

export default function Mnenja() {
  const totalReviews = facebookReviews.length + omisliReviews.length;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-8 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-6">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Mnenja strank</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-2 mb-4">
              Kaj pravijo naše stranke
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-2xl font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">({totalReviews}+ ocen)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Reviews Section */}
      <section className="py-8 bg-background">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Facebook mnenja
                </h2>
                <p className="text-muted-foreground">100% priporočilo • {facebookReviews.length} ocen</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/proflippfotovideo/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1877F2]/90 transition-colors"
            >
              <span className="hidden sm:inline">Poglej vsa mnenja</span>
              <span className="sm:hidden">FB mnenja</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facebookReviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                      <span className="text-[#1877F2] font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Facebook className="w-3 h-3 text-[#1877F2]" />
                        <span>priporoča PROFLIPP.COM</span>
                      </div>
                    </div>
                  </div>
                  <StarRating />
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Omisli.si Reviews Section */}
      <section className="py-8 bg-cream">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Omisli.si mnenja
                </h2>
                <p className="text-muted-foreground">5.0 ocena • {omisliReviews.length} ocen</p>
              </div>
            </div>
            <a
              href="https://omisli.si/proflipp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="hidden sm:inline">Poglej vsa mnenja</span>
              <span className="sm:hidden">Omisli.si</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {omisliReviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Omisli.si</p>
                    </div>
                  </div>
                  <StarRating />
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
