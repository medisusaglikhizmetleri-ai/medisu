"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Clock3,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Lisanslı Sağlık Personeli",
    text: "Deneyimli sağlık personelimiz ile güvenilir evde sağlık hizmeti sunuyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Hasta Odaklı Yaklaşım",
    text: "Her hastaya özel planlama yapıyor ve kaliteli bakım sağlıyoruz.",
  },
  {
    icon: Clock3,
    title: "7/24 Destek",
    text: "İhtiyaç duyduğunuz her an ulaşabileceğiniz profesyonel ekip.",
  },
  {
    icon: MapPinned,
    title: "İstanbul'un 39 İlçesi",
    text: "Adresinize en kısa sürede sağlık personeli yönlendiriyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-32"
    >

      <div className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Neden Bizi Tercih Etmelisiniz?
            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              Sağlığınız İçin
              <br />
              <span className="text-sky-700">
                Güvenilir Bir Ekip
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              MEDİSU olarak evde sağlık hizmetlerini yalnızca uygulama
              olarak değil, hastalarımızın yaşam kalitesini artıran bir
              bakım süreci olarak görüyoruz. Hijyen, güven ve
              profesyonellikten asla ödün vermiyoruz.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Uzman sağlık personeli",
                "Steril ve tek kullanımlık ekipman",
                "İstanbul genelinde hızlı ulaşım",
                "Şeffaf ve güvenilir hizmet anlayışı",
                "Hasta ve hasta yakını odaklı yaklaşım",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
                >

                  <CheckCircle2
                    size={26}
                    className="text-emerald-500"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <Image
              src="/images/why-us.png"
              alt="MEDİSU Evde Sağlık Hizmeti"
              width={700}
              height={900}
              className="rounded-[40px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur">

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-3xl font-extrabold text-sky-800">
                    1000+
                  </div>
                  <p className="text-sm text-slate-600">
                    Mutlu Hasta
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-extrabold text-emerald-600">
                    39
                  </div>
                  <p className="text-sm text-slate-600">
                    İlçeye Hizmet
                  </p>
                </div>

                <div>
                  <div className="text-3xl font-extrabold text-cyan-700">
                    7/24
                  </div>
                  <p className="text-sm text-slate-600">
                    Destek
                  </p>
                </div>

              </div>

            </div>

          </motion.div>        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-24"
        >

          <div className="overflow-hidden rounded-[42px] bg-gradient-to-r from-sky-900 via-cyan-800 to-cyan-600 p-10 text-white shadow-2xl lg:flex lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                MEDİSU Evde Sağlık Hizmetleri
              </span>

              <h3 className="mt-6 text-4xl font-extrabold">
                Güven, Hijyen ve Profesyonellik
              </h3>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                Evde hemşire, serum, pansuman, yaşlı bakımı ve hasta bakımı
                hizmetlerinde deneyimli ekibimiz ile İstanbul'un tüm ilçelerinde
                kaliteli sağlık hizmeti sunuyoruz.
              </p>

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-0">

              {features.map((item) => {
                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
                  >

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-700">
                      <Icon size={28} />
                    </div>

                    <h4 className="text-xl font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-cyan-100 leading-7">
                      {item.text}
                    </p>

                  </div>

                );
              })}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}
