import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const posts = [
  {
    slug: "/blog/koliko-stane-porocni-fotograf-slovenija-2026",
    title: "Koliko stane poročni fotograf v Sloveniji (2026 vodič)",
    excerpt: "Cene, kaj vključujejo paketi in kako izbrati pravega poročnega fotografa za vašo poroko v Sloveniji.",
  },
  {
    slug: "/blog/wedding-photographer-austria-price-guide-2026",
    title: "Wedding Photographer Austria Price Guide (2026)",
    excerpt: "Average prices, what's included and how to choose the right wedding photographer for your day in Austria.",
  },
  {
    slug: "/blog/najlepse-porocne-lokacije-slovenija-avstrija",
    title: "Najlepše poročne lokacije v Sloveniji in Avstriji",
    excerpt: "Bled, Bohinj, Hallstatt, Dunaj in več – ideje za destination wedding v Sloveniji in Avstriji.",
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
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container-wide">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Nasveti in vodiči o poročni fotografiji v Sloveniji, Avstriji in po Evropi.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="group block p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  Preberi več →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
