import Link from "next/link";

type Props = {
  district: string;
  current: string;
};

const services = [
  {
    slug: "evde-hemsire",
    title: "Evde Hemşire Hizmeti",
  },
  {
    slug: "evde-serum",
    title: "Evde Serum Hizmeti",
  },
  {
    slug: "pansuman",
    title: "Pansuman Hizmeti",
  },
  {
    slug: "kan-alma",
    title: "Evde Kan Alma",
  },
  {
    slug: "yasli-bakimi",
    title: "Yaşlı Bakımı",
  },
  {
    slug: "hasta-bakimi",
    title: "Hasta Bakımı",
  },
];

export default function RelatedServices({
  district,
  current,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900">
        {district} Bölgesindeki Diğer Hizmetlerimiz
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services
          .filter((item) => item.slug !== current)
          .map((item) => (
            <Link
              key={item.slug}
              href={`/istanbul/${district.toLowerCase().replace(/\s+/g, "-")}/${item.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {district} bölgesinde profesyonel {item.title.toLowerCase()} hizmetimiz hakkında detaylı bilgi alın.
              </p>

              <span className="mt-5 inline-block font-semibold text-cyan-700">
                İncele →
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}
