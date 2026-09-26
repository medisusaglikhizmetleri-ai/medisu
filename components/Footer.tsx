"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  ChevronRight,
  Clock3,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const footerContent = {
  tr: {
    subtitle: "Evde Sağlık Hizmetleri",
    description:
      "İstanbul genelinde evde hemşire, serum, pansuman, kan alma, yaşlı bakımı ve profesyonel evde sağlık hizmetleri sunuyoruz.",

    servicesTitle: "Hizmetlerimiz",
    services: [
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
      ["Mounjaro Tedavisi", "mounjaro-tedavisi"],
    ],

    quickMenu: "Hızlı Menü",
    about: "Hakkımızda",
    servicesMenu: "Hizmetler",
    contact: "İletişim",
    faq: "Sık Sorulan Sorular",

    support: "7/24 Destek",
    supportText:
      "İstanbul genelinde evde sağlık hizmetleri için bize ulaşabilirsiniz.",
    location: "İstanbul / Türkiye",
    availability: "7 Gün • 24 Saat",
    whatsapp: "WhatsApp'tan Yaz",

    copyright: "MEDİSU Evde Sağlık Hizmetleri",
    rights: "Tüm Hakları Saklıdır.",
  },

  en: {
    subtitle: "Home Healthcare Services",
    description:
      "We provide professional home nursing, IV therapy, wound dressing, blood collection, elderly care and home healthcare services throughout Istanbul.",

    servicesTitle: "Our Services",
    services: [
      ["Home Nursing", "evde-hemsire"],
      ["IV Therapy at Home", "evde-serum"],
      ["Wound Dressing", "pansuman"],
      ["Blood Collection", "kan-alma"],
      ["Elderly Care", "yasli-bakimi"],
      ["Patient Care", "hasta-bakimi"],
      ["Glutathione Therapy", "glutatyon-tedavisi"],
      ["Pascorbin Therapy", "pascorbin-tedavisi"],
      ["Todavit Multivitamin", "todavit-multivitamin"],
      ["NAD+ Therapy", "nad-plus-tedavisi"],
      ["Mounjaro Treatment Support", "mounjaro-tedavisi"],
    ],

    quickMenu: "Quick Menu",
    about: "About Us",
    servicesMenu: "Services",
    contact: "Contact",
    faq: "Frequently Asked Questions",

    support: "24/7 Support",
    supportText:
      "Contact us for home healthcare services throughout Istanbul.",
    location: "Istanbul / Türkiye",
    availability: "7 Days • 24 Hours",
    whatsapp: "Message on WhatsApp",

    copyright: "MEDİSU Home Healthcare Services",
    rights: "All Rights Reserved.",
  },

  ar: {
    subtitle: "خدمات الرعاية الصحية المنزلية",
    description:
      "نقدم خدمات التمريض المنزلي والعلاج الوريدي وتضميد الجروح وسحب الدم ورعاية كبار السن والرعاية الصحية المنزلية المتخصصة في جميع أنحاء إسطنبول.",

    servicesTitle: "خدماتنا",
    services: [
      ["التمريض المنزلي", "evde-hemsire"],
      ["العلاج الوريدي في المنزل", "evde-serum"],
      ["تضميد الجروح", "pansuman"],
      ["سحب عينات الدم", "kan-alma"],
      ["رعاية كبار السن", "yasli-bakimi"],
      ["رعاية المرضى", "hasta-bakimi"],
      ["علاج الجلوتاثيون", "glutatyon-tedavisi"],
      ["علاج Pascorbin", "pascorbin-tedavisi"],
      ["Todavit متعدد الفيتامينات", "todavit-multivitamin"],
      ["علاج NAD+", "nad-plus-tedavisi"],
      ["دعم علاج Mounjaro", "mounjaro-tedavisi"],
    ],

    quickMenu: "القائمة السريعة",
    about: "من نحن",
    servicesMenu: "الخدمات",
    contact: "اتصل بنا",
    faq: "الأسئلة الشائعة",

    support: "دعم على مدار الساعة",
    supportText:
      "يمكنكم التواصل معنا للحصول على خدمات الرعاية الصحية المنزلية في جميع أنحاء إسطنبول.",
    location: "إسطنبول / تركيا",
    availability: "7 أيام • 24 ساعة",
    whatsapp: "راسلنا عبر واتساب",

    copyright: "MEDİSU للرعاية الصحية المنزلية",
    rights: "جميع الحقوق محفوظة.",
  },

  ru: {
    subtitle: "Медицинские услуги на дому",
    description:
      "Мы предоставляем услуги медсестры на дому, внутривенной терапии, перевязок, забора крови, ухода за пожилыми и другие профессиональные медицинские услуги по всему Стамбулу.",

    servicesTitle: "Наши услуги",
    services: [
      ["Медсестра на дом", "evde-hemsire"],
      ["Внутривенная терапия на дому", "evde-serum"],
      ["Перевязка", "pansuman"],
      ["Забор крови", "kan-alma"],
      ["Уход за пожилыми", "yasli-bakimi"],
      ["Уход за пациентами", "hasta-bakimi"],
      ["Терапия глутатионом", "glutatyon-tedavisi"],
      ["Терапия Pascorbin", "pascorbin-tedavisi"],
      ["Todavit Multivitamin", "todavit-multivitamin"],
      ["Терапия NAD+", "nad-plus-tedavisi"],
      ["Поддержка терапии Mounjaro", "mounjaro-tedavisi"],
    ],

    quickMenu: "Быстрое меню",
    about: "О нас",
    servicesMenu: "Услуги",
    contact: "Контакты",
    faq: "Часто задаваемые вопросы",

    support: "Поддержка 24/7",
    supportText:
      "Свяжитесь с нами для получения медицинских услуг на дому по всему Стамбулу.",
    location: "Стамбул / Турция",
    availability: "7 дней • 24 часа",
    whatsapp: "Написать в WhatsApp",

    copyright: "MEDİSU — медицинская помощь на дому",
    rights: "Все права защищены.",
  },
} as const;

