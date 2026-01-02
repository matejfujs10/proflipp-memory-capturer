import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { label: t('nav.about'), href: "/o-nas" },
    { label: t('nav.weddings'), href: "/poroke" },
    { label: t('nav.baptism') || "Krst", href: "/krst" },
    { label: t('nav.events'), href: "/dogodki" },
    { label: t('nav.families'), href: "/druzine" },
    { label: t('nav.newborns'), href: "/novorojencki" },
    { label: t('nav.travels'), href: "/potovanja" },
    { label: t('nav.reviews'), href: "/mnenja" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <div className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">PROFLIPP</span>
              <span className="text-[10px] md:text-xs text-muted-foreground italic tracking-wide">We Create Emotions!</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 mr-2">
              <button
                onClick={() => setLanguage('si')}
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded transition-colors",
                  language === 'si' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                SI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded transition-colors",
                  language === 'en' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded transition-colors",
                  language === 'de' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                DE
              </button>
            </div>

            {/* Social Icons */}
            <a
              href="https://www.instagram.com/proflippcom/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/proflippfotovideo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <Button asChild>
              <Link to="/kontakt">{t('nav.contact')}</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 px-4 py-3">
                <button
                  onClick={() => setLanguage('si')}
                  className={cn(
                    "text-sm font-medium px-3 py-1 rounded transition-colors",
                    language === 'si' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground border border-border"
                  )}
                >
                  SI
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "text-sm font-medium px-3 py-1 rounded transition-colors",
                    language === 'en' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground border border-border"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={cn(
                    "text-sm font-medium px-3 py-1 rounded transition-colors",
                    language === 'de' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground border border-border"
                  )}
                >
                  DE
                </button>
              </div>
              <div className="pt-4 px-4">
                <Button asChild className="w-full">
                  <Link to="/kontakt" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
