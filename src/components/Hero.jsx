import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Users, ArrowRight } from 'lucide-react';
import heroCoupleImg from '../assets/mockup_hero_couple.png';
import floralGarlandImg from '../assets/floral_garland.jpg';

export default function Hero({ onReplayWelcome }) {
  const scrollToCategory = () => {
    const el = document.getElementById('category');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-14 sm:pt-2 pb-10 lg:pt-28 lg:pb-12 bg-[#FFFDF9] text-[#2D2626] overflow-hidden">
      
      {/* Subtle Palace & Floral Watermark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F2] via-[#FAF6F0] to-[#FAF7F2] pointer-events-none"></div>
      
      {/* Floral Garland Centered in the Hero Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[750px] max-w-[95%] pointer-events-none z-0 opacity-25 flex justify-center">
        <img
          src={floralGarlandImg}
          alt="Festive Floral Garland"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#F5E6B1]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#F0C7CF]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Bio-Data CTAs & Trust Badges */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-3.5">
            
            {/* Tag Pill: PANDITH PRAJAPATI MILAN */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9F1239]"
            >
              <span className="w-2 h-2 rounded-full bg-[#9F1239] animate-pulse"></span>
              <span>PANDITH PRAJAPATI MILAN</span>
            </motion.div>

            {/* 2. Animated Headline: Connecting Hearts, Building Families */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-[#2A1D1D] leading-[1.15] tracking-tight">
              {/* Line 1: Connecting Hearts with fade-up and gentle float */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                Connecting Hearts,
              </motion.span>

              {/* Line 2: Building Families with glowing crimson gradient & heartbeat animation */}
              <motion.span
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
                className="relative inline-flex items-center text-[#9F1239] mt-1"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F1239] via-[#C03E5C] to-[#881337]">
                  Building Families
                </span>

                {/* Pulsing Animated Heartbeat Icon */}
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1, 1.3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                    repeatDelay: 0.8
                  }}
                  className="inline-block ml-2 text-2xl sm:text-3xl text-[#E11D48] select-none"
                  aria-hidden="true"
                >
                  ❤️
                </motion.span>
              </motion.span>
            </h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs sm:text-sm text-[#574B4B] font-normal leading-relaxed max-w-xl"
            >
              A trusted matrimonial platform for the Prajapati / Pandit community, helping you find a compatible life partner with shared values and traditions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto"
            >
              {/* Submit Your Bio-Data Pill */}
              <Link
                to="/registration"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#9F1239] hover:bg-[#881337] rounded-full shadow-md shadow-[#9F1239]/20 hover:shadow-lg hover:shadow-[#9F1239]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Submit Your Bio-Data</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Find Your Match Pill */}
              <button
                onClick={scrollToCategory}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#9F1239] bg-white border border-[#9F1239] hover:bg-[#FFF5F7] rounded-full shadow-xs hover:shadow transition-all duration-300 cursor-pointer group"
              >
                <span>Find Your Match</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Highlights Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#F0E4D3] w-full"
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#4A3D3D]">
                <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Verified Profiles</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#4A3D3D]">
                <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <span>Privacy Protected</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#4A3D3D]">
                <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span>Community Focused</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Wedding Couple Visual & Handwritten Note */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Main Couple Photo Card Wrapper */}
            <div className="relative w-full max-w-[390px] sm:max-w-[410px]">
              
              {/* Couple Photo Card */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-[#E5C365]/30 via-white to-[#F0C7CF]/40 shadow-xl shadow-[#9F1239]/10">
                <div className="relative rounded-[22px] overflow-hidden border border-[#D4AF37]/30 shadow-inner group h-[340px] sm:h-[370px] lg:h-[380px]">
                  <img
                    src={heroCoupleImg}
                    alt="Pandith Prajapati Milan Wedding Couple"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Handwritten Note positioned to the RIGHT of the couple, clearing their faces */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -10, scale: 0.9, rotate: -14 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -6 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute top-5 sm:top-7 left-[75%] sm:left-[75%] lg:left-[66%] z-20 pointer-events-none select-none font-script text-xl sm:text-2xl lg:text-[25px] text-[#9F1239] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)]"
              >
                <motion.div
                  animate={{ y: [0, -5, 0], rotate: [-6, -4, -6] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                  className="flex flex-col items-start leading-tight whitespace-nowrap"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Same Traditions,
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-1.5"
                  >
                    Stronger Together
                    <motion.span
                      animate={{
                        scale: [1, 1.28, 1, 1.28, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.3,
                        ease: "easeInOut",
                        repeatDelay: 0.6
                      }}
                      className="inline-block ml-1 text-xl sm:text-2xl text-[#E11D48] select-none"
                      aria-hidden="true"
                    >
                      ❤️
                    </motion.span>
                  </motion.span>
                </motion.div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
