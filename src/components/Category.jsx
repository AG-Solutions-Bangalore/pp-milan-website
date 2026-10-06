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

  // State for Looking For selection
  const [lookingFor, setLookingFor] = useState('Groom');

  // State for Refine Your Search filters
  const [filters, setFilters] = useState({
    age: '',
    profession: '',
    location: '',
    education: ''
  });

  const lookingForOptions = [
    { id: 'Groom', label: 'Groom', image: groomImg },
    { id: 'Bride', label: 'Bride', image: brideImg },
    { id: 'Widow', label: 'Widow', image: widowImg },
    { id: 'Divorcee', label: 'Divorcee', image: divorceImg }
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    openModal({
      title: `${lookingFor} Profiles Search`,
      tag: "Matching Profiles",
      iconType: "sparkles",
      content: `Searching authentic ${lookingFor} candidates in the Prajapati / Pandit community with your selected preferences${
        filters.location ? ` in ${filters.location}` : ''
      }${filters.profession ? `, Profession: ${filters.profession}` : ''}${
        filters.education ? `, Education: ${filters.education}` : ''
      }${filters.age ? `, Age: ${filters.age}` : ''}. You can view the full candidate directory or register your profile now.`,
      buttonText: "Register / View Matches",
      actionPath: "/registration",
      onAction: () => {
        navigate('/registration');
      }
    });
  };

  return (
    <section id="category" className="py-12 sm:py-16 bg-[#FFFDF9] text-[#2D2626] relative overflow-hidden">
      
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
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9F1239] mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9F1239]"></span>
            <span>CATEGORY</span>
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
          <div className="bg-[#FFFDFB] rounded-2xl sm:rounded-3xl border border-[#F0E4DC] p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Header with Title and Gold Lotus Filament */}
              <div className="flex items-center gap-3 mb-5 border-b border-[#F4E9E2] pb-3">
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {lookingForOptions.map((opt) => {
                  const isSelected = lookingFor === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setLookingFor(opt.id)}
                      className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                        isSelected
                          ? 'border-[#8B1D2C] ring-2 ring-[#8B1D2C]/20 shadow-md bg-white'
                          : 'border-[#EAE0D8] bg-white hover:border-[#D4AF37] hover:shadow-sm'
                      }`}
                    >
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/4.8] sm:aspect-[4/5.2] w-full overflow-hidden bg-neutral-100">
                        <img
                          src={opt.image}
                          alt={opt.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Soft overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Select Radio Bar */}
                      <div className="p-2 sm:p-2.5 flex items-center justify-center gap-2 bg-white">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-[#8B1D2C] bg-white'
                              : 'border-[#C4B5AE] bg-white group-hover:border-[#8B1D2C]'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-[#8B1D2C]"></div>
                          )}
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-semibold transition-colors ${
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
              PART 2: "Refine Your Search" (Age, Professional, Location, Education)
             ========================================================= */}
          <div className="bg-[#FFFDFB] rounded-2xl sm:rounded-3xl border border-[#F0E4DC] p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Header with Title and Gold Lotus Filament */}
              <div className="flex items-center gap-3 mb-5 border-b border-[#F4E9E2] pb-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-[#FFF0F3] text-[#8B1D2C] flex items-center justify-center">
                    <SlidersHorizontal className="w-4 h-4 text-[#8B1D2C]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#8B1D2C]">
                    Refine Your Search
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

              {/* 2x2 Grid of Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 pt-1">
                
                {/* 1. Age */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B1D2C] mb-1.5">
                    <Cake className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Age</span>
                  </div>
                  <div className="relative">
                    <select
                      value={filters.age}
                      onChange={(e) => handleFilterChange('age', e.target.value)}
                      className="w-full h-11 pl-3.5 pr-8 text-xs sm:text-sm bg-white border border-[#E5D7D0] hover:border-[#8B1D2C] rounded-xl focus:outline-none focus:border-[#8B1D2C] text-gray-700 appearance-none cursor-pointer shadow-2xs transition-colors"
                    >
                      <option value="">Select Age Range</option>
                      <option value="18 - 23 Yrs">18 - 23 Yrs</option>
                      <option value="24 - 28 Yrs">24 - 28 Yrs</option>
                      <option value="29 - 33 Yrs">29 - 33 Yrs</option>
                      <option value="34 - 38 Yrs">34 - 38 Yrs</option>
                      <option value="39 - 45 Yrs">39 - 45 Yrs</option>
                      <option value="45+ Yrs">45+ Yrs</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Professional */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B1D2C] mb-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Professional</span>
                  </div>
                  <div className="relative">
                    <select
                      value={filters.profession}
                      onChange={(e) => handleFilterChange('profession', e.target.value)}
                      className="w-full h-11 pl-3.5 pr-8 text-xs sm:text-sm bg-white border border-[#E5D7D0] hover:border-[#8B1D2C] rounded-xl focus:outline-none focus:border-[#8B1D2C] text-gray-700 appearance-none cursor-pointer shadow-2xs transition-colors"
                    >
                      <option value="">Select Profession</option>
                      <option value="Software / IT Engineer">Software / IT Engineer</option>
                      <option value="Doctor / Healthcare">Doctor / Healthcare</option>
                      <option value="Civil Services / Govt">Civil Services / Govt</option>
                      <option value="Chartered Accountant / Finance">Chartered Accountant / Finance</option>
                      <option value="Business / Entrepreneur">Business / Entrepreneur</option>
                      <option value="Professor / Teacher">Professor / Teacher</option>
                      <option value="Lawyer / Legal">Lawyer / Legal</option>
                      <option value="Other Profession">Other Profession</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 3. Location */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B1D2C] mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Location</span>
                  </div>
                  <div className="relative">
                    <select
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full h-11 pl-3.5 pr-8 text-xs sm:text-sm bg-white border border-[#E5D7D0] hover:border-[#8B1D2C] rounded-xl focus:outline-none focus:border-[#8B1D2C] text-gray-700 appearance-none cursor-pointer shadow-2xs transition-colors"
                    >
                      <option value="">Select Location</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mysuru">Mysuru</option>
                      <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                      <option value="Belagavi">Belagavi</option>
                      <option value="Mangaluru">Mangaluru</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Mumbai / Pune">Mumbai / Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Any Location">Any Location</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 4. Education */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B1D2C] mb-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8B1D2C]" />
                    <span>Education</span>
                  </div>
                  <div className="relative">
                    <select
                      value={filters.education}
                      onChange={(e) => handleFilterChange('education', e.target.value)}
                      className="w-full h-11 pl-3.5 pr-8 text-xs sm:text-sm bg-white border border-[#E5D7D0] hover:border-[#8B1D2C] rounded-xl focus:outline-none focus:border-[#8B1D2C] text-gray-700 appearance-none cursor-pointer shadow-2xs transition-colors"
                    >
                      <option value="">Select Education</option>
                      <option value="Schooling (up to 10th )">Schooling (up to 10th )</option>
                      <option value="PUC/12th Std">PUC / 12th Std</option>
                      <option value="Diploma">Diploma</option>
                      <option value="BE / B.Tech">BE / B.Tech</option>
                      <option value="BSc / BCA / BBA / BCom">BSc / BCA / BBA / BCom</option>
                      <option value="MBBS / BDS / MD">MBBS / BDS / MD</option>
                      <option value="ME / M.Tech / MS">ME / M.Tech / MS</option>
                      <option value="MBA / MCA / MCom">MBA / MCA / MCom</option>
                      <option value="CA / CS">CA / CS</option>
                      <option value="Ph.D / Doctorate">Ph.D / Doctorate</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Center Search Profiles Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
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
