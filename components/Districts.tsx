"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Navigation,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const districts = [
  "Adalar",
  "Arnavutköy",
  "Ataşehir",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beykoz",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Çekmeköy",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kadıköy",
  "Kağıthane",
  "Kartal",
  "Küçükçekmece",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sarıyer",
  "Silivri",
  "Sultanbeyli",
  "Sultangazi",
  "Şile",
  "Şişli",
  "Tuzla",
  "Ümraniye",
  "Üsküdar",
  "Zeytinburnu",
];

const districtContent = {
  tr: {
    badge: "Hizmet Bölgelerimiz",
    title1: "İstanbul'un",
    title2: "39 İlçesinde",
    title3: "Hizmet",
    description:
      "İlçenizi seçerek evde sağlık hizmetlerimizi inceleyebilirsiniz.",
    ctaBadge: "İstanbul Geneli Hizmet",
    ctaTitle: "İlçenizde MEDİSU Var",
    ctaText:
      "Hizmet ve uygunluk bilgisi için bize ulaşabilirsiniz.",
    call: "Hemen Ara",
  },

  en: {
    badge: "Our Service Areas",
    title1: "Serving",
    title2: "All 39 Districts",
    title3: "of Istanbul",
    description:
      "Select your district to explore our home healthcare services.",
    ctaBadge: "Service Across Istanbul",
    ctaTitle: "MEDİSU Serves Your District",
    ctaText:
      "Contact us for service availability and further information.",
    call: "Call Now",
  },

  ar: {
    badge: "مناطق الخدمة",
    title1: "نقدم خدماتنا في",
    title2: "جميع مناطق إسطنبول الـ 39",
    title3: "",
    description:
      "اختر منطقتك للاطلاع على خدمات الرعاية الصحية المنزلية المتاحة.",
    ctaBadge: "خدمة في جميع أنحاء إسطنبول",
    ctaTitle: "MEDİSU متاحة في منطقتك",
    ctaText:
      "تواصل معنا لمعرفة توفر الخدمة والحصول على مزيد من المعلومات.",
    call: "اتصل الآن",
  },

  ru: {
    badge: "Районы обслуживания",
    title1: "Мы работаем",
    title2: "Во всех 39 районах",
    title3: "Стамбула",
    description:
      "Выберите свой район, чтобы ознакомиться с нашими медицинскими услугами на дому.",
    ctaBadge: "Услуги по всему Стамбулу",
    ctaTitle: "MEDİSU работает в вашем районе",
    ctaText:
      "Свяжитесь с нами, чтобы узнать о доступности услуг и получить дополнительную информацию.",
    call: "Позвонить",
  },
} as const;

function slugifyDistrict(name: string) {
  return name
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replaceAll(" ", "-");
}

export default function Districts() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = districtContent[locale];

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-white to-cyan-50/60 py-12 sm:py-14 lg:py-20"
    >
      <div className="absolute -left-40 top-0 h-[320px] w-[320px] rounded-full bg-cyan-100/50 blur-[110px]" />

      <div className="absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-sky-100/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3.5 py-1.5 text-xs font-semibold text-cyan-700 sm:px-4 sm:py-2 sm:text-sm">
            <Navigation size={15} />
            {content.badge}
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            {content.title1}

            <span className="text-sky-700">
              {" "}
              {content.title2}
              {" "}
            </span>

            {content.title3}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-7">
            {content.description}
          </p>
        </motion.div>

        {/* İLÇELER */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 md:grid-cols-5 lg:grid-cols-6">
          {districts.map((district, index) => {
            const slug = slugifyDistrict(district);

            return (
              <motion.div
                key={district}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.008, 0.16),
                }}
              >
                <Link
                  href={`/istanbul/${slug}/evde-hemsire`}
                  className="group flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2 py-2 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md sm:min-h-[46px] sm:rounded-xl sm:px-3"
                >
                  <MapPin
                    size={14}
                    className="shrink-0 text-cyan-600 transition group-hover:text-sky-800 sm:size-[16px]"
                  />

                  <span className="truncate text-[11px] font-semibold text-slate-700 sm:text-sm">
                    {district}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ALT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-8 sm:mt-10"
        >
          <div className="flex flex-col gap-4 rounded-[24px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 px-5 py-5 text-white shadow-xl sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-200 sm:text-sm">
                <MapPin size={15} />
                {content.ctaBadge}
              </div>

              <h3 className="mt-1.5 text-xl font-extrabold sm:text-2xl">
                {content.ctaTitle}
              </h3>

              <p className="mt-1 text-sm leading-6 text-sky-100">
                {content.ctaText}
              </p>
            </div>

            <a
              href="tel:+905428939646"
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:text-base lg:w-auto"
            >
              {content.call}

              <ArrowRight
                size={18}
                className={locale === "ar" ? "rotate-180" : ""}
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
