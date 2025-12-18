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
    'nav.events': 'Dogodki',
    'nav.families': 'Družine',
    'nav.newborns': 'Novorojenčki',
    'nav.travels': 'Potovanja',
    'nav.reviews': 'Mnenja',
    'nav.contact': 'Kontaktirajte nas',
    
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
    'weddings.video_packages': 'Video paketi',
    'weddings.video_desc': 'Dodajte video k fotografiji za popolno zgodbo vajinega dne.',
    'weddings.gallery': 'Galerija porok',
    'weddings.gallery_desc': 'Poglejte naše poročne fotografije.',
    'weddings.photos': 'fotografij',
    
    // Legal pages
    'legal.terms_title': 'Splošni pogoji poslovanja',
    'legal.cookies_title': 'Politika piškotkov',
    'legal.privacy_title': 'Politika zasebnosti',
    'legal.copyright_title': 'Pravilnik o avtorskih pravicah in uporabi vsebin',
  },
  en: {
    // Navigation
    'nav.about': 'About us',
    'nav.weddings': 'Weddings',
    'nav.events': 'Events',
    'nav.families': 'Families',
    'nav.newborns': 'Newborns',
    'nav.travels': 'Travel',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact us',
    
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
    'weddings.video_packages': 'Video packages',
    'weddings.video_desc': 'Add video to photography for the complete story of your day.',
    'weddings.gallery': 'Wedding gallery',
    'weddings.gallery_desc': 'View our wedding photos.',
    'weddings.photos': 'photos',
    
    // Legal pages
    'legal.terms_title': 'General Terms and Conditions',
    'legal.cookies_title': 'Cookie Policy',
    'legal.privacy_title': 'Privacy Policy',
    'legal.copyright_title': 'Copyright and Content Usage Policy',
  },
  de: {
    // Navigation
    'nav.about': 'Über uns',
    'nav.weddings': 'Hochzeiten',
    'nav.events': 'Veranstaltungen',
    'nav.families': 'Familien',
    'nav.newborns': 'Neugeborene',
    'nav.travels': 'Reisen',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontaktieren Sie uns',
    
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
    'weddings.video_packages': 'Videopakete',
    'weddings.video_desc': 'Fügen Sie Video zur Fotografie hinzu für die vollständige Geschichte Ihres Tages.',
    'weddings.gallery': 'Hochzeitsgalerie',
    'weddings.gallery_desc': 'Sehen Sie sich unsere Hochzeitsfotos an.',
    'weddings.photos': 'Fotos',
    
    // Legal pages
    'legal.terms_title': 'Allgemeine Geschäftsbedingungen',
    'legal.cookies_title': 'Cookie-Richtlinie',
    'legal.privacy_title': 'Datenschutzrichtlinie',
    'legal.copyright_title': 'Urheberrecht und Nutzungsbedingungen',
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
