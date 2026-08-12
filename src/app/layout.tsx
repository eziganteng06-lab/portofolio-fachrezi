import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mochamad Fachrezi | Software Developer Student & Mobile App Enthusiast",
  description: "Portfolio Resmi Mochamad Fachrezi - Siswa Rekayasa Perangkat Lunak (RPL) SMK Jakarta Pusat 1. Spesialisasi Pengembangan Aplikasi Mobile & Web.",
  keywords: ["Mochamad Fachrezi", "Fachrezi", "Portfolio", "Software Developer Student", "SMK Jakarta Pusat 1", "Flutter Developer", "CryptoKu"],
  authors: [{ name: "Mochamad Fachrezi Azhari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#081529] text-white antialiased selection:bg-blue-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
