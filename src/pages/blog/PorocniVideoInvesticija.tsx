import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Button } from "@/components/ui/button";
import { buildBlogMailto } from "@/lib/blogCta";
import heroImage from "@/assets/hero-slide-14.webp";
import thumb1 from "@/assets/hero-slide-3.webp";
import thumb2 from "@/assets/hero-slide-9.webp";
import thumb3 from "@/assets/hero-slide-16.webp";
import thumb4 from "@/assets/hero-slide-22.webp";

const SLUG = "/blog/porocni-video-investicija";
const TOC = [
  { id: "statistika", label: "Statistika, ki šokira" },
  { id: "kaj-ne-more", label: "Kar fotografija ne more ujeti" },
  { id: "dediscina", label: "Družinska dediščina" },
  { id: "filmi", label: "Iz naših filmov" },
  { id: "paketi", label: "Investicija v smislu vrednosti" },
  { id: "kontakt", label: "Preveri razpoložljivost" },
];

const videos = [
  { thumb: thumb1, title: "Ana & Luka", location: "Bled · Highlight film", duration: "5:12" },
  { thumb: thumb2, title: "Sara & Nejc", location: "Hallstatt · Cinema cut", duration: "6:48" },
  { thumb: thumb3, title: "Eva & Matej", location: "Piran · Documentary", duration: "4:36" },
  { thumb: thumb4, title: "Nina & Tim", location: "Dunaj · Premium film", duration: "7:20" },
];

const valueTiers = [
  { label: "Content Video", price: "290 €", value: "Kratek filmski povzetek za družbena omrežja – idealen kot 'teaser'." },
  { label: "MINI film", price: "490 €", value: "Do 3 ure snemanja, highlight film 3–5 min." },
  { label: "CLASSIC film", price: "890 €", value: "Celoten dan v 4–6-minutnem highlight filmu + daljša celodnevna verzija." },
  { label: "PREMIUM film", price: "1.490 €", value: "Kinematska izkušnja: 15–25-minutni film, napredni color grading, USB paket." },
];

