"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const contactContent = {
  tr: {
    badge: "İletişim",
    title1: "Sağlığınız İçin",
    title2: "Bir Telefon Kadar Yakınız",
    description:
      "Evde sağlık hizmetleri hakkında bilgi almak için bize telefon, WhatsApp veya e-posta üzerinden ulaşabilirsiniz.",

    phone: "Telefon",
    whatsapp: "WhatsApp",
    whatsappValue: "Hemen Yazın",
    email: "E-Posta",

    infoContact: "İletişim",
    infoService: "Hizmet",
    infoApproach: "Yaklaşım",
    istanbul: "İstanbul",
    trustHygiene: "Güven & Hijyen",

    quickContact: "MEDİSU Hızlı İletişim",
    quickTitle: "İhtiyacınızı Bize Anlatın",
    quickText:
      "Ekibimiz ihtiyacınızı değerlendirerek uygun hizmet planlaması konusunda yardımcı olsun.",

    benefits: [
      "İstanbul geneli hizmet",
      "Uygunluk durumuna göre hızlı planlama",
      "Evde profesyonel sağlık hizmeti",
    ],
  },

  en: {
    badge: "Contact",
    title1: "For Your Health",
    title2: "We're Just a Call Away",
    description:
      "Contact us by phone, WhatsApp or email for information about our home healthcare services.",

    phone: "Phone",
    whatsapp: "WhatsApp",
    whatsappValue: "Message Us",
    email: "Email",

    infoContact: "Contact",
    infoService: "Service Area",
    infoApproach: "Approach",
    istanbul: "Istanbul",
    trustHygiene: "Trust & Hygiene",

    quickContact: "MEDİSU Quick Contact",
    quickTitle: "Tell Us What You Need",
    quickText:
      "Our team will assess your needs and help you plan the appropriate healthcare service.",

    benefits: [
      "Service across Istanbul",
      "Fast planning based on availability",
      "Professional healthcare at home",
    ],
  },

  ar: {
    badge: "اتصل بنا",
    title1: "من أجل صحتك",
    title2: "نحن على بُعد مكالمة واحدة",
    description:
      "يمكنكم التواصل معنا عبر الهاتف أو واتساب أو البريد الإلكتروني للحصول على معلومات حول خدمات الرعاية الصحية المنزلية.",

    phone: "الهاتف",
    whatsapp: "واتساب",
    whatsappValue: "راسلنا الآن",
    email: "البريد الإلكتروني",

    infoContact: "التواصل",
    infoService: "منطقة الخدمة",
    infoApproach: "نهجنا",
    istanbul: "إسطنبول",
    trustHygiene: "الثقة والنظافة",

    quickContact: "تواصل سريع مع MEDİSU",
    quickTitle: "أخبرنا بما تحتاجه",
    quickText:
      "سيقوم فريقنا بتقييم احتياجاتك ومساعدتك في تخطيط الخدمة الصحية المناسبة.",

    benefits: [
      "خدمة في جميع أنحاء إسطنبول",
      "تخطيط سريع وفقاً للتوفر",
      "رعاية صحية احترافية في المنزل",
    ],
  },

  ru: {
    badge: "Контакты",
    title1: "Для вашего здоровья",
    title2: "Мы всегда на связи",
    description:
      "Свяжитесь с нами по телефону, WhatsApp или электронной почте, чтобы получить информацию о медицинских услугах на дому.",

    phone: "Телефон",
    whatsapp: "WhatsApp",
    whatsappValue: "Написать нам",
    email: "Электронная почта",

    infoContact: "Связь",
    infoService: "Регион обслуживания",
    infoApproach: "Подход",
    istanbul: "Стамбул",
    trustHygiene: "Доверие и гигиена",

    quickContact: "Быстрая связь с MEDİSU",
    quickTitle: "Расскажите, что вам нужно",
    quickText:
      "Наша команда оценит ваши потребности и поможет организовать подходящую медицинскую услугу.",

    benefits: [
      "Услуги по всему Стамбулу",
      "Быстрое планирование с учётом доступности",
      "Профессиональная медицинская помощь на дому",
    ],
  },
} as const;

export default function Contact() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = contactContent[locale];

  const contactItems = [
    {
      icon: Phone,
      title: content.phone,
      value: "0542 893 96 46",
      href: "tel:+905428939646",
      isEmail: false,
    },
    {
      icon: MessageCircle,
      title: content.whatsapp,
      value: content.whatsappValue,
      href: "https://wa.me/905428939646",
      isEmail: false,
    },
    {
      icon: Mail,
      title: content.email,
      value: "medisu.saglikhizmetleri@gmail.com",
      href: "mailto:medisu.saglikhizmetleri@gmail.com",
      isEmail: true,
    },
  ];

  return (
    <section
      id="contact"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-100/50 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl px-5 sm:px-6"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,.10)] backdrop-blur-xl sm:rounded-[36px]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">

            {/* SOL TARAF */}
            <div className="p-6 sm:p-8 lg:p-12">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
                {content.badge}
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
                {content.title1}

                <span className="block text-sky-700">
                  {content.title2}
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {content.description}
              </p>

              {/* İLETİŞİM KARTLARI */}
              <div className="mt-6 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500">
                          {item.title}
                        </p>

                        <p
                          className={`mt-1 font-bold text-slate-900 ${
                            item.isEmail
                              ? "break-all text-sm sm:text-base"
                              : "text-base sm:text-lg"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* KISA BİLGİLER */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3">
                  <Clock3
                    size={18}
                    className="shrink-0 text-cyan-700"
                  />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      {content.infoContact}
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      7/24
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3">
                  <MapPin
                    size={18}
                    className="shrink-0 text-cyan-700"
                  />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      {content.infoService}
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      {content.istanbul}
                    </p>
                  </div>
                </div>

                <div className="col-span-2 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 sm:col-span-1">
                  <ShieldCheck
                    size={18}
                    className="shrink-0 text-emerald-600"
                  />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      {content.infoApproach}
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      {content.trustHygiene}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAĞ TARAF */}
            <div className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-700 p-6 text-white sm:p-8 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur sm:text-sm">
                  <ShieldCheck size={16} />
                  {content.quickContact}
                </div>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                  {content.quickTitle}
                </h3>

                <p className="mt-3 text-sm leading-6 text-sky-100 sm:text-base sm:leading-7">
                  {content.quickText}
                </p>

                <div className="mt-5 space-y-2.5">
                  {content.benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-emerald-400"
                      />

                      <span className="text-sm font-medium text-sky-50">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="tel:+905428939646"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:text-base"
                  >
                    <Phone size={19} />
                    0542 893 96 46
                  </a>

                  <a
                    href="https://wa.me/905428939646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:text-base"
                  >
                    <MessageCircle size={19} />
                    {content.whatsapp}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
