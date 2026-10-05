import React from 'react';
import { Bell, Users, ShieldCheck, Sliders, Smartphone } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import appPhonesImg from '../assets/app_phones.png';
import appFloralDecorImg from "../assets/app_floral_decor.png";

export default function AppSection() {
  const { openModal } = useModal();
  const appFeatures = [
    {
      title: "Instant Notifications",
      desc: "Get notified about new matches",
      icon: Bell
    },
    {
      title: "Profile Management",
      desc: "Easily manage your profile",
      icon: Users
    },
    {
      title: "Secure Communication",
      desc: "Chat safely and privately",
      icon: ShieldCheck
    },
    {
      title: "Advanced Search Filters",
      desc: "Find matches as per your preferences",
      icon: Sliders
    },
    {
      title: "User-Friendly Interface",
      desc: "Simple and easy to use",
      icon: Smartphone
    }
  ];

  return (
    <section id="app" className="relative pt-10 pb-14 bg-[#FFFDF9] text-[#2D2626] overflow-hidden">
      
      

      {/* Decorative Floral Decor in Bottom-Right Corner */}
      <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 -right-6 sm:-right-8 lg:-right-10 w-[280px] sm:w-[340px] lg:w-[390px] pointer-events-none opacity-90 rotate-180 z-0">
        <img
          src={appFloralDecorImg}
          alt="Bottom-Right Floral Decor"
          className="w-full h-auto object-contain filter drop-shadow-sm"
        />
      </div>

      {/* Ambient Warm Glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#FDF2E9]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Heading, Description & Store Badges (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-3.5">
            
            {/* Pill: MOBILE APP */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F0D5DA] text-[11px] font-bold tracking-wider uppercase text-[#9F1239] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9F1239]"></span>
              <span>MOBILE APP</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D1D] leading-[1.2]">
              Find Your Match <br />
              <span className="text-[#2A1D1D]">Anywhere, Anytime</span>
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-[13px] text-[#554444] leading-relaxed max-w-sm">
              Download the PP Milan app and explore genuine profiles, get instant notifications and stay connected with your potential matches on the go.
            </p>

            {/* Store Download Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
              {/* Apple App Store */}
              <a
                href="#download-ios"
                onClick={(e) => { 
                  e.preventDefault(); 
                  openModal({
                    title: "iOS App Coming Soon!",
                    tag: "Apple App Store",
                    iconType: "app",
                    content: "The PP Milan iPhone application is currently in final testing. It will feature real-time match alerts, instant bio-data access, and secure family chat directly on your Apple device."
                  });
                }}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl shadow-xs transition-all duration-300 group cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.74 1.04-1.77.92-2.8-.9.04-2 .6-2.65 1.34-.56.63-1.06 1.68-.92 2.69 1.01.08 2.04-.51 2.65-1.23z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[8.5px] uppercase tracking-wider text-neutral-300 leading-none">Download on the</p>
                  <p className="text-xs font-bold leading-tight mt-0.5">App Store</p>
                </div>
              </a>

              {/* Google Play Store */}
              <a
                href="#download-android"
                onClick={(e) => { 
                  e.preventDefault(); 
                  openModal({
                    title: "Android App Launching Soon!",
                    tag: "Google Play Store",
                    iconType: "app",
                    content: "The PP Milan Android application is preparing for launch on Google Play! Experience instant partner search, horoscope compatibility, and verified community profiles directly from your phone."
                  });
                }}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl shadow-xs transition-all duration-300 group cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.364-.61-.884-.61-1.464V3.278c0-.58.244-1.1.609-1.464zm11.24 11.244l2.585 2.585-11.75 6.786 9.165-9.371zm0-2.116L5.684 1.571l11.75 6.786-2.585 2.585zm1.488 1.058l3.704 2.139c.854.493.854 1.299 0 1.792l-3.704 2.139-2.032-2.032 2.032-2.038z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[8.5px] uppercase tracking-wider text-neutral-300 leading-none">GET IT ON</p>
                  <p className="text-xs font-bold leading-tight mt-0.5">Google Play</p>
                </div>
              </a>
            </div>

          </div>

          {/* Center Column: Dual Phones Mockup */}
          <div className="lg:col-span-4 flex justify-center items-center relative py-2">
            <div className="relative w-full max-w-[370px] sm:max-w-[420px] lg:max-w-[440px] transition-transform duration-500 hover:scale-103">
              <img
                src={appPhonesImg}
                alt="PP Milan Matrimonial Mobile App"
                className="w-full h-auto object-contain filter drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: 5 Features List matching exact reference design (3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 pl-0 lg:pl-6">
            {appFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3.5 text-left group"
                >
                  {/* Circular Crimson Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#9F1239] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#9F1239]/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    {/* Crimson Bold Title */}
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#9F1239] leading-tight">
                      {item.title}
                    </h4>
                    {/* Subtext */}
                    <p className="text-[11px] sm:text-xs text-[#554444] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Smooth Silk Ribbon Wave Transition */}
      {/* <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-[#FAF7F2] preserve-3d"
        >
          <path
            d="M0,30 C320,0 720,50 1100,10 C1280,-5 1380,25 1440,30 L1440,50 L0,50 Z"
            fill="#FAF7F2"
          />
          <path
            d="M0,28 C320,-2 720,48 1100,8 C1280,-7 1380,23 1440,28"
            stroke="#E5C365"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </div> */}

    </section>
  );
}
