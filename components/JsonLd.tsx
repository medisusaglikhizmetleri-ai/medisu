export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",

    name: "MEDİSU Evde Bakım ve Sağlık Hizmetleri",

    image: "https://medisusaglik.com/images/hero.png",

    url: "https://medisusaglik.com",

    telephone: "+905396952989",

    email: "medisu.saglikhizmetleri@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },

    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },

    priceRange: "$$",

    openingHours: "Mo-Su 00:00-23:59",

    description:
      "İstanbul genelinde evde hemşire, serum, pansuman, yaşlı bakımı, hasta bakımı ve profesyonel evde sağlık hizmetleri.",

    sameAs: [
      "https://www.facebook.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
