"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import type { Locale } from "@/lib/translations";

const faqContent = {
  tr: {
    badge: "Sık Sorulan Sorular",
    title: "Merak Ettikleriniz",
    faqs: [
      {
        question: "Evde sağlık hizmeti nasıl alabilirim?",
        answer:
          "Telefon veya WhatsApp üzerinden bize ulaştıktan sonra ihtiyacınıza uygun sağlık personelimizi en kısa sürede yönlendiriyoruz.",
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer:
          "İstanbul'un tüm ilçelerinde evde sağlık ve bakım hizmeti sunuyoruz.",
      },
      {
        question: "Hizmetleriniz 7/24 mevcut mu?",
        answer:
          "Günün her saati bize ulaşabilirsiniz. Hizmet planlaması ihtiyaç ve uygunluk durumuna göre yapılır.",
      },
      {
        question: "Ödeme nasıl yapılıyor?",
        answer:
          "Hizmet sonrasında nakit veya banka havalesi/EFT ile ödeme yapabilirsiniz.",
      },
    ],
  },

  en: {
    badge: "Frequently Asked Questions",
    title: "What You May Want to Know",
    faqs: [
      {
        question: "How can I receive home healthcare services?",
        answer:
          "After contacting us by phone or WhatsApp, we assess your needs and arrange the appropriate healthcare professional as soon as possible.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We provide home healthcare and care services throughout all districts of Istanbul.",
      },
      {
        question: "Are your services available 24/7?",
        answer:
          "You can contact us at any time of the day. Service planning is made according to your needs and availability.",
      },
      {
        question: "How can I make payment?",
        answer:
          "Payment can be made after the service by cash or bank transfer.",
      },
    ],
  },

  ar: {
    badge: "الأسئلة الشائعة",
    title: "ما قد ترغب في معرفته",
    faqs: [
      {
        question: "كيف يمكنني الحصول على خدمة الرعاية الصحية المنزلية؟",
        answer:
          "بعد التواصل معنا عبر الهاتف أو واتساب، نقوم بتقييم احتياجاتك وترتيب الطاقم الصحي المناسب في أقرب وقت ممكن.",
      },
      {
        question: "ما المناطق التي تقدمون فيها الخدمة؟",
        answer:
          "نقدم خدمات الرعاية الصحية والعناية المنزلية في جميع مناطق إسطنبول.",
      },
      {
        question: "هل خدماتكم متاحة على مدار الساعة؟",
        answer:
          "يمكنكم التواصل معنا في أي وقت. يتم تخطيط الخدمة وفقاً للاحتياج ومدى التوفر.",
      },
      {
        question: "كيف يمكنني الدفع؟",
        answer:
          "يمكن الدفع بعد تقديم الخدمة نقداً أو عن طريق التحويل البنكي.",
      },
    ],
  },

  ru: {
    badge: "Часто задаваемые вопросы",
    title: "Что вам может быть интересно",
    faqs: [
      {
        question: "Как получить медицинскую помощь на дому?",
        answer:
          "После обращения к нам по телефону или WhatsApp мы оцениваем ваши потребности и организуем подходящего медицинского специалиста в кратчайшие сроки.",
      },
      {
        question: "В каких районах вы работаете?",
        answer:
          "Мы предоставляем медицинские услуги и уход на дому во всех районах Стамбула.",
      },
      {
        question: "Ваши услуги доступны 24/7?",
        answer:
          "Вы можете связаться с нами в любое время суток. Планирование услуги зависит от потребности и доступности персонала.",
      },
      {
        question: "Как производится оплата?",
        answer:
          "После оказания услуги можно оплатить наличными или банковским переводом.",
      },
    ],
  },
} as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const locale: Locale =
    firstSegment === "en" ||
    firstSegment === "ar" ||
    firstSegment === "ru"
      ? firstSegment
      : "tr";

  const content = faqContent[locale];

  return (
    <section
      id="faq"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            {content.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            {content.title}
          </h2>
        </div>

        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className={`flex w-full items-center justify-between p-6 ${
                  locale === "ar" ? "text-right" : "text-left"
                }`}
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`shrink-0 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div
                  className={`px-6 pb-6 leading-7 text-slate-600 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
