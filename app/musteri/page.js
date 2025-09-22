"use client";
import { useEffect, useMemo, useState } from "react";

const DUMMY_PRODUCTS = [
  { id: "p1", vendor: "Mahalle Fırını", name: "Peynirli Börek", price: 25, city: "İstanbul" },
  { id: "p2", vendor: "Mahalle Fırını", name: "Poğaça (2’li)", price: 18, city: "İstanbul" },
  { id: "p3", vendor: "Köşe Kafe", name: "Brownie Dilim", price: 30, city: "İstanbul" },
  { id: "p4", vendor: "Pideci Usta", name: "Karışık Pide Dilimi", price: 32, city: "İzmir" },
];

// localStorage helpers
const LS_PRODUCTS = "st_products";
const LS_CART = "st_cart";

function loadProducts() {
  if (typeof window === "undefined") return [];
  const fromLS = localStorage.getItem(LS_PRODUCTS);
  return fromLS ? JSON.parse(fromLS) : DUMMY_PRODUCTS;
}
function saveProducts(arr) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_PRODUCTS, JSON.stringify(arr));
}
function loadCart() {
  if (typeof window === "undefined") return [];
  const fromLS = localStorage.getItem(LS_CART);
  return fromLS ? JSON.parse(fromLS) : [];
}
function saveCart(arr) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_CART, JSON.stringify(arr));
}

export default function MusteriPage() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [city, setCity] = useState("Tümü");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const p = loadProducts(); setProducts(p);
    const c = loadCart(); setCart(c);
  }, []);

  useEffect(() => { saveCart(cart); }, [cart]);

  const vendors = useMemo(() => Array.from(new Set(products.map(p => p.vendor))), [products]);
  const cities = useMemo(() => ["Tümü", ...Array.from(new Set(products.map(p => p.city)))], [products]);

  const filtered = products.filter(p =>
    (city === "Tümü" || p.city === city) &&
    (p.name.toLowerCase().includes(q.toLowerCase()) || p.vendor.toLowerCase().includes(q.toLowerCase()))
  );

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function addToCart(item) {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx >= 0) {
        const copy = [...prev]; copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 }; return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }
  function decFromCart(id) {
    setCart(prev => {
      const copy = prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0);
      return copy;
    });
  }
  function clearCart() { setCart([]); }

  function confirmOrder() {
    // Basit sipariş makbuzu oluştur ve admin’e düşsün diye localStorage’a yaz
    const order = {
      id: "o_" + Math.random().toString(36).slice(2, 8),
      items: cart,
      total,
      when: new Date().toISOString(),
      status: "Hazırlanıyor",
      customerName: "Misafir", // sonraki aşamada gerçek kullanıcı
    };
    const key = "st_orders";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    localStorage.setItem(key, JSON.stringify([order, ...prev]));
    clearCart();
    alert("Sipariş oluşturuldu! Teslimat: işletmeden belirtilen saat aralığında.");
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">Lezzetleri Keşfet</h1>

      {/* Filtreler */}
      <div className="mt-4 grid md:grid-cols-3 gap-3">
        <input
          className="rounded-xl border px-3 py-2"
          placeholder="Ürün veya işletme ara…"
          value={q} onChange={e=>setQ(e.target.value)}
        />
        <select className="rounded-xl border px-3 py-2" value={city} onChange={e=>setCity(e.target.value)}>
          {cities.map(c => <option key={c}>{c}</option>)}
        </select>
        <button
          onClick={()=>{ setQ(""); setCity("Tümü"); }}
          className="rounded-xl border px-3 py-2 hover:bg-gray-50"
        >
          Sıfırla
        </button>
      </div>

      {/* Ürün listesi */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p => (
          <div key={p.id} className="rounded-2xl border p-5 bg-white shadow-sm flex flex-col">
            <div className="text-sm text-gray-500">{p.vendor} • {p.city}</div>
            <div className="mt-1 text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-brand-accent font-bold">₺{p.price}</div>
            <button onClick={()=>addToCart(p)} className="mt-auto rounded-xl px-4 py-2 bg-brand-primary text-white hover:opacity-90">
              Sepete Ekle
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-gray-600">Uygun sonuç bulunamadı.</div>
        )}
      </div>

      {/* Sepet */}
      <div className="mt-10 rounded-2xl border bg-white shadow-sm p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Sepet</h2>
          <button onClick={clearCart} className="text-sm text-gray-600 underline">Temizle</button>
        </div>
        {cart.length === 0 ? (
          <p className="mt-2 text-gray-600">Sepetin boş.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {cart.map(i => (
              <div key={i.id} className="flex items-center justify-between border rounded-xl p-3">
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-gray-500">{i.vendor}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={()=>decFromCart(i.id)} className="px-3 py-1 border rounded-lg">-</button>
                  <span className="min-w-6 text-center">{i.qty}</span>
                  <button onClick={()=>addToCart(i)} className="px-3 py-1 border rounded-lg">+</button>
                  <div className="w-20 text-right font-semibold">₺{i.price * i.qty}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="text-gray-600">Toplam</div>
              <div className="text-lg font-bold">₺{total}</div>
            </div>
            <button
              onClick={confirmOrder}
              className="w-full rounded-xl px-4 py-3 bg-brand-primary text-white hover:opacity-90"
            >
              Siparişi Onayla (Ödeme: İşletmede)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
