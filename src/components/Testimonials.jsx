import React from 'react';
import { Quote, Star, Heart, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "PPM made the process of finding a suitable match much more comfortable for our family. The verification and Gothra filter gave us complete peace of mind.",
      author: "Prajapati Family Member",
      relation: "Groom's Parent",
      location: "Bengaluru",
      rating: 5,
    },
    {
      id: 2,
      quote: "Finding someone who shares both modern career values and traditional family roots was seamless through Pandith Prajapati Milan. We are deeply grateful.",
      author: "S. Prajapati & Family",
      relation: "Bride's Family",
      location: "Hubballi",
      rating: 5,
    },
    {
      id: 3,
      quote: "The personal attention, community authenticity, and strict privacy set PPM apart from generic dating websites. Highly recommended for every Prajapati family!",
      author: "R. Prajapati",
      relation: "Community Member",
      location: "Mysuru",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] text-charcoal-800 relative overflow-hidden">
      
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-maroon-800 font-semibold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Community Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-900">
            Stories of Trust & <br />
            <span className="gold-gradient-text italic font-normal">Blessed Unions</span>
          </h2>
          <p className="text-base text-charcoal-700 mt-4 font-light leading-relaxed">
            Read how Prajapati families have discovered meaningful matrimonial alliances with comfort and confidence.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-3xl p-8 border border-gold-400/30 shadow-soft-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-maroon-900/10 text-maroon-800 flex items-center justify-center">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm font-serif italic text-charcoal-800 leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-maroon-900">{t.author}</h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">{t.relation} • {t.location}</p>
                </div>
                <Heart className="w-5 h-5 text-gold-500 fill-gold-500/20" />
              </div>

            </div>
          ))}
        </div>

        {/* Demo Disclaimer Note */}
        <p className="text-center text-xs text-charcoal-500 mt-10">
          * Representative demo testimonials illustrating family feedback.
        </p>

      </div>
    </section>
  );
}
