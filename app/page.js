import Link from 'next/link';

function GlimpseCard({ title, icon, description, badge, href }) {
  return (
    <Link href={href} className="group bg-slate-950 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl transition-all shadow-xl block hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <span className="text-3xl">{icon}</span>
        {badge && <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">{badge}</span>}
      </div>
      <h3 className="text-lg font-bold group-hover:text-amber-400 transition-colors mb-1">{title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Welcome */}
      <div className="text-center max-w-xl mx-auto space-y-3 py-6">
        <h2 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-500 bg-clip-text text-transparent">
          The World Cup, Fan-Style.
        </h2>
        <p className="text-slate-400 text-sm">
          Cast live predictions, track group charts, draft your dream roster, and keep up with every match break.
        </p>
      </div>

      {/* Grid Dashboard Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GlimpseCard 
          href="/fixtures"
          icon="📅" 
          title="Live Fixtures & Polls" 
          description="View up-to-second scores, daily match schedules, and submit your score oracle projections."
          badge="Live"
        />
        <GlimpseCard 
          href="/table"
          icon="📋" 
          title="Group Standings" 
          description="Track group-by-group details including matches played, goal differences, and running points."
        />
        <GlimpseCard 
          href="/tree"
          icon="🌲" 
          title="Knockout Bracket Tree" 
          description="Track the structural path from the historic Round of 32 all the way to the Grand Final trophy."
        />
        <GlimpseCard 
          href="/squad"
          icon="✨" 
          title="Dream Squad Selector" 
          description="Build, edit, and locks your ultimate team line-up card. Editable all tournament long."
          badge="Fantasy"
        />
      </div>

      {/* Embedded News Reel Section */}
      <div className="mt-12 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-bold tracking-wide uppercase text-amber-500 flex items-center gap-2">
            <span>📰</span> Latest Tournament Flash
          </h4>
          <Link href="/news" className="text-xs text-slate-400 hover:text-white underline">View all news</Link>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
            <span className="text-amber-500 font-bold mr-2">[Matchday Insight]</span> Stadium preparation shifts across North American host zones as opening sets conclude!
          </div>
        </div>
      </div>
    </div>
  );
}