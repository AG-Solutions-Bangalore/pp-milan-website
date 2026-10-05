import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PPMilanIntro from '../components/PPMilanIntro';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Category from '../components/Category';
import Features from '../components/Features';
import AppSection from '../components/AppSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2626] relative font-sans selection:bg-[#9F1239] selection:text-white">
      {/* Optional Cinematic Intro Overlay if triggered */}
      {showIntro && <PPMilanIntro onComplete={handleIntroComplete} />}

      {/* Header / Navbar */}
      <Navbar onReplayWelcome={handleReplayIntro} />

      {/* Main Landing Sections matching exact mockup structure */}
      <main>
        {/* 1. Hero Section */}
        <Hero onReplayWelcome={handleReplayIntro} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Category Section */}
        <Category />

        {/* 4. Features Section */}
        <Features />

        {/* 5. Mobile App Section */}
        <AppSection />

        {/* 6. FAQ Section */}
        <FAQ />
      </main>

      {/* 8. Royal Maroon Footer seamlessly meeting FAQ section */}
      <div className="-mt-6 sm:-mt-8 lg:-mt-10 relative z-30">
        <Footer />
      </div>
    </div>
  );
}
