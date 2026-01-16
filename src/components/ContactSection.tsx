import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Send, X } from "lucide-react";
import { toast } from "sonner";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "", location: "", date: "", guests: "", duration: "", video: false, notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim().slice(0, 100);
    const location = formData.location.trim().slice(0, 100);
    const date = formData.date.trim().slice(0, 20);
    const guests = formData.guests.trim().slice(0, 10);
    const duration = formData.duration.trim().slice(0, 10);
    const notes = formData.notes.trim().slice(0, 500);
    const video = formData.video ? "Da" : "Ne";
    
    // Build mailto link with encoded data
    const subject = encodeURIComponent(`Povpraševanje za fotografiranje - ${name}`);
    const body = encodeURIComponent(
      `Ime: ${name}\n` +
      `Kraj: ${location}\n` +
      `Datum: ${date}\n` +
      `Število ljudi: ${guests}\n` +
      `Trajanje (ure): ${duration}\n` +
      `Želim snemanje: ${video}\n` +
      `Ostale želje:\n${notes}`
    );
    
    window.location.href = `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
    
    toast.success("Odpiramo e-poštni odjemalec...");
    onClose();
    setFormData({ name: "", location: "", date: "", guests: "", duration: "", video: false, notes: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-semibold text-foreground">Pošlji povpraševanje</h3>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Ime in priimek *</label>
              <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Janez Novak" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Kraj *</label>
                <Input required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Ljubljana" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Datum *</label>
                <Input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Število ljudi</label>
                <Input type="number" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} placeholder="50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Trajanje (ure)</label>
                <Input value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="8" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox id="video" checked={formData.video} onCheckedChange={(checked) => setFormData({ ...formData, video: checked as boolean })} />
              <label htmlFor="video" className="text-sm font-medium text-foreground cursor-pointer">Želim tudi snemanje</label>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Ostale želje</label>
              <Textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Dodatne informacije, posebne želje..." rows={4} />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4" />
              Pošlji povpraševanje
            </Button>

            <p className="text-xs text-muted-foreground text-center">Z oddajo obrazca potrjujete, da ste prebrali splošne pogoje.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

function QuickContactForm() {
  const [quickForm, setQuickForm] = useState({ name: "", email: "", message: "" });
  
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate and sanitize inputs
    const name = quickForm.name.trim().slice(0, 100);
    const email = quickForm.email.trim().slice(0, 255);
    const message = quickForm.message.trim().slice(0, 500);
    
    // Build mailto link with encoded data
    const subject = encodeURIComponent(`Sporočilo s spletne strani - ${name}`);
    const body = encodeURIComponent(
      `Ime: ${name}\n` +
      `E-pošta: ${email}\n\n` +
      `Sporočilo:\n${message}`
    );
    
    window.location.href = `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
    
    toast.success("Odpiramo e-poštni odjemalec...");
    setQuickForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleQuickSubmit} className="space-y-4">
      <Input 
        placeholder="Vaše ime" 
        required 
        maxLength={100}
        value={quickForm.name}
        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
      />
      <Input 
        type="email" 
        placeholder="E-pošta" 
        required 
        maxLength={255}
        value={quickForm.email}
        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
      />
      <Textarea 
        placeholder="Vaše sporočilo..." 
        rows={4} 
        required 
        maxLength={500}
        value={quickForm.message}
        onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
      />
      <Button type="submit" className="w-full" size="lg">Pošlji sporočilo</Button>
    </form>
  );
}

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="kontakt" className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">Kontaktirajte nas</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                Imate radi sproščenost, spontanost in dobro energijo? Točno takšne 
                fotografije tudi ustvarjamo. Pošljite nam povpraševanje — odgovorimo 
                hitro, uskladimo želje in predlagamo najboljšo rešitev glede na vaš dogodek.
              </p>

              <div className="space-y-4 mb-8">
                <a href="tel:+38668169430" className="flex items-center gap-4 text-primary-foreground hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Telefon</div>
                    <div className="font-medium">+386 68 169 430</div>
                  </div>
                </a>

                <a href="mailto:info@proflipp.com" className="flex items-center gap-4 text-primary-foreground hover:text-gold transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">E-pošta</div>
                    <div className="font-medium">info@proflipp.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-primary-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Lokacija</div>
                    <div className="font-medium">Slovenija</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light shadow-soft" onClick={() => setIsModalOpen(true)}>
                <Send className="w-5 h-5" />
                Pošlji povpraševanje
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Hitro sporočilo</h3>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
