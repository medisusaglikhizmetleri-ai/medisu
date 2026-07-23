"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  Ambulance,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Bize Ulaşın",
    description:
      "Telefon veya WhatsApp üzerinden bizimle iletişime geçin. Uzman ekibimiz size en kısa sürede dönüş sağlasın.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "İhtiyacınızı Belirleyelim",
    description:
      "Sağlık durumunuzu değerlendirerek size en uygun bakım ve tedavi planını oluşturalım.",
  },
  {
    icon: Ambulance,
    number: "03",
    title: "Ekibimizi Yönlendirelim",
    description:
      "Deneyimli sağlık personelimiz planlanan saatte adresinize güvenle ulaşsın.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Güvenle Hizmet Alın",
    description:
      "Profesyonel sağlık hizmetinizi evinizin konforunda güvenle almaya başlayın.",
  },
];

export default function HowItWorks() {
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
            Süreç Nasıl İşliyor?
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            4 Adımda Evde Sağlık Hizmeti
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MEDİSU olarak süreci sizin için mümkün olduğunca kolay, hızlı ve
            güvenilir hale getiriyoruz.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-cyan-200 hover:shadow-2xl"
              >

                <div className="absolute right-6 top-4 text-7xl font-black text-slate-100 transition-all duration-500 group-hover:text-cyan-100">
                  {step.number}
                </div>

                <div className="relative z-10">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Sonraki Adım

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-3xl bg-sky-900 p-10 text-center text-white"
        >

          <h3 className="text-3xl font-bold">
            İlk Adımı Atın
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-100">
            Tek bir telefonla uzman sağlık ekibimiz ihtiyaçlarınızı
            değerlendirsin ve size en uygun çözümü sunsun.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+905396952989"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-sky-900 transition hover:bg-slate-100"
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

        </motion.div>

      </div>
    </section>
  );
}
