import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Camera, Users, Phone, Video, Gift, FileText, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();

  const features = [
    { icon: Heart, title: t('about.passion'), description: t('about.passion_desc') },
    { icon: Camera, title: t('about.experience'), description: t('about.experience_desc') },
    { icon: Users, title: t('about.approach'), description: t('about.approach_desc') },
  ];

  const moreItems = [
    t('about.more_1'),
    t('about.more_2'),
    t('about.more_3'),
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img src={weddingVeil} alt={t('about.title')} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <motion.div 
          className="container-wide relative z-10 pt-16 md:pt-20 pb-24 md:pb-32 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">{t('about.tagline')}</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-card mt-3 mb-4 md:mb-6">{t('about.title')}</h1>
          <p className="text-card/90 text-base md:text-lg max-w-2xl leading-relaxed">{t('about.slogan')}</p>
          
          <a 
            href="tel:+38668169430" 
            className="inline-flex items-center gap-3 mt-6 px-5 md:px-6 py-3 bg-gold/90 hover:bg-gold text-foreground rounded-lg transition-colors font-medium text-sm md:text-base"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="tracking-wide">+386 68 169 430</span>
          </a>
        </motion.div>
      </section>

      {/* Uvod */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6">
                {t('about.intro_heading')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {t('about.intro_p1')}
              </p>
              <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                {t('about.intro_p2')}
              </p>
              
              <motion.div 
                className="grid grid-cols-3 gap-3 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((item, index) => (
                  <motion.div key={index} className="text-center" variants={fadeInUp}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
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
              <img src={weddingBridge} alt="Proflipp fotografija" className="rounded-xl md:rounded-2xl shadow-card w-full" />
              <motion.div 
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card rounded-xl p-3 md:p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t('features.weddings')}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galerija fotografij */}
      <section className="section-padding bg-cream">
        <div className="container-wide px-4">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3 md:mb-4">
              {t('about.gallery_title')}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t('about.gallery_desc')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg md:rounded-xl"
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
        <div className="container-wide px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Camera className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </motion.div>
              <span className="text-xl md:text-2xl font-display">+</span>
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Video className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </motion.div>
            </div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6">
              {t('about.video_title')}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {t('about.video_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Več kot pričakujete */}
      <section className="section-padding bg-cream">
        <div className="container-wide px-4">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3 md:mb-4">
              {t('about.more_title')}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t('about.more_desc')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {moreItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-xl p-4 md:p-6 text-center shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm md:text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personalizirana ponudba */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <FileText className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6">
                {t('about.offer_title')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                {t('about.offer_p1')}
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t('about.offer_p2')}
              </p>
            </motion.div>
            <motion.div 
              className="bg-cream rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">{t('about.why_title')}</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {t('about.why_desc')}
              </p>
              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {t('about.why_p1')}
              </p>
              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {t('about.why_p2')}
              </p>
              <p className="text-foreground font-medium text-sm md:text-base">
                {t('about.why_p3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mnenja strank */}
      <section className="section-padding bg-cream">
        <motion.div 
          className="container-wide text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6">
            {t('about.reviews_title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            {t('about.reviews_desc')}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/mnenja"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium text-sm md:text-base"
            >
              {t('about.reviews_cta')}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <motion.div 
          className="container-wide text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 md:mb-6">
            {t('about.cta_title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            {t('about.cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <motion.a 
              href="mailto:info@proflipp.com"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors font-medium text-sm md:text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('about.cta_email')}
            </motion.a>
            <motion.a 
              href="tel:+38668169430"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors font-medium text-sm md:text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              +386 68 169 430
            </motion.a>
          </div>
          <motion.p 
            className="mt-6 md:mt-8 text-lg md:text-xl font-display text-foreground"
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