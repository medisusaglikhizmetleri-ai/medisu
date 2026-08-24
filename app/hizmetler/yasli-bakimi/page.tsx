import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Evde Yaşlı Bakımı Hizmeti",
  description:
    "İstanbul genelinde evde yaşlı bakımı ve günlük yaşam desteği. Yaşlı bireylerin ihtiyaçlarına uygun profesyonel evde bakım hizmeti için MEDİSU.",
  alternates: {
    canonical: "https://medisusaglik.com/hizmetler/yasli-bakimi",
  },
};

export default function EvdeYasliBakimiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          İstanbul Evde Bakım Hizmeti
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          İstanbul Evde Yaşlı Bakımı Hizmeti
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          MEDİSU olarak İstanbul genelinde yaşlı bireylerin günlük yaşamını
          daha güvenli ve konforlu sürdürebilmesine destek olmak amacıyla
          evde yaşlı bakımı hizmeti sunuyoruz.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Evde yaşlı bakımı; kişisel bakım, günlük yaşam desteği, hareket
          desteği ve genel durum takibi gibi ihtiyaçlara göre planlanabilir.
          Hizmet kapsamı kişinin sağlık durumu, yaşam koşulları ve ihtiyaçları
          dikkate alınarak belirlenir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Evde Yaşlı Bakımı Kapsamı
          </h2>

          <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>✔ Günlük yaşam desteği</li>
            <li>✔ Kişisel bakım desteği</li>
            <li>✔ Beslenme ve sıvı takibine destek</li>
            <li>✔ Hareket ve mobilizasyon desteği</li>
            <li>✔ Genel durum gözlemi</li>
            <li>✔ Hasta yakınlarının bilgilendirilmesi</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Evde Yaşlı Bakımı Kimler İçin Uygun Olabilir?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Günlük ihtiyaçlarını tek başına karşılamakta zorlanan, hareket
            kabiliyeti azalmış, ev ortamında düzenli destek gerektiren veya
            aile bireylerinin yanında profesyonel bakım desteğine ihtiyaç
            duyan yaşlı kişiler için evde bakım hizmeti planlanabilir.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            İstanbul Genelinde Evde Yaşlı Bakımı
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            MEDİSU, ekip ve hizmet uygunluğu doğrultusunda İstanbul’un farklı
            bölgelerinde evde yaşlı bakımı hizmeti planlamaktadır. Hizmet
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
          Bu sayfadaki bilgiler genel bilgilendirme amacı taşır. Bakımın
          kapsamı kişinin ihtiyaçlarına ve gerektiğinde ilgili sağlık
          profesyonelinin değerlendirmesine göre belirlenmelidir.
        </p>
      </section>
    </main>
  );
}
