export type Locale = "tr" | "en" | "ar" | "ru";

export const locales: Locale[] = ["tr", "en", "ar", "ru"];

export const translations = {
  tr: {
    languageName: "Türkçe",

    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      about: "Hakkımızda",
      contact: "İletişim",
      call: "Hemen Ara",
    },

    header: {
      healthStandard: "Sağlık Bakanlığı Standartlarına Uygun Hizmet",
      satisfaction: "Hasta Memnuniyeti Odaklı",
      support: "7/24 Destek",
      assurance: "MEDİSU Güvencesi",
      expertStaff: "Uzman Personel",
      districts: "39 İlçe",
      hygiene: "Hijyenik Hizmet",
      contact24: "7/24 İletişim",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      callMedisu: "MEDİSU'yu ara",
    },

    hero: {
      badge: "İstanbul Geneli Evde Sağlık Hizmetleri",
      title1: "Sağlığınız",
      title2: "Evinizin Konforunda",
      description:
        "Profesyonel sağlık ekibimizle evde hemşirelik, serum, pansuman, kan alma ve bakım hizmetleri.",
      call: "Hemen Ara",
      whatsapp: "WhatsApp",
    },
  },

  en: {
    languageName: "English",

    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      call: "Call Now",
    },

    header: {
      healthStandard: "Healthcare Services in Accordance with Ministry Standards",
      satisfaction: "Focused on Patient Satisfaction",
      support: "24/7 Support",
      assurance: "MEDİSU Assurance",
      expertStaff: "Professional Staff",
      districts: "39 Districts",
      hygiene: "Hygienic Service",
      contact24: "24/7 Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      callMedisu: "Call MEDİSU",
    },

    hero: {
      badge: "Home Healthcare Services Across Istanbul",
      title1: "Your Health",
      title2: "In the Comfort of Your Home",
      description:
        "Professional home healthcare including nursing, IV therapy, wound care, blood collection and patient care.",
      call: "Call Now",
      whatsapp: "WhatsApp",
    },
  },

  ar: {
    languageName: "العربية",

    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      call: "اتصل الآن",
    },

    header: {
      healthStandard: "خدمات صحية وفق معايير وزارة الصحة",
      satisfaction: "نهتم برضا المرضى",
      support: "دعم على مدار الساعة",
      assurance: "ضمان MEDİSU",
      expertStaff: "طاقم متخصص",
      districts: "39 منطقة",
      hygiene: "خدمة صحية آمنة",
      contact24: "تواصل على مدار الساعة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      callMedisu: "اتصل بـ MEDİSU",
    },

    hero: {
      badge: "خدمات الرعاية الصحية المنزلية في جميع أنحاء إسطنبول",
      title1: "صحتك",
      title2: "في راحة منزلك",
      description:
        "نقدم خدمات الرعاية الصحية المنزلية المهنية بما في ذلك التمريض والعلاج الوريدي والعناية بالجروح وسحب الدم ورعاية المرضى.",
      call: "اتصل الآن",
      whatsapp: "واتساب",
    },
  },

  ru: {
    languageName: "Русский",

    nav: {
      home: "Главная",
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      call: "Позвонить",
    },

    header: {
      healthStandard: "Медицинские услуги в соответствии со стандартами Минздрава",
      satisfaction: "Забота об удовлетворенности пациентов",
      support: "Поддержка 24/7",
      assurance: "Гарантия MEDİSU",
      expertStaff: "Профессиональный персонал",
      districts: "39 районов",
      hygiene: "Гигиеничное обслуживание",
      contact24: "Связь 24/7",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      callMedisu: "Позвонить в MEDİSU",
    },

    hero: {
      badge: "Медицинские услуги на дому по всему Стамбулу",
      title1: "Ваше здоровье",
      title2: "В комфорте вашего дома",
      description:
        "Профессиональные медицинские услуги на дому: медсестринский уход, внутривенная терапия, перевязки, забор крови и уход за пациентами.",
      call: "Позвонить",
      whatsapp: "WhatsApp",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
