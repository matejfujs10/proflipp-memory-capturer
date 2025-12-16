import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function SplosniPogoji() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Spacer for fixed navigation */}
      <div className="h-20" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Splošni pogoji poslovanja
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              <strong>Ponudnik:</strong> PROFLIPP (izdajatelj: SF TEAM MARATONEC)<br />
              <strong>Sedež:</strong> 9201 Puconci<br />
              <strong>E-pošta / tel.:</strong> info@proflipp.com / +386 68 169 430<br />
              <strong>Spletna stran:</strong> www.proflipp.si / www.proflipp.com<br />
              <strong>Veljavnost od:</strong> 16. 12. 2025
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Definicije</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Ponudnik</strong> je PROFLIPP (v nadaljevanju: ponudnik).</li>
              <li><strong>Naročnik</strong> je fizična ali pravna oseba, ki naroči storitev. Če je naročnik potrošnik, veljajo tudi obvezna pravila varstva potrošnikov (ZVPot-1), ki jih ti pogoji ne morejo izključiti.</li>
              <li><strong>Storitev</strong> pomeni fotografsko in/ali video storitev ter povezane izdelke (npr. fotoknjiga).</li>
              <li><strong>Pogodba</strong> pomeni sprejem ponudbe (pisno: e-pošta/SMS) in/ali plačilo are/avansa, če ni dogovorjeno drugače.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. Sklenitev pogodbe in rezervacija termina</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponudnik naročniku po povpraševanju posreduje ponudbo (paket, obseg, cena, rok, datum).</li>
              <li>Termin je rezerviran, ko naročnik pisno potrdi ponudbo in plača aro/avans (če je dogovorjena).</li>
              <li>Če se posamezne določbe ponudbe/pogodbe razlikujejo od teh pogojev, velja tisto, kar je dogovorjeno v ponudbi/pogodbi.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Cene in plačilni pogoji</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Cene so določene v ceniku ali v individualni ponudbi.</li>
              <li>Ara/avans se všteje v končno ceno.</li>
              <li>Preostanek plačila se poravna najkasneje 5 dni pred dogodkom, če ni dogovorjeno drugače.</li>
              <li>Če plačilo ni izvedeno v dogovorjenem roku, lahko ponudnik (po predhodnem opominu) storitev zavrne; do takrat nastali upravičeni stroški se lahko obračunajo skladno z OZ.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Potni stroški in dodatni stroški</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Potni stroški se obračunajo po 0,80 EUR/km (iz izhodišča: 9201 Puconci), če ni drugače dogovorjeno.</li>
              <li>Parkirnine, cestnine, vinjete ter morebitna prenočišča se zaračunajo po dejanskih stroških, če nastanejo zaradi izvedbe storitve.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Obveznosti naročnika</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Naročnik posreduje točne informacije (lokacije, urnik, posebne želje, kontakt osebo na dogodku).</li>
              <li>Naročnik zagotovi primerne pogoje za delo (dostop, dovoljenja, razumne časovne okvire, možnost varnega gibanja).</li>
              <li>Če storitev traja več kot 4 ure, naročnik zagotovi pogostitev; če to ni mogoče, to naročnik vnaprej sporoči. Ponudniku pripada do 90 minut za organizacijo obroka (v času, ko to najmanj vpliva na dokumentiranje dogodka).</li>
              <li>Naročnik je odgovoren za svoje udeležence (npr. da gostje ne ovirajo dela).</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">6. Obveznosti ponudnika</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponudnik storitev izvede strokovno in skladno z dogovorjenim obsegom.</li>
              <li>Ponudnik ni poročni organizator; lahko pa po najboljših močeh pomaga z nasveti, če to ne ovira izvedbe.</li>
              <li>Če ponudnik med dogodkom po naročnikovi želji izvede dodatne storitve, ki niso bile dogovorjene, se lahko te dodatno zaračunajo po predhodnem dogovoru.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">7. Zamenjava fotografa in višja sila</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Če zaradi višje sile (npr. težja bolezen, nesreča) ponudnik ne more zagotoviti dogovorjene osebe, bo po najboljših močeh zagotovil ustrezno zamenjavo.</li>
              <li>Če zamenjava ni mogoča in izvedba odpade iz razlogov na strani ponudnika (višja sila), naročniku pripada vračilo že plačanih zneskov za neizvedeni del.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">8. Obseg, slog in izbor fotografij</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponudnik po dogodku izbere in obdela najboljše fotografije.</li>
              <li>Ker gre za avtorsko ustvarjanje, naročnik ne more zahtevati "določenega kadra", ki objektivno ni bil mogoč (npr. zaradi ovir, časovnih omejitev, vremenskih pogojev).</li>
              <li>RAW datoteke niso del standardne dobave. Če naročnik želi odkup RAW, je cena 1 EUR/fotografijo, če je to tehnično izvedljivo in dogovorjeno.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">9. Dobavni roki in predaja</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Naročnik prejme "hitri izbor" do 10 fotografij najkasneje v 3 dneh po dogodku (če je tako oglaševano/dogovorjeno).</li>
              <li>Končni izdelki (digitalne fotografije) se dobavijo praviloma v najkasneje 14 tednih po dogodku, razen če nastopijo objektivne okoliščine (višja sila, izredna sezonska obremenitev); v tem primeru ponudnik naročnika obvesti o novem realnem roku.</li>
              <li>Predaja je praviloma osebno ali po dogovoru (npr. prenos/USB). Ponudnik lahko hrani varnostno kopijo 30 dni po predaji, razen če je dogovorjeno drugače.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">10. Popravki in reklamacije (kakovost)</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Naročnik naj morebitne tehnične napake (npr. manjkajoče datoteke, poškodovane datoteke, očitna napaka pri izvozu) sporoči v 8 dneh od prejema.</li>
              <li>Pri vsebinskih preferencah (stil obdelave, izbor trenutkov) ponudnik upošteva dogovor/ponudbo, vendar manjša odstopanja sama po sebi niso napaka.</li>
              <li>Ti pogoji ne posegajo v morebitne obvezne pravice potrošnika po ZVPot-1, kjer je to relevantno.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">11. Fotoknjige in tiskani izdelki</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponudnik lahko za izdelavo fotoknjige uporablja zunanjega izvajalca (npr. CEWE ali drugega), kar naročniku jasno sporoči.</li>
              <li>Fotoknjiga je personaliziran izdelek, izdelan po naročnikovih navodilih. Če je naročnik potrošnik in je izdelek izdelan po meri, praviloma velja izjema od pravice do odstopa za takšno blago.</li>
              <li>Naročnik ob prevzemu pregleda izdelek in morebitne očiten tiskarski/vezavni defekt sporoči brez odlašanja. Skrite napake se rešujejo v razumnem roku po zaznavi.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">12. Podaljšanje časa na dogodku</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Obseg dela na poroki traja do meta šopka/podvezice (če je to dogovorjeni zaključek) ali do 00:00, razen če je dogovorjeno drugače.</li>
              <li>Po 00:00 se dodatna prisotnost obračuna 100 EUR/uro (ali po dogovorjeni tarifi v ponudbi).</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">13. Odpoved in prestavitev termina</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ob odpovedi s strani naročnika ponudnik praviloma zadrži aro kot nadomestilo za rezervacijo termina (če ni drugače dogovorjeno).</li>
              <li>Če naročnik odpove zaradi višje sile (npr. smrt v ožji družini, težja nesreča, odreditev karantene ipd.) in to izkaže z dokazilom, se ara vrne, razen že nastalih neposrednih stroškov, če so bili izrecno dogovorjeni.</li>
              <li>Pri prestavitvi termina bo ponudnik po najboljših močeh ponudil nov datum. Če novega datuma ni mogoče uskladiti, se ravna po dogovoru v ponudbi; če dogovora ni, se upošteva razumno nadomestilo za rezervacijo termina.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">14. Odgovornost in varnost</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Naročnik in gostje ne smejo ovirati dela (vstopanje v kader, usmerjanje fotografa med ključnimi trenutki ipd.).</li>
              <li>Če pride do izgube fotografij zaradi izredne tehnične okvare ali uničenja opreme/diskov, se odgovornost ponudnika praviloma omeji na vračilo plačanega zneska za fotografsko storitev, razen v primeru naklepa ali hude malomarnosti, kjer omejitev ne velja.</li>
              <li>Vsaka stranka skrbi za lastno varnost; ponudnik pa poskrbi za razumno skrbnost pri izvedbi.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">15. Avtorske pravice in dovoljena uporaba</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fotografije in video so avtorska dela ponudnika.</li>
              <li>Po celotnem plačilu naročnik pridobi neizključno pravico do uporabe za nekomercialne namene (osebna raba, deljenje s sorodniki).</li>
              <li>Pri objavah na spletu naročnik (kadar je to razumno izvedljivo) navede avtorja: "foto: PROFLIPP.COM" ali ime fotografa.</li>
              <li>Komercialna uporaba (mediji, oglasi, sponzorstva) je dovoljena le s predhodnim pisnim soglasjem ponudnika.</li>
              <li>Posredovanje fotografij drugim fotografom za (re)obdelavo brez soglasja ponudnika ni dovoljeno.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">16. Objave za promocijo (zasebnost naročnika)</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponudnik lahko fotografije uporablja za reference in trženje le na podlagi vnaprejšnjega izrecnega soglasja naročnika (npr. označena klavzula v pogodbi/ponudbi).</li>
              <li>Če soglasja ni, ponudnik fotografij ne objavlja javno.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">17. Varstvo osebnih podatkov</h2>
            <p className="text-muted-foreground mb-4">
              Ponudnik osebne podatke obdeluje skladno z GDPR in ZVOP-2.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Namen:</strong> izvedba storitve, komunikacija, izstavitev računov, dostava izdelkov, uveljavljanje zahtevkov.</p>
            <p className="text-muted-foreground mb-2"><strong>Hramba:</strong></p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>podatki iz ponudb: do 12 mesecev,</li>
              <li>pogodbe/računi: skladno z računovodskimi in davčnimi roki,</li>
              <li>dostava datotek: varnostna kopija do 30 dni po predaji,</li>
              <li>promocijske objave: do preklica soglasja.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Naročnik ima pravice dostopa, popravka, izbrisa, omejitve, ugovora in prenosljivosti (kjer velja). Zahteve pošlje na info@proflipp.com.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">18. Komunikacija, ocene in reševanje sporov</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Stranki se zavezujeta k spoštljivi komunikaciji in najprej poskusita spor rešiti sporazumno.</li>
              <li>Naročnik lahko poda pošteno mnenje ali oceno storitve. Nedopustno je objavljati neresnične trditve ali žaljive vsebine, ki protipravno posegajo v pravice drugih.</li>
              <li>Če spor ni rešen, je pristojno stvarno pristojno sodišče v Republiki Sloveniji; potrošniku se ne omejuje pravice do sodnega varstva.</li>
              <li>(IRPS) Ponudnik potrošnika obvešča o možnosti izvensodnega reševanja potrošniških sporov skladno z ZIsRPS.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">19. Končne določbe</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ti pogoji veljajo za naročila sklenjena od datuma veljavnosti naprej. Spremembe pogojev ne vplivajo na že potrjene rezervacije, razen če se stranki izrecno drugače dogovorita.</li>
              <li>Če je katera določba neveljavna, to ne vpliva na veljavnost ostalih določb.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
