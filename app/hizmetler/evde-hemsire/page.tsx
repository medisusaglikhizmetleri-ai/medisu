import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Evde Hemşire Hizmeti",
  description:
    "İstanbul genelinde evde hemşire hizmeti. Serum uygulaması, enjeksiyon, pansuman, vital bulgu takibi ve hekim önerisine uygun hemşirelik işlemleri için MEDİSU.",
  alternates: {
    canonical: "https://medisusaglik.com/hizmetler/evde-hemsire",
  },
};

export default function EvdeHemsirePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          İstanbul Evde Sağlık Hizmeti
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          İstanbul Evde Hemşire Hizmeti
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          MEDİSU olarak İstanbul genelinde, hastanın bulunduğu adreste
          profesyonel evde hemşire hizmeti sunuyoruz. Deneyimli sağlık
          personelimiz; hekim önerisi ve hastanın ihtiyaçları doğrultusunda
          hemşirelik uygulamalarını ev ortamında planlı ve hijyenik şekilde
          gerçekleştirir.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Evde sağlık hizmeti; hastaneye gitmekte zorlanan yaşlı bireyler,
          ameliyat sonrası takip gerektiren hastalar, kronik hastalığı bulunan
          kişiler ve ev ortamında hemşirelik desteğine ihtiyaç duyan hastalar
          için önemli bir kolaylık sağlayabilir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Evde Hemşire Hizmeti Kapsamı
          </h2>

          <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>✔ Hekim önerisine uygun serum uygulaması</li>
            <li>✔ Enjeksiyon uygulamaları</li>
            <li>✔ Pansuman ve yara bakımı</li>
            <li>✔ Vital bulgu takibi</li>
            <li>✔ İlaç uygulamalarına yönelik hemşirelik desteği</li>
            <li>✔ Sonda bakımı ve değişimi</li>
            <li>✔ Kan alma ve numune alma desteği</li>
            <li>✔ Ameliyat sonrası hemşirelik desteği</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Evde Hemşire Hizmeti Kimler İçin Uygun Olabilir?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Evde hemşire desteği; hareket kısıtlılığı bulunan kişiler,
            hastaneye ulaşmakta güçlük yaşayan hastalar, ameliyat sonrası
            bakım ihtiyacı olan kişiler ve düzenli hemşirelik takibi gereken
            hastalar için değerlendirilebilir. Uygulamanın kapsamı kişinin
            sağlık durumuna ve hekim önerisine göre belirlenmelidir.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            İstanbul Genelinde Evde Hemşire Desteği
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            MEDİSU, hizmet ve ekip uygunluğu doğrultusunda İstanbul’un farklı
            bölgelerinde evde hemşirelik hizmeti planlamaktadır. Hizmet
            kapsamı, uygunluk ve randevu bilgisi için ekibimizle iletişime
            geçebilirsiniz.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+905396952989"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white transition hover:bg-sky-900"
          >
            Hemen Ara
          </a>

          <a
            href="https://wa.me/905396952989"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            WhatsApp ile Bilgi Al
          </a>
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          Bu sayfadaki bilgiler genel bilgilendirme amacı taşır. Uygulanacak
          işlemler hastanın sağlık durumu, hekim önerisi ve sağlık personelinin
          değerlendirmesi doğrultusunda planlanmalıdır.
        </p>
      </section>
    </main>
  );
}
