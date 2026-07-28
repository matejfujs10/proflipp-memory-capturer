import { Link } from "react-router-dom";
import { getRelatedPosts } from "@/lib/blogPosts";

interface RelatedPostsProps {
  currentSlug: string;
  title?: string;
  count?: number;
}

export function RelatedPosts({ currentSlug, title = "Sorodni članki", count = 3 }: RelatedPostsProps) {
  const related = getRelatedPosts(currentSlug, count);
  if (related.length === 0) return null;

  return (
    <section className="my-16 md:my-20 pt-12 border-t border-border/50">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Nadaljujte branje</p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {related.map((post) => (
          <Link key={post.slug} to={post.slug} className="group block">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-5 bg-muted">
              <img
                src={post.cover}
                alt={post.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg md:text-xl font-light tracking-tight leading-snug group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <span className="inline-block mt-3 text-xs tracking-[0.2em] uppercase text-primary border-b border-primary/40 pb-1">
              Preberi več
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
