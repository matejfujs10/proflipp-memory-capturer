import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PolitikaZasebnosti() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-20" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Politika zasebnosti
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              Ta politika zasebnosti se nanaša na spletno stran www.proflipp.com (v nadaljevanju: spletna stran) in opisuje, kako upravljavec obdeluje osebne podatke uporabnikov v skladu z Uredbo (EU) 2016/679 (GDPR) in veljavno slovensko zakonodajo.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Upravljavec osebnih podatkov</h2>
            <p className="text-muted-foreground">
              Proflipp<br />
              E-pošta: info@proflipp.com<br />
              (Upravljavec bo po potrebi dopolnil podatke o sedežu, matični številki ipd.)
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. Vrste osebnih podatkov</h2>
            <p className="text-muted-foreground mb-2">Upravljavec lahko obdeluje naslednje osebne podatke:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>ime in priimek,</li>
              <li>elektronski naslov,</li>
              <li>telefonsko številko,</li>
              <li>naslov,</li>
              <li>IP naslov,</li>
              <li>podatke o uporabi spletne strani (ogledi strani, čas obiska ipd.),</li>
              <li>druge podatke, ki jih uporabnik prostovoljno posreduje prek obrazcev.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Nameni in pravne podlage obdelave</h2>
            <p className="text-muted-foreground mb-2">Osebni podatki se obdelujejo za naslednje namene:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>izvedba naročil in komunikacija s strankami (izvajanje pogodbe),</li>
              <li>odgovarjanje na povpraševanja (zakoniti interes ali privolitev),</li>
              <li>pošiljanje novic in obvestil (privolitev),</li>
              <li>izboljševanje delovanja spletne strani in analitika obiska (zakoniti interes),</li>
              <li>izpolnjevanje zakonskih obveznosti.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Podatki se obdelujejo izključno v obsegu, ki je potreben za dosego posameznega namena.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Hramba osebnih podatkov</h2>
            <p className="text-muted-foreground mb-2">Osebni podatki se hranijo:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>do izpolnitve namena, za katerega so bili zbrani,</li>
              <li>do preklica privolitve (kadar obdelava temelji na privolitvi),</li>
              <li>v skladu z zakonskimi roki hrambe.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Po preteku obdobja hrambe se podatki trajno izbrišejo ali anonimizirajo.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Posredovanje podatkov tretjim osebam</h2>
            <p className="text-muted-foreground mb-2">Upravljavec osebnih podatkov ne posreduje tretjim osebam, razen:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>pogodbenim obdelovalcem (npr. ponudniki gostovanja, e-poštnih storitev),</li>
              <li>kadar to zahteva zakon.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vsi pogodbeni obdelovalci zagotavljajo ustrezno raven varstva osebnih podatkov.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">6. Varnost osebnih podatkov</h2>
            <p className="text-muted-foreground">
              Upravljavec uporablja ustrezne tehnične in organizacijske ukrepe za zaščito osebnih podatkov pred izgubo, zlorabo, nepooblaščenim dostopom ali razkritjem.
            </p>
            <p className="text-muted-foreground mt-4">
              Uporabnik je sam odgovoren za varovanje svojih dostopnih podatkov.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">7. Piškotki in samodejno beleženje podatkov</h2>
            <p className="text-muted-foreground mb-2">Spletna stran uporablja piškotke in podobne tehnologije za:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>delovanje spletne strani,</li>
              <li>statistiko obiska,</li>
              <li>izboljšanje uporabniške izkušnje.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Podrobnosti o uporabi piškotkov so opredeljene v <a href="/piskotki" className="text-primary hover:underline">Politiki piškotkov</a>.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">8. Pravice posameznikov</h2>
            <p className="text-muted-foreground mb-2">Posameznik ima v skladu z GDPR naslednje pravice:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>pravico do dostopa do osebnih podatkov,</li>
              <li>pravico do popravka netočnih podatkov,</li>
              <li>pravico do izbrisa (pravica do pozabe),</li>
              <li>pravico do omejitve obdelave,</li>
              <li>pravico do prenosljivosti podatkov,</li>
              <li>pravico do ugovora obdelavi,</li>
              <li>pravico do preklica privolitve.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Zahteve se pošljejo na: info@proflipp.com
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">9. Obdelava podatkov mladoletnih oseb</h2>
            <p className="text-muted-foreground">
              Spletna stran ni namenjena mladoletnim osebam. Upravljavec zavestno ne zbira osebnih podatkov oseb, mlajših od 16 let, brez soglasja staršev ali skrbnikov.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">10. Povezave do drugih spletnih strani</h2>
            <p className="text-muted-foreground">
              Spletna stran lahko vsebuje povezave do drugih spletnih mest. Upravljavec ne prevzema odgovornosti za politike zasebnosti teh spletnih mest.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">11. Spremembe politike zasebnosti</h2>
            <p className="text-muted-foreground">
              Upravljavec si pridržuje pravico do spremembe politike zasebnosti. Spremembe bodo objavljene na spletni strani.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">12. Kontakt</h2>
            <p className="text-muted-foreground">
              Za vsa vprašanja v zvezi z varstvom osebnih podatkov se obrnite na: info@proflipp.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
