export default function ArticleSchema({
  title,
  description,
  url,
  publishedAt,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: "MEDİSU",
    },
    publisher: {
      "@type": "Organization",
      name: "MEDİSU",
      logo: {
        "@type": "ImageObject",
        url: "https://medisusaglik.com/logo.png",
      },
    },
    mainEntityOfPage: url,
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
