export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Son Tabak</div>
        <div className="flex gap-4">
          <a className="hover:text-brand-accent" href="/about">Hakkımızda</a>
          <a className="hover:text-brand-accent" href="/how">Nasıl Çalışır?</a>
          <a className="hover:text-brand-accent" href="/business">İşletmeler</a>
        </div>
      </div>
    </footer>
  );
}