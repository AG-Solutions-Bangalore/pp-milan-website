import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sun, MapPin, Briefcase, Heart, Filter, Sparkles, ChevronRight, Info, Award } from 'lucide-react';
import profilePriya from '../assets/cat_bride.png';
import profileArjun from '../assets/cat_groom.jpg';
import profileAnanya from '../assets/cat_bride.png';
import profileRajesh from '../assets/groom_standalone.jpg';

export default function ProfilePreview() {
  const [locationFilter, setLocationFilter] = useState('All');
  const [professionFilter, setProfessionFilter] = useState('All');

  const demoProfiles = [
    {
      id: 1,
      name: "Priya P.",
      age: 28,
      height: "5' 5\"",
      location: "Bengaluru",
      profession: "Software Professional",
      education: "M.Tech (Computer Science)",
      gothra: "Kasyapa",
      compatibility: "94%",
      verified: true,
      horoscope: "Matched",
      image: profilePriya,
      badge: "Tech Lead",
    },
    {
      id: 2,
      name: "Arjun P.",
      age: 30,
      height: "5' 11\"",
      location: "Bengaluru",
      profession: "Entrepreneur",
      education: "B.E + MBA (Finance)",
      gothra: "Vatsa",
      compatibility: "91%",
      verified: true,
      horoscope: "Matched",
      image: profileArjun,
      badge: "Business Owner",
    },
    {
      id: 3,
      name: "Ananya P.",
      age: 26,
      height: "5' 4\"",
      location: "Mysuru",
      profession: "Healthcare Specialist",
      education: "MBBS, M.D.",
      gothra: "Bharadwaja",
      compatibility: "96%",
      verified: true,
      horoscope: "Matched",
      image: profileAnanya,
      badge: "Medical Doctor",
    },
    {
      id: 4,
      name: "Rajesh P.",
      age: 32,
      height: "6' 0\"",
      location: "Bengaluru",
      profession: "Software Architect",
      education: "B.Tech (IIT Alum)",
      gothra: "Gargya",
      compatibility: "93%",
      verified: true,
      horoscope: "Matched",
      image: profileRajesh,
      badge: "Senior Lead",
    },
  ];

  const filteredProfiles = demoProfiles.filter(p => {
    if (locationFilter !== 'All' && p.location !== locationFilter) return false;
    if (professionFilter !== 'All' && !p.profession.toLowerCase().includes(professionFilter.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="profiles" className="py-24 bg-maroon-950 text-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Curated Candidate Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-cream-50">
            Explore Verified <br />
            <span className="gold-gradient-text italic font-normal">Matrimonial Profiles</span>
          </h2>
          <p className="text-base text-cream-200/90 mt-4 font-light leading-relaxed">
            Preview genuine Prajapati profiles with detailed gothra, horoscope, education, and family background parameters.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-maroon-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-12 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gold-300 font-serif font-semibold text-sm">
            <Filter className="w-5 h-5 text-gold-400" />
            <span>Interactive Filters:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Location Select */}
            <div className="flex items-center gap-2 bg-maroon-950 px-3 py-2 rounded-xl border border-gold-500/20 text-xs">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span className="text-cream-200">Location:</span>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="bg-transparent text-gold-300 font-bold focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-maroon-950 text-white">All Cities</option>
                <option value="Bengaluru" className="bg-maroon-950 text-white">Bengaluru</option>
                <option value="Mysuru" className="bg-maroon-950 text-white">Mysuru</option>
              </select>
            </div>

            {/* Profession Select */}
            <div className="flex items-center gap-2 bg-maroon-950 px-3 py-2 rounded-xl border border-gold-500/20 text-xs">
              <Briefcase className="w-4 h-4 text-gold-400" />
              <span className="text-cream-200">Profession:</span>
              <select
                value={professionFilter}
                onChange={(e) => setProfessionFilter(e.target.value)}
                className="bg-transparent text-gold-300 font-bold focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-maroon-950 text-white">All Professions</option>
                <option value="Software" className="bg-maroon-950 text-white">Software / Tech</option>
                <option value="Entrepreneur" className="bg-maroon-950 text-white">Entrepreneur</option>
                <option value="Healthcare" className="bg-maroon-950 text-white">Healthcare / Doctor</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => { setLocationFilter('All'); setProfessionFilter('All'); }}
              className="text-xs text-cream-300 underline hover:text-gold-300 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProfiles.map((p) => (
            <div
              key={p.id}
              className="group bg-cream-50 rounded-3xl overflow-hidden border border-gold-400/40 shadow-xl text-charcoal-900 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* Profile Image & Top Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-emerald-700/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-maroon-950/90 text-gold-300 border border-gold-400/40 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span>{p.compatibility}</span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-xl font-bold">{p.name} <span className="text-sm font-normal opacity-90">({p.age} yrs, {p.height})</span></h3>
                    <p className="text-xs text-cream-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" /> {p.location}
                    </p>
                  </div>
                </div>

                {/* Profile Details List */}
                <div className="p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between text-xs border-b border-cream-200 pb-2">
                    <span className="text-charcoal-600 font-medium">Profession</span>
                    <span className="font-bold text-maroon-900">{p.profession}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-cream-200 pb-2">
                    <span className="text-charcoal-600 font-medium">Education</span>
                    <span className="font-bold text-maroon-900">{p.education}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-cream-200 pb-2">
                    <span className="text-charcoal-600 font-medium">Gothra</span>
                    <span className="font-bold text-gold-600">{p.gothra}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-charcoal-600 font-medium">Horoscope</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <Sun className="w-3.5 h-3.5" /> {p.horoscope}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-cream-100 border-t border-cream-300 flex flex-col gap-2">
                <Link
                  to="/registration"
                  className="w-full py-2.5 text-center text-xs font-bold text-maroon-950 bg-gradient-to-r from-gold-300 to-gold-500 rounded-xl hover:shadow-md transition-all flex items-center justify-center gap-1"
                >
                  <span>Connect & View Bio-Data</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Fictional Disclaimer Note */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-maroon-900/60 border border-gold-500/20 text-cream-200 text-xs flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Note: Fictional demo profile cards shown for visual illustration of PPM's matchmaking interface.</span>
        </div>

      </div>
    </section>
  );
}
