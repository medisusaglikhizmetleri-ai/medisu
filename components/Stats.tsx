import {
  ShieldCheck,
  Clock3,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "7/24",
    title: "Destek",
  },
  {
    icon: MapPinned,
    value: "39",
    title: "İlçe Hizmeti",
  },
  {
    icon: ShieldCheck,
    value: "%100",
    title: "Hijyen Odaklı",
  },
  {
    icon: BadgeCheck,
    value: "Uzman",
    title: "Sağlık Kadrosu",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-sky-800">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
