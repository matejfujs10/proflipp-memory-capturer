import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const NajlepsePorocneLokacije = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Najlepše poročne lokacije v Sloveniji in Avstriji | Proflipp"
        description="Bled, Bohinj, Hallstatt, Dunaj in več – odkrijte najlepše poročne lokacije v Sloveniji in Avstriji za vaš destination wedding."
        canonical="/blog/najlepse-porocne-lokacije-slovenija-avstrija"
      />
      <Navigation />
      <main className="pt-24 md:pt-28 pb-16">
        <article className="container-wide max-w-3xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">← Blog</Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Najlepše poročne lokacije v Sloveniji in Avstriji
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Izbira lokacije je eden najlepših delov načrtovanja poroke. Slovenija in Avstrija ponujata čudovite lokacije za nepozaben poročni dan.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Najlepše lokacije v Sloveniji</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Bled</li>
            <li>Bohinj</li>
            <li>Ljubljana grad</li>
            <li>vinorodne pokrajine</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Najlepše lokacije v Avstriji</h2>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Dunaj (Vienna)</li>
            <li>Hallstatt</li>
            <li>Salzburške Alpe</li>
            <li>jezera v Avstriji</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Zakaj izbrati destination wedding</h2>
          <p className="mb-6">
            Destination poroke omogočajo unikatno izkušnjo in čudovito kuliso.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Nasveti za izbiro lokacije</h2>
          <ul className="list-disc pl-6 mb-10 space-y-1">
            <li>dostopnost</li>
            <li>svetloba</li>
            <li>vreme</li>
            <li>število gostov</li>
          </ul>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">Kontaktirajte nas za fotografiranje na vaši sanjski lokaciji.</p>
            <Button asChild size="lg">
              <Link to="/contact">Kontaktirajte nas</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NajlepsePorocneLokacije;
