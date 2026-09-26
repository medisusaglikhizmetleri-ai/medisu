import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Evde İdrar Tahlili ve Numune Alma",
  description:
    "İstanbul genelinde evde idrar tahlili için numune alma desteği. Hijyenik numune süreci ve gerekli durumlarda laboratuvar sürecine yönlendirme için MEDİSU.",
  alternates: {
    canonical: "https://www.medisusaglik.com/hizmetler/idrar-tahlili",
  },
};

export default function EvdeIdrarTahliliPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
        <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          İstanbul Evde Sağlık Hizmeti
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          İstanbul Evde İdrar Tahlili ve Numune Alma
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-600">
          MEDİSU olarak İstanbul genelinde idrar tahlili için evde numune alma
          sürecine yönelik destek sunuyoruz. Numunenin uygun koşullarda
          alınması için gerekli bilgilendirme sağlanır ve süreç hijyen
          kurallarına uygun şekilde planlanır.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Evde numune alma desteği; sağlık kuruluşuna veya laboratuvara
          ulaşmakta zorlanan yaşlı bireyler, hareket kısıtlılığı bulunan
          hastalar ve numune sürecinin ev ortamında gerçekleştirilmesine
          ihtiyaç duyan kişiler için planlanabilir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Evde İdrar Numunesi Alma Süreci
          </h2>

          <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>✔ Numune süreci hakkında bilgilendirme</li>
            <li>✔ Uygun numune kabının kullanılması</li>
            <li>✔ Hijyen kurallarına uygun numune alma desteği</li>
            <li>✔ Hastanın ihtiyaçlarına uygun planlama</li>
            <li>✔ Numunenin uygun şekilde hazırlanmasına destek</li>
            <li>✔ Gerekli durumlarda laboratuvar sürecine yönlendirme</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Evde İdrar Tahlili Süreci Nasıl Planlanır?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            İstenen tetkik ve hastanın mevcut durumu hakkında ön bilgi alınır.
            Numunenin hangi koşullarda alınması gerektiği değerlendirilerek
            uygun süreç planlanır. Gerekli durumlarda numunenin laboratuvara
            ulaştırılması veya laboratuvar sürecine yönlendirilmesi hakkında
            bilgi sağlanır.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            İstanbul Genelinde Evde Numune Alma Desteği
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            MEDİSU, ekip ve hizmet uygunluğu doğrultusunda İstanbul’un farklı
            bölgelerinde evde numune alma sürecine yönelik destek
            planlamaktadır. Hizmet kapsamı ve uygunluk bilgisi için ekibimizle
            iletişime geçebilirsiniz.
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
          Bu sayfadaki bilgiler genel bilgilendirme amacı taşır. İstenen
          tetkikler, numune alma yöntemi ve laboratuvar süreci ilgili sağlık
          profesyonelinin veya laboratuvarın yönlendirmesine göre
          planlanmalıdır.
        </p>
      </section>
    </main>
  );
}
