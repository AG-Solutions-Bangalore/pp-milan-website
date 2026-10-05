import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2 
} from 'lucide-react';
import contactBgBanner from '../assets/contact_banner_bg.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      id: 'office',
      title: 'OUR OFFICE',
      lines: ['Bengaluru, Karnataka', 'India'],
      icon: MapPin,
      action: 'https://maps.google.com/?q=Bengaluru,Karnataka,India'
    },
    {
      id: 'call',
      title: 'CALL US',
      lines: ['+91 98765 43210', '+91 98765 43211'],
      icon: Phone,
      action: 'tel:+919876543210'
    },
    {
      id: 'email',
      title: 'EMAIL US',
      lines: ['support@ppmilan.in', 'info@ppmilan.in'],
      icon: Mail,
      action: 'mailto:support@ppmilan.in'
    }
  ];

  return (
    <section 
      id="contact-page-section" 
      className="pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-20 relative overflow-hidden select-none flex-1 flex flex-col justify-center bg-no-repeat bg-cover bg-[position:center_15%]"
      style={{ backgroundImage: `url(${contactBgBanner})` }}
    >
      {/* Soft warm overlay for perfect text contrast on smaller screens */}
      <div className="absolute inset-0 bg-[#FFFDF9]/40 sm:bg-transparent pointer-events-none z-0" />

      {/* Subtle dark gradient overlay at bottom for elegant depth leading into the footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#1F040A]/50 via-[#1F040A]/20 to-transparent pointer-events-none z-10" />

      {/* Floating Rose Petals Layer with Framer Motion */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
        {/* Petal 1 */}
        <motion.div 
          animate={{ y: [0, 16, 0], x: [0, 5, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute left-[40%] top-[14%] w-6 h-4"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-2xs">
            <path d="M5 10 C5 2, 22 2, 28 8 C30 16, 12 18, 5 10 Z" fill="#F43F5E" opacity="0.9" />
          </svg>
        </motion.div>

        {/* Petal 2 */}
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -4, 0], rotate: [-8, 18, -8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
          className="absolute left-[12%] top-[54%] w-6 h-4"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-2xs">
            <path d="M4 12 C2 4, 18 2, 27 6 C29 14, 15 19, 4 12 Z" fill="#E11D48" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Petal 3 */}
        <motion.div 
          animate={{ y: [0, 15, 0], x: [0, 6, 0], rotate: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.4 }}
          className="absolute left-[38%] bottom-[12%] w-6 h-4"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-2xs">
            <path d="M6 10 C5 2, 22 3, 26 9 C28 17, 14 18, 6 10 Z" fill="#F43F5E" opacity="0.88" />
          </svg>
        </motion.div>

        {/* Petal 4 */}
        <motion.div 
          animate={{ y: [0, 16, 0], x: [0, -4, 0], rotate: [-10, 14, -10] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 }}
          className="absolute left-[66%] bottom-[8%] w-6 h-4"
        >
          <svg viewBox="0 0 30 20" fill="none" className="w-full h-full drop-shadow-2xs">
            <path d="M5 10 C5 2, 22 2, 28 8 C30 16, 12 18, 5 10 Z" fill="#FB7185" opacity="0.92" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-20 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Header & 3 Horizontal Contact Cards
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-10 xl:pl-16">
            
            {/* Header: Tag Pill, Heart Divider */}
            <div className="flex items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 border border-[#E8DED8] text-[11px] font-bold tracking-wider uppercase text-[#9F1239] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F1239]"></span>
                <span>CONTACT US</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[#D4AF37]">
                <span className="w-7 h-[1px] bg-[#D4AF37]/60"></span>
                <span className="text-xs">♡</span>
                <span className="w-7 h-[1px] bg-[#D4AF37]/60"></span>
              </div>
            </div>

            {/* Main Heading: Get in Touch */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1E1B18] tracking-tight leading-tight mb-2">
              Get in <span className="text-[#9F1239]">Touch</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-[#554444] leading-relaxed max-w-sm mb-5">
              We'd love to hear from you. Reach out to us for any queries, suggestions or support.
            </p>

            {/* 3 Contact Cards */}
            <div className="flex flex-col space-y-3 sm:space-y-3.5 max-w-[410px]">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.id}
                    href={card.action}
                    target={card.id === 'office' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-[#F1E8E2] shadow-sm hover:shadow-md hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Ornate Scalloped Medallion Badge */}
                      <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full text-[#D4AF37] opacity-85 group-hover:rotate-45 transition-transform duration-700">
                          <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                          <path d="M50 4 C60 18 68 22 82 18 C78 32 82 40 96 50 C82 60 78 68 82 82 C68 78 60 82 50 96 C40 82 32 78 18 82 C22 68 18 60 4 50 C18 40 22 32 18 18 C32 22 40 18 50 4 Z" fill="#FFF1F4" stroke="#F43F5E" strokeWidth="1" opacity="0.65" />
                        </svg>
                        
                        <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFE4E8] to-white border border-[#FDA4AF] flex items-center justify-center text-[#9F1239] shadow-inner">
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div>
                        <span className="text-[10.5px] font-bold tracking-wider text-[#9F1239] uppercase block mb-0.5">
                          {card.title}
                        </span>
                        {card.lines.map((line, idx) => (
                          <p key={idx} className="text-xs sm:text-[12.5px] font-semibold text-[#2D2626] leading-snug">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Circular Chevron Arrow Button */}
                    <div className="w-7 h-7 rounded-full bg-[#FFF5F7] border border-[#FCE7EB] text-[#9F1239] flex items-center justify-center group-hover:bg-[#9F1239] group-hover:text-white transition-all shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </a>
                );
              })}
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Royal Gold-Framed Contact Form Card
             ======================================================== */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[510px] bg-white/95 backdrop-blur-xs rounded-3xl border-2 border-[#D4AF37]/50 shadow-[0_15px_45px_rgba(212,175,55,0.12)] p-6 sm:p-7">
              
              {/* Royal Gold Filigree Tiara / Crest at Top Center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-none select-none">
                <svg viewBox="0 0 160 30" fill="none" className="w-28 sm:w-32 h-auto text-[#D4AF37]">
                  <path d="M80,2 C75,10 65,14 50,14 C60,18 70,22 80,28 C90,22 100,18 110,14 C95,14 85,10 80,2 Z" fill="#D4AF37" opacity="0.9" />
                  <circle cx="80" cy="5" r="2.2" fill="#9F1239" />
                  <circle cx="68" cy="14" r="1.6" fill="#9F1239" />
                  <circle cx="92" cy="14" r="1.6" fill="#9F1239" />
                  <path d="M30,18 C45,16 60,14 80,14 C100,14 115,16 130,18" stroke="#D4AF37" strokeWidth="1.2" />
                </svg>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#1E1B18]">Message Sent Successfully!</h3>
                  <p className="text-xs text-[#5A4E4D] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to PP Milan. Our dedicated team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-3 px-5 py-2 rounded-full bg-[#9F1239] hover:bg-[#881337] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                  
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Full Name */}
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 w-6 h-6 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center pointer-events-none">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239] text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 w-6 h-6 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center pointer-events-none">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239] text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Mobile Number */}
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 w-6 h-6 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center pointer-events-none">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239] text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs"
                    />
                  </div>

                  {/* Row 3: Your Message */}
                  <div className="relative flex">
                    <div className="absolute left-3.5 top-3 w-6 h-6 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center pointer-events-none">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239] text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs resize-none"
                    />
                  </div>

                  {/* Submit Button with Gold Dividers */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <span className="hidden sm:flex items-center gap-1.5 text-[#D4AF37]">
                      <span className="w-10 h-[1px] bg-[#D4AF37]/60"></span>
                      <span className="text-xs">♡</span>
                    </span>

                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#9F1239] via-[#BE123C] to-[#9F1239] hover:from-[#881337] hover:to-[#BE123C] text-white text-xs sm:text-[13px] font-semibold py-2.5 px-8 sm:px-10 rounded-full shadow-lg shadow-[#9F1239]/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="hidden sm:flex items-center gap-1.5 text-[#D4AF37]">
                      <span className="text-xs">♡</span>
                      <span className="w-10 h-[1px] bg-[#D4AF37]/60"></span>
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
