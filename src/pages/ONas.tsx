import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Camera, Users, Phone, Video, Gift, FileText, Star } from "lucide-react";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingBridge from "@/assets/wedding-bridge.jpg";
import gasilci1 from "@/assets/gasilci-1.jpg";
import gasilci2 from "@/assets/gasilci-2.jpg";
import gasilci3 from "@/assets/gasilci-3.jpg";
import gasilci4 from "@/assets/gasilci-4.jpg";
import gasilci5 from "@/assets/gasilci-5.jpg";
import gasilci6 from "@/assets/gasilci-6.jpg";
import gasilci7 from "@/assets/gasilci-7.jpg";
import forestland1 from "@/assets/forestland-1.jpg";
import forestland2 from "@/assets/forestland-2.jpg";
import forestland3 from "@/assets/forestland-3.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const galleryImages = [
  gasilci1, gasilci2, gasilci3, gasilci4, gasilci5, gasilci6, gasilci7,
  forestland1, forestland2, forestland3
];

export default function ONas() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingVeil} alt="O nas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <motion.div 
          className="container-wide relative z-10 pt-20 pb-32"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Proflipp</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-card mt-3 mb-6">O nas</h1>
          <p className="text-card/90 text-lg max-w-2xl leading-relaxed">We Create Emotions!</p>
          
          <a 
            href="tel:+38668169430" 
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gold/90 hover:bg-gold text-foreground rounded-lg transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            <span className="tracking-wide">+386 68 169 430</span>
          </a>
        </motion.div>
      </section>

      {/* Uvod */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                PROFLIPP ni le fotografija. PROFLIPP so občutki, zgodbe in spomini, ki ostanejo.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Smo kreativna ekipa z jasno vizijo: ujeti pristna čustva, energijo trenutka in drobne detajle, 
                ki skupaj ustvarijo nepozabno zgodbo. Verjamemo, da najlepše fotografije nastanejo takrat, 
                ko ste sproščeni, samozavestni in točno takšni, kot ste.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ukvarjamo se s poročnim, družinskim, fotografiranjem dogodkov in poslovnim fotografiranjem. 
                Naš pristop je profesionalen, a hkrati topel in človeški. Vsako fotografiranje je vodeno, 
                premišljeno in prilagojeno vam – brez stresa, brez prisile, z občutkom za estetiko, 
                svetlobo in potek dogodka.
              </p>
              
              <motion.div 
                className="grid sm:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Heart, title: "Strast", description: "Ljubezen do fotografije" },
                  { icon: Camera, title: "Izkušnje", description: "15+ let v panogi" },
                  { icon: Users, title: "Pristop", description: "Sproščen in naraven" },
                ].map((item, index) => (
                  <motion.div key={index} className="text-center" variants={fadeInUp}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <img src={weddingBridge} alt="Proflipp fotografija" className="rounded-2xl shadow-card" />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Porok</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galerija fotografij */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Naši ujeti trenutki
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Poglejte nekaj utrinkov z naših projektov in dogodkov
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="aspect-square overflow-hidden rounded-xl"
                variants={fadeInUp}
              >
                <img 
                  src={image} 
                  alt={`Galerija ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fotografija + Video */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Camera className="w-10 h-10 text-primary" />
              </motion.div>
              <span className="text-2xl font-display">+</span>
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Video className="w-10 h-10 text-primary" />
              </motion.div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Fotografija + video = popolna zgodba
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pri vsakem fotografiranju ali dogodku vam lahko ustvarimo tudi kratke video posnetke, 
              ki so danes izjemno priljubljeni. Gre za dinamične, čustvene videe in reels-e, 
              ki odlično dopolnijo fotografije in omogočajo, da trenutke doživite znova – 
              v gibanju, zvoku in emociji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Več kot pričakujete */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Več kot pričakujete
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Naše stranke ne dobijo le fotografij. Dobijo celostno izkušnjo.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Skrbno izbrane bonuse in darila",
              "Dodatne vsebine, kot so slideshowi in kratke video zgodbe",
              "Oseben pristop in prilagoditve po meri",
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-xl p-6 text-center shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personalizirana ponudba */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Personalizirana ponudba in pogodba
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vsak dogodek je drugačen, zato za vsako sodelovanje pripravimo personalizirano ponudbo, 
                prilagojeno vašim željam, idejam in obsegu dogodka.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Za popolno varnost in jasnost sodelovanja vam po potrebi pripravimo tudi pogodbo, 
                kjer so vsi pogoji jasno in transparentno dogovorjeni.
              </p>
            </motion.div>
            <motion.div 
              className="bg-cream rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Zakaj PROFLIPP?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ker združujemo ustvarjalnost, izkušnje in zanesljivost.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                V več kot 15 letih dela v fotografiji in sodelovanja na številnih porokah ter različnih 
                projektih smo pridobili znanje, ki presega zgolj fotografiranje. Zato vam lahko svetujemo 
                tudi pri organizaciji samega dogodka ali poroke – pri časovnici, poteku dneva, izbiri lokacij, 
                svetlobe in pomembnih detajlih.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To svetovanje je za naše stranke popolnoma brezplačno, v kolikor se odločite za sodelovanje z nami.
              </p>
              <p className="text-foreground font-medium">
                V vseh teh letih nismo odpovedali niti enega projekta, kar našim naročnikom daje 
                dodatno zaupanje in občutek varnosti.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mnenja strank */}
      <section className="section-padding bg-cream">
        <motion.div 
          className="container-wide text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Mnenja naših strank
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Kakovost našega dela, naš pristop in vse, kar opisujemo zgoraj, potrjujejo tudi mnenja 
            naših zadovoljnih strank. Njihove izkušnje so najboljše zagotovilo, da boste v pravih rokah.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/mnenja"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium"
            >
              Oglejte si mnenja strank
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <motion.div 
          className="container-wide text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Vabljeni k sodelovanju
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Z veseljem bomo ustvarili zgodbo tudi za vas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="mailto:info@proflipp.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Pišite nam na info@proflipp.com
            </motion.a>
            <motion.a 
              href="tel:+38668169430"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              +386 68 169 430
            </motion.a>
          </div>
          <motion.p 
            className="mt-8 text-xl font-display text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            We Create Emotions!
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
