"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
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
      "Acil durumlar dahil olmak üzere günün her saati bize ulaşabilirsiniz.",
  },
  {
    question: "Ödeme nasıl yapılıyor?",
    answer:
      "Hizmet sonrasında nakit veya banka havalesi/EFT ile ödeme yapabilirsiniz.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Merak Ettikleriniz
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
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
