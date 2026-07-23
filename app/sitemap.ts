import type { MetadataRoute } from "next";

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

const services = [
  "evde-hemsire",
  "evde-serum",
  "pansuman",
  "kan-alma",
  "yasli-bakimi",
  "hasta-bakimi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://medisusaglik.com";

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  services.forEach((service) => {
    pages.push({
      url: `${baseUrl}/hizmetler/${service}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  districts.forEach((district) => {
    services.forEach((service) => {
      pages.push({
        url: `${baseUrl}/istanbul/${district}/${service}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return pages;
}
