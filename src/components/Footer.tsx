import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    storitve: [
      { label: t('nav.weddings'), href: "/poroke" },
      { label: t('nav.events'), href: "/eventi" },
      { label: t('nav.families'), href: "/druzine" },
      { label: t('nav.newborns'), href: "/novorojencki" },
      { label: t('nav.travels'), href: "/potovanja" },
    ],
    informacije: [
      { label: t('nav.about'), href: "/o-nas" },
      { label: t('nav.contact'), href: "/kontakt" },
    ],
    pravno: [
      { label: "Splošni pogoji", href: "/splosni-pogoji" },
      { label: "Politika zasebnosti", href: "/politika-zasebnosti" },
      { label: "Piškotki", href: "/piskotki" },
      { label: "Avtorske pravice", href: "/avtorske-pravice" },
    ],
  };

  return (
    <footer className="bg-foreground text-card">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold text-card tracking-tight">PROFLIPP</span>
            </Link>
            <p className="text-card/70 mt-4 mb-6 max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/proflippcom/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/proflippfotovideo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@proflipp.com" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.storitve.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">{t('footer.info')}</h4>
            <ul className="space-y-2">
              {footerLinks.informacije.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+38668169430" className="flex items-center gap-2 text-card/70 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" />
                  +386 68 169 430
                </a>
              </li>
              <li>
                <a href="mailto:info@proflipp.com" className="flex items-center gap-2 text-card/70 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  info@proflipp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">© {new Date().getFullYear()} Proflipp. {t('footer.rights')}</p>
          <div className="flex gap-6">
            {footerLinks.pravno.map((link) => (
              <Link key={link.href} to={link.href} className="text-card/50 text-sm hover:text-card transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
