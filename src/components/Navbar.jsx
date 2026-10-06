import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import logoImg from '../assets/PPMilan_logo.png';

export default function Navbar({ onReplayWelcome }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isRegistrationPage = location.pathname === '/registration';

  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveSection('contact');
      return;
    }

    if (location.pathname === '/registration') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on home page
      const sections = ['home', 'about', 'category', 'features', 'faq'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    if (id === 'contact') {
      navigate('/contact');
      return;
    }
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'category', label: 'Category' },
    { id: 'features', label: 'Features' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md py-3 shadow-md border-b border-[#F0E6D8]'
          : 'bg-[#FFFDF9]/90 backdrop-blur-sm py-4 border-b border-[#F0E6D8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            {/* Logo Emblem */}
            <img 
              src={logoImg} 
              alt="PP Milan Logo" 
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0" 
            />
            
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#2A1D1D] leading-none">
                PP MILAN
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-[#8B1538] uppercase mt-0.5">
                Pandith Prajapati Milan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[13.5px] font-semibold transition-all relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#9F1239]'
                      : 'text-[#4A3E3E] hover:text-[#9F1239]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9F1239] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Button */}
            {/* <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C4D4D] hover:text-[#9F1239] hover:bg-[#F4ECE1] transition-colors cursor-pointer"
                title="Search profiles"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-11 w-72 bg-white rounded-2xl shadow-xl border border-cream-300 p-2 z-50">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2] rounded-xl border border-cream-300">
                    <Search className="w-4 h-4 text-charcoal-500" />
                    <input
                      type="text"
                      placeholder="Search groom, bride, city..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs focus:outline-none text-charcoal-800"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div> */}

            {/* Submit Bio-Data / Back Button */}
            {isRegistrationPage ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white -text bg-maroon-900 hover:bg-[#881337] rounded-full shadow-md shadow-[#9F1239]/20 hover:shadow-lg hover:shadow-[#9F1239]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            ) : (
              <Link
                to="/registration"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#9F1239] hover:bg-[#881337] rounded-full shadow-md shadow-[#9F1239]/20 hover:shadow-lg hover:shadow-[#9F1239]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Submit Bio-Data</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div> 

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {isRegistrationPage ? (
              <Link
                to="/"
                className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-[#9F1239] hover:bg-[#881337] text-white whitespace-nowrap shrink-0 transition-colors shadow-xs inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back</span>
              </Link>
            ) : (
              <Link
                to="/registration"
                className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-[#9F1239] hover:bg-[#881337] text-white whitespace-nowrap shrink-0 transition-colors shadow-xs"
              >
                Submit Bio-Data
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#4A3E3E] hover:bg-[#F4ECE1] transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#9F1239]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A3E3E]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F0E6D8] px-6 py-6 transition-all duration-300 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm font-semibold py-2 border-b border-[#F5EDE1] ${
                  activeSection === item.id ? 'text-[#9F1239]' : 'text-[#4A3E3E]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3">
              {isRegistrationPage ? (
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#9F1239] hover:bg-[#881337] rounded-full shadow-md flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              ) : (
                <Link
                  to="/registration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#9F1239] hover:bg-[#881337] rounded-full shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Bio-Data</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
