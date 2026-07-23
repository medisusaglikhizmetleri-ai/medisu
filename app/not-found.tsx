import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-slate-50 px-6">
        <div className="max-w-2xl text-center">
          <div className="text-8xl font-extrabold text-cyan-600">404</div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Aradığınız Sayfa Bulunamadı
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Aradığınız sayfa kaldırılmış, taşınmış veya yanlış yazılmış olabilir.
            Ana sayfaya dönebilir ya da hizmetlerimizi inceleyebilirsiniz.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white transition hover:bg-sky-900"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/hizmetler/evde-hemsire"
              className="rounded-2xl border border-sky-800 px-8 py-4 font-semibold text-sky-800 transition hover:bg-sky-50"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
