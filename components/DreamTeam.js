'use client';
import { useState } from 'react';

const SQUAD_POSITIONS = [
  { id: 'FW1', label: 'LW' }, { id: 'FW2', label: 'ST' }, { id: 'FW3', label: 'RW' },
  { id: 'MF1', label: 'CM' }, { id: 'MF2', label: 'CAM' }, { id: 'MF3', label: 'CM' },
  { id: 'DF1', label: 'LB' }, { id: 'DF2', label: 'CB' }, { id: 'DF3', label: 'CB' }, { id: 'DF4', label: 'RB' },
  { id: 'GK', label: 'GK' }
];

export default function DreamTeam() {
  const [squad, setSquad] = useState({});
  const [activePos, setActivePos] = useState(null);

  const starPlayers = ["Messi", "Vinícius Jr.", "Mbappé", "Bellingham", "Haaland", "Musiala", "Hakimi", "Van Dijk", "Martinez"];

  const selectPlayer = (playerName) => {
    setSquad(prev => ({ ...prev, [activePos]: playerName }));
    setActivePos(null);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl relative">
      <h3 className="text-lg font-bold text-amber-500 mb-2">Build Your Ultimate World Cup XI</h3>
      <p className="text-xs text-slate-400 mb-6">Tap any position slot on the field to fill your lineup card.</p>

      {/* Simplified Football Pitch Canvas */}
      <div className="bg-gradient-to-b from-emerald-800 to-emerald-950 rounded-xl p-4 grid grid-cols-4 gap-4 border border-emerald-700 min-h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 border border-white/10 my-12 pointer-events-none rounded-full scale-75"></div>
        
        {SQUAD_POSITIONS.map((pos) => (
          <button
            key={pos.id}
            onClick={() => setActivePos(pos.id)}
            className={`p-2 rounded-lg flex flex-col items-center justify-center text-center border text-xs transition-all ${
              squad[pos.id] 
                ? 'bg-slate-900/90 border-amber-400 text-white' 
                : 'bg-white/10 border-dashed border-white/30 hover:bg-white/20'
            } ${pos.id === 'GK' ? 'col-span-4 justify-self-center w-24' : ''}`}
          >
            <span className="text-[10px] uppercase font-bold text-emerald-300 block">{pos.label}</span>
            <span className="font-extrabold truncate w-full mt-1">
              {squad[pos.id] ? squad[pos.id] : '+ Pick'}
            </span>
          </button>
        ))}
      </div>

      {/* Modal Picker Overlay */}
      {activePos && (
        <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-6 rounded-2xl z-20">
          <h4 className="font-bold text-sm text-slate-300 mb-4">Select Player for {activePos}</h4>
          <div className="grid grid-cols-3 gap-2 max-w-sm">
            {starPlayers.map(p => (
              <button 
                key={p} 
                onClick={() => selectPlayer(p)}
                className="bg-slate-800 hover:bg-amber-600 p-2 rounded text-xs font-semibold"
              >
                {p}
              </button>
            ))}
          </div>
          <button onClick={() => setActivePos(null)} className="mt-6 text-xs underline text-slate-400">Cancel Selection</button>
        </div>
      )}
    </div>
  );
}