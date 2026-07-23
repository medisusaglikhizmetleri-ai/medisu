import { MapPin } from "lucide-react";

const districts = [
  "Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler",
  "Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü",
  "Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt",
  "Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane",
  "Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer",
  "Silivri","Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla",
  "Ümraniye","Üsküdar","Zeytinburnu",
];

export default function Districts() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Hizmet Bölgelerimiz
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            İstanbul'un 39 İlçesinde Hizmet Veriyoruz
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            MEDİSU olarak İstanbul'un tüm ilçelerinde profesyonel evde sağlık hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {districts.map((district) => (
            <div
              key={district}
              className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <MapPin className="text-cyan-600" size={20} />
              <span className="font-medium text-slate-700">
                {district}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
