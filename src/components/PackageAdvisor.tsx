import { useState } from "react";
import { Sparkles, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWeddingPricing } from "@/lib/weddingPhotoPricingI18n";

const T = {
  si: { title: "Osebni AI svetovalec za paket", sub: "Opišita datum, trajanje in želje – priporočimo paket, ki se najbolj prilega vajinemu dnevu.", date: "Datum poroke", duration: "Želeno trajanje (npr. 6 ur, cel dan)", wishes: "Vajine želje (priprave, obred, prvi ples, zabava …)", go: "Pripravi priporočilo", loading: "Pripravljam priporočilo …", why: "Zakaj ta paket", select: "Preverita razpoložljivost", err: "Priporočila ni bilo mogoče pripraviti. Poskusita znova.", need: "Vpišita trajanje ali želje." },
  en: { title: "Personal AI package advisor", sub: "Describe your date, duration and wishes – we'll recommend the package that best fits your day.", date: "Wedding date", duration: "Desired duration (e.g. 6 hours, full day)", wishes: "Your wishes (getting ready, ceremony, first dance, party …)", go: "Get recommendation", loading: "Preparing recommendation …", why: "Why this package", select: "Check availability", err: "We couldn't prepare a recommendation. Please try again.", need: "Please enter a duration or wishes." },
  de: { title: "Persönlicher KI-Paketberater", sub: "Beschreibt Datum, Dauer und Wünsche – wir empfehlen das Paket, das am besten zu eurem Tag passt.", date: "Hochzeitsdatum", duration: "Gewünschte Dauer (z. B. 6 Stunden, ganzer Tag)", wishes: "Eure Wünsche (Getting Ready, Trauung, Eröffnungstanz, Party …)", go: "Empfehlung erhalten", loading: "Empfehlung wird erstellt …", why: "Warum dieses Paket", select: "Verfügbarkeit prüfen", err: "Die Empfehlung konnte nicht erstellt werden. Bitte erneut versuchen.", need: "Bitte Dauer oder Wünsche angeben." },
  hr: { title: "Osobni AI savjetnik za paket", sub: "Opišite datum, trajanje i želje – preporučit ćemo paket koji najbolje odgovara vašem danu.", date: "Datum vjenčanja", duration: "Željeno trajanje (npr. 6 sati, cijeli dan)", wishes: "Vaše želje (pripreme, obred, prvi ples, zabava …)", go: "Pripremi preporuku", loading: "Pripremam preporuku …", why: "Zašto ovaj paket", select: "Provjerite dostupnost", err: "Preporuku nije bilo moguće pripremiti. Pokušajte ponovno.", need: "Upišite trajanje ili želje." },
};

interface Result { package: string; summary: string; reasons: string[]; tip?: string }

export function PackageAdvisor({ onSelect }: { onSelect: (label: string) => void }) {
  const { language } = useLanguage();
  const t = T[language as keyof typeof T] ?? T.si;
  const { packages } = getWeddingPricing(language);
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [wishes, setWishes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!duration.trim() && !wishes.trim()) return setError(t.need);
    setLoading(true); setError(""); setResult(null);
    const { data, error } = await supabase.functions.invoke("package-advisor", { body: { date, duration, wishes, lang: language } });
    setLoading(false);
    if (error || data?.error) return setError(data?.error ? `${t.err} (${data.error})` : t.err);
    setResult(data);
  };

  const pkg = result ? packages.find((p) => p.name === result.package) : undefined;

  return (
    <section className="mt-12 max-w-3xl mx-auto bg-card rounded-2xl p-6 lg:p-8 shadow-card ring-1 ring-gold/40">
      <h3 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-gold" /> {t.title}
      </h3>
      <p className="text-muted-foreground mt-2 mb-5">{t.sub}</p>
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-foreground">{t.date}
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1" />
        </label>
        <label className="text-sm text-foreground">{t.duration}
          <Input value={duration} maxLength={100} onChange={(e) => setDuration(e.target.value)} className="mt-1" />
        </label>
        <label className="text-sm text-foreground md:col-span-2">{t.wishes}
          <Textarea value={wishes} maxLength={1500} rows={4} onChange={(e) => setWishes(e.target.value)} className="mt-1" />
        </label>
        <Button type="submit" size="lg" disabled={loading} className="md:col-span-2">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> {t.loading}</> : t.go}
        </Button>
      </form>
      {error && <p className="text-destructive text-sm mt-4">{error}</p>}
      {result && (
        <div className="mt-6 rounded-xl bg-muted p-5">
          <p className="font-display text-2xl font-semibold text-primary">{result.package}{pkg && ` – ${pkg.duration}`}</p>
          <p className="text-foreground mt-2">{result.summary}</p>
          <p className="text-sm font-semibold text-foreground mt-4 mb-2">{t.why}</p>
          <ul className="space-y-2">
            {result.reasons.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{r}</li>
            ))}
          </ul>
          {result.tip && <p className="text-sm italic text-muted-foreground mt-4">{result.tip}</p>}
          <Button className="mt-5" onClick={() => onSelect(pkg ? `${pkg.name} – ${pkg.duration}` : result.package)}>{t.select}</Button>
        </div>
      )}
    </section>
  );
}
