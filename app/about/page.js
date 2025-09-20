export const metadata = { title: "Hakkımızda • Son Tabak" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Hakkımızda</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        Son Tabak; israfı azaltmayı, yerel işletmeleri desteklemeyi ve
        lezzetli ürünleri daha erişilebilir kılmayı amaçlayan toplumsal bir girişimdir.
        “Son Tabak En İyisidir” diyoruz; çünkü bazen en güzeli en sonda kalır.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <div className="text-xl font-semibold">İsrafı Azalt</div>
          <div className="mt-2 text-gray-600">Gıda israfını azaltan akıllı model.</div>
        </div>
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <div className="text-xl font-semibold">Uygun Fiyat</div>
          <div className="mt-2 text-gray-600">Kaliteli lezzetlere iyi fiyat.</div>
        </div>
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <div className="text-xl font-semibold">Yerel Destek</div>
          <div className="mt-2 text-gray-600">Mahallendeki işletmeler kazansın.</div>
        </div>
      </div>
    </section>
  );
}