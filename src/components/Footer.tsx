import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import proflippLogoCameraImg from "@/assets/proflipp-logo-camera.png";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    storitve: [
      { label: t('nav.weddings'), href: "/poroke" },
      { label: t('nav.events'), href: "/dogodki" },
      { label: t('nav.families'), href: "/druzine" },
      { label: t('nav.newborns'), href: "/novorojencki" },
      { label: t('nav.travels'), href: "/potovanja" },
    ],
    informacije: [
      { label: t('nav.about'), href: "/o-nas" },
      { label: t('nav.contact'), href: "/kontakt" },
    ],
    pravno: [
      { label: t('footer.terms'), href: "/splosni-pogoji" },
      { label: t('footer.privacy'), href: "/politika-zasebnosti" },
      { label: t('footer.cookies'), href: "/piskotki" },
      { label: t('footer.copyright'), href: "/avtorske-pravice" },
    ],
  };

  return (
    <footer className="bg-[#000000] text-white">
      <div className="container-wide py-10 md:py-14 px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
              <img 
                src={proflippLogoCameraImg} 
                alt="PROFLIPP - We Capture Emotions" 
                className="h-32 md:h-40 lg:h-52 w-auto object-contain"
              />
            </Link>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/proflippcom/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/proflippfotovideo/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="mailto:info@proflipp.com" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">{t('footer.services')}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.storitve.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-gold transition-colors text-sm md:text-base">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">{t('footer.info')}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.informacije.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-gold transition-colors text-sm md:text-base">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">{t('footer.contact')}</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="tel:+38668169430" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm md:text-base">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span>+386 68 169 430</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@proflipp.com" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm md:text-base">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="break-all">info@proflipp.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs md:text-sm text-center md:text-left">© {new Date().getFullYear()} PROFLIPP. {t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.pravno.map((link) => (
              <Link key={link.href} to={link.href} className="text-white/40 text-xs md:text-sm hover:text-white transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
