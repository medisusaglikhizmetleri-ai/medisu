import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import DistrictContent from "@/components/DistrictContent";
import RelatedServices from "@/components/RelatedServices";

const districts = [

  "adalar",
  "arnavutkoy",
  "atasehir",
  "avcilar",
  "bagcilar",
  "bahcelievler",
  "bakirkoy",
  "basaksehir",
  "bayrampasa",
  "besiktas",
  "beykoz",
  "beylikduzu",
  "beyoglu",
  "buyukcekmece",
  "catalca",
  "cekmekoy",
  "esenler",
  "esenyurt",
  "eyupsultan",
  "fatih",
  "gaziosmanpasa",
  "gungoren",
  "kadikoy",
  "kagithane",
  "kartal",
  "kucukcekmece",
  "maltepe",
  "pendik",
  "sancaktepe",
  "sariyer",
  "silivri",
  "sisli",
  "sultanbeyli",
  "sultangazi",
  "tuzla",
  "umraniye",
  "uskudar",
  "zeytinburnu",
];
export function generateStaticParams() {
  return districts.flatMap((ilce) =>
    Object.keys(services).map((hizmet) => ({
      ilce,
      hizmet,
    }))
  );
}


const services = {
  "evde-hemsire": {
    title: "Evde Hemşire Hizmeti",
    short: "Evde Hemşire",
  },

  "evde-serum": {
    title: "Evde Serum Hizmeti",
    short: "Evde Serum",
  },

  pansuman: {
    title: "Pansuman Hizmeti",
    short: "Pansuman",
  },

  "kan-alma": {
    title: "Evde Kan Alma",
    short: "Kan Alma",
  },

  "yasli-bakimi": {
    title: "Yaşlı Bakımı",
    short: "Yaşlı Bakımı",
  },

  "hasta-bakimi": {
    title: "Hasta Bakımı",
    short: "Hasta Bakımı",
  },
};

function districtName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ ilce: string; hizmet: string }>;
}): Promise<Metadata> {
  const { ilce, hizmet } = await params;

  if (
    !districts.includes(ilce) ||
    !(hizmet in services)
  ) {
    return {
      title: "Sayfa Bulunamadı",
    };
  }

  const service =
    services[hizmet as keyof typeof services];

  const district = districtName(ilce);

  return {
    title: `${district} ${service.title} | MEDİSU`,
    description: `${district} bölgesinde profesyonel ${service.short.toLowerCase()} hizmeti. İstanbul genelinde uzman sağlık ekibi ile hızlı ve güvenilir evde sağlık hizmetleri.`,
    alternates: {
      canonical: `https://medisusaglik.com/istanbul/${ilce}/${hizmet}`,
    },
  };
}

export default async function DistrictServicePage({
  params,
}: {
  params: Promise<{ ilce: string; hizmet: string }>;
}) {
  const { ilce, hizmet } = await params;

  if (
    !districts.includes(ilce) ||
    !(hizmet in services)
  ) {
    notFound();
  }

  const district = districtName(ilce);

  const service =
    services[hizmet as keyof typeof services];
    const serviceName = service.title;

      return (
    <>
      <Header />
        <BreadcrumbSchema
    district={district}
    service={serviceName}
  />
  <ServiceSchema
  name={`${district} ${service.title}`}
  description={`${district} bölgesinde profesyonel ${service.short.toLowerCase()} hizmeti. MEDİSU uzman sağlık ekibi ile güvenilir evde sağlık hizmeti sunmaktadır.`}
  url={`https://medisusaglik.com/istanbul/${ilce}/${hizmet}`}
/>


      <main className="bg-white">

        <section className="bg-gradient-to-br from-cyan-50 via-white to-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              İstanbul / {district}
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-slate-900">
              {district} {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              MEDİSU olarak <strong>{district}</strong> bölgesinde
              profesyonel <strong>{service.short.toLowerCase()}</strong> hizmeti
              sunuyoruz. Deneyimli sağlık personelimiz ile evinizde güvenli,
              hijyenik ve hızlı sağlık hizmeti alabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:+905396952989"
                className="rounded-2xl bg-sky-800 px-8 py-4 font-semibold text-white transition hover:bg-sky-900"
              >
                📞 Hemen Ara
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Uzman Sağlık Ekibi
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Alanında deneyimli hemşirelerimiz ve sağlık personelimiz ile
                güvenilir hizmet sunuyoruz.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Hijyenik Uygulamalar
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Tüm işlemler steril ekipman kullanılarak hijyen kurallarına uygun
                şekilde uygulanmaktadır.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Aynı Gün Hizmet
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Uygunluk durumuna göre {district} içerisinde aynı gün sağlık
                personeli yönlendirebiliyoruz.
              </p>
            </div>

          </div>

          <div className="mt-20 rounded-3xl bg-sky-900 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              {district} Bölgesinde Hemen Hizmet Alın
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100">
              MEDİSU uzman ekibi ile evinizde güvenli sağlık hizmeti almak için
              hemen bizimle iletişime geçin.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="tel:+905396952989"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-sky-900 transition hover:bg-slate-100"
              >
                📞 0539 695 29 89
              </a>

              <a
                href="https://wa.me/905396952989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </section>
<DistrictContent
  district={district}
  service={service.title}
/>
<RelatedServices
  district={district}
  current={hizmet}
/>


      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

