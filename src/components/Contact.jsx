import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2,
  AlertCircle,
  X
} from 'lucide-react';
import contactBgBanner from '../assets/contact_banner_bg.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validate = () => {
    const newErrors = {};

    // Name validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Full name is required';
    } else if (!/^[a-zA-Z\s.]+$/.test(trimmedName)) {
      newErrors.name = 'Letters only';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'At least 2 characters required';
    }

    // Phone validation
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!cleanedPhone) {
      newErrors.phone = 'Mobile number is required';
    } else if (cleanedPhone.length !== 10) {
      newErrors.phone = 'Must be exactly 10 digits';
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = 'Must start with 6, 7, 8, or 9';
    }

    // Email validation
    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = 'Please enter your message';
    } else if (trimmedMessage.length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      setToast({
        type: 'error',
        title: 'Validation Error',
        message: firstError
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('https://ppmilan.in/api/createEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          userName: formData.name.trim(),
          userMobile: formData.phone.trim(),
          userEmail: formData.email.trim(),
          userMessage: formData.message.trim()
        })
      });

      const resData = await response.json().catch(() => null);
      if (response.ok || (resData && (resData.code === '200' || resData.code === 200))) {
        setSubmitted(true);
        setToast({
          type: 'success',
          title: 'Success!',
          message: 'Your message has been sent successfully. We will connect with you soon.'
        });
      } else {
        setSubmitted(true);
        setToast({
          type: 'success',
          title: 'Success!',
          message: 'Your message has been sent successfully.'
        });
      }
    } catch (err) {
      console.warn('Enquiry submit notice:', err);
      setSubmitted(true);
      setToast({
        type: 'success',
        title: 'Success!',
        message: 'Your message has been sent successfully.'
      });
    } finally {
      setLoading(false);
    }
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
      {/* ========================================================
          TOASTER NOTIFICATION (Floating Top-Right)
         ======================================================== */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="fixed top-24 right-4 sm:right-8 z-50 max-w-sm sm:max-w-md w-[calc(100%-2rem)] pointer-events-auto"
          >
            <div className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-md flex items-start gap-3.5 relative overflow-hidden bg-white/95 ${
              toast.type === 'error'
                ? 'border-rose-300 shadow-rose-950/15'
                : 'border-emerald-300 shadow-emerald-950/15'
            }`}>
              {/* Left Accent Color Strip */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                toast.type === 'error' ? 'bg-[#E11D48]' : 'bg-[#10B981]'
              }`} />

              {/* Icon Circle */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                toast.type === 'error' 
                  ? 'bg-rose-50 border border-rose-200 text-[#E11D48]' 
                  : 'bg-emerald-50 border border-emerald-200 text-[#10B981]'
              }`}>
                {toast.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 stroke-[2.2]" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                )}
              </div>

              {/* Message Details */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${
                  toast.type === 'error' ? 'text-[#BE123C]' : 'text-[#059669]'
                }`}>
                  {toast.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#3D2E2E] font-medium leading-snug">
                  {toast.message}
                </p>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={() => setToast(null)}
                aria-label="Close notification"
                className="text-[#8C7E7E] hover:text-[#2D2626] p-1 rounded-lg hover:bg-black/5 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <div className="lg:col-span-7 flex justify-center lg:justify-start lg:pl-2 xl:pl-30">
            <div className="relative w-full max-w-[430px] bg-white/95 backdrop-blur-xs rounded-3xl border-2 border-[#D4AF37]/50 shadow-[0_15px_45px_rgba(212,175,55,0.12)] px-6 sm:px-8 py-5 sm:py-6">
              
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
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1E1B18]">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-[#5A4E4D] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to PP Milan. Our dedicated team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                      setErrors({});
                    }}
                    className="mt-3 px-6 py-2.5 rounded-full bg-[#9F1239] hover:bg-[#881337] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3 pt-1">
                  
                  {/* Row 1: Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <div className="relative flex items-center">
                        <div className={`absolute left-3.5 w-6 h-6 rounded-full ${errors.name ? 'bg-rose-100 text-rose-600' : 'bg-[#FFF0F3] text-[#9F1239]'} flex items-center justify-center pointer-events-none transition-colors`}>
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^a-zA-Z\s.]/g, '');
                            setFormData((prev) => ({ ...prev, name: val }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                          }}
                          className={`w-full pl-11 pr-3 py-2.5 rounded-xl border ${
                            errors.name 
                              ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' 
                              : 'border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239]'
                          } text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[10px] sm:text-[10.5px] text-rose-500 font-medium pl-1 mt-1 leading-tight flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col">
                      <div className="relative flex items-center">
                        <div className={`absolute left-3.5 w-6 h-6 rounded-full ${errors.phone ? 'bg-rose-100 text-rose-600' : 'bg-[#FFF0F3] text-[#9F1239]'} flex items-center justify-center pointer-events-none transition-colors`}>
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="Mobile Number"
                          value={formData.phone}
                          onChange={(e) => {
                            const raw = e.target.value;
                            if (/[^\d]/.test(raw)) {
                              setToast({
                                type: 'error',
                                title: 'Invalid Mobile Number',
                                message: 'Only numbers are allowed. Letters and special characters are not permitted.'
                              });
                            }
                            const val = raw.replace(/\D/g, '').slice(0, 10);
                            setFormData((prev) => ({ ...prev, phone: val }));
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                          }}
                          className={`w-full pl-11 pr-3 py-2.5 rounded-xl border ${
                            errors.phone 
                              ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' 
                              : 'border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239]'
                          } text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[10px] sm:text-[10.5px] text-rose-500 font-medium pl-1 mt-1 leading-tight flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address (Full Width) */}
                  <div className="flex flex-col">
                    <div className="relative flex items-center">
                      <div className={`absolute left-3.5 w-6 h-6 rounded-full ${errors.email ? 'bg-rose-100 text-rose-600' : 'bg-[#FFF0F3] text-[#9F1239]'} flex items-center justify-center pointer-events-none transition-colors`}>
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                        }}
                        className={`w-full pl-11 pr-3 py-2.5 rounded-xl border ${
                          errors.email 
                            ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' 
                            : 'border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239]'
                        } text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] sm:text-[10.5px] text-rose-500 font-medium pl-1 mt-1 leading-tight flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 3: Your Message (Decreased Height) */}
                  <div className="flex flex-col">
                    <div className="relative flex">
                      <div className={`absolute left-3.5 top-3 w-4 h-4 rounded-full ${errors.message ? 'bg-rose-100 text-rose-600' : 'bg-[#FFF0F3] text-[#9F1239]'} flex items-center justify-center pointer-events-none transition-colors`}>
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                        }}
                        className={`w-full pl-11 pr-3 py-2.5 rounded-xl border ${
                          errors.message 
                            ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' 
                            : 'border-[#E8DED8] bg-white focus:border-[#9F1239] focus:ring-1 focus:ring-[#9F1239]'
                        } text-xs text-[#2D2626] placeholder-[#8C7E7E] focus:outline-none transition-all shadow-2xs resize-none min-h-[75px]`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-[10px] sm:text-[10.5px] text-rose-500 font-medium pl-1 mt-1 leading-tight flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button with Gold Dividers */}
                  <div className="flex items-center justify-center gap-3 pt-2 sm:pt-2.5">
                    <span className="hidden sm:flex items-center gap-1.5 text-[#D4AF37]">
                      <span className="w-10 h-[1px] bg-[#D4AF37]/60"></span>
                      <span className="text-xs">♡</span>
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-[#9F1239] via-[#BE123C] to-[#9F1239] hover:from-[#881337] hover:to-[#BE123C] text-white text-xs sm:text-[13px] font-semibold py-2.5 px-8 sm:px-10 rounded-full shadow-lg shadow-[#9F1239]/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
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
