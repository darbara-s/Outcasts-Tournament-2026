import { useState } from 'react';
import { Trophy, Calendar, Euro, Users, ExternalLink, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { useForm } from 'react-hook-form';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setIsModalOpen(false);
          reset();
        }, 2000);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Network error', error);
    }
  };

  const sponsors = [
    { name: "Sports Gear Co", url: "#" },
    { name: "City Stadium", url: "#" },
    { name: "Tech Solutions", url: "#" },
    { name: "Cricket Hub", url: "#" },
    { name: "Premium Batting", url: "#" },
    { name: "Global Bowl", url: "#" },
  ];

  return (
    <div className="flex flex-col flex-grow px-6 pb-2 relative h-full min-h-[calc(100svh-80px)] overflow-hidden" style={{ paddingTop: 'var(--space-hero-top)' }}>
      {/* Hero Section Container */}
      <div 
        className="flex flex-col items-center flex-grow justify-start" 
        style={{ gap: 'var(--space-main-gap)' }}
      >
        
        {/* Updated Pill Button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] border border-brand-orange/30 shadow-[0_0_15px_rgba(255,140,0,0.1)]"
        >
          <Trophy size={12} />
          <span>Cricket Tournament</span>
        </motion.div>

        {/* BPL Logo Unit - Scaling with clamp for consistency */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center -mt-2"
        >
          <h1 className="flex flex-col items-center">
            <span className="text-6xl md:text-8xl font-display font-black text-white leading-[0.7] tracking-tighter" style={{ fontSize: 'clamp(3rem, 12svh, 6rem)' }}>
              BERLIN
            </span>
            <span className="block italic font-black text-transparent bg-clip-text bg-[linear-gradient(110deg,#FF8C00,45%,#fff,55%,#FF8C00)] bg-[length:200%_100%] animate-shine pr-6 drop-shadow-[0_10px_30px_rgba(255,140,0,0.4)] leading-[0.9]" style={{ fontSize: 'clamp(4rem, 16svh, 9rem)' }}>
              PREMIER
            </span>
            <span className="tracking-[0.2em] text-brand-blue font-black uppercase leading-[0.7] mt-1 pr-1" style={{ fontSize: 'clamp(2rem, 6svh, 4rem)' }}>
              LEAGUE 2026
            </span>
          </h1>
        </motion.div>

        {/* Stats Grid - Dynamic Gaps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 w-full max-w-sm mx-auto mt-2"
          style={{ gap: 'var(--space-stats-gap)' }}
        >
          <div className="glass-card p-3 flex flex-col items-center text-center justify-center border-green-500/30 bg-green-500/10 backdrop-blur-2xl">
            <Euro className="text-green-400 mb-1" size={18} />
            <p className="text-[8px] text-white/50 uppercase font-bold tracking-widest">Prize</p>
            <p className="text-sm font-display font-black text-green-400 mt-0.5">€1,000</p>
          </div>
          <div className="glass-card p-3 flex flex-col items-center text-center justify-center border-brand-blue/30 bg-brand-blue/10 backdrop-blur-2xl">
            <Users className="text-brand-blue mb-1" size={18} />
            <p className="text-[8px] text-white/50 uppercase font-bold tracking-widest">Entry</p>
            <p className="text-sm font-display font-black text-brand-blue mt-0.5">€250</p>
          </div>
          <div className="glass-card p-3 flex flex-col items-center text-center justify-center border-brand-orange/30 bg-brand-orange/10 backdrop-blur-2xl">
            <Calendar className="text-brand-orange mb-1" size={18} />
            <p className="text-[8px] text-white/50 uppercase font-bold tracking-widest">Dates</p>
            <p className="text-sm font-display font-black text-brand-orange mt-0.5">July 5-13</p>
          </div>
        </motion.div>

        {/* Action Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 w-full max-w-sm mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex-1 py-3 text-sm font-black uppercase tracking-tight shadow-[0_0_20px_rgba(255,140,0,0.3)]"
            onClick={() => setIsModalOpen(true)}
          >
            Register Now
            <ExternalLink size={16} />
          </motion.button>

          <motion.a
            href="https://wa.me/35300000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-[48px] flex-shrink-0 flex items-center justify-center bg-[#25D366] text-white rounded-[16px] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Auto-scrolling Sponsor Carousel - Double Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pb-6 w-full overflow-hidden mt-0"
      >
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-3 bg-clip-text">
          Official Tournament Partners
        </p>
        
        <div className="flex flex-col gap-3">
          {/* Row 1 */}
          <div className="flex relative overflow-hidden h-11">
            <motion.div 
              className="flex gap-3 absolute whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 45, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, i) => (
                <a 
                  key={`r1-${i}`}
                  href={sponsor.url}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/15 transition-all backdrop-blur-md group"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center text-[9px] font-black text-brand-orange group-hover:scale-110 transition-transform">
                    {sponsor.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-black text-white/70 group-hover:text-white transition-colors uppercase tracking-tight">{sponsor.name}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Inverse direction (Right) */}
          <div className="flex relative overflow-hidden h-11">
            <motion.div 
              className="flex gap-3 absolute whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...sponsors, ...sponsors].reverse().map((sponsor, i) => (
                <a 
                  key={`r2-${i}`}
                  href={sponsor.url}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/15 transition-all backdrop-blur-md group"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-[9px] font-black text-brand-blue group-hover:scale-110 transition-transform">
                    {sponsor.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-black text-white/70 group-hover:text-white transition-colors uppercase tracking-tight">{sponsor.name}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Registration Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={isSuccess ? "Registration Successful" : "Register Your Team"}
      >
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
              <Trophy size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Welcome to the League!</h3>
              <p className="text-white/50 text-sm mt-2">Your team registration has been submitted. We will contact you shortly.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block ml-1">Team Name</label>
                <input 
                  {...register('teamName', { required: true })}
                  placeholder="Enter team name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block ml-1">Captain Name</label>
                <input 
                  {...register('captainName', { required: true })}
                  placeholder="Captain's full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block ml-1">Phone</label>
                  <input 
                    {...register('phone', { required: true })}
                    placeholder="+353 ..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-white/40 mb-1 block ml-1">Email</label>
                  <input 
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brand-orange/50 outline-none" 
                  />
                </div>
              </div>
            </div>
            <button 
              disabled={isSubmitting}
              className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed uppercase font-black tracking-widest"
            >
              {isSubmitting ? "Submitting..." : "Join the League"}
              <Send size={18} />
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Home;
