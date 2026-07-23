export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  readingTime: string;
  publishedAt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "evde-hemsire-hizmeti-nedir",

    title: "Evde Hemşire Hizmeti Nedir? İstanbul Evde Hemşire Rehberi",

    description:
      "Evde hemşire hizmeti nedir, kimler için uygundur ve hangi işlemleri kapsar? MEDİSU uzman ekibinden detaylı bilgiler.",

    keywords: [
      "evde hemşire",
      "istanbul evde hemşire",
      "evde sağlık",
      "evde bakım",
      "hemşire hizmeti",
    ],

    image: "/images/hero.png",

    readingTime: "6 dk",

    publishedAt: "2026-07-20",

    content: `
Evde hemşire hizmeti, hastaların hastaneye gitmeden kendi ev ortamlarında profesyonel sağlık hizmeti almasını sağlayan önemli bir sağlık hizmetidir.

MEDİSU olarak İstanbul genelinde deneyimli sağlık personelimiz ile güvenli, hijyenik ve profesyonel hizmet sunuyoruz.

Evde hemşire hizmetleri;

• Serum uygulamaları
• Enjeksiyon
• Pansuman
• İlaç uygulamaları
• Vital bulgu takibi
• Hasta değerlendirmesi

gibi birçok işlemi kapsamaktadır.

Ev ortamında alınan sağlık hizmeti özellikle yaşlı bireyler, ameliyat sonrası hastalar ve kronik hastalar için büyük kolaylık sağlar.

Tüm uygulamalar steril ekipmanlarla ve uzman sağlık personeli tarafından gerçekleştirilir.
`,
  },

  {
    slug: "evde-serum-ne-zaman-gerekir",

    title: "Evde Serum Ne Zaman Gerekir?",

    description:
      "Evde serum uygulaması hangi durumlarda yapılır? Uzman sağlık personeli ile güvenli serum hizmeti.",

    keywords: [
      "evde serum",
      "istanbul evde serum",
      "serum",
      "evde sağlık",
    ],

    image: "/images/hero.png",

    readingTime: "5 dk",

    publishedAt: "2026-07-20",

    content: `
Evde serum uygulaması yalnızca doktor önerisi doğrultusunda uygulanmalıdır.

Uzman hemşire tarafından yapılan serum uygulaması hastanın tedavisinin güvenli şekilde devam etmesini sağlar.

MEDİSU olarak İstanbul genelinde steril ekipmanlarla evde serum hizmeti sunuyoruz.
`,
  },

  {
    slug: "yasli-bakiminda-dikkat-edilmesi-gerekenler",

    title: "Yaşlı Bakımında Dikkat Edilmesi Gerekenler",

    description:
      "Yaşlı bireylerin evde bakımında dikkat edilmesi gereken önemli noktalar.",

    keywords: [
      "yaşlı bakımı",
      "evde yaşlı bakımı",
      "istanbul yaşlı bakımı",
    ],

    image: "/images/hero.png",

    readingTime: "7 dk",

    publishedAt: "2026-07-20",

    content: `
Yaşlı bireylerin yaşam kalitesini artırmak için düzenli sağlık takibi, doğru beslenme ve hijyen büyük önem taşır.

Profesyonel bakım sayesinde hem hasta hem de hasta yakınlarının yaşam kalitesi yükselmektedir.
`,
  },
];
