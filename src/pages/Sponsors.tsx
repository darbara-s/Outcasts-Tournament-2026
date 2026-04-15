import React from 'react';
import { Award, MessageCircle, Mail, ExternalLink, ShieldCheck, Zap, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: 'Sports Gear Co', category: 'Official Equipment Partner', icon: ShieldCheck, color: 'text-brand-orange', url: '#' },
    { name: 'City Stadium', category: 'Official Venue Partner', icon: Globe, color: 'text-brand-blue', url: '#' },
    { name: 'Tech Solutions', category: 'Technology Partner', icon: Zap, color: 'text-green-400', url: '#' },
    { name: 'Cricket Hub', category: 'Media Partner', icon: Star, color: 'text-yellow-400', url: '#' },
    { name: 'Premium Batting', category: 'Training Partner', icon: Award, color: 'text-purple-400', url: '#' },
  ];

  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-12 min-h-screen">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-display font-bold">Tournament Partners</h1>
        <p className="text-white/50 text-sm">Recognizing the support behind the Berlin Premier League</p>
      </div>

      {/* Direct Sponsor List */}
      <div className="grid gap-4">
        {sponsors.map((sponsor, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-4 flex items-center justify-between border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${sponsor.color}`}>
                <sponsor.icon size={24} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">{sponsor.name}</h3>
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  {sponsor.category}
                </span>
              </div>
            </div>
            <a 
              href={sponsor.url} 
              className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ExternalLink size={16} className="text-white/30" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Partner With Us Banner at Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-auto glass-card p-6 border-brand-orange/30 bg-gradient-to-br from-brand-orange/10 to-transparent relative overflow-hidden"
      >
        <div className="absolute -right-4 -top-4 opacity-10">
          <Award size={100} />
        </div>
        
        <h2 className="text-xl font-display font-bold mb-2">Partner With Us</h2>
        <p className="text-white/60 text-xs mb-6 leading-relaxed">
          Gain international visibility and support the growth of European cricket. Custom partnership tiers available for 2026.
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="flex items-center justify-center gap-2 py-3 bg-green-500/20 text-green-400 rounded-xl border border-green-500/30 text-xs font-bold transition-all hover:bg-green-500/30"
            onClick={() => window.open('https://wa.me/35300000000', '_blank')}
          >
            <MessageCircle size={14} />
            WhatsApp
          </button>
          <button 
            className="flex items-center justify-center gap-2 py-3 bg-brand-blue/20 text-brand-blue rounded-xl border border-brand-blue/30 text-xs font-bold transition-all hover:bg-brand-blue/30"
            onClick={() => window.location.href = 'mailto:sponsor@berlinpremier.com?subject=Sponsorship Inquiry'}
          >
            <Mail size={14} />
            Email
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
