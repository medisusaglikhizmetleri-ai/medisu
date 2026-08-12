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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ÜST BİLGİ ŞERİDİ */}
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

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-lg backdrop-blur-2xl"
            : "bg-white/95 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 ${
            scrolled ? "h-[72px] lg:h-20" : "h-[78px] lg:h-24"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="MEDİSU Ana Sayfa"
            className="flex shrink-0 items-center transition duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/medisu-logo-2026.png"
              alt="MEDİSU Evde Bakım ve Sağlık Hizmetleri"
              width={260}
              height={90}
              priority
              className="h-auto w-[170px] object-contain sm:w-[190px] lg:w-[220px]"
            />
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <nav className="hidden items-center gap-9 lg:flex">
            <a
              href="#top"
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              Ana Sayfa
            </a>

            <a
              href="#services"
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              Hizmetler
            </a>

            <a
              href="#about"
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              Hakkımızda
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              İletişim
            </a>
          </nav>

          {/* SAĞ BUTONLAR */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-2xl border border-emerald-500 px-5 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white lg:flex"
            >
              <MessageCircle size={19} />
              WhatsApp
            </a>

            <a
              href="tel:+905396952989"
              className="hidden items-center gap-2 rounded-2xl bg-sky-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-900 lg:flex"
            >
              <Phone size={18} />
              0539 695 29 89
            </a>

            {/* MOBİL TELEFON */}
            <a
              href="tel:+905396952989"
              aria-label="MEDİSU'yu ara"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-800 text-white shadow-md lg:hidden"
            >
              <Phone size={20} />
            </a>

            {/* MOBİL MENÜ */}
            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
            >
              {open ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* MOBİL MENÜ İÇERİĞİ */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[700px] border-t border-slate-200"
              : "max-h-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl p-5">
            <div className="space-y-1">
              <a
                href="#top"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                Ana Sayfa
              </a>

              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                Hizmetler
              </a>

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                Hakkımızda
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                İletişim
              </a>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-emerald-600"
                />

                <span className="font-bold text-slate-800">
                  MEDİSU Güvencesi
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <div>✓ Uzman Personel</div>
                <div>✓ 39 İlçe</div>
                <div>✓ Hijyenik Hizmet</div>
                <div>✓ 7/24 İletişim</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-3 py-4 font-semibold text-white shadow-md transition hover:bg-emerald-600"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>

              <a
                href="tel:+905396952989"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-800 px-3 py-4 font-semibold text-white shadow-md transition hover:bg-sky-900"
              >
                <Phone size={19} />
                Hemen Ara
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
