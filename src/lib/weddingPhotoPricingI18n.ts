import { commonServices as siCommon, weddingPhotoPackages as siPackages, type WeddingPhotoPackage } from "./weddingPhotoPackages";

export type PricingLang = "si" | "en" | "de" | "hr";

interface PkgText { duration: string; description: string; extras: string[]; note?: string }

export interface PricingUI {
  title: string; intro: string; recommended: string; regular: string; saving: string;
  inPackage: string; inAll: string; videoTitle: string; videoText: string; cta: string;
  photoCountNote: string; contentVideoTitle: string; contentVideoP1: string; contentVideoP2: string;
  goodToKnow: string; goodToKnowItems: string[];
}

const ui: Record<PricingLang, PricingUI> = {
  si: {
    title: "Vajina poročna zgodba, ujeta za vedno",
    intro: "Od intimnega obreda do celodnevnega praznovanja – izberita obseg fotografiranja, ki se prilega vajinemu dnevu. S sproščenim vodenjem in občutkom za pristne trenutke ustvarimo spomine, h katerim se bosta rada vračala.",
    recommended: "Priporočamo", regular: "Redna cena", saving: "Prihranek",
    inPackage: "Posebej v tem paketu", inAll: "Vključeno v vseh paketih",
    videoTitle: "🎬 Možnost Wedding Content Video",
    videoText: "Kratki čustveni video utrinki in navpične vsebine za Instagram, TikTok ali vajin osebni spomin. Obseg, izvedbo in doplačilo določimo ob povpraševanju.",
    cta: "Preverita razpoložljivost",
    photoCountNote: "Število predanih fotografij je odvisno od trajanja fotografiranja, poteka poroke in dogajanja. Predamo skrbno izbran in profesionalno obdelan izbor.",
    contentVideoTitle: "🎬 Wedding Content Video",
    contentVideoP1: "Vajina poroka tudi v gibanju. Fotografskemu paketu lahko dodata Wedding Content Video – kratke video utrinke, ki ujamejo vzdušje, nasmehe in čustva vajinega dne.",
    contentVideoP2: "Pri izvedbi z enim fotografom video utrinki nastajajo med fotografiranjem. Za obsežnejše snemanje se posebej dogovorimo o dodatnem ustvarjalcu. Wedding Content Video ne vključuje neprekinjenega snemanja celotnega obreda, govorov ali klasičnega poročnega filma.",
    goodToKnow: "Dobro je vedeti",
    goodToKnowItems: [
      "Paketi vključujejo enega fotografa.",
      "Ure pomenijo zaporedno prisotnost fotografa na poroki.",
      "Dogodki so vključeni, kadar potekajo znotraj dogovorjenega termina.",
      "Potni stroški in morebitna nastanitev se določijo glede na lokacijo ter navedejo v končni ponudbi.",
      "Dodatne ure in tiskana fotoknjiga so na voljo po dogovoru.",
      "Spletna fotoknjiga oziroma galerija je vključena; tiskana fotoknjiga je dodatna možnost.",
      "Rok predaje fotografij določimo v pogodbi.",
      "Termin je potrjen po dogovoru in podpisu pogodbe.",
    ],
  },
  en: {
    title: "Your wedding story, captured forever",
    intro: "From an intimate ceremony to an all-day celebration – choose the photography coverage that fits your day. With relaxed guidance and a feel for genuine moments, we create memories you will love coming back to.",
    recommended: "Recommended", regular: "Regular price", saving: "You save",
    inPackage: "Specific to this package", inAll: "Included in all packages",
    videoTitle: "🎬 Wedding Content Video option",
    videoText: "Short emotional video clips and vertical content for Instagram, TikTok or your personal memories. Scope, production and surcharge are agreed upon enquiry.",
    cta: "Check availability",
    photoCountNote: "The number of delivered photos depends on the length of coverage, the flow of the wedding and what happens on the day. We deliver a carefully selected, professionally edited collection.",
    contentVideoTitle: "🎬 Wedding Content Video",
    contentVideoP1: "Your wedding in motion, too. You can add a Wedding Content Video to your photo package – short video clips that capture the atmosphere, smiles and emotions of your day.",
    contentVideoP2: "With a single photographer, the clips are created during the photo coverage. For more extensive filming we arrange an additional creator separately. Wedding Content Video does not include continuous filming of the whole ceremony, speeches or a classic wedding film.",
    goodToKnow: "Good to know",
    goodToKnowItems: [
      "Packages include one photographer.",
      "Hours mean the photographer's consecutive presence at the wedding.",
      "Events are included when they take place within the agreed time.",
      "Travel costs and any accommodation depend on the location and are stated in the final offer.",
      "Extra hours and a printed photo book are available by arrangement.",
      "An online photo book or gallery is included; a printed photo book is optional.",
      "The photo delivery deadline is set in the contract.",
      "Your date is confirmed after agreement and signing the contract.",
    ],
  },
  de: {
    title: "Eure Hochzeitsgeschichte, für immer festgehalten",
    intro: "Von der intimen Trauung bis zur ganztägigen Feier – wählt den Fotografie-Umfang, der zu eurem Tag passt. Mit entspannter Anleitung und Gespür für echte Momente schaffen wir Erinnerungen, zu denen ihr gerne zurückkehrt.",
    recommended: "Empfehlung", regular: "Regulärer Preis", saving: "Ersparnis",
    inPackage: "Speziell in diesem Paket", inAll: "In allen Paketen enthalten",
    videoTitle: "🎬 Option Wedding Content Video",
    videoText: "Kurze emotionale Videoclips und Hochformat-Inhalte für Instagram, TikTok oder eure persönliche Erinnerung. Umfang, Umsetzung und Aufpreis vereinbaren wir bei der Anfrage.",
    cta: "Verfügbarkeit prüfen",
    photoCountNote: "Die Anzahl der gelieferten Fotos hängt von der Dauer der Begleitung, dem Ablauf der Hochzeit und dem Geschehen ab. Wir liefern eine sorgfältig ausgewählte, professionell bearbeitete Auswahl.",
    contentVideoTitle: "🎬 Wedding Content Video",
    contentVideoP1: "Eure Hochzeit auch in Bewegung. Zum Fotopaket könnt ihr ein Wedding Content Video hinzufügen – kurze Videoclips, die Stimmung, Lächeln und Emotionen eures Tages einfangen.",
    contentVideoP2: "Bei einem Fotografen entstehen die Clips während der Fotobegleitung. Für umfangreichere Aufnahmen vereinbaren wir separat einen zusätzlichen Creator. Wedding Content Video umfasst keine durchgehende Aufnahme der gesamten Trauung, der Reden oder einen klassischen Hochzeitsfilm.",
    goodToKnow: "Gut zu wissen",
    goodToKnowItems: [
      "Die Pakete beinhalten einen Fotografen.",
      "Die Stunden bedeuten die durchgehende Anwesenheit des Fotografen auf der Hochzeit.",
      "Programmpunkte sind enthalten, wenn sie innerhalb der vereinbarten Zeit stattfinden.",
      "Reisekosten und eventuelle Unterkunft richten sich nach dem Ort und werden im finalen Angebot angegeben.",
      "Zusätzliche Stunden und ein gedrucktes Fotobuch sind nach Vereinbarung möglich.",
      "Ein Online-Fotobuch bzw. eine Galerie ist enthalten; ein gedrucktes Fotobuch ist optional.",
      "Die Lieferfrist der Fotos wird im Vertrag festgelegt.",
      "Der Termin ist nach Absprache und Vertragsunterzeichnung bestätigt.",
    ],
  },
  hr: {
    title: "Vaša svadbena priča, zauvijek zabilježena",
    intro: "Od intimnog obreda do cjelodnevnog slavlja – odaberite opseg fotografiranja koji odgovara vašem danu. Opuštenim vođenjem i osjećajem za iskrene trenutke stvaramo uspomene kojima ćete se rado vraćati.",
    recommended: "Preporučujemo", regular: "Redovna cijena", saving: "Ušteda",
    inPackage: "Posebno u ovom paketu", inAll: "Uključeno u svim paketima",
    videoTitle: "🎬 Opcija Wedding Content Video",
    videoText: "Kratki emotivni video isječci i vertikalni sadržaji za Instagram, TikTok ili vašu osobnu uspomenu. Opseg, izvedbu i doplatu dogovaramo pri upitu.",
    cta: "Provjerite dostupnost",
    photoCountNote: "Broj predanih fotografija ovisi o trajanju fotografiranja, tijeku vjenčanja i događanjima. Predajemo pažljivo odabran i profesionalno obrađen izbor.",
    contentVideoTitle: "🎬 Wedding Content Video",
    contentVideoP1: "Vaše vjenčanje i u pokretu. Fotografskom paketu možete dodati Wedding Content Video – kratke video isječke koji hvataju atmosferu, osmijehe i emocije vašeg dana.",
    contentVideoP2: "Uz jednog fotografa video isječci nastaju tijekom fotografiranja. Za opsežnije snimanje posebno dogovaramo dodatnog autora. Wedding Content Video ne uključuje neprekinuto snimanje cijelog obreda, govora ni klasični svadbeni film.",
    goodToKnow: "Dobro je znati",
    goodToKnowItems: [
      "Paketi uključuju jednog fotografa.",
      "Sati označavaju uzastopnu prisutnost fotografa na vjenčanju.",
      "Događaji su uključeni ako se odvijaju unutar dogovorenog termina.",
      "Putni troškovi i eventualni smještaj određuju se prema lokaciji i navode u konačnoj ponudi.",
      "Dodatni sati i tiskana fotoknjiga dostupni su po dogovoru.",
      "Online fotoknjiga odnosno galerija je uključena; tiskana fotoknjiga je dodatna opcija.",
      "Rok predaje fotografija određuje se ugovorom.",
      "Termin je potvrđen nakon dogovora i potpisa ugovora.",
    ],
  },
};

