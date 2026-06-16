import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🏆 WC26 Fan Zone - Live Stats & Predictions",
  description: "Your ultimate community hub for the FIFA World Cup 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen flex flex-col`}>
        
        {/* STICKY NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 py-3">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <Link href="/" className="text-xl font-black tracking-wider text-amber-500 hover:opacity-80">
              🏆 WC26 FAN ZONE
            </Link>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-slate-300">
              <Link href="/fixtures" className="hover:text-amber-400 transition-colors">📅 Fixtures</Link>
              <Link href="/table" className="hover:text-amber-400 transition-colors">📋 Points Table</Link>
              <Link href="/tree" className="hover:text-amber-400 transition-colors">🌲 Bracket Tree</Link>
              <Link href="/squad" className="hover:text-amber-400 transition-colors">⚽ My Squad</Link>
              <Link href="/news" className="hover:text-amber-400 transition-colors">📰 News</Link>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
          {children}
        </main>

        <footer className="text-center py-6 text-[11px] text-slate-500 border-t border-slate-800 bg-slate-950/50">
          <p>© 2026 WC26 Fan Zone. Unofficial community platform.</p>
        </footer>
      </body>
    </html>
  );
}