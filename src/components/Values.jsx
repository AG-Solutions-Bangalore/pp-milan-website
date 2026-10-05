import React from 'react';
import { ShieldCheck, HeartHandshake, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Values() {
  const values = [
    {
      id: 1,
      title: "Verified Profiles",
      description: "Authenticity matters. Profiles are reviewed to create a safer matchmaking experience.",
      icon: ShieldCheck,
      highlight: "100% Manual Check",
      gradient: "from-maroon-900/90 to-maroon-950",
      accentColor: "border-gold-400/40"
    },
    {
      id: 2,
      title: "Personalized Matchmaking",
      description: "Find profiles based on preferences, compatibility and family expectations.",
      icon: HeartHandshake,
      highlight: "Custom Preferences",
      gradient: "from-maroon-800 to-maroon-900",
      accentColor: "border-gold-400/40"
    },
    {
      id: 3,
      title: "Confidential Service",
      description: "Personal information should be presented with privacy and discretion.",
      icon: Lock,
      highlight: "Private & Secure",
      gradient: "from-maroon-950 via-maroon-900 to-maroon-950",
      accentColor: "border-gold-400/40"
    }
  ];

  return (
    <section className="py-20 bg-cream-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-maroon-800 font-semibold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Pillar Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-900">
            Built On Uncompromising <br />
            <span className="gold-gradient-text italic font-normal">Core Values</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 mt-4 max-w-xl mx-auto font-light">
            Every feature on Pandith Prajapati Milan is crafted to maintain trust, protect your family’s privacy, and honor traditional values.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-white via-cream-50 to-cream-100 border border-gold-500/30 shadow-soft-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent group-hover:via-gold-300 transition-all"></div>

                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-maroon-900 text-gold-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-maroon-800 uppercase px-3 py-1 rounded-full bg-gold-400/20 border border-gold-500/30">
                      {val.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold font-serif text-maroon-900 group-hover:text-maroon-700 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 mt-3 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-8 pt-6 border-t border-cream-300 flex items-center justify-between">
                  <span className="text-xs font-semibold text-maroon-800 uppercase tracking-wider">PPM Assurance</span>
                  <Link
                    to="/registration"
                    className="w-8 h-8 rounded-full bg-maroon-900/10 text-maroon-900 flex items-center justify-center group-hover:bg-maroon-900 group-hover:text-gold-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
