import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import SplashScreen from './SplashScreen';

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen flex flex-col pb-24 relative overflow-hidden bg-[#050a14]">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Optimized Video Background Layer for Firefox */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50 shadow-inner scale-[1.12] origin-top brightness-[0.7]"
        >
          <source src="/crictrounament.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Stadium/Poster Background Elements (Overlay) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {/* Stadium Floodlights Effect */}
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[150%] max-w-4xl h-[60%] bg-gradient-to-b from-white/10 via-brand-blue/5 to-transparent blur-[60px]"></div>
        
        {/* Intense Corner glows with Current Gradients */}
        <div className="absolute -top-[5%] -left-[10%] w-[50%] h-[40%] bg-brand-orange/30 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] bg-brand-blue/30 blur-[100px] rounded-full mix-blend-screen opacity-70 animate-pulse-slow [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-brand-orange/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow [animation-delay:1s]"></div>

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050a14] via-transparent to-[#050a14]/60 backdrop-blur-[1px]"></div>

        {/* Pitch Subtle Grid texture overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-green-900/10 via-[#050a14]/70 to-transparent" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.01) 40px)'}}></div>
      </div>

      <main className="flex-grow flex flex-col z-0">
        <Outlet />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Layout;
