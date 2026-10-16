import React from 'react';

// ============================================================================
// 1. ULTRA-DELICATE INDIAN BRIDAL HENNA / PAISLEY CORNER FILIGREE
// (Replaces the harsh geometric wheel with soft, traditional Indian lace watermark)
// ============================================================================
const HennaCornerFiligree = ({ className = "" }) => (
  <svg
    viewBox="0 0 300 300"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fine concentric watermark rings */}
    <circle cx="20" cy="20" r="260" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.4" />
    <circle cx="20" cy="20" r="235" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <circle cx="20" cy="20" r="195" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <circle cx="20" cy="20" r="160" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.4" />
    <circle cx="20" cy="20" r="120" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
    <circle cx="20" cy="20" r="80" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />

    {/* Delicate Floral Scallop Arcs */}
    <path
      d="M20,180 C80,170 140,140 180,80 C200,50 200,20 200,20"
      stroke="currentColor"
      strokeWidth="0.9"
      opacity="0.6"
    />
    <path
      d="M20,220 C100,210 170,170 215,100 C240,60 240,20 240,20"
      stroke="currentColor"
      strokeWidth="0.9"
      opacity="0.6"
    />

    {/* Fine Paisley & Lotus Petal Flourishes */}
    {[0, 18, 36, 54, 72, 90].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 20 20)`}>
        <path
          d="M20 20 Q50 60 70 120 Q60 145 20 160"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <path
          d="M20 90 C35 105 45 125 20 145 C-5 125 5 105 20 90 Z"
          stroke="currentColor"
          strokeWidth="0.65"
          fill="currentColor"
          fillOpacity="0.03"
        />
      </g>
    ))}
  </svg>
);

// ============================================================================
// 2. ROMANTIC FLOATING ROSE PETALS (Natural botanical gradient petals)
// ============================================================================
const RosePetal = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 32 32"
    className={`absolute pointer-events-none drop-shadow-xs select-none ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB7185" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#E11D48" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#9F1239" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path
      d="M16 2 C9 6 3 14 6 22 C9 29 20 31 26 24 C31 18 26 8 16 2 Z"
      fill="url(#roseGrad)"
    />
  </svg>
);

// ============================================================================
// 3. GOLDEN LOTUS FLOWER DIVIDER
// ============================================================================
const GoldenLotusDivider = () => (
  <div className="flex items-center justify-center gap-3.5 mt-3 text-[#C5A059]">
    <span className="w-14 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    <svg
      viewBox="0 0 32 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-4.5 text-[#C5A059]"
    >
      <path d="M16 2 C13 6 12 10 16 16 C20 10 19 6 16 2 Z" fill="#C5A059" fillOpacity="0.2" />
      <path d="M14 7 C10 8 7 11 9 15 C13 15 15 13 15 11" />
      <path d="M18 7 C22 8 25 11 23 15 C19 15 17 13 17 11" />
      <path d="M5 16 C11 18 21 18 27 16" strokeWidth="0.9" />
    </svg>
    <span className="w-14 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
  </div>
);

// ============================================================================
// 4. MATRIMONIAL ICONS (Matching reference mockup)
// ============================================================================
const PersonalizedMatchmakingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    {/* Heart Outline with Couple Silhouette */}
    <path d="M12 21 C12 21 3.5 15 3.5 8.5 C3.5 5 6 3 9 3 C10.8 3 12 4.2 12 4.2 C12 4.2 13.2 3 15 3 C18 3 20.5 5 20.5 8.5 C20.5 15 12 21 12 21 Z" />
    <circle cx="9.5" cy="9.5" r="1.5" />
    <circle cx="14.5" cy="9.5" r="1.5" />
    <path d="M7.5 14 C8 12.8 8.8 12.2 9.5 12.2 C10.2 12.2 11 12.8 11.5 14" />
    <path d="M12.5 14 C13 12.8 13.8 12.2 14.5 12.2 C15.2 12.2 16 12.8 16.5 14" />
  </svg>
);

const BackgroundChecksIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.08" />
    <path d="m9 12 2 2 4-4" strokeWidth="2.2" />
  </svg>
);

const GothraFilterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    {/* Sacred Kalash with Coconut and Mango Leaves */}
    <path d="M12 2 C10 4 10 6 12 8 C14 6 14 4 12 2 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M8 5 C9.5 6 10.5 7 12 8" />
    <path d="M16 5 C14.5 6 13.5 7 12 8" />
    <ellipse cx="12" cy="8.5" rx="4" ry="1.2" />
    <path d="M8 9 C6 11.5 6 15 8 17 C10 18.5 14 18.5 16 17 C18 15 18 11.5 16 9" fill="currentColor" fillOpacity="0.08" />
    <path d="M9 18.5 L15 18.5" strokeWidth="1.5" />
  </svg>
);

