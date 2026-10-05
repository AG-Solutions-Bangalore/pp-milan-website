import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Sun, ArrowRight, ShieldCheck } from 'lucide-react';


export default function PPMilanIntro({ onComplete }) {
  // Current active scene (1 to 6)
  const [scene, setScene] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Scene 1 -> Scene 2 (Move toward center): at 2s
    const t1 = setTimeout(() => setScene(2), 2000);

    // Scene 2 -> Scene 3 (Couple Meets & Glow): at 5s
    const t2 = setTimeout(() => setScene(3), 5000);

    // Scene 3 -> Scene 4 (PP Milan Logo Reveal): at 7.5s
    const t3 = setTimeout(() => setScene(4), 7500);

    // Scene 4 -> Scene 5 (Hold Logo): at 9s
    const t4 = setTimeout(() => setScene(5), 9000);

    // Scene 5 -> Scene 6 (Smooth dissolve & Complete): at 11s
    const t5 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 11200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-[#FAF7F2] text-charcoal-900 flex flex-col items-center justify-between overflow-hidden select-none font-sans"
        >
          {/* BACKGROUND LAYERS */}
          {/* Subtle Ivory/Cream + Maroon/Rose Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] pointer-events-none"></div>

          {/* Deep Maroon & Pink Accent Glow Blurs */}
          <motion.div
            animate={{
              scale: scene >= 3 ? [1, 1.2, 1] : [1, 1.1, 1],
              opacity: scene >= 4 ? 0.3 : 0.15,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-maroon-800/20 rounded-full blur-3xl pointer-events-none"
          ></motion.div>

          <motion.div
            animate={{
              scale: scene >= 3 ? [1.1, 1.3, 1.1] : [1, 1.1, 1],
              opacity: scene >= 4 ? 0.4 : 0.2,
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] bg-gold-400/20 rounded-full blur-3xl pointer-events-none"
          ></motion.div>

          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-pink-700/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Subtle Indian Traditional Mandala Vector Background */}
          <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none"></div>

          {/* FLOATING PETALS & GOLDEN PARTICLES (CS & GPU accelerated) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  y: -40,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  opacity: 0,
                  rotate: 0,
                }}
                animate={{
                  y: [ -40, 900 ],
                  x: [
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) + (i % 2 === 0 ? 60 : -60),
                  ],
                  opacity: [0, 0.8, 0.8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 7 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "linear",
                }}
                className={`absolute ${i % 3 === 0 ? 'w-3 h-3 bg-pink-400/60 rounded-full blur-[1px]' : 'w-2 h-2 bg-gold-400/80 rounded-full blur-[0.5px]'}`}
              ></motion.div>
            ))}
          </div>

          {/* TOP NAVIGATION / SKIP BUTTON */}
          <div className="w-full max-w-7xl px-6 pt-6 flex items-center justify-between relative z-50">
            {/* Top Brand Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-maroon-900 text-gold-300 flex items-center justify-center font-bold text-xs shadow-md">
                PPM
              </div>
              <span className="font-serif text-xs sm:text-sm font-semibold text-maroon-900 tracking-wider">
                Pandith Prajapati Milan
              </span>
            </motion.div>

            {/* Skip Intro Button */}
            <button
              onClick={handleSkip}
              className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gold-400/40 text-xs font-semibold text-maroon-900 hover:bg-maroon-900 hover:text-gold-300 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MAIN CINEMATIC ANIMATION STAGE CONTAINER */}
          <div className="relative w-full max-w-6xl h-[460px] sm:h-[540px] my-auto flex items-center justify-center px-4">
            
            {/* SCENE 1 & 2: DUAL FAMILY GROUPS & COUPLE CONVERGENCE */}
            <div className="relative w-full h-full flex items-center justify-center">

              {/* GROOM'S SIDE (LEFT) */}
              <motion.div
                initial={{ x: "-100%", opacity: 0, scale: 0.9 }}
                animate={{
                  x: scene >= 3 ? (typeof window !== 'undefined' && window.innerWidth < 640 ? "-15%" : "-30%") : (scene >= 2 ? "-40%" : "-80%"),
                  opacity: scene >= 4 ? 0.2 : 1,
                  scale: scene >= 3 ? 1.05 : (scene >= 2 ? 1 : 0.95),
                }}
                transition={{
                  duration: 2.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute z-10 flex flex-col items-center"
              >
                {/* Family Group Layer (Behind Groom) */}
                <motion.div
                  animate={{
                    y: scene >= 2 ? [0, -6, 0] : 0,
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[180px] sm:w-[260px] rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl bg-white p-1.5 transform -rotate-2"
                >
                  <img
                    src={groomFamily}
                    alt="Groom Family Group"
                    className="w-full h-[140px] sm:h-[200px] object-cover object-top rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent rounded-xl"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold-300 bg-maroon-950/80 px-2 py-0.5 rounded border border-gold-500/30">
                      Groom's Family
                    </span>
                  </div>
                </motion.div>

                {/* Standalone Groom Figure (Foreground Parallax) */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{
                    y: scene >= 3 ? 0 : [0, -5, 0],
                    scale: scene >= 3 ? 1.1 : 1,
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[110px] sm:w-[150px] -mt-16 sm:-mt-24 z-20 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-2xl bg-white p-1 shadow-maroon-900/20"
                >
                  <img
                    src={groomStandalone}
                    alt="Groom Candidate"
                    className="w-full h-[150px] sm:h-[210px] object-cover object-top rounded-xl"
                  />
                </motion.div>
              </motion.div>

              {/* BRIDE'S SIDE (RIGHT) */}
              <motion.div
                initial={{ x: "100%", opacity: 0, scale: 0.9 }}
                animate={{
                  x: scene >= 3 ? (typeof window !== 'undefined' && window.innerWidth < 640 ? "15%" : "30%") : (scene >= 2 ? "40%" : "80%"),
                  opacity: scene >= 4 ? 0.2 : 1,
                  scale: scene >= 3 ? 1.05 : (scene >= 2 ? 1 : 0.95),
                }}
                transition={{
                  duration: 2.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute z-10 flex flex-col items-center"
              >
                {/* Family Group Layer (Behind Bride) */}
                <motion.div
                  animate={{
                    y: scene >= 2 ? [0, -6, 0] : 0,
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative w-[180px] sm:w-[260px] rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl bg-white p-1.5 transform rotate-2"
                >
                  <img
                    src={brideFamily}
                    alt="Bride Family Group"
                    className="w-full h-[140px] sm:h-[200px] object-cover object-top rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent rounded-xl"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold-300 bg-maroon-950/80 px-2 py-0.5 rounded border border-gold-500/30">
                      Bride's Family
                    </span>
                  </div>
                </motion.div>

                {/* Standalone Bride Figure (Foreground Parallax) */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{
                    y: scene >= 3 ? 0 : [0, -5, 0],
                    scale: scene >= 3 ? 1.1 : 1,
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="w-[110px] sm:w-[150px] -mt-16 sm:-mt-24 z-20 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-2xl bg-white p-1 shadow-maroon-900/20"
                >
                  <img
                    src={brideStandalone}
                    alt="Bride Candidate"
                    className="w-full h-[150px] sm:h-[210px] object-cover object-top rounded-xl"
                  />
                </motion.div>
              </motion.div>

              {/* SCENE 3: CENTRAL HEARTS & SACRED MATRIMONY LIGHT BEAM */}
              <AnimatePresence>
                {scene >= 3 && scene < 4 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 14 }}
                    className="absolute z-30 flex flex-col items-center justify-center text-center"
                  >
                    {/* Glowing Heart Ring */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-1 shadow-2xl animate-pulse">
                      <div className="w-full h-full rounded-full bg-maroon-950 border-2 border-gold-300 flex items-center justify-center shadow-inner">
                        <Heart className="w-10 h-10 sm:w-14 sm:h-14 text-gold-400 fill-gold-400 animate-bounce" />
                      </div>
                    </div>

                    {/* Scene 3 Tagline */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 px-6 py-2 rounded-full bg-maroon-950/95 border-2 border-gold-400 shadow-2xl text-gold-300 font-serif text-xs sm:text-base font-bold whitespace-nowrap"
                    >
                      "Two Families. Two Hearts. One Beautiful Beginning."
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SCENE 4 & 5: PP MILAN LOGO REVEAL & HOLD */}
              <AnimatePresence>
                {scene >= 4 && (
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-40 flex flex-col items-center text-center p-8 rounded-3xl bg-maroon-950/95 backdrop-blur-xl border-2 border-gold-400 shadow-2xl max-w-lg w-full"
                  >
                    {/* Golden Brand Seal Icon */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-1 shadow-2xl mb-4"
                    >
                      <div className="w-full h-full rounded-full bg-maroon-900 flex items-center justify-center border border-gold-300">
                        <Heart className="w-10 h-10 text-gold-400 fill-gold-400/30" />
                      </div>
                    </motion.div>

                    {/* Logo Title */}
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white flex items-center gap-2">
                      PPM <span className="text-gold-400 text-xs font-sans tracking-widest uppercase bg-gold-500/20 px-2.5 py-0.5 rounded border border-gold-500/30 font-medium">Official</span>
                    </h2>

                    <p className="font-serif text-lg sm:text-xl text-gold-300 font-bold mt-1">
                      Pandith Prajapati Milan
                    </p>

                    {/* Tagline */}
                    <p className="text-sm font-serif italic text-cream-200 mt-2 border-t border-maroon-800 pt-3 w-full">
                      “Bringing Families Together”
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-gold-400">
                      <Sparkles className="w-4 h-4 text-gold-400" />
                      <span>Trusted Prajapati Community Matrimony</span>
                      <Sparkles className="w-4 h-4 text-gold-400" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* BOTTOM STEP PROGRESS INDICATOR */}
          <div className="w-full max-w-md px-6 pb-6 text-center relative z-50">
            <div className="w-full h-1 bg-cream-300/40 rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${(scene / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600"
              ></motion.div>
            </div>
            <p className="text-[11px] text-maroon-900 font-serif italic font-medium">
              {scene === 1 && "Scene 1: Welcoming Var Paksh & Kanya Paksh..."}
              {scene === 2 && "Scene 2: Families Moving Together..."}
              {scene === 3 && "Scene 3: Two Families & Two Hearts Unite..."}
              {scene >= 4 && "Scene 4: PP Milan — Bringing Families Together"}
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