export default function PorocniVideoInvesticija() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Poročni video: Zakaj je to investicija, ki je ne boste obžalovali | Proflipp"
        description="70 % parov obžaluje, da niso najeli poročnega videografa. Zakaj je poročni film emocionalna dediščina in kaj vključujejo naši FLIPPvideo paketi."
        canonical="/blog/porocni-video-investicija"
        ogType="article"
      />
      <ArticleSchema
        headline="Poročni video: Investicija, ki je ne boste obžalovali"
        description="70 % parov obžaluje, da niso najeli videografa. Kaj video ujame, česar fotografija ne more."
        slug={SLUG}
        image="/og-image.jpg"
        datePublished="2026-05-20"
      />
      <Navigation />

      <main>
        <section className="relative w-full h-[60vh] md:h-[75vh] mt-16 md:mt-20 overflow-hidden">
          <img
            src={heroImage}
            alt="Poročni video – kinematska poročna produkcija Proflipp"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center">
            <Link to="/blog" className="text-xs tracking-[0.3em] uppercase text-white/80 hover:text-white mb-6 transition-colors">← Blog</Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
              Poročni video: Zakaj je to investicija, ki je ne boste obžalovali?
            </h1>
          </div>
        </section>

        <article className="container-wide py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-light mb-12">
              Obstaja ena samo odločitev pri poroki, ki je pari po dogodku najpogosteje obžalujejo – in ni katering, ni cvetje, ni obleka. Je <strong>odsotnost poročnega videa</strong>. Ko čustva zbledijo iz spomina, fotografije ostanejo, a film je edini, ki v resnici <em>oživi</em> vajino zgodbo.
            </p>

            <BlogTOC items={TOC} />

            <div className="blog-content space-y-8 md:space-y-10 text-base md:text-lg font-light leading-relaxed text-foreground/90">
              <h2 id="statistika" className="scroll-mt-24 text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Statistika, ki šokira</h2>
              <p>
                Neodvisne raziskave WeddingWire, The Knot in Brides Magazine soglasno kažejo: <strong>več kot 70 % parov, ki niso najeli videografa, to obžaluje</strong> – v povprečju že v prvem letu po poroki. In številka narašča z leti. Med tistimi, ki so film imeli, ga <em>96 %</em> označuje kot »ena od najboljših odločitev celotnega načrtovanja«.
              </p>
              <p>
                Razlog je preprost: dan poroke traja 14 ur in mine v 14 minutah spomina. Fotografija zamrzne trenutek. Film zamrzne <em>čas</em>.
              </p>

              <h2 id="kaj-ne-more" className="scroll-mt-24 text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Kar fotografija ne more ujeti</h2>
              <p>
                Poglejmo pošteno: dober fotograf bo ujel objem, poljub, solze v očeh. Ampak fotografija je tiha. Ne bo nikoli ujela:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li><strong>Očetovega glasu</strong>, ki se med zdravico zlomi na besedi »hčerka«.</li>
                <li><strong>Smeh</strong> stare mame, ki plane iz srca ob prvem plesu.</li>
                <li><strong>Trepetajočega »da«</strong> med izmenjavo zaobljub.</li>
                <li>Zvoka <strong>vaše pesmi</strong>, ob kateri sta zaplesala prvič.</li>
                <li>Solze, ki jo v realnem času zbriše partner z blazinico palca.</li>
              </ul>
              <p>Vse to je zvok. Vse to je gibanje. Vse to živi samo v videu.</p>

              <h2 id="dediscina" className="scroll-mt-24 text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Družinska dediščina za prihodnje generacije</h2>
              <p>
                Predstavljajta si: čez 30 let sedita z otroki in vnuki. Prižgeta film. Vidijo babico in dedka, kot sta se poznala <em>tisti dan</em> – mlada, zaljubljena, s tresočimi rokami pred oltarjem. To ni video. To je <strong>družinska dediščina</strong>.
              </p>
              <p>
                Naše filme snemamo v <strong>4K kinematski kakovosti</strong> z naprednim color gradingom, ki zagotavlja, da bodo čez desetletja izgledali enako lepo kot na dan predaje. To je edina oblika spomina, ki se z leti dviguje v vrednosti.
              </p>
            </div>

            {/* Video portfolio grid */}
            <div id="filmi" className="scroll-mt-24 my-16 md:my-20">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3 text-center">Iz naših filmov</h2>
              <p className="text-center text-muted-foreground font-light mb-10">Vzorčni highlight filmi – celotne različice na kontakt.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {videos.map((v) => (
                  <div key={v.title} className="group relative aspect-video overflow-hidden rounded-sm bg-muted cursor-pointer">
                    <img src={v.thumb} alt={`Poročni video ${v.title} – Proflipp`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 transition-opacity group-hover:from-black/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-lg font-medium">{v.title}</p>
                          <p className="text-xs tracking-widest uppercase text-white/80">{v.location}</p>
                        </div>
                        <span className="text-xs tracking-widest bg-black/40 backdrop-blur px-2 py-1 rounded">{v.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value tiers */}
            <div id="paketi" className="scroll-mt-24 my-16 md:my-20">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3 text-center">Investicija v smislu vrednosti</h2>
              <p className="text-center text-muted-foreground font-light mb-10">Kaj dobita za vsak paket – transparentno in brez skritih stroškov.</p>
              <div className="space-y-3">
                {valueTiers.map((t) => (
                  <div key={t.label} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border border-border/60 p-5 md:p-6 rounded-sm hover:border-primary/50 transition-colors">
                    <div className="md:w-1/3">
                      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">FLIPPvideo</p>
                      <p className="text-lg font-medium">{t.label}</p>
                    </div>
                    <p className="md:flex-1 text-sm md:text-base text-muted-foreground font-light">{t.value}</p>
                    <p className="text-2xl font-light tracking-tight md:w-32 md:text-right">{t.price}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-6 italic">
                Za ceno enega dobrega vikenda počitnic dobita film, ki bo živel z vama celo življenje.
              </p>
            </div>

            {/* CTA */}
            <div id="kontakt" className="scroll-mt-24 mt-16 md:mt-20 pt-10 border-t border-border/50 text-center">
              <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">Preverita razpoložljivost video paketov</h2>
              <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">
                Termini za sezono se hitro zapolnijo. Pišita nam in v 24 urah prejmeta ponudbo, prilagojeno vajinemu dnevu.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-none">
                  <a href={buildBlogMailto("video", SLUG)}>Preveri razpoložljivost</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none">
                  <Link to="/wedding-videography">Vsi video paketi</Link>
                </Button>
              </div>
            </div>

            <RelatedPosts currentSlug={SLUG} />

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
