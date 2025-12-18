import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  si: {
    title: "Splošni pogoji poslovanja",
    intro: {
      provider: "Ponudnik:",
      providerValue: "PROFLIPP (izdajatelj: SF TEAM MARATONEC)",
      email: "E-pošta / tel.:",
      emailValue: "info@proflipp.com / +386 68 169 430",
      website: "Spletna stran:",
      websiteValue: "www.proflipp.si / www.proflipp.com",
      validity: "Veljavnost od:",
      validityValue: "16. 12. 2025",
    },
    sections: [
      {
        title: "1. Definicije",
        items: [
          "Ponudnik je PROFLIPP (v nadaljevanju: ponudnik).",
          "Naročnik je fizična ali pravna oseba, ki naroči storitev. Če je naročnik potrošnik, veljajo tudi obvezna pravila varstva potrošnikov (ZVPot-1), ki jih ti pogoji ne morejo izključiti.",
          "Storitev pomeni fotografsko in/ali video storitev ter povezane izdelke (npr. fotoknjiga).",
          "Pogodba pomeni sprejem ponudbe (pisno: e-pošta/SMS) in/ali plačilo are/avansa, če ni dogovorjeno drugače.",
        ],
      },
      {
        title: "2. Sklenitev pogodbe in rezervacija termina",
        items: [
          "Ponudnik naročniku po povpraševanju posreduje ponudbo (paket, obseg, cena, rok, datum).",
          "Termin je rezerviran, ko naročnik pisno potrdi ponudbo in plača aro/avans (če je dogovorjena).",
          "Če se posamezne določbe ponudbe/pogodbe razlikujejo od teh pogojev, velja tisto, kar je dogovorjeno v ponudbi/pogodbi.",
        ],
      },
      {
        title: "3. Cene in plačilni pogoji",
        items: [
          "Cene so določene v ceniku ali v individualni ponudbi.",
          "Ara/avans se všteje v končno ceno.",
          "Preostanek plačila se poravna najkasneje 5 dni pred dogodkom, če ni dogovorjeno drugače.",
          "Če plačilo ni izvedeno v dogovorjenem roku, lahko ponudnik (po predhodnem opominu) storitev zavrne; do takrat nastali upravičeni stroški se lahko obračunajo skladno z OZ.",
        ],
      },
    ],
  },
  en: {
    title: "General Terms and Conditions",
    intro: {
      provider: "Provider:",
      providerValue: "PROFLIPP (issuer: SF TEAM MARATONEC)",
      email: "Email / Phone:",
      emailValue: "info@proflipp.com / +386 68 169 430",
      website: "Website:",
      websiteValue: "www.proflipp.si / www.proflipp.com",
      validity: "Valid from:",
      validityValue: "December 16, 2025",
    },
    sections: [
      {
        title: "1. Definitions",
        items: [
          "Provider is PROFLIPP (hereinafter: provider).",
          "Client is a natural or legal person who orders a service. If the client is a consumer, mandatory consumer protection rules (ZVPot-1) also apply, which these terms cannot exclude.",
          "Service means photography and/or video service and related products (e.g., photo book).",
          "Contract means acceptance of the offer (in writing: email/SMS) and/or payment of deposit/advance, unless otherwise agreed.",
        ],
      },
      {
        title: "2. Contract Conclusion and Date Reservation",
        items: [
          "Upon inquiry, the provider sends the client an offer (package, scope, price, deadline, date).",
          "The date is reserved when the client confirms the offer in writing and pays the deposit/advance (if agreed).",
          "If individual provisions of the offer/contract differ from these terms, what is agreed in the offer/contract applies.",
        ],
      },
      {
        title: "3. Prices and Payment Terms",
        items: [
          "Prices are determined in the price list or in an individual offer.",
          "The deposit/advance is included in the final price.",
          "The remaining payment is settled no later than 5 days before the event, unless otherwise agreed.",
          "If payment is not made within the agreed period, the provider may (after prior notice) refuse the service; eligible costs incurred up to that point may be charged in accordance with the Civil Code.",
        ],
      },
    ],
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    intro: {
      provider: "Anbieter:",
      providerValue: "PROFLIPP (Herausgeber: SF TEAM MARATONEC)",
      email: "E-Mail / Tel.:",
      emailValue: "info@proflipp.com / +386 68 169 430",
      website: "Webseite:",
      websiteValue: "www.proflipp.si / www.proflipp.com",
      validity: "Gültig ab:",
      validityValue: "16. Dezember 2025",
    },
    sections: [
      {
        title: "1. Definitionen",
        items: [
          "Anbieter ist PROFLIPP (im Folgenden: Anbieter).",
          "Auftraggeber ist eine natürliche oder juristische Person, die eine Dienstleistung bestellt. Wenn der Auftraggeber ein Verbraucher ist, gelten auch die zwingenden Verbraucherschutzbestimmungen (ZVPot-1), die diese Bedingungen nicht ausschließen können.",
          "Dienstleistung bedeutet Foto- und/oder Videodienstleistung sowie zugehörige Produkte (z.B. Fotobuch).",
          "Vertrag bedeutet die Annahme des Angebots (schriftlich: E-Mail/SMS) und/oder die Zahlung der Anzahlung/Vorauszahlung, sofern nicht anders vereinbart.",
        ],
      },
      {
        title: "2. Vertragsabschluss und Terminreservierung",
        items: [
          "Auf Anfrage sendet der Anbieter dem Auftraggeber ein Angebot (Paket, Umfang, Preis, Frist, Datum).",
          "Der Termin ist reserviert, wenn der Auftraggeber das Angebot schriftlich bestätigt und die Anzahlung/Vorauszahlung leistet (falls vereinbart).",
          "Wenn einzelne Bestimmungen des Angebots/Vertrags von diesen Bedingungen abweichen, gilt das, was im Angebot/Vertrag vereinbart wurde.",
        ],
      },
      {
        title: "3. Preise und Zahlungsbedingungen",
        items: [
          "Die Preise werden in der Preisliste oder in einem individuellen Angebot festgelegt.",
          "Die Anzahlung/Vorauszahlung wird in den Endpreis eingerechnet.",
          "Die Restzahlung erfolgt spätestens 5 Tage vor der Veranstaltung, sofern nicht anders vereinbart.",
          "Erfolgt die Zahlung nicht innerhalb der vereinbarten Frist, kann der Anbieter (nach vorheriger Mahnung) die Dienstleistung verweigern; bis dahin entstandene berechtigte Kosten können gemäß dem Zivilgesetzbuch berechnet werden.",
        ],
      },
    ],
  },
};

export default function SplosniPogoji() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-20" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            {c.title}
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              <strong>{c.intro.provider}</strong> {c.intro.providerValue}<br />
              <strong>{c.intro.email}</strong> {c.intro.emailValue}<br />
              <strong>{c.intro.website}</strong> {c.intro.websiteValue}<br />
              <strong>{c.intro.validity}</strong> {c.intro.validityValue}
            </p>

            {c.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">{section.title}</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
