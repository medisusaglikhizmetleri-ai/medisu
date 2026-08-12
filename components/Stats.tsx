"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  MapPinned,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "7/24",
    title: "İletişim",
  },
  {
    icon: MapPinned,
    value: "39",
    title: "İlçe",
  },
  {
    icon: ShieldCheck,
    value: "%100",
    title: "Hijyen",
  },
  {
    icon: BadgeCheck,
    value: "Uzman",
    title: "Kadromuz",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md sm:min-h-[135px] sm:p-5 lg:min-h-0 lg:flex-row lg:justify-start lg:gap-4 lg:text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition duration-300 group-hover:bg-cyan-600 group-hover:text-white sm:h-12 sm:w-12">
                  <Icon size={21} />
                </div>

                <div className="mt-3 lg:mt-0">
                  <div className="text-2xl font-black tracking-tight text-sky-800 sm:text-3xl">
                    {item.value}
                  </div>

                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                    {item.title}
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
