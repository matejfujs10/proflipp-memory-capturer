import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://proflipp.com/og-image.jpg",
  ogType = "website",
}: SEOHeadProps) {
  const url = canonical ? `https://proflipp.com${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      {/* Hreflang alternates for multilingual SEO */}
      {url && <link rel="alternate" hrefLang="sl" href={url} />}
      {url && <link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />}
      {url && <link rel="alternate" hrefLang="de" href={`${url}?lang=de`} />}
      {url && <link rel="alternate" hrefLang="hr" href={`${url}?lang=hr`} />}
      {url && <link rel="alternate" hrefLang="x-default" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