// ============================================================================
// MAIN FEATURES SECTION
// ============================================================================
export default function Features() {
  const features = [
    {
      title: "Personalized Matchmaking",
      desc: "Find matches based on your values and family background.",
      icon: PersonalizedMatchmakingIcon,
    },
    {
      title: "Verified profiles",
      desc: "Verified profiles for a safe and genuine experience.",
      icon: BackgroundChecksIcon,
    },
    {
      title: "Gothra Filter",
      desc: "Search with Gothra preferences to find compatible matches.",
      icon: GothraFilterIcon,
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#FAF6F0] pt-7 sm:pt-9 pb-12 sm:pb-16 text-[#2D2626] select-none"
    >
      {/* ------------------------------------------------------------------- */}
      {/* DELICATE WATERMARK CORNER MOTIFS (Soft, subtle Henna filigree)      */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-64 sm:w-80 h-64 sm:h-80 text-[#C5A059] opacity-20 pointer-events-none">
        <HennaCornerFiligree className="w-full h-full" />
      </div>

      <div className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-64 sm:w-80 h-64 sm:h-80 text-[#C5A059] opacity-20 pointer-events-none rotate-180">
        <HennaCornerFiligree className="w-full h-full" />
      </div>

      {/* Gentle curved accent line sweeping across */}
      <div className="absolute inset-0 pointer-events-none text-[#C5A059]/25">
        <svg viewBox="0 0 1440 360" preserveAspectRatio="none" fill="none" className="w-full h-full">
          <path d="M-40,80 Q320,230 640,180 T1320,190 T1480,80" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Subtle Romantic Rose Petals */}
      <RosePetal className="top-8 left-14 w-5 h-5 rotate-[-20deg] opacity-75 hidden sm:block" />
      <RosePetal className="bottom-10 left-12 w-4.5 h-4.5 rotate-[35deg] opacity-70" />
      <RosePetal className="top-10 right-16 w-5 h-5 rotate-[25deg] opacity-80 hidden sm:block" />
      <RosePetal className="bottom-8 right-14 w-5 h-5 rotate-[-35deg] opacity-75" />

      {/* ------------------------------------------------------------------- */}
      {/* SECTION CONTENT                                                     */}
      {/* ------------------------------------------------------------------- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Tag Pill: ❖ FEATURES ❖ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1EB] border border-[#F5D8CA] text-[#9F1239] text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xs mb-2">
            <span className="text-[#C5A059] text-xs">❖</span>
            <span>FEATURES</span>
            <span className="text-[#C5A059] text-xs">❖</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E1918] tracking-tight leading-tight">
            Why Choose <span className="text-[#9F1239]">PP Milan?</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-[#665654] font-normal leading-relaxed max-w-lg mx-auto">
            Our platform is designed with features that make your search simple, safe and effective.
          </p>

          {/* Lotus Divider */}
          <GoldenLotusDivider />
        </div>

        {/* 3 Horizontal Cards (Matching Reference Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#F2E4DB] shadow-[0_4px_22px_rgba(160,90,70,0.05)] hover:shadow-[0_12px_30px_rgba(160,90,70,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 sm:gap-5 overflow-hidden"
              >
                {/* Subtle Henna Watermark in Bottom-Right Corner of Each Card */}
                <div className="absolute -bottom-7 -right-7 w-24 h-24 text-[#C5A059] opacity-15 pointer-events-none group-hover:rotate-12 transition-transform duration-500">
                  <HennaCornerFiligree className="w-full h-full" />
                </div>

                {/* Circular Peach/Blush Icon Badge */}
                <div className="relative z-10 w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#FFF1EB] border border-[#F8DDD2] text-[#9F1239] flex items-center justify-center shrink-0 group-hover:bg-[#9F1239] group-hover:text-white group-hover:border-[#9F1239] group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  <Icon />
                </div>

                {/* Card Text Content */}
                <div className="relative z-10 text-left min-w-0 flex-1">
                  <h3 className="font-serif font-bold text-base sm:text-[17px] text-[#8B1538] leading-snug mb-1 group-hover:text-[#9F1239] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[12.5px] text-[#6B5A58] leading-relaxed font-normal">
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