const common: Record<Exclude<PricingLang, "si">, string[]> = {
  en: [
    "One professional photographer for the chosen number of consecutive hours.",
    "Creative, relaxed guided couple shoot at selected locations.",
    "Individual and group photos plus spontaneous moments with your loved ones.",
    "Carefully selected high-resolution photos.",
    "Professional editing of all delivered photos: colours, light and a selection of black-and-white images.",
    "Online photo book or gallery for viewing and sharing with family and friends.",
    "Photo delivery via online link or on a USB stick, by arrangement.",
    "Initial consultation by phone or video call.",
    "Agreement on the shooting schedule and key moments.",
    "Photos for private use, printing and sharing.",
    "Contract with a clearly defined scope of service and delivery deadline.",
    "Wedding Content Video option – surcharge by arrangement.",
  ],
  de: [
    "Ein professioneller Fotograf für die gewählte Anzahl aufeinanderfolgender Stunden.",
    "Kreatives und entspanntes, angeleitetes Paarshooting an ausgewählten Orten.",
    "Einzel- und Gruppenfotos sowie spontane Momente mit euren Liebsten.",
    "Sorgfältig ausgewählte Fotos in hoher Auflösung.",
    "Professionelle Bearbeitung aller gelieferten Fotos: Farben, Licht und eine Auswahl an Schwarz-Weiß-Aufnahmen.",
    "Online-Fotobuch bzw. Galerie zum Ansehen und Teilen mit Familie und Freunden.",
    "Übergabe der Fotos per Online-Link oder auf USB-Stick, nach Vereinbarung.",
    "Erstgespräch per Telefon oder Videoanruf.",
    "Absprache zum Ablauf des Shootings und zu den wichtigsten Momenten.",
    "Fotos zur privaten Nutzung, zum Drucken und Teilen.",
    "Vertrag mit klar festgelegtem Leistungsumfang und Liefertermin.",
    "Option Wedding Content Video – Aufpreis nach Vereinbarung.",
  ],
  hr: [
    "Jedan profesionalni fotograf za odabrani broj uzastopnih sati.",
    "Kreativno i opušteno vođeno fotografiranje para na odabranim lokacijama.",
    "Pojedinačne i grupne fotografije te spontani trenuci s vašim najbližima.",
    "Pažljivo odabrane fotografije visoke rezolucije.",
    "Profesionalna obrada svih predanih fotografija: boje, svjetlo i izbor crno-bijelih snimaka.",
    "Online fotoknjiga odnosno galerija za pregled i dijeljenje s obitelji i prijateljima.",
    "Predaja fotografija putem online poveznice ili na USB sticku, po dogovoru.",
    "Uvodni razgovor telefonom ili videopozivom.",
    "Dogovor o tijeku fotografiranja i ključnim trenucima.",
    "Fotografije za privatnu upotrebu, tisak i dijeljenje.",
    "Ugovor s jasno određenim opsegom usluge i rokom predaje.",
    "Opcija Wedding Content Video – doplata po dogovoru.",
  ],
};

