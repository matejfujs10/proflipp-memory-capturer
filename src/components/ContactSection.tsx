import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Send, X } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", location: "", date: "", guests: "", duration: "", video: false, notes: "", termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error(t('contact.form.terms_required'));
      return;
    }
    
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
    
    toast.success(t('contact.opening_email'));
    onClose();
    setFormData({ name: "", location: "", date: "", guests: "", duration: "", video: false, notes: "", termsAccepted: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-semibold text-foreground">{t('contact.send_inquiry')}</h3>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.name')} *</label>
              <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Janez Novak" maxLength={100} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.location')} *</label>
                <Input required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Ljubljana" maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.date')} *</label>
                <Input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.guests')}</label>
                <Input type="number" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} placeholder="50" maxLength={10} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.duration')}</label>
                <Input value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="8" maxLength={10} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox id="video" checked={formData.video} onCheckedChange={(checked) => setFormData({ ...formData, video: checked as boolean })} />
              <label htmlFor="video" className="text-sm font-medium text-foreground cursor-pointer">{t('contact.form.video')}</label>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.form.notes')}</label>
              <Textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder={t('contact.form.notes_placeholder')} rows={4} maxLength={500} />
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="terms-modal"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                className="mt-1"
              />
              <label htmlFor="terms-modal" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                {t('contact.form.terms_agree')}{" "}
                <Link to="/splosni-pogoji" className="text-primary hover:underline" target="_blank">
                  {t('contact.form.terms_link')}
                </Link>{" "}
                &{" "}
                <Link to="/politika-zasebnosti" className="text-primary hover:underline" target="_blank">
                  {t('contact.form.privacy_link')}
                </Link>
                . *
              </label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4" />
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function QuickContactForm() {
  const { t } = useLanguage();
  const [quickForm, setQuickForm] = useState({ name: "", email: "", message: "", termsAccepted: false });
  
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!quickForm.termsAccepted) {
      toast.error(t('contact.form.terms_required'));
      return;
    }
    
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
    
    toast.success(t('contact.opening_email'));
    setQuickForm({ name: "", email: "", message: "", termsAccepted: false });
  };

  return (
    <form onSubmit={handleQuickSubmit} className="space-y-4">
      <Input 
        placeholder={t('contact.your_name')} 
        required 
        maxLength={100}
        value={quickForm.name}
        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
      />
      <Input 
        type="email" 
        placeholder={t('contact.your_email')} 
        required 
        maxLength={255}
        value={quickForm.email}
        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
      />
      <Textarea 
        placeholder={t('contact.your_message')} 
        rows={4} 
        required 
        maxLength={500}
        value={quickForm.message}
        onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
      />
      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms-quick"
          checked={quickForm.termsAccepted}
          onCheckedChange={(checked) => setQuickForm({ ...quickForm, termsAccepted: checked as boolean })}
          className="mt-1"
        />
        <label htmlFor="terms-quick" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          {t('contact.form.terms_agree')}{" "}
          <Link to="/splosni-pogoji" className="text-primary hover:underline" target="_blank">
            {t('contact.form.terms_link')}
          </Link>{" "}
          &{" "}
          <Link to="/politika-zasebnosti" className="text-primary hover:underline" target="_blank">
            {t('contact.form.privacy_link')}
          </Link>
          . *
        </label>
      </div>
      <Button type="submit" className="w-full" size="lg">{t('contact.send_message')}</Button>
    </form>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="kontakt" className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">{t('contact.title')}</h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                {t('contact.description')}
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <a href="tel:+38668169430" className="flex items-center gap-3 md:gap-4 text-primary-foreground hover:text-gold transition-colors group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-primary-foreground/70">{t('contact.phone')}</div>
                    <div className="font-medium text-sm md:text-base">+386 68 169 430</div>
                  </div>
                </a>

                <a href="mailto:info@proflipp.com" className="flex items-center gap-3 md:gap-4 text-primary-foreground hover:text-gold transition-colors group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-primary-foreground/70">{t('contact.email')}</div>
                    <div className="font-medium text-sm md:text-base break-all">info@proflipp.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 text-primary-foreground">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-primary-foreground/70">{t('contact.location')}</div>
                    <div className="font-medium text-sm md:text-base">Slovenija</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light shadow-soft w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
                <Send className="w-5 h-5" />
                {t('contact.send_inquiry')}
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-5 md:p-6 lg:p-8 shadow-2xl">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">{t('contact.quick_message')}</h3>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}