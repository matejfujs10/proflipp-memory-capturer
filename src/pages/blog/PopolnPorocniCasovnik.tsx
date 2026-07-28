import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import heroImage from "@/assets/hero-slide-8.webp";

const SLUG = "/blog/popoln-porocni-casovnik";
const TOC = [
  { id: "zakaj-casovnica", label: "Zakaj je časovnica dejavnik št. 1" },
  { id: "getting-ready", label: "1. Getting Ready (1,5 ure)" },
  { id: "obred-logistika", label: "2. Obred in logistika" },
  { id: "zlata-ura", label: "3. Zlata ura – absolutni ključ" },
  { id: "buffer", label: "4. Pravilo 30-minutnega buffer-ja" },
  { id: "primer", label: "Idealna časovnica – zgled" },
  { id: "posvet", label: "Rezerviraj brezplačen posvet" },
];

const timeline = [
  { time: "13:00", title: "Getting Ready", desc: "1,5 ure mirnega dokumentiranja priprav neveste in ženina – detajli, obleka, prstani, čustva staršev.", duration: "90 min" },
  { time: "14:30", title: "First Look (opcijsko)", desc: "Intimno srečanje para pred obredom – trenutek samo za vaju, brez publike.", duration: "20 min" },
  { time: "15:00", title: "Prihod na obred", desc: "Buffer za promet, parkiranje in zadnje popravke pred vstopom.", duration: "30 min" },
  { time: "15:30", title: "Poročni obred", desc: "Uradna ceremonija in prve čestitke.", duration: "45 min" },
  { time: "16:15", title: "Čestitke & aperitiv", desc: "Skupinske fotografije družine – načrtovan seznam prihrani 30 minut.", duration: "60 min" },
  { time: "17:30", title: "Buffer / prevoz na lokacijo", desc: "Zaščita pred zamudami. Nikoli ne štedite na tem koraku.", duration: "30 min" },
  { time: "19:00", title: "Večerja", desc: "Sproščen del dneva – reportažni posnetki gostov.", duration: "90 min" },
  { time: "20:30", title: "🌅 Zlata ura – portreti", desc: "30–45 minut pred sončnim zahodom. Najlepša mehka svetloba dneva. Absolutno nepogrešljivo za premium portrete.", duration: "35 min", highlight: true },
  { time: "21:15", title: "Prvi ples & zabava", desc: "Odpiranje plesišča, torta, party.", duration: "—" },
];

