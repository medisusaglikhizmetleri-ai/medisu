export default function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MEDİSU Evde Sağlık Hizmetleri",
    url: "https://medisusaglik.com",
    telephone: "+905396952989",
    areaServed: "İstanbul",
    medicalSpecialty: "HomeCare",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: name,
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        description,
        url,
      },
    },
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
