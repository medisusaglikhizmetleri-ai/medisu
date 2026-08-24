import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import JsonLd from "@/components/JsonLd";
import OrganizationSchema from "@/components/OrganizationSchema";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medisusaglik.com"),

  title: {
    default:
      "İstanbul Evde Sağlık Hizmetleri | Evde Hemşire & Serum | MEDİSU",
    template: "%s | MEDİSU",
  },

  description:
    "İstanbul genelinde evde hemşire, evde serum, kan alma, pansuman, enjeksiyon, sonda değişimi, yara bakımı, yaşlı ve hasta bakımı hizmetleri. MEDİSU Evde Sağlık Hizmetleri.",

  keywords: [
    "evde sağlık hizmeti",
    "İstanbul evde sağlık",
    "evde hemşire",
    "İstanbul evde hemşire",
    "evde serum",
    "İstanbul evde serum",
    "evde kan alma",
    "evde pansuman",
    "evde enjeksiyon",
    "evde yara bakımı",
    "evde sonda değişimi",
    "evde idrar tahlili",
    "evde yaşlı bakımı",
    "evde hasta bakımı",
    "glutatyon uygulaması",
    "NAD+ uygulaması",
    "Pascorbin uygulaması",
    "Todavit multivitamin",
    "TAD 600 uygulaması",
    "MEDİSU",
  ],

  authors: [
    {
      name: "MEDİSU Evde Sağlık Hizmetleri",
    },
  ],

  creator: "MEDİSU",
  publisher: "MEDİSU",

  alternates: {
    canonical: "https://medisusaglik.com/",
  },

  verification: {
    google: "eS9mLJpSNct92KHjaGmrfPBHLYyAOytkP43j2WbxhE",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "İstanbul Evde Sağlık Hizmetleri | Evde Hemşire & Serum | MEDİSU",
    description:
      "İstanbul genelinde evde hemşire, serum, kan alma, pansuman, enjeksiyon, sonda değişimi, yara bakımı, yaşlı ve hasta bakımı hizmetleri.",
    url: "https://medisusaglik.com/",
    siteName: "MEDİSU Evde Sağlık Hizmetleri",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "MEDİSU İstanbul Evde Sağlık Hizmetleri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "İstanbul Evde Sağlık Hizmetleri | Evde Hemşire & Serum | MEDİSU",
    description:
      "İstanbul genelinde profesyonel evde hemşire, serum, kan alma, pansuman ve bakım hizmetleri.",
    images: ["/images/hero.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="bg-white text-slate-900 antialiased">
        <JsonLd />
        <OrganizationSchema />

        {children}

        {/* GOOGLE ANALYTICS */}
        <GoogleAnalytics gaId="G-9GEWR8787Q" />

        {/* MICROSOFT CLARITY */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xnbjauwpeg");
          `}
        </Script>
      </body>
    </html>
  );
}
