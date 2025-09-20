export const metadata = { title: "İşletmeler İçin • Son Tabak" };

export default function BusinessPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">İşletmenizi Ekleyin</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">
        Gün sonunda kalan ürünleri çöpe atmak yerine gelire dönüştürün.
        Son Tabak ile yeni müşterilere ulaşın, israfı azaltın.
      </p>

      <div className="mt-10 rounded-2xl border p-6 bg-white shadow-sm">
        <form className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">İşletme Adı</label>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Örn. Mahalle Fırını"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Şehir</label>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="İstanbul"/>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="ornek@firma.com"/>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Açıklama</label>
            <textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows="4" placeholder="Kısa açıklama..."></textarea>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="button" className="rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90 transition">
              Başvuru Gönder
            </button>
            <span className="text-sm text-gray-600 self-center">*Şimdilik form e-posta göndermez; MVP vitrinidir.</span>
          </div>
        </form>
      </div>
    </section>
  );
}