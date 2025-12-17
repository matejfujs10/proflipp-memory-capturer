import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/proflipp-logo.png";

const footerLinks = {
  storitve: [
    { label: "Poroke", href: "/poroke" },
    { label: "Dogodki", href: "/dogodki" },
    { label: "Družine", href: "/druzine" },
    { label: "Novorojenčki", href: "/novorojencki" },
    { label: "Potovanja", href: "/potovanja" },
  ],
  informacije: [
    { label: "O nas", href: "/o-nas" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  pravno: [
    { label: "Splošni pogoji", href: "/splosni-pogoji" },
    { label: "Politika zasebnosti", href: "/politika-zasebnosti" },
    { label: "Piškotki", href: "/piskotki" },
    { label: "Avtorske pravice", href: "/avtorske-pravice" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={logo} alt="PROFLIPP" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-card/70 mt-4 mb-6 max-w-sm">
              We Create Emotions! Ujamemo čustva, smeh, solze, dotike – da bodo vaši spomini večni.
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
            <h4 className="font-semibold text-card mb-4">Storitve</h4>
            <ul className="space-y-2">
              {footerLinks.storitve.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Informacije</h4>
            <ul className="space-y-2">
              {footerLinks.informacije.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-card/70 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card mb-4">Kontakt</h4>
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
          <p className="text-card/50 text-sm">© {new Date().getFullYear()} Proflipp. Vse pravice pridržane.</p>
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
