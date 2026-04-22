import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface BlogPostLayoutProps {
  heroImage: string;
  heroAlt: string;
  title: string;
  intro: string;
  children: ReactNode;
}

export function BlogPostLayout({ heroImage, heroAlt, title, intro, children }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Editorial full-width hero */}
        <section className="relative w-full h-[60vh] md:h-[75vh] mt-16 md:mt-20 overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center">
            <Link
              to="/blog"
              className="text-xs tracking-[0.3em] uppercase text-white/80 hover:text-white mb-6 transition-colors"
            >
              ← Blog
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
              {title}
            </h1>
          </div>
        </section>

        {/* Article content – narrow editorial container */}
        <article className="container-wide py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-light mb-12 md:mb-16">
              {intro}
            </p>

            <div className="blog-content space-y-8 md:space-y-10 text-base md:text-lg font-light leading-relaxed text-foreground/90">
              {children}
            </div>

            {/* Editorial quote */}
            <blockquote className="my-16 md:my-20 border-l-2 border-primary pl-6 md:pl-8 py-2">
              <p className="text-xl md:text-2xl font-light italic text-foreground/80 leading-relaxed">
                "Najlepši trenutki niso tisti, ki jih poziramo – ampak tisti, ki jih začutimo."
              </p>
            </blockquote>

            {/* CTA copy */}
            <div className="mt-16 md:mt-20 pt-10 border-t border-border/50">
              <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed mb-8 text-center">
                Če načrtujete poroko in iščete poročnega fotografa v Sloveniji ali Avstriji, nas kontaktirajte in preverite razpoložljivost termina.
              </p>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Button asChild variant="outline" size="lg" className="rounded-none">
                  <Link to="/">Nazaj na homepage</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none">
                  <Link to="/portfolio">Poglej galerijo</Link>
                </Button>
                <Button asChild size="lg" className="rounded-none">
                  <Link to="/contact">Preveri razpoložljivost</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none">
                  <Link to="/reviews">Mnenja strank</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
