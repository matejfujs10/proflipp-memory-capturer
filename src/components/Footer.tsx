import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import proflippLogoFooterImg from "@/assets/proflipp-logo-footer.png";

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
    <footer className="bg-foreground text-card">
      <div className="container-wide section-padding px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
              <img 
                src={proflippLogoFooterImg} 
                alt="PROFLIPP - Ujamemo čustva" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
              />
            </Link>
            <p className="text-card/70 mt-4 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
              Ujamemo čustva, smeh, solze, dotike – da bodo vaši spomini večni!
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://www.instagram.com/proflippcom/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/proflippfotovideo/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="mailto:info@proflipp.com" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-3 md:mb-4 text-sm md:text-base">{t('footer.services')}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.storitve.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors text-sm md:text-base">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-3 md:mb-4 text-sm md:text-base">{t('footer.info')}</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.informacije.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors text-sm md:text-base">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-3 md:mb-4 text-sm md:text-base">{t('footer.contact')}</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="tel:+38668169430" className="flex items-center gap-2 text-card/70 hover:text-gold transition-colors text-sm md:text-base">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span>+386 68 169 430</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@proflipp.com" className="flex items-center gap-2 text-card/70 hover:text-gold transition-colors text-sm md:text-base">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="break-all">info@proflipp.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-xs md:text-sm text-center md:text-left">© {new Date().getFullYear()} PROFLIPP. {t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.pravno.map((link) => (
              <Link key={link.href} to={link.href} className="text-card/50 text-xs md:text-sm hover:text-card transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}