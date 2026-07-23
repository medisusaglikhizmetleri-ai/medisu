import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Clock3,
  ChevronRight,
  Star,
  Users,
  Home,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
// Fallback local FAQSchema component in case the shared component is missing.
// Kept minimal to avoid build errors; accepts `faqs` prop.
const FAQSchema = ({ faqs }: { faqs: any }) => {
  return null;
};

const services = {
  "evde-hemsire": {
    title: "Evde Hemşire Hizmeti",
    description:
      "MEDİSU olarak İstanbul genelinde deneyimli hemşirelerimiz ile profesyonel evde hemşirelik hizmeti sunuyoruz.",
    items: [
      "Serum uygulaması",
      "Enjeksiyon",
      "Pansuman",
      "İlaç uygulamaları",
      "Vital bulgu takibi",
      "Hasta değerlendirmesi",
    ],
  },

  "evde-serum": {
    title: "Evde Serum Hizmeti",
    description:
      "Doktor önerisine uygun serum uygulamaları uzman sağlık personelimiz tarafından güvenle uygulanmaktadır.",
    items: [
      "Vitamin Serumları",
      "Sıvı Desteği",
      "Doktor Reçetesine Uygun Uygulama",
      "Steril Malzeme Kullanımı",
    ],
  },

  pansuman: {
    title: "Evde Pansuman Hizmeti",
    description:
      "Yara bakımında hijyen standartlarına uygun profesyonel pansuman hizmeti sunuyoruz.",
    items: [
      "Ameliyat Sonrası Pansuman",
      "Yara Bakımı",
      "Bası Yarası Bakımı",
      "Düzenli Kontrol",
    ],
  },

  "kan-alma": {
    title: "Evde Kan Alma Hizmeti",
    description:
      "Laboratuvar testleri için evinizde güvenli şekilde kan alma işlemi gerçekleştiriyoruz.",
    items: [
      "Kan Alma",
      "Numune Teslimi",
      "Laboratuvar Yönlendirmesi",
    ],
  },

  "yasli-bakimi": {
    title: "Evde Yaşlı Bakımı",
    description:
      "Yaşlı bireylerin günlük bakım ihtiyaçları için profesyonel destek sunuyoruz.",
    items: [
      "Kişisel Bakım",
      "İlaç Takibi",
      "Refakat",
      "Beslenme Desteği",
    ],
  },

  "hasta-bakimi": {
    title: "Evde Hasta Bakımı",
    description:
      "Ameliyat sonrası veya kronik hastalar için profesyonel bakım hizmeti.",
    items: [
      "Yatak Hastası Bakımı",
      "Hijyen Desteği",
      "Beslenme Desteği",
      "Sağlık Takibi",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hizmet: string }>;
}): Promise<Metadata> {
  const { hizmet } = await params;

  const service = services[hizmet as keyof typeof services];

  if (!service) {
    return {
      title: "Sayfa Bulunamadı | MEDİSU",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://medisusaglik.com/hizmetler/${hizmet}`,
    },
  };
}

