import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Clock3,
  Home,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export const metadata: Metadata = {
  title: "TAD 600 Uygulaması | MEDİSU Evde Sağlık Hizmetleri",
  description:
    "TAD 600 uygulaması hakkında bilgi alın. MEDİSU profesyonel sağlık ekibi ile doktor değerlendirmesi ve uygunluk doğrultusunda evde sağlık hizmeti.",
  alternates: {
    canonical: "https://medisusaglik.com/hizmetler/tad-600",
  },
};

const benefits = [
  "Uygulama öncesi sağlık değerlendirmesi",
  "Deneyimli sağlık personeli",
  "Steril ve tek kullanımlık malzemeler",
  "Ev ortamında profesyonel uygulama",
  "Doktor önerisine uygun planlama",
  "Uygulama sürecinde hasta takibi",
];

const process = [
  {
    title: "Ön Görüşme",
    description:
      "Hizmet talebiniz sonrasında sağlık durumunuz ve mevcut doktor öneriniz hakkında ön bilgi alınır.",
  },
  {
    title: "Uygunluk Değerlendirmesi",
    description:
      "TAD 600 uygulamasının sizin için uygun olup olmadığı sağlık profesyonelleri tarafından değerlendirilir.",
  },
  {
    title: "Randevu Planlaması",
    description:
      "Uygunluk sağlanması halinde sizin için uygun gün ve saat belirlenerek sağlık personeli planlaması yapılır.",
  },
  {
    title: "Evde Uygulama",
    description:
      "Sağlık personelimiz gerekli ekipmanlarla adresinize gelerek uygulamayı profesyonel sağlık standartlarına uygun şekilde gerçekleştirir.",
  },
];

const faq = [
  {
    question: "TAD 600 nedir?",
    answer:
      "TAD 600, glutatyon içeren enjeksiyonluk bir üründür. Kullanım kararı ve uygulama şekli kişinin sağlık durumuna göre hekim tarafından değerlendirilmelidir.",
  },
  {
    question: "TAD 600 evde uygulanabilir mi?",
    answer:
      "Uygun görülen hastalarda ve gerekli tıbbi değerlendirme sonrasında uygulama, yetkili sağlık personeli tarafından ev ortamında gerçekleştirilebilir.",
  },
  {
    question: "Uygulama ne kadar sürer?",
    answer:
      "Uygulama süresi kişinin tedavi planına, uygulama yöntemine ve doktor önerisine göre değişiklik gösterebilir.",
  },
  {
    question: "TAD 600 herkese uygulanabilir mi?",
    answer:
      "Hayır. Her tıbbi uygulamada olduğu gibi TAD 600 için de kişinin sağlık geçmişi, kullandığı ilaçlar ve mevcut durumu değerlendirilmelidir.",
  },
  {
    question: "Doktor önerisi gerekli mi?",
    answer:
      "Tıbbi ürünlerin uygulanması kişiye özel değerlendirme gerektirir. Uygun doz, uygulama yöntemi ve tedavi kararı hekim tarafından belirlenmelidir.",
  },
  {
    question: "Randevu nasıl oluşturabilirim?",
    answer:
      "Telefon veya WhatsApp üzerinden MEDİSU ekibine ulaşarak bilgi alabilir ve uygunluk durumuna göre randevu oluşturabilirsiniz.",
  },
];

