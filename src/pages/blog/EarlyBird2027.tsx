import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-5.webp";

const EarlyBird2027 = () => {
  return (
    <>
      <SEOHead
        title="Zakaj rezervirati poročnega fotografa za 2027 že danes? | Proflipp"
        description="Early Bird 2027: gratis predporočno fotografiranje ali 10 % popust za vse rezervacije porok 2027, sklenjene do konca leta 2026."
        canonical="/blog/early-bird-porocni-fotograf-2027"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Early Bird 2027 – rezervacija poročnega fotografa Proflipp"
        title="Zakaj rezervirati poročnega fotografa za leto 2027 že danes?"
        intro="Načrtovanje poroke je maraton, ne šprint. Čeprav se leto 2027 zdi daleč, se najbolj priljubljeni termini zapolnijo hitreje, kot si mislite."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Mirno načrtovanje</h2>
        <p>Ko si zagotovite ključne ponudnike, se lahko v miru posvetite detajlom brez stresa zadnje minute.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Zagotovljena cena</h2>
        <p>Z zgodnjo rezervacijo si zagotovite trenutne pogoje in se izognete morebitnim prihodnjim dvigom cen.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Ekskluzivna ugodnost</h2>
        <p>Za vse rezervacije porok v letu 2027, sklenjene do konca leta 2026, podarimo <strong>gratis predporočno fotografiranje ali 10 % popust</strong>.</p>
      </BlogPostLayout>
    </>
  );
};

export default EarlyBird2027;
