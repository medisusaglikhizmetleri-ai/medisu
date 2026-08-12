"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0539 695 29 89",
    href: "tel:+905396952989",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Hemen Yazın",
    href: "https://wa.me/905396952989",
  },
  {
    icon: Mail,
    title: "E-Posta",
    value: "medisu.saglikhizmetleri@gmail.com",
    href: "mailto:medisu.saglikhizmetleri@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full bg-cyan-100/50 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-100/50 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl px-5 sm:px-6"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,.10)] backdrop-blur-xl sm:rounded-[36px]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">

            {/* SOL TARAF */}
            <div className="p-6 sm:p-8 lg:p-12">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
                İletişim
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:mt-5 lg:text-5xl">
                Sağlığınız İçin
                <span className="block text-sky-700">
                  Bir Telefon Kadar Yakınız
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Evde sağlık hizmetleri hakkında bilgi almak için bize telefon,
                WhatsApp veya e-posta üzerinden ulaşabilirsiniz.
              </p>

              {/* İLETİŞİM KARTLARI */}
              <div className="mt-6 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500">
                          {item.title}
                        </p>

                        <p
                          className={`mt-1 font-bold text-slate-900 ${
                            item.title === "E-Posta"
                              ? "break-all text-sm sm:text-base"
                              : "text-base sm:text-lg"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* KISA BİLGİLER */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3">
                  <Clock3 size={18} className="shrink-0 text-cyan-700" />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      İletişim
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      7/24
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3">
                  <MapPin size={18} className="shrink-0 text-cyan-700" />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      Hizmet
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      İstanbul
                    </p>
                  </div>
                </div>

                <div className="col-span-2 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 sm:col-span-1">
                  <ShieldCheck size={18} className="shrink-0 text-emerald-600" />

                  <div>
                    <p className="text-[10px] font-medium text-slate-500">
                      Yaklaşım
                    </p>

                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      Güven & Hijyen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAĞ TARAF */}
            <div className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-700 p-6 text-white sm:p-8 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur sm:text-sm">
                  <ShieldCheck size={16} />
                  MEDİSU Hızlı İletişim
                </div>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                  İhtiyacınızı Bize Anlatın
                </h3>

                <p className="mt-3 text-sm leading-6 text-sky-100 sm:text-base sm:leading-7">
                  Ekibimiz ihtiyacınızı değerlendirerek uygun hizmet planlaması
                  konusunda yardımcı olsun.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "İstanbul geneli hizmet",
                    "Uygunluk durumuna göre hızlı planlama",
                    "Evde profesyonel sağlık hizmeti",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-emerald-400"
                      />

                      <span className="text-sm font-medium text-sky-50">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="tel:+905396952989"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:text-base"
                  >
                    <Phone size={19} />
                    0539 695 29 89
                  </a>

                  <a
                    href="https://wa.me/905396952989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:text-base"
                  >
                    <MessageCircle size={19} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
