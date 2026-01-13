import { useState, useEffect } from "react";
import { Star, Facebook, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Facebook reviews extracted from screenshots
const facebookReviews = [
  { name: "Tomislav Gomboc", text: "Ich hatte das Vergnügen, von diesem Fotografen bei der Masterverleihung umfassend begleitet zu werden - von Anfang an bis zum gesamten Abend. Schon vor der Verleihung war er aufmerksam, professionell und hat mir das Gefühl gegeben, gut betreut zu sein." },
  { name: "Aljaž Koštric", text: "Zelo dober fotograf. Sva ga imela za poroko in krst. Slike so zelo vrhunske, dobro organizira kje je najbolše se fotografirati da uzame lepo ozadje. Priporočam ga, ker je res vrhunski fotograf." },
  { name: "Kim Koštric", text: "Najboljši fotograf! 😊 Poročne slike so vrhunske, samo fotografiranje je bilo res sproščeno in res lepo vodeno. Dobila sva več slik kot sva pričakovala in seveda tudi video. Glede na to, da sva imela res grooooomno slik, so bile urejene v zelo kratkem času. Priporočam!! 😊" },
  { name: "Anita Peklenk Klepec", text: "Imeli smo družinsko fotografiranje in smo zelo zadovoljni. Fotografije so top, te ki so črno-bele pa še posebaj. Na slike smo čakali en teden, res jih niso pričakovali tako hitro, zelo so lepe." },
  { name: "Cristina Kische", text: "Mit Herz und vollem Einsatz 📷💎 Freundlich, respektvoll und kompetent 🎵 Die Fotos sind qualitativ hochwertig und haben einen eigenen Charakter und Geschichte - wie jeder Moment individuell." },
  { name: "Katja Cernjak-Egger", text: "Hvala za odlično delo, precudovite fotografije in profesionalnost. Zelo zadovoljna 🤩" },
  { name: "Alexander Egger", text: "We are very satisfied and we got a load of great pictures! Would we recommend? ...of course 👌👌👌" },
  { name: "Tina Vodušek Kolman", text: "Zelo potrpežljiv fotograf, ne-vsiljiv, porofesionalen, prisluhne željam strank, si zanje vzame čas, se zlije z družbo, fotografije so hotro pri tebi,....😍😍😍😍same pohvale. Za najem pa ne potrebuješ hitrega kredita 😄" },
  { name: "Skupina Prestiž", text: "Zanesljiv, potrpežljiv in dobrovoljen fotograf, ki si ga vsakdor želi. 🤙" },
  { name: "Simon Novak", text: "Odlična izkušnja! Dobili hitro prost termin, profesionalen odnos, domačnost, odprt za vse predloge, res toplo priporočam!" },
  { name: "Damjana Kunej", text: "Zelo projazen, prilagodljiv, fotografije so super. Definitivno ga še pokličemo 🙂" },
  { name: "Staš Boroš", text: "Super družba s popolnimi fotografijami. Priporočam 💯💥😎" },
  { name: "Mateja Bencak", text: "Odličen fotograf, res mu vse pohvale. Ujame vse trenutke, malenkosti, detajle, tudi tiste spontane momente in naredi sliko odlično, unikatno, polno čustev, res perfektno, kapo dol." },
  { name: "Danijel Josić", text: "Želim se iskreno zahvaliti našemu fantastičnemu fotografu, ki je s svojo neverjetno energijo in profesionalnostjo zajel vsak trenutek dogodka na najlepši možen način." },
  { name: "Davor Rojko", text: "Kvalitetno, ugodno in sproščeno fotografiranje v družbi osebe, katera se prilagodi potrebam ter raznim situacijam. Ob tem ne manjka dobre volje ter igrivosti." },
  { name: "Inga Inx", text: "Najboljši fotograf 😍 V svoji objektiv ujame ključne in zabavne trenutke ter naredi top fotografijo 🦋 Je unikaten - zato priporočam vsakomur, da ga ulovi in si iz fotografij večno zgodbo za spomin naredi ❣️‼️😉" },
  { name: "Ana Breznik", text: "Hvala za prekrasne fotke!! Definitivno priporočam naprej in se že veselim sodelovanja! 🤗😍 Super fotograf in res krasne slike! Toplo priporočam vsakomur, ki želi najpomembnejše trenutke imeti najlepše ovekovečene. Hvala Matej ter sigurno se slikamo znova! 👍😊" },
  { name: "Matic Skarlovnik", text: "Z Matejem sva skupaj snemala in fotografirala poroko. Iz prve roke sem videl, kako zelo prilagodljiv je in kako vedno išče rešitve, da ustreže željam strank. Z njim se je mogoče vse dogovoriti, tudi če pride do nepričakovanih sprememb." },
  { name: "Blaž Mernik", text: "Hvala Proflipu za odlične fotografije! Toplo priporočam res izvrstno." },
  { name: "Mernik Anja", text: "Super fotograf, neopazen.. zajame vse spontane trenutke ki so pomembni. Odličen odnos pred in po poroki." },
  { name: "Klemen Bizjak", text: "Za nase Drustvo ljubiteljev domace zganjekuhe je delal reportazo festivala. Natancen, tocen in zelo profesionalen. Tako kot smo se dogovorili. Priporocam! Hvala Matej!" },
];

// Omisli.si reviews
const omisliReviews = [
  { name: "Aljaž K.", text: "Več kot pričakovano za dobro ceno. Tako, da priporočam drugim tudi." },
  { name: "Denis Š.", text: "Vse super! 😉" },
  { name: "Renata K.", text: "Imeli smo zelo kvalitetno profesionalno, prijazno in sproščeno photo shooting za našo poroko!" },
  { name: "Katja Č.", text: "Zelo profesionalno opravljeno fotografiranje. Fotografije zelo lepe, prav tako on line fotobook." },
  { name: "Martina B.", text: "Vse kot je bilo dogovorjeno, brez problema pride tudi v kraj, ki je oddaljen. Hiter, odziven, zelo prijazen, fotografije in delo čudovito." },
  { name: "Damjana N.", text: "Zelo prijazen, prilagodljiv glede časa in lokacije, definitivno ga še pokličemo!" },
  { name: "Sonja O.", text: "Profesionalen pristop, prilagodljiv, prijazen... Zelo kvalitetna in hitra izdelava, ter ugodna cena. S fotografijami sem zelo zadovoljna." },
  { name: "Bencakmateja", text: "Odličen fotograf, res mu vse pohvale. Ujame vse trenutke, malenkosti, detajle, tudi tiste spontane momente in naredi sliko odlično." },
  { name: "Danijel J.", text: "Želim se iskreno zahvaliti našemu fantastičnemu fotografu, ki je s svojo neverjetno energijo in profesionalnostjo zajel vsak trenutek." },
  { name: "Blaž M.", text: "Odličen fotograf in super fotografije res izvrstno!" },
  { name: "Sandra L.", text: "Moja izkušnja z ponudnikom je bila izvrstna. Prijaznost, prilagodljivost, znajo ljudi prepričati, da se fotografirajo tudi tisti, ki ne marajo slikanja." },
  { name: "Mihaela Š.", text: "Zelo lepe slike, fotograf zelo prijazen in ustrežljivi. Narejeno tako kot smo se dogovorili. Priporočam!!" },
  { name: "Mojca N.", text: "Ekipa PROFLIPP je res izvrstna. Ni napetosti, ni kompliciranja. Skozi fotografiranje so nas vodili, skupaj smo se smejali." },
];

const allReviews = [...facebookReviews, ...omisliReviews];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % allReviews.length;
      reviews.push({ ...allReviews[index], index });
    }
    return reviews;
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Mnenja strank
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Kaj pravijo naše stranke
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">({allReviews.length}+ ocen)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${(currentIndex % allReviews.length) * 0}px)` }}
          >
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {getVisibleReviews().map((review, idx) => (
                <div
                  key={`${review.name}-${idx}`}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-500 animate-fade-in"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed line-clamp-4">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.min(10, Math.ceil(allReviews.length / 3)) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / 3) === i 
                    ? "bg-primary w-6" 
                    : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA to see all reviews */}
        <div className="text-center mt-10">
          <Link
            to="/mnenja"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Vsa mnenja</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { facebookReviews, omisliReviews };
