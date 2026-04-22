import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-22.webp";

const NajlepsePorocneLokacije = () => {
  return (
    <>
      <SEOHead
        title="Najlepše poročne lokacije v Sloveniji in Avstriji | Proflipp"
        description="Bled, Bohinj, Hallstatt, Dunaj in več – odkrijte najlepše poročne lokacije v Sloveniji in Avstriji za vaš destination wedding."
        canonical="/blog/najlepse-porocne-lokacije-slovenija-avstrija"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Najlepše poročne lokacije Slovenija Avstrija – Bled, Hallstatt, Dunaj"
        title="Najlepše poročne lokacije v Sloveniji in Avstriji"
        intro="Izbira lokacije je eden najlepših delov načrtovanja poroke. Slovenija in Avstrija ponujata čudovite lokacije za nepozaben poročni dan."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Najlepše lokacije v Sloveniji</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bled</li>
          <li>Bohinj</li>
          <li>Ljubljana grad</li>
          <li>vinorodne pokrajine</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Najlepše lokacije v Avstriji</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dunaj (Vienna)</li>
          <li>Hallstatt</li>
          <li>Salzburške Alpe</li>
          <li>jezera v Avstriji</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Zakaj izbrati destination wedding</h2>
        <p>Destination poroke omogočajo unikatno izkušnjo in čudovito kuliso.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Nasveti za izbiro lokacije</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>dostopnost</li>
          <li>svetloba</li>
          <li>vreme</li>
          <li>število gostov</li>
        </ul>
      </BlogPostLayout>
    </>
  );
};

export default NajlepsePorocneLokacije;
