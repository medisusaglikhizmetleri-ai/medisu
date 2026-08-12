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
    default: "MEDİSU | Evde Bakım ve Sağlık Hizmetleri",
    template: "%s | MEDİSU",
  },

  description:
    "MEDİSU, İstanbul genelinde evde hemşire, serum, pansuman, kan alma, yaşlı ve hasta bakımı ile hekim değerlendirmesi doğrultusunda çeşitli evde sağlık uygulamaları sunar.",

  keywords: [
    "evde sağlık hizmeti",
    "evde hemşire",
    "evde serum",
    "evde pansuman",
    "evde kan alma",
    "evde yaşlı bakımı",
    "evde hasta bakımı",
    "İstanbul evde sağlık",
    "İstanbul evde hemşire",
    "glutatyon uygulaması İstanbul",
    "Pascorbin uygulaması İstanbul",
    "Todavit multivitamin İstanbul",
    "NAD+ uygulaması İstanbul",
    "MEDİSU",
  ],

  authors: [
    {
      name: "MEDİSU",
    },
  ],

  creator: "MEDİSU",
  publisher: "MEDİSU",

  alternates: {
    canonical: "https://medisusaglik.com",
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
    title: "MEDİSU | Evde Bakım ve Sağlık Hizmetleri",
    description:
      "İstanbul genelinde profesyonel evde sağlık hizmetleri. Evde hemşire, serum, pansuman, kan alma, yaşlı ve hasta bakımı.",
    url: "https://medisusaglik.com",
    siteName: "MEDİSU",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        alt: "MEDİSU Evde Bakım ve Sağlık Hizmetleri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MEDİSU | Evde Bakım ve Sağlık Hizmetleri",
    description:
      "İstanbul genelinde profesyonel evde bakım ve sağlık hizmetleri.",
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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
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
