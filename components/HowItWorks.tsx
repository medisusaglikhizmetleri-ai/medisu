"use client";

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

const steps = [
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
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
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
            Süreç Nasıl İşliyor?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
            Evde Sağlık Hizmeti
            <span className="block text-sky-700">
              4 Kolay Adımda
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Bize ulaşın, ihtiyacınızı değerlendirelim ve hizmetinizi hızlıca
            planlayalım.
          </p>
        </motion.div>

        {/* ADIMLAR */}
        <div className="relative">
          <div className="absolute left-[12%] right-[12%] top-[55px] hidden h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent lg:block" />

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
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
                    <div className="absolute right-4 top-2 text-5xl font-black text-slate-100 sm:text-6xl">
                      {step.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-800 to-cyan-600 text-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Icon size={23} />
                      </div>

                      <div className="mt-5 text-xs font-bold tracking-wider text-cyan-700">
                        ADIM {step.number}
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
                Hızlı İletişim
              </div>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                İlk Adımı Şimdi Atın
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-sky-100 sm:text-base">
                İhtiyacınızı bize iletin, uygun hizmet planlamasını birlikte
                yapalım.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-cyan-100 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  İstanbul geneli
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  7/24 iletişim
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
              <a
                href="tel:+905396952989"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                <PhoneCall size={18} />
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:px-6 sm:text-base"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
