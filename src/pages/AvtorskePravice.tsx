import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AvtorskePravice() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-20" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Pravilnik o avtorskih pravicah in uporabi vsebin
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              Spletno mesto proflipp.com (v nadaljevanju: spletno mesto) je v lasti Team MARATONEC. Vse pravice so pridržane.
            </p>
            <p className="text-muted-foreground mb-8">
              Izraz »spletna stran« oziroma »spletno mesto« vključuje celotno spletno mesto in/ali spletno trgovino, torej vso spletno vsebino, vključno z vsemi podstranmi.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1) Avtorske pravice</h2>
            <p className="text-muted-foreground mb-2">
              Vsa besedila, fotografije, videoposnetki, grafike, logotipi, ilustracije, podatkovne zbirke, opisi storitev/izdelkov, dokumenti in druga gradiva, objavljena na spletnem mestu, so avtorsko varovana in so:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>v lasti Team MARATONEC ali</li>
              <li>uporabljena na podlagi dovoljenja/licence tretjih oseb.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Brez predhodnega pisnega soglasja imetnika pravic ni dovoljeno nobeno reproduciranje, kopiranje, razmnoževanje, distribuiranje, javno prikazovanje, predelava, objava ali druga uporaba vsebin (v celoti ali delno), razen če je v tem pravilniku izrecno navedeno drugače.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2) Dovoljena uporaba</h2>
            <p className="text-muted-foreground mb-2">Dovoljena je:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>ogledovanje in uporaba spletnega mesta za osebno, nekomercialno rabo,</li>
              <li>deljenje povezav (linkov) na posamezne strani spletnega mesta, če se pri tem ne posega v vsebino in se spletnega mesta ne predstavlja zavajajoče.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vsako kopiranje ali uporaba fotografij, videov, besedil ali drugih gradiv za objave na družbenih omrežjih, spletnih straneh, tiskovinah, oglasih, predstavitvah, katalogih ipd. je dovoljena le s predhodnim pisnim soglasjem.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3) Vsebine tretjih oseb</h2>
            <p className="text-muted-foreground">
              Spletno mesto lahko vsebuje gradiva, katerih avtorski ali sorodni pravici pripadajo tretjim osebam (npr. fotografije, grafike, ikone, blagovne znamke, vtičniki, video vsebine ipd.). Takšna gradiva so varovana s pravicami njihovih imetnikov in jih ni dovoljeno ponovno uporabiti brez dovoljenja ustreznega imetnika pravic.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4) Blagovne znamke in oznake</h2>
            <p className="text-muted-foreground">
              Vse oznake, logotipi, imena storitev/produktov in druge značilne grafične rešitve, objavljene na spletnem mestu, so lahko varovane kot blagovne znamke ali druge pravice intelektualne lastnine. Njihova uporaba brez soglasja ni dovoljena.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5) Točnost informacij in omejitev odgovornosti</h2>
            <p className="text-muted-foreground mb-2">
              Upravljavec spletnega mesta si prizadeva za točnost in ažurnost objavljenih informacij, vendar:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>so možne napake (npr. tipkarske, opisne ali druge),</li>
              <li>upravljavec ne jamči za popolnost, pravilnost ali ažurnost vsebin,</li>
              <li>fotografije in prikazi izdelkov/storitev so informativne narave; dejanski videz se lahko razlikuje (npr. zaradi svetlobe, nastavitev zaslona, serij izdelkov ipd.).</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Upravljavec ne odgovarja za morebitno škodo, ki bi nastala zaradi uporabe ali nezmožnosti uporabe spletnega mesta oziroma zaradi zanašanja na objavljene informacije, razen v primerih, ko takšne omejitve odgovornosti niso dopustne po veljavni zakonodaji.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">6) Spremembe pravilnika in vsebin</h2>
            <p className="text-muted-foreground">
              Upravljavec si pridržuje pravico do sprememb vsebin spletnega mesta ter tega pravilnika kadarkoli in brez predhodnega obvestila. Spremembe začnejo veljati z objavo na spletni strani.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">7) Dovoljenja in kontakt</h2>
            <p className="text-muted-foreground">
              Če želite uporabljati ali kopirati katerikoli del vsebin (fotografije, videe, besedila, grafike ipd.) ali želite sodelovati, nas kontaktirajte:
            </p>
            <p className="text-muted-foreground mt-4">
              E-pošta: info@proflipp.com
            </p>
            <p className="text-muted-foreground mt-8">
              <strong>Veljavnost:</strong> 17. 12. 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
