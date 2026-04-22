import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import heroImage from "@/assets/hero-slide-1.webp";
import postCover1 from "@/assets/hero-slide-12.webp";
import postCover2 from "@/assets/hero-slide-7.webp";
import postCover3 from "@/assets/hero-slide-22.webp";

const posts = [
  {
    slug: "/blog/koliko-stane-porocni-fotograf-slovenija-2026",
    title: "Koliko stane poročni fotograf v Sloveniji (2026 vodič)",
    excerpt:
      "Cene, kaj vključujejo paketi in kako izbrati pravega poročnega fotografa za vašo poroko v Sloveniji.",
    cover: postCover1,
    alt: "Poročni fotograf Slovenija – cenik 2026",
  },
  {
    slug: "/blog/wedding-photographer-austria-price-guide-2026",
    title: "Wedding Photographer Austria Price Guide (2026)",
    excerpt:
      "Average prices, what's included and how to choose the right wedding photographer for your day in Austria.",
    cover: postCover2,
    alt: "Wedding photographer Austria – price guide 2026",
  },
  {
    slug: "/blog/najlepse-porocne-lokacije-slovenija-avstrija",
    title: "Najlepše poročne lokacije v Sloveniji in Avstriji",
    excerpt:
      "Bled, Bohinj, Hallstatt, Dunaj in več – ideje za destination wedding v Sloveniji in Avstriji.",
    cover: postCover3,
    alt: "Najlepše poročne lokacije Slovenija Avstrija – Bled, Hallstatt",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog | Poročna fotografija – nasveti, cene in lokacije | Proflipp"
        description="Blog o poročni fotografiji: cene poročnih fotografov v Sloveniji in Avstriji, najlepše poročne lokacije in nasveti za destination weddings."
        canonical="/blog"
      />
      <Navigation />

      <main>
        {/* Editorial full-width hero */}
        <section className="relative w-full h-[55vh] md:h-[70vh] mt-16 md:mt-20 overflow-hidden">
          <img
            src={heroImage}
            alt="Poročna fotografija – Proflipp blog"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
              Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
              Blog
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="container-wide py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              Blog o poročni fotografiji, nasvetih za poroko in najlepših lokacijah v Sloveniji in Avstriji. Tukaj najdete vodiče, ideje in inspiracijo za vaš poročni dan.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Delimo izkušnje kot profesionalni poročni fotograf v Sloveniji in Avstriji ter pomagamo parom pri izbiri fotografa, lokacije in načrtovanju poroke.
            </p>
          </div>
        </section>

        {/* Editorial post grid – no boxes, no borders */}
        <section className="container-wide pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="group block"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-muted">
                  <img
                    src={post.cover}
                    alt={post.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-light tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary border-b border-primary/40 pb-1 group-hover:border-primary transition-colors">
                  Preberi več
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
