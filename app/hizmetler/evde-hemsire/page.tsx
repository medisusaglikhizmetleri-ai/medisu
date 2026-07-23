export default function EvdeHemsirePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Evde Sağlık Hizmeti
        </span>

        <h1 className="mt-6 text-5xl font-bold text-slate-900">
          Evde Hemşire Hizmeti
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          MEDİSU olarak deneyimli hemşirelerimiz ile İstanbul genelinde
          evde hemşire hizmeti sunuyoruz. Serum uygulamaları, enjeksiyon,
          pansuman, ilaç takibi ve doktor önerisine uygun hemşirelik
          işlemleri güvenli şekilde gerçekleştirilmektedir.
        </p>

        <div className="mt-12 rounded-3xl bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Hizmet Kapsamı
          </h2>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>✔ Serum uygulaması</li>
            <li>✔ Enjeksiyon</li>
            <li>✔ Pansuman</li>
            <li>✔ Vital bulgu takibi</li>
            <li>✔ İlaç uygulamaları</li>
            <li>✔ Hasta değerlendirmesi</li>
          </ul>
        </div>

        <a
          href="https://wa.me/905396952989"
          className="mt-12 inline-flex rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
        >
          WhatsApp ile Bilgi Al
        </a>
      </section>
    </main>
  );
}
