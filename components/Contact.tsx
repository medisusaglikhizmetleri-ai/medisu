"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0539 695 29 89",
    href: "tel:+905396952989",
    color: "sky",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Hemen Yazın",
    href: "https://wa.me/905396952989",
    color: "emerald",
  },
  {
    icon: Mail,
    title: "E-Posta",
    value: "medisu.saglikhizmetleri@gmail.com",
    href: "mailto:medisu.saglikhizmetleri@gmail.com",
    color: "cyan",
  },
  {
    icon: MapPin,
    title: "Hizmet Bölgesi",
    value: "İstanbul Geneli",
    href: "#",
    color: "violet",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-28"
    >
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-6"
      >
        <div className="rounded-[36px] border border-white/60 bg-white/80 p-10 shadow-2xl backdrop-blur-xl md:p-14">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              İletişim
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Bizimle İletişime Geçin
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Evde hemşire, serum, pansuman, kan alma, yaşlı bakımı ve diğer
              evde sağlık hizmetleri hakkında bilgi almak veya hızlı randevu
              oluşturmak için bizimle iletişime geçebilirsiniz.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">

                    <p className="text-sm text-slate-500">
                      {card.title}
                    </p>

                    <h3 className="mt-1 break-all text-xl font-bold text-slate-900">
                      {card.value}
                    </h3>

                  </div>

                  <ArrowRight
                    size={22}
                    className="text-slate-300 transition group-hover:translate-x-2 group-hover:text-cyan-700"
                  />

                </a>
              );
            })}

            <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Clock3 size={28} />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Çalışma Saatleri
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  7 Gün • 24 Saat
                </h3>

                <p className="mt-1 text-slate-500">
                  Acil sağlık hizmetleri için bize ulaşabilirsiniz.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-800 to-cyan-700 p-10 text-center text-white">

            <h3 className="text-3xl font-bold">
              Sağlığınız İçin Bir Telefon Kadar Yakınız
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-100">
              MEDİSU uzman sağlık ekibi İstanbul genelinde evinizde güvenilir,
              hijyenik ve profesyonel sağlık hizmeti sunmaktadır.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="tel:+905396952989"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-sky-800 transition hover:bg-slate-100"
              >
                📞 Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
