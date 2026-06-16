'use client';
import { useEffect } from 'react';

export default function AdBanner({ slotId }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense placement error:", err);
    }
  }, []);

  return (
    <div className="my-6 p-2 bg-slate-950/40 rounded-xl border border-slate-800/50 flex flex-col items-center justify-center overflow-hidden min-h-[100px]">
      <span className="text-[10px] text-slate-600 tracking-widest uppercase mb-1">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}