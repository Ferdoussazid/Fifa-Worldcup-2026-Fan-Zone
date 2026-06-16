'use object';

export default function PointTable() {
  // Sample structure mimicking real Football API data feeds
  const groupA = [
    { rank: 1, team: "🇲🇽 Mexico", p: 3, w: 2, d: 1, l: 0, gd: "+4", pts: 7 },
    { rank: 2, team: "🇺🇸 USA", p: 3, w: 2, d: 0, l: 1, gd: "+3", pts: 6 },
    { rank: 3, team: "🇨🇦 Canada", p: 3, w: 1, d: 1, l: 1, gd: "0", pts: 4 },
    { rank: 4, team: "🇩🇪 Germany", p: 3, w: 0, d: 0, l: 3, gd: "-7", pts: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-amber-500">Tournament Standings</h2>
        <p className="text-xs text-slate-400">Live data showing goal differences and advancement indicators.</p>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl overflow-hidden">
        <h3 className="font-bold text-sm text-slate-300 mb-3 px-2">⚽ Group A Standings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3 text-center">Pos</th>
                <th className="p-3">Team</th>
                <th className="p-3 text-center">P</th>
                <th className="p-3 text-center">W</th>
                <th className="p-3 text-center">D</th>
                <th className="p-3 text-center">L</th>
                <th className="p-3 text-center">GD</th>
                <th className="p-3 text-center font-bold text-amber-400">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {groupA.map((t) => (
                <tr key={t.team} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3 text-center font-bold text-slate-400">{t.rank}</td>
                  <td className="p-3 font-bold text-white">{t.team}</td>
                  <td className="p-3 text-center font-mono">{t.p}</td>
                  <td className="p-3 text-center">{t.w}</td>
                  <td className="p-3 text-center">{t.d}</td>
                  <td className="p-3 text-center">{t.l}</td>
                  <td className="p-3 text-center font-mono text-slate-400">{t.gd}</td>
                  <td className="p-3 text-center font-black text-amber-400 font-mono">{t.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}