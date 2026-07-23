type Props = {
  district: string;
  service: string;
};

export default function DistrictContent({
  district,
  service,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="prose prose-slate max-w-none">

        <h2>{district} {service} Hizmeti</h2>

        <p>
          MEDİSU olarak {district} bölgesinde profesyonel {service.toLowerCase()}
          hizmeti sunuyoruz. Deneyimli sağlık personelimiz ile evinizde güvenli,
          hijyenik ve kaliteli sağlık hizmeti alabilirsiniz.
        </p>

        <p>
          Özellikle yaşlı bireyler, kronik hastalar, ameliyat sonrası bakım
          ihtiyacı olan kişiler ve evde tedavi gören hastalar için hızlı
          çözümler sunuyoruz.
        </p>

        <h2>Neden MEDİSU?</h2>

        <ul>
          <li>Deneyimli sağlık personeli</li>
          <li>Aynı gün hizmet imkanı</li>
          <li>Steril ekipman kullanımı</li>
          <li>İstanbul geneline hizmet</li>
          <li>7/24 ulaşılabilir destek</li>
        </ul>

        <h2>{district} Bölgesinde Evde Sağlık</h2>

        <p>
          {district} ilçesinde yaşayan hastalarımız için ulaşım planlamasını
          hızlı şekilde gerçekleştiriyor ve uygunluk durumuna göre aynı gün
          sağlık personeli yönlendirebiliyoruz.
        </p>

      </div>

    </section>
  );
}
