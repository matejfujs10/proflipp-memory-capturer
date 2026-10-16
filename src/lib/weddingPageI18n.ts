import type { VideoKey } from "./weddingPrices";

type L = "si" | "en" | "de" | "hr";

interface VideoText { subtitle: string; duration: string; items: string[]; closing: string }

export interface WeddingPageText {
  cta: string;
  personalTitle: string; personalP: string[];
  micro1: string; micro2: string; micro3: string;
  photoReviewsTitle: string; photoReviewsText: string;
  videoReviewsTitle: string; videoReviewsText: string;
  fbButton: string;
  loveTitle1: string; loveTitle2: string; loveP: string[];
  videoTitle: string; videoSub: string; recommended: string;
  videos: Record<VideoKey, VideoText>;
  extrasTitle: string; extrasText: string; extras: string[]; byAgreement: string;
  closingTitle: string; closingP: string[];
  form: {
    title: string; sub: string; note: string; service: string; selected: string; choose: string;
    services: string[]; name: string; email: string; location: string; date: string; notes: string;
    notesPh: string; terms: string; termsLink: string; privacyLink: string; termsRequired: string; opening: string;
  };
}

const t: Record<L, WeddingPageText> = {
  si: {
    cta: "Pošlji najino povpraševanje",
    personalTitle: "Vsaka ljubezen ima svojo zgodbo. Prisluhnimo vajini.",
    personalP: [
      "Nobena poroka ni enaka drugi. Vajina ljubezen, vajini najdražji, majhni spontani trenutki in veliki življenjski obljubi ustvarjajo zgodbo, ki je samo vajina.",
      "Pri PROFOLIPP verjamemo, da se najlepši spomini začnejo z zaupanjem. Zato si vzamemo čas za vaju, prisluhnemo vajinim željam in skupaj poiščemo način, da bo vajin dan ohranjen z občutkom, predanostjo in profesionalnostjo.",
    ],
    micro1: "Ker se najlepši trenutki ne ponovijo.",
    micro2: "Vidva živita trenutek. Mi ga ohranimo.",
    micro3: "Vsaka ljubezenska zgodba si zasluži, da ostane.",
    photoReviewsTitle: "Najlepši trenutki. Resnične zgodbe. Iskrena priporočila.",
    photoReviewsText: "Fotografije ohranijo trenutke, zaupanje pa omogoča, da nastanejo pristni spomini. Preberita, kako so sodelovanje z ekipo PROFOLIPP doživeli pari, ki so nam že zaupali svoje najdragocenejše trenutke.",
    videoReviewsTitle: "Najlepše besede prihajajo od tistih, ki so nam že zaupali.",
    videoReviewsText: "Vsaka poroka je posebna in vsako zaupanje nam pomeni ogromno. Naše delo najlepše predstavijo resnične izkušnje parov, za katere smo ustvarjali spomine.",
    fbButton: "Poglejta mnenja naših strank na Facebooku",
    loveTitle1: "Ljubezen traja večno.", loveTitle2: "Naj trajajo tudi vajini spomini.",
    loveP: [
      "Vajin poročni dan bo minil hitreje, kot si predstavljata. Pogledi, ki povedo več kot tisoč besed. Objemi ljudi, ki jih imata najraje. Solze sreče, prvi ples in trenutki, ki jih ni mogoče ponoviti.",
      "Zato ustvarjamo poročne filme, ki ne prikazujejo le tega, kaj se je zgodilo, temveč pomagajo ohraniti občutke, zaradi katerih je bil vajin dan tako poseben.",
    ],
    videoTitle: "Vajina zgodba si zasluži svoj film.",
    videoSub: "Od prvih priprav do iskrenih objemov in veselja na plesišču. Izberita način, kako želita ohraniti spomine na svoj neponovljivi dan.",
    recommended: "Naše priporočilo",
    videos: {
      essential: {
        subtitle: "Najlepši trenutki, ki ostanejo.", duration: "Do 8 ur snemanja",
        items: ["Do 8 ur profesionalnega snemanja poroke.", "En profesionalni poročni snemalec.", "Kreativno snemanje obreda, čustvenih trenutkov in slavja v dogovorjenem časovnem okviru.", "Čustveni Highlight film (4–6 minut).", "Daljši poročni film (približno 15–20 minut).", "Profesionalna montaža in skrbno izbrana glasbena spremljava.", "Profesionalna barvna korekcija.", "Digitalna dostava v 3–4 tednih."],
        closing: "Nekateri trenutki trajajo le nekaj sekund, a ostanejo z nami vse življenje. Najlepše dele vajinega dne povežemo v pristno filmsko zgodbo, ki jo bosta z veseljem vedno znova podoživljala.",
      },
      premium: {
        subtitle: "Vsak pogled. Vsako čustvo. Vajina zgodba.", duration: "Do 10 ur snemanja",
        items: ["Do 10 ur profesionalnega snemanja poroke.", "En profesionalni poročni snemalec.", "Kreativno snemanje priprav, poročnega obreda, slavja in prvega plesa glede na dogovorjeni urnik.", "Čustveni Highlight film (4–6 minut).", "Daljši poročni film (približno 20–30 minut).", "Vključitev izbranih originalnih zvokov obreda, zaobljub ali govorov po predhodnem dogovoru.", "Profesionalna montaža in skrbno izbrana glasbena spremljava.", "Profesionalna barvna korekcija.", "Digitalna dostava v 3–4 tednih."],
        closing: "Ko čez leta ponovno slišita vajine zaobljube in vidita nasmehe ljudi, ki so bili ob vama, poročni dan za trenutek spet oživi. To je vrednost zgodbe, ki jo ustvarimo skupaj.",
      },
      signature: {
        subtitle: "Dan, ki mine. Zgodba, ki ostane za vedno.", duration: "Do 12 ur snemanja",
        items: ["Do 12 ur profesionalnega celodnevnega snemanja poroke.", "En profesionalni poročni snemalec.", "Kreativno in dokumentarno snemanje poročnega dne.", "Snemanje priprav, obreda, slavja, prvega plesa in drugih pomembnih trenutkov glede na dogovorjeni urnik.", "Čustveni Highlight film (4–6 minut).", "Daljši celodnevni poročni film (približno 30–45 minut).", "Vključitev izbranih pomembnih delov obreda in govorov z originalnim zvokom po predhodnem dogovoru.", "Profesionalna montaža in skrbno izbrana glasbena spremljava.", "Profesionalna barvna korekcija.", "Digitalna dostava v 3–4 tednih."],
        closing: "Za vajino celovitejšo ljubezensko zgodbo. Od prvih pričakovanj do zadnjih plesnih korakov. Film, ki bo nekoč tudi naslednjim generacijam pripovedoval, kako se je začela vajina skupna pot.",
      },
    },
    extrasTitle: "Ker je vsaka poroka drugačna.",
    extrasText: "Morda si želita še več ujetih trenutkov, dodatnega snemalca ali posebej prilagojenega filma. Z veseljem prisluhnemo vajinim idejam in skupaj oblikujemo rešitev, ki bo ustrezala vajinemu dnevu.",
    extras: ["Drugi profesionalni snemalec za doplačilo.", "Dodatne ure snemanja.", "Daljši dokumentarni film z originalnim zvokom izbranih delov poroke.", "Individualno prilagojen poročni video paket."],
    byAgreement: "Cena po dogovoru",
    closingTitle: "Nekateri trenutki minejo. Njihova vrednost ostane.",
    closingP: [
      "Predstavljajta si, da čez deset ali dvajset let sedita skupaj in ponovno odpreta poročni album ali si ogledata vajin film.",
      "Spet vidita nasmehe svojih najdražjih. Slišita glasove, ki so spremljali vajin najlepši dan. Za trenutek se vrneta tja, kjer se je začelo novo poglavje vajine skupne zgodbe.",
      "Prav zato ustvarjamo. Ne samo za danes, temveč tudi za vse jutrišnje dni.",
    ],
    form: {
      title: "Povejta nam nekaj o vajinem dnevu.",
      sub: "Vsaka ljubezenska zgodba se začne z enim trenutkom. Naj se naše sodelovanje začne s preprostim sporočilom. Zaupajta nam datum, kraj in vajine želje – z veseljem vama osebno odgovorimo.",
      note: "Neobvezujoče povpraševanje. Oglasimo se vama osebno.",
      service: "Želena storitev", selected: "Izbrani paket", choose: "Izberita storitev",
      services: ["Poročno fotografiranje", "Poročni video", "Fotografiranje in video", "Individualna ponudba"],
      name: "Vajini imeni", email: "E-pošta", location: "Kraj poroke", date: "Datum poroke", notes: "Vajine želje",
      notesPh: "Potek dneva, posebni trenutki, vprašanja …",
      terms: "Strinjava se s", termsLink: "splošnimi pogoji", privacyLink: "politiko zasebnosti",
      termsRequired: "Prosimo, potrdita strinjanje s pogoji.", opening: "Odpiramo vajin e-poštni program …",
    },
  },
  en: {
    cta: "Send our enquiry",
    personalTitle: "Every love has its own story. Let us listen to yours.",
    personalP: [
      "No two weddings are alike. Your love, your loved ones, the small spontaneous moments and the big promises of a lifetime create a story that is yours alone.",
      "At PROFOLIPP we believe that the most beautiful memories begin with trust. That is why we take time for you, listen to your wishes and together find a way to preserve your day with feeling, dedication and professionalism.",
    ],
    micro1: "Because the most beautiful moments never happen twice.",
    micro2: "You live the moment. We preserve it.",
    micro3: "Every love story deserves to last.",
    photoReviewsTitle: "The most beautiful moments. Real stories. Honest recommendations.",
    photoReviewsText: "Photos preserve moments, and trust allows genuine memories to be created. Read how couples who have already entrusted us with their most precious moments experienced working with the PROFOLIPP team.",
    videoReviewsTitle: "The kindest words come from those who have already trusted us.",
    videoReviewsText: "Every wedding is special and every bit of trust means a great deal to us. Our work is best presented by the real experiences of the couples we have created memories for.",
    fbButton: "See our clients' reviews on Facebook",
    loveTitle1: "Love lasts forever.", loveTitle2: "Let your memories last, too.",
    loveP: [
      "Your wedding day will pass faster than you imagine. Glances that say more than a thousand words. Hugs from the people you love most. Tears of joy, the first dance and moments that can never be repeated.",
      "That is why we create wedding films that show not only what happened, but help preserve the feelings that made your day so special.",
    ],
    videoTitle: "Your story deserves its own film.",
    videoSub: "From the first preparations to heartfelt hugs and joy on the dance floor. Choose how you want to preserve the memories of your unrepeatable day.",
    recommended: "Our recommendation",
    videos: {
      essential: {
        subtitle: "The most beautiful moments that stay.", duration: "Up to 8 hours of filming",
        items: ["Up to 8 hours of professional wedding filming.", "One professional wedding videographer.", "Creative filming of the ceremony, emotional moments and celebration within the agreed time frame.", "Emotional highlight film (4–6 minutes).", "Longer wedding film (approximately 15–20 minutes).", "Professional editing and carefully selected music.", "Professional colour correction.", "Digital delivery within 3–4 weeks."],
        closing: "Some moments last only a few seconds, yet stay with us for a lifetime. We weave the most beautiful parts of your day into a genuine cinematic story you will love reliving again and again.",
      },
      premium: {
        subtitle: "Every glance. Every emotion. Your story.", duration: "Up to 10 hours of filming",
        items: ["Up to 10 hours of professional wedding filming.", "One professional wedding videographer.", "Creative filming of the preparations, ceremony, celebration and first dance according to the agreed schedule.", "Emotional highlight film (4–6 minutes).", "Longer wedding film (approximately 20–30 minutes).", "Inclusion of selected original sound from the ceremony, vows or speeches by prior agreement.", "Professional editing and carefully selected music.", "Professional colour correction.", "Digital delivery within 3–4 weeks."],
        closing: "When, years from now, you hear your vows again and see the smiles of the people who were by your side, your wedding day comes alive once more. That is the value of the story we create together.",
      },
      signature: {
        subtitle: "A day that passes. A story that stays forever.", duration: "Up to 12 hours of filming",
        items: ["Up to 12 hours of professional full-day wedding filming.", "One professional wedding videographer.", "Creative and documentary filming of the wedding day.", "Filming of the preparations, ceremony, celebration, first dance and other important moments according to the agreed schedule.", "Emotional highlight film (4–6 minutes).", "Longer full-day wedding film (approximately 30–45 minutes).", "Inclusion of selected important parts of the ceremony and speeches with original sound by prior agreement.", "Professional editing and carefully selected music.", "Professional colour correction.", "Digital delivery within 3–4 weeks."],
        closing: "For your more complete love story. From the first anticipation to the last dance steps. A film that will one day tell future generations how your journey together began.",
      },
    },
    extrasTitle: "Because every wedding is different.",
    extrasText: "Perhaps you would like even more captured moments, an additional videographer or a specially tailored film. We are happy to listen to your ideas and together shape a solution that suits your day.",
    extras: ["A second professional videographer for an additional fee.", "Additional hours of filming.", "A longer documentary film with original sound from selected parts of the wedding.", "An individually tailored wedding video package."],
    byAgreement: "Price on request",
    closingTitle: "Some moments pass. Their value remains.",
    closingP: [
      "Imagine sitting together ten or twenty years from now, opening your wedding album again or watching your film.",
      "You see the smiles of your loved ones again. You hear the voices that accompanied your most beautiful day. For a moment you return to where a new chapter of your shared story began.",
      "That is exactly why we create. Not only for today, but for all the days to come.",
    ],
    form: {
      title: "Tell us a little about your day.",
      sub: "Every love story begins with a single moment. Let our collaboration begin with a simple message. Share your date, location and wishes with us – we will be happy to reply to you personally.",
      note: "Non-binding enquiry. We will get back to you personally.",
      service: "Desired service", selected: "Selected package", choose: "Choose a service",
      services: ["Wedding photography", "Wedding video", "Photography and video", "Individual offer"],
      name: "Your names", email: "Email", location: "Wedding location", date: "Wedding date", notes: "Your wishes",
      notesPh: "Schedule, special moments, questions …",
      terms: "We agree to the", termsLink: "terms and conditions", privacyLink: "privacy policy",
      termsRequired: "Please confirm that you agree to the terms.", opening: "Opening your email app …",
    },
  },
  de: {
    cta: "Unsere Anfrage senden",
    personalTitle: "Jede Liebe hat ihre eigene Geschichte. Wir hören eurer zu.",
    personalP: [
      "Keine Hochzeit gleicht der anderen. Eure Liebe, eure Liebsten, die kleinen spontanen Momente und das große Versprechen fürs Leben ergeben eine Geschichte, die nur euch gehört.",
      "Bei PROFOLIPP sind wir überzeugt, dass die schönsten Erinnerungen mit Vertrauen beginnen. Darum nehmen wir uns Zeit für euch, hören auf eure Wünsche und finden gemeinsam einen Weg, euren Tag mit Gefühl, Hingabe und Professionalität festzuhalten.",
    ],
    micro1: "Weil sich die schönsten Momente nicht wiederholen.",
    micro2: "Ihr lebt den Moment. Wir bewahren ihn.",
    micro3: "Jede Liebesgeschichte verdient es, zu bleiben.",
    photoReviewsTitle: "Die schönsten Momente. Echte Geschichten. Ehrliche Empfehlungen.",
    photoReviewsText: "Fotos bewahren Momente, und Vertrauen lässt echte Erinnerungen entstehen. Lest, wie Paare, die uns ihre kostbarsten Momente bereits anvertraut haben, die Zusammenarbeit mit dem PROFOLIPP-Team erlebt haben.",
    videoReviewsTitle: "Die schönsten Worte kommen von jenen, die uns bereits vertraut haben.",
    videoReviewsText: "Jede Hochzeit ist besonders und jedes Vertrauen bedeutet uns sehr viel. Am besten zeigen unsere Arbeit die echten Erfahrungen der Paare, für die wir Erinnerungen geschaffen haben.",
    fbButton: "Bewertungen unserer Kunden auf Facebook ansehen",
    loveTitle1: "Liebe währt ewig.", loveTitle2: "Lasst auch eure Erinnerungen bleiben.",
    loveP: [
      "Euer Hochzeitstag vergeht schneller, als ihr denkt. Blicke, die mehr sagen als tausend Worte. Umarmungen der Menschen, die ihr am meisten liebt. Freudentränen, der erste Tanz und Momente, die sich nicht wiederholen lassen.",
      "Darum gestalten wir Hochzeitsfilme, die nicht nur zeigen, was passiert ist, sondern die Gefühle bewahren, die euren Tag so besonders gemacht haben.",
    ],
    videoTitle: "Eure Geschichte verdient ihren eigenen Film.",
    videoSub: "Vom ersten Getting Ready bis zu herzlichen Umarmungen und Freude auf der Tanzfläche. Wählt, wie ihr die Erinnerungen an euren einzigartigen Tag bewahren möchtet.",
    recommended: "Unsere Empfehlung",
    videos: {
      essential: {
        subtitle: "Die schönsten Momente, die bleiben.", duration: "Bis zu 8 Stunden Filmaufnahmen",
        items: ["Bis zu 8 Stunden professionelle Hochzeitsfilmaufnahmen.", "Ein professioneller Hochzeitsfilmer.", "Kreative Aufnahmen der Trauung, emotionaler Momente und der Feier im vereinbarten Zeitrahmen.", "Emotionaler Highlight-Film (4–6 Minuten).", "Längerer Hochzeitsfilm (ca. 15–20 Minuten).", "Professioneller Schnitt und sorgfältig ausgewählte Musik.", "Professionelle Farbkorrektur.", "Digitale Lieferung innerhalb von 3–4 Wochen."],
        closing: "Manche Momente dauern nur Sekunden und bleiben doch ein Leben lang. Wir verbinden die schönsten Augenblicke eures Tages zu einer echten filmischen Geschichte, die ihr immer wieder gerne erleben werdet.",
      },
      premium: {
        subtitle: "Jeder Blick. Jedes Gefühl. Eure Geschichte.", duration: "Bis zu 10 Stunden Filmaufnahmen",
        items: ["Bis zu 10 Stunden professionelle Hochzeitsfilmaufnahmen.", "Ein professioneller Hochzeitsfilmer.", "Kreative Aufnahmen von Getting Ready, Trauung, Feier und Eröffnungstanz nach vereinbartem Zeitplan.", "Emotionaler Highlight-Film (4–6 Minuten).", "Längerer Hochzeitsfilm (ca. 20–30 Minuten).", "Einbindung ausgewählter Originaltöne von Trauung, Eheversprechen oder Reden nach vorheriger Absprache.", "Professioneller Schnitt und sorgfältig ausgewählte Musik.", "Professionelle Farbkorrektur.", "Digitale Lieferung innerhalb von 3–4 Wochen."],
        closing: "Wenn ihr in vielen Jahren euer Eheversprechen wieder hört und das Lächeln der Menschen seht, die an eurer Seite waren, wird euer Hochzeitstag für einen Moment wieder lebendig. Das ist der Wert der Geschichte, die wir gemeinsam schaffen.",
      },
      signature: {
        subtitle: "Ein Tag, der vergeht. Eine Geschichte, die für immer bleibt.", duration: "Bis zu 12 Stunden Filmaufnahmen",
        items: ["Bis zu 12 Stunden professionelle ganztägige Hochzeitsfilmaufnahmen.", "Ein professioneller Hochzeitsfilmer.", "Kreative und dokumentarische Aufnahmen des Hochzeitstages.", "Aufnahmen von Getting Ready, Trauung, Feier, Eröffnungstanz und weiteren wichtigen Momenten nach vereinbartem Zeitplan.", "Emotionaler Highlight-Film (4–6 Minuten).", "Längerer ganztägiger Hochzeitsfilm (ca. 30–45 Minuten).", "Einbindung ausgewählter wichtiger Teile der Trauung und Reden mit Originalton nach vorheriger Absprache.", "Professioneller Schnitt und sorgfältig ausgewählte Musik.", "Professionelle Farbkorrektur.", "Digitale Lieferung innerhalb von 3–4 Wochen."],
        closing: "Für eure umfassendere Liebesgeschichte. Von der ersten Vorfreude bis zu den letzten Tanzschritten. Ein Film, der eines Tages auch den nächsten Generationen erzählen wird, wie euer gemeinsamer Weg begann.",
      },
    },
    extrasTitle: "Weil jede Hochzeit anders ist.",
    extrasText: "Vielleicht wünscht ihr euch noch mehr festgehaltene Momente, einen zusätzlichen Filmer oder einen individuell gestalteten Film. Wir hören uns eure Ideen gerne an und gestalten gemeinsam eine Lösung, die zu eurem Tag passt.",
    extras: ["Ein zweiter professioneller Filmer gegen Aufpreis.", "Zusätzliche Stunden Filmaufnahmen.", "Längerer Dokumentarfilm mit Originalton ausgewählter Teile der Hochzeit.", "Individuell zusammengestelltes Hochzeitsvideo-Paket."],
    byAgreement: "Preis nach Vereinbarung",
    closingTitle: "Manche Momente vergehen. Ihr Wert bleibt.",
    closingP: [
      "Stellt euch vor, ihr sitzt in zehn oder zwanzig Jahren zusammen und schlagt euer Hochzeitsalbum wieder auf oder seht euch euren Film an.",
      "Ihr seht wieder das Lächeln eurer Liebsten. Ihr hört die Stimmen, die euren schönsten Tag begleitet haben. Für einen Moment kehrt ihr dorthin zurück, wo ein neues Kapitel eurer gemeinsamen Geschichte begann.",
      "Genau dafür arbeiten wir. Nicht nur für heute, sondern für alle kommenden Tage.",
    ],
    form: {
      title: "Erzählt uns ein wenig von eurem Tag.",
      sub: "Jede Liebesgeschichte beginnt mit einem Moment. Lasst unsere Zusammenarbeit mit einer einfachen Nachricht beginnen. Verratet uns Datum, Ort und eure Wünsche – wir antworten euch gerne persönlich.",
      note: "Unverbindliche Anfrage. Wir melden uns persönlich bei euch.",
      service: "Gewünschte Leistung", selected: "Gewähltes Paket", choose: "Leistung wählen",
      services: ["Hochzeitsfotografie", "Hochzeitsvideo", "Foto und Video", "Individuelles Angebot"],
      name: "Eure Namen", email: "E-Mail", location: "Hochzeitsort", date: "Hochzeitsdatum", notes: "Eure Wünsche",
      notesPh: "Tagesablauf, besondere Momente, Fragen …",
      terms: "Wir stimmen den", termsLink: "AGB", privacyLink: "Datenschutzerklärung",
      termsRequired: "Bitte bestätigt eure Zustimmung zu den Bedingungen.", opening: "Euer E-Mail-Programm wird geöffnet …",
    },
  },
  hr: {
    cta: "Pošaljite naš upit",
    personalTitle: "Svaka ljubav ima svoju priču. Poslušajmo vašu.",
    personalP: [
      "Nijedno vjenčanje nije jednako drugome. Vaša ljubav, vaši najdraži, mali spontani trenuci i velika životna obećanja stvaraju priču koja je samo vaša.",
      "U PROFOLIPP-u vjerujemo da najljepše uspomene počinju povjerenjem. Zato odvajamo vrijeme za vas, slušamo vaše želje i zajedno pronalazimo način da vaš dan bude sačuvan s osjećajem, predanošću i profesionalnošću.",
    ],
    micro1: "Jer se najljepši trenuci ne ponavljaju.",
    micro2: "Vi živite trenutak. Mi ga čuvamo.",
    micro3: "Svaka ljubavna priča zaslužuje da ostane.",
    photoReviewsTitle: "Najljepši trenuci. Stvarne priče. Iskrene preporuke.",
    photoReviewsText: "Fotografije čuvaju trenutke, a povjerenje omogućuje nastanak iskrenih uspomena. Pročitajte kako su suradnju s timom PROFOLIPP doživjeli parovi koji su nam već povjerili svoje najdragocjenije trenutke.",
    videoReviewsTitle: "Najljepše riječi dolaze od onih koji su nam već povjerovali.",
    videoReviewsText: "Svako vjenčanje je posebno i svako nam povjerenje znači mnogo. Naš rad najbolje predstavljaju stvarna iskustva parova za koje smo stvarali uspomene.",
    fbButton: "Pogledajte recenzije naših klijenata na Facebooku",
    loveTitle1: "Ljubav traje vječno.", loveTitle2: "Neka traju i vaše uspomene.",
    loveP: [
      "Vaš dan vjenčanja proći će brže nego što zamišljate. Pogledi koji govore više od tisuću riječi. Zagrljaji ljudi koje najviše volite. Suze sreće, prvi ples i trenuci koji se ne mogu ponoviti.",
      "Zato stvaramo filmove vjenčanja koji ne prikazuju samo ono što se dogodilo, nego pomažu sačuvati osjećaje zbog kojih je vaš dan bio tako poseban.",
    ],
    videoTitle: "Vaša priča zaslužuje svoj film.",
    videoSub: "Od prvih priprema do iskrenih zagrljaja i veselja na plesnom podiju. Odaberite kako želite sačuvati uspomene na svoj neponovljivi dan.",
    recommended: "Naša preporuka",
    videos: {
      essential: {
        subtitle: "Najljepši trenuci koji ostaju.", duration: "Do 8 sati snimanja",
        items: ["Do 8 sati profesionalnog snimanja vjenčanja.", "Jedan profesionalni snimatelj vjenčanja.", "Kreativno snimanje obreda, emotivnih trenutaka i slavlja u dogovorenom vremenskom okviru.", "Emotivni highlight film (4–6 minuta).", "Duži film vjenčanja (otprilike 15–20 minuta).", "Profesionalna montaža i pažljivo odabrana glazba.", "Profesionalna korekcija boja.", "Digitalna dostava u roku od 3–4 tjedna."],
        closing: "Neki trenuci traju samo nekoliko sekundi, ali ostaju s nama cijeli život. Najljepše dijelove vašeg dana povezujemo u iskrenu filmsku priču koju ćete rado uvijek iznova proživljavati.",
      },
      premium: {
        subtitle: "Svaki pogled. Svaka emocija. Vaša priča.", duration: "Do 10 sati snimanja",
        items: ["Do 10 sati profesionalnog snimanja vjenčanja.", "Jedan profesionalni snimatelj vjenčanja.", "Kreativno snimanje priprema, obreda, slavlja i prvog plesa prema dogovorenom rasporedu.", "Emotivni highlight film (4–6 minuta).", "Duži film vjenčanja (otprilike 20–30 minuta).", "Uključivanje odabranih originalnih zvukova obreda, zavjeta ili govora prema prethodnom dogovoru.", "Profesionalna montaža i pažljivo odabrana glazba.", "Profesionalna korekcija boja.", "Digitalna dostava u roku od 3–4 tjedna."],
        closing: "Kada za mnogo godina ponovno čujete svoje zavjete i vidite osmijehe ljudi koji su bili uz vas, dan vjenčanja na trenutak ponovno oživi. To je vrijednost priče koju stvaramo zajedno.",
      },
      signature: {
        subtitle: "Dan koji prođe. Priča koja ostaje zauvijek.", duration: "Do 12 sati snimanja",
        items: ["Do 12 sati profesionalnog cjelodnevnog snimanja vjenčanja.", "Jedan profesionalni snimatelj vjenčanja.", "Kreativno i dokumentarno snimanje dana vjenčanja.", "Snimanje priprema, obreda, slavlja, prvog plesa i drugih važnih trenutaka prema dogovorenom rasporedu.", "Emotivni highlight film (4–6 minuta).", "Duži cjelodnevni film vjenčanja (otprilike 30–45 minuta).", "Uključivanje odabranih važnih dijelova obreda i govora s originalnim zvukom prema prethodnom dogovoru.", "Profesionalna montaža i pažljivo odabrana glazba.", "Profesionalna korekcija boja.", "Digitalna dostava u roku od 3–4 tjedna."],
        closing: "Za vašu cjelovitiju ljubavnu priču. Od prvih iščekivanja do posljednjih plesnih koraka. Film koji će jednoga dana i sljedećim generacijama pričati kako je počeo vaš zajednički put.",
      },
    },
    extrasTitle: "Jer je svako vjenčanje drugačije.",
    extrasText: "Možda želite još više zabilježenih trenutaka, dodatnog snimatelja ili posebno prilagođen film. Rado ćemo poslušati vaše ideje i zajedno oblikovati rješenje koje odgovara vašem danu.",
    extras: ["Drugi profesionalni snimatelj uz doplatu.", "Dodatni sati snimanja.", "Duži dokumentarni film s originalnim zvukom odabranih dijelova vjenčanja.", "Individualno prilagođen video paket vjenčanja."],
    byAgreement: "Cijena po dogovoru",
    closingTitle: "Neki trenuci prolaze. Njihova vrijednost ostaje.",
    closingP: [
      "Zamislite da za deset ili dvadeset godina sjedite zajedno i ponovno otvorite album vjenčanja ili pogledate svoj film.",
      "Ponovno vidite osmijehe svojih najdražih. Čujete glasove koji su pratili vaš najljepši dan. Na trenutak se vraćate tamo gdje je počelo novo poglavlje vaše zajedničke priče.",
      "Upravo zato stvaramo. Ne samo za danas, nego i za sve dane koji dolaze.",
    ],
    form: {
      title: "Recite nam nešto o svom danu.",
      sub: "Svaka ljubavna priča počinje jednim trenutkom. Neka naša suradnja počne jednostavnom porukom. Povjerite nam datum, mjesto i svoje želje – rado ćemo vam osobno odgovoriti.",
      note: "Neobvezujući upit. Javit ćemo vam se osobno.",
      service: "Željena usluga", selected: "Odabrani paket", choose: "Odaberite uslugu",
      services: ["Fotografiranje vjenčanja", "Video vjenčanja", "Fotografiranje i video", "Individualna ponuda"],
      name: "Vaša imena", email: "E-pošta", location: "Mjesto vjenčanja", date: "Datum vjenčanja", notes: "Vaše želje",
      notesPh: "Tijek dana, posebni trenuci, pitanja …",
      terms: "Slažemo se s", termsLink: "općim uvjetima", privacyLink: "politikom privatnosti",
      termsRequired: "Molimo potvrdite da se slažete s uvjetima.", opening: "Otvaramo vaš program za e-poštu …",
    },
  },
};

export const getWeddingPageText = (lang: string) => t[(lang in t ? lang : "si") as L];
