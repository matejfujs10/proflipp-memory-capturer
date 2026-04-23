import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Video, Users, Calendar, Package, Zap, Sparkles, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Produkcija za socialna omrežja (Reels & TikTok)",
    description:
      "Dinamični, trendovski videi, prilagojeni algoritmom, ki povečujejo doseg in vključenost vaših sledilcev.",
  },
  {
    icon: Users,
    title: "Poslovni portreti",
    description:
      "Profesionalne fotografije ekipe, ki izžarevajo dostopnost in kompetentnost.",
  },
  {
    icon: Calendar,
    title: "Dogodki in konference",
    description:
      "Celostno dokumentiranje vaših poslovnih dogodkov, sejmov in izobraževanj za potrebe PR-ja in arhiva.",
  },
  {
    icon: Package,
    title: "Predstavitev izdelkov in storitev",
    description:
      "Lifestyle fotografija in video, ki vaš produkt postavi v kontekst realne uporabe.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Hitra odzivnost",
    description:
      "Razumemo dinamiko trga, zato zagotavljamo hitro obdelavo in dostavo vsebin.",
  },
  {
    icon: Sparkles,
    title: "Tehnična dovršenost",
    description:
      "Uporabljamo vrhunsko opremo za brezhibno kakovost slike in zvoka.",
  },
  {
    icon: Target,
    title: "Strateški pristop",
    description:
      "Ne pritisnemo le na sprožilec; svetujemo vam, kakšna vsebina bo najbolje delovala za vaš specifičen cilj.",
  },
];

const Poslovno = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Poslovno fotografiranje & video za podjetja | PROFLIPP B2B"
        description="Strateške vizualne vsebine za podjetja: Reels & TikTok, poslovni portreti, dogodki, predstavitve izdelkov. Hitra odzivnost, tehnična dovršenost, strateški pristop."
        canonical="/poslovno"
      />
      <Navigation />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase">
                B2B / Poslovne storitve
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6 leading-tight">
                Vizualne zgodbe, ki gradijo zaupanje in pospešujejo prodajo.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                V digitalni dobi je prvi vtis podjetja odvisen od kakovosti vizualnih vsebin. Pri PROFLIPP ne ustvarjamo le slik in videov – ustvarjamo strateška vizualna orodja, ki vašo blagovno znamko ločijo od konkurence. Pomagamo vam komunicirati strokovnost, avtentičnost in vrednote vašega podjetja.
              </p>
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold shadow-glow">
                <Link to="/contact">
                  Rezerviraj termin za sestanek
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-2xl mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Kaj nudimo podjetjem
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3">
                Storitve, ki gradijo vašo blagovno znamko
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-2xl mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Zakaj PROFLIPP?
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3">
                Več kot fotograf – vaš strateški partner
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-3xl mx-auto">
              Pripravljeni dvigniti vizualno podobo vašega podjetja?
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Povejte nam o vaših ciljih – pripravimo predlog, ki bo prilagojen vaši blagovni znamki in proračunu.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-black font-semibold shadow-xl"
            >
              <Link to="/contact">
                Rezerviraj termin za sestanek
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Poslovno;
