"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Uzman Sağlık Personeli",
  },
  {
    icon: CheckCircle2,
    title: "Steril ve Güvenli Uygulama",
  },
  {
    icon: Clock3,
    title: "7/24 İletişim",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50"
    >
      <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-100/60 blur-[120px]" />
      <div className="absolute -right-40 top-0 h-[360px] w-[360px] rounded-full bg-cyan-100/60 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-3.5 py-2 text-[11px] font-semibold text-cyan-700 sm:px-4 sm:text-sm">
            İstanbul Geneli Evde Sağlık Hizmetleri
          </span>

          <h1 className="mt-4 text-[38px] font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:mt-5 lg:text-6xl">
            Sağlığınız
            <span className="mt-1 block text-sky-700">
              Evinizin Konforunda
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-6 text-slate-600 sm:text-lg sm:leading-8 lg:mt-5">
            İstanbul genelinde evde hemşire, serum, pansuman, kan alma,
            yaşlı bakımı ve hasta bakımı hizmetlerini deneyimli sağlık
            personelimizle güvenle sunuyoruz.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:mt-6">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon size={16} />
                  </div>

                  <span className="text-[13px] font-semibold leading-5 text-slate-700">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:flex lg:mt-7">
            <a
              href="tel:+905396952989"
              className="flex items-center justify-center gap-2 rounded-xl bg-sky-800 px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-900 sm:px-7 sm:text-base"
            >
              <Phone size={18} />
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 sm:px-7 sm:text-base"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-1 lg:mt-0"
        >
          <div className="absolute inset-0 scale-105 rounded-full bg-cyan-200/25 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,.12)] sm:rounded-[32px] sm:p-3">
            <Image
              src="/images/hero.png"
              alt="MEDİSU Evde Sağlık Hizmetleri"
              width={700}
              height={700}
              priority
              className="aspect-[16/11] w-full rounded-[18px] object-cover sm:rounded-[26px] lg:aspect-auto"
            />
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/95 px-4 py-2 text-[11px] font-bold text-sky-800 shadow-lg backdrop-blur sm:bottom-5 sm:px-5 sm:py-3 sm:text-sm">
            İstanbul&apos;un 39 İlçesinde Hizmet
          </div>
        </motion.div>

      </div>
    </section>
  );
}
