import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, PhoneCall, ShieldCheck, Heart } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 rounded-[35px] p-8 sm:p-14 lg:p-16 border-2 border-gold-500/40 shadow-2xl overflow-hidden text-center text-white">
          
          {/* Decorative Pattern & Glow */}
          <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none"></div>
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-maroon-700/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Top Seal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Pandith Prajapati Milan</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-cream-50 leading-tight">
              Your Search for a Meaningful <br />
              <span className="gold-gradient-text italic font-normal">Partner Starts Here</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed">
              Submit your bio-data and take the first step toward discovering meaningful matrimonial connections within the Prajapati community.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/registration"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-maroon-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full shadow-lg shadow-gold-500/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>Submit Bio-Data</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cream-100 bg-maroon-900/80 border border-gold-500/40 hover:bg-maroon-800 rounded-full hover:border-gold-400 transition-all duration-300 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-gold-400" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust Footer line */}
            <div className="pt-8 border-t border-maroon-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-cream-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verified Family Screening</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-gold-400" />
                <span>Traditional & Cultural Integrity</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
