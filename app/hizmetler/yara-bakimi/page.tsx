import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Evde Yara Bakımı Hizmeti",
  description:
    "İstanbul genelinde evde yara bakımı ve pansuman hizmeti. Yara değerlendirmesi, temizliği ve bakımına yönelik profesyonel sağlık desteği için MEDİSU.",
  alternates: {
    canonical: "https://www.medisusaglik.com/hizmetler/yara-bakimi",
  },
};

export default function EvdeYaraBakimiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          İstanbul Evde Sağlık Hizmeti
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          İstanbul Evde Yara Bakımı Hizmeti
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          MEDİSU olarak İstanbul genelinde evde yara bakımı hizmeti sunuyoruz.
          Yara bakımı ve pansuman işlemleri, hastanın mevcut durumu ve hekim
          önerisi doğrultusunda deneyimli sağlık personeli tarafından ev
          ortamında hijyen kurallarına uygun şekilde gerçekleştirilir.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Evde yara bakımı; ameliyat sonrası yaralar, uzun süreli bakım
          gerektiren yaralar ve düzenli pansuman ihtiyacı bulunan hastalar için
          profesyonel sağlık desteğiyle planlanabilir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Evde Yara Bakımı Hizmeti Kapsamı
          </h2>

          <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>✔ Yara bölgesinin değerlendirilmesi</li>
            <li>✔ Yara temizliği</li>
            <li>✔ Steril pansuman uygulaması</li>
            <li>✔ Ameliyat sonrası yara bakım desteği</li>
            <li>✔ Düzenli yara takibine yönelik hemşirelik desteği</li>
            <li>✔ Hekim önerisine uygun bakım uygulamaları</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Evde Yara Bakımı Nasıl Planlanır?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Yaranın mevcut durumu ve daha önce uygulanan tedavi veya bakım
            hakkında ön bilgi alınır. Gerektiğinde hekim değerlendirmesi
            doğrultusunda bakım planı belirlenir ve sağlık personeli hastanın
            bulunduğu adrese yönlendirilir.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            İstanbul Genelinde Evde Yara Bakımı
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            MEDİSU, ekip ve hizmet uygunluğu doğrultusunda İstanbul’un farklı
            bölgelerinde evde yara bakımı hizmeti planlamaktadır. Hizmet
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
          Bu sayfadaki bilgiler genel bilgilendirme amacı taşır. Yara bakımı
          uygulamaları yaranın özellikleri, hastanın sağlık durumu ve ilgili
          sağlık profesyonelinin değerlendirmesi doğrultusunda planlanmalıdır.
        </p>
      </section>
    </main>
  );
}
