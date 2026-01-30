import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface TravelReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TravelReservationForm({ isOpen, onClose }: TravelReservationFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    travelDate: "",
    timeFrom: "",
    timeTo: "",
    additionalWishes: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Napaka",
        description: "Prosimo, da potrdite splošne pogoje.",
        variant: "destructive",
      });
      return;
    }

    // Validate and sanitize inputs
    const fullName = formData.fullName.trim().slice(0, 100);
    const travelDate = formData.travelDate.trim().slice(0, 20);
    const timeFrom = formData.timeFrom.trim().slice(0, 10);
    const timeTo = formData.timeTo.trim().slice(0, 10);
    const additionalWishes = formData.additionalWishes.trim().slice(0, 500);

    // Create mailto link with sanitized form data
    const subject = encodeURIComponent("Povpraševanje za potovalno fotografiranje");
    const body = encodeURIComponent(
      `Ime in priimek: ${fullName}\n` +
      `Datum potovanja: ${travelDate}\n` +
      `Čas: od ${timeFrom} do ${timeTo}\n` +
      `Dodatne želje: ${additionalWishes}\n\n` +
      `Splošni pogoji: Potrjeni`
    );
    
    window.location.href = `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Povpraševanje poslano!",
      description: "Odpiramo vaš email odjemalec za pošiljanje povpraševanja.",
    });
    
    onClose();
    setFormData({
      fullName: "",
      travelDate: "",
      timeFrom: "",
      timeTo: "",
      additionalWishes: "",
      termsAccepted: false,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Rezervacija potovalnega fotografiranja</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Ime in priimek *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Vaše ime in priimek"
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelDate">Datum potovanja *</Label>
            <Input
              id="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeFrom">Čas od *</Label>
              <Input
                id="timeFrom"
                type="time"
                value={formData.timeFrom}
                onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeTo">Čas do *</Label>
              <Input
                id="timeTo"
                type="time"
                value={formData.timeTo}
                onChange={(e) => setFormData({ ...formData, timeTo: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalWishes">Dodatne želje</Label>
            <Textarea
              id="additionalWishes"
              value={formData.additionalWishes}
              onChange={(e) => setFormData({ ...formData, additionalWishes: e.target.value })}
              placeholder="Opišite vaše želje, lokacijo, posebne zahteve..."
              rows={4}
              maxLength={500}
            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, termsAccepted: checked as boolean })
              }
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              Strinjam se s{" "}
              <Link to="/splosni-pogoji" className="text-primary hover:underline" target="_blank">
                splošnimi pogoji
              </Link>{" "}
              in{" "}
              <Link to="/politika-zasebnosti" className="text-primary hover:underline" target="_blank">
                politiko zasebnosti
              </Link>
              . *
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Pošlji povpraševanje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
