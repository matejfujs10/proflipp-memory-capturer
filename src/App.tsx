import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Eagerly load the homepage for fastest FCP
import Index from "./pages/Index";

// Lazy load all other pages
const Poroke = lazy(() => import("./pages/Poroke"));
const Krst = lazy(() => import("./pages/Krst"));
const Dogodki = lazy(() => import("./pages/Dogodki"));
const Potovanja = lazy(() => import("./pages/ServicePages").then(m => ({ default: m.Potovanja })));
const Novorojencki = lazy(() => import("./pages/Novorojencki"));
const Druzine = lazy(() => import("./pages/Druzine").then(m => ({ default: m.Druzine })));
const Studio = lazy(() => import("./pages/Studio"));
const ONas = lazy(() => import("./pages/ONas"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const SplosniPogoji = lazy(() => import("./pages/SplosniPogoji"));
const Piskotki = lazy(() => import("./pages/Piskotki"));
const PolitikaZasebnosti = lazy(() => import("./pages/PolitikaZasebnosti"));
const AvtorskePravice = lazy(() => import("./pages/AvtorskePravice"));
const Mnenja = lazy(() => import("./pages/Mnenja"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WeddingAustria = lazy(() => import("./pages/WeddingAustria"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const WeddingPackages = lazy(() => import("./pages/WeddingPackages"));
const CouplesPhotography = lazy(() => import("./pages/CouplesPhotography"));
const DestinationWedding = lazy(() => import("./pages/DestinationWedding"));
const WeddingVideography = lazy(() => import("./pages/WeddingVideography"));
const Combi = lazy(() => import("./pages/Combi"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Primary SEO-friendly routes */}
            <Route path="/" element={<Index />} />
            <Route path="/wedding-photography-slovenia" element={<Poroke />} />
            <Route path="/wedding-photographer-austria" element={<WeddingAustria />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/wedding-photography-packages" element={<WeddingPackages />} />
            <Route path="/about" element={<ONas />} />
            <Route path="/contact" element={<Kontakt />} />
            <Route path="/family-photography" element={<Druzine />} />
            <Route path="/event-photography" element={<Dogodki />} />
            <Route path="/couples-photography" element={<CouplesPhotography />} />
            <Route path="/destination-wedding-photography" element={<DestinationWedding />} />
            <Route path="/wedding-videography" element={<WeddingVideography />} />
            <Route path="/newborn-photography" element={<Novorojencki />} />
            <Route path="/baptism-photography" element={<Krst />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/reviews" element={<Mnenja />} />

            {/* Legacy Slovenian routes → redirect to new SEO slugs */}
            <Route path="/poroke" element={<Navigate to="/wedding-photography-slovenia" replace />} />
            <Route path="/dogodki" element={<Navigate to="/event-photography" replace />} />
            <Route path="/druzine" element={<Navigate to="/family-photography" replace />} />
            <Route path="/novorojencki" element={<Navigate to="/newborn-photography" replace />} />
            <Route path="/krst" element={<Navigate to="/baptism-photography" replace />} />
            <Route path="/o-nas" element={<Navigate to="/about" replace />} />
            <Route path="/kontakt" element={<Navigate to="/contact" replace />} />
            <Route path="/mnenja" element={<Navigate to="/reviews" replace />} />
            <Route path="/potovanja" element={<Potovanja />} />
            <Route path="/combi" element={<Combi />} />

            {/* Legal pages (keep original slugs) */}
            <Route path="/splosni-pogoji" element={<SplosniPogoji />} />
            <Route path="/piskotki" element={<Piskotki />} />
            <Route path="/politika-zasebnosti" element={<PolitikaZasebnosti />} />
            <Route path="/avtorske-pravice" element={<AvtorskePravice />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
