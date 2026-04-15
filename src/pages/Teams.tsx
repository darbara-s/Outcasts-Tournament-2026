import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Teams = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden px-6 pt-16 pb-24 relative">
      {/* Header Section - Pushed down to avoid being cut off */}
      <div className="flex flex-col gap-1 text-center shrink-0 mb-4">
        <h1 className="text-2xl font-display font-bold uppercase tracking-tight text-white">Participating Teams</h1>
        <p className="text-white/40 text-[10px] uppercase tracking-wider">Berlin Premier League Roster</p>
      </div>

      {/* Centered Empty State */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center flex-grow text-center gap-4 py-4"
      >
        <div className="relative">
          {/* Animated rings */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-brand-orange rounded-full blur-xl"
          />
          <div className="relative z-10 w-16 h-16 glass-card border-brand-orange/30 flex items-center justify-center bg-gradient-to-br from-brand-orange/20 to-brand-blue/20">
            <Trophy className="text-brand-orange drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]" size={28} />
          </div>
        </div>

        <div className="space-y-2 px-4">
          <h2 className="text-lg font-bold font-display italic tracking-tight uppercase">Teams are lining up...</h2>
          <p className="text-white/30 text-[11px] max-w-[240px] mx-auto leading-relaxed">
            Registered squads will appear here once finalized by official BPL representatives.
          </p>
        </div>
      </motion.div>

      {/* Team Counter - Positioned absolutely to ensure it's above bottom nav and in fold */}
      <div className="px-6 absolute bottom-24 left-0 right-0">
        <div className="glass-card p-4 flex flex-col items-center justify-center border-brand-blue/20 bg-brand-blue/5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">League Capacity</span>
          <span className="text-brand-blue font-display font-bold text-lg">Total Teams: 16</span>
        </div>
      </div>
    </div>
  );
};

export default Teams;
