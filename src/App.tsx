import Combi from "./pages/Combi";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/combi" element={<Combi />} />
            <Route path="/poroke" element={<Poroke />} />
            <Route path="/krst" element={<Krst />} />
            <Route path="/dogodki" element={<Dogodki />} />
            <Route path="/druzine" element={<Druzine />} />
            <Route path="/novorojencki" element={<Novorojencki />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/potovanja" element={<Potovanja />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/splosni-pogoji" element={<SplosniPogoji />} />
            <Route path="/piskotki" element={<Piskotki />} />
            <Route path="/politika-zasebnosti" element={<PolitikaZasebnosti />} />
            <Route path="/avtorske-pravice" element={<AvtorskePravice />} />
            <Route path="/mnenja" element={<Mnenja />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
