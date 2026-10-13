export const DISCOUNT = 0.2;

export const formatEur = (n: number) => n.toLocaleString("de-DE");

export const offerPrice = (regular: number) => Math.round(regular * (1 - DISCOUNT));

export const commonServices = [
  "En profesionalni fotograf za izbrano število zaporednih ur.",
  "Kreativno in sproščeno vodeno fotografiranje para na izbranih lokacijah.",
  "Posamične in skupinske fotografije ter spontani trenutki z vajinimi najbližjimi.",
  "Skrbno izbrane fotografije v visoki ločljivosti.",
  "Profesionalna obdelava vseh predanih fotografij: barve, svetloba in izbor črno-belih posnetkov.",
  "Spletna fotoknjiga oziroma galerija za ogled in deljenje z družino in prijatelji.",
  "Predaja fotografij prek spletne povezave ali na USB-ključku, po dogovoru.",
  "Uvodni posvet po telefonu ali videoklicu.",
  "Dogovor o poteku fotografiranja in ključnih trenutkih.",
  "Fotografije za zasebno uporabo, tisk in deljenje.",
  "Pogodba z jasno določenim obsegom storitve in rokom predaje.",
  "Možnost Wedding Content Video – doplačilo po dogovoru.",
];

export interface WeddingPhotoPackage {
  name: string;
  hours: number;
  duration: string;
  regular: number;
  description: string;
  extras: string[];
  note?: string;
  recommended?: boolean;
}

export const weddingPhotoPackages: WeddingPhotoPackage[] = [
  {
    name: "FLIPP MINI",
    hours: 2,
    duration: "2 uri",
    regular: 600,
    description: "Za intimni obred in najpomembnejše trenutke.",
    extras: [
      "Fotografiranje civilnega ali drugega obreda.",
      "Čestitke in spontani odzivi najbližjih.",
      "Krajše vodeno fotografiranje para.",
      "Skupinske in družinske fotografije.",
      "Detajli prstanov, šopka in poročnega videza.",
    ],
    note: "Vse poteka znotraj dogovorjenih dveh ur.",
  },
  {
    name: "FLIPP INTIMATE",
    hours: 4,
    duration: "4 ure",
    regular: 1200,
    description: "Za obred, vajine portrete in sproščeno druženje.",
    extras: [
      "Prihod gostov in fotografiranje obreda.",
      "Čestitke, sprejem in druženje po obredu.",
      "Več časa za ustvarjalne portrete para.",
      "Fotografije družine, prijateljev in prič.",
      "Detajli lokacije in dekoracije.",
    ],
    note: "Potek je prilagojen izbranemu štiriurnemu terminu.",
  },
  {
    name: "FLIPP LOVE STORY",
    hours: 6,
    duration: "6 ur",
    regular: 1900,
    description: "Za povezano zgodbo od izbranih priprav do začetka praznovanja.",
    extras: [
      "Fotografiranje priprav ali prihoda gostov, glede na urnik.",
      "Obred, čestitke in druženje.",
      "Vodeno fotografiranje para.",
      "Družinski portreti, priče in skupinske fotografije.",
      "Fotografiranje pogostitve, dekoracije in vzdušja.",
      "Pomoč pri razporeditvi fotografiranja para in skupin.",
    ],
    note: "Navedene dogodke zajamemo, kadar potekajo znotraj šesturnega termina.",
  },
  {
    name: "FLIPP SIGNATURE",
    hours: 8,
    duration: "8 ur",
    regular: 2100,
    description: "Za celovito zgodbo ključnih trenutkov vajinega poročnega dne.",
    recommended: true,
    extras: [
      "Priprave in prvi pogled – First Look, če ga načrtujeta.",
      "Obred, čestitke in sprejem.",
      "Ustvarjalno fotografiranje para na dogovorjenih lokacijah.",
      "Portreti družine, prijateljev in prič.",
      "Detajli oblačil, prstanov, šopka, dekoracije in prizorišča.",
      "Govori, torta ali prvi ples, kadar so znotraj izbranega termina.",
      "Kratko dodatno fotografiranje para ob večerni svetlobi, če dopuščata vreme in urnik.",
    ],
  },
  {
    name: "FLIPP FULL STORY",
    hours: 12,
    duration: "12 ur",
    regular: 2800,
    description: "Od priprav do plesa – vajina zgodba z več prostora za vse drobne trenutke.",
    extras: [
      "Obsežna reportaža od priprav do večernega praznovanja znotraj 12 ur.",
      "Prvi pogled – First Look, če ga načrtujeta.",
      "Obred, čestitke in druženje.",
      "Fotografiranje para ter družinskih in prijateljskih skupin.",
      "Detajli prizorišča, dekoracije in poročnih dodatkov.",
      "Govori, razrez torte, prvi ples in zabava, če potekajo znotraj termina.",
      "Večerni portreti ali fotografiranje ob sončnem zahodu, glede na razmere.",
      "Več časa za spontane trenutke in dogajanje med gosti.",
    ],
  },
];
