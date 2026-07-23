export default function BreadcrumbSchema({
  district,
  service,
}: {
  district: string;
  service: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://medisusaglik.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "İstanbul",
        item: "https://medisusaglik.com/istanbul",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: district,
        item: `https://medisusaglik.com/istanbul/${district.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: service,
        item: `https://medisusaglik.com/istanbul/${district.toLowerCase()}/${service
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      },
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
