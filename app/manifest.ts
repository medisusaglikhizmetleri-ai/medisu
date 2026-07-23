import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEDİSU Evde Sağlık Hizmetleri",
    short_name: "MEDİSU",

    description:
      "İstanbul genelinde profesyonel evde sağlık hizmetleri.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0369a1",

    orientation: "portrait",

    lang: "tr",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
