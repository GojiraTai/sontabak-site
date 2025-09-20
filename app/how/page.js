export const metadata = { title: "Nasıl Çalışır? • Son Tabak" };

const steps = [
  { no: "1", title: "Yakındaki paketleri keşfet", desc: "Konumuna göre listeden veya haritadan gör."},
  { no: "2", title: "Uygun fiyata satın al", desc: "Güvenli online ödeme — yakında."},
  { no: "3", title: "Mağazadan teslim al", desc: "Belirtilen saat aralığında QR kodla teslim al."},
];

export default function HowPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Nasıl Çalışır?</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">
        Son Tabak, gün sonunda kalan lezzetleri israf olmasın diye
        avantajlı fiyata sunar. Hem işletmeler kazanır hem de sen.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {steps.map(s => (
          <div key={s.no} className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-5xl font-black text-brand-accent">{s.no}</div>
            <div className="mt-4 text-xl font-semibold">{s.title}</div>
            <div className="mt-2 text-gray-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}