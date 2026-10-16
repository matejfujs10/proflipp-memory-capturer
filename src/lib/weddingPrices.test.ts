import { expect, test } from "bun:test";
import { photoPrices, videoPackages, formatPrice } from "./weddingPrices";
import { buildWeddingInquiryBody } from "./weddingInquiry";

const video = (k: string) => videoPackages.find((p) => p.key === k)!;

test("VIDEO ESSENTIAL costs exactly 1.650 €", () => expect(formatPrice(video("essential").price)).toBe("1.650 €"));
test("VIDEO PREMIUM costs exactly 2.100 €", () => expect(formatPrice(video("premium").price)).toBe("2.100 €"));
test("VIDEO SIGNATURE costs exactly 2.700 €", () => expect(formatPrice(video("signature").price)).toBe("2.700 €"));
test("photo selling prices stay unchanged", () =>
  expect(Object.values(photoPrices)).toEqual([480, 960, 1520, 1680, 2240]));
test("selected package is included in the inquiry message", () =>
  expect(buildWeddingInquiryBody({ name: "Ana", email: "a@b.si", service: "Poročni video", pkg: "VIDEO PREMIUM – 2.100 €", location: "Bled", date: "2027-06-01", notes: "" })).toContain("Izbrani paket: VIDEO PREMIUM – 2.100 €"));
