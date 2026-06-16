export default function BracketTree() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-amber-500">Knockout Bracket Tree</h2>
        <p className="text-xs text-slate-400">Track the tournament pipeline through the play-off elimination rounds.</p>
      </div>

      {/* Visual Bracket Grid */}
      <div className="grid grid-cols-3 gap-4 items-center bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[300px]">
        
        {/* Round of 16 Node Column */}
        <div className="space-y-8">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Round of 16</div>
          <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-emerald-400 flex justify-between"><span>🇧🇷 Brazil</span> <span>2</span></div>
            <div className="text-xs text-slate-500 flex justify-between"><span>🇲🇦 Morocco</span> <span>1</span></div>
          </div>
          <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-emerald-400 flex justify-between"><span>🇫🇷 France</span> <span>3</span></div>
            <div className="text-xs text-slate-500 flex justify-between"><span>🇲🇽 Mexico</span> <span>0</span></div>
          </div>
        </div>

        {/* Quarter Finals Node Column */}
        <div className="space-y-16">
          <div className="text-[10px] uppercase font-bold text-amber-500 tracking-wider mb-2">Quarter Finals</div>
          <div className="bg-slate-900 p-3 rounded-lg border border-amber-500/30 space-y-2">
            <div className="text-xs font-bold text-slate-300 flex justify-between"><span>🇧🇷 Brazil</span> <span>-</span></div>
            <div className="text-xs font-bold text-slate-300 flex justify-between"><span>🇫🇷 France</span> <span>-</span></div>
          </div>
        </div>

        {/* Final Winner Placeholder Node */}
        <div className="text-center bg-gradient-to-br from-amber-500/10 to-transparent p-4 rounded-xl border border-amber-500/20">
          <span className="text-2xl block mb-1">🏆</span>
          <div className="text-[10px] uppercase font-black tracking-widest text-amber-500">Grand Finalist</div>
          <div className="text-xs text-slate-400 mt-2 font-medium">TBD July 19</div>
        </div>

      </div>
    </div>
  );
}