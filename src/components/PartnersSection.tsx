export function PartnersSection() {
  // Placeholder partner logos - will be replaced with actual partner logos
  const partners = [
    { name: "Partner 1", placeholder: true },
    { name: "Partner 2", placeholder: true },
    { name: "Partner 3", placeholder: true },
    { name: "Partner 4", placeholder: true },
    { name: "Partner 5", placeholder: true },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container-wide">
        <p className="text-xs tracking-wider uppercase text-muted-foreground text-center mb-8">
          PARTNERJI
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-24 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs"
            >
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
