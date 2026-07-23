"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Güvenilir Sağlık Hizmeti",
    description:
      "Tüm işlemler hijyen kurallarına uygun ve profesyonel sağlık personeli tarafından uygulanmaktadır.",
  },
  {
    icon: HeartHandshake,
    title: "Hasta Memnuniyeti",
    description:
      "Her hastamıza bireysel yaklaşım sunuyor, güven ve memnuniyeti ön planda tutuyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Deneyimli Ekip",
    description:
      "Alanında deneyimli hemşire ve sağlık personellerimizle kaliteli hizmet sunuyoruz.",
  },
  {
    icon: Clock3,
    title: "7/24 Ulaşılabilir",
    description:
      "İstanbul genelinde ihtiyaç duyduğunuz her an yanınızdayız.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-sky-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            MEDİSU Güvencesi
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Sağlığınızı Güvenle Evinize Taşıyoruz
          </h2>

          <p className="mt-6 text-lg leading-8 text-sky-100">
            Deneyimli sağlık personelimiz ve hasta odaklı yaklaşımımız ile
            İstanbul genelinde güvenilir evde sağlık hizmeti sunuyoruz.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-sky-100">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
