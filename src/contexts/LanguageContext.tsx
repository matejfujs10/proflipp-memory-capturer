import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'si' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  si: {
    // Navigation
    'nav.about': 'O nas',
    'nav.weddings': 'Poroke',
    'nav.baptism': 'Krst',
    'nav.events': 'Dogodki',
    'nav.families': 'Družine',
    'nav.newborns': 'Novorojenčki',
    'nav.travels': 'Potovanja',
    'nav.reviews': 'Mnenja',
    'nav.contact': 'Kontaktirajte nas',
    
    // Baptism page
    'baptism.title': 'Fotografiranje krsta',
    'baptism.packages': 'Izberite paket',
    
    // Hero Section
    'hero.tagline': 'Poročna & družinska fotografija',
    'hero.title': 'We Create',
    'hero.emotions': 'Emotions!',
    'hero.subtitle': 'Uživajte v dnevu – mi ujamemo zgodbo.',
    'hero.description': 'Naj bo vaš poročni dan sproščen. Vi uživate, mi pa poskrbimo, da bodo fotografije polne ponosa, sreče in pristnih trenutkov – od detajlov, skupinskih do spontanih fotografij.',
    'hero.emotions_text': 'Čustva, smeh, solze',
    'hero.media': 'Video & fotografije',
    'hero.memories': 'Večni spomini',
    'hero.inquiry': 'Pošlji povpraševanje',
    'hero.packages': 'Izberi paket',
    
    // Services Section
    'services.title': 'Naše storitve',
    'services.heading': 'Fotografija za vsak trenutek',
    'services.description': 'Od porok do družinskih portretov – ujamemo čustva, ki ostanejo za vedno.',
    'services.more': 'Več informacij',
    'services.weddings': 'Poroke',
    'services.weddings_desc': 'Pristne, vesele fotografije, ujete v najbolj pomembnih trenutkih vajinega dne.',
    'services.events': 'Dogodki',
    'services.events_desc': 'Neopazna ekipa, pravi trenutek ob pravem času, profesionalne fotografije z zgodbo.',
    'services.families': 'Družine',
    'services.families_desc': 'Sproščeni sessioni za pristne spomine – vi uživate, mi ujamemo zgodbo.',
    
    // Gallery Section
    'gallery.title': 'Galerija',
    'gallery.heading': 'Ujeti trenutki',
    'gallery.description': 'Vsaka fotografija pripoveduje svojo zgodbo. Poglejte, kako ujamemo čustva in spomine.',
    
    // Features Section
    'features.title': 'Zakaj mi?',
    'features.heading': 'Ustvarjamo spomine,',
    'features.heading2': 'ki ostanejo',
    'features.description': 'Poročna fotografija je naša posebna strast. Verjamemo v podporo skozi celoten proces – od iskanja idealnih kotičkov do izbire najboljše svetlobe – da boste na fotografijah videti čudovito in predvsem sproščeno.',
    'features.authentic': 'Pristna čustva',
    'features.authentic_desc': 'Ujamemo smeh, solze, dotike in spontane trenutke – brez prisile in poziranja.',
    'features.equipment': 'Profesionalna oprema',
    'features.equipment_desc': 'Najnovejša fotografska oprema za najboljše rezultate v vseh svetlobnih pogojih.',
    'features.approach': 'Sproščen pristop',
    'features.approach_desc': 'Neopazna ekipa, ki poskrbi, da se počutite udobno in naravno.',
    'features.experience': 'Izkušnje',
    'features.experience_desc': 'Leta izkušenj pri porokah, dogodkih in družinskem fotografiranju.',
    'features.weddings': 'Porok',
    'features.years': 'Let izkušenj',
    'features.clients': 'Zadovoljnih strank',
    'features.photos': 'Fotografij',
    
    // Testimonials Section
    'testimonials.title': 'Mnenja strank',
    'testimonials.heading': 'Kaj pravijo naše stranke',
    'testimonials.reviews': 'ocen',
    'testimonials.all': 'Vsa mnenja',
    
    // Contact Section
    'contact.title': 'Kontaktirajte nas',
    'contact.description': 'Imate radi sproščenost, spontanost in dobro energijo? Točno takšne fotografije tudi ustvarjamo. Pošljite nam povpraševanje — odgovorimo hitro, uskladimo želje in predlagamo najboljšo rešitev glede na vaš dogodek.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-pošta',
    'contact.location': 'Lokacija',
    'contact.send_inquiry': 'Pošlji povpraševanje',
    'contact.quick_message': 'Hitro sporočilo',
    'contact.your_name': 'Vaše ime',
    'contact.your_email': 'E-pošta',
    'contact.your_message': 'Vaše sporočilo...',
    'contact.send_message': 'Pošlji sporočilo',
    'contact.form.name': 'Ime in priimek',
    'contact.form.location': 'Kraj',
    'contact.form.date': 'Datum',
    'contact.form.guests': 'Število ljudi',
    'contact.form.duration': 'Trajanje (ure)',
    'contact.form.video': 'Želim tudi snemanje',
    'contact.form.notes': 'Ostale želje',
    'contact.form.notes_placeholder': 'Dodatne informacije, posebne želje...',
    'contact.form.submit': 'Pošlji povpraševanje',
    'contact.form.terms': 'Z oddajo obrazca potrjujete, da ste prebrali splošne pogoje.',
    'contact.opening_email': 'Odpiramo e-poštni odjemalec...',
    
    // Footer
    'footer.services': 'Storitve',
    'footer.info': 'Informacije',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Vse pravice pridržane.',
    'footer.tagline': 'We Create Emotions! Ujamemo čustva, smeh, solze, dotike – da bodo vaši spomini večni.',
    'footer.terms': 'Splošni pogoji',
    'footer.privacy': 'Politika zasebnosti',
    'footer.cookies': 'Piškotki',
    'footer.copyright': 'Avtorske pravice',
    
    // Poroke page
    'weddings.services': 'Storitve',
    'weddings.title': 'Poročna fotografija',
    'weddings.description': 'Ljubezen je v drobnih stvareh: pogledih, dotikih, nasmehih in tistih čisto vajinih trenutkih. Na poročni dan sta v ospredju vidva – mi pa ujamemo zgodbo tako, da bodo fotografije pristne, vesele in polne čustev.',
    'weddings.choose_package': 'Izberita paket',
    'weddings.choose_desc': 'Izberita paket, ki najbolj ustreza vajinemu dnevu.',
    'weddings.pricing_note': 'Cene se razlikujejo glede na želje mladoporočencev. Pripravimo vam personalizirano ponudbo.',
    'weddings.follow_promo': 'Sledite nam na Facebook in Instagram za aktualne akcije in posebne ponudbe!',
    'weddings.video_packages': 'Video paketi',
    'weddings.video_desc': 'Dodajte video k fotografiji za popolno zgodbo vajinega dne.',
    'weddings.gallery': 'Galerija porok',
    'weddings.gallery_desc': 'Poglejte naše poročne fotografije.',
    'weddings.photos': 'fotografij',
    'weddings.gallery_note': 'Prikazane so le izbrane fotografije. Več fotografij si lahko ogledate na našem Facebook in Instagram profilu.',
    
    // Legal pages
    'legal.terms_title': 'Splošni pogoji poslovanja',
    'legal.cookies_title': 'Politika piškotkov',
    'legal.privacy_title': 'Politika zasebnosti',
    'legal.copyright_title': 'Pravilnik o avtorskih pravicah in uporabi vsebin',
    
    // O nas page
    'about.tagline': 'Proflipp',
    'about.title': 'O nas',
    'about.slogan': 'We Create Emotions!',
    'about.intro_heading': 'PROFLIPP ni le fotografija. PROFLIPP so občutki, zgodbe in spomini, ki ostanejo.',
    'about.intro_p1': 'Smo kreativna ekipa z jasno vizijo: ujeti pristna čustva, energijo trenutka in drobne detajle, ki skupaj ustvarijo nepozabno zgodbo. Verjamemo, da najlepše fotografije nastanejo takrat, ko ste sproščeni, samozavestni in točno takšni, kot ste.',
    'about.intro_p2': 'Ukvarjamo se s poročnim, družinskim, fotografiranjem dogodkov in poslovnim fotografiranjem. Naš pristop je profesionalen, a hkrati topel in človeški. Vsako fotografiranje je vodeno, premišljeno in prilagojeno vam – brez stresa, brez prisile, z občutkom za estetiko, svetlobo in potek dogodka.',
    'about.passion': 'Strast',
    'about.passion_desc': 'Ljubezen do fotografije',
    'about.experience': 'Izkušnje',
    'about.experience_desc': '15+ let v panogi',
    'about.approach': 'Pristop',
    'about.approach_desc': 'Sproščen in naraven',
    'about.gallery_title': 'Naši ujeti trenutki',
    'about.gallery_desc': 'Poglejte nekaj utrinkov z naših projektov in dogodkov',
    'about.video_title': 'Fotografija + video = popolna zgodba',
    'about.video_desc': 'Pri vsakem fotografiranju ali dogodku vam lahko ustvarimo tudi kratke video posnetke, ki so danes izjemno priljubljeni. Gre za dinamične, čustvene videe in reels-e, ki odlično dopolnijo fotografije in omogočajo, da trenutke doživite znova – v gibanju, zvoku in emociji.',
    'about.more_title': 'Več kot pričakujete',
    'about.more_desc': 'Naše stranke ne dobijo le fotografij. Dobijo celostno izkušnjo.',
    'about.more_1': 'Skrbno izbrane bonuse in darila',
    'about.more_2': 'Dodatne vsebine, kot so slideshowi in kratke video zgodbe',
    'about.more_3': 'Oseben pristop in prilagoditve po meri',
    'about.offer_title': 'Personalizirana ponudba in pogodba',
    'about.offer_p1': 'Vsak dogodek je drugačen, zato za vsako sodelovanje pripravimo personalizirano ponudbo, prilagojeno vašim željam, idejam in obsegu dogodka.',
    'about.offer_p2': 'Za popolno varnost in jasnost sodelovanja vam po potrebi pripravimo tudi pogodbo, kjer so vsi pogoji jasno in transparentno dogovorjeni.',
    'about.why_title': 'Zakaj PROFLIPP?',
    'about.why_desc': 'Ker združujemo ustvarjalnost, izkušnje in zanesljivost.',
    'about.why_p1': 'V več kot 15 letih dela v fotografiji in sodelovanja na številnih porokah ter različnih projektih smo pridobili znanje, ki presega zgolj fotografiranje. Zato vam lahko svetujemo tudi pri organizaciji samega dogodka ali poroke – pri časovnici, poteku dneva, izbiri lokacij, svetlobe in pomembnih detajlih.',
    'about.why_p2': 'To svetovanje je za naše stranke popolnoma brezplačno, v kolikor se odločite za sodelovanje z nami.',
    'about.why_p3': 'V vseh teh letih nismo odpovedali niti enega projekta, kar našim naročnikom daje dodatno zaupanje in občutek varnosti.',
    'about.reviews_title': 'Mnenja naših strank',
    'about.reviews_desc': 'Kakovost našega dela, naš pristop in vse, kar opisujemo zgoraj, potrjujejo tudi mnenja naših zadovoljnih strank. Njihove izkušnje so najboljše zagotovilo, da boste v pravih rokah.',
    'about.reviews_cta': 'Oglejte si mnenja strank',
    'about.cta_title': 'Vabljeni k sodelovanju',
    'about.cta_desc': 'Z veseljem bomo ustvarili zgodbo tudi za vas.',
    'about.cta_email': 'Pišite nam na info@proflipp.com',
  },
  en: {
    // Navigation
    'nav.about': 'About us',
    'nav.weddings': 'Weddings',
    'nav.baptism': 'Baptism',
    'nav.events': 'Events',
    'nav.families': 'Families',
    'nav.newborns': 'Newborns',
    'nav.travels': 'Travel',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact us',
    
    // Baptism page
    'baptism.title': 'Baptism photography',
    'baptism.packages': 'Choose a package',
    
    // Hero Section
    'hero.tagline': 'Wedding & family photography',
    'hero.title': 'We Create',
    'hero.emotions': 'Emotions!',
    'hero.subtitle': 'Enjoy the day – we capture the story.',
    'hero.description': 'Let your wedding day be relaxed. You enjoy, and we make sure the photos are full of pride, happiness and authentic moments – from details, group shots to spontaneous photos.',
    'hero.emotions_text': 'Emotions, laughter, tears',
    'hero.media': 'Video & photography',
    'hero.memories': 'Eternal memories',
    'hero.inquiry': 'Send inquiry',
    'hero.packages': 'Choose a package',
    
    // Services Section
    'services.title': 'Our services',
    'services.heading': 'Photography for every moment',
    'services.description': 'From weddings to family portraits – we capture emotions that last forever.',
    'services.more': 'Learn more',
    'services.weddings': 'Weddings',
    'services.weddings_desc': 'Authentic, joyful photos captured in the most important moments of your day.',
    'services.events': 'Events',
    'services.events_desc': 'Unobtrusive team, the right moment at the right time, professional photos with a story.',
    'services.families': 'Families',
    'services.families_desc': 'Relaxed sessions for authentic memories – you enjoy, we capture the story.',
    
    // Gallery Section
    'gallery.title': 'Gallery',
    'gallery.heading': 'Captured moments',
    'gallery.description': 'Each photo tells its own story. See how we capture emotions and memories.',
    
    // Features Section
    'features.title': 'Why us?',
    'features.heading': 'We create memories',
    'features.heading2': 'that last',
    'features.description': 'Wedding photography is our special passion. We believe in support throughout the process – from finding ideal spots to choosing the best light – so you look wonderful and relaxed in photos.',
    'features.authentic': 'Authentic emotions',
    'features.authentic_desc': 'We capture laughter, tears, touches and spontaneous moments – without pressure or posing.',
    'features.equipment': 'Professional equipment',
    'features.equipment_desc': 'Latest photography equipment for the best results in all lighting conditions.',
    'features.approach': 'Relaxed approach',
    'features.approach_desc': 'Unobtrusive team that ensures you feel comfortable and natural.',
    'features.experience': 'Experience',
    'features.experience_desc': 'Years of experience in weddings, events and family photography.',
    'features.weddings': 'Weddings',
    'features.years': 'Years of experience',
    'features.clients': 'Happy clients',
    'features.photos': 'Photos',
    
    // Testimonials Section
    'testimonials.title': 'Client reviews',
    'testimonials.heading': 'What our clients say',
    'testimonials.reviews': 'reviews',
    'testimonials.all': 'All reviews',
    
    // Contact Section
    'contact.title': 'Contact us',
    'contact.description': 'Do you love relaxation, spontaneity and good energy? That\'s exactly the kind of photos we create. Send us an inquiry — we respond quickly, align wishes and suggest the best solution for your event.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.send_inquiry': 'Send inquiry',
    'contact.quick_message': 'Quick message',
    'contact.your_name': 'Your name',
    'contact.your_email': 'Email',
    'contact.your_message': 'Your message...',
    'contact.send_message': 'Send message',
    'contact.form.name': 'Full name',
    'contact.form.location': 'Location',
    'contact.form.date': 'Date',
    'contact.form.guests': 'Number of people',
    'contact.form.duration': 'Duration (hours)',
    'contact.form.video': 'I also want video',
    'contact.form.notes': 'Other wishes',
    'contact.form.notes_placeholder': 'Additional information, special wishes...',
    'contact.form.submit': 'Send inquiry',
    'contact.form.terms': 'By submitting this form, you confirm that you have read the terms and conditions.',
    'contact.opening_email': 'Opening email client...',
    
    // Footer
    'footer.services': 'Services',
    'footer.info': 'Information',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'We Create Emotions! We capture emotions, laughter, tears, touches – so your memories last forever.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies',
    'footer.copyright': 'Copyright',
    
    // Poroke page
    'weddings.services': 'Services',
    'weddings.title': 'Wedding photography',
    'weddings.description': 'Love is in the small things: glances, touches, smiles and those purely yours moments. On your wedding day, you are in the spotlight – and we capture the story so that the photos are authentic, joyful and full of emotions.',
    'weddings.choose_package': 'Choose a package',
    'weddings.choose_desc': 'Choose the package that best suits your day.',
    'weddings.pricing_note': 'Prices vary based on the couple\'s wishes. We prepare a personalized offer for you.',
    'weddings.follow_promo': 'Follow us on Facebook and Instagram for current promotions and special offers!',
    'weddings.video_packages': 'Video packages',
    'weddings.video_desc': 'Add video to photography for the complete story of your day.',
    'weddings.gallery': 'Wedding gallery',
    'weddings.gallery_desc': 'View our wedding photos.',
    'weddings.photos': 'photos',
    'weddings.gallery_note': 'Only selected photos are shown. You can view more photos on our Facebook and Instagram profile.',
    
    // Legal pages
    'legal.terms_title': 'General Terms and Conditions',
    'legal.cookies_title': 'Cookie Policy',
    'legal.privacy_title': 'Privacy Policy',
    'legal.copyright_title': 'Copyright and Content Usage Policy',
    
    // O nas page
    'about.tagline': 'Proflipp',
    'about.title': 'About us',
    'about.slogan': 'We Create Emotions!',
    'about.intro_heading': 'PROFLIPP is not just photography. PROFLIPP is feelings, stories and memories that remain.',
    'about.intro_p1': 'We are a creative team with a clear vision: to capture authentic emotions, the energy of the moment and small details that together create an unforgettable story. We believe the most beautiful photos are taken when you are relaxed, confident and exactly who you are.',
    'about.intro_p2': 'We specialize in wedding, family, event and business photography. Our approach is professional yet warm and human. Every shoot is guided, thoughtful and tailored to you – without stress, without pressure, with a sense for aesthetics, light and the flow of the event.',
    'about.passion': 'Passion',
    'about.passion_desc': 'Love for photography',
    'about.experience': 'Experience',
    'about.experience_desc': '15+ years in the industry',
    'about.approach': 'Approach',
    'about.approach_desc': 'Relaxed and natural',
    'about.gallery_title': 'Our captured moments',
    'about.gallery_desc': 'See some glimpses from our projects and events',
    'about.video_title': 'Photography + video = complete story',
    'about.video_desc': 'With every shoot or event, we can also create short videos that are extremely popular today. These are dynamic, emotional videos and reels that complement photos perfectly and allow you to relive moments – in motion, sound and emotion.',
    'about.more_title': 'More than expected',
    'about.more_desc': 'Our clients don\'t just get photos. They get a complete experience.',
    'about.more_1': 'Carefully selected bonuses and gifts',
    'about.more_2': 'Additional content like slideshows and short video stories',
    'about.more_3': 'Personal approach and custom adjustments',
    'about.offer_title': 'Personalized offer and contract',
    'about.offer_p1': 'Every event is different, so for each collaboration we prepare a personalized offer tailored to your wishes, ideas and scope of the event.',
    'about.offer_p2': 'For complete security and clarity of cooperation, we can also prepare a contract where all conditions are clearly and transparently agreed.',
    'about.why_title': 'Why PROFLIPP?',
    'about.why_desc': 'Because we combine creativity, experience and reliability.',
    'about.why_p1': 'In more than 15 years of photography and collaboration on numerous weddings and various projects, we have gained knowledge that goes beyond just photography. That\'s why we can advise you on organizing the event or wedding itself – on timing, flow of the day, choice of locations, lighting and important details.',
    'about.why_p2': 'This consultation is completely free for our clients if you choose to work with us.',
    'about.why_p3': 'In all these years, we have not cancelled a single project, which gives our clients additional trust and a sense of security.',
    'about.reviews_title': 'Client reviews',
    'about.reviews_desc': 'The quality of our work, our approach and everything described above is also confirmed by reviews from our satisfied clients. Their experiences are the best guarantee that you\'re in good hands.',
    'about.reviews_cta': 'See client reviews',
    'about.cta_title': 'Welcome to collaborate',
    'about.cta_desc': 'We\'ll be happy to create a story for you too.',
    'about.cta_email': 'Write to us at info@proflipp.com',
  },
  de: {
    // Navigation
    'nav.about': 'Über uns',
    'nav.weddings': 'Hochzeiten',
    'nav.baptism': 'Taufe',
    'nav.events': 'Veranstaltungen',
    'nav.families': 'Familien',
    'nav.newborns': 'Neugeborene',
    'nav.travels': 'Reisen',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontaktieren Sie uns',
    
    // Baptism page
    'baptism.title': 'Tauffotografie',
    'baptism.packages': 'Paket wählen',
    
    // Hero Section
    'hero.tagline': 'Hochzeits- & Familienfotografie',
    'hero.title': 'We Create',
    'hero.emotions': 'Emotions!',
    'hero.subtitle': 'Genießen Sie den Tag – wir halten die Geschichte fest.',
    'hero.description': 'Lassen Sie Ihren Hochzeitstag entspannt sein. Sie genießen, und wir sorgen dafür, dass die Fotos voller Stolz, Glück und authentischer Momente sind – von Details, Gruppenfotos bis zu spontanen Aufnahmen.',
    'hero.emotions_text': 'Emotionen, Lachen, Tränen',
    'hero.media': 'Video & Fotografie',
    'hero.memories': 'Ewige Erinnerungen',
    'hero.inquiry': 'Anfrage senden',
    'hero.packages': 'Paket wählen',
    
    // Services Section
    'services.title': 'Unsere Leistungen',
    'services.heading': 'Fotografie für jeden Moment',
    'services.description': 'Von Hochzeiten bis zu Familienporträts – wir fangen Emotionen ein, die für immer bleiben.',
    'services.more': 'Mehr erfahren',
    'services.weddings': 'Hochzeiten',
    'services.weddings_desc': 'Authentische, freudige Fotos, aufgenommen in den wichtigsten Momenten Ihres Tages.',
    'services.events': 'Veranstaltungen',
    'services.events_desc': 'Unauffälliges Team, der richtige Moment zur richtigen Zeit, professionelle Fotos mit einer Geschichte.',
    'services.families': 'Familien',
    'services.families_desc': 'Entspannte Sessions für authentische Erinnerungen – Sie genießen, wir halten die Geschichte fest.',
    
    // Gallery Section
    'gallery.title': 'Galerie',
    'gallery.heading': 'Eingefangene Momente',
    'gallery.description': 'Jedes Foto erzählt seine eigene Geschichte. Sehen Sie, wie wir Emotionen und Erinnerungen einfangen.',
    
    // Features Section
    'features.title': 'Warum wir?',
    'features.heading': 'Wir schaffen Erinnerungen,',
    'features.heading2': 'die bleiben',
    'features.description': 'Hochzeitsfotografie ist unsere besondere Leidenschaft. Wir glauben an Unterstützung während des gesamten Prozesses – vom Finden idealer Orte bis zur Wahl des besten Lichts – damit Sie auf Fotos wunderschön und entspannt aussehen.',
    'features.authentic': 'Authentische Emotionen',
    'features.authentic_desc': 'Wir fangen Lachen, Tränen, Berührungen und spontane Momente ein – ohne Druck und Posieren.',
    'features.equipment': 'Professionelle Ausrüstung',
    'features.equipment_desc': 'Neueste Fotoausrüstung für beste Ergebnisse bei allen Lichtverhältnissen.',
    'features.approach': 'Entspannter Ansatz',
    'features.approach_desc': 'Unauffälliges Team, das dafür sorgt, dass Sie sich wohl und natürlich fühlen.',
    'features.experience': 'Erfahrung',
    'features.experience_desc': 'Jahre der Erfahrung bei Hochzeiten, Veranstaltungen und Familienfotografie.',
    'features.weddings': 'Hochzeiten',
    'features.years': 'Jahre Erfahrung',
    'features.clients': 'Zufriedene Kunden',
    'features.photos': 'Fotos',
    
    // Testimonials Section
    'testimonials.title': 'Kundenbewertungen',
    'testimonials.heading': 'Was unsere Kunden sagen',
    'testimonials.reviews': 'Bewertungen',
    'testimonials.all': 'Alle Bewertungen',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.description': 'Lieben Sie Entspannung, Spontanität und gute Energie? Genau solche Fotos erstellen wir auch. Senden Sie uns eine Anfrage — wir antworten schnell, stimmen Wünsche ab und schlagen die beste Lösung für Ihre Veranstaltung vor.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.location': 'Standort',
    'contact.send_inquiry': 'Anfrage senden',
    'contact.quick_message': 'Schnelle Nachricht',
    'contact.your_name': 'Ihr Name',
    'contact.your_email': 'E-Mail',
    'contact.your_message': 'Ihre Nachricht...',
    'contact.send_message': 'Nachricht senden',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.location': 'Ort',
    'contact.form.date': 'Datum',
    'contact.form.guests': 'Anzahl der Personen',
    'contact.form.duration': 'Dauer (Stunden)',
    'contact.form.video': 'Ich möchte auch Video',
    'contact.form.notes': 'Andere Wünsche',
    'contact.form.notes_placeholder': 'Zusätzliche Informationen, besondere Wünsche...',
    'contact.form.submit': 'Anfrage senden',
    'contact.form.terms': 'Mit dem Absenden dieses Formulars bestätigen Sie, dass Sie die AGB gelesen haben.',
    'contact.opening_email': 'E-Mail-Client wird geöffnet...',
    
    // Footer
    'footer.services': 'Leistungen',
    'footer.info': 'Informationen',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.tagline': 'We Create Emotions! Wir fangen Emotionen, Lachen, Tränen, Berührungen ein – damit Ihre Erinnerungen ewig bleiben.',
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
    'footer.cookies': 'Cookies',
    'footer.copyright': 'Urheberrecht',
    
    // Poroke page
    'weddings.services': 'Leistungen',
    'weddings.title': 'Hochzeitsfotografie',
    'weddings.description': 'Liebe steckt in den kleinen Dingen: Blicken, Berührungen, Lächeln und diesen ganz eigenen Momenten. An Ihrem Hochzeitstag stehen Sie im Mittelpunkt – und wir halten die Geschichte so fest, dass die Fotos authentisch, fröhlich und voller Emotionen sind.',
    'weddings.choose_package': 'Paket wählen',
    'weddings.choose_desc': 'Wählen Sie das Paket, das am besten zu Ihrem Tag passt.',
    'weddings.pricing_note': 'Die Preise variieren je nach den Wünschen des Brautpaares. Wir erstellen für Sie ein personalisiertes Angebot.',
    'weddings.follow_promo': 'Folgen Sie uns auf Facebook und Instagram für aktuelle Aktionen und Sonderangebote!',
    'weddings.video_packages': 'Videopakete',
    'weddings.video_desc': 'Fügen Sie Video zur Fotografie hinzu für die vollständige Geschichte Ihres Tages.',
    'weddings.gallery': 'Hochzeitsgalerie',
    'weddings.gallery_desc': 'Sehen Sie sich unsere Hochzeitsfotos an.',
    'weddings.photos': 'Fotos',
    'weddings.gallery_note': 'Es werden nur ausgewählte Fotos angezeigt. Weitere Fotos können Sie auf unserem Facebook- und Instagram-Profil ansehen.',
    
    // Legal pages
    'legal.terms_title': 'Allgemeine Geschäftsbedingungen',
    'legal.cookies_title': 'Cookie-Richtlinie',
    'legal.privacy_title': 'Datenschutzrichtlinie',
    'legal.copyright_title': 'Urheberrecht und Nutzungsbedingungen',
    
    // O nas page
    'about.tagline': 'Proflipp',
    'about.title': 'Über uns',
    'about.slogan': 'We Create Emotions!',
    'about.intro_heading': 'PROFLIPP ist nicht nur Fotografie. PROFLIPP sind Gefühle, Geschichten und Erinnerungen, die bleiben.',
    'about.intro_p1': 'Wir sind ein kreatives Team mit einer klaren Vision: authentische Emotionen, die Energie des Moments und kleine Details einzufangen, die zusammen eine unvergessliche Geschichte schaffen. Wir glauben, dass die schönsten Fotos entstehen, wenn Sie entspannt, selbstbewusst und genau Sie selbst sind.',
    'about.intro_p2': 'Wir spezialisieren uns auf Hochzeits-, Familien-, Event- und Businessfotografie. Unser Ansatz ist professionell und gleichzeitig warm und menschlich. Jedes Shooting ist geführt, durchdacht und auf Sie zugeschnitten – ohne Stress, ohne Druck, mit Gespür für Ästhetik, Licht und den Ablauf der Veranstaltung.',
    'about.passion': 'Leidenschaft',
    'about.passion_desc': 'Liebe zur Fotografie',
    'about.experience': 'Erfahrung',
    'about.experience_desc': '15+ Jahre in der Branche',
    'about.approach': 'Ansatz',
    'about.approach_desc': 'Entspannt und natürlich',
    'about.gallery_title': 'Unsere eingefangenen Momente',
    'about.gallery_desc': 'Sehen Sie einige Eindrücke von unseren Projekten und Veranstaltungen',
    'about.video_title': 'Fotografie + Video = komplette Geschichte',
    'about.video_desc': 'Bei jedem Shooting oder Event können wir auch kurze Videos erstellen, die heute sehr beliebt sind. Es handelt sich um dynamische, emotionale Videos und Reels, die Fotos perfekt ergänzen und es ermöglichen, Momente erneut zu erleben – in Bewegung, Ton und Emotion.',
    'about.more_title': 'Mehr als erwartet',
    'about.more_desc': 'Unsere Kunden bekommen nicht nur Fotos. Sie bekommen ein komplettes Erlebnis.',
    'about.more_1': 'Sorgfältig ausgewählte Boni und Geschenke',
    'about.more_2': 'Zusätzliche Inhalte wie Slideshows und kurze Video-Geschichten',
    'about.more_3': 'Persönlicher Ansatz und maßgeschneiderte Anpassungen',
    'about.offer_title': 'Personalisiertes Angebot und Vertrag',
    'about.offer_p1': 'Jede Veranstaltung ist anders, deshalb bereiten wir für jede Zusammenarbeit ein personalisiertes Angebot vor, das auf Ihre Wünsche, Ideen und den Umfang der Veranstaltung zugeschnitten ist.',
    'about.offer_p2': 'Für vollständige Sicherheit und Klarheit der Zusammenarbeit können wir auch einen Vertrag vorbereiten, in dem alle Bedingungen klar und transparent vereinbart sind.',
    'about.why_title': 'Warum PROFLIPP?',
    'about.why_desc': 'Weil wir Kreativität, Erfahrung und Zuverlässigkeit vereinen.',
    'about.why_p1': 'In mehr als 15 Jahren Fotografie und Zusammenarbeit bei zahlreichen Hochzeiten und verschiedenen Projekten haben wir Wissen erworben, das über die Fotografie hinausgeht. Deshalb können wir Sie auch bei der Organisation der Veranstaltung oder Hochzeit beraten – bei Timing, Tagesablauf, Wahl der Orte, Beleuchtung und wichtigen Details.',
    'about.why_p2': 'Diese Beratung ist für unsere Kunden völlig kostenlos, wenn Sie sich für eine Zusammenarbeit mit uns entscheiden.',
    'about.why_p3': 'In all diesen Jahren haben wir kein einziges Projekt abgesagt, was unseren Kunden zusätzliches Vertrauen und ein Gefühl der Sicherheit gibt.',
    'about.reviews_title': 'Kundenbewertungen',
    'about.reviews_desc': 'Die Qualität unserer Arbeit, unser Ansatz und alles oben Beschriebene wird auch durch Bewertungen unserer zufriedenen Kunden bestätigt. Ihre Erfahrungen sind die beste Garantie, dass Sie in guten Händen sind.',
    'about.reviews_cta': 'Kundenbewertungen ansehen',
    'about.cta_title': 'Willkommen zur Zusammenarbeit',
    'about.cta_desc': 'Wir freuen uns, auch für Sie eine Geschichte zu erschaffen.',
    'about.cta_email': 'Schreiben Sie uns an info@proflipp.com',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('si');

  const t = (key: string): string => {
    return translations[language][key] || translations['si'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}