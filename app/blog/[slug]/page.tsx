import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ArticleSchema from "@/components/ArticleSchema";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://medisusaglik.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://medisusaglik.com/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`https://medisusaglik.com/blog/${post.slug}`}
        publishedAt={post.publishedAt}
      />

      <Header />

      <main className="mx-auto max-w-4xl px-6 py-24">

        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Blog
        </span>

        <h1 className="mt-6 text-5xl font-bold text-slate-900">
          {post.title}
        </h1>

        <div className="mt-6 flex gap-6 text-sm text-slate-500">
          <span>{post.publishedAt}</span>
          <span>{post.readingTime}</span>
        </div>

        <article className="prose prose-slate mt-10 max-w-none whitespace-pre-line text-lg leading-9">
          {post.content}
        </article>

      </main>

      <section className="bg-sky-900">

        <div className="mx-auto max-w-5xl px-6 py-20">

          <div className="rounded-[36px] bg-gradient-to-r from-sky-800 to-cyan-700 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Evde Sağlık Hizmetine mi İhtiyacınız Var?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sky-100">
              MEDİSU uzman sağlık ekibi İstanbul genelinde evde hemşire,
              serum, pansuman, yaşlı bakımı ve hasta bakımı hizmeti sunmaktadır.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="tel:+905396952989"
                className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-sky-900 transition hover:scale-105"
              >
                <Phone size={20} />
                0539 695 29 89
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Blog
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Benzer Yazılar
            </h2>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {relatedPosts.map((item) => (

              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-sm text-slate-500">
                  {item.publishedAt}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-700">
                  Devamını Oku

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

      <Footer />
      <FloatingWhatsapp />

    </>
  );
}
