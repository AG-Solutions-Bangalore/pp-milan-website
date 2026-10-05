import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Heart, User, Briefcase, Users, Sun, FileText, Upload, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, AlertCircle, Camera, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Registration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState({});

  // Form State
  const [formData, setFormData] = useState({
    // Personal
    fullName: '',
    gender: 'Male',
    dob: '',
    age: '',
    height: "5' 8\"",
    currentLocation: '',
    nativePlace: '',
    
    // Professional
    education: '',
    profession: '',
    company: '',
    incomeRange: '10 - 15 LPA',

    // Family
    fatherName: '',
    motherName: '',
    familyDetails: '',
    community: 'Prajapati',
    gothra: '',

    // Preferences
    preferredAge: '24 - 28',
    preferredLocation: 'Bengaluru / Anywhere',
    educationPreference: 'Graduate / Post Graduate',
    professionPreference: 'Software / Professional / Business',

    // Horoscope
    rashi: '',
    nakshatra: '',
    manglikStatus: 'Non-Manglik',

    // Contact
    phone: '',
    email: '',

    // Files
    photoFile: null,
    photoPreview: null,
    bioDataFile: null,
    bioDataName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photoFile: file,
        photoPreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleBioDataUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        bioDataFile: file,
        bioDataName: file.name
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
      if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.email.trim()) newErrors.email = "Email address is required";
    } else if (step === 2) {
      if (!formData.education.trim()) newErrors.education = "Education detail is required";
      if (!formData.profession.trim()) newErrors.profession = "Profession detail is required";
      if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
      if (!formData.gothra.trim()) newErrors.gothra = "Gothra is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      const generatedId = "PPM-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedId);
      setSubmitted(true);
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-charcoal-800 flex flex-col justify-between">
      
      {/* Registration Header Bar */}
      <header className="bg-maroon-950 text-white border-b border-gold-500/30 py-4 px-4 sm:px-8 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-maroon-900 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold-400 fill-gold-400/20" />
              </div>
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wider text-white block">PPM</span>
              <span className="text-[10px] text-cream-200 tracking-wider font-light">Pandith Prajapati Milan</span>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-gold-300 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 sm:py-12">
        
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-maroon-800 font-semibold text-xs uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Official Matrimonial Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-maroon-900">
            Submit Your <span className="gold-gradient-text italic font-normal">Bio-Data</span>
          </h1>
          <p className="text-sm text-charcoal-700 mt-2 font-light max-w-lg mx-auto">
            Fill in your authentic candidate profile below. Your data will be manually reviewed by Pandith Prajapati Milan coordinators for privacy and security.
          </p>
        </div>

        {submitted ? (
          /* SUCCESS STATE CONFIRMATION VOUCHER */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-gold-400 shadow-2xl text-center space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif font-bold text-gold-600 uppercase tracking-widest bg-gold-400/20 px-3 py-1 rounded-full border border-gold-500/30">
                Registration Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-900">
                Bio-Data Submitted Successfully!
              </h2>
              <p className="text-sm text-charcoal-700 max-w-md mx-auto font-light">
                Thank you, <span className="font-bold text-maroon-900">{formData.fullName}</span>. Your matrimonial profile has been received and logged under reference code:
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 rounded-2xl bg-maroon-950 text-gold-300 font-mono text-xl sm:text-2xl font-bold tracking-widest max-w-xs mx-auto border border-gold-400/40 shadow-inner">
              {refId}
            </div>

            {/* Candidate Summary Box */}
            <div className="bg-cream-100 p-6 rounded-2xl border border-cream-300 max-w-xl mx-auto text-left text-xs space-y-3">
              <h4 className="font-bold text-maroon-900 font-serif text-sm border-b border-cream-300 pb-2">Candidate Registration Details</h4>
              <div className="grid grid-cols-2 gap-2">
                <p><span className="text-charcoal-600 font-medium">Candidate Name:</span> <strong className="text-charcoal-900">{formData.fullName}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Gender:</span> <strong className="text-charcoal-900">{formData.gender}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Community:</span> <strong className="text-gold-600">{formData.community}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Gothra:</span> <strong className="text-gold-600">{formData.gothra || 'N/A'}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Phone:</span> <strong className="text-charcoal-900">{formData.phone}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Email:</span> <strong className="text-charcoal-900">{formData.email}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Location:</span> <strong className="text-charcoal-900">{formData.currentLocation}</strong></p>
                <p><span className="text-charcoal-600 font-medium">Bio-Data File:</span> <strong className="text-emerald-700">{formData.bioDataName || 'Uploaded'}</strong></p>
              </div>
            </div>

            <p className="text-xs text-charcoal-600 max-w-md mx-auto">
              Our coordinator will contact you at <span className="font-semibold text-maroon-900">{formData.phone}</span> within 24–48 hours after background verification.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-maroon-900 text-gold-300 text-sm font-bold shadow-md hover:bg-maroon-800 transition-colors cursor-pointer"
              >
                Return to Home Page
              </button>
            </div>
          </div>
        ) : (
          /* FORM INTERFACE WITH STEP INDICATOR */
          <div className="bg-white rounded-3xl border border-gold-400/30 shadow-elevated overflow-hidden">
            
            {/* Step Progress Bar */}
            <div className="bg-maroon-950 text-white p-4 sm:p-6 border-b border-gold-500/30">
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                
                {/* Step 1 */}
                <div className={`flex flex-col items-center gap-1.5 ${currentStep >= 1 ? 'text-gold-300 font-bold' : 'text-cream-300/60'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep >= 1 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'}`}>
                    1
                  </div>
                  <span className="hidden sm:inline">Personal & Contact</span>
                </div>

                {/* Step 2 */}
                <div className={`flex flex-col items-center gap-1.5 ${currentStep >= 2 ? 'text-gold-300 font-bold' : 'text-cream-300/60'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep >= 2 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'}`}>
                    2
                  </div>
                  <span className="hidden sm:inline">Career & Family</span>
                </div>

                {/* Step 3 */}
                <div className={`flex flex-col items-center gap-1.5 ${currentStep >= 3 ? 'text-gold-300 font-bold' : 'text-cream-300/60'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep >= 3 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'}`}>
                    3
                  </div>
                  <span className="hidden sm:inline">Preferences & Horoscope</span>
                </div>

                {/* Step 4 */}
                <div className={`flex flex-col items-center gap-1.5 ${currentStep >= 4 ? 'text-gold-300 font-bold' : 'text-cream-300/60'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep >= 4 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'}`}>
                    4
                  </div>
                  <span className="hidden sm:inline">Photo & Documents</span>
                </div>

              </div>
            </div>

            {/* Form Step Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              
              {/* STEP 1: Personal & Contact */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <User className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">Step 1: Personal & Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Candidate's Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                      >
                        <option value="Male">Male (Groom Candidate)</option>
                        <option value="Female">Female (Bride Candidate)</option>
                      </select>
                    </div>

                    {/* DOB */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.dob ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      />
                      {errors.dob && <p className="text-[11px] text-red-600 mt-1">{errors.dob}</p>}
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Age (Years)
                      </label>
                      <input
                        type="number"
                        name="age"
                        placeholder="e.g. 28"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Height */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Height
                      </label>
                      <select
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                      >
                        <option>5' 2"</option>
                        <option>5' 4"</option>
                        <option>5' 6"</option>
                        <option>5' 8"</option>
                        <option>5' 10"</option>
                        <option>6' 0"</option>
                        <option>6' 2"+</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Current City / Location *
                      </label>
                      <input
                        type="text"
                        name="currentLocation"
                        placeholder="e.g. Bengaluru, Karnataka"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.currentLocation ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.currentLocation && <p className="text-[11px] text-red-600 mt-1">{errors.currentLocation}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="candidate@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 2: Career & Family */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <Briefcase className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">Step 2: Professional & Family Background</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Education */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Highest Qualification *
                      </label>
                      <input
                        type="text"
                        name="education"
                        placeholder="e.g. B.E / B.Tech, MBA, MBBS, M.Tech"
                        value={formData.education}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.education ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.education && <p className="text-[11px] text-red-600 mt-1">{errors.education}</p>}
                    </div>

                    {/* Profession */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Profession / Job Title *
                      </label>
                      <input
                        type="text"
                        name="profession"
                        placeholder="e.g. Senior Software Engineer"
                        value={formData.profession}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.profession ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.profession && <p className="text-[11px] text-red-600 mt-1">{errors.profession}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. Tech Corp / Private Limited"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Income */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Annual Income Range
                      </label>
                      <select
                        name="incomeRange"
                        value={formData.incomeRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                      >
                        <option>5 - 8 LPA</option>
                        <option>8 - 12 LPA</option>
                        <option>12 - 18 LPA</option>
                        <option>18 - 25 LPA</option>
                        <option>25+ LPA</option>
                      </select>
                    </div>

                    {/* Father Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Father's Name *
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        placeholder="Father's Full Name"
                        value={formData.fatherName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.fatherName ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.fatherName && <p className="text-[11px] text-red-600 mt-1">{errors.fatherName}</p>}
                    </div>

                    {/* Mother Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        placeholder="Mother's Full Name"
                        value={formData.motherName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Native Place */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Native Place / Hometown
                      </label>
                      <input
                        type="text"
                        name="nativePlace"
                        placeholder="e.g. Hubballi, Karnataka"
                        value={formData.nativePlace}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Gothra */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Gothra *
                      </label>
                      <input
                        type="text"
                        name="gothra"
                        placeholder="e.g. Kasyapa, Vatsa, Bharadwaja"
                        value={formData.gothra}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.gothra ? 'border-red-500' : 'border-cream-300'} text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.gothra && <p className="text-[11px] text-red-600 mt-1">{errors.gothra}</p>}
                    </div>

                  </div>

                  {/* Family Details Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Family Background Summary
                    </label>
                    <textarea
                      name="familyDetails"
                      rows={3}
                      placeholder="Brief details about siblings, family values, and traditions..."
                      value={formData.familyDetails}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 3: Preferences & Horoscope */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <Sun className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">Step 3: Matrimonial Preferences & Horoscope</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Preferred Age Range */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Preferred Partner Age Range
                      </label>
                      <input
                        type="text"
                        name="preferredAge"
                        placeholder="e.g. 24 - 28 years"
                        value={formData.preferredAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Preferred Location */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Preferred Partner Location
                      </label>
                      <input
                        type="text"
                        name="preferredLocation"
                        placeholder="e.g. Bengaluru / Karnataka"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Education Preference */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Education Preference
                      </label>
                      <input
                        type="text"
                        name="educationPreference"
                        placeholder="e.g. Engineering / Medical / Post Graduate"
                        value={formData.educationPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Profession Preference */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Profession Preference
                      </label>
                      <input
                        type="text"
                        name="professionPreference"
                        placeholder="e.g. Working Professional / Business"
                        value={formData.professionPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Rashi */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Rashi (Moon Sign)
                      </label>
                      <input
                        type="text"
                        name="rashi"
                        placeholder="e.g. Vrishabha, Mesha, Simha"
                        value={formData.rashi}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Nakshatra */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Nakshatra (Birth Star)
                      </label>
                      <input
                        type="text"
                        name="nakshatra"
                        placeholder="e.g. Rohini, Ashwini"
                        value={formData.nakshatra}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Manglik Status */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Manglik Status
                      </label>
                      <select
                        name="manglikStatus"
                        value={formData.manglikStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                      >
                        <option value="Non-Manglik">Non-Manglik</option>
                        <option value="Manglik">Manglik</option>
                        <option value="Partial Manglik">Partial / Anshik Manglik</option>
                        <option value="Don't Know">Don't Know / To Be Calculated</option>
                      </select>
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 4: Uploads & Review */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <FileText className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">Step 4: Upload Profile Photo & Bio-Data Document</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Photo Upload Card */}
                    <div className="p-6 rounded-2xl bg-cream-100 border-2 border-dashed border-gold-400/50 text-center flex flex-col items-center justify-center space-y-3">
                      {formData.photoPreview ? (
                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-md">
                          <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, photoFile: null, photoPreview: null }))}
                            className="absolute top-1 right-1 bg-maroon-900 text-white rounded-full p-1 text-[10px]"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gold-400/20 text-maroon-900 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-maroon-800" />
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-bold text-maroon-900">Upload Profile Photo</p>
                        <p className="text-[11px] text-charcoal-600 mt-0.5">JPEG/PNG format (Max 5MB)</p>
                      </div>

                      <label className="px-4 py-2 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 cursor-pointer shadow-sm">
                        <span>{formData.photoPreview ? 'Change Photo' : 'Browse Photo'}</span>
                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                      </label>
                    </div>

                    {/* Bio-Data Document Upload Card */}
                    <div className="p-6 rounded-2xl bg-cream-100 border-2 border-dashed border-gold-400/50 text-center flex flex-col items-center justify-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-maroon-900/10 text-maroon-900 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-maroon-800" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-maroon-900">Upload Full Bio-Data File</p>
                        <p className="text-[11px] text-charcoal-600 mt-0.5">PDF or DOCX document format</p>
                        {formData.bioDataName && (
                          <p className="text-xs font-bold text-emerald-700 mt-1">✓ File: {formData.bioDataName}</p>
                        )}
                      </div>

                      <label className="px-4 py-2 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 cursor-pointer shadow-sm">
                        <span>{formData.bioDataName ? 'Change File' : 'Browse Bio-Data File'}</span>
                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleBioDataUpload} className="hidden" />
                      </label>
                    </div>

                  </div>

                  {/* Privacy Checkbox */}
                  <div className="p-4 rounded-xl bg-gold-400/10 border border-gold-500/30 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-charcoal-700 leading-relaxed">
                      By submitting your bio-data, you confirm that the details provided belong to an authentic candidate and agree to Pandith Prajapati Milan's family privacy verification guidelines.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Button Footer */}
              <div className="mt-8 pt-6 border-t border-cream-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-cream-300 text-charcoal-800 text-xs font-semibold hover:bg-cream-100 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 shadow-md cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-maroon-950 text-sm font-bold shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <span>Submit Bio-Data Now</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
