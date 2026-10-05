import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Sun, ArrowRight, ShieldCheck } from 'lucide-react';
import groomImg from '../assets/groom_family_welcome.jpg';
import brideImg from '../assets/cat_parents.jpg';

export default function WelcomeScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: approaching, 1: joined, 2: fadeout

  useEffect(() => {
    // Stage 0 -> Stage 1 (Families join together in the middle)
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 2400);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleEnter = () => {
    setStage(2);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-maroon-950 text-white flex flex-col items-center justify-between py-8 px-4 overflow-hidden select-none"
        >
          {/* Subtle Mandala Radial Background */}
          <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none"></div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-gold-500/10 pointer-events-none"
          ></motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-20 mt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Pandith Prajapati Milan</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-cream-50 tracking-tight">
              Two Respected Families, <br />
              <span className="gold-gradient-text italic font-normal">One Sacred Alliance</span>
            </h1>
          </motion.div>

          {/* Central Union Canvas */}
          <div className="relative w-full max-w-5xl my-auto h-[360px] sm:h-[420px] flex items-center justify-center">
            
            {/* GROOM'S FAMILY - Coming from Left */}
            <motion.div
              initial={{ x: "-120%", opacity: 0 }}
              animate={{
                x: stage === 1 ? "-20%" : "-60%",
                opacity: 1,
              }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-10 w-[240px] sm:w-[320px] bg-cream-50 rounded-3xl p-3 border-2 border-gold-400/80 shadow-2xl text-charcoal-900"
            >
              <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[260px]">
                <img
                  src={groomImg}
                  alt="Groom's Family"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 bg-maroon-900/90 px-2.5 py-0.5 rounded border border-gold-500/30">
                    Var Paksh
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-bold mt-1">Groom's Family</h4>
                </div>
              </div>
            </motion.div>

            {/* BRIDE'S FAMILY - Coming from Right */}
            <motion.div
              initial={{ x: "120%", opacity: 0 }}
              animate={{
                x: stage === 1 ? "20%" : "60%",
                opacity: 1,
              }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-10 w-[240px] sm:w-[320px] bg-cream-50 rounded-3xl p-3 border-2 border-gold-400/80 shadow-2xl text-charcoal-900"
            >
              <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[260px]">
                <img
                  src={brideImg}
                  alt="Bride's Family"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 bg-maroon-900/90 px-2.5 py-0.5 rounded border border-gold-500/30">
                    Kanya Paksh
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-bold mt-1">Bride's Family</h4>
                </div>
              </div>
            </motion.div>

            {/* CENTRAL SACRED EMBLEM / JOINING ANIMATION */}
            <AnimatePresence>
              {stage === 1 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-30 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-1 shadow-2xl animate-pulse">
                    <div className="w-full h-full rounded-full bg-maroon-950 border-2 border-gold-300 flex items-center justify-center shadow-inner">
                      <Heart className="w-12 h-12 text-gold-400 fill-gold-400 animate-bounce" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 px-6 py-2 rounded-full bg-maroon-900/95 border-2 border-gold-400 shadow-2xl text-gold-300 font-serif text-sm sm:text-base font-bold flex items-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>Families United In Harmony</span>
                    <Sparkles className="w-4 h-4 text-gold-400" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom Action Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative z-20 flex flex-col items-center gap-3 mb-4"
          >
            <button
              onClick={handleEnter}
              className="inline-flex items-center gap-3 px-8 py-3.5 text-sm sm:text-base font-semibold text-maroon-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full shadow-lg shadow-gold-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Pandith Prajapati Milan</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleEnter}
              className="text-xs text-cream-300 hover:text-gold-300 underline tracking-wider cursor-pointer"
            >
              Skip Intro & Continue
            </button>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
