import { SEOHead } from "@/components/SEOHead";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import heroImage from "@/assets/hero-slide-7.webp";

const WeddingPhotographerAustria2026 = () => {
  return (
    <>
      <SEOHead
        title="Wedding Photographer Austria Price Guide (2026) | Proflipp"
        description="Average wedding photographer prices in Austria for 2026, what's included in packages and how to choose the right photographer for your wedding."
        canonical="/blog/wedding-photographer-austria-price-guide-2026"
      />
      <BlogPostLayout
        heroImage={heroImage}
        heroAlt="Wedding photographer Austria – price guide 2026"
        title="Wedding Photographer Austria Price Guide (2026)"
        intro="Finding the right wedding photographer in Austria is essential for capturing your special day. Prices vary depending on experience, style and coverage."
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Average wedding photographer price in Austria</h2>
        <p>Wedding photography in Austria typically ranges from €1200 to €4000. High-end destination wedding photographers may charge even more.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">What is included</h2>
        <p>Most packages include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>full day coverage</li>
          <li>edited photos</li>
          <li>online gallery</li>
          <li>storytelling approach</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">How to choose a wedding photographer in Austria</h2>
        <p>Important factors:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>photography style</li>
          <li>experience with weddings</li>
          <li>ability to capture natural moments</li>
          <li>communication</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">Why invest in a professional photographer</h2>
        <p>Your wedding photos are memories for life. Investing in quality ensures timeless results.</p>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-12 mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">How early should I book?</h3>
            <p className="text-muted-foreground">Ideally 9–12 months in advance.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do photographers travel across Austria?</h3>
            <p className="text-muted-foreground">Yes, most destination wedding photographers cover all regions.</p>
          </div>
        </div>
      </BlogPostLayout>
    </>
  );
};

export default WeddingPhotographerAustria2026;
