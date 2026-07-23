"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Güvenilir Sağlık Hizmeti",
    description:
      "Hijyen standartlarına uygun, hasta güvenliğini ön planda tutan profesyonel evde sağlık hizmetleri sunuyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Deneyimli Sağlık Ekibi",
    description:
      "Alanında deneyimli hemşirelerimiz ve sağlık personelimizle kaliteli bakım sağlıyoruz.",
  },
  {
    icon: Award,
    title: "Kalite ve Memnuniyet",
    description:
      "Her hastamıza etik değerlere bağlı, özenli ve güvenilir sağlık hizmeti sunmayı hedefliyoruz.",
  },
];

const certificates = [
  "Hijyen Standartlarına Uygun Hizmet",
  "Hasta Güvenliği Önceliği",
  "İstanbul Genelinde Hizmet",
  "Profesyonel Sağlık Personeli",
];

export default function Certificates() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Kalite ve Güven
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Neden MEDİSU?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Evde sağlık hizmetlerinde güven, hijyen ve profesyonellik en büyük
            önceliğimizdir. Her hastamıza aynı özen ve kalite anlayışıyla hizmet
            sunuyoruz.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl bg-sky-900 p-10 text-white"
        >
          <h3 className="text-3xl font-bold">
            MEDİSU Güvence İlkeleri
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {certificates.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
              >
                <CheckCircle2 className="text-emerald-400" size={22} />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
