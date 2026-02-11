import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  si: {
    title: "Politika piškotkov",
    sections: [
      {
        title: "1. Kaj so piškotki?",
        text: "Piškotki so majhne besedilne datoteke, ki jih spletna stran ob vašem obisku shrani v vaš računalnik, tablico ali telefon. Piškotki omogočajo, da si spletna stran vašo napravo \"zapomni\" (npr. za delovanje košarice, prijavo, izbiro jezika ali statistiko obiskanosti).",
      },
      {
        title: "2. Katere vrste piškotkov uporabljamo?",
        text: "Na spletni strani uporabljamo naslednje kategorije:",
        categories: [
          { name: "(A) Nujno potrebni piškotki", desc: "Ti piškotki so potrebni za osnovno delovanje spletne strani. Za te piškotke soglasje praviloma ni potrebno." },
          { name: "(B) Funkcionalni piškotki", desc: "Omogočajo izboljšano uporabniško izkušnjo (npr. shranjena izbira jezika)." },
          { name: "(C) Analitični piškotki", desc: "Pomagajo nam razumeti uporabo spletne strani, da lahko izboljšamo delovanje in vsebino." },
          { name: "(D) Marketinški piškotki", desc: "Uporabljajo se za prikaz prilagojenih oglasov in merjenje učinkovitosti oglaševanja." },
        ],
      },
      {
        title: "3. Kako pridobimo soglasje?",
        text: "Ko prvič obiščete našo spletno stran, se vam prikaže obvestilo, kjer lahko sprejmete ali zavrnete nenujne piškotke.",
      },
      {
        title: "4. Kontakt",
        text: "Za vprašanja o piškotkih nas kontaktirajte: PROFLIPP, info@proflipp.com",
      },
      {
        title: "5. Spremembe politike",
        text: "To politiko lahko občasno posodobimo. Datum zadnje spremembe: 17. 12. 2025",
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    sections: [
      {
        title: "1. What are cookies?",
        text: "Cookies are small text files that a website saves on your computer, tablet or phone when you visit. Cookies allow the website to \"remember\" your device (e.g., for shopping cart functionality, login, language selection or visit statistics).",
      },
      {
        title: "2. What types of cookies do we use?",
        text: "We use the following categories on our website:",
        categories: [
          { name: "(A) Strictly necessary cookies", desc: "These cookies are required for the basic functioning of the website. Consent is generally not required for these cookies." },
          { name: "(B) Functional cookies", desc: "Enable improved user experience (e.g., saved language selection)." },
          { name: "(C) Analytical cookies", desc: "Help us understand website usage so we can improve functionality and content." },
          { name: "(D) Marketing cookies", desc: "Used to display personalized ads and measure advertising effectiveness." },
        ],
      },
      {
        title: "3. How do we obtain consent?",
        text: "When you first visit our website, a notice appears where you can accept or decline non-essential cookies.",
      },
      {
        title: "4. Contact",
        text: "For questions about cookies, contact us: PROFLIPP, info@proflipp.com",
      },
      {
        title: "5. Policy changes",
        text: "We may update this policy from time to time. Date of last change: December 17, 2025",
      },
    ],
  },
  de: {
    title: "Cookie-Richtlinie",
    sections: [
      {
        title: "1. Was sind Cookies?",
        text: "Cookies sind kleine Textdateien, die eine Website bei Ihrem Besuch auf Ihrem Computer, Tablet oder Telefon speichert. Cookies ermöglichen es der Website, sich an Ihr Gerät zu \"erinnern\" (z.B. für Warenkorbfunktion, Anmeldung, Sprachauswahl oder Besuchsstatistiken).",
      },
      {
        title: "2. Welche Arten von Cookies verwenden wir?",
        text: "Wir verwenden auf unserer Website folgende Kategorien:",
        categories: [
          { name: "(A) Unbedingt erforderliche Cookies", desc: "Diese Cookies sind für das grundlegende Funktionieren der Website erforderlich. Für diese Cookies ist in der Regel keine Einwilligung erforderlich." },
          { name: "(B) Funktionale Cookies", desc: "Ermöglichen eine verbesserte Benutzererfahrung (z.B. gespeicherte Sprachauswahl)." },
          { name: "(C) Analytische Cookies", desc: "Helfen uns, die Nutzung der Website zu verstehen, damit wir Funktionalität und Inhalt verbessern können." },
          { name: "(D) Marketing-Cookies", desc: "Werden verwendet, um personalisierte Werbung anzuzeigen und die Werbewirksamkeit zu messen." },
        ],
      },
      {
        title: "3. Wie holen wir die Einwilligung ein?",
        text: "Wenn Sie unsere Website zum ersten Mal besuchen, erscheint ein Hinweis, bei dem Sie nicht wesentliche Cookies akzeptieren oder ablehnen können.",
      },
      {
        title: "4. Kontakt",
        text: "Bei Fragen zu Cookies kontaktieren Sie uns: PROFLIPP, info@proflipp.com",
      },
      {
        title: "5. Richtlinienänderungen",
        text: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Datum der letzten Änderung: 17. Dezember 2025",
      },
    ],
  },
  hr: {
    title: "Politika kolačića",
    sections: [
      {
        title: "1. Što su kolačići?",
        text: "Kolačići su male tekstualne datoteke koje web stranica pohranjuje na vaše računalo, tablet ili telefon prilikom posjeta. Kolačići omogućuju web stranici da \"zapamti\" vaš uređaj (npr. za funkciju košarice, prijavu, odabir jezika ili statistiku posjeta).",
      },
      {
        title: "2. Koje vrste kolačića koristimo?",
        text: "Na našoj web stranici koristimo sljedeće kategorije:",
        categories: [
          { name: "(A) Nužno potrebni kolačići", desc: "Ovi kolačići su potrebni za osnovno funkcioniranje web stranice. Za ove kolačiće u pravilu nije potrebna suglasnost." },
          { name: "(B) Funkcionalni kolačići", desc: "Omogućuju poboljšano korisničko iskustvo (npr. pohranjen odabir jezika)." },
          { name: "(C) Analitički kolačići", desc: "Pomažu nam razumjeti korištenje web stranice kako bismo mogli poboljšati funkcionalnost i sadržaj." },
          { name: "(D) Marketinški kolačići", desc: "Koriste se za prikaz prilagođenih oglasa i mjerenje učinkovitosti oglašavanja." },
        ],
      },
      {
        title: "3. Kako pribavljamo suglasnost?",
        text: "Kada prvi put posjetite našu web stranicu, prikazuje se obavijest gdje možete prihvatiti ili odbiti nebitne kolačiće.",
      },
      {
        title: "4. Kontakt",
        text: "Za pitanja o kolačićima kontaktirajte nas: PROFLIPP, info@proflipp.com",
      },
      {
        title: "5. Promjene politike",
        text: "Ovu politiku možemo povremeno ažurirati. Datum posljednje promjene: 17. 12. 2025.",
      },
    ],
  },
};

export default function Piskotki() {
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
            {c.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">{section.title}</h2>
                <p className="text-muted-foreground">{section.text}</p>
                {section.categories && (
                  <div className="mt-4 space-y-4">
                    {section.categories.map((cat, catIdx) => (
                      <div key={catIdx}>
                        <h3 className="font-semibold text-foreground">{cat.name}</h3>
                        <p className="text-muted-foreground">{cat.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
