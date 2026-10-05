import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2626] relative font-sans selection:bg-[#9F1239] selection:text-white flex flex-col">
      {/* Navbar Header */}
      <Navbar />

      {/* Main Contact Us Hero Section */}
      <main className="flex-1 flex flex-col">
        <Contact />
      </main>

      {/* Royal Maroon Curved Footer seamlessly overlapping bottom of contact section */}
      <div className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-30">
        <Footer />
      </div>
    </div>
  );
}
