"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import type { Locale } from "@/lib/translations";

const aboutContent = {
  tr: {
    badge: "MEDİSU Hakkında",
    title1: "Profesyonel Sağlık",
    title2: "Evinize Geliyor",
    paragraph1:
      "MEDİSU olarak İstanbul genelinde evde hemşire, serum, pansuman, kan alma, yaşlı bakımı ve hasta bakımı hizmetlerini deneyimli sağlık personelimiz ile sunuyoruz.",
    paragraph2:
      "Amacımız, ihtiyaç duyduğunuz sağlık hizmetine kendi yaşam alanınızın konforunda güvenle ulaşabilmenizi sağlamaktır.",

    advantages: [
      "Deneyimli Sağlık Personeli",
      "Steril ve Güvenli Uygulamalar",
      "Hasta Mahremiyetine Özen",
      "Hızlı Hizmet Planlaması",
    ],

    imageAlt: "MEDİSU evde sağlık hizmetleri",
    trustLabel: "Güven • Hijyen • Profesyonellik",

    items: [
      {
        icon: ShieldCheck,
        title: "Güvenilir Hizmet",
        text:
          "Hasta güvenliği, hijyen ve etik çalışma prensiplerini ön planda tutuyoruz.",
      },
      {
        icon: Stethoscope,
        title: "Uzman Sağlık Ekibi",
        text:
          "Deneyimli sağlık personelimiz ile evinizde profesyonel destek sunuyoruz.",
      },
      {
        icon: HeartHandshake,
        title: "Hasta Odaklı Yaklaşım",
        text:
          "Her hastanın ihtiyacını ayrı değerlendirerek uygun planlama yapıyoruz.",
      },
    ],
  },

  en: {
    badge: "About MEDİSU",
    title1: "Professional Healthcare",
    title2: "Delivered to Your Home",
    paragraph1:
      "At MEDİSU, we provide home nursing, IV therapy, wound dressing, blood collection, elderly care and patient care services throughout Istanbul with experienced healthcare professionals.",
    paragraph2:
      "Our goal is to help you access the healthcare services you need safely and comfortably in your own home.",

    advantages: [
      "Experienced Healthcare Staff",
      "Sterile and Safe Procedures",
      "Respect for Patient Privacy",
      "Fast Service Planning",
    ],

    imageAlt: "MEDİSU home healthcare services",
    trustLabel: "Trust • Hygiene • Professionalism",

    items: [
      {
        icon: ShieldCheck,
        title: "Reliable Service",
        text:
          "We prioritize patient safety, hygiene and ethical working principles.",
      },
      {
        icon: Stethoscope,
        title: "Professional Healthcare Team",
        text:
          "Our experienced healthcare professionals provide professional support in your home.",
      },
      {
        icon: HeartHandshake,
        title: "Patient-Centered Approach",
        text:
          "We assess each patient's needs individually and plan the appropriate service.",
      },
    ],
  },

  ar: {
    badge: "عن MEDİSU",
    title1: "رعاية صحية احترافية",
    title2: "تصل إلى منزلك",
    paragraph1:
      "في MEDİSU نقدم خدمات التمريض المنزلي والعلاج الوريدي وتضميد الجروح وسحب الدم ورعاية كبار السن ورعاية المرضى في جميع أنحاء إسطنبول بواسطة طاقم صحي ذي خبرة.",
    paragraph2:
      "هدفنا هو مساعدتك على الحصول على الرعاية الصحية التي تحتاجها بأمان وراحة داخل منزلك.",

    advantages: [
      "طاقم صحي ذو خبرة",
      "إجراءات آمنة ومعقمة",
      "احترام خصوصية المريض",
      "تخطيط سريع للخدمة",
    ],

    imageAlt: "خدمات MEDİSU للرعاية الصحية المنزلية",
    trustLabel: "الثقة • النظافة • الاحتراف",

    items: [
      {
        icon: ShieldCheck,
        title: "خدمة موثوقة",
        text:
          "نضع سلامة المريض والنظافة ومبادئ العمل الأخلاقية في مقدمة أولوياتنا.",
      },
      {
        icon: Stethoscope,
        title: "فريق صحي متخصص",
        text:
          "يقدم طاقمنا الصحي ذو الخبرة دعماً احترافياً في منزلك.",
      },
      {
        icon: HeartHandshake,
        title: "نهج يركز على المريض",
        text:
          "نقيّم احتياجات كل مريض بشكل فردي ونخطط للخدمة المناسبة.",
      },
    ],
  },

  ru: {
    badge: "О MEDİSU",
    title1: "Профессиональная медицинская помощь",
    title2: "У вас дома",
    paragraph1:
      "MEDİSU предоставляет услуги медсестры на дому, внутривенной терапии, перевязок, забора крови, ухода за пожилыми и пациентами по всему Стамбулу с участием опытных медицинских специалистов.",
    paragraph2:
      "Наша цель — обеспечить безопасный и удобный доступ к необходимой медицинской помощи прямо у вас дома.",

    advantages: [
      "Опытный медицинский персонал",
      "Стерильные и безопасные процедуры",
      "Уважение к конфиденциальности пациента",
      "Быстрое планирование услуг",
    ],

    imageAlt: "MEDİSU медицинская помощь на дому",
    trustLabel: "Доверие • Гигиена • Профессионализм",

    items: [
      {
        icon: ShieldCheck,
        title: "Надёжное обслуживание",
        text:
          "Мы уделяем особое внимание безопасности пациентов, гигиене и профессиональной этике.",
      },
      {
        icon: Stethoscope,
        title: "Профессиональная медицинская команда",
        text:
          "Наши опытные медицинские специалисты оказывают профессиональную помощь у вас дома.",
      },
      {
        icon: HeartHandshake,
        title: "Индивидуальный подход",
        text:
          "Мы отдельно оцениваем потребности каждого пациента и планируем подходящую услугу.",
      },
    ],
  },
} as const;

export default function About() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = aboutContent[locale];

  return (
    <section
      id="about"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-sky-100/60 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <motion.div
            initial={{
              opacity: 0,
              x: locale === "ar" ? 25 : -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
              <Sparkles size={16} />
              {content.badge}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
              {content.title1}

              <span className="block text-sky-700">
                {content.title2}
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {content.paragraph1}
            </p>

            <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
              {content.paragraph2}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
              {content.advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm sm:px-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />

                  <span className="text-sm font-medium leading-5 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: locale === "ar" ? -25 : 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 scale-105 rounded-[38px] bg-cyan-200/25 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_25px_60px_rgba(15,23,42,.14)] sm:rounded-[34px] sm:p-3">
              <div className="h-[260px] overflow-hidden rounded-[22px] sm:h-[340px] sm:rounded-[28px] lg:h-[470px]">
                <Image
                  src="/images/why-us.png"
                  alt={content.imageAlt}
                  width={800}
                  height={700}
                  className="h-full w-full scale-[1.08] object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-bold text-sky-800 shadow-lg backdrop-blur sm:bottom-6 sm:px-5 sm:py-3 sm:text-sm">
              {content.trustLabel}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {content.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group flex items-start gap-4 rounded-[22px] border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg md:block md:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-800 to-cyan-600 text-white shadow-md md:h-14 md:w-14 md:rounded-2xl">
                  <Icon size={23} />
                </div>

                <div className="md:mt-5">
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
