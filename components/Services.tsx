"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Evde Hemşire",
    slug: "evde-hemsire",
    image: "/images/services/hemsire.png",
    description:
      "Deneyimli hemşirelerimiz tarafından güvenli ve profesyonel bakım hizmeti.",
  },
  {
    title: "Evde Serum",
    slug: "evde-serum",
    image: "/images/services/serum.png",
    description:
      "Doktor önerisine uygun serum uygulamaları evinizin konforunda gerçekleştirilir.",
  },
  {
    title: "Pansuman",
    slug: "pansuman",
    image: "/images/services/pansuman.png",
    description:
      "Hijyen standartlarına uygun yara bakım ve pansuman hizmetleri.",
  },
  {
    title: "Kan Alma",
    slug: "kan-alma",
    image: "/images/services/kan-alma.png",
    description:
      "Laboratuvar tetkikleri için evinizde güvenli numune alma hizmeti.",
  },
  {
    title: "Yaşlı Bakımı",
    slug: "yasli-bakimi",
    image: "/images/services/yasli-bakimi.png",
    description:
      "Yaşlı bireyler için güvenilir ve özenli bakım desteği.",
  },
  {
    title: "Hasta Bakımı",
    slug: "hasta-bakimi",
    image: "/images/services/hasta-bakimi.png",
    description:
      "Ameliyat sonrası veya kronik hastalar için profesyonel bakım hizmeti.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#cffafe,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Profesyonel Evde Sağlık Hizmetleri
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
            Hizmetlerimiz
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            İstanbul genelinde uzman sağlık personelimiz ile güvenilir,
            hijyenik ve profesyonel evde sağlık hizmetleri sunuyoruz.
          </p>

        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">          {services.map((service, index) => (

            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .55,
                delay: index * .08,
              }}
            >

              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block h-full"
              >

                <article className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                  <div className="relative overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={520}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />

                    <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-sky-800 backdrop-blur">
                      MEDİSU
                    </div>

                    <div className="absolute bottom-6 left-6">

                      <h3 className="text-3xl font-extrabold text-white">
                        {service.title}
                      </h3>

                      <div className="mt-3 inline-flex rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                        İstanbul Geneli
                      </div>

                    </div>

                  </div>

                  <div className="p-8">

                    <p className="leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <div>

                        <div className="font-bold text-slate-900">
                          Aynı Gün Hizmet
                        </div>

                        <div className="text-sm text-slate-500">
                          Uygunluk durumuna göre
                        </div>

                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition duration-300 group-hover:bg-cyan-600 group-hover:text-white">

                        <ArrowRight
                          size={22}
                          className="transition duration-300 group-hover:translate-x-1"
                        />

                      </div>

                    </div>

                  </div>

                </article>

              </Link>

            </motion.div>

          ))}        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .25 }}
          className="mt-20"
        >

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-900 via-cyan-800 to-cyan-600 p-10 text-white shadow-2xl lg:flex lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                MEDİSU Evde Sağlık Hizmetleri
              </span>

              <h3 className="mt-6 text-4xl font-extrabold">
                Sağlığınız İçin Profesyonel Evde Bakım
              </h3>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                Deneyimli sağlık ekibimiz İstanbul'un 39 ilçesinde
                evde hemşire, serum, pansuman, yaşlı bakımı ve hasta
                bakım hizmetlerini güvenilir şekilde sunmaktadır.
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4 lg:mt-0">

              <a
                href="tel:+905396952989"
                className="rounded-2xl bg-white px-8 py-4 font-bold text-sky-800 transition hover:scale-105"
              >
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-sky-800"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
}
