import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cake, 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Search, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

import groomImg from '../assets/cat_groom.png';
import brideImg from '../assets/cat_bride.png';
import widowImg from '../assets/Widow.webp';
import divorceImg from '../assets/Divorce.webp';

export default function Category() {
  const navigate = useNavigate();
  const { openModal } = useModal();

  // State for Looking For selection (no default selection)
  const [lookingFor, setLookingFor] = useState(null);

  const lookingForOptions = [
    { id: 'Groom', label: 'Groom', image: groomImg },
    { id: 'Bride', label: 'Bride', image: brideImg },
    { id: 'Widow', label: 'Widow', image: widowImg },
    { id: 'Divorcee', label: 'Divorcee', image: divorceImg }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    openModal({
      title: lookingFor ? `${lookingFor} Profiles Directory` : "Community Profiles Directory",
      tag: "Community Matches",
      iconType: "sparkles",
      content: lookingFor
        ? `Browse verified ${lookingFor} profiles across the Prajapati / Pandit community. You can explore available profiles or register your bio-data to connect directly with families.`
        : `Browse verified profiles across the Prajapati / Pandit community. You can explore available profiles or register your bio-data to connect directly with families.`,
      buttonText: "Register / View Matches",
      actionPath: "/registration",
      onAction: () => {
        navigate('/registration');
      }
    });
  };

  return (
    <section id="category" className="pt-10 sm:pt-14 pb-6 sm:pb-7 bg-[#FFFDF9] text-[#2D2626] relative overflow-hidden border-b border-[#EFE5DC]">
      
      {/* Subtle Background Ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6B1]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF0F3]/50 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Corner Floral Watermark (Bottom Left) */}
      <div className="absolute -bottom-6 -left-6 w-48 sm:w-64 h-48 sm:h-64 opacity-25 pointer-events-none text-[#C5A059]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <path d="M10,190 C40,150 60,110 50,70 C40,30 20,20 10,10" />
          <path d="M50,70 C80,60 110,80 130,110 C150,140 170,170 190,190" />
          <circle cx="50" cy="70" r="5" fill="#C5A059" opacity="0.4" />
          <circle cx="130" cy="110" r="4" fill="#C5A059" opacity="0.4" />
          <path d="M30,130 C45,120 60,125 65,135 C70,145 60,155 45,150 Z" />
          <path d="M85,85 C100,75 115,80 120,90 C125,100 115,110 100,105 Z" />
        </svg>
      </div>

      {/* Decorative Corner Floral Watermark (Top Right) */}
      <div className="absolute -top-6 -right-6 w-48 sm:w-64 h-48 sm:h-64 opacity-25 pointer-events-none text-[#C5A059] rotate-180">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <path d="M10,190 C40,150 60,110 50,70 C40,30 20,20 10,10" />
          <path d="M50,70 C80,60 110,80 130,110 C150,140 170,170 190,190" />
          <circle cx="50" cy="70" r="5" fill="#C5A059" opacity="0.4" />
          <circle cx="130" cy="110" r="4" fill="#C5A059" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          {/* Tag Pill: ❖ CATEGORY ❖ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1EB] border border-[#F5D8CA] text-[#9F1239] text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xs mb-2">
            <span className="text-[#C5A059] text-xs">❖</span>
            <span>CATEGORY</span>
            <span className="text-[#C5A059] text-xs">❖</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold text-[#2A1D1D]">
            Find Your Perfect Match
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5C5C] mt-1 font-normal max-w-xl">
            Explore profiles within the Prajapati / Pandit community based on your preferences.
          </p>
        </div>

        {/* Two-Part Container Grid matching the user's reference mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">

          {/* =========================================================
              PART 1: "Looking For" (Groom, Bride, Widow, Divorcee)
             ========================================================= */}
          <div className="bg-[#FFFDFB] rounded-2xl sm:rounded-3xl border border-[#F0E4DC] p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Header with Title and Gold Lotus Filament */}
              <div className="flex items-center gap-3 mb-4 border-b border-[#F4E9E2] pb-2.5">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#8B1D2C] flex items-center justify-center">
                    {/* Couple Heart Icon */}
                    <svg className="w-4 h-4 fill-current text-[#8B1D2C]" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#8B1D2C]">
                    Looking For
                  </h3>
                </div>

                {/* Ornamental Gold Divider with Lotus */}
                <div className="flex-1 flex items-center gap-2 pl-2">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                  {/* Gold Lotus Blossom */}
                  <svg className="w-5 h-5 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 4c-1.8 3.5-4 6.5-4 9.5a4 4 0 0 0 8 0c0-3-2.2-6-4-9.5z" />
                    <path d="M8 15c-2.5-1-4.5-3.5-4.5-5.5 3.5 0 6 2.5 7 5.5" />
                    <path d="M16 15c2.5-1 4.5-3.5 4.5-5.5-3.5 0-6 2.5-7 5.5" />
                    <path d="M6 18c3 1.2 6 1.8 9 1.8s6-.6 9-1.8" />
                  </svg>
                  <div className="h-[1px] w-4 bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
                </div>
              </div>

              {/* 4 Category Cards in a Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {lookingForOptions.map((opt) => {
                  const isSelected = lookingFor === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setLookingFor(prev => prev === opt.id ? null : opt.id)}
                      className={`group cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden flex flex-col ${
                        isSelected
                          ? 'border-[#8B1D2C] ring-2 ring-[#8B1D2C]/20 shadow-md bg-white'
                          : 'border-[#EAE0D8] bg-white hover:border-[#D4AF37] hover:shadow-sm'
                      }`}
                    >
                      {/* Image Thumbnail - Reduced Height */}
                      <div className="relative aspect-[4/3.8] w-full overflow-hidden bg-neutral-100">
                        <img
                          src={opt.image}
                          alt={opt.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Soft overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Text Label (No radio button) */}
                      <div className={`py-2 px-1 text-center transition-colors ${
                        isSelected ? 'bg-[#FFF5F7]' : 'bg-white group-hover:bg-[#FFFDFB]'
                      }`}>
                        <span
                          className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                            isSelected ? 'text-[#8B1D2C]' : 'text-[#3D3535] group-hover:text-[#8B1D2C]'
                          }`}
                        >
                          {opt.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================
              PART 2: "Search by Preferences" (Clean texts, no text field)
             ========================================================= */}
          <div className="bg-[#FFFDFB] rounded-2xl sm:rounded-3xl border border-[#F0E4DC] p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Header with Title and Gold Lotus Filament */}
              <div className="flex items-center gap-3 mb-4 border-b border-[#F4E9E2] pb-2.5">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#8B1D2C] flex items-center justify-center">
                    <SlidersHorizontal className="w-4 h-4 text-[#8B1D2C]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#8B1D2C]">
                    Search by Preferences
                  </h3>
                </div>

                {/* Ornamental Gold Divider with Lotus */}
                <div className="flex-1 flex items-center gap-2 pl-2">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                  {/* Gold Lotus Blossom */}
                  <svg className="w-5 h-5 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 4c-1.8 3.5-4 6.5-4 9.5a4 4 0 0 0 8 0c0-3-2.2-6-4-9.5z" />
                    <path d="M8 15c-2.5-1-4.5-3.5-4.5-5.5 3.5 0 6 2.5 7 5.5" />
                    <path d="M16 15c2.5-1 4.5-3.5 4.5-5.5-3.5 0-6 2.5-7 5.5" />
                    <path d="M6 18c3 1.2 6 1.8 9 1.8s6-.6 9-1.8" />
                  </svg>
                  <div className="h-[1px] w-4 bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
                </div>
              </div>

              {/* 2x2 Grid of Text Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                
                {/* 1. Age */}
                <div className="bg-white/90 rounded-xl p-2.5 sm:p-3 border border-[#EFE5DE] hover:border-[#D4AF37]/70 transition-all flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] font-bold text-[#8B1D2C] mb-1">
                    <Cake className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Age</span>
                  </div>
                  <p className="text-[11px] sm:text-[11.5px] text-[#6B5C5C] leading-snug">
                    Search compatible life partners matching your preferred life stage and astrological compatibility.
                  </p>
                </div>

                {/* 2. Professional */}
                <div className="bg-white/90 rounded-xl p-2.5 sm:p-3 border border-[#EFE5DE] hover:border-[#D4AF37]/70 transition-all flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] font-bold text-[#8B1D2C] mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Professional</span>
                  </div>
                  <p className="text-[11px] sm:text-[11.5px] text-[#6B5C5C] leading-snug">
                    Connect with qualified software engineers, healthcare professionals, civil servants, and entrepreneurs.
                  </p>
                </div>

                {/* 3. Location */}
                <div className="bg-white/90 rounded-xl p-2.5 sm:p-3 border border-[#EFE5DE] hover:border-[#D4AF37]/70 transition-all flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] font-bold text-[#8B1D2C] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Location</span>
                  </div>
                  <p className="text-[11px] sm:text-[11.5px] text-[#6B5C5C] leading-snug">
                    Discover verified community matches across Bengaluru, native towns in Karnataka, and pan-India.
                  </p>
                </div>

                {/* 4. Education */}
                <div className="bg-white/90 rounded-xl p-2.5 sm:p-3 border border-[#EFE5DE] hover:border-[#D4AF37]/70 transition-all flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] font-bold text-[#8B1D2C] mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Education</span>
                  </div>
                  <p className="text-[11px] sm:text-[11.5px] text-[#6B5C5C] leading-snug">
                    Explore candidates with compatible higher academic credentials from graduation to master's degrees.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Center Search Profiles Button */}
        <div className="mt-6 sm:mt-7 flex justify-center">
          <button
            onClick={handleSearch}
            className="inline-flex items-center gap-2.5 px-9 sm:px-11 py-3 bg-[#8B1538] hover:bg-[#730D2B] text-white font-serif font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-[#8B1538]/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>Search Profiles</span>
          </button>
        </div>

      </div>
    </section>
  );
}
