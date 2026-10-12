import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  slug: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

export function ArticleSchema({
  headline,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  authorName = "Proflipp",
}: ArticleSchemaProps) {
  const url = `https://proflipp.com${slug}`;
  const absImage = image.startsWith("http") ? image : `https://proflipp.com${image}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [absImage],
    datePublished: datePublished ?? "2026-05-01",
    dateModified: dateModified ?? datePublished ?? "2026-05-01",
    author: { "@type": "Organization", name: authorName, url: "https://proflipp.com" },
    publisher: {
      "@type": "Organization",
      name: "Proflipp",
      logo: { "@type": "ImageObject", url: "https://proflipp.com/og-image.jpg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proflipp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://proflipp.com/blog" },
      { "@type": "ListItem", position: 3, name: headline, item: url },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
}
