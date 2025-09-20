// app/business/page.js
export const metadata = { title: "İşletmeler İçin • Son Tabak" };

const faqs = [
  { q: "Komisyon oranı nedir?", a: "MVP döneminde esnek model uyguluyoruz. Önerilen komisyon %10–15 aralığında. Pilot işletmelere lansman avantajı sunuyoruz." },
  { q: "Saat aralığı nasıl çalışır?", a: "İşletme kapanmadan 1–2 saat önce paketler listelenir. Teslim alınabilir zaman aralığını siz belirlersiniz (örn. 19:30–21:00)." },
  { q: "İptal/iade politikası nasıl?", a: "Paketler sürpriz içeriklidir. Yanlış/bozuk ürün gibi istisnai durumlarda işletme inisiyatifiyle telafi/iade yapılır. Kuralları sözleşmede belirtiyoruz." },
  { q: "Kalite ve gıda güvenliği?", a: "Taze ve güvenli ürünlerin değerlendirilmesi esastır. Soğuk zincire uygun saklama/teslim prensiplerini rehberde paylaşıyoruz." },
  { q: "Fatura/e-fatura süreci?", a: "Her satış için işletme adına fatura kesilmelidir. E-fatura/mali entegrasyon için çözüm ortaklarımızı sunacağız." },
  { q: "Ödeme akışı nasıl oluyor?", a: "Ödemeler online altyapı ile tahsil edilecek (Yakında hizmetinizde). Gelirler kesinti sonrası periyodik aktarılır." },
  { q: "Destek nasıl alırım?", a: "Öncelikli destek kanalımız e-posta ve WhatsApp iş destek hattıdır. Eğitim dokümanları ve kısa videolar sağlıyoruz." },
  { q: "Fotoğraf ve içerik önerileri?", a: "Doğal ışık, sade arka plan, paket fotoğrafı ve yaklaşık gramaj/servis kişi sayısı dönüşümü artırır." },
];

export default function BusinessPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">İşletmenizi Ekleyin</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">
        Gün sonunda kalan ürünleri çöpe atmak yerine gelire dönüştürün.
        Son Tabak ile yeni müşterilere ulaşın, israfı azaltın.
      </p>

      {/* Başvuru formu (MVP) */}
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
            <span className="text-sm text-gray-600 self-center">*MVP’de form e-posta göndermez; yakında hizmetinizde.</span>
          </div>
        </form>
      </div>

      {/* SSS */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Sık Sorulan Sorular</h2>
        <div className="mt-6 divide-y border rounded-2xl bg-white shadow-sm">
          {faqs.map((f, idx) => (
            <details key={idx} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-base md:text-lg font-semibold">{f.q}</span>
                <span className="ml-4 select-none text-xl leading-none group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* ikna kutusu */}
      <div className="mt-10 rounded-3xl border bg-gradient-to-r from-white to-gray-50 p-8">
        <h3 className="text-xl md:text-2xl font-bold">Neden Şimdi Katılmalısınız?</h3>
        <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
          <li>Çöpe gidecek üründen <b>ek gelir</b> yaratın.</li>
          <li>Mahallenizde <b>yeni müşteri</b> kazanın.</li>
          <li>Toplumsal fayda ve <b>çevre duyarlılığı</b> ile marka algınızı güçlendirin.</li>
        </ul>
      </div>
    </section>
  );
}
