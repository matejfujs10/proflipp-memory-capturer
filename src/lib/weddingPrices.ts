// Central source of current wedding selling prices (EUR). Change prices only here.
export const photoPrices: Record<string, number> = {
  "FLIPP MINI": 480,
  "FLIPP INTIMATE": 960,
  "FLIPP LOVE STORY": 1520,
  "FLIPP SIGNATURE": 1680,
  "FLIPP FULL STORY": 2240,
};

export type VideoKey = "essential" | "premium" | "signature";

export const videoPackages: { key: VideoKey; name: string; hours: number; price: number; recommended?: boolean }[] = [
  { key: "essential", name: "VIDEO ESSENTIAL", hours: 8, price: 1650 },
  { key: "premium", name: "VIDEO PREMIUM", hours: 10, price: 2100, recommended: true },
  { key: "signature", name: "VIDEO SIGNATURE", hours: 12, price: 2700 },
];

export const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/proflippfotovideo/reviews/?id=100063611798778&sk=reviews";

export const formatPrice = (n: number) => `${n.toLocaleString("de-DE")} €`;
