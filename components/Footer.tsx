import {
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  ChevronRight,
  Clock3,
} from "lucide-react";

import Link from "next/link";

const services = [
  ["Evde Hemşire", "evde-hemsire"],
  ["Evde Serum", "evde-serum"],
  ["Pansuman", "pansuman"],
  ["Kan Alma", "kan-alma"],
  ["Yaşlı Bakımı", "yasli-bakimi"],
  ["Hasta Bakımı", "hasta-bakimi"],
  ["Glutatyon Tedavisi", "glutatyon-tedavisi"],
  ["Pascorbin Tedavisi", "pascorbin-tedavisi"],
  ["Todavit Multivitamin", "todavit-multivitamin"],
  ["NAD+ Tedavisi", "nad-plus-tedavisi"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* MARKA */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 shadow-xl">
                <HeartPulse size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  MEDİSU
                </h2>

                <p className="text-sm text-slate-400">
                  Evde Sağlık Hizmetleri
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              İstanbul genelinde evde hemşire, serum, pansuman,
              kan alma, yaşlı bakımı ve profesyonel evde sağlık
              hizmetleri sunuyoruz.
            </p>
          </div>

          {/* HİZMETLER */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Hizmetlerimiz
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.map(([title, slug]) => (
                <Link
                  key={slug}
                  href={`/hizmetler/${slug}`}
                  className="flex items-center gap-2 text-sm text-slate-300 transition hover:translate-x-1 hover:text-cyan-400 sm:text-base"
                >
                  <ChevronRight size={17} />
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* HIZLI MENÜ */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Hızlı Menü
            </h3>

            <div className="space-y-3">
              <Link
                href="/#about"
                className="flex items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-cyan-400"
              >
                <ChevronRight size={18} />
                Hakkımızda
              </Link>

              <Link
                href="/#services"
                className="flex items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-cyan-400"
              >
                <ChevronRight size={18} />
                Hizmetler
              </Link>

              <Link
                href="/#contact"
                className="flex items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-cyan-400"
              >
                <ChevronRight size={18} />
                İletişim
              </Link>

              <Link
                href="/#faq"
                className="flex items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-cyan-400"
              >
                <ChevronRight size={18} />
                Sık Sorulan Sorular
              </Link>
            </div>
          </div>

          {/* İLETİŞİM */}
          <div>
            <div className="rounded-[28px] bg-gradient-to-br from-cyan-700 to-sky-700 p-6 shadow-xl sm:p-7">

              <h3 className="text-2xl font-bold">
                7/24 Destek
              </h3>

              <p className="mt-3 text-sm leading-7 text-cyan-100 sm:text-base">
                İstanbul genelinde evde sağlık hizmetleri için bize
                ulaşabilirsiniz.
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-base">
                <a
                  href="tel:+905396952989"
                  className="flex items-center gap-3"
                >
                  <Phone size={18} />
                  0539 695 29 89
                </a>

                <a
                  href="mailto:medisu.saglikhizmetleri@gmail.com"
                  className="flex items-start gap-3 break-all"
                >
                  <Mail size={18} className="mt-0.5 shrink-0" />
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
                className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700 transition hover:bg-slate-100"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
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
