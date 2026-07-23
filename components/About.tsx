"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Güvenilir Hizmet",
    text: "Hijyen standartlarına uygun, etik değerlere bağlı ve hasta güvenliğini ön planda tutan sağlık hizmetleri sunuyoruz.",
  },
  {
    icon: Stethoscope,
    title: "Uzman Sağlık Ekibi",
    text: "Deneyimli hemşirelerimiz ve sağlık personelimiz ile profesyonel evde bakım hizmeti sağlıyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Hasta Odaklı Yaklaşım",
    text: "Her hastamızın ihtiyacına özel bakım planı oluşturarak kaliteli ve güvenilir hizmet sunuyoruz.",
  },
];

const advantages = [
  "İstanbul Genelinde Hizmet",
  "Deneyimli Sağlık Personeli",
  "7/24 İletişim Desteği",
  "Hijyenik ve Güvenli Uygulamalar",
  "Hasta Memnuniyeti Odaklı Hizmet",
  "Hızlı Randevu Oluşturma",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Hakkımızda
            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              MEDİSU ile
              <span className="block text-sky-700">
                Sağlık Evinizde
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              MEDİSU olarak İstanbul genelinde evde hemşire, serum,
              pansuman, kan alma, yaşlı bakımı ve hasta bakımı
              hizmetlerini deneyimli sağlık ekibimiz ile güvenilir,
              hijyenik ve profesyonel şekilde sunuyoruz.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Önceliğimiz; hastalarımızın hastane ortamına ihtiyaç
              duymadan tedavi süreçlerini evlerinin konforunda,
              güvenle sürdürebilmelerini sağlamaktır.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
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

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <h3 className="text-4xl font-extrabold text-sky-700">
                  7/24
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Destek
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <h3 className="text-4xl font-extrabold text-sky-700">
                  39
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  İlçeye Hizmet
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <h3 className="text-4xl font-extrabold text-sky-700">
                  %100
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Memnuniyet
                </p>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-8"
          >
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
