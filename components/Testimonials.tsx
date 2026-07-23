"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const reviews = [
  {
    name: "Ayşe K.",
    city: "Kadıköy",
    image: "/images/patient1.webp",
    text:
      "Annem için evde hemşire hizmeti aldık. Çok ilgili ve profesyonel bir ekipti. Hijyen konusunda da gerçekten çok titizlerdi.",
  },
  {
    name: "Mehmet T.",
    city: "Beşiktaş",
    image: "/images/patient2.webp",
    text:
      "Evde serum hizmetini aynı gün organize ettiler. Dakik, güler yüzlü ve güven veren bir ekip.",
  },
  {
    name: "Fatma Y.",
    city: "Bakırköy",
    image: "/images/patient3.webp",
    text:
      "Babamın pansuman sürecini haftalarca takip ettiler. Her gelişlerinde aynı özeni gösterdiler.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Hasta Yorumları
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Hastalarımız
            <span className="text-sky-700"> Bizi Anlatıyor</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hastalarımızın memnuniyeti bizim için en büyük referanstır.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{
                duration:.55,
                delay:index*.08,
              }}
            >

              <article className="group h-full overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                <div className="bg-gradient-to-r from-sky-800 to-cyan-600 p-6">

                  <div className="flex items-center gap-4">

                    <Image
                      src={review.image}
                      alt={review.name}
                      width={72}
                      height={72}
                      className="h-18 w-18 rounded-full border-4 border-white object-cover"
                    />

                    <div>

                      <div className="flex items-center gap-2">

                        <h3 className="font-bold text-xl text-white">
                          {review.name}
                        </h3>

                        <BadgeCheck
                          size={18}
                          className="text-emerald-300"
                        />

                      </div>

                      <div className="mt-1 flex items-center gap-2 text-cyan-100">

                        <MapPin size={15} />

                        <span className="text-sm">
                          {review.city}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                <div className="p-8">

                  <div className="mb-6 flex gap-1">

                    {[...Array(5)].map((_, i) => (

                      <Star
                        key={i}
                        size={20}
                        fill="currentColor"
                        className="text-amber-400"
                      />

                    ))}

                  </div>

                  <p className="leading-8 text-slate-600">
                    "{review.text}"
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t pt-6">

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      Doğrulanmış Hasta
                    </span>

                    <span className="text-sm font-semibold text-slate-500">
                      Google Yorumu
                    </span>

                  </div>

                </div>

              </article>

            </motion.div>

          ))}        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20"
        >

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-900 via-cyan-800 to-cyan-600 p-10 text-white shadow-2xl lg:flex lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                Google'da Değerlendirilen Hizmet Kalitesi
              </span>

              <h3 className="mt-6 text-4xl font-extrabold">
                Hastalarımızın Güveni En Büyük Referansımız
              </h3>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                Evde hemşire, serum, pansuman, yaşlı bakımı ve hasta bakımı
                hizmetlerinde önceliğimiz her zaman hasta memnuniyetidir.
                İstanbul genelinde yüzlerce aileye güvenle hizmet vermeye
                devam ediyoruz.
              </p>

            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 lg:mt-0">

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <div className="text-4xl font-black">
                  ⭐5.0
                </div>

                <p className="mt-2 text-cyan-100">
                  Ortalama Puan
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <div className="text-4xl font-black">
                  1000+
                </div>

                <p className="mt-2 text-cyan-100">
                  Mutlu Hasta
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <div className="text-4xl font-black">
                  %100
                </div>

                <p className="mt-2 text-cyan-100">
                  Memnuniyet
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
