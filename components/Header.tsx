"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  translations,
  type Locale,
} from "@/lib/translations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const t = translations[locale];

  const homePath =
    locale === "tr" ? "/" : `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: {
    code: Locale;
    label: string;
    flag: string;
    href: string;
  }[] = [
    {
      code: "tr",
      label: "TR",
      flag: "🇹🇷",
      href: "/",
    },
    {
      code: "en",
      label: "EN",
      flag: "🇬🇧",
      href: "/en",
    },
    {
      code: "ar",
      label: "AR",
      flag: "🇸🇦",
      href: "/ar",
    },
    {
      code: "ru",
      label: "RU",
      flag: "🇷🇺",
      href: "/ru",
    },
  ];

  return (
    <>
      {/* ÜST BİLGİ ŞERİDİ */}
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="hidden bg-sky-900 text-white lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={16}
                className="text-emerald-400"
              />

              <span>{t.header.healthStandard}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={16}
                fill="currentColor"
                className="text-amber-400"
              />

              <span>{t.header.satisfaction}</span>
            </div>
          </div>

          <div className="rounded-full bg-emerald-500 px-4 py-1 font-semibold">
            {t.header.support}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-lg backdrop-blur-2xl"
            : "bg-white/95 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "h-[72px] lg:h-20"
              : "h-[78px] lg:h-24"
          }`}
        >
          {/* LOGO */}
          <Link
            href={homePath}
            aria-label="MEDİSU"
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
          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href={`${homePath}#top`}
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              {t.nav.home}
            </a>

            <a
              href={`${homePath}#services`}
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              {t.nav.services}
            </a>

            <a
              href={`${homePath}#about`}
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              {t.nav.about}
            </a>

            <a
              href={`${homePath}#contact`}
              className="font-medium text-slate-700 transition hover:text-cyan-700"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* SAĞ TARAF */}
          <div className="flex items-center gap-2">
            {/* DİL SEÇİCİ */}
            <div className="hidden items-center rounded-xl border border-slate-200 bg-white p-1 lg:flex">
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={language.href}
                  title={
                    translations[language.code].languageName
                  }
                  className={`rounded-lg px-2 py-1.5 text-xs font-bold transition ${
                    locale === language.code
                      ? "bg-sky-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="mr-1">
                    {language.flag}
                  </span>
                  {language.label}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/905428939646"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-2xl border border-emerald-500 px-4 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white xl:flex"
            >
              <MessageCircle size={19} />
              WhatsApp
            </a>

            <a
              href="tel:+905428939646"
              className="hidden items-center gap-2 rounded-2xl bg-sky-800 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-900 xl:flex"
            >
              <Phone size={18} />
              0542 893 96 46
            </a>

            {/* MOBİL TELEFON */}
            <a
              href="tel:+905428939646"
              aria-label={t.header.callMedisu}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-800 text-white shadow-md lg:hidden"
            >
              <Phone size={20} />
            </a>

            {/* MOBİL MENÜ */}
            <button
              type="button"
              aria-label={
                open
                  ? t.header.closeMenu
                  : t.header.openMenu
              }
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
            >
              {open ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>
          </div>
        </div>

        {/* MOBİL MENÜ */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[850px] border-t border-slate-200"
              : "max-h-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl p-5">
            <div className="space-y-1">
              <a
                href={`${homePath}#top`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                {t.nav.home}
              </a>

              <a
                href={`${homePath}#services`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                {t.nav.services}
              </a>

              <a
                href={`${homePath}#about`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                {t.nav.about}
              </a>

              <a
                href={`${homePath}#contact`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* MOBİL DİL SEÇİCİ */}
            <div className="mt-5">
              <div className="mb-2 text-sm font-semibold text-slate-500">
                Language
              </div>

              <div className="grid grid-cols-4 gap-2">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={language.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-center rounded-xl px-2 py-3 text-sm font-bold transition ${
                      locale === language.code
                        ? "bg-sky-800 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {language.flag} {language.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-emerald-600"
                />

                <span className="font-bold text-slate-800">
                  {t.header.assurance}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <div>✓ {t.header.expertStaff}</div>
                <div>✓ {t.header.districts}</div>
                <div>✓ {t.header.hygiene}</div>
                <div>✓ {t.header.contact24}</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/905428939646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-3 py-4 font-semibold text-white shadow-md transition hover:bg-emerald-600"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>

              <a
                href="tel:+905428939646"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-800 px-3 py-4 font-semibold text-white shadow-md transition hover:bg-sky-900"
              >
                <Phone size={19} />
                {t.nav.call}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
