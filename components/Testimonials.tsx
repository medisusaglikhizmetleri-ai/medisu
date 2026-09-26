"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  MapPin,
  HeartHandshake,
  Stethoscope,
  Sparkles,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const content = {
  tr: {
    badge: "Neden MEDİSU?",
    title1: "Evde Sağlık Hizmetinde",
    title2: "Güvenilir Yaklaşım",
    description:
      "Hizmet sürecimizi hasta güvenliği, hijyen, mahremiyet ve profesyonel sağlık yaklaşımı üzerine kuruyoruz.",

    cards: [
      {
        icon: Stethoscope,
        title: "Deneyimli Sağlık Personeli",
        text:
          "Hizmetlerimiz deneyimli sağlık personeli tarafından planlı ve profesyonel şekilde sunulur.",
      },
      {
        icon: ShieldCheck,
        title: "Hijyen ve Güvenlik",
        text:
          "Uygulamalarımızda hijyen ve hasta güvenliği standartlarını ön planda tutuyoruz.",
      },
      {
        icon: Clock3,
        title: "7/24 İletişim",
        text:
          "İhtiyaç duyduğunuzda telefon ve WhatsApp üzerinden bizimle iletişim kurabilirsiniz.",
      },
      {
        icon: MapPin,
        title: "İstanbul Geneli Hizmet",
        text:
          "İstanbul'un 39 ilçesinde uygunluk ve planlama doğrultusunda evde sağlık hizmeti sunuyoruz.",
      },
      {
        icon: HeartHandshake,
        title: "Hasta Odaklı Yaklaşım",
        text:
          "Her kişinin ihtiyacını ayrı değerlendirerek uygun hizmet planlaması oluşturuyoruz.",
      },
      {
        icon: Sparkles,
        title: "Mahremiyete Özen",
        text:
          "Hasta mahremiyetine ve kişisel bilgilerin korunmasına hizmet sürecinin her aşamasında önem veriyoruz.",
      },
    ],
  },

  en: {
    badge: "Why MEDİSU?",
    title1: "A Reliable Approach to",
    title2: "Home Healthcare",
    description:
      "Our service approach is built around patient safety, hygiene, privacy and professional healthcare standards.",

    cards: [
      {
        icon: Stethoscope,
        title: "Experienced Healthcare Staff",
        text:
          "Our services are provided in a planned and professional manner by experienced healthcare personnel.",
      },
      {
        icon: ShieldCheck,
        title: "Hygiene and Safety",
        text:
          "We prioritize hygiene and patient safety throughout our healthcare services.",
      },
      {
        icon: Clock3,
        title: "24/7 Contact",
        text:
          "You can contact us by phone or WhatsApp whenever you need information or assistance.",
      },
      {
        icon: MapPin,
        title: "Service Across Istanbul",
        text:
          "We provide home healthcare services across Istanbul's 39 districts, subject to availability and planning.",
      },
      {
        icon: HeartHandshake,
        title: "Patient-Centered Approach",
        text:
          "We assess each person's needs individually and plan the appropriate service accordingly.",
      },
      {
        icon: Sparkles,
        title: "Respect for Privacy",
        text:
          "We give importance to patient privacy and the protection of personal information at every stage.",
      },
    ],
  },

  ar: {
    badge: "لماذا MEDİSU؟",
    title1: "نهج موثوق في",
    title2: "الرعاية الصحية المنزلية",
    description:
      "نعتمد في خدماتنا على سلامة المريض والنظافة والخصوصية والمعايير المهنية للرعاية الصحية.",

    cards: [
      {
        icon: Stethoscope,
        title: "طاقم صحي ذو خبرة",
        text:
          "يقدم خدماتنا طاقم صحي ذو خبرة بأسلوب منظم واحترافي.",
      },
      {
        icon: ShieldCheck,
        title: "النظافة والسلامة",
        text:
          "نعطي الأولوية للنظافة وسلامة المريض أثناء تقديم خدمات الرعاية الصحية.",
      },
      {
        icon: Clock3,
        title: "تواصل على مدار الساعة",
        text:
          "يمكنكم التواصل معنا عبر الهاتف أو واتساب عند الحاجة إلى المعلومات أو المساعدة.",
      },
      {
        icon: MapPin,
        title: "خدمة في جميع أنحاء إسطنبول",
        text:
          "نقدم خدمات الرعاية الصحية المنزلية في مناطق إسطنبول الـ39 وفقاً للتوفر والتخطيط.",
      },
      {
        icon: HeartHandshake,
        title: "نهج يركز على المريض",
        text:
          "نقيّم احتياجات كل شخص بشكل فردي ونخطط للخدمة المناسبة وفقاً لذلك.",
      },
      {
        icon: Sparkles,
        title: "احترام الخصوصية",
        text:
          "نهتم بخصوصية المريض وحماية المعلومات الشخصية في جميع مراحل الخدمة.",
      },
    ],
  },

  ru: {
    badge: "Почему MEDİSU?",
    title1: "Надёжный подход к",
    title2: "Медицинской помощи на дому",
    description:
      "Наш подход основан на безопасности пациента, гигиене, конфиденциальности и профессиональных стандартах медицинской помощи.",

    cards: [
      {
        icon: Stethoscope,
        title: "Опытный медицинский персонал",
        text:
          "Наши услуги оказываются опытными медицинскими специалистами профессионально и организованно.",
      },
      {
        icon: ShieldCheck,
        title: "Гигиена и безопасность",
        text:
          "Мы уделяем особое внимание гигиене и безопасности пациентов во время оказания услуг.",
      },
      {
        icon: Clock3,
        title: "Связь 24/7",
        text:
          "Вы можете связаться с нами по телефону или WhatsApp, когда вам нужна информация или помощь.",
      },
      {
        icon: MapPin,
        title: "Услуги по всему Стамбулу",
        text:
          "Мы предоставляем медицинские услуги на дому во всех 39 районах Стамбула с учётом доступности и планирования.",
      },
      {
        icon: HeartHandshake,
        title: "Индивидуальный подход",
        text:
          "Мы индивидуально оцениваем потребности каждого человека и планируем подходящую услугу.",
      },
      {
        icon: Sparkles,
        title: "Конфиденциальность",
        text:
          "Мы уделяем особое внимание конфиденциальности пациента и защите персональной информации.",
      },
    ],
  },
} as const;

export default function Testimonials() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const t = content[locale];

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16 lg:py-20"
    >
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
            {t.badge}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            {t.title1}
            <span className="block text-sky-700">
              {t.title2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t.description}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <article className="h-full rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-800 to-cyan-600 text-white shadow-md">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {card.text}
                  </p>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
