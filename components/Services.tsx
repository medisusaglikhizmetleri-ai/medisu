"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Evde Hemşire",
    slug: "evde-hemsire",
    image: "/images/services/hemsire.png",
    position: "center",
    description:
      "Deneyimli sağlık personelimiz ile evinizde profesyonel hemşirelik desteği.",
  },
  {
    title: "Evde Serum",
    slug: "evde-serum",
    image: "/images/services/serum.png",
    position: "center",
    description:
      "Doktor önerisine uygun serum uygulamalarının evinizde gerçekleştirilmesi.",
  },
  {
    title: "Pansuman",
    slug: "pansuman",
    image: "/images/services/pansuman.png",
    position: "center",
    description:
      "Hijyen standartlarına uygun yara bakım ve pansuman hizmetleri.",
  },
  {
    title: "Kan Alma",
    slug: "kan-alma",
    image: "/images/services/kan-alma.png",
    position: "center",
    description:
      "Laboratuvar tetkikleri için evinizde güvenli numune alma hizmeti.",
  },
  {
    title: "Yaşlı Bakımı",
    slug: "yasli-bakimi",
    image: "/images/services/yasli-bakimi.png",
    position: "center",
    description:
      "Yaşlı bireyler için özenli, düzenli ve güvenilir evde bakım desteği.",
  },
  {
    title: "Hasta Bakımı",
    slug: "hasta-bakimi",
    image: "/images/services/hasta-bakimi.png",
    position: "center",
    description:
      "Ameliyat sonrası veya bakım ihtiyacı olan hastalar için profesyonel destek.",
  },

  {
    title: "Glutatyon Tedavisi",
    slug: "glutatyon-tedavisi",
    image: "/images/services/glutatyon.png",
    position: "center",
    description:
      "Glutatyon içeren intravenöz uygulamanın hekim değerlendirmesi doğrultusunda evinizde sağlık personeli tarafından gerçekleştirilmesi.",
  },
  {
    title: "Pascorbin Tedavisi",
    slug: "pascorbin-tedavisi",
    image: "/images/services/pascorbin.png",
    position: "center",
    description:
      "C vitamini içeren Pascorbin uygulamasının hekim değerlendirmesi doğrultusunda evinizde sağlık personeli tarafından gerçekleştirilmesi.",
  },
  {
    title: "Todavit Multivitamin",
    slug: "todavit-multivitamin",
    image: "/images/services/todavit.png",
    position: "center",
    description:
      "Todavit multivitamin uygulamasının hekim değerlendirmesi doğrultusunda evinizde profesyonel sağlık personeli tarafından uygulanması.",
  },
  {
    title: "NAD+ Tedavisi",
    slug: "nad-plus-tedavisi",
    image: "/images/services/nad-plus.png",
    position: "center",
    description:
      "NAD+ intravenöz uygulamasının uygunluk değerlendirmesi sonrasında sağlık personeli tarafından ev ortamında gerçekleştirilmesi.",
  },

  // MOUNJARO

  {
    title: "Mounjaro Tedavisi",
    slug: "mounjaro-tedavisi",
    image: "/images/services/mounjaro.png",
    position: "center",
    description:
      "Hekim değerlendirmesi ve reçetelendirmesi doğrultusunda Mounjaro (tirzepatid) tedavi sürecine yönelik profesyonel sağlık desteği.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:px-5 sm:text-sm">
            Profesyonel Evde Sağlık Hizmetleri
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:mt-5 sm:text-5xl lg:text-6xl">
            İhtiyacınız Olan Sağlık Hizmeti
            <span className="block text-sky-700">
              Evinize Gelsin
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            İstanbul genelinde deneyimli sağlık personelimiz ile evde sağlık
            ve bakım hizmetleri sunuyoruz.
          </p>
        </motion.div>

        {/* HİZMET KARTLARI */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
            >
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block h-full"
              >
                <article className="h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl sm:rounded-[28px]">

                  {/* GÖRSEL */}
                  <div className="relative h-[180px] overflow-hidden sm:h-[210px] lg:h-[245px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - MEDİSU Evde Sağlık Hizmetleri`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: service.position,
                      }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />

                    <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-sky-800 shadow backdrop-blur sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                      İstanbul Geneli
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">
                      <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* İÇERİK */}
                  <div className="p-5 sm:p-6 lg:p-7">
                    <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ALT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 overflow-hidden rounded-[26px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 p-6 text-white shadow-xl sm:mt-12 sm:p-8 lg:mt-16 lg:rounded-[38px] lg:p-10"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-8">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                MEDİSU Evde Sağlık Hizmetleri
              </span>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:mt-5 lg:text-4xl">
                Hangi Hizmete İhtiyacınız Olduğundan Emin Değil misiniz?
              </h3>

              <p className="mt-3 text-sm leading-6 text-sky-100 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
                Bize ulaşın, ihtiyacınızı birlikte değerlendirelim ve uygun
                hizmet hakkında bilgi verelim.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
              <a
                href="tel:+905396952989"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3.5 text-sm font-bold text-sky-900 shadow-lg transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                <Phone size={18} />
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:px-6 sm:text-base"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
