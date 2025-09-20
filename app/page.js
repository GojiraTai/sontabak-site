// app/page.js
export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Son Tabak: <span className="text-brand-accent">İsraf Etme, Sofrana Kat!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Restoranlar, kafeler ve fırınlardan günün son lezzetlerini uygun fiyata yakala.
              Hem bütçeni koru hem de gıda israfını önle!
            </p>

            {/* value props kısa vurucu */}
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✅ <b>Kalite</b>: Aynı ürün, aynı tazelik — sadece daha uygun fiyat.</li>
              <li>✅ <b>Fırsat</b>: %50’ye varan indirimlerle “son tabak” paketleri.</li>
              <li>✅ <b>Planlı alış</b>: <u>Yarının yemeğini bugünden al</u>, dolaba koy, israfı azalt.</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="/how" className="rounded-xl px-5 py-3 border border-gray-300 hover:border-gray-400 transition">
                Restoranları Keşfet
              </a>
              <a href="/business" className="rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90 transition">
                İşletmeni Kat
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Sloganlar: “İsraf Etme, Tadını Çıkar!” • “Son Tabak Senin Olsun.” • “Yemeğini Kurtar, Dünyayı Kurtar.”
            </div>
          </div>

          {/* görsel mock kart */}
          <div className="relative p-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 shadow-sm">
            <div className="rounded-2xl border p-6">
              <div className="text-sm uppercase tracking-widest text-gray-500">Yakındakiler</div>
              <div className="mt-2 text-2xl font-semibold">Son Tabak Paketleri</div>
              <ul className="mt-4 space-y-3">
                {[
                  { name: "Mahalle Fırını", desc: "Sürpriz Börek & Poğaça", old: 70, now: 29 },
                  { name: "Köşe Kafe", desc: "Tatlı Sürprizi", old: 120, now: 49 },
                  { name: "Pideci Usta", desc: "Günün Son Dilimleri", old: 150, now: 59 },
                ].map((i) => (
                  <li key={i.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{i.name}</div>
                      <div className="text-sm text-gray-600">“{i.desc}”</div>
                    </div>
                    <div className="text-right">
                      <div className="line-through text-sm text-gray-400">₺{i.old}</div>
                      <div className="text-lg font-bold text-brand-accent">₺{i.now}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                *Görseller temsili. Paket içerikleri sürprizdir; kalite aynıdır, fiyatı uygundur.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEDEN SON TABAK? */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Neden Son Tabak?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-4xl">💸</div>
            <div className="mt-3 text-xl font-semibold">Uygun Fiyat</div>
            <p className="mt-2 text-gray-600">
              Günün son ürünlerini <b>%50’ye varan</b> indirimlerle al — kalite aynı, fiyat daha iyi.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-4xl">🌍</div>
            <div className="mt-3 text-xl font-semibold">Sıfır İsraf</div>
            <p className="mt-2 text-gray-600">
              Çöpe gitmeyecek yemeklerle çevreyi koru; <u>yarının yemeğini bugünden al</u>, dolabında sakla.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-4xl">🤝</div>
            <div className="mt-3 text-xl font-semibold">Yerel Destek</div>
            <p className="mt-2 text-gray-600">
              Mahallendeki işletmeleri destekle; onlar kazansın, sen de kazan.
            </p>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Nasıl Çalışır?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            { icon: "📍", title: "Keşfet", desc: "Haritadan ya da listeden işletmeni seç." },
            { icon: "🛒", title: "Rezerve Et", desc: "Son tabak paketini ayırt, online öde (yakında)." },
            { icon: "🍴", title: "Teslim Al", desc: "Belirtilen saat aralığında işletmeden teslim et." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 bg-white shadow-sm">
              <div className="text-5xl">{s.icon}</div>
              <div className="mt-4 text-xl font-semibold">{s.title}</div>
              <div className="mt-2 text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* İŞLETMELER İÇİN CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border bg-gradient-to-r from-white to-gray-50 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Restoran Sahibi misin?</h3>
            <p className="mt-2 text-gray-700 max-w-2xl">
              Son Tabak’a katılarak hem <b>ek gelir</b> elde et hem de çöpe gidecek yemeklerini
              müşterilere ulaştır. Hemen işletmeni kaydet, çevreye ve topluma katkı sağla.
            </p>
          </div>
          <a href="/business" className="rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90 transition">
            İşletmeni Kaydet
          </a>
        </div>
      </section>

      {/* IMPACT / TOPLUMSAL MESAJ */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border p-8 bg-white shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold">Birlikte Daha İyi Bir Sofra</h3>
          <p className="mt-3 text-gray-700">
            Türkiye’de her gün tonlarca yemek çöpe gidiyor. Son Tabak ile sen de gıda israfını
            önlemeye katkı sağla. Kaliteli ürünü ucuza al, yarının yemeğini bugünden planla.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-2xl border p-6 text-center">
              <div className="text-3xl font-black text-brand-accent">5.234</div>
              <div className="mt-1 text-sm text-gray-600">kurtarılan tabak (örnek)</div>
            </div>
            <div className="rounded-2xl border p-6 text-center">
              <div className="text-3xl font-black text-brand-accent">1.2 ton</div>
              <div className="mt-1 text-sm text-gray-600">israf edilmeyen yemek (örnek)</div>
            </div>
            <div className="rounded-2xl border p-6 text-center">
              <div className="text-3xl font-black text-brand-accent">%50+</div>
              <div className="mt-1 text-sm text-gray-600">ortalama indirim</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