export default async function HizmetPage({
  params,
}: {
  params: Promise<{ hizmet: string }>;
}) {
  const { hizmet } = await params;

  const service = services[hizmet as keyof typeof services];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">
          Sayfa Bulunamadı
        </h1>
      </main>
    );
  }

  const faq = [
    {
      question: `${service.title} nasıl alınır?`,
      answer:
        "Telefon veya WhatsApp üzerinden bize ulaştığınızda uzman ekibimiz en kısa sürede planlama yaparak adresinize yönlendirilir.",
    },
    {
      question: "İstanbul'un tüm ilçelerine geliyor musunuz?",
      answer:
        "Evet. MEDİSU olarak İstanbul genelinde evde sağlık hizmeti sunuyoruz.",
    },
    {
      question: "Aynı gün hizmet alabilir miyim?",
      answer:
        "Uygunluk durumuna göre birçok ilçeye aynı gün sağlık personeli yönlendirebiliyoruz.",
    },
    {
      question: "Kullanılan malzemeler steril mi?",
      answer:
        "Evet. Tüm işlemler tek kullanımlık ve steril ekipmanlarla gerçekleştirilmektedir.",
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        district={""}
        service={service.title}
      />

      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`https://medisusaglik.com/hizmetler/${hizmet}`}
      />

      <FAQSchema faqs={faq} />

      <Header />

      <main className="bg-white">

        <section className="relative overflow-hidden border-b bg-gradient-to-br from-cyan-50 via-white to-slate-50">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-24">

            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">

              <Link href="/" className="hover:text-cyan-700">
                Ana Sayfa
              </Link>

              <ChevronRight size={16} />

              <Link href="/#services" className="hover:text-cyan-700">
                Hizmetler
              </Link>

              <ChevronRight size={16} />

              <span className="font-semibold text-slate-900">
                {service.title}
              </span>

            </nav>

            <div className="flex flex-wrap gap-3">

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                İstanbul Geneli Hizmet
              </span>

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                7/24 Destek
              </span>

              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Uzman Sağlık Ekibi
              </span>

            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              {service.description}
              MEDİSU olarak hasta güvenliği, hijyen ve profesyonelliği ön
              planda tutarak İstanbul genelinde güvenilir evde sağlık
              hizmetleri sunuyoruz.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="tel:+905396952989"
                className="inline-flex items-center gap-3 rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-sky-900"
              >
                <Phone size={20} />
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>
                        <div className="mt-16 grid gap-6 md:grid-cols-4">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="mb-4 text-cyan-700" size={34} />
                <h3 className="font-bold text-slate-900">
                  Güvenilir Hizmet
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tüm işlemler uzman sağlık personeli tarafından hijyen
                  standartlarına uygun olarak gerçekleştirilmektedir.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Clock3 className="mb-4 text-cyan-700" size={34} />
                <h3 className="font-bold text-slate-900">
                  Hızlı Ulaşım
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  İstanbul genelinde uygunluk durumuna göre aynı gün
                  sağlık personeli yönlendirebiliyoruz.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <HeartHandshake className="mb-4 text-cyan-700" size={34} />
                <h3 className="font-bold text-slate-900">
                  Hasta Odaklı Yaklaşım
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Her hastanın ihtiyaçlarına uygun kişiselleştirilmiş
                  bakım planı oluşturuyoruz.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Users className="mb-4 text-cyan-700" size={34} />
                <h3 className="font-bold text-slate-900">
                  Deneyimli Kadro
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Alanında deneyimli hemşirelerimiz ve sağlık personelimiz
                  ile profesyonel sağlık hizmeti sunuyoruz.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-4xl">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Hizmet Hakkında
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              {service.title} Nedir?
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {service.title}, hastaların hastane veya sağlık kuruluşuna
              gitmesine gerek kalmadan kendi yaşam alanlarında güvenli
              sağlık hizmeti almasını sağlayan profesyonel bir evde sağlık
              uygulamasıdır.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              MEDİSU olarak İstanbul genelinde deneyimli sağlık
              personelimizle hastalarımıza güvenilir, hijyenik ve kaliteli
              hizmet sunuyoruz. Tüm uygulamalar Sağlık Bakanlığı
              standartlarına uygun şekilde steril ekipman kullanılarak
              gerçekleştirilmektedir.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Hastanın sağlık durumuna göre gerekli değerlendirmeler
              yapıldıktan sonra uygun bakım planı oluşturulur. Böylece hem
              hasta hem de hasta yakınları güven içerisinde sağlık
              hizmetinden faydalanabilir.
            </p>

          </div>

        </section>

        <section className="bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="text-center">

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Kimler İçin?
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Kimler İçin Uygundur?
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Ameliyat sonrası bakım ihtiyacı olanlar",
                "Yaşlı bireyler",
                "Yatağa bağımlı hastalar",
                "Kronik hastalığı bulunan kişiler",
                "Evinde sağlık hizmeti almak isteyenler",
                "Yoğun hastane trafiğinden kaçınmak isteyenler",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <CheckCircle2
                    className="mb-5 text-cyan-700"
                    size={34}
                  />

                  <h3 className="text-xl font-bold text-slate-900">
                    {item}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Hizmet Kapsamı
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Bu Hizmette Neler Sunuyoruz?
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-cyan-200 hover:shadow-lg"
              >
                <CheckCircle2
                  className="mt-1 text-cyan-700"
                  size={28}
                />

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    Bu uygulama uzman sağlık personelimiz tarafından
                    hijyen standartlarına uygun olarak güvenle
                    gerçekleştirilmektedir.
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>
                <section className="bg-gradient-to-b from-white to-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="text-center">

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Hizmet Süreci
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Nasıl Çalışıyoruz?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Hastalarımızın güvenli ve kaliteli sağlık hizmetine kolayca
                ulaşabilmesi için süreci mümkün olduğunca hızlı ve şeffaf
                yönetiyoruz.
              </p>

            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-4">

              {[
                {
                  no: "01",
                  title: "Bize Ulaşın",
                  text: "Telefon veya WhatsApp üzerinden talebinizi iletin.",
                  icon: Phone,
                },
                {
                  no: "02",
                  title: "Değerlendirme",
                  text: "Sağlık personelimiz ihtiyacınızı analiz eder.",
                  icon: Stethoscope,
                },
                {
                  no: "03",
                  title: "Planlama",
                  text: "Size en uygun saat için randevu oluşturulur.",
                  icon: Clock3,
                },
                {
                  no: "04",
                  title: "Evde Hizmet",
                  text: "Uzman ekibimiz adresinize gelerek işlemi gerçekleştirir.",
                  icon: Home,
                },
              ].map((step) => (
                <div
                  key={step.no}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <step.icon
                    size={42}
                    className="text-cyan-700"
                  />

                  <div className="mt-8 text-5xl font-black text-cyan-100">
                    {step.no}
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              MEDİSU Farkı
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Neden MEDİSU?
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <ShieldCheck
                className="text-cyan-700"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-bold">
                Güven
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Sağlık hizmetlerinde hasta güvenliği en büyük önceliğimizdir.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <HeartHandshake
                className="text-cyan-700"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-bold">
                Deneyim
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Deneyimli sağlık personelimiz ile kaliteli hizmet sunuyoruz.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <Sparkles
                className="text-cyan-700"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-bold">
                Hijyen
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Tek kullanımlık steril malzemeler kullanıyoruz.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <Clock3
                className="text-cyan-700"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-bold">
                Hızlı Hizmet
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                İstanbul genelinde uygunluk durumuna göre aynı gün hizmet.
              </p>

            </div>

          </div>

        </section>

        <section className="bg-sky-900">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="grid gap-10 md:grid-cols-4">

              <div className="text-center text-white">
                <div className="text-6xl font-black">
                  1000+
                </div>

                <p className="mt-3 text-sky-100">
                  Mutlu Hasta
                </p>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl font-black">
                  39
                </div>

                <p className="mt-3 text-sky-100">
                  İstanbul İlçesi
                </p>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl font-black">
                  7/24
                </div>

                <p className="mt-3 text-sky-100">
                  Destek
                </p>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl font-black">
                  %100
                </div>

                <p className="mt-3 text-sky-100">
                  Hasta Memnuniyeti
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">

          <div className="rounded-[40px] bg-gradient-to-r from-sky-800 to-cyan-700 p-14 text-center text-white shadow-2xl">

            <h2 className="text-5xl font-extrabold">
              Sağlığınız Bizim İçin Değerli
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-sky-100">
              Uzman sağlık ekibimiz ile evinizde güvenilir sağlık hizmeti almak
              için hemen bizimle iletişime geçin. İstanbul genelinde hızlı,
              hijyenik ve profesyonel hizmet sunuyoruz.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="tel:+905396952989"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-sky-900 transition hover:scale-105"
              >
                <Phone size={22} />
                0539 695 29 89
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-10 py-5 text-lg font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>

            </div>

          </div>

        </section>
                <section className="bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="text-center">

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Hasta Görüşleri
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Hastalarımız Ne Diyor?
              </h2>

            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">

              {[
                {
                  name: "Ayşe K.",
                  text: "Hemşire hanım çok ilgiliydi. Annemin tüm bakımı profesyonel şekilde yapıldı.",
                },
                {
                  name: "Mehmet T.",
                  text: "Evde serum hizmetini aynı gün aldık. Çok memnun kaldık.",
                },
                {
                  name: "Fatma Y.",
                  text: "İşlem boyunca hijyen kurallarına dikkat edildi. Kesinlikle tavsiye ederim.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex gap-1 text-amber-400">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>

                  <p className="leading-8 text-slate-600">
                    "{item.text}"
                  </p>

                  <h3 className="mt-6 font-bold text-slate-900">
                    {item.name}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-5xl px-6 py-24">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Sık Sorulan Sorular
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Merak Edilenler
            </h2>

          </div>

          <div className="mt-16 space-y-6">

            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-200 bg-white p-8"
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

        </section>

        <section className="bg-white">

          <div className="mx-auto max-w-7xl px-6 pb-24">

            <div className="text-center">

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Diğer Hizmetlerimiz
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                İlginizi Çekebilir
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {Object.entries(services)
                .filter(([slug]) => slug !== hizmet)
                .map(([slug, item]) => (
                  <Link
                    key={slug}
                    href={`/hizmetler/${slug}`}
                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                  >
                    <Stethoscope
                      className="text-cyan-700"
                      size={40}
                    />

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-700">
                      İncele
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>

                  </Link>
                ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
      <FloatingWhatsapp />

    </>
  );
}
