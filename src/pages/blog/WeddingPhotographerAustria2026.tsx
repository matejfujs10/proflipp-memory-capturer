import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const WeddingPhotographerAustria2026 = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Wedding Photographer Austria Price Guide (2026) | Proflipp"
        description="Average wedding photographer prices in Austria for 2026, what's included in packages and how to choose the right photographer for your wedding."
        canonical="/blog/wedding-photographer-austria-price-guide-2026"
      />
      <Navigation />
      <main className="pt-24 md:pt-28 pb-16">
        <article className="container-wide max-w-3xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">← Blog</Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Wedding Photographer Austria Price Guide (2026)
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Finding the right wedding photographer in Austria is essential for capturing your special day. Prices vary depending on experience, style and coverage.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Average wedding photographer price in Austria</h2>
          <p className="mb-6">
            Wedding photography in Austria typically ranges from €1200 to €4000. High-end destination wedding photographers may charge even more.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">What is included</h2>
          <p className="mb-3">Most packages include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>full day coverage</li>
            <li>edited photos</li>
            <li>online gallery</li>
            <li>storytelling approach</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">How to choose a wedding photographer in Austria</h2>
          <p className="mb-3">Important factors:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>photography style</li>
            <li>experience with weddings</li>
            <li>ability to capture natural moments</li>
            <li>communication</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Why invest in a professional photographer</h2>
          <p className="mb-6">
            Your wedding photos are memories for life. Investing in quality ensures timeless results.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">FAQ</h2>
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="font-semibold mb-1">How early should I book?</h3>
              <p className="text-muted-foreground">Ideally 9–12 months in advance.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Do photographers travel across Austria?</h3>
              <p className="text-muted-foreground">Yes, most destination wedding photographers cover all regions.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">Check availability and secure your wedding date.</p>
            <Button asChild size="lg">
              <Link to="/contact">Check availability</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default WeddingPhotographerAustria2026;
