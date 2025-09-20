export default function HomePage() {
  return (
    <div className="relative isolate">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Son Tabak <span className="text-brand-accent">En İyisidir</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Restoranlar, kafeler ve fırınlarda gün sonunda kalan lezzetleri
              uygun fiyata keşfet. İsraf azalır, bütçe gülümser.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/how" className="rounded-xl px-5 py-3 border border-gray-300 hover:border-gray-400 transition">
                Nasıl Çalışır?
              </a>
              <a href="/business" className="rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90 transition">
                İşletmenizi Ekleyin
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              Uygulamalar yakında: App Store & Google Play
            </div>
          </div>
          <div className="relative p-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 shadow-sm">
            <div className="rounded-2xl border p-6">
              <div className="text-sm uppercase tracking-widest text-gray-500">Yakınımda</div>
              <div className="mt-2 text-2xl font-semibold">Son Tabak Paketleri</div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Mahalle Fırını</div>
                    <div className="text-sm text-gray-600">“Sürpriz Börek & Poğaça”</div>
                  </div>
                  <div className="text-right">
                    <div className="line-through text-sm text-gray-400">₺70</div>
                    <div className="text-lg font-bold text-brand-accent">₺29</div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Köşe Kafe</div>
                    <div className="text-sm text-gray-600">“Tatlı Sürprizi”</div>
                  </div>
                  <div className="text-right">
                    <div className="line-through text-sm text-gray-400">₺120</div>
                    <div className="text-lg font-bold text-brand-accent">₺49</div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Pideci Usta</div>
                    <div className="text-sm text-gray-600">“Günün Son Dilimleri”</div>
                  </div>
                  <div className="text-right">
                    <div className="line-through text-sm text-gray-400">₺150</div>
                    <div className="text-lg font-bold text-brand-accent">₺59</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}