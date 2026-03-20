import Combi from "./pages/Combi";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Poroke from "./pages/Poroke";
import Krst from "./pages/Krst";
import Dogodki from "./pages/Dogodki";
import { Potovanja } from "./pages/ServicePages";
import Novorojencki from "./pages/Novorojencki";
import { Druzine } from "./pages/Druzine";
import Studio from "./pages/Studio";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import SplosniPogoji from "./pages/SplosniPogoji";
import Piskotki from "./pages/Piskotki";
import PolitikaZasebnosti from "./pages/PolitikaZasebnosti";
import AvtorskePravice from "./pages/AvtorskePravice";
import Mnenja from "./pages/Mnenja";
import NotFound from "./pages/NotFound";
import WeddingAustria from "./pages/WeddingAustria";
import Portfolio from "./pages/Portfolio";
import WeddingPackages from "./pages/WeddingPackages";
import CouplesPhotography from "./pages/CouplesPhotography";
import DestinationWedding from "./pages/DestinationWedding";
import WeddingVideography from "./pages/WeddingVideography";

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