export default function Footer() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = footerContent[locale];

  const homePath =
    locale === "tr" ? "/" : `/${locale}`;

  return (
    <footer
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-slate-950 text-white"
    >
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
                  {content.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              {content.description}
            </p>
          </div>

          {/* HİZMETLER */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              {content.servicesTitle}
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {content.services.map(([title, slug]) => (
                <Link
                  key={slug}
                  href={`/hizmetler/${slug}`}
                  className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-400 sm:text-base"
                >
                  <ChevronRight
                    size={17}
                    className={
                      locale === "ar" ? "rotate-180" : ""
                    }
                  />

                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* HIZLI MENÜ */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              {content.quickMenu}
            </h3>

            <div className="space-y-3">
              <Link
                href={`${homePath}#about`}
                className="flex items-center gap-2 text-slate-300 transition hover:text-cyan-400"
              >
                <ChevronRight
                  size={18}
                  className={
                    locale === "ar" ? "rotate-180" : ""
                  }
                />

                {content.about}
              </Link>

              <Link
                href={`${homePath}#services`}
                className="flex items-center gap-2 text-slate-300 transition hover:text-cyan-400"
              >
                <ChevronRight
                  size={18}
                  className={
                    locale === "ar" ? "rotate-180" : ""
                  }
                />

                {content.servicesMenu}
              </Link>

              <Link
                href={`${homePath}#contact`}
                className="flex items-center gap-2 text-slate-300 transition hover:text-cyan-400"
              >
                <ChevronRight
                  size={18}
                  className={
                    locale === "ar" ? "rotate-180" : ""
                  }
                />

                {content.contact}
              </Link>

              <Link
                href={`${homePath}#faq`}
                className="flex items-center gap-2 text-slate-300 transition hover:text-cyan-400"
              >
                <ChevronRight
                  size={18}
                  className={
                    locale === "ar" ? "rotate-180" : ""
                  }
                />

                {content.faq}
              </Link>
            </div>
          </div>

          {/* İLETİŞİM */}
          <div>
            <div className="rounded-[28px] bg-gradient-to-br from-cyan-700 to-sky-700 p-6 shadow-xl sm:p-7">
              <h3 className="text-2xl font-bold">
                {content.support}
              </h3>

              <p className="mt-3 text-sm leading-7 text-cyan-100 sm:text-base">
                {content.supportText}
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-base">
                <a
                  href="tel:+905428939646"
                  className="flex items-center gap-3"
                >
                  <Phone size={18} />
                  0542 893 96 46
                </a>

                <a
                  href="mailto:medisu.saglikhizmetleri@gmail.com"
                  className="flex items-start gap-3 break-all"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0"
                  />

                  medisu.saglikhizmetleri@gmail.com
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {content.location}
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} />
                  {content.availability}
                </div>
              </div>

              <a
                href="https://wa.me/905428939646"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700 transition hover:bg-slate-100"
              >
                {content.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} {content.copyright}
            </p>

            <p>
              {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
