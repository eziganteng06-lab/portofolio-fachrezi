import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#081529] text-white px-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-7xl font-extrabold text-blue-500">404</h1>
        <h2 className="text-2xl font-bold">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition shadow-lg shadow-blue-500/25"
          >
            🏠 Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
