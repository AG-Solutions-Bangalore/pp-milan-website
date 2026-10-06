import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp 
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import logoImg from '../assets/PPMilan_logo.png';

export default function Footer() {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const scrollToSection = (id) => {
    if (id === 'contact') {
      navigate('/contact');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-[#E8DCD5] overflow-hidden select-none">
      
      {/* ========================================================
          PROMINENT ROYAL DOUBLE-WAVE SHAPE HEADER
          Transparent top allows the page background (#FFFDF9) to show,
          creating the true curved wave silhouette from the mockup.
         ======================================================== */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg 
          viewBox="0 0 1440 70" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-12 sm:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Solid fill for the wave body matching the top of footer background */}
          <path 
            d="M0,38 C160,10 320,10 520,38 C640,54 740,54 860,28 C980,8 1140,8 1440,32 L1440,70 L0,70 Z" 
            fill="#2E030D" 
          />
          {/* Radiant Golden Contour Line along the wave crest */}
          <path 
            d="M0,38 C160,10 320,10 520,38 C640,54 740,54 860,28 C980,8 1140,8 1440,32" 
            stroke="url(#royalWaveGoldGrad)" 
            strokeWidth="2.5" 
            fill="none" 
          />
          <defs>
            <linearGradient id="royalWaveGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
              <stop offset="18%" stopColor="#F9E29D" stopOpacity="1" />
              <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#FDF0CD" stopOpacity="1" />
              <stop offset="85%" stopColor="#E5C365" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C5A059" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========================================================
          FOOTER BODY WITH ROYAL MAROON GRADIENT & ETCHINGS
         ======================================================== */}
      <div className="relative bg-gradient-to-b from-[#2E030D] via-[#360412] to-[#1E0108] pt-1 sm:pt-2 pb-3 sm:pb-4">

        {/* Left: Traditional Rajasthani Palace & Jharokha Line Art */}
        <div className="absolute bottom-1 left-0 w-44 sm:w-56 lg:w-64 pointer-events-none opacity-28 select-none z-0">
          <svg viewBox="0 0 240 260" fill="none" stroke="#E5C365" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
            <path d="M120 15 C120 15 95 45 85 75 L155 75 C145 45 120 15 120 15 Z" />
            <line x1="120" y1="2" x2="120" y2="15" strokeWidth="1.5" />
            <circle cx="120" cy="4" r="3" fill="#E5C365" />
            <rect x="80" y="75" width="80" height="8" rx="2" />
            <path d="M88 115 C98 98 108 98 120 88 C132 98 142 98 152 115" />
            <path d="M88 150 C98 132 108 132 120 122 C132 132 142 132 152 150" />
            <line x1="88" y1="83" x2="88" y2="210" strokeWidth="1.8" />
            <line x1="152" y1="83" x2="152" y2="210" strokeWidth="1.8" />
            <line x1="108" y1="83" x2="108" y2="210" strokeDasharray="3 3" />
            <line x1="132" y1="83" x2="132" y2="210" strokeDasharray="3 3" />
            <line x1="60" y1="210" x2="180" y2="210" strokeWidth="2" />
            <line x1="50" y1="222" x2="190" y2="222" strokeWidth="2" />
            <path d="M45 100 C45 100 35 115 30 130 L60 130 C55 115 45 100 45 100 Z" />
            <line x1="32" y1="130" x2="32" y2="220" strokeWidth="1.2" />
            <line x1="58" y1="130" x2="58" y2="220" strokeWidth="1.2" />
            <path d="M195 100 C195 100 185 115 180 130 L210 130 C205 115 195 100 195 100 Z" />
            <line x1="182" y1="130" x2="182" y2="220" strokeWidth="1.2" />
            <line x1="208" y1="130" x2="208" y2="220" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Right: Traditional Royal Wedding Mandap & Couple Line Art */}
        <div className="absolute bottom-1 right-0 w-60 sm:w-76 lg:w-88 pointer-events-none opacity-28 select-none z-0">
          <svg viewBox="0 0 340 230" fill="none" stroke="#E5C365" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
            <path d="M30 210 L30 80 C80 30 240 30 290 80 L290 210" strokeWidth="1.2" strokeDasharray="4 3" />
            <path d="M50 210 L50 90 C95 45 225 45 270 90 L270 210" strokeWidth="1.4" />
            <circle cx="160" cy="40" r="5" />
            <line x1="160" y1="18" x2="160" y2="35" strokeWidth="1.5" />

            {/* GROOM FIGURE */}
            <ellipse cx="118" cy="88" rx="14" ry="10" />
            <path d="M118 78 Q120 68 117 60 Q114 68 118 78" strokeWidth="1.5" />
            <circle cx="118" cy="100" r="8" />
            <path d="M110 108 L104 185 L132 185 L126 108 Z" />
            <line x1="118" y1="108" x2="118" y2="185" strokeDasharray="2 3" />
            <path d="M106 110 Q94 145 98 190" />
            <line x1="112" y1="185" x2="112" y2="210" strokeWidth="1.2" />
            <line x1="124" y1="185" x2="124" y2="210" strokeWidth="1.2" />
            <path d="M124 122 L142 136" strokeWidth="1.4" />

            {/* BRIDE FIGURE */}
            <path d="M202 88 C202 80 214 80 214 88 C214 100 196 130 194 190" />
            <circle cx="202" cy="100" r="7.5" />
            <path d="M196 108 L194 132 L212 132 L210 108 Z" />
            <path d="M194 132 L178 210 L232 210 L212 132 Z" />
            <path d="M196 122 L178 136" strokeWidth="1.4" />

            {/* SACRED VARMALA GARLAND */}
            <path d="M136 126 Q160 162 184 126" strokeWidth="2.2" strokeDasharray="2 3" />

            {/* Right Pavilion Structure */}
            <path d="M270 95 C282 80 298 80 310 95 L310 210" strokeWidth="1" />
            <path d="M290 76 C290 65 296 58 300 52 C304 58 310 65 310 76 Z" />
            <line x1="300" y1="44" x2="300" y2="52" />
          </svg>
        </div>

        {/* ========================================================
            MAIN CONTENT CONTAINER
           ======================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* ========================================================
              FOUR COLUMNS MATCHING USER'S MOCKUP
             ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-3.5 border-b border-[#52091D]/80">

            {/* --------------------------------------------------------
                COLUMN 1: Logo, Brand Text, Tagline & Social Media (5 cols)
               -------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-2 text-left">
              
              {/* Brand Logo with Official PP Milan Emblem */}
              <Link to="/" className="inline-flex items-center gap-2.5 group focus:outline-none">
                <img 
                  src={logoImg} 
                  alt="PP Milan Logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0" 
                />
                
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-[22px] font-bold tracking-tight text-white leading-none group-hover:text-[#F3E5AB] transition-colors">
                    PP MILAN
                  </span>
                  <span className="text-[9px] tracking-[0.2em] font-semibold text-[#D4AF37] uppercase mt-0.5">
                    PANDITH PRAJAPATI MILAN
                  </span>
                </div>
              </Link>

              {/* Platform Tagline Description */}
              <p className="text-[12px] sm:text-[12.5px] text-[#D8C7C0] leading-relaxed max-w-sm font-light">
                A dedicated matrimonial platform for the Prajapati / Pandit community, helping you find a compatible life partner with shared values and traditions.
              </p>

              {/* Social Media Channels (Facebook, Instagram, YouTube, LinkedIn) */}
              <div className="flex items-center gap-2 pt-0.5">
                {/* Facebook */}
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-95 hover:scale-110 active:scale-95 transition-all shadow-xs"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a> */}

                {/* Instagram */}
                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-95 hover:scale-110 active:scale-95 transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a> */}

              {/* YouTube */}
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-95 hover:scale-110 active:scale-95 transition-all shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a> */}

              {/* LinkedIn */}
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-95 hover:scale-110 active:scale-95 transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a> */}
            </div>

          </div>

          {/* --------------------------------------------------------
              COLUMN 2: Quick Links (2.2 cols) - Clean text list
             -------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-1.5 text-left">
            <h4 className="text-[13px] sm:text-sm font-semibold text-white tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-1 text-xs text-[#D1C2BB]">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Category', id: 'category' },
                { label: 'Features', id: 'features' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------------------------------
              COLUMN 3: Support & Policies (2.3 cols) - Clean text list
             -------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-1.5 text-left">
            <h4 className="text-[13px] sm:text-sm font-semibold text-white tracking-wide">
              Support
            </h4>

            <ul className="space-y-1 text-xs text-[#D1C2BB]">
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openModal({
                      title: "Privacy Policy",
                      tag: "Security & Trust",
                      iconType: "shield",
                      content: "At PP Milan, your privacy is our sacred responsibility. Personal bio-data, phone numbers, and family documents are encrypted with banking-grade security and shared solely upon mutual interest between verified community members."
                    });
                  }} 
                  className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openModal({
                      title: "Terms & Conditions",
                      tag: "Platform Rules",
                      iconType: "terms",
                      content: "PP Milan is an exclusive matrimonial portal dedicated to the Prajapati / Pandit community. All registered profiles must provide genuine identity information and agree to honor shared cultural values and respectful communication."
                    });
                  }} 
                  className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#help" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openModal({
                      title: "Help & Support Center",
                      tag: "24/7 Assistance",
                      iconType: "help",
                      content: "Need help creating a bio-data profile or setting up matchmaking filters? Our community care team is here to assist you anytime via WhatsApp or direct phone helpline at +91 98765 43210."
                    });
                  }} 
                  className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#guidelines" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openModal({
                      title: "Community Guidelines",
                      tag: "Mutual Respect",
                      iconType: "community",
                      content: "We uphold the highest cultural dignity for all candidates and families. Misleading profiles, commercial solicitation, or disrespectful conduct will result in immediate and permanent account suspension."
                    });
                  }} 
                  className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="#sitemap" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openModal({
                      title: "Platform Directory",
                      tag: "Sitemap",
                      iconType: "sparkles",
                      content: "Quickly browse our platform: Home, About Us, Community Categories, Special Features, FAQ, and Contact Us. Reach out to our team anytime for dedicated matrimonial assistance."
                    });
                  }} 
                  className="hover:text-[#F3E5AB] transition-colors cursor-pointer block leading-normal"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* --------------------------------------------------------
              COLUMN 4: Contact Info (2.5 cols) - With gold icons
             -------------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-1.5 text-left">
            <h4 className="text-[13px] sm:text-sm font-semibold text-white tracking-wide">
              Contact Info
            </h4>

            <div className="space-y-1 text-xs text-[#D1C2BB]">
              
              {/* Address */}
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#F3E5AB] transition-colors">
                  +91 98765 43210
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+919876543211" className="hover:text-[#F3E5AB] transition-colors">
                  +91 98765 43211
                </a>
              </div>

              {/* Email 1 */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="mailto:support@ppmilan.in" className="hover:text-[#F3E5AB] transition-colors">
                  support@ppmilan.in
                </a>
              </div>

              {/* Email 2 */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@ppmilan.in" className="hover:text-[#F3E5AB] transition-colors">
                  info@ppmilan.in
                </a>
              </div>

              {/* Google Play Store Badge */}
              <div className="pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ppm.agsolutions&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 hover:bg-black text-white rounded-lg border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all hover:scale-105 shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.364-.61-.884-.61-1.464V3.278c0-.58.244-1.1.609-1.464zm11.24 11.244l2.585 2.585-11.75 6.786 9.165-9.371zm0-2.116L5.684 1.571l11.75 6.786-2.585 2.585zm1.488 1.058l3.704 2.139c.854.493.854 1.299 0 1.792l-3.704 2.139-2.032-2.032 2.032-2.038z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[7.5px] uppercase tracking-wider text-neutral-300 block">Get it on</span>
                    <span className="text-[11px] font-bold text-white block mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            SLIM BOTTOM ROW: COPYRIGHT & DESIGN ATTRIBUTION
           ======================================================== */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#BFAEA7]">
          <p>© 2026 PP Milan. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 font-medium">
              <span>Designed with</span>
              <span className="text-[#E11D48] text-xs">❤️</span>
              <a
                href="https://ag-solutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3E5AB] transition-colors underline decoration-[#D4AF37]/60 underline-offset-2 hover:decoration-[#F3E5AB]"
              >
                AG Solutions
              </a>
            </p>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#2A020B] text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20"
              title="Back to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}
