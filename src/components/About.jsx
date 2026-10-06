import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import mandapImg from '../assets/mockup_mandap.png';

export default function About() {
  return (
    <section id="about" className="relative py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] text-[#2D2626] overflow-hidden">
                  
      {/* Golden Scalloped Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-5 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#FFFDF9] preserve-3d" preserveAspectRatio="none">
          <path d="M0,0 C150,20 350,20 500,0 C650,20 850,20 1000,0 C1100,15 1180,18 1200,0 L1200,24 L0,24 Z" fill="#FAF7F2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Full View Arched Mandap Palace Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-t-[120px] rounded-b-2xl p-2 bg-gradient-to-b from-[#E5C365] via-[#D4AF37]/50 to-[#C5A059] shadow-xl">
              <div className="relative rounded-t-[115px] rounded-b-xl overflow-hidden border-2 border-white shadow-inner bg-cream-100">
                <img
                  src={mandapImg}
                  alt="Royal Wedding Mandap - Pandith Prajapati Milan"
                  className="w-full h-auto object-contain object-center transform hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content + Stat Badges Below Button */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9F1239]">
              <span className="w-2 h-2 rounded-full bg-[#9F1239]"></span>
              <span>ABOUT US</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2A1D1D] leading-snug">
              A Trusted Matrimonial Service for Our Community
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#5C4D4D] font-normal leading-relaxed">
              PP Milan (Pandith Prajapati Milan) is a dedicated matrimonial platform for the Prajapati / Pandit community, created to help individuals and families find suitable life partners while respecting traditional values, preferences and cultural beliefs.
            </p>

            {/* CTA Button */}
            {/* <div className="pt-1">
              <Link
                to="/registration"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#9F1239] hover:bg-[#881337] rounded-full shadow-md shadow-[#9F1239]/20 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div> */}

            {/* 3 Stat Badges Cards Row Below Button */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#EFE5D8] shadow-xs flex items-center gap-3 hover:shadow-sm hover:border-[#D4AF37]/50 transition-all">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#2A1D1D] leading-tight">500+</h3>
                  <p className="text-[11px] text-[#6B5C5C] font-medium leading-tight mt-0.5">Best Matches</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#EFE5D8] shadow-xs flex items-center gap-3 hover:shadow-sm hover:border-[#D4AF37]/50 transition-all">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#2A1D1D] leading-tight">100%</h3>
                  <p className="text-[11px] text-[#6B5C5C] font-medium leading-tight mt-0.5">Privacy Protected</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#EFE5D8] shadow-xs flex items-center gap-3 hover:shadow-sm hover:border-[#D4AF37]/50 transition-all">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#2A1D1D] leading-tight">1000+</h3>
                  <p className="text-[11px] text-[#6B5C5C] font-medium leading-tight mt-0.5">Successful Profiles</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
