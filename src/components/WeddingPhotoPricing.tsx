import { Check, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commonServices, formatEur, offerPrice, weddingPhotoPackages } from "@/lib/weddingPhotoPackages";

interface Props {
  onSelect: (packageLabel: string) => void;
}

export function WeddingPhotoPricing({ onSelect }: Props) {
  return (
    <div>
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Vajina poročna zgodba, ujeta za vedno
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Od intimnega obreda do celodnevnega praznovanja – izberita obseg fotografiranja, ki se prilega vajinemu dnevu. S sproščenim vodenjem in občutkom za pristne trenutke ustvarimo spomine, h katerim se bosta rada vračala.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {weddingPhotoPackages.map((pkg) => {
          const offer = offerPrice(pkg.regular);
          const saving = pkg.regular - offer;
          const label = `${pkg.name} – ${pkg.duration}`;
          return (
            <article
              key={pkg.name}
              className={cn(
                "relative bg-card rounded-2xl p-6 lg:p-8 shadow-card flex flex-col",
                pkg.recommended && "ring-2 ring-gold"
              )}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-accent-foreground text-sm font-medium rounded-full">
                  Priporočamo
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold text-foreground">{pkg.name}</h3>
              <p className="text-primary font-medium mt-1">{pkg.duration}</p>
              <p className="text-muted-foreground mt-3">{pkg.description}</p>

              <div className="mt-5">
                <div className="text-sm text-muted-foreground">
                  Redna cena <span className="line-through">{formatEur(pkg.regular)} €</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display text-4xl font-bold text-primary">{formatEur(offer)}</span>
                  <span className="text-muted-foreground">€</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-gold text-accent-foreground text-sm font-semibold">−20 %</span>
                  <span className="text-sm text-foreground">Prihranek {formatEur(saving)} €</span>
                </div>
              </div>

              <div className="mt-6 flex-grow">
                <p className="text-sm font-semibold text-foreground mb-2">Posebej v tem paketu</p>
                <ul className="space-y-2 mb-4">
                  {pkg.extras.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.note && <p className="text-sm italic text-muted-foreground mb-4">{pkg.note}</p>}
                <p className="text-sm font-semibold text-foreground mb-2">Vključeno v vseh paketih</p>
                <ul className="space-y-2">
                  {commonServices.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-muted p-4">
                <p className="font-medium text-foreground flex items-center gap-2">
                  <Film className="w-4 h-4 text-primary" /> 🎬 Možnost Wedding Content Video
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Kratki čustveni video utrinki in navpične vsebine za Instagram, TikTok ali vajin osebni spomin. Obseg, izvedbo in doplačilo določimo ob povpraševanju.
                </p>
              </div>

              <Button
                size="lg"
                variant={pkg.recommended ? "default" : "outline"}
                className="w-full mt-6"
                onClick={() => onSelect(label)}
              >
                Preverita razpoložljivost
              </Button>
            </article>
          );
        })}
      </div>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-8">
        Število predanih fotografij je odvisno od trajanja fotografiranja, poteka poroke in dogajanja. Predamo skrbno izbran in profesionalno obdelan izbor.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">🎬 Wedding Content Video</h3>
          <p className="text-foreground mb-3">
            Vajina poroka tudi v gibanju. Fotografskemu paketu lahko dodata Wedding Content Video – kratke video utrinke, ki ujamejo vzdušje, nasmehe in čustva vajinega dne.
          </p>
          <p className="text-sm text-muted-foreground">
            Pri izvedbi z enim fotografom video utrinki nastajajo med fotografiranjem. Za obsežnejše snemanje se posebej dogovorimo o dodatnem ustvarjalcu. Wedding Content Video ne vključuje neprekinjenega snemanja celotnega obreda, govorov ali klasičnega poročnega filma.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Dobro je vedeti</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li>Paketi vključujejo enega fotografa.</li>
            <li>Ure pomenijo zaporedno prisotnost fotografa na poroki.</li>
            <li>Dogodki so vključeni, kadar potekajo znotraj dogovorjenega termina.</li>
            <li>Potni stroški in morebitna nastanitev se določijo glede na lokacijo ter navedejo v končni ponudbi.</li>
            <li>Dodatne ure in tiskana fotoknjiga so na voljo po dogovoru.</li>
            <li>Spletna fotoknjiga oziroma galerija je vključena; tiskana fotoknjiga je dodatna možnost.</li>
            <li>Rok predaje fotografij določimo v pogodbi.</li>
            <li>Termin je potrjen po dogovoru in podpisu pogodbe.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
