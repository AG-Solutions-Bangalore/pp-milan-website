import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, MessageSquare, HeartHandshake, Sparkles, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      title: "Submit Your Bio-Data",
      desc: "Create your matrimonial profile with relevant personal, family, gothra, horoscope, and career details.",
      icon: FileText,
      badge: "Easy 4-Step Form",
    },
    {
      stepNumber: "02",
      title: "Discover Suitable Profiles",
      desc: "Explore verified candidates based on age, location, education, gothra, and horoscope compatibility.",
      icon: Search,
      badge: "Curated Matching",
    },
    {
      stepNumber: "03",
      title: "Connect & Communicate",
      desc: "Shortlist compatible profiles and initiate respectful communications between families.",
      icon: MessageSquare,
      badge: "Family Alignment",
    },
    {
      stepNumber: "04",
      title: "Build a Relationship",
      desc: "Move gracefully from meaningful conversations toward a blessed lifelong partnership.",
      icon: HeartHandshake,
      badge: "Lifelong Union",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF7F2] text-charcoal-800 relative overflow-hidden">
      
      {/* Decorative Blur Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-maroon-800 font-semibold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Simple & Respectful Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-900">
            How Matchmaking Works At <br />
            <span className="gold-gradient-text italic font-normal">Pandith Prajapati Milan</span>
          </h2>
          <p className="text-base text-charcoal-700 mt-4 font-light leading-relaxed">
            Four simple steps designed to bring eligible individuals and families together in a safe, dignified environment.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Vertical */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-gold-300 via-maroon-800 to-gold-400 -translate-y-6 z-0 opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;

              return (
                <div
                  key={st.stepNumber}
                  className="group relative bg-white rounded-3xl p-8 border border-gold-400/30 shadow-soft-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon-900 to-maroon-950 text-gold-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="font-serif text-2xl font-bold text-gold-500 opacity-80">
                        {st.stepNumber}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold font-serif text-maroon-900 mb-2 group-hover:text-maroon-700 transition-colors">
                      {st.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-6">
                      {st.desc}
                    </p>
                  </div>

                  {/* Bottom Step Tag */}
                  <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-maroon-800 uppercase tracking-wider bg-gold-400/15 px-3 py-1 rounded-full border border-gold-400/30">
                      {st.badge}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-maroon-900/10 text-maroon-900 flex items-center justify-center text-xs group-hover:bg-maroon-900 group-hover:text-gold-300 transition-colors">
                      {idx + 1}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Banner inside HowItWorks */}
        <div className="mt-16 text-center bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 p-8 rounded-3xl border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-serif font-bold text-white">Ready to begin your matchmaking journey?</h4>
            <p className="text-sm text-cream-200 font-light mt-1">Submit your bio-data today and get verified by our community matchmakers.</p>
          </div>
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-maroon-950 text-sm font-semibold shadow-md hover:scale-105 transition-transform shrink-0"
          >
            <span>Start Registration</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
