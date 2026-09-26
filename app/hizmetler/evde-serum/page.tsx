import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Evde Serum Hizmeti",
  description:
    "İstanbul genelinde evde serum hizmeti. Hekim önerisi doğrultusunda serum uygulaması, damar yolu takibi ve profesyonel sağlık desteği için MEDİSU.",
  alternates: {
    canonical: "https://www.medisusaglik.com/hizmetler/evde-serum",
  },
};

export default function EvdeSerumPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          İstanbul Evde Sağlık Hizmeti
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          İstanbul Evde Serum Hizmeti
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          MEDİSU olarak İstanbul genelinde, hekim önerisi doğrultusunda
          planlanan serum uygulamalarını deneyimli sağlık personeli ile
          ev ortamında gerçekleştiriyoruz.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Evde serum hizmeti; hastaneye gitmekte zorlanan kişiler,
          yaşlı bireyler ve hekimi tarafından damar yolu tedavisi önerilen
          hastalar için uygunluk değerlendirmesi sonrasında planlanabilir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Evde Serum Hizmeti Kapsamı
          </h2>

          <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>✔ Hekim önerisine uygun serum uygulaması</li>
            <li>✔ Damar yolu açılması ve takibi</li>
            <li>✔ Uygulama süresince hasta gözlemi</li>
            <li>✔ Vital bulgu kontrolü</li>
            <li>✔ Steril ve hijyenik uygulama</li>
            <li>✔ Ev ortamında profesyonel sağlık desteği</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Evde Serum Uygulaması Nasıl Planlanır?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Serum uygulamasının içeriği, dozu ve gerekliliği hekim
            değerlendirmesine göre belirlenmelidir. Uygunluk sağlandıktan
            sonra sağlık personeli belirlenen adrese yönlendirilir ve uygulama
            ev ortamında gerçekleştirilir.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            İstanbul Genelinde Evde Serum Desteği
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            MEDİSU, ekip uygunluğu doğrultusunda İstanbul’un farklı
            bölgelerinde evde serum hizmeti planlamaktadır. Hizmet kapsamı,
            randevu ve uygunluk bilgisi için ekibimizle iletişime
            geçebilirsiniz.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+905428939646"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white transition hover:bg-sky-900"
          >
            Hemen Ara
          </a>

          <a
            href="https://wa.me/905428939646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            WhatsApp ile Bilgi Al
          </a>
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          Bu sayfadaki bilgiler genel bilgilendirme amacı taşır. Serum
          uygulamasının içeriği, dozu ve gerekliliği hekim değerlendirmesine
          göre belirlenmelidir.
        </p>
      </section>
    </main>
  );
}
