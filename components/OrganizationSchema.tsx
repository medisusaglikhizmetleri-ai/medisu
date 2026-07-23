export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://medisusaglik.com/#organization",

    name: "MEDİSU Evde Bakım ve Sağlık Hizmetleri",

    url: "https://medisusaglik.com",

    logo: "https://medisusaglik.com/logo.png",

    image: "https://medisusaglik.com/images/hero.png",

    telephone: "+905396952989",

    email: "medisu.saglikhizmetleri@gmail.com",

    priceRange: "₺₺",

    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },

    openingHours: "Mo-Su 00:00-23:59",

    availableLanguage: ["Türkçe"],

    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Hemşire Hizmeti",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Serum Hizmeti",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Pansuman Hizmeti",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Kan Alma Hizmeti",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Yaşlı Bakımı",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Evde Hasta Bakımı",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
