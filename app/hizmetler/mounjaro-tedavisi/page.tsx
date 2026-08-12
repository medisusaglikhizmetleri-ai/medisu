import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Activity,
  ClipboardCheck,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Mounjaro Tedavisi İstanbul | Tirzepatid Tedavi Desteği",
  description:
    "İstanbul genelinde hekim değerlendirmesi ve reçetelendirmesi doğrultusunda Mounjaro (tirzepatid) tedavi sürecine yönelik profesyonel sağlık desteği.",
};

const features = [
  {
    icon: Stethoscope,
    title: "Hekim Değerlendirmesi",
    text:
      "Mounjaro reçeteli bir ilaçtır. Tedaviye başlanması ve tedavinin devamı hekim değerlendirmesi doğrultusunda planlanmalıdır.",
  },
  {
    icon: Syringe,
    title: "Haftalık Uygulama",
    text:
      "Mounjaro deri altına uygulanan bir enjeksiyondur ve tedavi planına göre haftada bir kez kullanılır.",
  },
  {
    icon: ClipboardCheck,
    title: "Düzenli Takip",
    text:
      "Tedavi sürecinde kişinin yanıtı, olası yan etkiler ve diğer sağlık durumları düzenli olarak değerlendirilmelidir.",
  },
  {
    icon: ShieldCheck,
    title: "Profesyonel Destek",
    text:
      "Hekimin oluşturduğu tedavi planı doğrultusunda uygulama ve takip sürecine yönelik sağlık desteği sağlanabilir.",
  },
];

const process = [
  "Telefon veya WhatsApp üzerinden MEDİSU ile iletişime geçilir.",
  "Mevcut hekim değerlendirmesi, reçete ve tedavi planı hakkında bilgi alınır.",
  "Kullanılan ilaçlar, mevcut hastalıklar ve bilinen alerjiler değerlendirilir.",
  "Hekimin belirlediği tedavi planı doğrultusunda uygulama süreci planlanır.",
  "Gerekli durumlarda enjeksiyon uygulaması ve takip konusunda sağlık personeli desteği sağlanır.",
];

