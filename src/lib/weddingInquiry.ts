export interface WeddingInquiry {
  name: string; email: string; service: string; pkg: string; location: string; date: string; notes: string;
}

export function buildWeddingInquiryBody(f: WeddingInquiry) {
  return (
    `Ime: ${f.name.trim().slice(0, 100)}\n` +
    `E-pošta: ${f.email.trim().slice(0, 255)}\n` +
    `Storitev: ${f.service.trim().slice(0, 100)}\n` +
    (f.pkg.trim() ? `Izbrani paket: ${f.pkg.trim().slice(0, 100)}\n` : "") +
    `Kraj: ${f.location.trim().slice(0, 100)}\n` +
    `Datum: ${f.date.trim().slice(0, 20)}\n` +
    `Želje:\n${f.notes.trim().slice(0, 1000)}`
  );
}
