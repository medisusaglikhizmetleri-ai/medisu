import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { blogPosts } from "@/lib/blog";


const posts = [
  {
    slug: "evde-hemsire-hizmeti-nedir",
    title: "Evde Hemşire Hizmeti Nedir?",
    excerpt:
      "Evde hemşire hizmeti kimler için uygundur, hangi işlemleri kapsar ve nasıl alınır?",
  },
  {
    slug: "evde-serum-ne-zaman-gerekir",
    title: "Evde Serum Ne Zaman Gerekir?",
    excerpt:
      "Evde serum uygulaması hakkında merak edilenler ve dikkat edilmesi gereken noktalar.",
  },
  {
    slug: "yasli-bakiminda-dikkat-edilmesi-gerekenler",
    title: "Yaşlı Bakımında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Yaşlı bireylerin evde bakımında dikkat edilmesi gereken temel noktalar.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="bg-gradient-to-br from-cyan-50 via-white to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              MEDİSU Blog
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              Sağlık Rehberi
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Evde sağlık hizmetleri, hemşirelik, serum uygulamaları,
              yaşlı bakımı ve hasta bakımı hakkında uzman içerikler.
            </p>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">

              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 font-semibold text-cyan-700">
                    Devamını Oku →
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
