"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const serviceContent = {
  tr: {
    badge: "Profesyonel Evde Sağlık Hizmetleri",
    title1: "İhtiyacınız Olan Sağlık Hizmeti",
    title2: "Evinize Gelsin",
    intro:
      "İstanbul genelinde deneyimli sağlık personelimiz ile evde sağlık ve bakım hizmetleri sunuyoruz.",
    istanbul: "İstanbul Geneli",

    services: [
      {
        title: "Evde Hemşire",
        slug: "evde-hemsire",
        image: "/images/services/hemsire.png",
        description:
          "Deneyimli sağlık personelimiz ile evinizde profesyonel hemşirelik desteği.",
      },
      {
        title: "Evde Serum",
        slug: "evde-serum",
        image: "/images/services/serum.png",
        description:
          "Doktor önerisine uygun serum uygulamalarının evinizde gerçekleştirilmesi.",
      },
      {
        title: "Pansuman",
        slug: "pansuman",
        image: "/images/services/pansuman.png",
        description:
          "Hijyen standartlarına uygun yara bakım ve pansuman hizmetleri.",
      },
      {
        title: "Kan Alma",
        slug: "kan-alma",
        image: "/images/services/kan-alma.png",
        description:
          "Laboratuvar tetkikleri için evinizde güvenli numune alma hizmeti.",
      },
      {
        title: "Yaşlı Bakımı",
        slug: "yasli-bakimi",
        image: "/images/services/yasli-bakimi.png",
        description:
          "Yaşlı bireyler için özenli, düzenli ve güvenilir evde bakım desteği.",
      },
      {
        title: "Hasta Bakımı",
        slug: "hasta-bakimi",
        image: "/images/services/hasta-bakimi.png",
        description:
          "Ameliyat sonrası veya bakım ihtiyacı olan hastalar için profesyonel destek.",
      },
      {
        title: "Glutatyon Tedavisi",
        slug: "glutatyon-tedavisi",
        image: "/images/services/glutatyon.png",
        description:
          "Glutatyon içeren intravenöz uygulamanın hekim değerlendirmesi doğrultusunda evinizde sağlık personeli tarafından gerçekleştirilmesi.",
      },
      {
        title: "Pascorbin Tedavisi",
        slug: "pascorbin-tedavisi",
        image: "/images/services/pascorbin.png",
        description:
          "C vitamini içeren Pascorbin uygulamasının hekim değerlendirmesi doğrultusunda evinizde sağlık personeli tarafından gerçekleştirilmesi.",
      },
      {
        title: "Todavit Multivitamin",
        slug: "todavit-multivitamin",
        image: "/images/services/todavit.png",
        description:
          "Todavit multivitamin uygulamasının hekim değerlendirmesi doğrultusunda evinizde profesyonel sağlık personeli tarafından uygulanması.",
      },
      {
        title: "NAD+ Tedavisi",
        slug: "nad-plus-tedavisi",
        image: "/images/services/nad-plus.png",
        description:
          "NAD+ intravenöz uygulamasının uygunluk değerlendirmesi sonrasında sağlık personeli tarafından ev ortamında gerçekleştirilmesi.",
      },
      {
        title: "Mounjaro Tedavisi",
        slug: "mounjaro-tedavisi",
        image: "/images/services/mounjaro.png",
        description:
          "Hekim değerlendirmesi ve reçetelendirmesi doğrultusunda Mounjaro (tirzepatid) tedavi sürecine yönelik profesyonel sağlık desteği.",
      },
      {
        title: "TAD 600",
        slug: "tad-600",
        image: "/images/services/tad600.png",
        description:
          "TAD 600 uygulamasının hekim değerlendirmesi doğrultusunda evinizde profesyonel sağlık personeli tarafından gerçekleştirilmesi.",
      },
    ],

    ctaBadge: "MEDİSU Evde Sağlık Hizmetleri",
    ctaTitle: "Hangi Hizmete İhtiyacınız Olduğundan Emin Değil misiniz?",
    ctaText:
      "Bize ulaşın, ihtiyacınızı birlikte değerlendirelim ve uygun hizmet hakkında bilgi verelim.",
    call: "Hemen Ara",
    whatsapp: "WhatsApp",
  },

  en: {
    badge: "Professional Home Healthcare Services",
    title1: "Healthcare You Need",
    title2: "Delivered to Your Home",
    intro:
      "We provide professional home healthcare and care services throughout Istanbul with experienced healthcare personnel.",
    istanbul: "Across Istanbul",

    services: [
      {
        title: "Home Nursing",
        slug: "evde-hemsire",
        image: "/images/services/hemsire.png",
        description:
          "Professional nursing support in the comfort of your home by experienced healthcare personnel.",
      },
      {
        title: "IV Therapy at Home",
        slug: "evde-serum",
        image: "/images/services/serum.png",
        description:
          "Administration of IV therapy at home in accordance with a physician's recommendation.",
      },
      {
        title: "Wound Dressing",
        slug: "pansuman",
        image: "/images/services/pansuman.png",
        description:
          "Wound care and dressing services provided in accordance with hygiene standards.",
      },
      {
        title: "Blood Collection",
        slug: "kan-alma",
        image: "/images/services/kan-alma.png",
        description:
          "Safe blood and specimen collection at your home for laboratory testing.",
      },
      {
        title: "Elderly Care",
        slug: "yasli-bakimi",
        image: "/images/services/yasli-bakimi.png",
        description:
          "Attentive, reliable and regular home care support for elderly individuals.",
      },
      {
        title: "Patient Care",
        slug: "hasta-bakimi",
        image: "/images/services/hasta-bakimi.png",
        description:
          "Professional support for patients who require postoperative or ongoing care.",
      },
      {
        title: "Glutathione Therapy",
        slug: "glutatyon-tedavisi",
        image: "/images/services/glutatyon.png",
        description:
          "Intravenous glutathione administration at home by healthcare personnel following physician evaluation.",
      },
      {
        title: "Pascorbin Therapy",
        slug: "pascorbin-tedavisi",
        image: "/images/services/pascorbin.png",
        description:
          "Pascorbin vitamin C administration at home by healthcare personnel following physician evaluation.",
      },
      {
        title: "Todavit Multivitamin",
        slug: "todavit-multivitamin",
        image: "/images/services/todavit.png",
        description:
          "Todavit multivitamin administration at home by professional healthcare personnel following physician evaluation.",
      },
      {
        title: "NAD+ Therapy",
        slug: "nad-plus-tedavisi",
        image: "/images/services/nad-plus.png",
        description:
          "NAD+ intravenous administration at home by healthcare personnel following suitability assessment.",
      },
      {
        title: "Mounjaro Treatment Support",
        slug: "mounjaro-tedavisi",
        image: "/images/services/mounjaro.png",
        description:
          "Professional healthcare support for Mounjaro (tirzepatide) treatment following physician evaluation and prescription.",
      },
      {
        title: "TAD 600",
        slug: "tad-600",
        image: "/images/services/tad600.png",
        description:
          "TAD 600 administration at home by professional healthcare personnel following physician evaluation.",
      },
    ],

    ctaBadge: "MEDİSU Home Healthcare Services",
    ctaTitle: "Not Sure Which Service You Need?",
    ctaText:
      "Contact us so we can assess your needs together and provide information about the appropriate service.",
    call: "Call Now",
    whatsapp: "WhatsApp",
  },

  ar: {
    badge: "خدمات الرعاية الصحية المنزلية المتخصصة",
    title1: "الرعاية الصحية التي تحتاجها",
    title2: "نقدمها لك في منزلك",
    intro:
      "نقدم خدمات الرعاية الصحية والعناية المنزلية في جميع أنحاء إسطنبول بواسطة طاقم صحي متخصص وذو خبرة.",
    istanbul: "جميع أنحاء إسطنبول",

    services: [
      {
        title: "التمريض المنزلي",
        slug: "evde-hemsire",
        image: "/images/services/hemsire.png",
        description:
          "دعم تمريضي متخصص في منزلك بواسطة طاقم صحي ذي خبرة.",
      },
      {
        title: "العلاج الوريدي في المنزل",
        slug: "evde-serum",
        image: "/images/services/serum.png",
        description:
          "إجراء العلاج الوريدي في المنزل وفقاً لتوصية الطبيب.",
      },
      {
        title: "تضميد الجروح",
        slug: "pansuman",
        image: "/images/services/pansuman.png",
        description:
          "خدمات العناية بالجروح وتغيير الضمادات وفق معايير النظافة والسلامة.",
      },
      {
        title: "سحب عينات الدم",
        slug: "kan-alma",
        image: "/images/services/kan-alma.png",
        description:
          "خدمة آمنة لسحب عينات الدم في منزلك لإجراء الفحوصات المخبرية.",
      },
      {
        title: "رعاية كبار السن",
        slug: "yasli-bakimi",
        image: "/images/services/yasli-bakimi.png",
        description:
          "رعاية منزلية منتظمة وموثوقة ومخصصة لكبار السن.",
      },
      {
        title: "رعاية المرضى",
        slug: "hasta-bakimi",
        image: "/images/services/hasta-bakimi.png",
        description:
          "دعم مهني للمرضى الذين يحتاجون إلى رعاية بعد العمليات أو رعاية مستمرة.",
      },
      {
        title: "علاج الجلوتاثيون",
        slug: "glutatyon-tedavisi",
        image: "/images/services/glutatyon.png",
        description:
          "إعطاء الجلوتاثيون عن طريق الوريد في المنزل بواسطة طاقم صحي بعد تقييم الطبيب.",
      },
      {
        title: "علاج Pascorbin",
        slug: "pascorbin-tedavisi",
        image: "/images/services/pascorbin.png",
        description:
          "إعطاء Pascorbin المحتوي على فيتامين C في المنزل بواسطة طاقم صحي بعد تقييم الطبيب.",
      },
      {
        title: "Todavit متعدد الفيتامينات",
        slug: "todavit-multivitamin",
        image: "/images/services/todavit.png",
        description:
          "إعطاء Todavit متعدد الفيتامينات في المنزل بواسطة طاقم صحي متخصص بعد تقييم الطبيب.",
      },
      {
        title: "علاج NAD+",
        slug: "nad-plus-tedavisi",
        image: "/images/services/nad-plus.png",
        description:
          "إعطاء NAD+ عن طريق الوريد في المنزل بواسطة طاقم صحي بعد تقييم مدى الملاءمة.",
      },
      {
        title: "دعم علاج Mounjaro",
        slug: "mounjaro-tedavisi",
        image: "/images/services/mounjaro.png",
        description:
          "دعم صحي متخصص لعملية علاج Mounjaro (tirzepatide) وفق تقييم الطبيب والوصفة الطبية.",
      },
      {
        title: "TAD 600",
        slug: "tad-600",
        image: "/images/services/tad600.png",
        description:
          "إعطاء TAD 600 في المنزل بواسطة طاقم صحي متخصص بعد تقييم الطبيب.",
      },
    ],

    ctaBadge: "MEDİSU للرعاية الصحية المنزلية",
    ctaTitle: "لست متأكداً من الخدمة التي تحتاجها؟",
    ctaText:
      "تواصل معنا لنقيّم احتياجاتك معاً ونقدم لك معلومات عن الخدمة المناسبة.",
    call: "اتصل الآن",
    whatsapp: "واتساب",
  },

  ru: {
    badge: "Профессиональная медицинская помощь на дому",
    title1: "Необходимая медицинская помощь",
    title2: "У вас дома",
    intro:
      "Мы предоставляем медицинские услуги и уход на дому по всему Стамбулу с участием опытных медицинских специалистов.",
    istanbul: "По всему Стамбулу",

    services: [
      {
        title: "Медсестра на дом",
        slug: "evde-hemsire",
        image: "/images/services/hemsire.png",
        description:
          "Профессиональная помощь медсестры у вас дома от опытного медицинского персонала.",
      },
      {
        title: "Внутривенная терапия на дому",
        slug: "evde-serum",
        image: "/images/services/serum.png",
        description:
          "Проведение внутривенной терапии на дому в соответствии с рекомендациями врача.",
      },
      {
        title: "Перевязка",
        slug: "pansuman",
        image: "/images/services/pansuman.png",
        description:
          "Уход за ранами и перевязки с соблюдением стандартов гигиены.",
      },
      {
        title: "Забор крови",
        slug: "kan-alma",
        image: "/images/services/kan-alma.png",
        description:
          "Безопасный забор крови и других образцов на дому для лабораторных исследований.",
      },
      {
        title: "Уход за пожилыми",
        slug: "yasli-bakimi",
        image: "/images/services/yasli-bakimi.png",
        description:
          "Внимательная, регулярная и надежная помощь пожилым людям на дому.",
      },
      {
        title: "Уход за пациентами",
        slug: "hasta-bakimi",
        image: "/images/services/hasta-bakimi.png",
        description:
          "Профессиональная помощь пациентам после операций или при необходимости постоянного ухода.",
      },
      {
        title: "Терапия глутатионом",
        slug: "glutatyon-tedavisi",
        image: "/images/services/glutatyon.png",
        description:
          "Внутривенное введение глутатиона на дому медицинским персоналом после оценки врача.",
      },
      {
        title: "Терапия Pascorbin",
        slug: "pascorbin-tedavisi",
        image: "/images/services/pascorbin.png",
        description:
          "Введение Pascorbin с витамином C на дому медицинским персоналом после оценки врача.",
      },
      {
        title: "Todavit Multivitamin",
        slug: "todavit-multivitamin",
        image: "/images/services/todavit.png",
        description:
          "Введение Todavit Multivitamin на дому профессиональным медицинским персоналом после оценки врача.",
      },
      {
        title: "Терапия NAD+",
        slug: "nad-plus-tedavisi",
        image: "/images/services/nad-plus.png",
        description:
          "Внутривенное введение NAD+ на дому медицинским персоналом после оценки показаний.",
      },
      {
        title: "Поддержка терапии Mounjaro",
        slug: "mounjaro-tedavisi",
        image: "/images/services/mounjaro.png",
        description:
          "Профессиональная медицинская поддержка при лечении Mounjaro (тирзепатид) после оценки врача и назначения препарата.",
      },
      {
        title: "TAD 600",
        slug: "tad-600",
        image: "/images/services/tad600.png",
        description:
          "Введение TAD 600 на дому профессиональным медицинским персоналом после оценки врача.",
      },
    ],

    ctaBadge: "MEDİSU — медицинская помощь на дому",
    ctaTitle: "Не уверены, какая услуга вам нужна?",
    ctaText:
      "Свяжитесь с нами, чтобы вместе оценить ваши потребности и получить информацию о подходящей услуге.",
    call: "Позвонить",
    whatsapp: "WhatsApp",
  },
} as const;

export default function Services() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = serviceContent[locale];

  return (
    <section
      id="services"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[130px]" />

      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:px-5 sm:text-sm">
            {content.badge}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:mt-5 sm:text-5xl lg:text-6xl">
            {content.title1}

            <span className="block text-sky-700">
              {content.title2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            {content.intro}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {content.services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
            >
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block h-full"
              >
                <article className="h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl sm:rounded-[28px]">
                  <div className="relative h-[180px] overflow-hidden sm:h-[210px] lg:h-[245px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - MEDİSU`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />

                    <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-sky-800 shadow backdrop-blur sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                      {content.istanbul}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">
                      <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-7">
                    <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 overflow-hidden rounded-[26px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 p-6 text-white shadow-xl sm:mt-12 sm:p-8 lg:mt-16 lg:rounded-[38px] lg:p-10"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-8">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                {content.ctaBadge}
              </span>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:mt-5 lg:text-4xl">
                {content.ctaTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-sky-100 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
                {content.ctaText}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
              <a
                href="tel:+905428939646"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                <Phone size={18} />
                {content.call}
              </a>

              <a
                href="https://wa.me/905428939646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:px-6 sm:text-base"
              >
                <MessageCircle size={18} />
                {content.whatsapp}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
