"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Lisanslı Sağlık Personeli",
  "Steril ve Güvenli Uygulama",
  "İstanbul Geneli Hizmet",
  "7/24 Destek",
];

const stats = [
  {
    icon: HeartHandshake,
    value: "1000+",
    title: "Mutlu Hasta",
  },
  {
    icon: ShieldCheck,
    value: "%100",
    title: "Hasta Memnuniyeti",
  },
  {
    icon: Clock3,
    value: "7/24",
    title: "Destek",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">

      <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-sky-100 blur-[140px]" />

      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 py-24 lg:flex-row">

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            İstanbul Geneli Evde Sağlık Hizmetleri
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">

            Sağlığınız

            <br />

            <span className="text-sky-700">
              Evinizin Konforunda
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

            MEDİSU olarak İstanbul genelinde uzman hemşirelerimiz ile
            evde hemşire, serum, pansuman, yaşlı bakımı ve profesyonel
            sağlık hizmetlerini güvenle sunuyoruz.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-2">

              <span className="text-xl">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="font-semibold text-slate-700">
                1000+ Mutlu Hasta
              </span>

            </div>

            <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Aynı Gün Hizmet
            </div>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-md"
              >

                <CheckCircle2
                  size={22}
                  className="text-emerald-500"
                />

                <span className="font-medium text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="tel:+905396952989"
              className="flex items-center gap-3 rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-sky-900"
            >
              <Phone size={20} />
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905396952989"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-600"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>
                    <div className="mt-16 grid gap-5 sm:grid-cols-3">

            {stats.map((item) => {
              const Icon = item.icon;

              return (

                <div
                  key={item.value}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">

                    <Icon size={28} />

                  </div>

                  <div className="text-3xl font-extrabold text-slate-900">
                    {item.value}
                  </div>

                  <p className="mt-2 text-slate-600">
                    {item.title}
                  </p>

                </div>

              );
            })}

          </div>

        </motion.div>

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="relative">

            <div className="absolute inset-0 scale-110 rounded-full bg-cyan-200/40 blur-[130px]" />

            <div className="absolute -left-8 top-8 z-30 rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-2xl">

              <div className="text-sm text-slate-500">
                Hasta Memnuniyeti
              </div>

              <div className="mt-2 text-4xl font-black text-emerald-600">
                %100
              </div>

            </div>

            <div className="absolute right-6 top-6 z-30 rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-2xl">

              <div className="text-xs uppercase tracking-widest text-slate-500">
                MEDİSU
              </div>

              <div className="mt-2 font-bold text-sky-800">
                Lisanslı Sağlık Personeli
              </div>

            </div>

            <div className="absolute -right-8 bottom-24 z-30 rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-2xl">

              <div className="text-sm text-slate-500">
                Hizmet Bölgesi
              </div>

              <div className="mt-2 text-3xl font-black text-sky-700">
                39 İlçe
              </div>

            </div>

            <div className="overflow-hidden rounded-[42px] border border-white bg-white p-4 shadow-[0_35px_80px_rgba(15,23,42,.15)]">

              <Image
               
               
  src="/images/hero.png"
  alt="MEDİSU Evde Sağlık Hizmetleri"
  width={700}
                height={850}
                priority

                className="h-auto w-full rounded-[32px] object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="absolute -bottom-7 left-1/2 z-40 w-[92%] -translate-x-1/2 rounded-[28px] border border-slate-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">

              <div className="grid grid-cols-3 gap-5 text-center">

                <div>

                  <div className="text-3xl font-black text-sky-800">
                    7/24
                  </div>

                  <div className="mt-1 text-sm text-slate-600">
                    Destek
                  </div>

                </div>

                <div>

                  <div className="text-3xl font-black text-emerald-600">
                    1000+
                  </div>

                  <div className="mt-1 text-sm text-slate-600">
                    Hasta
                  </div>

                </div>

                <div>

                  <div className="text-3xl font-black text-cyan-700">
                    %100
                  </div>

                  <div className="mt-1 text-sm text-slate-600">
                    Güven
                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>
              </div>

      <div className="absolute inset-x-0 bottom-0">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-4 rounded-[36px] border border-slate-100 bg-white/90 p-6 shadow-xl backdrop-blur lg:grid-cols-4">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                <ShieldCheck className="text-cyan-700" />

              </div>

              <div>

                <div className="font-bold text-slate-900">
                  Lisanslı Ekip
                </div>

                <div className="text-sm text-slate-500">
                  Uzman sağlık personeli
                </div>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                <HeartHandshake className="text-emerald-600" />

              </div>

              <div>

                <div className="font-bold text-slate-900">
                  1000+ Hasta
                </div>

                <div className="text-sm text-slate-500">
                  Memnuniyet odaklı hizmet
                </div>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                <Clock3 className="text-sky-700" />

              </div>

              <div>

                <div className="font-bold text-slate-900">
                  7/24 Destek
                </div>

                <div className="text-sm text-slate-500">
                  Her zaman ulaşılabilir
                </div>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                <CheckCircle2 className="text-cyan-700" />

              </div>

              <div>

                <div className="font-bold text-slate-900">
                  İstanbul Geneli
                </div>

                <div className="text-sm text-slate-500">
                  39 ilçeye hizmet
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
