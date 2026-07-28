import postCover1 from "@/assets/hero-slide-12.webp";
import postCover2 from "@/assets/hero-slide-7.webp";
import postCover3 from "@/assets/hero-slide-22.webp";
import postCover4 from "@/assets/hero-slide-5.webp";
import postCover5 from "@/assets/hero-slide-9.webp";
import postCover6 from "@/assets/hero-slide-15.webp";
import postCover7 from "@/assets/hero-slide-8.webp";
import postCover8 from "@/assets/hero-slide-11.webp";
import postCover9 from "@/assets/hero-slide-14.webp";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  alt: string;
  datePublished?: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "/blog/popoln-porocni-casovnik",
    title: "Popoln poročni časovnik: Kako načrtovati dan brez stresa",
    excerpt: "Idealna časovnica z zlato uro, getting ready in 30-minutnimi buffer trenutki – za sproščen poročni dan.",
    cover: postCover7,
    alt: "Popoln poročni časovnik – zlata ura in premium portreti",
    datePublished: "2026-05-10",
  },
  {
    slug: "/blog/kako-premagati-tremo-pred-objektivom",
    title: "Kako premagati tremo pred objektivom",
    excerpt: "Zakaj je »nefotogeničnost« mit, magija reportaže in kako predporočno fotkanje ubije tremo.",
    cover: postCover8,
    alt: "Sproščene poročne fotografije – nasveti pred objektivom",
    datePublished: "2026-05-15",
  },
  {
    slug: "/blog/porocni-video-investicija",
    title: "Poročni video: Investicija, ki je ne boste obžalovali",
    excerpt: "70 % parov obžaluje, da niso najeli videografa. Kaj video ujame, česar fotografija ne more.",
    cover: postCover9,
    alt: "Poročni video – kinematska poročna produkcija",
    datePublished: "2026-05-20",
  },
  {
    slug: "/blog/early-bird-porocni-fotograf-2027",
    title: "Zakaj rezervirati poročnega fotografa za 2027 že danes?",
    excerpt: "Early Bird 2027: gratis predporočno fotografiranje ali 10 % popust za rezervacije, sklenjene do konca leta 2026.",
    cover: postCover4,
    alt: "Early Bird 2027 – rezervacija poročnega fotografa",
  },
  {
    slug: "/blog/zadnji-prosti-termini-poroka-2026",
    title: "Zadnja priložnost: še nekaj prostih terminov 2026",
    excerpt: "Še nekaj sobot je prostih v sezoni 2026. Izkoristite 10 % popust na vse poročne pakete.",
    cover: postCover5,
    alt: "Zadnji prosti termini za poroko 2026",
  },
  {
    slug: "/blog/flippgold-ali-flippdiamant-porocni-paket",
    title: "FLIPPgold ali FLIPPdiamant: kateri paket izbrati?",
    excerpt: "Primerjava paketov FLIPPgold (8 ur) in FLIPPdiamant (12 ur) – kateri najbolje ustreza vajini zgodbi.",
    cover: postCover6,
    alt: "Poročna paketa FLIPPgold in FLIPPdiamant",
  },
  {
    slug: "/blog/koliko-stane-porocni-fotograf-slovenija-2026",
    title: "Koliko stane poročni fotograf v Sloveniji (2026 vodič)",
    excerpt: "Cene, kaj vključujejo paketi in kako izbrati pravega poročnega fotografa za vašo poroko v Sloveniji.",
    cover: postCover1,
    alt: "Poročni fotograf Slovenija – cenik 2026",
  },
  {
    slug: "/blog/wedding-photographer-austria-price-guide-2026",
    title: "Wedding Photographer Austria Price Guide (2026)",
    excerpt: "Average prices, what's included and how to choose the right wedding photographer for your day in Austria.",
    cover: postCover2,
    alt: "Wedding photographer Austria – price guide 2026",
  },
  {
    slug: "/blog/najlepse-porocne-lokacije-slovenija-avstrija",
    title: "Najlepše poročne lokacije v Sloveniji in Avstriji",
    excerpt: "Bled, Bohinj, Hallstatt, Dunaj in več – ideje za destination wedding v Sloveniji in Avstriji.",
    cover: postCover3,
    alt: "Najlepše poročne lokacije Slovenija Avstrija – Bled, Hallstatt",
  },
];

export function getRelatedPosts(currentSlug: string, count = 3): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
