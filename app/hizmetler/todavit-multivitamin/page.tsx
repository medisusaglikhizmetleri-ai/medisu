import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  HeartPulse,
  House,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Todavit Multivitamin Uygulaması İstanbul | MEDİSU",
  description:
    "İstanbul genelinde hekim değerlendirmesi doğrultusunda Todavit multivitamin uygulaması hakkında bilgi alın.",
};

const features = [
  {
    icon: Sparkles,
    title: "12 Vitamin İçeriği",
    text:
      "Todavit; A, D3, E, C ve çeşitli B grubu vitaminleri dahil 12 vitamin içeren parenteral bir multivitamin preparatıdır.",
  },
  {
    icon: Stethoscope,
    title: "Hekim Değerlendirmesi",
    text:
      "Uygulamanın gerekliliği, dozu ve süresi kişinin sağlık durumu değerlendirilerek hekim tarafından belirlenmelidir.",
  },
  {
    icon: ShieldCheck,
    title: "Profesyonel Uygulama",
    text:
      "Damar yolu uygulamalarında steril ekipman ve sağlık personeli tarafından profesyonel uygulama esastır.",
  },
  {
    icon: House,
    title: "Evde Uygulama",
    text:
      "Uygun görülen uygulamalar planlama sonrasında kişinin ev ortamında gerçekleştirilebilir.",
  },
];

const process = [
  "Telefon veya WhatsApp üzerinden MEDİSU ile iletişime geçilir.",
  "Kişinin sağlık durumu, kullanılan ilaçlar ve mevcut vitamin takviyeleri hakkında bilgi alınır.",
  "Todavit uygulamasının uygunluğu hekim değerlendirmesi ile belirlenir.",
  "Planlama sonrasında sağlık personeli adrese yönlendirilir.",
  "Uygulama steril koşullarda gerçekleştirilir ve süreç takip edilir.",
];

export default function TodavitPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/70 blur-[130px]" />
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-cyan-100/70 blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">

            <div>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
              >
                <ArrowLeft size={17} />
                Hizmetlere Dön
              </Link>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
                <HeartPulse size={16} />
                Evde Sağlık Hizmeti
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Todavit
                <span className="block text-sky-700">
                  Multivitamin Uygulaması
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Todavit, parenteral kullanıma uygun 12 vitamin içeren bir
                multivitamin preparatıdır. Uygulamanın kişiye uygunluğu,
                gerekliliği ve süresi hekim değerlendirmesine göre
                belirlenmelidir.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "12 vitamin içeren preparat",
                  "Profesyonel sağlık personeli",
                  "Hekim değerlendirmesi",
                  "İstanbul genelinde hizmet",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-emerald-500"
                    />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex">
                <a
                  href="tel:+905396952989"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-800 px-6 py-4 font-bold text-white shadow-lg"
                >
                  <Phone size={19} />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905396952989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg"
                >
                  <MessageCircle size={19} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* GÖRSEL */}
            <div className="relative">
              <div className="absolute inset-0 scale-105 rounded-full bg-cyan-200/30 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,.15)] sm:p-3">
                <Image
                  src="/images/services/todavit.png"
                  alt="Todavit multivitamin uygulaması"
                  width={900}
                  height={900}
                  priority
                  className="aspect-square w-full rounded-[24px] object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* NEDİR */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              Bilgilendirme
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Todavit Nedir?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Todavit, sulandırıldıktan sonra damar içine veya kas içine
                uygulanabilen parenteral bir multivitamin preparatıdır.
                İçeriğinde toplam 12 vitamin bulunur.
              </p>

              <p>
                Resmî ürün bilgisinde, oral vitamin alımının yetersiz veya
                uygun olmadığı bazı klinik durumlarda kullanımından söz
                edilmektedir. Uygulama kararı ve doz kişiye göre hekim
                tarafından belirlenmelidir.
              </p>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
                Todavit Multivitamin
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Uygulama Hakkında Bilmeniz Gerekenler
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-800 to-cyan-600 text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:gap-16">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
                Uygulama Süreci
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Evde Todavit Uygulaması Nasıl Planlanır?
              </h2>

              <div className="mt-8 space-y-4">
                {process.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-800 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="pt-1 leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* UYARI */}
            <div className="self-start rounded-[28px] bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-700 p-7 text-white shadow-xl sm:p-8">
              <ShieldCheck size={38} className="text-emerald-400" />

              <h3 className="mt-5 text-2xl font-extrabold">
                Uygulama Öncesi Bilgilendirme
              </h3>

              <p className="mt-4 leading-7 text-sky-100">
                Todavit çok sayıda vitamin içerdiğinden, mevcut hastalıklar,
                kullanılan ilaçlar ve diğer vitamin takviyeleri mutlaka
                değerlendirilmelidir.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Karaciğer veya böbrek hastalığı",
                  "Epilepsi veya Parkinson hastalığı",
                  "Vitamin fazlalığı veya ek vitamin kullanımı",
                  "Soya veya yer fıstığı alerjisi",
                  "Gebelik veya emzirme",
                  "Kullanılan ilaçlar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/10 p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <span className="text-sm leading-6 text-sky-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* UYARI NOTU */}
        <section className="bg-amber-50 py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="rounded-[24px] border border-amber-200 bg-white p-6 sm:p-8">
              <h3 className="font-extrabold text-slate-900">
                Önemli Bilgilendirme
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Todavit bir ilaçtır ve herkese uygun olmayabilir. Bu sayfadaki
                bilgiler genel bilgilendirme amacı taşır. Uygulamanın
                gerekliliği, dozu, uygulama yolu ve süresi hekim tarafından
                belirlenmelidir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="rounded-[30px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 p-7 text-center text-white shadow-2xl sm:p-10">
              <Clock3 size={32} className="mx-auto text-cyan-300" />

              <h2 className="mt-4 text-3xl font-extrabold">
                Todavit Uygulaması Hakkında Bilgi Alın
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-100">
                Uygulama ve evde sağlık hizmeti hakkında bilgi almak için
                MEDİSU ile iletişime geçebilirsiniz.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:justify-center">
                <a
                  href="tel:+905396952989"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-sky-900"
                >
                  <Phone size={19} />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905396952989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white"
                >
                  <MessageCircle size={19} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
    </>
  );
}
