import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Piskotki() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-20" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Politika piškotkov
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Kaj so piškotki?</h2>
            <p className="text-muted-foreground">
              Piškotki so majhne besedilne datoteke, ki jih spletna stran ob vašem obisku shrani v vaš računalnik, tablico ali telefon ("naprava"). Piškotki omogočajo, da si spletna stran vašo napravo "zapomni" (npr. za delovanje košarice, prijavo, izbiro jezika ali statistiko obiskanosti).
            </p>
            <p className="text-muted-foreground">
              Poleg piškotkov lahko uporabljamo tudi podobne tehnologije shranjevanja/dostopa (npr. lokalna shramba brskalnika), ki se obravnavajo podobno kot piškotki.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. Katere vrste piškotkov uporabljamo?</h2>
            <p className="text-muted-foreground mb-4">Na spletni strani uporabljamo naslednje kategorije:</p>
            
            <h3 className="font-semibold text-foreground mt-6 mb-2">(A) Nujno potrebni piškotki</h3>
            <p className="text-muted-foreground">
              Ti piškotki so potrebni za osnovno delovanje spletne strani in spletne trgovine (npr. varnost, prijava, košarica, izvedba nakupa). Brez njih spletna stran ne deluje pravilno. Za te piškotke soglasje praviloma ni potrebno.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">(B) Funkcionalni piškotki (neobvezno)</h3>
            <p className="text-muted-foreground">
              Omogočajo izboljšano uporabniško izkušnjo (npr. shranjena izbira jezika, določene nastavitve). Naložijo se šele po vašem soglasju, če niso nujno potrebni.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">(C) Analitični/statistični piškotki (neobvezno)</h3>
            <p className="text-muted-foreground">
              Pomagajo nam razumeti uporabo spletne strani (npr. katere strani so obiskane, kako se uporabniki premikajo po strani), da lahko izboljšamo delovanje in vsebino. Ti piškotki se naložijo samo na podlagi vašega soglasja.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">(D) Marketinški piškotki (neobvezno)</h3>
            <p className="text-muted-foreground">
              Uporabljajo se za prikaz prilagojenih oglasov in merjenje učinkovitosti oglaševanja. Če jih uporabljamo, se naložijo samo na podlagi vašega soglasja.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Kako pridobimo soglasje?</h2>
            <p className="text-muted-foreground">Ko prvič obiščete našo spletno stran, se vam prikaže obvestilo (cookie banner), kjer lahko:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>sprejmete vse nenujne piškotke,</li>
              <li>zavrnete nenujne piškotke,</li>
              <li>ali izberete nastavitve po kategorijah.</li>
            </ul>
            <p className="text-muted-foreground mt-4">Nenujni piškotki se ne namestijo, dokler ne podate soglasja.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Kako spremenite ali umaknete soglasje?</h2>
            <p className="text-muted-foreground">Soglasje lahko kadarkoli spremenite ali umaknete:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>preko povezave/gumba "Nastavitve piškotkov" (priporočeno: naj bo stalno dostopen v nogi spletne strani),</li>
              <li>ali z brisanjem piškotkov v brskalniku (glej spodaj).</li>
            </ul>
            <p className="text-muted-foreground mt-4">Umik soglasja ne vpliva na zakonitost obdelave pred umikom.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Kako onemogočiti ali izbrisati piškotke v brskalniku?</h2>
            <p className="text-muted-foreground">
              Večina brskalnikov omogoča upravljanje piškotkov (brisanje, blokiranje, nastavitve po spletnih mestih). Upoštevajte, da lahko blokiranje nujnih piškotkov povzroči nepravilno delovanje spletne strani (npr. košarica, prijava).
            </p>
            <p className="text-muted-foreground mt-4">Uradna navodila (povezave):</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome (Google)</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox (Mozilla)</a></li>
              <li><a href="https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/guide/iphone/enable-cookies-iph1ec277219/ios" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari (Apple – iPhone)</a></li>
              <li><a href="https://support.apple.com/guide/deployment/manage-safari-cookies-depf7d5714d4/web" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari (Apple – upravljanje piškotkov)</a></li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">6. Seznam piškotkov</h2>
            <p className="text-muted-foreground">
              Priporočljivo je, da na strani objavite tabelo z dejanskimi piškotki. Za več informacij nas kontaktirajte.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">7. Kontakt</h2>
            <p className="text-muted-foreground">
              Za vprašanja o piškotkih in varstvu osebnih podatkov nas kontaktirajte:<br />
              PROFLIPP, info@proflipp.com
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">8. Spremembe politike</h2>
            <p className="text-muted-foreground">
              To politiko lahko občasno posodobimo zaradi sprememb spletne strani ali zakonodaje.<br />
              <strong>Datum zadnje spremembe:</strong> 17. 12. 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
