import {
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  ChevronRight,
  Clock3,
} from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500" />

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 shadow-xl">
                <HeartPulse size={32} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  MEDİSU
                </h2>

                <p className="text-slate-400">
                  Evde Sağlık Hizmetleri
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              İstanbul genelinde evde hemşire, serum, pansuman,
              kan alma, yaşlı bakımı ve profesyonel evde sağlık
              hizmetleri sunuyoruz.
            </p>

          </div>

          {/* Hizmetler */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Hizmetlerimiz
            </h3>

            <div className="space-y-4">

              {[
                ["Evde Hemşire", "evde-hemsire"],
                ["Evde Serum", "evde-serum"],
                ["Pansuman", "pansuman"],
                ["Kan Alma", "kan-alma"],
                ["Yaşlı Bakımı", "yasli-bakimi"],
                ["Hasta Bakımı", "hasta-bakimi"],
              ].map(([title, slug]) => (
                <Link
                  key={slug}
                  href={`/hizmetler/${slug}`}
                  className="flex items-center gap-2 text-slate-300 transition hover:translate-x-2 hover:text-cyan-400"
                >
                  <ChevronRight size={18} />
                  {title}
                </Link>
              ))}

            </div>

          </div>

          {/* Hızlı Menü */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Hızlı Menü
            </h3>

            <div className="space-y-4">

              <a href="#about" className="flex items-center gap-2 text-slate-300 transition hover:translate-x-2 hover:text-cyan-400">
                <ChevronRight size={18} />
                Hakkımızda
              </a>

              <a href="#services" className="flex items-center gap-2 text-slate-300 transition hover:translate-x-2 hover:text-cyan-400">
                <ChevronRight size={18} />
                Hizmetler
              </a>

              <a href="#contact" className="flex items-center gap-2 text-slate-300 transition hover:translate-x-2 hover:text-cyan-400">
                <ChevronRight size={18} />
                İletişim
              </a>

              <a href="#faq" className="flex items-center gap-2 text-slate-300 transition hover:translate-x-2 hover:text-cyan-400">
                <ChevronRight size={18} />
                Sık Sorulan Sorular
              </a>

            </div>

          </div>

          {/* İletişim */}

          <div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-700 to-sky-700 p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                7/24 Destek
              </h3>

              <p className="mt-4 leading-7 text-cyan-100">
                İstanbul genelinde evde sağlık hizmetleri için bize dilediğiniz zaman ulaşabilirsiniz.
              </p>

              <div className="mt-8 space-y-5">

                <a
                  href="tel:+905396952989"
                  className="flex items-center gap-3"
                >
                  <Phone size={18} />
                  0539 695 29 89
                </a>

                <a
                  href="mailto:medisu.saglikhizmetleri@gmail.com"
                  className="flex items-center gap-3 break-all"
                >
                  <Mail size={18} />
                  medisu.saglikhizmetleri@gmail.com
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  İstanbul / Türkiye
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} />
                  7 Gün • 24 Saat
                </div>

              </div>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-2xl bg-white px-7 py-3 font-semibold text-cyan-700 transition hover:bg-slate-100"
              >
                WhatsApp'tan Yaz
              </a>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} MEDİSU Evde Sağlık Hizmetleri
            </p>

            <p>
              Tüm Hakları Saklıdır.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
