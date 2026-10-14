import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-15.webp";
import { formatEur, offerPrice, weddingPhotoPackages } from "@/lib/weddingPhotoPackages";

const fits: Record<string, string> = {
  "FLIPP MINI": "Za civilni ali intimni obred z nekaj gosti, kjer želita ujeti obred, čestitke in kratke portrete.",
  "FLIPP INTIMATE": "Za manjšo poroko, kjer je poleg obreda dovolj časa za sprejem in sproščene portrete para.",
  "FLIPP LOVE STORY": "Za pare, ki želijo povezano zgodbo od priprav ali prihoda gostov do začetka praznovanja.",
  "FLIPP SIGNATURE": "Naša najpogostejša izbira – celovita zgodba od priprav in prvega pogleda do govorov, torte ali prvega plesa.",
  "FLIPP FULL STORY": "Za celodnevno poroko brez kompromisov – od jutranjih priprav do plesa in večernih portretov.",
};

const FlippGoldDiamant = () => {
  return (
    <>
      <SEOHead
        title="Kateri poročni paket izbrati? FLIPP paketi 2026 | Proflipp"
        description="Primerjava petih poročnih paketov FLIPP (2–12 ur) z novimi cenami −20 %. Ugotovite, kateri paket najbolje ustreza vajini zgodbi."
        canonical="/blog/flippgold-ali-flippdiamant-porocni-paket"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Poročni paketi FLIPP – Proflipp"
        title="Kateri poročni paket najbolje ustreza vajini zgodbi?"
        intro="Paketa FLIPPgold in FLIPPdiamant smo nadomestili s petimi novimi paketi – od 2 do 12 ur. Vsi imajo zdaj 20 % nižjo ponudbeno ceno. Tukaj so razlike, da hitro najdeta pravega."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Pregled paketov in cen</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4">Paket</th><th className="py-2 pr-4">Trajanje</th><th className="py-2 pr-4">Redna cena</th><th className="py-2">Ponudba (−20 %)</th>
              </tr>
            </thead>
            <tbody>
              {weddingPhotoPackages.map((p) => (
                <tr key={p.name} className="border-b border-border">
                  <td className="py-2 pr-4 font-medium">{p.name}{p.recommended && " ★"}</td>
                  <td className="py-2 pr-4">{p.duration}</td>
                  <td className="py-2 pr-4 line-through text-muted-foreground">{formatEur(p.regular)} €</td>
                  <td className="py-2 font-semibold">{formatEur(offerPrice(p.regular))} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {weddingPhotoPackages.map((p) => (
          <div key={p.name}>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">
              {p.name} ({p.duration}) – {formatEur(offerPrice(p.regular))} €
            </h2>
            <p>{fits[p.name] ?? p.description}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {p.extras.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        ))}

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Ključne razlike na kratko</h2>
        <p>Glavna razlika je čas: več ur pomeni več zgodbe. MINI in INTIMATE pokrijeta obred in portrete, LOVE STORY doda priprave in začetek praznovanja, SIGNATURE zajame vse ključne trenutke dneva, FULL STORY pa celoten dan do plesa. Vsi paketi vključujejo enega fotografa, profesionalno obdelavo in spletno galerijo, Wedding Content Video pa lahko dodata ob doplačilu.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Ne vesta, katerega izbrati?</h2>
        <p>Na strani s poročnim fotografiranjem opišita datum, trajanje in želje – naš AI svetovalec vama v nekaj sekundah predlaga paket in pojasni, zakaj.</p>
      </BlogPostLayout>
    </>
  );
};

export default FlippGoldDiamant;
