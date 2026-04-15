import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); 
    }, 4500); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#050a14] flex items-center justify-center overflow-hidden"
        >
          {/* Enhanced Video Container for Firefox */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-[1.1] origin-top brightness-[0.8]"
              style={{ filter: 'grayscale(0.2) contrast(1.1)', backfaceVisibility: 'hidden' }}
            >
              <source src="/crictrounament.mp4" type="video/mp4" />
              {/* Fallback for browsers that don't support the specific codec if needed */}
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-[#050a14]/50 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-display font-black text-white text-center italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,140,0,0.5)]">
                OUTCASTS<br/>
                <span className="text-brand-orange text-3xl md:text-5xl not-italic uppercase tracking-[0.3em] ml-2">presents</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
