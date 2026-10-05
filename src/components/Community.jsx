import React from 'react';
import { Users, Heart, Shield, Landmark, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Community() {
  const pillars = [
    {
      title: "Family First Alignment",
      desc: "Respecting parent-assisted bio-data sharing, elder consent, and family background discussions.",
      icon: Heart,
    },
    {
      title: "Prajapati Cultural Affinity",
      desc: "Tailored around shared heritage, festival traditions, and sub-community matrimonial customs.",
      icon: Landmark,
    },
    {
      title: "Inter-City Connection",
      desc: "Connecting Prajapati families across Bengaluru, Karnataka, South India, and globally.",
      icon: Users,
    },
    {
      title: "Compatibility & Trust",
      desc: "Focusing on genuine education, professional background, and horoscope alignment.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-maroon-950 text-white relative overflow-hidden">
      {/* Decorative Traditional Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Community Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-cream-50 leading-tight">
              Rooted in Community. <br />
              <span className="gold-gradient-text italic font-normal">Focused on Families.</span>
            </h2>

            <p className="text-base text-cream-200/90 font-light leading-relaxed">
              Pandith Prajapati Milan (PPM) is engineered around community-based matrimonial matchmaking. We recognize that in Indian culture, marriage is not merely a union between two individuals, but a sacred bond connecting two respected families.
            </p>

            <p className="text-sm text-cream-300 font-light leading-relaxed">
              Our service provides a dedicated space where Prajapati families can discover eligible matches with confidence, shared cultural understanding, and complete peace of mind.
            </p>

            {/* Checklist */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm text-cream-100 font-medium">Dedicated exclusively to the Prajapati community</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm text-cream-100 font-medium">Respect for traditional Gothra and astrological preferences</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm text-cream-100 font-medium">Safe environment for parents and candidates alike</span>
              </div>
            </div>
          </div>

          {/* Right Pillar Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-maroon-900/80 backdrop-blur-md p-6 rounded-2xl border border-gold-500/30 hover:border-gold-400 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/20 text-gold-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-cream-200/80 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
