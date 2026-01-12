import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GiftVoucherSectionProps {
  onReserve: () => void;
  title?: string;
}

// Gift Voucher Component
const GiftVoucher = () => (
  <motion.div 
    className="mt-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="bg-gradient-to-br from-primary via-primary to-sky-dark rounded-2xl p-1 shadow-glow max-w-md mx-auto">
      <div className="bg-foreground rounded-xl p-6 relative overflow-hidden">
        {/* Yellow decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
        <div className="absolute top-0 left-0 h-full w-1 bg-accent" />
        <div className="absolute top-0 right-0 h-full w-1 bg-accent" />
        
        {/* Diagonal yellow lines */}
        <div className="absolute top-4 left-4 w-16 h-0.5 bg-accent rotate-45 origin-left" />
        <div className="absolute top-4 right-4 w-16 h-0.5 bg-accent -rotate-45 origin-right" />
        <div className="absolute bottom-4 left-4 w-16 h-0.5 bg-accent -rotate-45 origin-left" />
        <div className="absolute bottom-4 right-4 w-16 h-0.5 bg-accent rotate-45 origin-right" />
        
        <div className="text-center relative z-10">
          <div className="mb-3">
            <span className="text-primary font-display text-2xl font-bold tracking-wider">PROFLIPP</span>
            <p className="text-card text-xs italic mt-1">We Create Emotions!</p>
          </div>
          
          <div className="border-y border-accent/50 py-4 my-4">
            <h3 className="text-card font-display text-xl md:text-2xl font-semibold mb-2">
              DARILNI BON
            </h3>
            <p className="text-card/80 text-sm">
              Za profesionalno fotografiranje
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <Gift className="w-8 h-8 text-primary" />
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <p className="text-card/70 text-xs max-w-xs mx-auto">
            Vrednost: _________________ €
          </p>
          <p className="text-card/70 text-xs mt-2">
            Veljavnost: 12 mesecev od izdaje
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export function GiftVoucherSection({ onReserve, title = "Rezervirajte termin" }: GiftVoucherSectionProps) {
  return (
    <motion.div 
      className="mt-12 pt-12 border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Reserve Button */}
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Ste pripravljeni? Kontaktirajte nas in rezervirajte svoj termin.
        </p>
        <Button size="lg" onClick={onReserve}>
          Rezervirajte termin
        </Button>
      </div>

      {/* Gift Voucher */}
      <div className="text-center">
        <div className="p-6 bg-primary/10 rounded-xl border border-primary/30 max-w-lg mx-auto">
          <Gift className="w-10 h-10 text-primary mx-auto mb-3" />
          <h4 className="font-display text-lg font-semibold text-foreground mb-2">
            Darilni bon
          </h4>
          <p className="text-muted-foreground text-sm">
            Možnost nakupa darilnega bona, ki ga lahko podarite prijateljem, znancem ali sorodnikom 
            ob različnih priložnostih – rojstni dan, obletnica, poroka, novoletno darilo ali kaj povsem drugega!
          </p>
          <GiftVoucher />
        </div>
      </div>
    </motion.div>
  );
}
