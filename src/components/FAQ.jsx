import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  FileText, 
  UserPlus, 
  ShieldCheck, 
  BadgeCheck, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import appFloralDecor from '../assets/app_floral_decor.png';

export default function FAQ() {
  const navigate = useNavigate();
  // Default active is "How do I create a profile?" (index 2) matching reference image
  const [activeIndex, setActiveIndex] = useState(2);

  const faqs = [
    {
      id: 'gothra-search',
      title: 'Can I search by Gothra or Sub Community?',
      bubbleText: 'Can I search by Gothra or Sub Community?',
      icon: Users,
      answer: 'Yes! Our advanced matrimonial filters let you browse verified profiles by Gothra, sub-community, nakshatra, astrological compatibility, education, and city with utmost precision.',
      pinPos: { x: 160, y: 275 },
      bubblePos: { left: '15px', top: '252px' },
      tail: 'right',
      buttonText: 'Search Profiles'
    },
    {
      id: 'what-is-ppmilan',
      title: 'What is PP Milan?',
      bubbleText: 'What is PP Milan?',
      icon: FileText,
      answer: 'PP Milan (Pandith Prajapati Milan) is a dedicated community-focused matrimonial platform created to help families and individuals find compatible life partners while honoring shared cultural values and traditions.',
      pinPos: { x: 220, y: 152 },
      bubblePos: { left: '80px', top: '92px' },
      tail: 'bottom-right',
      buttonText: 'Learn More'
    },
    {
      id: 'create-profile',
      title: 'How do I create a profile?',
      bubbleText: 'How do I create a profile?',
      icon: UserPlus,
      answer: 'To create a profile, click on the “Submit Bio-Data” button, fill in your details, upload the required documents, and submit. Our team will verify your profile.',
      pinPos: { x: 370, y: 92 },
      bubblePos: { left: '305px', top: '22px' },
      tail: 'bottom',
      buttonText: 'Learn More'
    },
    {
      id: 'secure-info',
      title: 'Is my information secure?',
      bubbleText: 'Is my information secure?',
      icon: ShieldCheck,
      answer: 'Absolutely. We uphold the strictest standards of family privacy and data protection. Your bio-data and contact details are securely protected and only shared with verified matches upon mutual interest.',
      pinPos: { x: 520, y: 152 },
      bubblePos: { left: '535px', top: '92px' },
      tail: 'bottom-left',
      buttonText: 'Privacy Policy'
    },
    {
      id: 'profile-verification',
      title: 'Are all profiles 100% verified?',
      bubbleText: 'Are profiles verified?',
      icon: BadgeCheck,
      answer: 'Yes! Every profile undergoes a strict multi-step verification where contact details, family background, and bio-data documents are manually verified to maintain a trusted community network.',
      pinPos: { x: 580, y: 275 },
      bubblePos: { left: '608px', top: '252px' },
      tail: 'left',
      buttonText: 'Verification Policy'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqs.length);
  };

  const activeFAQ = faqs[activeIndex];
  const ActiveIcon = activeFAQ.icon;

  return (
    <section id="faq" className="pt-4 sm:pt-6 pb-1 sm:pb-2 bg-[#FAF7F2] text-[#2D2626] relative overflow-hidden select-none">
      
      {/* Top-Left Corner Floral Bouquet */}
      <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 pointer-events-none select-none z-10">
        <img 
          src={appFloralDecor} 
          alt="Floral Decor" 
          className="w-52 sm:w-64 lg:w-[290px] object-contain drop-shadow-md"
        />
      </div>

      {/* Floating Rose Petals Layer cascading down from top-left */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
        {/* Petal 1: Flowing down near top-left flowers */}
        <motion.div 
          animate={{ y: [0, 24, 0], x: [0, 6, 0], rotate: [0, 22, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          className="absolute left-[7%] top-[20%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M5 10 C5 2, 22 2, 28 8 C30 16, 12 18, 5 10 Z" fill="#F43F5E" opacity="0.9" />
          </svg>
        </motion.div>

        {/* Petal 2: Drifting down from flowers toward center */}
        <motion.div 
          animate={{ y: [0, 26, 0], x: [0, 9, 0], rotate: [-10, 25, -10] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[15%] top-[28%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M4 12 C2 4, 18 2, 27 6 C29 14, 15 19, 4 12 Z" fill="#E11D48" opacity="0.88" />
          </svg>
        </motion.div>

        {/* Petal 3: Flowing down beside Left Column */}
        <motion.div 
          animate={{ y: [0, 28, 0], x: [0, 8, 0], rotate: [8, -20, 8] }}
          transition={{ repeat: Infinity, duration: 5.1, ease: "easeInOut", delay: 1 }}
          className="absolute left-[8%] top-[45%] w-8 h-5.5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M6 10 C5 2, 22 3, 26 9 C28 17, 14 18, 6 10 Z" fill="#F43F5E" opacity="0.9" />
          </svg>
        </motion.div>

        {/* Petal 4: Cascading down-right toward Central Arc */}
        <motion.div 
          animate={{ y: [0, 25, 0], x: [0, 10, 0], rotate: [0, 24, 0] }}
          transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.8 }}
          className="absolute left-[19%] top-[56%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M5 10 C5 2, 22 2, 28 8 C30 16, 12 18, 5 10 Z" fill="#FB7185" opacity="0.92" />
          </svg>
        </motion.div>

        {/* Petal 5: Flowing down to bottom-left */}
        <motion.div 
          animate={{ y: [0, 22, 0], x: [0, 7, 0], rotate: [-12, 16, -12] }}
          transition={{ repeat: Infinity, duration: 5.3, ease: "easeInOut", delay: 1.4 }}
          className="absolute left-[26%] top-[72%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M3 11 C2 3, 20 1, 28 7 C29 16, 12 18, 3 11 Z" fill="#F43F5E" opacity="0.88" />
          </svg>
        </motion.div>

        {/* Petal 6: In-between left node and circular card */}
        <motion.div 
          animate={{ y: [0, 18, 0], x: [0, 6, 0], rotate: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.4 }}
          className="absolute left-[36%] bottom-[14%] w-8 h-5.5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M4 12 C2 4, 18 2, 27 6 C29 14, 15 19, 4 12 Z" fill="#E11D48" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Petal 7: Directly below Central Circular Card */}
        <motion.div 
          animate={{ y: [0, 15, 0], x: [0, -4, 0], rotate: [-8, 12, -8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.8 }}
          className="absolute left-[48%] bottom-[4%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M3 11 C2 3, 20 1, 28 7 C29 16, 12 18, 3 11 Z" fill="#FB7185" opacity="0.9" />
          </svg>
        </motion.div>

        {/* Petal 8: Flowing out to lower-right */}
        <motion.div 
          animate={{ y: [0, 16, 0], x: [0, 5, 0], rotate: [8, -12, 8] }}
          transition={{ repeat: Infinity, duration: 4.9, ease: "easeInOut", delay: 1.2 }}
          className="absolute left-[62%] bottom-[15%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M5 10 C5 2, 22 2, 28 8 C30 16, 12 18, 5 10 Z" fill="#F43F5E" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Petal 9: Far right accent petal */}
        <motion.div 
          animate={{ y: [0, 16, 0], x: [0, -3, 0], rotate: [-6, 14, -6] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-[10%] bottom-[20%] w-7 h-5"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-xs">
            <path d="M3 11 C2 3, 20 1, 28 7 C29 16, 12 18, 3 11 Z" fill="#FB7185" opacity="0.9" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-2 items-center">
          
          {/* =========================================
              LEFT COLUMN: Intro & Badges (Compact)
             ========================================= */}
          <div className="lg:col-span-4 flex flex-col items-start text-left relative z-20">
            
            {/* Tag Pill: • FAQ */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 border border-[#E5D7D7] text-[11px] font-bold tracking-wider text-[#9F1239] shadow-2xs mb-3">
              <span className="w-1.5 h-1.5 -left-4 rounded-full bg-[#9F1239]"></span>
              <span>FAQ</span>
            </div>

            {/* Heart Badge with Question Mark */}
            <div className="relative mb-3.5">
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#FFE8ED] via-[#FFF1F4] to-white border-2 border-[#F6B6C4] p-1 flex items-center justify-center shadow-sm shadow-[#9F1239]/10">
                <div className="w-full h-full rounded-full border border-dashed border-[#E11D48]/50 flex items-center justify-center relative">
                  <svg className="w-6 h-6 text-[#9F1239]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="absolute font-serif text-sm font-bold text-[#9F1239] -mt-0.5">?</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#2A1D1D] leading-[1.18] mb-2.5">
              Frequently <br />
              <span className="text-[#9F1239]">Asked Questions</span>
            </h2>

            {/* Delicate Golden Heart Divider */}
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2.5">
              <span className="w-6 h-[1px] bg-[#D4AF37]/60"></span>
              <span className="text-xs leading-none">♡</span>
              <span className="w-6 h-[1px] bg-[#D4AF37]/60"></span>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-[#5A4E4D] leading-relaxed max-w-[260px] mb-4 sm:mb-6">
              Find answers to common questions about PP Milan.
            </p>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Compact Radial Arc & Central Circle Card
             ======================================================== */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center relative min-h-[390px] lg:min-h-[415px] overflow-visible">

            {/* DESKTOP & TABLET VIEW: Compact Radial Arc Visualizer */}
            <div className="w-full hidden md:flex items-center justify-center overflow-visible">
              <div className="relative w-[740px] h-[415px] shrink-0 scale-[0.85] lg:scale-[0.92] xl:scale-[0.98] origin-center transition-transform">
                
                {/* Golden Dashed Arc SVG connecting the 5 nodes */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                  viewBox="0 0 740 480"
                >
                  {/* Upper Dashed Golden Arc */}
                  <path
                    d="M 140,285 A 215,215 0 0,1 600,285"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1.3"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  />
                  
                  {/* Node connection anchors on arc */}
                  {faqs.map((faq, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <g key={faq.id}>
                        {isActive ? (
                          // Active node ring marker
                          <g>
                            <circle cx={faq.pinPos.x} cy={faq.pinPos.y + 22} r="4" fill="#9F1239" />
                            <circle cx={faq.pinPos.x} cy={faq.pinPos.y + 22} r="1.8" fill="white" />
                          </g>
                        ) : (
                          // Inactive node small dot
                          <circle cx={faq.pinPos.x} cy={faq.pinPos.y + 16} r="2.5" fill="#D4AF37" opacity="0.75" />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* 5 Interactive Nodes with Icons and Speech Bubbles */}
                {faqs.map((faq, idx) => {
                  const isActive = activeIndex === idx;
                  const IconComponent = faq.icon;

                  return (
                    <div key={faq.id} className="relative z-40">
                      {/* SPEECH BUBBLE */}
                      <div 
                        onClick={() => setActiveIndex(idx)}
                        style={{ 
                          left: faq.bubblePos.left, 
                          top: faq.bubblePos.top 
                        }}
                        className={`absolute z-40 cursor-pointer transition-all duration-300 ${
                          isActive ? 'scale-105' : 'hover:scale-102 opacity-95 hover:opacity-100'
                        }`}
                      >
                        <div className={`relative px-3 py-1.5 rounded-xl bg-white shadow-sm text-center max-w-[130px] border transition-colors ${
                          isActive 
                            ? 'border-[#FDA4AF] shadow-md shadow-[#9F1239]/12' 
                            : 'border-[#F1E8E2] hover:border-[#D4AF37]/50'
                        }`}>
                          <p className={`text-[11px] font-semibold leading-snug ${
                            isActive ? 'text-[#1E1B18]' : 'text-[#443838]'
                          }`}>
                            {faq.bubbleText}
                          </p>
                          
                          {/* Red Underline indicator for active speech bubble */}
                          {isActive && (
                            <div className="w-5 h-[2px] bg-[#9F1239] rounded-full mx-auto mt-1" />
                          )}

                          {/* Speech Bubble Arrow Tails */}
                          {faq.tail === 'bottom' && (
                            <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white drop-shadow-2xs" />
                          )}
                          {faq.tail === 'right' && (
                            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white drop-shadow-2xs" />
                          )}
                          {faq.tail === 'left' && (
                            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-white drop-shadow-2xs" />
                          )}
                          {faq.tail === 'bottom-right' && (
                            <div className="absolute right-3 -bottom-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white drop-shadow-2xs" />
                          )}
                          {faq.tail === 'bottom-left' && (
                            <div className="absolute left-3 -bottom-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white drop-shadow-2xs" />
                          )}
                        </div>
                      </div>

                      {/* PIN / NODE ICON */}
                      <button
                        onClick={() => setActiveIndex(idx)}
                        style={{ 
                          left: `${faq.pinPos.x}px`, 
                          top: `${faq.pinPos.y}px` 
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'w-11 h-11 bg-gradient-to-tr from-[#9F1239] via-[#BE123C] to-[#E11D48] text-white shadow-[0_0_24px_rgba(225,29,72,0.4)] ring-3 ring-[#FFE4E8] scale-110' 
                            : 'w-10 h-10 bg-[#FFF3F5] text-[#9F1239] border border-[#FBCFE8] hover:border-[#F43F5E] shadow-2xs hover:scale-105 hover:bg-white'
                        }`}
                      >
                        <IconComponent className={isActive ? "w-5 h-5 stroke-[2]" : "w-4 h-4 stroke-[1.8]"} />
                      </button>
                    </div>
                  );
                })}

                {/* =========================================
                    CENTRAL CIRCULAR CARD (Compact 320px)
                   ========================================= */}
                <div className="absolute left-[370px] top-[295px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative w-[310px] h-[310px] lg:w-[325px] lg:h-[325px] rounded-full bg-white shadow-[0_12px_40px_rgba(225,29,72,0.16)] ring-6 ring-[#FFF0F3]/80 border border-[#FEE2E2]/60 flex flex-col items-center justify-center p-6 text-center pointer-events-auto">
                    
                    {/* Left Navigation Arrow */}
                    <button
                      onClick={handlePrev}
                      aria-label="Previous question"
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-md border border-[#F3E8E2] text-[#9F1239] hover:bg-[#FFF5F7] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 z-40"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                      onClick={handleNext}
                      aria-label="Next question"
                      className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-md border border-[#F3E8E2] text-[#9F1239] hover:bg-[#FFF5F7] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 z-40"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {/* Dynamic Content with smooth transition */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFAQ.id}
                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center"
                      >
                        {/* Top Question Icon */}
                        <div className="text-[#9F1239] mb-1.5">
                          <ActiveIcon className="w-5 h-5 stroke-[1.8]" />
                        </div>

                        {/* Question Headline */}
                        <h3 className="font-serif font-bold text-base lg:text-[17px] text-[#1E1B18] leading-tight max-w-[230px] mb-1.5">
                          {activeFAQ.title}
                        </h3>

                        {/* Delicate Gold Heart Divider */}
                        <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-2">
                          <span className="w-4 h-[1px] bg-[#D4AF37]/60"></span>
                          <span className="text-[10px]">♡</span>
                          <span className="w-4 h-[1px] bg-[#D4AF37]/60"></span>
                        </div>

                        {/* Answer Paragraph */}
                        <p className="text-[11px] lg:text-[11.5px] text-[#554444] leading-relaxed max-w-[230px] mb-3.5">
                          {activeFAQ.answer}
                        </p>

                        {/* Learn More Button */}
                        <button 
                          onClick={() => navigate('/contact')}
                          className="bg-[#9F1239] hover:bg-[#881337] text-white text-[11px] lg:text-xs font-medium px-5 py-1.5 rounded-full shadow-md shadow-[#9F1239]/20 hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{activeFAQ.buttonText || 'Learn More'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center items-center gap-1.5 mt-3">
                    {faqs.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          activeIndex === i 
                            ? 'w-2 h-2 bg-[#9F1239]' 
                            : 'w-2 h-2 bg-[#FBCFE8] hover:bg-[#FDA4AF]'
                        }`}
                      />
                    ))}
                  </div>

                </div>

              </div>
            </div>

            {/* MOBILE & COMPACT VIEW: Responsive Card Stack (< 768px) */}
            <div className="w-full flex flex-col items-center md:hidden mt-2">
              
              {/* Quick Select Tabs for Mobile */}
              <div className="w-full flex gap-2 overflow-x-auto pb-2.5 mb-3 scrollbar-none justify-start px-2">
                {faqs.map((faq, idx) => {
                  const isActive = activeIndex === idx;
                  const Icon = faq.icon;
                  return (
                    <button
                      key={faq.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] whitespace-nowrap cursor-pointer transition-all shrink-0 ${
                        isActive 
                          ? 'bg-[#9F1239] text-white font-semibold shadow-xs' 
                          : 'bg-white text-[#443838] border border-[#E8DED8] hover:bg-[#FFF5F7]'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{faq.bubbleText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Central Circular Card */}
              <div className="relative w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] rounded-full bg-white shadow-[0_12px_35px_rgba(225,29,72,0.16)] ring-5 ring-[#FFF0F3] border border-[#FEE2E2] flex flex-col items-center justify-center p-5 text-center">
                
                {/* Mobile Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-[#F3E8E2] text-[#9F1239] flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                {/* Mobile Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-[#F3E8E2] text-[#9F1239] flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFAQ.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-[#9F1239] mb-1">
                      <ActiveIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>

                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1E1B18] leading-tight max-w-[210px] mb-1">
                      {activeFAQ.title}
                    </h3>

                    <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-1.5">
                      <span className="w-3 h-[1px] bg-[#D4AF37]/60"></span>
                      <span className="text-[9px]">♡</span>
                      <span className="w-3 h-[1px] bg-[#D4AF37]/60"></span>
                    </div>

                    <p className="text-[10.5px] sm:text-[11px] text-[#554444] leading-relaxed max-w-[210px] mb-3">
                      {activeFAQ.answer}
                    </p>

                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-[#9F1239] text-white text-[11px] font-medium px-4 py-1.5 rounded-full shadow-md shadow-[#9F1239]/20 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{activeFAQ.buttonText || 'Learn More'}</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Pagination Dots */}
              <div className="flex justify-center items-center gap-1.5 mt-3">
                {faqs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all rounded-full ${
                      activeIndex === i ? 'w-2 h-2 bg-[#9F1239]' : 'w-2 h-2 bg-[#FBCFE8]'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
