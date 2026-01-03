import { useEffect, useState } from "react";

import partnerBledFilm from "@/assets/partner-bled-film.jpg";
import partnerFurmil from "@/assets/partner-furmil.jpg";
import partnerLaksmi from "@/assets/partner-laksmi.jpg";
import partnerFestivalZganja from "@/assets/partner-festival-zganja.jpg";
import partnerNetmedia from "@/assets/partner-netmedia.jpg";
import partnerCoriana from "@/assets/partner-coriana.jpg";
import partnerPerunika from "@/assets/partner-perunika.png";
import partnerRclTeh from "@/assets/partner-rcl-teh.jpg";
import partnerSobotainfo from "@/assets/partner-sobotainfo.png";
import partnerUniMaribor from "@/assets/partner-uni-maribor.png";
import partnerProflippRent from "@/assets/partner-proflipp-rent.jpg";
import partnerLaVita from "@/assets/partner-lavita.png";
import partnerGasilci from "@/assets/partner-gasilci.jpg";
import partnerMartur from "@/assets/partner-martur.jpg";
import partnerMaliRaj from "@/assets/partner-mali-raj.jpg";
import partnerMaratonec from "@/assets/partner-maratonec.png";

const partners = [
  { name: "Bled Film Festival", logo: partnerBledFilm },
  { name: "Furmil", logo: partnerFurmil },
  { name: "Lakšmi Akademija za ženske", logo: partnerLaksmi },
  { name: "Mednarodni Festival Žganih Pijač", logo: partnerFestivalZganja },
  { name: "Netmedia", logo: partnerNetmedia },
  { name: "Coriana", logo: partnerCoriana },
  { name: "Pizzerija Perunika", logo: partnerPerunika },
  { name: "RCL TEH d.o.o", logo: partnerRclTeh },
  { name: "Sobotainfo", logo: partnerSobotainfo },
  { name: "Univerza v Mariboru", logo: partnerUniMaribor },
  { name: "Proflipp Rent Kombi & Camper", logo: partnerProflippRent },
  { name: "La Vita Terme 3000", logo: partnerLaVita },
  { name: "Gasilska Zveza Slovenije", logo: partnerGasilci },
  { name: "Kozmetika Martur", logo: partnerMartur },
  { name: "Kmetija Mali Raj", logo: partnerMaliRaj },
  { name: "SF Team Maratonec", logo: partnerMaratonec },
];

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-wide">
        <h3 className="text-2xl md:text-3xl font-display text-center mb-12 text-foreground">
          Zaupajo nam
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
          {getVisiblePartners().map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-3 bg-background rounded-lg shadow-sm transition-all duration-500 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-4" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-lg md:text-xl text-center text-muted-foreground font-medium">
          Sodeluj z nami tudi ti!
        </p>
      </div>
    </section>
  );
}
