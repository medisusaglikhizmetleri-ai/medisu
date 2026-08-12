"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const items = [
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
];

const advantages = [
  "Deneyimli Sağlık Personeli",
  "Steril ve Güvenli Uygulamalar",
  "Hasta Mahremiyetine Özen",
  "Hızlı Hizmet Planlaması",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 py-14 sm:py-16 lg:py-24"
    >
      {/* Arka plan */}
      <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-sky-100/60 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* SOL */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
              <Sparkles size={16} />
              MEDİSU Hakkında
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
              Profesyonel Sağlık
              <span className="block text-sky-700">
                Evinize Geliyor
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
              MEDİSU olarak İstanbul genelinde evde hemşire, serum,
              pansuman, kan alma, yaşlı bakımı ve hasta bakımı hizmetlerini
              deneyimli sağlık personelimiz ile sunuyoruz.
            </p>

            <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
              Amacımız, ihtiyaç duyduğunuz sağlık hizmetine kendi yaşam
              alanınızın konforunda güvenle ulaşabilmenizi sağlamaktır.
            </p>

            {/* Avantajlar */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
              {advantages.map((item) => (
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

          {/* SAĞ GÖRSEL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 scale-105 rounded-[38px] bg-cyan-200/25 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_25px_60px_rgba(15,23,42,.14)] sm:rounded-[34px] sm:p-3">

              {/* Görselin altındaki tekrar eden istatistik alanı kırpıldı */}
              <div className="h-[260px] overflow-hidden rounded-[22px] sm:h-[340px] sm:rounded-[28px] lg:h-[470px]">
                <Image
                  src="/images/why-us.png"
                  alt="MEDİSU evde sağlık hizmetleri"
                  width={800}
                  height={700}
                  className="h-full w-full scale-[1.08] object-cover object-top"
                />
              </div>
            </div>

            {/* Tek güven etiketi */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-bold text-sky-800 shadow-lg backdrop-blur sm:bottom-6 sm:px-5 sm:py-3 sm:text-sm">
              Güven • Hijyen • Profesyonellik
            </div>
          </motion.div>
        </div>

        {/* ALT 3 KART */}
        <div className="mt-10 grid gap-3 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {items.map((item, index) => {
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
