import React, { useState } from 'react';
import { UserCircle, Lock, LogIn, Clipboard, UserPlus, Trash2, LogOut, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import { useForm } from 'react-hook-form';

const MyTeam = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  
  // Mock Roster
  const [roster, setRoster] = useState([
    { name: 'John Doe', role: 'Batsman', jersey: '10' },
    { name: 'Jane Smith', role: 'All-rounder', jersey: '07' },
  ]);

  const onAddPlayer = async (data: any) => {
    try {
      const player = { ...data, teamCode: username }; 
      const response = await fetch('http://localhost:3001/api/roster', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
      });

      if (response.ok) {
        setRoster([...roster, data]);
        setIsAddingPlayer(false);
        reset();
      } else {
        console.error('Failed to add player');
      }
    } catch (error) {
      console.error('Network error', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.startsWith('team_') && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid team credentials. Please check and try again.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col gap-8 px-6 pt-20">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
            <UserCircle size={40} />
          </div>
          <h1 className="text-3xl font-display font-bold">Team Captain Login</h1>
          <p className="text-white/50 text-sm max-w-[250px]">
            Enter your assigned team credentials to manage your roster.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="space-y-4">
            <div className="relative">
              <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Team ID (e.g., team_001)" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-orange/50 transition-all font-medium"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-orange/50 transition-all font-medium"
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-400 text-xs font-bold"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            className="btn-primary w-full py-4 mt-2"
          >
            Login to Dashboard
            <LogIn size={20} />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-6 pt-12 pb-12">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-display font-bold uppercase">{username.replace('_', ' ')}</h1>
          <span className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-widest uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Registration Active
          </span>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-white"
        >
          <LogOut size={20} />
        </button>
      </div>

      {/* Team Code Card */}
      <div className="glass-card p-4 border-brand-orange/20 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase">Unique Team Code</p>
          <p className="text-lg font-display font-bold text-brand-orange">OC26-7782</p>
        </div>
        <button className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
          <Clipboard size={18} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4">
          <p className="text-[10px] text-white/40 font-bold uppercase">Players</p>
          <p className="text-2xl font-display font-bold">{roster.length} / 13</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-[10px] text-white/40 font-bold uppercase">Status</p>
          <p className="text-xs font-bold text-brand-blue mt-1">PENDING REVIEW</p>
        </div>
      </div>

      {/* Add Player Form */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Team Roster</h2>
          <button 
            onClick={() => setIsAddingPlayer(true)}
            className="flex items-center gap-2 text-brand-orange text-xs font-bold"
          >
            <UserPlus size={16} />
            Add Player
          </button>
        </div>

        <Modal 
          isOpen={isAddingPlayer} 
          onClose={() => setIsAddingPlayer(false)} 
          title="Add New Player"
        >
          <form onSubmit={handleSubmit(onAddPlayer)} className="flex flex-col gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block">Full Name</label>
                <input 
                  {...register('name', { required: true })}
                  placeholder="Player name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block">Jersey #</label>
                  <input 
                    {...register('jersey', { required: true })}
                    placeholder="01"
                    type="number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block">Role</label>
                  <select 
                    {...register('role', { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none appearance-none"
                  >
                    <option value="" disabled>Select role</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="All-rounder">All-rounder</option>
                    <option value="Wicket-Keeper">Wicket-Keeper</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">
              Add to Roster
              <UserCheck size={18} />
            </button>
          </form>
        </Modal>

        <div className="space-y-3">
          <AnimatePresence>
            {roster.map((player, i) => (
              <motion.div 
                key={player.jersey}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card p-4 flex items-center justify-between border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-display font-bold">
                    #{player.jersey}
                  </div>
                  <div>
                    <h3 className="font-bold">{player.name}</h3>
                    <p className="text-[10px] text-white/40 uppercase font-bold">{player.role}</p>
                  </div>
                </div>
                <button className="p-2 text-white/20 hover:text-red-400 transition-colors">
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
