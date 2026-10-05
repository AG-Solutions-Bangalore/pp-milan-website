import React from 'react';
import { Users, HeartHandshake, ShieldCheck, UserCheck, Star } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      id: 1,
      number: "1,000+",
      label: "Profiles Registered",
      description: "Verified community candidates",
      icon: Users,
    },
    {
      id: 2,
      number: "500+",
      label: "Successful Matches",
      description: "Lifelong family alliances",
      icon: HeartHandshake,
    },
    {
      id: 3,
      number: "100%",
      label: "Privacy Guaranteed",
      description: "Strict family data control",
      icon: ShieldCheck,
    },
    {
      id: 4,
      number: "Verified",
      label: "Authentic Bio-Data",
      description: "Thorough background review",
      icon: UserCheck,
    },
  ];

  return (
    <section className="relative -mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 shadow-elevated border border-gold-500/30 relative overflow-hidden">
        {/* Subtle Ornamental Pattern Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-cream-300">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center text-center p-4 transition-transform duration-300 hover:scale-105 ${
                  idx > 0 ? 'pt-6 lg:pt-4' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-maroon-900/10 border border-gold-500/30 flex items-center justify-center text-maroon-800 mb-3">
                  <Icon className="w-6 h-6 text-maroon-800" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-sm font-semibold text-charcoal-900 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-charcoal-600 mt-0.5">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Small Badge Note */}
        <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-600">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span>Dedicated exclusively to Prajapati families seeking genuine matrimonial alliances</span>
          </div>
          <span className="text-maroon-800 font-semibold tracking-wide uppercase text-[11px]">
            Pandith Prajapati Milan • Established Trust
          </span>
        </div>
      </div>
    </section>
  );
}
