import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-white font-bold">
            S
          </span>
          <span className="font-semibold">Son Tabak</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/how" className="hover:text-brand-accent">Nasıl Çalışır?</Link>
          <Link href="/business" className="hover:text-brand-accent">İşletmeler</Link>
          <Link href="/about" className="hover:text-brand-accent">Hakkımızda</Link>
          <Link href="/#sss" className="hover:text-brand-accent">SSS</Link>
          {/* Yeni: Giriş */}
          <Link href="/giris" className="rounded-lg px-4 py-2 bg-brand-primary text-white hover:opacity-90 transition">
            Giriş Yap
          </Link>
        </nav>
      </div>
    </header>
  );
}
