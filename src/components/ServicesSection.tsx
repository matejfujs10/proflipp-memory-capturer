import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import weddingImage from "@/assets/wedding-bridge.jpg";
import eventsImage from "@/assets/wedding-toast.jpg";
import familyImage from "@/assets/wedding-fun.jpg";

const services = [
  {
    title: "Poroke",
    description: "Pristne, vesele fotografije, ujete v najbolj pomembnih trenutkih vajinega dne.",
    image: weddingImage,
    href: "/poroke",
  },
  {
    title: "Dogodki",
    description: "Neopazna ekipa, pravi trenutek ob pravem času, profesionalne fotografije z zgodbo.",
    image: eventsImage,
    href: "/dogodki",
  },
  {
    title: "Družine",
    description: "Sproščeni sessioni za pristne spomine – vi uživate, mi ujamemo zgodbo.",
    image: familyImage,
    href: "/druzine",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Naše storitve</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Fotografija za vsak trenutek
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Od porok do družinskih portretov – ujamemo čustva, ki ostanejo za vedno.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-card mb-2">{service.title}</h3>
                <p className="text-card/80 text-sm mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Več informacij</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
