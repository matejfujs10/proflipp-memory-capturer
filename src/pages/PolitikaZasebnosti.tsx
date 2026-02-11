import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  si: {
    title: "Politika zasebnosti",
    intro: "Ta politika zasebnosti se nanaša na spletno stran www.proflipp.com in opisuje, kako upravljavec obdeluje osebne podatke uporabnikov v skladu z GDPR in veljavno slovensko zakonodajo.",
    sections: [
      { title: "1. Upravljavec osebnih podatkov", text: "Proflipp\nE-pošta: info@proflipp.com" },
      { title: "2. Vrste osebnih podatkov", text: "Upravljavec lahko obdeluje: ime in priimek, elektronski naslov, telefonsko številko, naslov, IP naslov, podatke o uporabi spletne strani." },
      { title: "3. Nameni obdelave", text: "Osebni podatki se obdelujejo za: izvedbo naročil, odgovarjanje na povpraševanja, pošiljanje novic, izboljševanje delovanja spletne strani." },
      { title: "4. Hramba podatkov", text: "Osebni podatki se hranijo do izpolnitve namena ali do preklica privolitve." },
      { title: "5. Varnost podatkov", text: "Upravljavec uporablja ustrezne tehnične in organizacijske ukrepe za zaščito osebnih podatkov." },
      { title: "6. Pravice posameznikov", text: "Posameznik ima pravico do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti podatkov. Zahteve: info@proflipp.com" },
      { title: "7. Kontakt", text: "Za vsa vprašanja: info@proflipp.com" },
    ],
  },
  en: {
    title: "Privacy Policy",
    intro: "This privacy policy applies to the website www.proflipp.com and describes how the controller processes users' personal data in accordance with GDPR and applicable Slovenian legislation.",
    sections: [
      { title: "1. Data Controller", text: "Proflipp\nEmail: info@proflipp.com" },
      { title: "2. Types of Personal Data", text: "The controller may process: name and surname, email address, phone number, address, IP address, website usage data." },
      { title: "3. Processing Purposes", text: "Personal data is processed for: order execution, responding to inquiries, sending newsletters, improving website functionality." },
      { title: "4. Data Retention", text: "Personal data is retained until the purpose is fulfilled or consent is withdrawn." },
      { title: "5. Data Security", text: "The controller uses appropriate technical and organizational measures to protect personal data." },
      { title: "6. Individual Rights", text: "Individuals have the right to access, rectification, erasure, restriction of processing and data portability. Requests: info@proflipp.com" },
      { title: "7. Contact", text: "For all questions: info@proflipp.com" },
    ],
  },
  de: {
    title: "Datenschutzrichtlinie",
    intro: "Diese Datenschutzrichtlinie gilt für die Website www.proflipp.com und beschreibt, wie der Verantwortliche personenbezogene Daten der Nutzer gemäß DSGVO und geltendem slowenischen Recht verarbeitet.",
    sections: [
      { title: "1. Verantwortlicher", text: "Proflipp\nE-Mail: info@proflipp.com" },
      { title: "2. Arten personenbezogener Daten", text: "Der Verantwortliche kann verarbeiten: Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Adresse, IP-Adresse, Website-Nutzungsdaten." },
      { title: "3. Verarbeitungszwecke", text: "Personenbezogene Daten werden verarbeitet für: Auftragsabwicklung, Beantwortung von Anfragen, Versand von Newslettern, Verbesserung der Website-Funktionalität." },
      { title: "4. Datenspeicherung", text: "Personenbezogene Daten werden aufbewahrt, bis der Zweck erfüllt ist oder die Einwilligung widerrufen wird." },
      { title: "5. Datensicherheit", text: "Der Verantwortliche verwendet angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten." },
      { title: "6. Rechte der Betroffenen", text: "Betroffene haben das Recht auf Zugang, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Anfragen: info@proflipp.com" },
      { title: "7. Kontakt", text: "Für alle Fragen: info@proflipp.com" },
    ],
  },
  hr: {
    title: "Politika privatnosti",
    intro: "Ova politika privatnosti odnosi se na web stranicu www.proflipp.com i opisuje kako voditelj obrade obrađuje osobne podatke korisnika u skladu s GDPR-om i važećim slovenskim zakonodavstvom.",
    sections: [
      { title: "1. Voditelj obrade osobnih podataka", text: "Proflipp\nE-pošta: info@proflipp.com" },
      { title: "2. Vrste osobnih podataka", text: "Voditelj obrade može obrađivati: ime i prezime, adresu e-pošte, telefonski broj, adresu, IP adresu, podatke o korištenju web stranice." },
      { title: "3. Svrhe obrade", text: "Osobni podaci obrađuju se za: izvršenje narudžbi, odgovaranje na upite, slanje newslettera, poboljšanje funkcionalnosti web stranice." },
      { title: "4. Pohrana podataka", text: "Osobni podaci čuvaju se do ispunjenja svrhe ili do povlačenja suglasnosti." },
      { title: "5. Sigurnost podataka", text: "Voditelj obrade koristi odgovarajuće tehničke i organizacijske mjere za zaštitu osobnih podataka." },
      { title: "6. Prava pojedinaca", text: "Pojedinac ima pravo na pristup, ispravak, brisanje, ograničenje obrade i prenosivost podataka. Zahtjevi: info@proflipp.com" },
      { title: "7. Kontakt", text: "Za sva pitanja: info@proflipp.com" },
    ],
  },
};

export default function PolitikaZasebnosti() {
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
            <p className="text-muted-foreground mb-8">{c.intro}</p>

            {c.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">{section.title}</h2>
                <p className="text-muted-foreground whitespace-pre-line">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