export default function Tad600Page() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* HERO */}
        <section className="border-b bg-gradient-to-br from-cyan-50 via-white to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-cyan-700"
              >
                Ana Sayfa
              </Link>

              <ChevronRight size={16} />

              <Link
                href="/#services"
                className="transition hover:text-cyan-700"
              >
                Hizmetler
              </Link>

              <ChevronRight size={16} />

              <span className="font-medium text-slate-900">
                TAD 600
              </span>
            </nav>

            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  MEDİSU Evde Sağlık Hizmetleri
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  TAD 600
                  <span className="block text-cyan-700">
                    Evde Uygulama Hizmeti
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                  MEDİSU olarak TAD 600 uygulamasında sağlık
                  durumunuzun değerlendirilmesi, uygunluk kontrolü ve
                  profesyonel sağlık personeli desteğiyle güvenli bir
                  hizmet süreci sunuyoruz.
                </p>

                <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                  Uygulama planı kişinin sağlık durumuna ve doktor
                  değerlendirmesine göre oluşturulur. Sağlık
                  personelimiz gerekli ekipmanlarla adresinize gelerek
                  hizmeti hijyen standartlarına uygun şekilde
                  gerçekleştirir.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="tel:+905396952989"
                    className="inline-flex items-center gap-2 rounded-2xl bg-sky-800 px-7 py-4 font-semibold text-white transition hover:bg-sky-900"
                  >
                    <Phone size={20} />
                    Hemen Ara
                  </a>

                  <a
                    href="https://wa.me/905396952989?text=Merhaba%2C%20TAD%20600%20uygulaması%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-600"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[40px] bg-cyan-100/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-slate-50">
                    <Image
                      src="/images/services/tad600.png"
                      alt="TAD 600 uygulaması"
                      fill
                      priority
                      className="object-contain p-6"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TANITIM */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                TAD 600 Hakkında
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                TAD 600 Uygulaması Nedir?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                TAD 600, glutatyon içeren enjeksiyonluk bir üründür.
                Glutatyon vücutta doğal olarak bulunan ve çeşitli
                hücresel süreçlerde görev alan bir moleküldür.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Tıbbi uygulamalarda kişinin ihtiyaçları birbirinden
                farklıdır. Bu nedenle TAD 600 uygulaması standart bir
                paket olarak değil, kişinin sağlık durumu ve doktor
                değerlendirmesi dikkate alınarak planlanmalıdır.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                MEDİSU'da temel yaklaşımımız; uygulamadan önce
                gerekli bilgilerin alınması, sağlık açısından uygunluk
                değerlendirmesinin yapılması ve işlemin deneyimli
                sağlık personeli tarafından gerçekleştirilmesidir.
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-50 p-8 sm:p-10">
              <ShieldCheck
                size={48}
                className="text-cyan-700"
              />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Önce Güvenlik
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Her kişinin sağlık geçmişi farklıdır. Bu nedenle
                uygulama öncesinde mevcut hastalıklar, kullanılan
                ilaçlar, alerji öyküsü ve doktor önerileri mutlaka
                dikkate alınmalıdır.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-emerald-600"
                  />
                  <span className="text-slate-700">
                    Kişiye özel değerlendirme
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-emerald-600"
                  />
                  <span className="text-slate-700">
                    Profesyonel sağlık personeli
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-emerald-600"
                  />
                  <span className="text-slate-700">
                    Hijyen ve sterilizasyon standartları
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AVANTAJLAR */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                Profesyonel Hizmet
              </span>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                MEDİSU TAD 600 Hizmeti
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ev ortamında sağlık hizmeti alırken güvenli,
                planlı ve profesyonel bir süreç oluşturuyoruz.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <CheckCircle2
                    size={32}
                    className="text-emerald-600"
                  />

                  <p className="mt-5 font-semibold leading-7 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Nasıl İlerliyoruz?
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              TAD 600 Uygulama Süreci
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-bold text-cyan-700">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NEDEN MEDISU */}
        <section className="bg-sky-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  MEDİSU
                </span>

                <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                  Neden MEDİSU?
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Evde sağlık hizmetlerinde hasta güvenliğini,
                  profesyonel uygulamayı ve doğru bilgilendirmeyi
                  ön planda tutuyoruz.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-7">
                  <Stethoscope
                    size={36}
                    className="text-cyan-300"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    Uzman Ekip
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Sağlık hizmetleri deneyimli personel tarafından
                    uygulanır.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-7">
                  <Home
                    size={36}
                    className="text-cyan-300"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    Ev Konforu
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Uygun sağlık hizmetlerini kendi evinizin
                    konforunda alabilirsiniz.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-7">
                  <ShieldCheck
                    size={36}
                    className="text-cyan-300"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    Güvenli Hizmet
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Hijyen ve sağlık standartlarına uygun bir süreç
                    izlenir.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-7">
                  <HeartHandshake
                    size={36}
                    className="text-cyan-300"
                  />

                  <h3 className="mt-5 text-xl font-bold">
                    Hasta Odaklı
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Süreç kişinin ihtiyaçlarına göre planlanır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RANDEVU */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-cyan-50 to-sky-100 p-8 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Clock3
                  size={44}
                  className="text-cyan-700"
                />

                <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                  TAD 600 İçin Bilgi Alın
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  Sağlık durumunuz ve uygulama hakkında bilgi almak
                  için MEDİSU ekibine ulaşabilirsiniz.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="tel:+905396952989"
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-800 px-7 py-4 font-semibold text-white transition hover:bg-sky-900"
                >
                  <Phone size={20} />
                  0539 695 29 89
                </a>

                <a
                  href="https://wa.me/905396952989?text=Merhaba%2C%20TAD%20600%20uygulaması%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-600"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="text-center">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                Sık Sorulan Sorular
              </span>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                TAD 600 Hakkında Merak Edilenler
              </h2>
            </div>

            <div className="mt-14 space-y-5">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[40px] bg-sky-900 px-8 py-14 text-center text-white sm:px-12">
            <HeartHandshake
              size={48}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Sağlığınız İçin Profesyonel Destek
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-100">
              TAD 600 uygulaması hakkında detaylı bilgi ve randevu
              için MEDİSU ekibimizle iletişime geçebilirsiniz.
            </p>

            <a
              href="https://wa.me/905396952989?text=Merhaba%2C%20TAD%20600%20uygulaması%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
            >
              WhatsApp'tan Bilgi Al
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

