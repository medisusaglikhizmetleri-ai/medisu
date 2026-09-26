"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  CalendarClock,
  House,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const howItWorksContent = {
  tr: {
    badge: "Süreç Nasıl İşliyor?",
    title1: "Evde Sağlık Hizmeti",
    title2: "4 Kolay Adımda",
    intro:
      "Bize ulaşın, ihtiyacınızı değerlendirelim ve hizmetinizi hızlıca planlayalım.",
    stepLabel: "ADIM",

    steps: [
      {
        icon: PhoneCall,
        number: "01",
        title: "Bize Ulaşın",
        description:
          "Telefon veya WhatsApp üzerinden ihtiyacınızı bize iletin.",
      },
      {
        icon: ClipboardCheck,
        number: "02",
        title: "Değerlendirelim",
        description:
          "İhtiyacınızı değerlendirerek uygun hizmet planlamasını yapalım.",
      },
      {
        icon: CalendarClock,
        number: "03",
        title: "Randevu Oluşturalım",
        description:
          "Size uygun tarih ve saat için hızlıca planlama yapalım.",
      },
      {
        icon: House,
        number: "04",
        title: "Evinizde Hizmet Alın",
        description:
          "Sağlık personelimiz adresinize gelerek hizmeti gerçekleştirsin.",
      },
    ],

    ctaBadge: "Hızlı İletişim",
    ctaTitle: "İlk Adımı Şimdi Atın",
    ctaText:
      "İhtiyacınızı bize iletin, uygun hizmet planlamasını birlikte yapalım.",
    citywide: "İstanbul geneli",
    contact24: "7/24 iletişim",
    call: "Hemen Ara",
    whatsapp: "WhatsApp",
  },

  en: {
    badge: "How Does the Process Work?",
    title1: "Home Healthcare",
    title2: "In 4 Simple Steps",
    intro:
      "Contact us, let us assess your needs and quickly plan the appropriate service.",
    stepLabel: "STEP",

    steps: [
      {
        icon: PhoneCall,
        number: "01",
        title: "Contact Us",
        description:
          "Tell us what you need by phone or WhatsApp.",
      },
      {
        icon: ClipboardCheck,
        number: "02",
        title: "Needs Assessment",
        description:
          "We assess your needs and determine the appropriate service plan.",
      },
      {
        icon: CalendarClock,
        number: "03",
        title: "Schedule an Appointment",
        description:
          "We quickly arrange a suitable date and time for you.",
      },
      {
        icon: House,
        number: "04",
        title: "Receive Care at Home",
        description:
          "Our healthcare professional comes to your address and provides the service.",
      },
    ],

    ctaBadge: "Quick Contact",
    ctaTitle: "Take the First Step Now",
    ctaText:
      "Tell us what you need and let us plan the appropriate service together.",
    citywide: "Across Istanbul",
    contact24: "24/7 contact",
    call: "Call Now",
    whatsapp: "WhatsApp",
  },

  ar: {
    badge: "كيف تتم العملية؟",
    title1: "الرعاية الصحية المنزلية",
    title2: "في 4 خطوات سهلة",
    intro:
      "تواصل معنا لنقيّم احتياجاتك ونخطط للخدمة المناسبة بسرعة.",
    stepLabel: "الخطوة",

    steps: [
      {
        icon: PhoneCall,
        number: "01",
        title: "تواصل معنا",
        description:
          "أخبرنا باحتياجاتك عبر الهاتف أو واتساب.",
      },
      {
        icon: ClipboardCheck,
        number: "02",
        title: "تقييم احتياجاتك",
        description:
          "نقيّم احتياجاتك ونحدد خطة الخدمة المناسبة لك.",
      },
      {
        icon: CalendarClock,
        number: "03",
        title: "تحديد الموعد",
        description:
          "نرتب لك الموعد المناسب من حيث التاريخ والوقت.",
      },
      {
        icon: House,
        number: "04",
        title: "تلقي الخدمة في منزلك",
        description:
          "يصل طاقمنا الصحي إلى عنوانك ويقدم لك الخدمة.",
      },
    ],

    ctaBadge: "تواصل سريع",
    ctaTitle: "ابدأ الخطوة الأولى الآن",
    ctaText:
      "أخبرنا باحتياجاتك ولنخطط معاً للخدمة المناسبة لك.",
    citywide: "في جميع أنحاء إسطنبول",
    contact24: "تواصل على مدار الساعة",
    call: "اتصل الآن",
    whatsapp: "واتساب",
  },

  ru: {
    badge: "Как проходит процесс?",
    title1: "Медицинская помощь на дому",
    title2: "В 4 простых шага",
    intro:
      "Свяжитесь с нами, мы оценим ваши потребности и быстро организуем подходящую услугу.",
    stepLabel: "ШАГ",

    steps: [
      {
        icon: PhoneCall,
        number: "01",
        title: "Свяжитесь с нами",
        description:
          "Расскажите нам о вашей потребности по телефону или через WhatsApp.",
      },
      {
        icon: ClipboardCheck,
        number: "02",
        title: "Оценим потребности",
        description:
          "Мы оценим вашу ситуацию и определим подходящий план обслуживания.",
      },
      {
        icon: CalendarClock,
        number: "03",
        title: "Назначим время",
        description:
          "Мы быстро согласуем удобные для вас дату и время.",
      },
      {
        icon: House,
        number: "04",
        title: "Получите помощь дома",
        description:
          "Наш медицинский специалист приедет по вашему адресу и окажет услугу.",
      },
    ],

    ctaBadge: "Быстрая связь",
    ctaTitle: "Сделайте первый шаг сейчас",
    ctaText:
      "Расскажите нам о вашей потребности, и мы вместе подберём подходящую услугу.",
    citywide: "По всему Стамбулу",
    contact24: "Связь 24/7",
    call: "Позвонить",
    whatsapp: "WhatsApp",
  },
} as const;

export default function HowItWorks() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = howItWorksContent[locale];

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-sky-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
            {content.badge}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
            {content.title1}

            <span className="block text-sky-700">
              {content.title2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {content.intro}
          </p>
        </motion.div>

        {/* ADIMLAR */}
        <div className="relative">
          <div className="absolute left-[12%] right-[12%] top-[55px] hidden h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent lg:block" />

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {content.steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group relative"
                >
                  <article className="relative h-full overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg sm:rounded-[26px] sm:p-6">
                    <div
                      className={`absolute top-2 text-5xl font-black text-slate-100 sm:text-6xl ${
                        locale === "ar" ? "left-4" : "right-4"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-800 to-cyan-600 text-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Icon size={23} />
                      </div>

                      <div className="mt-5 text-xs font-bold tracking-wider text-cyan-700">
                        {content.stepLabel} {step.number}
                      </div>

                      <h3 className="mt-2 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* KISA CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 overflow-hidden rounded-[26px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 shadow-xl sm:mt-10 lg:mt-14 lg:rounded-[32px]"
        >
          <div className="grid items-center gap-5 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1fr_auto] lg:px-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur sm:text-sm">
                <ShieldCheck size={16} />
                {content.ctaBadge}
              </div>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                {content.ctaTitle}
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-sky-100 sm:text-base">
                {content.ctaText}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-cyan-100 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400"
                  />
                  {content.citywide}
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400"
                  />
                  {content.contact24}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
              <a
                href="tel:+905428939646"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                <PhoneCall size={18} />
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
