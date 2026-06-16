'use client';
import { useState } from 'react';

export default function MatchOracle() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({ home: 42, draw: 18, away: 40 });
  const [userChoice, setUserChoice] = useState(null);

  const handleVote = (choice) => {
    if (voted) return;
    
    setUserChoice(choice);
    setVotes(prev => ({
      ...prev,
      [choice]: prev[choice] + 1
    }));
    setVoted(true);
  };

  const totalVotes = votes.home + votes.draw + votes.away;
  const getPct = (val) => Math.round((val / totalVotes) * 100);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-amber-500/10 text-amber-500 text-xs px-2.5 py-1 rounded-full font-semibold">Today's Feature Match</span>
        <span className="text-xs text-slate-400">Total Fan Votes: {totalVotes}</span>
      </div>

      <div className="grid grid-cols-3 gap-3 items-center text-center my-6">
        {/* Home Team */}
        <button 
          onClick={() => handleVote('home')}
          disabled={voted}
          className={`p-4 rounded-xl transition-all border flex flex-col items-center justify-center ${
            voted && userChoice === 'home' ? 'bg-emerald-600/20 border-emerald-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <span className="text-4xl mb-2">🇧🇷</span>
          <span className="font-bold text-sm">Brazil</span>
          {voted && <span className="text-xl font-black text-amber-400 mt-2">{getPct(votes.home)}%</span>}
        </button>

        {/* Draw Option */}
        <button 
          onClick={() => handleVote('draw')}
          disabled={voted}
          className={`p-4 rounded-xl transition-all border flex flex-col items-center justify-center h-full ${
            voted && userChoice === 'draw' ? 'bg-emerald-600/20 border-emerald-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">🤝 Draw</span>
          {voted && <span className="text-xl font-black text-amber-400 mt-4">{getPct(votes.draw)}%</span>}
        </button>

        {/* Away Team */}
        <button 
          onClick={() => handleVote('away')}
          disabled={voted}
          className={`p-4 rounded-xl transition-all border flex flex-col items-center justify-center ${
            voted && userChoice === 'away' ? 'bg-emerald-600/20 border-emerald-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <span className="text-4xl mb-2">🇲🇦</span>
          <span className="font-bold text-sm">Morocco</span>
          {voted && <span className="text-xl font-black text-amber-400 mt-2">{getPct(votes.away)}%</span>}
        </button>
      </div>

      {voted && (
        <p className="text-center text-xs text-emerald-400 font-medium animate-pulse">
          ✓ Your prediction has been registered to the global tally!
        </p>
      )}
    </div>
  );
}