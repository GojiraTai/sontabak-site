"use client";
import { useEffect, useMemo, useState } from "react";

const LS_PRODUCTS = "st_products";
const LS_ORDERS = "st_orders";

function load(key, fallback=[]) {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}
function save(key, val) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(val));
}

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // form state
  const [vendor, setVendor] = useState("Mahalle Fırını");
  const [city, setCity] = useState("İstanbul");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setProducts(load(LS_PRODUCTS));
    setOrders(load(LS_ORDERS));
  }, []);

  useEffect(() => { save(LS_PRODUCTS, products); }, [products]);

  const todayOrders = useMemo(() => {
    const start = new Date(); start.setHours(0,0,0,0);
    return orders.filter(o => new Date(o.when) >= start);
  }, [orders]);

  function addProduct() {
    if (!name || !price) { alert("Ürün adı ve fiyat zorunlu."); return; }
    const id = "p_" + Math.random().toString(36).slice(2, 8);
    const p = { id, vendor, name, price: Number(price), city };
    setProducts(prev => [p, ...prev]);
    setName(""); setPrice("");
    alert("Ürün eklendi ve müşteriler sayfasında listelenecek.");
  }

  function deleteProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  function updateOrderStatus(oid, status) {
    const next = orders.map(o => o.id === oid ? { ...o, status } : o);
    setOrders(next); save(LS_ORDERS, next);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">İşletme Paneli</h1>

      {/* Yeni Ürün Ekle */}
      <div className="mt-6 rounded-2xl border p-5 bg-white shadow-sm">
        <h2 className="text-xl font-semibold">Yeni Ürün Ekle</h2>
        <div className="grid md:grid-cols-5 gap-3 mt-4">
          <input className="rounded-xl border px-3 py-2 md:col-span-2" placeholder="İşletme adı"
                 value={vendor} onChange={e=>setVendor(e.target.value)} />
          <input className="rounded-xl border px-3 py-2" placeholder="Şehir"
                 value={city} onChange={e=>setCity(e.target.value)} />
          <input className="rounded-xl border px-3 py-2" placeholder="Ürün adı"
                 value={name} onChange={e=>setName(e.target.value)} />
          <input className="rounded-xl border px-3 py-2" type="number" min="1" placeholder="Fiyat (₺)"
                 value={price} onChange={e=>setPrice(e.target.value)} />
        </div>
        <div className="mt-3">
          <button onClick={addProduct} className="rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90">
            Ürünü Ekle
          </button>
        </div>

        {/* Ürünlerim */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Ürünlerim</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(p => (
              <div key={p.id} className="rounded-xl border p-4 flex flex-col">
                <div className="text-sm text-gray-500">{p.vendor} • {p.city}</div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-brand-accent font-bold mt-1">₺{p.price}</div>
                <button onClick={()=>deleteProduct(p.id)} className="mt-auto text-sm underline text-gray-600">
                  Sil
                </button>
              </div>
            ))}
            {products.length === 0 && <div className="text-gray-600">Henüz ürün eklemediniz.</div>}
          </div>
        </div>
      </div>

      {/* Bugünkü Siparişler */}
      <div className="mt-8 rounded-2xl border p-5 bg-white shadow-sm">
        <h2 className="text-xl font-semibold">Bugünkü Siparişler</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">Sipariş</th>
                <th className="py-2 pr-4">Müşteri</th>
                <th className="py-2 pr-4">Ürünler</th>
                <th className="py-2 pr-4">Toplam</th>
                <th className="py-2 pr-4">Durum</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {todayOrders.map(o => (
                <tr key={o.id} className="border-b align-top">
                  <td className="py-2 pr-4">{o.id}</td>
                  <td className="py-2 pr-4">{o.customerName}</td>
                  <td className="py-2 pr-4">
                    <ul className="space-y-1">
                      {o.items.map(it => (
                        <li key={it.id}>{it.name} × {it.qty} <span className="text-gray-500">({it.vendor})</span></li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-2 pr-4 font-semibold">₺{o.total}</td>
                  <td className="py-2 pr-4">
                    <select
                      value={o.status}
                      onChange={e=>updateOrderStatus(o.id, e.target.value)}
                      className="rounded-lg border px-2 py-1"
                    >
                      <option>Hazırlanıyor</option>
                      <option>Teslime Hazır</option>
                      <option>Teslim Edildi</option>
                      <option>İptal</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <span className="text-xs text-gray-500">{new Date(o.when).toLocaleTimeString()}</span>
                  </td>
                </tr>
              ))}
              {todayOrders.length === 0 && (
                <tr><td colSpan="6" className="py-4 text-gray-600">Bugün sipariş bulunmuyor.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
