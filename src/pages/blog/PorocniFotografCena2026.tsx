import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-12.webp";

const PorocniFotografCena2026 = () => {
  return (
    <>
      <SEOHead
        title="Koliko stane poročni fotograf v Sloveniji (2026 vodič) | Proflipp"
        description="Cene poročnih fotografov v Sloveniji v 2026: kaj vključuje paket, kako izbrati pravega fotografa in koliko vnaprej rezervirati termin."
        canonical="/blog/koliko-stane-porocni-fotograf-slovenija-2026"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Poročni fotograf Slovenija – cene 2026"
        title="Koliko stane poročni fotograf v Sloveniji (2026 vodič)"
        intro="Poročni fotograf je ena najpomembnejših odločitev pri organizaciji poroke. V Sloveniji se cene poročnih fotografov razlikujejo glede na izkušnje, stil in obseg storitev."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Povprečna cena poročnega fotografa v Sloveniji</h2>
        <p>Cena poročnega fotografa v Sloveniji se običajno giblje med 800 € in 3000 €.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Kaj vključuje cena poročne fotografije</h2>
        <p>V večini primerov cena vključuje:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>celodnevno fotografiranje</li>
          <li>obdelavo fotografij</li>
          <li>online galerijo</li>
          <li>500–1000+ fotografij</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Kako izbrati pravega fotografa</h2>
        <p>Pri izbiri poročnega fotografa bodite pozorni na:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>stil fotografije</li>
          <li>izkušnje</li>
          <li>komunikacijo</li>
          <li>reference</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Zakaj ne izbrati najcenejšega fotografa</h2>
        <p>Poročne fotografije so edini trajni spomin na vaš dan. Kvaliteta ima tukaj največjo vrednost.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Koliko časa vnaprej rezervirati fotografa?</h3>
            <p className="text-muted-foreground">Priporočljivo je vsaj 6–12 mesecev vnaprej.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Ali fotograf potuje po Sloveniji?</h3>
            <p className="text-muted-foreground">Večina profesionalnih fotografov pokriva celotno Slovenijo.</p>
          </div>
        </div>
      </BlogPostLayout>
    </>
  );
};

export default PorocniFotografCena2026;
