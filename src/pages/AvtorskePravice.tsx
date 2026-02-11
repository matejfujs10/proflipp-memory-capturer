import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  si: {
    title: "Pravilnik o avtorskih pravicah in uporabi vsebin",
    intro: "Spletno mesto proflipp.com je v lasti Team MARATONEC. Vse pravice so pridržane.",
    sections: [
      { title: "1) Avtorske pravice", text: "Vsa besedila, fotografije, videoposnetki, grafike, logotipi in druga gradiva so avtorsko varovana. Brez predhodnega pisnega soglasja ni dovoljeno nobeno reproduciranje ali druga uporaba vsebin." },
      { title: "2) Dovoljena uporaba", text: "Dovoljeno je ogledovanje in uporaba spletnega mesta za osebno, nekomercialno rabo ter deljenje povezav na posamezne strani." },
      { title: "3) Vsebine tretjih oseb", text: "Spletno mesto lahko vsebuje gradiva tretjih oseb, ki so varovana s pravicami njihovih imetnikov." },
      { title: "4) Blagovne znamke", text: "Vse oznake, logotipi in imena storitev so lahko varovane kot blagovne znamke. Njihova uporaba brez soglasja ni dovoljena." },
      { title: "5) Omejitev odgovornosti", text: "Upravljavec ne jamči za popolnost, pravilnost ali ažurnost vsebin in ne odgovarja za morebitno škodo." },
      { title: "6) Kontakt", text: "E-pošta: info@proflipp.com\nVeljavnost: 17. 12. 2025" },
    ],
  },
  en: {
    title: "Copyright and Content Usage Policy",
    intro: "The website proflipp.com is owned by Team MARATONEC. All rights reserved.",
    sections: [
      { title: "1) Copyright", text: "All texts, photographs, videos, graphics, logos and other materials are copyright protected. No reproduction or other use of content is permitted without prior written consent." },
      { title: "2) Permitted Use", text: "Viewing and using the website for personal, non-commercial use and sharing links to individual pages is permitted." },
      { title: "3) Third-Party Content", text: "The website may contain materials from third parties that are protected by their rights holders." },
      { title: "4) Trademarks", text: "All marks, logos and service names may be protected as trademarks. Their use without consent is not permitted." },
      { title: "5) Limitation of Liability", text: "The operator does not guarantee the completeness, accuracy or timeliness of content and is not liable for any damage." },
      { title: "6) Contact", text: "Email: info@proflipp.com\nValid from: December 17, 2025" },
    ],
  },
  de: {
    title: "Urheberrecht und Nutzungsbedingungen",
    intro: "Die Website proflipp.com ist Eigentum von Team MARATONEC. Alle Rechte vorbehalten.",
    sections: [
      { title: "1) Urheberrecht", text: "Alle Texte, Fotografien, Videos, Grafiken, Logos und andere Materialien sind urheberrechtlich geschützt. Ohne vorherige schriftliche Zustimmung ist keine Vervielfältigung oder sonstige Nutzung der Inhalte gestattet." },
      { title: "2) Erlaubte Nutzung", text: "Das Ansehen und Nutzen der Website für den persönlichen, nicht-kommerziellen Gebrauch sowie das Teilen von Links zu einzelnen Seiten ist gestattet." },
      { title: "3) Inhalte Dritter", text: "Die Website kann Materialien von Dritten enthalten, die durch deren Rechteinhaber geschützt sind." },
      { title: "4) Marken", text: "Alle Zeichen, Logos und Dienstleistungsnamen können als Marken geschützt sein. Ihre Verwendung ohne Zustimmung ist nicht gestattet." },
      { title: "5) Haftungsbeschränkung", text: "Der Betreiber garantiert nicht die Vollständigkeit, Richtigkeit oder Aktualität der Inhalte und haftet nicht für etwaige Schäden." },
      { title: "6) Kontakt", text: "E-Mail: info@proflipp.com\nGültig ab: 17. Dezember 2025" },
    ],
  },
  hr: {
    title: "Pravilnik o autorskim pravima i korištenju sadržaja",
    intro: "Web stranica proflipp.com vlasništvo je Team MARATONEC. Sva prava pridržana.",
    sections: [
      { title: "1) Autorska prava", text: "Svi tekstovi, fotografije, videozapisi, grafike, logotipi i drugi materijali zaštićeni su autorskim pravom. Bez prethodne pisane suglasnosti nije dopušteno nikakvo umnožavanje ili druga uporaba sadržaja." },
      { title: "2) Dopuštena uporaba", text: "Dopušteno je pregledavanje i korištenje web stranice za osobnu, nekomercijalnu uporabu te dijeljenje poveznica na pojedine stranice." },
      { title: "3) Sadržaj trećih strana", text: "Web stranica može sadržavati materijale trećih strana koji su zaštićeni pravima njihovih vlasnika." },
      { title: "4) Žigovi", text: "Sve oznake, logotipi i nazivi usluga mogu biti zaštićeni kao žigovi. Njihova uporaba bez suglasnosti nije dopuštena." },
      { title: "5) Ograničenje odgovornosti", text: "Upravljač ne jamči za potpunost, točnost ili ažurnost sadržaja i ne odgovara za eventualnu štetu." },
      { title: "6) Kontakt", text: "E-pošta: info@proflipp.com\nVrijedi od: 17. 12. 2025." },
    ],
  },
};

export default function AvtorskePravice() {
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
