import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-sky-800 to-cyan-600 px-10 py-16 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold">
            Sağlığınızı Ertelemeyin
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
            Evde hemşire, serum, pansuman ve diğer sağlık hizmetleri için
            hemen bizimle iletişime geçin.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="tel:+905396952989"
              className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-sky-800 transition hover:scale-105"
            >
              <Phone size={20} />
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-sky-800"
            >
              <ArrowRight size={20} />
              WhatsApp'tan Yaz
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
