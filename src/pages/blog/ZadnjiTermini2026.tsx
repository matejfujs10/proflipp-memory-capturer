import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-9.webp";

const ZadnjiTermini2026 = () => {
  return (
    <>
      <SEOHead
        title="Zadnja priložnost: še nekaj prostih terminov za sezono 2026 | Proflipp"
        description="Še nekaj prostih sobot v poročni sezoni 2026. Izkoristite 10 % popust na vse poročne pakete in si zagotovite svoj termin."
        canonical="/blog/zadnji-prosti-termini-poroka-2026"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Zadnji prosti termini za poroko 2026 – Proflipp"
        title="Zadnja priložnost: Še nekaj prostih terminov za poročno sezono 2026!"
        intro="Se poročite v letu 2026 in še nimate izbranega fotografa? Nekaj sobot je še vedno na voljo, vendar se koledar hitro polni."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Posebna ugodnost</h2>
        <p>Za zadnje proste termine v sezoni 2026 ponujamo <strong>10 % popust</strong> na vse poročne pakete.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Hitra obdelava</h2>
        <p>Pri Proflipp zagotavljamo ekspresno dostavo fotografij, da boste v spominih lahko uživali takoj po poroki.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Preverite svoj datum</h2>
        <p>Ne odlašajte – preverite razpoložljivost in si zagotovite profesionalno pokritost svojega dne po ugodnejši ceni.</p>
      </BlogPostLayout>
    </>
  );
};

export default ZadnjiTermini2026;
