import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Star } from "lucide-react";

const reviews = [
  { name: "Aljaž K.", date: "18. Okt. 2025", text: "Več kot pričakovano za dobro ceno. Tako, da priporočam drugim tudi." },
  { name: "Denis Š.", date: "09. Okt. 2025", text: "Vse super! 😉" },
  { name: "Renata K.", date: "07. Okt. 2025", text: "Imeli smo zelo kvalitetno profesionalno, prijazno in sproščeno photo shooting za našo poroko!" },
  { name: "Katja Č.", date: "12. Jul. 2025", text: "Zelo profesionalno opravljeno fotografiranje. Fotografije zelo lepe, prav tako on line fotobook." },
  { name: "Martina B.", date: "02. Dec. 2024", text: "Vse kot je bilo dogovorjeno, brez problema pride tudi v kraj, ki je oddaljen. Hiter, odziven, zelo prijazen, fotografije in delo čudovito. Vsekakor se bomo stopili v stik." },
  { name: "Damjana N.", date: "02. Dec. 2024", text: "Zelo prijazen, prilagodljiv glede časa in lokacije, definitivno ga še pokličemo!" },
  { name: "Sonja O.", date: "13. Okt. 2024", text: "Profesionalen pristop, prilagodljiv, prijazen... Zelo kvalitetna in hitra izdelava, ter ugodna cena. S fotografijami sem zelo zadovoljna, zato ga priporočam vsem." },
  { name: "Bencakmateja", date: "27. Sep. 2024", text: "Odličen fotograf, res mu vse pohvale. Ujame vse trenutke, malenkosti, detajle, tudi tiste spontane momente in naredi sliko odlično, unikatno, polno čustev, res perfektno, kapo dol. Njegov odnos je zelo sproščen, prilagodljiv, profesionalen. Z veseljem je podaljšal ure fotografiranja in to kar brezplačno in brez kakršnegakoli problema. Najini poroki je res dodal tisto piko na i in nama dal (slike in foto knjiga) najlepše spomine za vedno. Matej iskrena ti hvala 🤗" },
  { name: "Danijel J.", date: "23. Sep. 2024", text: "Želim se iskreno zahvaliti našemu fantastičnemu fotografu, ki je s svojo neverjetno energijo in profesionalnostjo zajel vsak trenutek dogodka na najlepši možen način. Njegov občutek za detajle, sposobnost ujeti prave trenutke in ustvariti sproščeno vzdušje med fotografiranjem je preprosto navdušujoča. Fotografije so dih jemajoče, polne življenja in čustev, kar nas bo še dolgo spominjalo na ta poseben dan. Hvala za odlično delo, predanost in umetniški pristop, ki ga je vložil v vsako sliko!" },
  { name: "Blaž M.", date: "23. Avg. 2024", text: "Odličen fotograf in super fotografije res izvrstno!" },
  { name: "Aljaž N.", date: "28. Jan. 2024", text: "Zabavno super sproščeno po ugodni ceni." },
  { name: "Danilo M.", date: "28. Jan. 2024", text: "Fotografiranje je bilo ultra zabavno, izbral je kreativne fotografije." },
  { name: "Sandra L.", date: "01. Jan. 2024", text: "Moja izkušnja z ponudnikom je bila izvrstna. Prijaznost, prilagodljivost, znajo ljudi prepričati, da se fotografirajo tudi tisti, ki ne marajo slikanja. Cena je ugodna. Sproščeno vzdušje in kvalitetna izvedba." },
  { name: "Danijela J.", date: "17. Okt. 2023", text: "Vse je potekalo tako, kot smo se dogovorili. Upoštevale so se tudi vse želje, ki smo jih imeli kot naročniki." },
  { name: "Mihaela Š.", date: "14. Jul. 2023", text: "Zelo lepe slike, fotograf zelo prijazen in ustrežljivi. Narejeno tako kot smo se dogovorili. Priporočam!!" },
  { name: "Ramadanisarah60", date: "19. Apr. 2023", text: "Najbolj všeč mi je bil odnos. Zelo prijazen. In zelo hitra zredba slikic (3 dni) 👍🏽🥰 top" },
  { name: "Larisa K.", date: "07. Mar. 2023", text: "Bila sva zelo zadovoljna s fotografijami in s prilagodljivostjo fotografa, izpolnil nama je vse želje na poroki." },
  { name: "Sanja K.", date: "06. Mar. 2023", text: "Vse je bilo super." },
  { name: "Zorica D.", date: "06. Mar. 2023", text: "Profesionalne fotografije..." },
  { name: "Bojan D.", date: "12. Feb. 2020", text: "Top zadeva." },
  { name: "Tomislav G.", date: "12. Feb. 2020", text: "Zelo lepe in kakavostne slike. Uredi vse po željah. Zelo dobra cena na ponudba glede usluge." },
  { name: "Davorin R.", date: "12. Feb. 2020", text: "Zelo dobra." },
  { name: "Mojca N.", date: "12. Feb. 2020", text: "Ekipa PROFLIPP je res izvrstna. Ni napetosti, ni kompliciranja. Skozi fotografiranje so nas vodili, skupaj smo se smejali. Bili so del našega dogodka in z veseljem so ostali tudi po dogovorjeni uri. Vsekakor jih priporočam!" },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Mnenja() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Mnenja strank</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3 mb-6">
              Kaj pravijo naše stranke
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-2xl font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">({reviews.length} ocen)</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ocene z Omisli.si
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <StarRating />
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
