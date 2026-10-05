import React from 'react';
import { motion } from 'framer-motion';
import festiveRingsImg from '../assets/features_rings.png';

const PersonalizedHeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 sm:w-8 sm:h-8 transition-colors">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 11.5c-1 1.2-2 1.2-3 0" />
    <path d="M15 11.5c-1 1.2-2 1.2-3 0" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 sm:w-8 sm:h-8 transition-colors">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LotusFlowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 sm:w-8 sm:h-8 transition-colors">
    <path d="M12 21c-4-4-7-8-7-13a7 7 0 0 1 14 0c0 5-3 9-7 13z" />
    <path d="M12 21c-2-3-4-6-4-10a4 4 0 0 1 8 0c0 4-2 7-4 10z" />
    <path d="M5 14c-2 0-3-1-3-3 0-3 3-5 5-5" />
    <path d="M19 14c2 0 3-1 3-3 0-3-3-5-5-5" />
  </svg>
);

export default function Features() {
  const features = [
    {
      title: "Personalized Matchmaking",
      desc: "Find matches based on your preferences, values and family background.",
      icon: PersonalizedHeartIcon
    },
    {
      title: "Thorough Background Checks",
      desc: "Verified profiles and background checks for a safe and genuine experience.",
      icon: ShieldCheckIcon
    },
    {
      title: "Gothra Filter",
      desc: "Search with Gothra preferences to find compatible matches.",
      icon: LotusFlowerIcon
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-14 lg:py-16 bg-[#FAF7F2] text-[#2D2626] relative overflow-hidden select-none">
      
      {/* Decorative Gold Mandala on Left Edge with smooth circular rotation */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-52 h-52 sm:w-60 sm:h-60 opacity-30 pointer-events-none text-[#D4AF37] z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="w-full h-full flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
            <circle cx="50" cy="50" r="46" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="36" />
            <circle cx="50" cy="50" r="24" />
            <circle cx="50" cy="50" r="10" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <path
                key={deg}
                d="M50 14 C44 28 44 34 50 50 C56 34 56 28 50 14 Z"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Celebratory Rings & Red Silk in Bottom-Right Corner */}
      <div className="hidden sm:block absolute right-0 bottom-0 pointer-events-none select-none z-0">
        <img
          src={festiveRingsImg}
          alt="Festive Rings & Red Silk"
          className="h-[240px] sm:h-[290px] lg:h-[360px] xl:h-[410px] w-auto max-h-full object-contain object-bottom-right filter drop-shadow-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left max-w-xl">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEEE3] text-[#9F1239] text-xs font-bold tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F1239]"></span>
            <span>FEATURES</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D1D] tracking-tight">
            Why Choose <span className="text-[#9F1239]">PP Milan?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#665555] mt-1 font-normal max-w-lg leading-relaxed">
            Our platform is designed with features that make your search simple, safe and effective.
          </p>
        </div>

        {/* 3 Horizontal Feature Cards Grid - reduced width for compact & refined look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-[#F0E4D8] shadow-xs hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center gap-3.5 group"
              >
                {/* Icon in Circular Light Pink / Crimson Badge */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FDF0ED] border border-[#FADCD5] text-[#9F1239] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#9F1239] group-hover:text-white group-hover:border-[#9F1239] group-hover:shadow-md group-hover:shadow-[#9F1239]/20 transition-all duration-300">
                  <Icon />
                </div>

                {/* Content */}
                <div className="text-left flex flex-col justify-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#9F1239] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6B5C5C] leading-snug mt-1 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
