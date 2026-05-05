import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-15.webp";

const FlippGoldDiamant = () => {
  return (
    <>
      <SEOHead
        title="FLIPPgold ali FLIPPdiamant: kateri poročni paket izbrati? | Proflipp"
        description="Primerjava paketov FLIPPgold (8 ur) in FLIPPdiamant (12 ur). Ugotovite, kateri poročni paket najbolje ustreza vajini zgodbi."
        canonical="/blog/flippgold-ali-flippdiamant-porocni-paket"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Poročna paketa FLIPPgold in FLIPPdiamant – Proflipp"
        title="FLIPPgold ali FLIPPdiamant: Kateri paket najbolje ustreza vajini zgodbi?"
        intro="Izbira poročnega paketa je ključna za to, kako bo vajin dan ohranjen v večnosti. Želita le kritje ključnih dogodkov ali celovito reportažo?"
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">FLIPPgold (8 ur)</h2>
        <p>Idealna izbira za pare, ki želijo dokumentiran celoten uradni del dneva, od obreda do prvega plesa.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">FLIPPdiamant (12 ur)</h2>
        <p>Celovita zgodba brez kompromisov. Vključuje vse – od jutranjih priprav in detajlov do najbolj norih trenutkov na plesišču pozno v noč.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Transparentnost in kakovost</h2>
        <p>Vsak paket vključuje profesionalno obdelavo, spletno galerijo in našo polno predanost vajini edinstveni zgodbi.</p>
      </BlogPostLayout>
    </>
  );
};

export default FlippGoldDiamant;
