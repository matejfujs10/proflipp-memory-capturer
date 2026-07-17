import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-slide-11.webp";

const faqs = [
  {
    q: "Kaj če bo deževalo?",
    a: "Dež je pogosto najlepši del dneva. Prozorne dežnike prinesemo s seboj, refleksije v lužah so kinematografske, iskrena čustva pod nevihto pa nepozabna. Vedno imamo tudi 'plan B' notranje lokacije, ki jo skupaj določimo že vnaprej.",
  },
  {
    q: "Kaj naj oblečeva za predporočno fotkanje?",
    a: "Nekaj, v čemer sta oba pristna. Priporočamo dve kombinaciji – eno bolj sproščeno (jeans, pletenina, nevtralne barve) in eno bolj elegantno. Izogibajta se močnim logotipom in preveč pisanim vzorcem. Uskladita palete, ne kopirajta oblačil.",
  },
  {
    q: "Ne znava pozirati – kaj zdaj?",
    a: "Odlično! Ravno to je najboljše izhodišče. Ne bomo vaju postavljali kot kipe. Delo temelji na nežnem usmerjanju – mikro navodilih, gibu, hoji, dotiku, šepetu na uho. 90 % kadrov je posnetih v gibanju.",
  },
  {
    q: "Kaj če se med snemanjem zjočem?",
    a: "Prosim, jočite. To so tisti kadri, ki jih čez 20 let starši gledajo najbolj dolgo. Nikoli ne prekinjamo trenutka, da bi popravili masko – čustva so vedno pomembnejša od 'popolnosti'.",
  },
  {
    q: "Ali dobiva vse fotografije, tudi 'neuspele'?",
    a: "Dobita skrbno kurirano galerijo najboljših posnetkov – vsak posnetek je barvno obdelan in preverjen. Neizostrenih ali zamižanih kadrov namerno ne dostavljamo, ker ne odražajo profesionalne kakovosti.",
  },
  {
    q: "Kdaj naj rezerviramo termin?",
    a: "Vikendi maj–september se za naslednje leto zapolnijo že 12–18 mesecev vnaprej. Za 2027 trenutno tečejo Early Bird ugodnosti – priporočamo rezervacijo čim prej.",
  },
];

export default function KakoPremagatiTremo() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kako premagati tremo pred objektivom | Sproščene poročne fotografije | Proflipp"
        description="Nasveti profesionalnega poročnega fotografa, kako se sprostiti pred kamero. Reportažna fotografija, predporočno fotkanje in odgovori na pogosta vprašanja."
        canonical="/blog/kako-premagati-tremo-pred-objektivom"
        ogType="article"
      />
      <Navigation />

      <main>
        <section className="relative w-full h-[60vh] md:h-[75vh] mt-16 md:mt-20 overflow-hidden">
          <img
            src={heroImage}
            alt="Sproščen poročni par v naravi – reportažna poročna fotografija Proflipp"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center">
            <Link to="/blog" className="text-xs tracking-[0.3em] uppercase text-white/80 hover:text-white mb-6 transition-colors">← Blog</Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
              Kako premagati tremo pred objektivom: Nasveti za naravne in sproščene poročne fotografije
            </h1>
          </div>
        </section>

        <article className="container-wide py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-light mb-12">
              »Nisem fotogenična.« »Grozen sem pred kamero.« »Vedno se mi zapre grlo.« Če sta si na katero od teh povedali »da« – pozdravljena med 95 % ljudmi na svetu. Dobra novica: to nima nobene zveze s tvojim obrazom. Vse ima zvezo s tem, <em>kako te nekdo vodi</em> pred objektivom.
            </p>

            <div className="blog-content space-y-8 md:space-y-10 text-base md:text-lg font-light leading-relaxed text-foreground/90">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Mit o »nefotogeničnosti«</h2>
              <p>
                Fotogeničnost ni gen. Ni ličnica, ni čeljust, ni popoln nasmeh. Je <strong>zaupanje v osebo za kamero</strong>. Ko se pred objektivom počutiš varno, se tvoje telo spomni, kako se drži. Ko se sprostiš, se oči zasvetijo. Ko oči zasvetijo – nastane fotografija.
              </p>
              <p>
                Profesionalno vodenje ni »reci sir«. Je subtilna režija: šepetamo v uho, sprožamo smeh, prosim za korak v levo, za pogled skozi tvojega partnerja, ne v kamero. V eni uri se nauči tudi najbolj sramežljiv par držati se in gledati tako, da bi rekli: »Kje si se to naučila?«
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Magija reportaže</h2>
              <p>
                Naš pristop je <strong>dokumentarna, reportažna poročna fotografija</strong>. Namesto da vas postavljamo v statične poze, dokumentiramo, kar se zgodi samo od sebe: očetov tresoč se glas med zdravico, sestrino solzo, ki jo obriše z rokavom, poljub, ki traja pol sekunde dlje, kot ste ga načrtovali.
              </p>
              <p>
                Poze zbledijo. Čustva ostanejo. Zato je 80 % naše galerije posneto brez tega, da bi kdo od gostov opazil, da smo v prostoru. Ta »nevidna« prisotnost je razlog, zakaj so kadri tako iskreni.
              </p>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Predporočno fotkanje – najboljša vaja</h2>
              <p>
                Če je le eno orodje, ki ubije poročno tremo, je to <strong>engagement shoot</strong>. 60–90 minut sproščenega fotografiranja na lokaciji po vaši izbiri – morda tam, kjer sta se spoznala. Cilj ni portfolio. Cilj je, da se pred poroko že enkrat srečata s kamero in s fotografom.
              </p>
              <p>
                Pari, ki opravijo predporočno sejo, so na dan poroke <em>vidno</em> bolj sproščeni. Vejo, kako se pred kamero smejim, vejo, kako se držim za roko, brez da bi bilo neprijetno, poznajo naš glas. Trema izgine – ostaneta samo vidva in dan.
              </p>
            </div>

            {/* Testimonial */}
            <div className="my-16 md:my-20 bg-card border border-border/60 p-8 md:p-12 rounded-sm relative">
              <div className="absolute -top-4 left-8 text-6xl text-primary/40 font-serif leading-none">"</div>
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-foreground/85 mb-6">
                Iskreno – oba sva se objektivov bala. Klemen naju je v prvih desetih minutah pripravil, da sva pozabila, da je kamera sploh v prostoru. Ko sva prejela galerijo, sva jokala. Nisva verjela, da tako izgledava skupaj. Hvala, ker sta nama pokazala, kdo sva.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">M&Ž</div>
                <div>
                  <p className="font-medium">Maja & Žan</p>
                  <p className="text-sm text-muted-foreground">Poroka Bled, 2024</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="my-16 md:my-20">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8 text-center">Pogosto zastavljena vprašanja</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-light">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA */}
            <div className="mt-16 md:mt-20 pt-10 border-t border-border/50 text-center">
              <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">Pripravljena stopiti pred kamero – sproščeno?</h2>
              <p className="text-muted-foreground font-light mb-8">Rezerviraj klepet in skupaj se pogovorimo o vajinem dnevu.</p>
              <Button asChild size="lg" className="rounded-none">
                <Link to="/contact">Pišite nam</Link>
              </Button>
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