export default function PopolnPorocniCasovnik() {
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "", terms: false });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms) {
      toast.error("Prosimo, potrdite splošne pogoje.");
      return;
    }
    const subject = encodeURIComponent("Brezplačen posvet – poročna časovnica");
    const body = encodeURIComponent(
      `Ime: ${form.name}\nEmail: ${form.email}\nDatum poroke: ${form.date}\n\nSporočilo:\n${form.message}`
    );
    window.location.href = `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
    toast.success("Odpiramo vaš e-poštni odjemalec ...");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Popoln poročni časovnik: Kako načrtovati dan brez stresa | Proflipp"
        description="Idealna poročna časovnica z zlato uro, getting ready in buffer trenutki. Praktičen vodič za sproščen poročni dan in premium poročne fotografije."
        canonical="/blog/popoln-porocni-casovnik"
        ogType="article"
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative w-full h-[60vh] md:h-[75vh] mt-16 md:mt-20 overflow-hidden">
          <img
            src={heroImage}
            alt="Poročni časovnik – Zlata ura in premium poročne fotografije Proflipp"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center">
            <Link to="/blog" className="text-xs tracking-[0.3em] uppercase text-white/80 hover:text-white mb-6 transition-colors">← Blog</Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
              Popoln poročni časovnik (Timeline): Kako načrtovati dan brez stresa in naglice
            </h1>
          </div>
        </section>

        <article className="container-wide py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-light mb-12">
              Če obstaja ena skrivnost, ki ločuje sproščene, filmske poročne fotografije od nervoznih, hitrih posnetkov – je to <strong>časovnica</strong>. Ne oprema. Ne lokacija. Ne vreme. Časovnica je enkratni najpomembnejši dejavnik, ki bo določil, ali boste na svoj poročni dan uživali – ali ves čas gledali na uro.
            </p>

            <div className="blog-content space-y-8 md:space-y-10 text-base md:text-lg font-light leading-relaxed text-foreground/90">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Zakaj je časovnica dejavnik št. 1</h2>
              <p>
                V desetletju dokumentiranja porok smo videli isti vzorec: pari, ki so vložili čas v premišljen urnik, imajo lepše fotografije – ne zato, ker so bolj fotogenični, ampak zato, ker <em>imajo čas dihati</em>. Ko je časovnica preveč strnjena, se stres bere na obrazu. Ko ima prostor, se pojavijo iskreni nasmehi, prave solze in tisti mehki pogledi, ki jih ne moreš odigrati.
              </p>
              <p>
                Poročna časovnica ni birokracija – je tvoj darilni papir za spomine. Dober fotograf jo bo pomagal sestaviti skupaj s tabo, mesece pred dogodkom.
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">1. Getting Ready (1,5 ure)</h2>
              <p>
                Priprave so kraj, kjer se zgodba začne. Priporočamo <strong>vsaj 90 minut</strong> dokumentiranja: obleka na obešalniku ob mehki svetlobi okna, čevlji, parfum, prstani, pismo od partnerja, mama, ki zapenja hrbet obleke. To so kadri, ki jih boste čez dvajset let gledali najbolj dolgo.
              </p>
              <p>
                Praktični nasvet: rezervirajte svetlo sobo z velikim oknom in poskrbite, da make-up konča vsaj 30 minut pred odhodom. Panika zadnjih minut je vidna v očeh.
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">2. Obred in logistika</h2>
              <p>
                Za obredom praviloma sledijo čestitke in aperitiv – najlepši, a hkrati logistično najbolj kaotični del dneva. <strong>Vnaprej pripravljen seznam skupinskih fotografij</strong> (10–12 skupin, ne več) prihrani 30–45 minut zmede. En družinski član naj bo »klicatelj« – oseba, ki po imenu kliče naslednje družine pred objektiv.
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">3. Zlata ura – absolutni ključ</h2>
              <p>
                Če si smete zapomniti eno stvar iz tega članka, naj bo ta: <strong>rezervirajte 30–45 minut portretne seje 30–45 minut pred sončnim zahodom</strong>. Poznamo jo kot »zlata ura« (Golden Hour) – čas, ko sonce visi nizko in ustvarja mehko, topo, kinematografsko svetlobo, ki ji ni para.
              </p>
              <p>
                Ni umetnega osvetljevalca, ki bi lahko posnemal to svetlobo. Portreti, posneti v tem oknu, izgledajo kot filmski kader. Portreti, posneti eno uro prej, na ostrem opoldanskem soncu, izgledajo kot slikanje osebnih dokumentov. Razlika je ogromna – in stane samo 30 minut skrbnega planiranja.
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">4. Pravilo 30-minutnega buffer-ja</h2>
              <p>
                Med vsakim večjim dogodkom (getting ready → obred, obred → lokacija, večerja → prvi ples) vstavite <strong>30-minutni buffer</strong>. Ne za fotografije – za življenje. Za promet, za solzo, ki jo je treba obrisati, za očeta, ki bi rad na hitro objel hčerko preden se začne prvi ples.
              </p>
              <p>
                Buffer je najcenejša oblika luksuza na poroki. Nič ne stane, a spremeni celoten občutek dneva.
              </p>
            </div>

            {/* Timeline component */}
            <div className="my-16 md:my-20">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-10 text-center">Idealna časovnica – zgled</h2>
              <div className="relative border-l-2 border-primary/30 pl-6 md:pl-10 space-y-8">
                {timeline.map((item) => (
                  <div key={item.time} className="relative">
                    <div className={`absolute -left-[34px] md:-left-[50px] top-1 w-4 h-4 rounded-full border-2 ${item.highlight ? "bg-primary border-primary shadow-glow" : "bg-background border-primary/60"}`} />
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                      <div className="text-primary font-medium tracking-widest text-sm md:w-20 shrink-0">{item.time}</div>
                      <div className="flex-1">
                        <h3 className={`text-lg md:text-xl font-medium mb-1 ${item.highlight ? "text-primary" : ""}`}>{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                        <span className="inline-block mt-2 text-xs tracking-widest uppercase text-foreground/50">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA form */}
            <div className="mt-16 md:mt-20 pt-10 border-t border-border/50">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">Načrtujmo vajino časovnico skupaj</h2>
                <p className="text-muted-foreground font-light">Rezerviraj brezplačen 30-minutni posvet – pomagamo vama sestaviti urnik, ki diha.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border/60 p-6 md:p-10 rounded-sm">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Ime in priimek</Label>
                    <Input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="email">E-pošta</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="date">Predviden datum poroke</Label>
                  <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="message">Sporočilo</Label>
                  <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" checked={form.terms} onCheckedChange={(v) => setForm({ ...form, terms: !!v })} />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    Strinjam se s <Link to="/splosni-pogoji" className="underline">splošnimi pogoji</Link> in <Link to="/politika-zasebnosti" className="underline">politiko zasebnosti</Link>.
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none">Rezerviraj brezplačen posvet</Button>
              </form>
            </div>

            <div className="mt-16 pt-10 border-t border-border/50 text-center space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-primary">We Capture Emotions!</p>
              <p className="text-sm text-muted-foreground">info@proflipp.com</p>
              <p className="text-sm italic text-foreground/70">Investicija, ki vas vedno znova navduši!</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