const pkgs: Record<Exclude<PricingLang, "si">, PkgText[]> = {
  en: [
    { duration: "2 hours", description: "For an intimate ceremony and the most important moments.", extras: ["Civil or other ceremony coverage.", "Congratulations and spontaneous reactions of your loved ones.", "Short guided couple shoot.", "Group and family photos.", "Details of rings, bouquet and wedding look."], note: "Everything takes place within the agreed two hours." },
    { duration: "4 hours", description: "For the ceremony, your portraits and relaxed time together.", extras: ["Guest arrival and ceremony coverage.", "Congratulations, reception and socialising after the ceremony.", "More time for creative couple portraits.", "Photos of family, friends and witnesses.", "Venue and decoration details."], note: "The schedule is adapted to the chosen four-hour slot." },
    { duration: "6 hours", description: "For a connected story from selected preparations to the start of the celebration.", extras: ["Getting ready or guest arrival, depending on the schedule.", "Ceremony, congratulations and socialising.", "Guided couple shoot.", "Family portraits, witnesses and group photos.", "Photos of the dinner, decoration and atmosphere.", "Help planning the couple and group shoots."], note: "Listed events are covered when they take place within the six-hour slot." },
    { duration: "8 hours", description: "For a complete story of the key moments of your wedding day.", extras: ["Getting ready and First Look, if planned.", "Ceremony, congratulations and reception.", "Creative couple shoot at agreed locations.", "Portraits of family, friends and witnesses.", "Details of outfits, rings, bouquet, decoration and venue.", "Speeches, cake or first dance when within the chosen time.", "Short extra couple shoot in evening light, weather and schedule permitting."] },
    { duration: "12 hours", description: "From getting ready to dancing – your story with more room for all the small moments.", extras: ["Extensive coverage from getting ready to the evening celebration within 12 hours.", "First Look, if planned.", "Ceremony, congratulations and socialising.", "Couple shoot plus family and friend groups.", "Details of venue, decoration and wedding accessories.", "Speeches, cake cutting, first dance and party, if within the time.", "Evening portraits or sunset shoot, depending on conditions.", "More time for spontaneous moments among guests."] },
  ],
  de: [
    { duration: "2 Stunden", description: "Für eine intime Trauung und die wichtigsten Momente.", extras: ["Begleitung der standesamtlichen oder anderen Trauung.", "Glückwünsche und spontane Reaktionen eurer Liebsten.", "Kürzeres angeleitetes Paarshooting.", "Gruppen- und Familienfotos.", "Details von Ringen, Brautstrauß und Hochzeitslook."], note: "Alles findet innerhalb der vereinbarten zwei Stunden statt." },
    { duration: "4 Stunden", description: "Für Trauung, eure Porträts und entspanntes Beisammensein.", extras: ["Ankunft der Gäste und Begleitung der Trauung.", "Glückwünsche, Empfang und Beisammensein nach der Trauung.", "Mehr Zeit für kreative Paarporträts.", "Fotos von Familie, Freunden und Trauzeugen.", "Details von Location und Dekoration."], note: "Der Ablauf wird an das gewählte vierstündige Zeitfenster angepasst." },
    { duration: "6 Stunden", description: "Für eine zusammenhängende Geschichte von ausgewählten Vorbereitungen bis zum Beginn der Feier.", extras: ["Getting Ready oder Ankunft der Gäste, je nach Zeitplan.", "Trauung, Glückwünsche und Beisammensein.", "Angeleitetes Paarshooting.", "Familienporträts, Trauzeugen und Gruppenfotos.", "Fotos von Essen, Dekoration und Stimmung.", "Hilfe bei der Planung von Paar- und Gruppenfotos."], note: "Die genannten Programmpunkte werden begleitet, wenn sie innerhalb des sechsstündigen Zeitfensters stattfinden." },
    { duration: "8 Stunden", description: "Für eine umfassende Geschichte der wichtigsten Momente eures Hochzeitstages.", extras: ["Getting Ready und First Look, falls geplant.", "Trauung, Glückwünsche und Empfang.", "Kreatives Paarshooting an vereinbarten Orten.", "Porträts von Familie, Freunden und Trauzeugen.", "Details von Outfits, Ringen, Brautstrauß, Dekoration und Location.", "Reden, Torte oder Eröffnungstanz, wenn innerhalb der gewählten Zeit.", "Kurzes zusätzliches Paarshooting im Abendlicht, wenn Wetter und Zeitplan es erlauben."] },
    { duration: "12 Stunden", description: "Vom Getting Ready bis zum Tanz – eure Geschichte mit mehr Raum für all die kleinen Momente.", extras: ["Umfassende Reportage vom Getting Ready bis zur Abendfeier innerhalb von 12 Stunden.", "First Look, falls geplant.", "Trauung, Glückwünsche und Beisammensein.", "Paarshooting sowie Familien- und Freundesgruppen.", "Details von Location, Dekoration und Hochzeitsaccessoires.", "Reden, Tortenanschnitt, Eröffnungstanz und Party, wenn innerhalb der Zeit.", "Abendporträts oder Shooting bei Sonnenuntergang, je nach Bedingungen.", "Mehr Zeit für spontane Momente unter den Gästen."] },
  ],
  hr: [
    { duration: "2 sata", description: "Za intimni obred i najvažnije trenutke.", extras: ["Fotografiranje građanskog ili drugog obreda.", "Čestitke i spontane reakcije najbližih.", "Kraće vođeno fotografiranje para.", "Grupne i obiteljske fotografije.", "Detalji prstenja, buketa i svadbenog izgleda."], note: "Sve se odvija unutar dogovorena dva sata." },
    { duration: "4 sata", description: "Za obred, vaše portrete i opušteno druženje.", extras: ["Dolazak gostiju i fotografiranje obreda.", "Čestitke, prijem i druženje nakon obreda.", "Više vremena za kreativne portrete para.", "Fotografije obitelji, prijatelja i kumova.", "Detalji lokacije i dekoracije."], note: "Tijek je prilagođen odabranom terminu od četiri sata." },
    { duration: "6 sati", description: "Za povezanu priču od odabranih priprema do početka slavlja.", extras: ["Fotografiranje priprema ili dolaska gostiju, ovisno o rasporedu.", "Obred, čestitke i druženje.", "Vođeno fotografiranje para.", "Obiteljski portreti, kumovi i grupne fotografije.", "Fotografiranje večere, dekoracije i atmosfere.", "Pomoć pri rasporedu fotografiranja para i grupa."], note: "Navedene događaje bilježimo kada se odvijaju unutar termina od šest sati." },
    { duration: "8 sati", description: "Za cjelovitu priču ključnih trenutaka vašeg vjenčanja.", extras: ["Pripreme i First Look, ako ga planirate.", "Obred, čestitke i prijem.", "Kreativno fotografiranje para na dogovorenim lokacijama.", "Portreti obitelji, prijatelja i kumova.", "Detalji odjeće, prstenja, buketa, dekoracije i prostora.", "Govori, torta ili prvi ples, kada su unutar odabranog termina.", "Kratko dodatno fotografiranje para u večernjem svjetlu, ako to dopuštaju vrijeme i raspored."] },
    { duration: "12 sati", description: "Od priprema do plesa – vaša priča s više prostora za sve sitne trenutke.", extras: ["Opsežna reportaža od priprema do večernjeg slavlja unutar 12 sati.", "First Look, ako ga planirate.", "Obred, čestitke i druženje.", "Fotografiranje para te obiteljskih i prijateljskih grupa.", "Detalji prostora, dekoracije i svadbenih dodataka.", "Govori, rezanje torte, prvi ples i zabava, ako su unutar termina.", "Večernji portreti ili fotografiranje u zalazak sunca, ovisno o uvjetima.", "Više vremena za spontane trenutke među gostima."] },
  ],
};

export function getWeddingPricing(lang: string) {
  const l: PricingLang = (["si", "en", "de", "hr"].includes(lang) ? lang : "si") as PricingLang;
  if (l === "si") return { ui: ui.si, commonServices: siCommon, packages: siPackages };
  const packages: WeddingPhotoPackage[] = siPackages.map((p, i) => ({ ...p, ...pkgs[l][i] }));
  return { ui: ui[l], commonServices: common[l], packages };
}
