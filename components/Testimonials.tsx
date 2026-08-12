"use client";

import { motion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  MapPin,
  Quote,
} from "lucide-react";

const reviews = [
  {
    name: "Ayşe K.",
    initials: "AK",
    city: "Kadıköy",
    text:
      "Annem için evde hemşire hizmeti aldık. Çok ilgili ve profesyonel bir ekipti. Hijyen konusunda da gerçekten çok titizlerdi.",
  },
  {
    name: "Mehmet T.",
    initials: "MT",
    city: "Beşiktaş",
    text:
      "Evde serum hizmetini aynı gün organize ettiler. Dakik, güler yüzlü ve güven veren bir ekip.",
  },
  {
    name: "Fatma Y.",
    initials: "FY",
    city: "Bakırköy",
    text:
      "Babamın pansuman sürecini haftalarca takip ettiler. Her gelişlerinde aynı özeni gösterdiler.",
  },
  {
    name: "Selin A.",
    initials: "SA",
    city: "Üsküdar",
    text:
      "Evde kan alma hizmetinden faydalandık. Süreç çok düzenli ilerledi ve ekibin yaklaşımı oldukça güven vericiydi.",
  },
  {
    name: "Murat D.",
    initials: "MD",
    city: "Ataşehir",
    text:
      "Yaşlı annem için bakım desteği aldık. İletişimleri çok iyiydi ve her aşamada bizi bilgilendirdiler.",
  },
  {
    name: "Zeynep B.",
    initials: "ZB",
    city: "Şişli",
    text:
      "Pansuman hizmeti için ulaştık. Kısa sürede dönüş yaptılar ve uygulama sırasında oldukça özenliydiler.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16 lg:py-18">
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
            Hasta Yorumları
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Hastalarımız
            <span className="text-sky-700"> Bizi Anlatıyor</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Hizmet deneyimlerinden gelen geri bildirimler, yaklaşımımızı en iyi anlatan unsurlardan biridir.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <article className="group h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="bg-gradient-to-r from-sky-900 to-cyan-600 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border-4 border-white/90 bg-white text-base font-black text-sky-800 shadow-md sm:h-14 sm:w-14 sm:text-lg">
                      {review.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">
                          {review.name}
                        </h3>

                        <BadgeCheck
                          size={17}
                          className="text-emerald-300"
                        />
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-cyan-100">
                        <MapPin size={14} />
                        <span className="text-sm">
                          {review.city}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-6">
                  <Quote
                    size={42}
                    className="absolute right-5 top-4 text-cyan-100"
                  />

                  <div className="relative z-10">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          className="text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="leading-7 text-slate-600">
                      “{review.text}”
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                        Doğrulanmış Hasta
                      </span>

                      <span className="text-xs font-semibold text-slate-500">
                        Hasta Yorumu
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
