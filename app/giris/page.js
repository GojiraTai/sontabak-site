"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const LS_USERS = "st_users";
const LS_CURRENT = "st_current_user";

// Basit seed: demo kullanıcılar
const DEMO = [
  { id: "u1", role: "musteri", name: "Ayşe Müşteri", email: "ayse@ornek.com", password: "123456" },
  { id: "u2", role: "musteri", name: "Mehmet Müşteri", email: "mehmet@ornek.com", password: "123456" },
  { id: "u3", role: "restoran", name: "Mahalle Fırını", email: "firin@ornek.com", password: "123456" },
];

function loadUsers() {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(LS_USERS);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}
function saveUsers(arr) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_USERS, JSON.stringify(arr));
}
function seedDemo() {
  const existing = loadUsers();
  if (existing.length === 0) saveUsers(DEMO);
}

export default function GirisPage() {
  const [role, setRole] = useState("musteri");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { seedDemo(); }, []);

  function handleDemoFill(kind) {
    const users = loadUsers();
    const u = users.find(u => u.role === kind);
    if (u) { setEmail(u.email); setPassword(u.password); setRole(u.role); }
  }

  function login(e) {
    e.preventDefault();
    const users = loadUsers();
    const u = users.find(u => u.email === email && u.password === password && u.role === role);
    if (!u) { alert("Bilgiler hatalı. E-posta/şifre/rolü kontrol edin."); return; }
    localStorage.setItem(LS_CURRENT, JSON.stringify(u));
    alert(`Hoş geldin ${u.name}!`);

    // Role göre yönlendir
    if (u.role === "restoran") window.location.href = "/admin";
    else window.location.href = "/musteri";
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold text-center">Giriş Yap</h1>
      <p className="mt-2 text-center text-gray-600">Devam etmek için rol seçip bilgilerini gir.</p>

      <form onSubmit={login} className="mt-8 space-y-4">
        {/* Rol seçimi */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={()=>setRole("musteri")}
            className={`rounded-xl px-4 py-3 border ${role==="musteri" ? "bg-brand-accent text-white" : "bg-white"}`}
          >
            Müşteri
          </button>
          <button
            type="button"
            onClick={()=>setRole("restoran")}
            className={`rounded-xl px-4 py-3 border ${role==="restoran" ? "bg-brand-primary text-white" : "bg-white"}`}
          >
            Restoran
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="ornek@eposta.com"
            value={email} onChange={e=>setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Şifre</label>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="••••••"
            value={password} onChange={e=>setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full rounded-xl px-5 py-3 bg-brand-primary text-white hover:opacity-90">
          Giriş Yap
        </button>

        {/* Demo kısayollar */}
        <div className="flex items-center justify-between text-sm">
          <button type="button" onClick={()=>handleDemoFill("musteri")} className="underline">
            Demo Müşteri Doldur
          </button>
          <button type="button" onClick={()=>handleDemoFill("restoran")} className="underline">
            Demo Restoran Doldur
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Hesabın yok mu?{" "}
        <Link href="/kayit" className="text-brand-accent underline">
          Kayıt Ol
        </Link>
      </p>
    </section>
  );
}