export default function MounjaroPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-100/70 blur-[130px]" />
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-cyan-100/70 blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">

            {/* SOL */}
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
                Hekim Kontrollü Tedavi Desteği
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mounjaro
                <span className="block text-sky-700">
                  Tedavisi
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Mounjaro, etkin maddesi tirzepatid olan reçeteli bir
                ilaçtır. Tedaviye başlanması, uygun dozun belirlenmesi
                ve tedavi sürecinin takibi hekim değerlendirmesi
                doğrultusunda gerçekleştirilmelidir.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Hekim değerlendirmesi",
                  "Reçeteli tedavi",
                  "Düzenli süreç takibi",
                  "Profesyonel sağlık desteği",
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-800 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-900"
                >
                  <Phone size={19} />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905396952989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600"
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
                  src="/images/services/mounjaro.png"
                  alt="Mounjaro tirzepatid tedavi desteği"
                  width={900}
                  height={900}
                  priority
                  className="aspect-square w-full rounded-[24px] object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* MOUNJARO NEDİR */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">

            <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              Bilgilendirme
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Mounjaro Nedir?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Mounjaro, etkin maddesi tirzepatid olan ve deri altına
                uygulanan reçeteli bir ilaçtır. Tirzepatid, GIP ve GLP-1
                reseptörleri üzerinden etki gösterir.
              </p>

              <p>
                Mounjaro; uygun hastalarda tip 2 diyabet tedavisinde ve
                belirli yetişkinlerde kilo yönetiminde, beslenme ve fiziksel
                aktivite düzenlemeleriyle birlikte kullanılabilir.
              </p>

              <p>
                İlacın kişiye uygun olup olmadığı, tedaviye başlangıç,
                doz değişiklikleri ve tedavinin devam süresi hekim
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
                Mounjaro Tedavi Süreci
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Tedavi Hakkında Bilmeniz Gerekenler
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

        {/* KİMLER İÇİN */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
                  Hekim Değerlendirmesi
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  Kimler İçin Değerlendirilebilir?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Tedavinin uygunluğu kişiye özel olarak değerlendirilir.
                  Genel olarak aşağıdaki durumlarda hekim tarafından
                  değerlendirme yapılabilir:
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Tip 2 diyabeti bulunan uygun hastalar",
                    "Obezitesi bulunan yetişkinler",
                    "Fazla kilolu olup kilo ile ilişkili ek sağlık problemi bulunan yetişkinler",
                    "Beslenme ve fiziksel aktivite düzenlemeleriyle birlikte tıbbi kilo yönetimi gereken kişiler",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <span className="leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ETKİ MEKANİZMASI */}
              <div className="rounded-[28px] bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-700 p-7 text-white shadow-xl sm:p-8">

                <Activity size={38} className="text-cyan-300" />

                <h3 className="mt-5 text-2xl font-extrabold">
                  Tirzepatid Nasıl Etki Gösterir?
                </h3>

                <p className="mt-4 leading-8 text-sky-100">
                  Tirzepatid, GIP ve GLP-1 reseptörlerine etki eder.
                  Bu mekanizmalar kan şekeri kontrolü ve iştah
                  düzenlenmesiyle ilişkili fizyolojik süreçlerde rol oynar.
                </p>

                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm leading-7 text-sky-50">
                    Mounjaro tek başına bir yaşam tarzı programının yerine
                    geçmez. Kilo yönetimi amacıyla kullanıldığında tedavi,
                    uygun beslenme ve fiziksel aktivite planıyla birlikte
                    yürütülmelidir.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:gap-16">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">
                Tedavi Süreci
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                MEDİSU ile Tedavi Desteği Nasıl Planlanır?
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

            {/* YAN ETKİLER */}
            <div className="self-start rounded-[28px] bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-700 p-7 text-white shadow-xl sm:p-8">

              <ShieldCheck size={38} className="text-emerald-400" />

              <h3 className="mt-5 text-2xl font-extrabold">
                Tedavi Sırasında Takip Önemlidir
              </h3>

              <p className="mt-4 leading-7 text-sky-100">
                Mounjaro kullanımı sırasında bazı kişilerde özellikle
                sindirim sistemiyle ilişkili yan etkiler görülebilir.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Bulantı",
                  "İshal",
                  "Kusma",
                  "Kabızlık",
                  "Karın rahatsızlığı",
                  "İştah azalması",
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

              <p className="mt-6 text-sm leading-7 text-sky-100">
                Şiddetli veya geçmeyen belirtilerde kişinin sağlık
                profesyoneliyle iletişime geçmesi gerekir.
              </p>
            </div>

          </div>
        </section>

        {/* ÖNEMLİ UYARI */}
        <section className="bg-amber-50 py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">

            <div className="rounded-[24px] border border-amber-200 bg-white p-6 sm:p-8">

              <h3 className="text-xl font-extrabold text-slate-900">
                Önemli Bilgilendirme
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Mounjaro reçeteli bir ilaçtır ve herkese uygun değildir.
                Tedavinin başlatılması, ilacın temini, reçetelendirilmesi,
                dozunun belirlenmesi veya değiştirilmesi hekim
                değerlendirmesi doğrultusunda yapılmalıdır.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Gebelik durumu, pankreatit öyküsü, ciddi gastrointestinal
                hastalıklar, tiroid hastalıkları, kullanılan diyabet
                ilaçları ve diğer düzenli ilaçlar tedavi öncesinde hekime
                bildirilmelidir.
              </p>

              <p className="mt-4 text-sm leading-7 font-medium text-amber-800">
                Bu sayfadaki bilgiler genel bilgilendirme amacı taşır ve
                doktor muayenesinin, reçetenin veya kişiye özel tedavi
                planının yerine geçmez.
              </p>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">

            <div className="rounded-[30px] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-700 p-7 text-center text-white shadow-2xl sm:p-10">

              <Clock3
                size={32}
                className="mx-auto text-cyan-300"
              />

              <h2 className="mt-4 text-3xl font-extrabold">
                Mounjaro Tedavi Süreci Hakkında Bilgi Alın
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-100">
                Hekiminiz tarafından planlanan tedavi sürecine yönelik
                uygulama ve sağlık desteği hakkında MEDİSU ile iletişime
                geçebilirsiniz.
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
