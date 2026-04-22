import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const PorocniFotografCena2026 = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Koliko stane poročni fotograf v Sloveniji (2026 vodič) | Proflipp"
        description="Cene poročnih fotografov v Sloveniji v 2026: kaj vključuje paket, kako izbrati pravega fotografa in koliko vnaprej rezervirati termin."
        canonical="/blog/koliko-stane-porocni-fotograf-slovenija-2026"
      />
      <Navigation />
      <main className="pt-24 md:pt-28 pb-16">
        <article className="container-wide max-w-3xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">← Blog</Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Koliko stane poročni fotograf v Sloveniji (2026 vodič)
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Poročni fotograf je ena najpomembnejših odločitev pri organizaciji poroke. V Sloveniji se cene poročnih fotografov razlikujejo glede na izkušnje, stil in obseg storitev.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Povprečna cena poročnega fotografa v Sloveniji</h2>
          <p className="mb-6">
            Cena poročnega fotografa v Sloveniji se običajno giblje med 800 € in 3000 €.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Kaj vključuje cena poročne fotografije</h2>
          <p className="mb-3">V večini primerov cena vključuje:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>celodnevno fotografiranje</li>
            <li>obdelavo fotografij</li>
            <li>online galerijo</li>
            <li>500–1000+ fotografij</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Kako izbrati pravega fotografa</h2>
          <p className="mb-3">Pri izbiri poročnega fotografa bodite pozorni na:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>stil fotografije</li>
            <li>izkušnje</li>
            <li>komunikacijo</li>
            <li>reference</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Zakaj ne izbrati najcenejšega fotografa</h2>
          <p className="mb-6">
            Poročne fotografije so edini trajni spomin na vaš dan. Kvaliteta ima tukaj največjo vrednost.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">FAQ</h2>
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="font-semibold mb-1">Koliko časa vnaprej rezervirati fotografa?</h3>
              <p className="text-muted-foreground">Priporočljivo je vsaj 6–12 mesecev vnaprej.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ali fotograf potuje po Sloveniji?</h3>
              <p className="text-muted-foreground">Večina profesionalnih fotografov pokriva celotno Slovenijo.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">Preverite razpoložljivost termina in rezervirajte svoj poročni dan.</p>
            <Button asChild size="lg">
              <Link to="/contact">Preveri razpoložljivost</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PorocniFotografCena2026;
