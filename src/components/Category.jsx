import React from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Heart, Search, ArrowRight } from 'lucide-react';
import groomImg from '../assets/cat_groom.png';
import brideImg from '../assets/cat_bride.png';
import locationImg from '../assets/cat_location.jpg';
import communityImg from '../assets/cat_community.jpg';
import searchImg from '../assets/cat_search.jpg';

export default function Category() {
  const categories = [
    {
      id: 'groom',
      title: 'Groom Profiles',
      image: groomImg,
      icon: User,
      link: '/registration'
    },
    {
      id: 'bride',
      title: 'Bride Profiles',
      image: brideImg,
      icon: User,
      link: '/registration'
    },
    {
      id: 'location',
      title: 'By Location',
      image: locationImg,
      icon: MapPin,
      link: '/registration'
    },
    {
      id: 'community',
      title: 'Sub Community',
      image: communityImg,
      icon: Heart,
      link: '/registration'
    },
    {
      id: 'advanced',
      title: 'Advanced Search',
      image: searchImg,
      icon: Search,
      link: '/registration'
    }
  ];

  return (
    <section id="category" className="py-10 sm:py-12 lg:py-14 bg-[#FFFDF9] text-[#2D2626] relative overflow-hidden">

      {/* Background Subtle Ambiance */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F5E6B1]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#9F1239] mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9F1239]"></span>
              <span>CATEGORY</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold text-[#2A1D1D]">
              Find Your Perfect Match
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#6B5C5C] mt-1 font-normal max-w-xl">
              Explore profiles within the Prajapati / Pandit community based on your preferences.
            </p>
          </div>

          {/* View All Categories Button */}
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#9F1239] border border-[#9F1239]/60 hover:border-[#9F1239] bg-white hover:bg-[#FFF5F7] rounded-full transition-all self-start md:self-end shadow-xs hover:shadow"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Arched Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4.5 max-w-6xl mx-auto pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.link}
                className="group flex flex-col items-center cursor-pointer transition-all duration-300"
              >
                {/* Arched Frame */}
                <div className="relative w-full aspect-[3/3.9] rounded-t-[70px] rounded-b-2xl p-1.5 bg-gradient-to-b from-[#E5C365] via-[#D4AF37]/40 to-[#C5A059] shadow-md group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full rounded-t-[65px] rounded-b-xl overflow-hidden bg-cream-100 border border-white">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                </div>

                {/* Bottom Pill Badge with Icon & Label */}
                <div className="-mt-4 relative z-20 w-[92%] bg-white/95 backdrop-blur-sm rounded-full py-1.5 px-2.5 shadow-md border border-[#E5C365]/70 flex items-center justify-center gap-1.5 group-hover:bg-[#9F1239] transition-colors duration-300">
                  <div className="w-4 h-4 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#9F1239] transition-colors">
                    <Icon className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2A1D1D] group-hover:text-white transition-colors truncate">
                    {cat.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
