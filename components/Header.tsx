"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-sky-900 text-white lg:block">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={16}
                className="text-emerald-400"
              />
              <span>Sağlık Bakanlığı Standartlarına Uygun Hizmet</span>
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={16}
                fill="currentColor"
                className="text-amber-400"
              />
              <span>Hasta Memnuniyeti Odaklı</span>
            </div>

          </div>

          <div className="rounded-full bg-emerald-500 px-4 py-1 font-semibold">
            7/24 Destek
          </div>

        </div>

      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-xl backdrop-blur-2xl"
            : "bg-white/90 backdrop-blur-xl"
        }`}
      >

        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >

          <Link
            href="/"
            className="transition hover:scale-105"
          >

            <Image
  src="/logo.svg"
  alt="MEDİSU Logo"
  width={210}
  height={56}
  priority
  style={{
    width: "210px",
    height: "auto",
  }}
/>


          </Link>

          <nav className="hidden items-center gap-10 lg:flex">

            <a href="#top" className="font-medium hover:text-cyan-700">
              Ana Sayfa
            </a>

            <a href="#services" className="font-medium hover:text-cyan-700">
              Hizmetler
            </a>

            <a href="#about" className="font-medium hover:text-cyan-700">
              Hakkımızda
            </a>

            <a href="#contact" className="font-medium hover:text-cyan-700">
              İletişim
            </a>

          </nav>

          <div className="flex items-center gap-3">            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-2xl border border-emerald-500 px-5 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
            >
              <MessageCircle size={19} />
              WhatsApp
            </a>

            <a
              href="tel:+905396952989"
              className="hidden lg:flex items-center gap-2 rounded-2xl bg-sky-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-900"
            >
              <Phone size={18} />
              0539 695 29 89
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[600px] border-t border-slate-200"
              : "max-h-0"
          }`}
        >

          <nav className="space-y-2 bg-white p-6">

            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-slate-100"
            >
              Ana Sayfa
            </a>

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-slate-100"
            >
              Hizmetler
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-slate-100"
            >
              Hakkımızda
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-slate-100"
            >
              İletişim
            </a>            <div className="mt-6 rounded-3xl bg-slate-50 p-5">

              <div className="mb-4 flex items-center gap-2">

                <ShieldCheck
                  size={18}
                  className="text-emerald-600"
                />

                <span className="font-semibold text-slate-800">
                  Neden MEDİSU?
                </span>

              </div>

              <div className="space-y-3 text-sm text-slate-600">

                <div>✓ Uzman Sağlık Personeli</div>

                <div>✓ İstanbul Geneli Hizmet</div>

                <div>✓ Aynı Gün Hizmet İmkanı</div>

                <div>✓ 7/24 Destek</div>

                <div>✓ Steril ve Güvenli Uygulama</div>

              </div>

            </div>

            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
            >
              <MessageCircle size={20} />
              WhatsApp'tan Yaz
            </a>

            <a
              href="tel:+905396952989"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-sky-800 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-900"
            >
              <Phone size={20} />
              Hemen Ara
            </a>

          </nav>

        </div>

      </header>
    </>
  );
}

