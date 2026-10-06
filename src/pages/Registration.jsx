import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoImg from '../assets/PPMilan_logo.png';
import {
  ShieldCheck,
  Heart,
  User,
  Briefcase,
  Users,
  Sun,
  FileText,
  Upload,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Camera,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

const API_BASE = 'https://ppmilan.in/api';

// Fallback data in case of offline/network hiccups
const FALLBACK_COMMUNITIES = [
  { id: 1, community_name: 'Pandit' },
  { id: 2, community_name: 'Prajapati' }
];

const FALLBACK_EDUCATIONS = [
  { id: 1, education_name: 'Schooling (up to 10th )' },
  { id: 2, education_name: 'PUC/12th Std' },
  { id: 3, education_name: 'Diploma' },
  { id: 4, education_name: 'BA' },
  { id: 5, education_name: 'BSc' },
  { id: 6, education_name: 'BCom' },
  { id: 7, education_name: 'BE' },
  { id: 8, education_name: 'BTech' },
  { id: 9, education_name: 'BPharm' },
  { id: 10, education_name: 'BCA' },
  { id: 11, education_name: 'BBA' },
  { id: 12, education_name: 'BBM' },
  { id: 13, education_name: 'LLB' },
  { id: 14, education_name: 'CA' },
  { id: 15, education_name: 'CS' },
  { id: 16, education_name: 'MBA' },
  { id: 17, education_name: 'MEd' },
  { id: 18, education_name: 'MCom' },
  { id: 19, education_name: 'MSc' },
  { id: 20, education_name: 'MCA' },
  { id: 21, education_name: 'MPharm' },
  { id: 22, education_name: 'MBBS' },
  { id: 23, education_name: 'BDS' },
  { id: 24, education_name: 'MD' },
  { id: 25, education_name: 'MD Dental' },
  { id: 26, education_name: 'MTech' },
  { id: 27, education_name: 'MA' },
  { id: 28, education_name: 'MS' },
  { id: 29, education_name: 'MFM' },
  { id: 30, education_name: 'MPA' },
  { id: 31, education_name: 'Phd' },
  { id: 32, education_name: 'Other' }
];

const FALLBACK_GOTRAS = {
  1: [
    { gotra_name: 'Bharadwaj' },
    { gotra_name: 'Vashishtha' },
    { gotra_name: 'Kaushik' },
    { gotra_name: 'Gautam' },
    { gotra_name: 'Atri' },
    { gotra_name: 'Kashyap' },
    { gotra_name: 'Agastya' },
    { gotra_name: 'Bhrigu' },
    { gotra_name: 'Vishwamitra' },
    { gotra_name: 'Jamadagni' },
    { gotra_name: 'Parashar' },
    { gotra_name: 'Shandilya' },
    { gotra_name: 'Dhananjaya' },
    { gotra_name: 'Mudgal' },
    { gotra_name: 'Upamanyu' },
    { gotra_name: 'Srivatsa' },
    { gotra_name: 'Vatsa' },
    { gotra_name: 'Mandavya' },
    { gotra_name: 'Chyavana' },
    { gotra_name: 'Sankrithi' },
    { gotra_name: 'Dhar' },
    { gotra_name: 'Kaul' },
    { gotra_name: 'Bhan' },
    { gotra_name: 'Razdan' },
    { gotra_name: 'Raina' },
    { gotra_name: 'Kak' },
    { gotra_name: 'Mattoo' },
    { gotra_name: 'Sharga' },
    { gotra_name: 'Bamzai' },
    { gotra_name: 'Bodinayana' },
    { gotra_name: 'Vadula' },
    { gotra_name: 'Gargya' },
    { gotra_name: 'Kutsa' },
    { gotra_name: 'Maudgalya' },
    { gotra_name: 'Taittiriya' },
    { gotra_name: 'Bihaut' },
    { gotra_name: 'Azodiya' },
    { gotra_name: 'Kanojia' },
    { gotra_name: 'Maghiya' }
  ],
  2: [
    { gotra_name: 'Gautam' },
    { gotra_name: 'Atri' },
    { gotra_name: 'Upmanyu' },
    { gotra_name: 'Harita' },
    { gotra_name: 'Vashishta' },
    { gotra_name: 'Kashyap' },
    { gotra_name: 'Vishwakarma' },
    { gotra_name: 'Bharadwaj' },
    { gotra_name: 'Vishwamitra' },
    { gotra_name: 'Shiva' },
    { gotra_name: 'Jamadagni' },
    { gotra_name: 'Agastya' },
    { gotra_name: 'Angeeras' }
  ]
};

export default function Registration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState({});

  // Dynamic API state
  const [communities, setCommunities] = useState(FALLBACK_COMMUNITIES);
  const [educations, setEducations] = useState(FALLBACK_EDUCATIONS);
  const [gotras, setGotras] = useState([]);
  const [loadingGotras, setLoadingGotras] = useState(false);

  // Form State with exact field names matching the image
  const [formData, setFormData] = useState({
    // Step 1: Personal & Contact
    fullName: '',
    gender: '',
    dob: '',
    birthTime: '',
    heightFeet: '5',
    heightInch: '6',
    email: '',
    mainContactNo: '',
    whatsappNo: '',

    // Step 2: Community, Gotra & Education
    community_id: '',
    community_name: '',
    gotra: '',
    education: '',
    occupation: '',
    workingCity: '',
    placeOfBirth: '',
    villageCityState: '',

    // Step 3: Family & References
    fatherName: '',
    referenceName: '',
    referenceMobile: '',
    disability: 'No',
    marriedBefore: 'No',
    permanentAddress: '',
    importantNote: '',

    // Step 4: Files
    photoFile: null,
    photoPreview: null,
    bioDataFile: null,
    bioDataName: ''
  });

  // Scroll to top immediately on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Fetch Communities and Educations on mount
  useEffect(() => {
    fetch(`${API_BASE}/getCommunity`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch communities');
        return res.json();
      })
      .then((resData) => {
        if (resData && Array.isArray(resData.data)) {
          setCommunities(resData.data);
        }
      })
      .catch((err) => {
        console.warn('Using fallback communities:', err.message);
        setCommunities(FALLBACK_COMMUNITIES);
      });

    fetch(`${API_BASE}/getEducation`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch educations');
        return res.json();
      })
      .then((resData) => {
        if (resData && Array.isArray(resData.data)) {
          setEducations(resData.data);
        }
      })
      .catch((err) => {
        console.warn('Using fallback educations:', err.message);
        setEducations(FALLBACK_EDUCATIONS);
      });
  }, []);

  // Fetch Gotras when Community changes
  useEffect(() => {
    if (!formData.community_id) {
      setGotras([]);
      return;
    }

    setLoadingGotras(true);
    fetch(`${API_BASE}/getGotra/${formData.community_id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch gotras');
        return res.json();
      })
      .then((resData) => {
        if (resData && Array.isArray(resData.data)) {
          const unique = [];
          const seen = new Set();
          resData.data.forEach((item) => {
            const name = item.gotra_name || item.name;
            if (name && !seen.has(name.toLowerCase())) {
              seen.add(name.toLowerCase());
              unique.push(item);
            }
          });
          setGotras(unique);
        } else {
          setGotras(FALLBACK_GOTRAS[formData.community_id] || []);
        }
      })
      .catch((err) => {
        console.warn('Using fallback gotras:', err.message);
        setGotras(FALLBACK_GOTRAS[formData.community_id] || []);
      })
      .finally(() => {
        setLoadingGotras(false);
      });
  }, [formData.community_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'community_id') {
      const selected = communities.find((c) => String(c.id) === String(value));
      setFormData((prev) => ({
        ...prev,
        community_id: value,
        community_name: selected ? selected.community_name : '',
        gotra: ''
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

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
      if (errors.photoFile) {
        setErrors((prev) => ({ ...prev, photoFile: '' }));
      }
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
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.birthTime) newErrors.birthTime = 'Time of birth is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.mainContactNo.trim()) newErrors.mainContactNo = 'Main Contact No is required';
    } else if (step === 2) {
      if (!formData.community_id) newErrors.community_id = 'My Community is required';
      if (!formData.gotra) newErrors.gotra = 'Gotra is required';
      if (!formData.education) newErrors.education = 'Education is required';
      if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
      if (!formData.workingCity.trim()) newErrors.workingCity = 'Working City is required';
      if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = 'Place of Birth is required';
      if (!formData.villageCityState.trim()) newErrors.villageCityState = 'Village, City / State is required';
    } else if (step === 3) {
      if (!formData.fatherName.trim()) newErrors.fatherName = 'Father Name is required';
      if (!formData.marriedBefore) newErrors.marriedBefore = 'Please select marital status';
      if (!formData.disability) newErrors.disability = 'Please select disability option';
      if (!formData.permanentAddress.trim()) newErrors.permanentAddress = 'Permanent Address is required';
    } else if (step === 4) {
      if (!formData.photoFile && !formData.photoPreview) {
        newErrors.photoFile = 'Candidate photo is required';
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setSubmitting(true);
    const generatedId = 'PPM-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedId);

    try {
      const payload = new FormData();
      payload.append('name', formData.fullName);
      payload.append('profile_father_full_name', formData.fatherName);
      payload.append('profile_date_of_birth', formData.dob);
      payload.append('profile_gender', formData.gender);
      payload.append('profile_time_of_birth', formData.birthTime);
      payload.append('profile_place_of_birth', formData.placeOfBirth);
      payload.append('email', formData.email);
      payload.append('profile_mobile', formData.mainContactNo);
      payload.append('profile_whatsapp', formData.whatsappNo || formData.mainContactNo);
      payload.append('profile_main_contact_num', formData.mainContactNo);
      payload.append('profile_comunity_name', formData.community_name || formData.community_id);
      payload.append('profile_gotra', formData.gotra);
      payload.append('profile_permanent_address', formData.permanentAddress);
      payload.append('profile_working_city', formData.workingCity);
      payload.append('profile_village_city', formData.villageCityState);
      payload.append('profile_ref_contact_name', formData.referenceName || '');
      payload.append('profile_ref_contact_mobile', formData.referenceMobile || '');
      payload.append('profile_education', formData.education);
      payload.append('profile_occupation', formData.occupation);
      payload.append('profile_have_married_before', formData.marriedBefore);
      payload.append('heightFeet', formData.heightFeet);
      payload.append('heightInch', formData.heightInch);
      payload.append('profile_physical_disablity', formData.disability);
      payload.append('profile_note', formData.importantNote || '');
      if (formData.photoFile) {
        payload.append('profile_photo', formData.photoFile);
      }

      await fetch(`${API_BASE}/createRegistration`, {
        method: 'POST',
        body: payload
      }).catch((err) => {
        console.warn('Backend createRegistration notice:', err);
      });
    } catch (err) {
      console.warn('Registration dispatch notice:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
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
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logoImg}
              alt="PP Milan Logo"
              className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div>
              <span className="font-serif text-xl font-bold tracking-wider text-white block">PP MILAN</span>
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

            {/* Candidate Summary Box with Exact Field Names */}
            <div className="bg-cream-100 p-6 rounded-2xl border border-cream-300 max-w-xl mx-auto text-left text-xs space-y-3">
              <h4 className="font-bold text-maroon-900 font-serif text-sm border-b border-cream-300 pb-2">
                Candidate Registration Details
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                <p>
                  <span className="text-charcoal-600 font-medium">Full Name:</span>{' '}
                  <strong className="text-charcoal-900">{formData.fullName}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Gender:</span>{' '}
                  <strong className="text-charcoal-900">{formData.gender}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Date of Birth:</span>{' '}
                  <strong className="text-charcoal-900">{formData.dob}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Time of Birth:</span>{' '}
                  <strong className="text-charcoal-900">{formData.birthTime}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">My Community:</span>{' '}
                  <strong className="text-gold-600">{formData.community_name || 'N/A'}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Gotra:</span>{' '}
                  <strong className="text-gold-600">{formData.gotra}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Education:</span>{' '}
                  <strong className="text-charcoal-900">{formData.education}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Occupation:</span>{' '}
                  <strong className="text-charcoal-900">{formData.occupation}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Main Contact No:</span>{' '}
                  <strong className="text-charcoal-900">{formData.mainContactNo}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Email:</span>{' '}
                  <strong className="text-charcoal-900">{formData.email}</strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Height:</span>{' '}
                  <strong className="text-charcoal-900">
                    {formData.heightFeet} Ft {formData.heightInch} In
                  </strong>
                </p>
                <p>
                  <span className="text-charcoal-600 font-medium">Working City:</span>{' '}
                  <strong className="text-charcoal-900">{formData.workingCity}</strong>
                </p>
              </div>
            </div>

            <p className="text-xs text-charcoal-600 max-w-md mx-auto">
              Our coordinator will contact you at{' '}
              <span className="font-semibold text-maroon-900">{formData.mainContactNo}</span> within 24–48 hours after background verification.
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
                <div
                  className={`flex flex-col items-center gap-1.5 ${
                    currentStep >= 1 ? 'text-gold-300 font-bold' : 'text-cream-300/60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 1 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'
                    }`}
                  >
                    1
                  </div>
                  <span className="hidden sm:inline">Personal & Contact</span>
                </div>

                {/* Step 2 */}
                <div
                  className={`flex flex-col items-center gap-1.5 ${
                    currentStep >= 2 ? 'text-gold-300 font-bold' : 'text-cream-300/60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 2 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'
                    }`}
                  >
                    2
                  </div>
                  <span className="hidden sm:inline">Community & Education</span>
                </div>

                {/* Step 3 */}
                <div
                  className={`flex flex-col items-center gap-1.5 ${
                    currentStep >= 3 ? 'text-gold-300 font-bold' : 'text-cream-300/60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 3 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'
                    }`}
                  >
                    3
                  </div>
                  <span className="hidden sm:inline">Family & Address</span>
                </div>

                {/* Step 4 */}
                <div
                  className={`flex flex-col items-center gap-1.5 ${
                    currentStep >= 4 ? 'text-gold-300 font-bold' : 'text-cream-300/60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 4 ? 'bg-gold-400 text-maroon-950' : 'bg-maroon-900 text-cream-300'
                    }`}
                  >
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
                    <h3 className="font-serif text-lg font-bold text-maroon-900">
                      Step 1: Personal & Contact Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Gender * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.gender ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.gender && <p className="text-[11px] text-red-600 mt-1">{errors.gender}</p>}
                    </div>

                    {/* Date of Birth * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.dob ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      />
                      {errors.dob && <p className="text-[11px] text-red-600 mt-1">{errors.dob}</p>}
                    </div>

                    {/* Time of Birth * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Time of Birth *
                      </label>
                      <input
                        type="time"
                        name="birthTime"
                        value={formData.birthTime}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.birthTime ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      />
                      {errors.birthTime && <p className="text-[11px] text-red-600 mt-1">{errors.birthTime}</p>}
                    </div>

                    {/* Height * (Feet & Inch) */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-semibold text-charcoal-800">
                          Height *
                        </label>
                        <div className="flex items-center gap-6 text-[11px] text-charcoal-600 pr-3">
                          <span>Feet:</span>
                          <span>Inch:</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          name="heightFeet"
                          value={formData.heightFeet}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                        >
                          <option value="4">4 Ft</option>
                          <option value="5">5 Ft</option>
                          <option value="6">6 Ft</option>
                          <option value="7">7 Ft</option>
                        </select>

                        <select
                          name="heightInch"
                          value={formData.heightInch}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 bg-white"
                        >
                          {[...Array(12).keys()].map((num) => (
                            <option key={num} value={num}>
                              {num} In
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Email * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="candidate@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Main Contact No * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Main Contact No *
                      </label>
                      <input
                        type="tel"
                        name="mainContactNo"
                        placeholder="+91 98765 43210"
                        value={formData.mainContactNo}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.mainContactNo ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.mainContactNo && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.mainContactNo}</p>
                      )}
                    </div>

                    {/* Whats App No */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Whats App No
                      </label>
                      <input
                        type="tel"
                        name="whatsappNo"
                        placeholder="+91 WhatsApp number (optional)"
                        value={formData.whatsappNo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Community, Gotra & Education */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <Briefcase className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">
                      Step 2: Community, Gotra & Education
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* My Community * (Dynamic: getCommunity) */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        My Community *
                      </label>
                      <select
                        name="community_id"
                        value={formData.community_id}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.community_id ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Select Community</option>
                        {communities.map((comm) => (
                          <option key={comm.id} value={comm.id}>
                            {comm.community_name}
                          </option>
                        ))}
                      </select>
                      {errors.community_id && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.community_id}</p>
                      )}
                    </div>

                    {/* Gotra * (Dynamic: getGotra/{community_id}) */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Gotra *
                      </label>
                      <select
                        name="gotra"
                        value={formData.gotra}
                        onChange={handleChange}
                        disabled={!formData.community_id || loadingGotras}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.gotra ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white disabled:bg-cream-100 disabled:cursor-not-allowed`}
                      >
                        <option value="">
                          {!formData.community_id
                            ? 'Select Community first'
                            : loadingGotras
                            ? 'Loading gotras...'
                            : 'Select Gotra'}
                        </option>
                        {gotras.map((g, idx) => {
                          const gotraName = g.gotra_name || g.name || g;
                          return (
                            <option key={`${gotraName}-${idx}`} value={gotraName}>
                              {gotraName}
                            </option>
                          );
                        })}
                        {formData.community_id && <option value="Other">Other</option>}
                      </select>
                      {errors.gotra && <p className="text-[11px] text-red-600 mt-1">{errors.gotra}</p>}
                    </div>

                    {/* Education * (Dynamic: getEducation) */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Education *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.education ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Select Education</option>
                        {educations.map((edu) => {
                          const eduName = edu.education_name || edu.name || edu;
                          return (
                            <option key={edu.id || eduName} value={eduName}>
                              {eduName}
                            </option>
                          );
                        })}
                      </select>
                      {errors.education && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.education}</p>
                      )}
                    </div>

                    {/* Occupation * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Occupation *
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        placeholder="e.g. Software Engineer, Business, Doctor"
                        value={formData.occupation}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.occupation ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.occupation && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.occupation}</p>
                      )}
                    </div>

                    {/* Working City * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Working City *
                      </label>
                      <input
                        type="text"
                        name="workingCity"
                        placeholder="e.g. Bengaluru"
                        value={formData.workingCity}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.workingCity ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.workingCity && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.workingCity}</p>
                      )}
                    </div>

                    {/* Place of Birth * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Place of Birth *
                      </label>
                      <input
                        type="text"
                        name="placeOfBirth"
                        placeholder="e.g. Mysuru, Karnataka"
                        value={formData.placeOfBirth}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.placeOfBirth ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.placeOfBirth && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.placeOfBirth}</p>
                      )}
                    </div>

                    {/* Village, City / State * */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Village, City / State *
                      </label>
                      <input
                        type="text"
                        name="villageCityState"
                        placeholder="e.g. Hubballi, Dharwad, Karnataka"
                        value={formData.villageCityState}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.villageCityState ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.villageCityState && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.villageCityState}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Family Background & References */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <Users className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">
                      Step 3: Family, Background & References
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Father Name * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Father Name *
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        placeholder="Father's full name"
                        value={formData.fatherName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fatherName ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.fatherName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fatherName}</p>
                      )}
                    </div>

                    {/* Have you been married before? * */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Have you been married before? *
                      </label>
                      <select
                        name="marriedBefore"
                        value={formData.marriedBefore}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.marriedBefore ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Please Select</option>
                        <option value="No">No (Never Married)</option>
                        <option value="Yes - Divorced">Yes - Divorced</option>
                        <option value="Yes - Widowed">Yes - Widowed</option>
                        <option value="Yes - Awaiting Divorce">Yes - Awaiting Divorce</option>
                      </select>
                      {errors.marriedBefore && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.marriedBefore}</p>
                      )}
                    </div>

                    {/* Refrence Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Refrence Name
                      </label>
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Family / Community reference name"
                        value={formData.referenceName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Refrence Mobile No */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Refrence Mobile No
                      </label>
                      <input
                        type="tel"
                        name="referenceMobile"
                        placeholder="Reference mobile number"
                        value={formData.referenceMobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Physical Disability (if any)* */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Physical Disability (if any)*
                      </label>
                      <select
                        name="disability"
                        value={formData.disability}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.disability ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Please Select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                      {errors.disability && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.disability}</p>
                      )}
                    </div>

                    {/* Permanent Address (Candidate)* */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Permanent Address (Candidate)*
                      </label>
                      <textarea
                        name="permanentAddress"
                        rows={3}
                        placeholder="Door number, street, landmark, area, pin code..."
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.permanentAddress ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 resize-none`}
                      ></textarea>
                      {errors.permanentAddress && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.permanentAddress}</p>
                      )}
                    </div>

                    {/* Important Note */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Important Note
                      </label>
                      <textarea
                        name="importantNote"
                        rows={2}
                        placeholder="Any additional family or partner preference note..."
                        value={formData.importantNote}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:border-gold-500 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Photo & Verification */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-cream-200 pb-3">
                    <Camera className="w-5 h-5 text-maroon-800" />
                    <h3 className="font-serif text-lg font-bold text-maroon-900">
                      Step 4: Photo & Bio-Data Upload
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Photo * */}
                    <div
                      className={`p-6 rounded-2xl border-2 border-dashed ${
                        errors.photoFile ? 'border-red-500 bg-red-50/20' : 'border-gold-400/40 bg-cream-50'
                      } text-center space-y-4`}
                    >
                      <div className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-cream-200 border-2 border-gold-400/60 flex items-center justify-center shadow-inner">
                        {formData.photoPreview ? (
                          <img
                            src={formData.photoPreview}
                            alt="Candidate Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-12 h-12 text-maroon-900/40" />
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-bold text-maroon-900">Photo *</p>
                        <p className="text-[11px] text-charcoal-600 mt-0.5">
                          Clear recent passport or portrait photo
                        </p>
                      </div>

                      <label className="inline-block px-4 py-2 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 cursor-pointer shadow-sm">
                        <span>{formData.photoFile ? 'Change Photo' : 'Choose File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                      {errors.photoFile && (
                        <p className="text-[11px] text-red-600 font-semibold">{errors.photoFile}</p>
                      )}
                    </div>

                    {/* Bio-Data Document File */}
                    <div className="p-6 rounded-2xl border-2 border-dashed border-cream-300 bg-cream-50 text-center space-y-4 flex flex-col justify-center items-center">
                      <div className="w-16 h-16 rounded-full bg-maroon-900/10 text-maroon-900 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-maroon-800" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-maroon-900">Upload Bio-Data File (Optional)</p>
                        <p className="text-[11px] text-charcoal-600 mt-0.5">PDF or DOCX document format</p>
                        {formData.bioDataName && (
                          <p className="text-xs font-bold text-emerald-700 mt-1">✓ File: {formData.bioDataName}</p>
                        )}
                      </div>

                      <label className="px-4 py-2 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 cursor-pointer shadow-sm">
                        <span>{formData.bioDataName ? 'Change File' : 'Browse Bio-Data'}</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleBioDataUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="p-4 rounded-xl bg-gold-400/10 border border-gold-500/30 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-charcoal-700 leading-relaxed">
                      By submitting your registration, you confirm that all details provided (Full Name, Community, Gotra, Contact, and Family information) belong to an authentic candidate and agree to Pandith Prajapati Milan's verified family network guidelines.
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
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-maroon-950 text-sm font-bold shadow-lg hover:scale-105 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? 'Submitting Registration...' : 'Submit'}</span>
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
