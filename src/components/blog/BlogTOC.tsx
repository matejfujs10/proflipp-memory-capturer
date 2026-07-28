interface TOCItem {
  id: string;
  label: string;
}

interface BlogTOCProps {
  items: TOCItem[];
  title?: string;
}

export function BlogTOC({ items, title = "Vsebina članka" }: BlogTOCProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label={title}
      className="my-12 md:my-16 bg-card/50 border border-border/60 p-6 md:p-8 rounded-sm"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
        {title}
      </p>
      <ol className="space-y-2 text-sm md:text-base font-light">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3">
            <span className="text-primary/60 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
