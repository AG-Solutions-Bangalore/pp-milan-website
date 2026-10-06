import React, { useState, useEffect, useRef } from 'react';
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
  Award,
  Search,
  ChevronDown,
  Check,
  X
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
    { id: 1, gotra_name: 'Bharadwaj' },
    { id: 2, gotra_name: 'Vashishtha' },
    { id: 3, gotra_name: 'Kaushik' },
    { id: 4, gotra_name: 'Gautam' },
    { id: 5, gotra_name: 'Atri' },
    { id: 6, gotra_name: 'Kashyap' },
    { id: 7, gotra_name: 'Agastya' },
    { id: 8, gotra_name: 'Bhrigu' },
    { id: 9, gotra_name: 'Vishwamitra' },
    { id: 10, gotra_name: 'Jamadagni' },
    { id: 11, gotra_name: 'Parashar' },
    { id: 12, gotra_name: 'Shandilya' },
    { id: 13, gotra_name: 'Dhananjaya' },
    { id: 14, gotra_name: 'Mudgal' },
    { id: 15, gotra_name: 'Upamanyu' },
    { id: 16, gotra_name: 'Srivatsa' },
    { id: 17, gotra_name: 'Vatsa' },
    { id: 18, gotra_name: 'Mandavya' },
    { id: 19, gotra_name: 'Chyavana' },
    { id: 20, gotra_name: 'Sankrithi' },
    { id: 21, gotra_name: 'Dhar' },
    { id: 22, gotra_name: 'Kaul' },
    { id: 23, gotra_name: 'Bhan' },
    { id: 24, gotra_name: 'Razdan' },
    { id: 25, gotra_name: 'Raina' },
    { id: 26, gotra_name: 'Kak' },
    { id: 27, gotra_name: 'Mattoo' },
    { id: 28, gotra_name: 'Sharga' },
    { id: 29, gotra_name: 'Bamzai' },
    { id: 30, gotra_name: 'Bodinayana' },
    { id: 31, gotra_name: 'Vadula' },
    { id: 32, gotra_name: 'Gargya' },
    { id: 33, gotra_name: 'Kutsa' },
    { id: 34, gotra_name: 'Maudgalya' },
    { id: 35, gotra_name: 'Taittiriya' },
    { id: 36, gotra_name: 'Bihaut' },
    { id: 37, gotra_name: 'Azodiya' },
    { id: 38, gotra_name: 'Kanojia' },
    { id: 39, gotra_name: 'Maghiya' }
  ],
  2: [
    { id: 1, gotra_name: 'Gautam' },
    { id: 2, gotra_name: 'Atri' },
    { id: 3, gotra_name: 'Upmanyu' },
    { id: 4, gotra_name: 'Harita' },
    { id: 5, gotra_name: 'Vashishta' },
    { id: 6, gotra_name: 'Kashyap' },
    { id: 7, gotra_name: 'Vishwakarma' },
    { id: 8, gotra_name: 'Bharadwaj' },
    { id: 9, gotra_name: 'Vishwamitra' },
    { id: 10, gotra_name: 'Shiva' },
    { id: 11, gotra_name: 'Jamadagni' },
    { id: 12, gotra_name: 'Agastya' },
    { id: 13, gotra_name: 'Angeeras' }
  ]
};

export default function Registration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  // Dynamic API state
  const [communities, setCommunities] = useState(FALLBACK_COMMUNITIES);
  const [educations, setEducations] = useState(FALLBACK_EDUCATIONS);
  const [gotras, setGotras] = useState([]);
  const [loadingGotras, setLoadingGotras] = useState(false);

  // Searchable Gotra state
  const [gotraSearch, setGotraSearch] = useState('');
  const [isGotraOpen, setIsGotraOpen] = useState(false);
  const gotraDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (gotraDropdownRef.current && !gotraDropdownRef.current.contains(event.target)) {
        setIsGotraOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredGotras = gotras.filter((g) =>
    (g.gotra_name || '').toLowerCase().includes(gotraSearch.toLowerCase().trim())
  );

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
    gotra_id: '',
    gotra: '',
    education_id: '',
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
        const fallbackList = FALLBACK_GOTRAS[formData.community_id] || [];
        if (resData && Array.isArray(resData.data) && resData.data.length > 0) {
          const unique = [];
          const seen = new Set();
          resData.data.forEach((item, idx) => {
            const name = typeof item === 'string' ? item : (item.gotra_name || item.name);
            const matchedFallback = fallbackList.find(
              (f) => f.gotra_name.toLowerCase() === (name || '').toLowerCase()
            );
            const id = (item && item.id !== undefined)
              ? item.id
              : (item && item.gotra_id !== undefined
                ? item.gotra_id
                : (matchedFallback ? matchedFallback.id : idx + 1));

            if (name && !seen.has(name.toLowerCase())) {
              seen.add(name.toLowerCase());
              unique.push({ id: String(id), gotra_name: name });
            }
          });
          setGotras(unique);
        } else {
          setGotras(fallbackList);
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
        gotra_id: '',
        gotra: ''
      }));
    } else if (name === 'education_id') {
      const selected = educations.find((ed) => String(ed.id) === String(value));
      setFormData((prev) => ({
        ...prev,
        education_id: value,
        education: selected ? (selected.education_name || selected.name) : value
      }));
      if (errors.education_id || errors.education) {
        setErrors((prev) => ({ ...prev, education_id: '', education: '' }));
      }
    } else if (name === 'gotra_id') {
      const selected = gotras.find((g) => String(g.id) === String(value));
      setFormData((prev) => ({
        ...prev,
        gotra_id: value,
        gotra: selected ? selected.gotra_name : (value === 'Other' ? 'Other' : value)
      }));
      if (errors.gotra_id || errors.gotra) {
        setErrors((prev) => ({ ...prev, gotra_id: '', gotra: '' }));
      }
    } else if (name === 'fullName' || name === 'fatherName' || name === 'referenceName') {
      // Disallow numbers: allow only letters, spaces, dots, apostrophes, and hyphens
      const lettersOnly = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
    } else if (name === 'mainContactNo' || name === 'whatsappNo' || name === 'referenceMobile') {
      // Allow only numbers and restrict to max 10 digits
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  // Validation utility helpers
  const cleanPhone = (phone) => {
    if (!phone) return '';
    let digits = String(phone).replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('0')) {
      digits = digits.slice(1);
    } else if (digits.length === 12 && digits.startsWith('91')) {
      digits = digits.slice(2);
    }
    return digits;
  };

  const validateDob = (dobStr) => {
    if (!dobStr) return 'Date of birth is required';
    const dobDate = new Date(dobStr);
    if (isNaN(dobDate.getTime())) return 'Please enter a valid date of birth';

    const today = new Date();
    if (dobDate > today) return 'Date of birth cannot be in the future';

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }

    if (age < 18) {
      return 'Candidate must be at least 18 years of age';
    }
    if (age > 85) {
      return 'Please enter a valid date of birth';
    }
    return null;
  };

  const maxDobDate = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    return d.toISOString().split('T')[0];
  })();

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          photoFile: 'Please upload a valid image file (JPG, PNG, or WEBP)'
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          photoFile: 'Photo size should not exceed 5MB'
        }));
        return;
      }

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
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExt = '.' + file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(fileExt)) {
        setErrors((prev) => ({
          ...prev,
          bioDataFile: 'Bio-data must be a PDF or Word document (.pdf, .doc, .docx)'
        }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          bioDataFile: 'Bio-data document size should not exceed 10MB'
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        bioDataFile: file,
        bioDataName: file.name
      }));
      if (errors.bioDataFile) {
        setErrors((prev) => ({ ...prev, bioDataFile: '' }));
      }
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      // Full Name
      const name = formData.fullName.trim();
      if (!name) {
        newErrors.fullName = 'Full Name is required';
      } else if (name.length < 2) {
        newErrors.fullName = 'Full Name must be at least 2 characters';
      } else if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
        newErrors.fullName = 'Full Name should only contain letters and spaces (no numbers)';
      }

      // Gender
      if (!formData.gender) {
        newErrors.gender = 'Please select candidate gender';
      }

      // Date of Birth
      const dobError = validateDob(formData.dob);
      if (dobError) {
        newErrors.dob = dobError;
      }

      // Time of Birth
      if (!formData.birthTime) {
        newErrors.birthTime = 'Time of birth is required';
      }

      // Email
      const email = formData.email.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email) {
        newErrors.email = 'Email address is required';
      } else if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address (e.g. name@example.com)';
      }

      // Main Contact Number
      const phoneDigits = cleanPhone(formData.mainContactNo);
      if (!formData.mainContactNo.trim()) {
        newErrors.mainContactNo = 'Main Contact Number is required';
      } else if (phoneDigits.length !== 10 || !/^[6-9]\d{9}$/.test(phoneDigits)) {
        newErrors.mainContactNo = 'Please enter a valid 10-digit mobile number';
      }

      // WhatsApp Number (Optional, but if filled must be 10 digits)
      if (formData.whatsappNo && formData.whatsappNo.trim()) {
        const waDigits = cleanPhone(formData.whatsappNo);
        if (waDigits.length !== 10 || !/^[6-9]\d{9}$/.test(waDigits)) {
          newErrors.whatsappNo = 'Please enter a valid 10-digit WhatsApp number';
        }
      }
    } else if (step === 2) {
      // Community
      if (!formData.community_id) {
        newErrors.community_id = 'Please select community';
      }

      // Gotra
      if (!formData.gotra_id && !formData.gotra) {
        newErrors.gotra_id = 'Please select gotra';
      }

      // Education
      if (!formData.education_id && !formData.education) {
        newErrors.education_id = 'Please select education';
      }

      // Occupation
      const occ = formData.occupation.trim();
      if (!occ) {
        newErrors.occupation = 'Occupation is required';
      } else if (occ.length < 2) {
        newErrors.occupation = 'Occupation must be at least 2 characters';
      }

      // Working City
      const city = formData.workingCity.trim();
      if (!city) {
        newErrors.workingCity = 'Working City is required';
      } else if (city.length < 2) {
        newErrors.workingCity = 'Working City must be at least 2 characters';
      }

      // Place of Birth
      const pob = formData.placeOfBirth.trim();
      if (!pob) {
        newErrors.placeOfBirth = 'Place of Birth is required';
      } else if (pob.length < 2) {
        newErrors.placeOfBirth = 'Place of Birth must be at least 2 characters';
      }

      // Village, City / State
      const vcs = formData.villageCityState.trim();
      if (!vcs) {
        newErrors.villageCityState = 'Village, City / State is required';
      } else if (vcs.length < 2) {
        newErrors.villageCityState = 'Village, City / State must be at least 2 characters';
      }
    } else if (step === 3) {
      // Father Name
      const fName = formData.fatherName.trim();
      if (!fName) {
        newErrors.fatherName = 'Father Name is required';
      } else if (fName.length < 2) {
        newErrors.fatherName = 'Father Name must be at least 2 characters';
      } else if (!/^[a-zA-Z\s.'-]+$/.test(fName)) {
        newErrors.fatherName = "Father's name should only contain letters and spaces (no numbers)";
      }

      // Marital Status
      if (!formData.marriedBefore) {
        newErrors.marriedBefore = 'Please select marital status';
      }

      // Reference Name (Optional)
      if (formData.referenceName && formData.referenceName.trim()) {
        const refName = formData.referenceName.trim();
        if (refName.length < 2) {
          newErrors.referenceName = 'Reference name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(refName)) {
          newErrors.referenceName = 'Reference name should only contain letters and spaces (no numbers)';
        }
      }

      // Reference Mobile (Optional)
      if (formData.referenceMobile && formData.referenceMobile.trim()) {
        const refPhoneDigits = cleanPhone(formData.referenceMobile);
        if (refPhoneDigits.length !== 10 || !/^[6-9]\d{9}$/.test(refPhoneDigits)) {
          newErrors.referenceMobile = 'Please enter a valid 10-digit reference mobile number';
        }
      }

      // Disability
      if (!formData.disability) {
        newErrors.disability = 'Please select disability option';
      }

      // Permanent Address
      const addr = formData.permanentAddress.trim();
      if (!addr) {
        newErrors.permanentAddress = 'Permanent Address is required';
      } else if (addr.length < 8) {
        newErrors.permanentAddress = 'Please enter complete address (minimum 8 characters)';
      }
    } else if (step === 4) {
      // Photo
      if (!formData.photoFile && !formData.photoPreview) {
        newErrors.photoFile = 'Candidate photo is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAllSteps = () => {
    for (let s = 1; s <= 4; s++) {
      if (!validateStep(s)) {
        setCurrentStep(s);
        window.scrollTo({ top: 120, behavior: 'smooth' });
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateAllSteps()) return;

    setSubmitting(true);
    const generatedId = 'PPM-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedId);

    try {
      const cleanMainMobile = cleanPhone(formData.mainContactNo);
      const cleanWaMobile = formData.whatsappNo ? cleanPhone(formData.whatsappNo) : cleanMainMobile;
      const cleanRefMobile = formData.referenceMobile ? cleanPhone(formData.referenceMobile) : '';

      const payload = new FormData();
      payload.append('name', formData.fullName.trim());
      payload.append('profile_father_full_name', formData.fatherName.trim());
      payload.append('profile_date_of_birth', formData.dob);
      payload.append('profile_gender', formData.gender);
      payload.append('profile_time_of_birth', formData.birthTime);
      payload.append('profile_place_of_birth', formData.placeOfBirth.trim());
      payload.append('email', formData.email.trim());
      payload.append('profile_mobile', cleanMainMobile);
      payload.append('profile_whatsapp', cleanWaMobile || cleanMainMobile);
      payload.append('profile_main_contact_num', cleanMainMobile);

      // Backend expects the IDs for Community, Gotra, and Education (not text values)
      // 1. Community ID
      const resolvedCommunityId =
        formData.community_id ||
        communities.find((c) => c.community_name === formData.community_name)?.id ||
        '1';
      payload.append('profile_comunity_name', String(resolvedCommunityId));
      payload.append('community_id', String(resolvedCommunityId));

      // 2. Gotra (Pass the name value, e.g. "Bharadwaj", not ID)
      const resolvedGotraValue =
        formData.gotra ||
        gotras.find((g) => String(g.id) === String(formData.gotra_id))?.gotra_name ||
        formData.gotra_id;
      payload.append('profile_gotra', String(resolvedGotraValue));

      payload.append('profile_permanent_address', formData.permanentAddress.trim());
      payload.append('profile_working_city', formData.workingCity.trim());
      payload.append('profile_village_city', formData.villageCityState.trim());
      payload.append('profile_ref_contact_name', formData.referenceName.trim());
      payload.append('profile_ref_contact_mobile', cleanRefMobile);

      // 3. Education (Pass the name value, e.g. "BE", not ID)
      const resolvedEducationValue =
        formData.education ||
        educations.find((e) => String(e.id) === String(formData.education_id))?.education_name ||
        formData.education_id;
      payload.append('profile_education', String(resolvedEducationValue));
      payload.append('profile_occupation', formData.occupation.trim());
      payload.append('profile_have_married_before', formData.marriedBefore);
      payload.append('heightFeet', formData.heightFeet);
      payload.append('heightInch', formData.heightInch);
      payload.append('profile_physical_disablity', formData.disability);
      payload.append('profile_note', formData.importantNote ? formData.importantNote.trim() : '');

      if (formData.photoFile) {
        payload.append('profile_photo', formData.photoFile);
      }
      if (formData.bioDataFile) {
        payload.append('bio_data', formData.bioDataFile);
        payload.append('biodata', formData.bioDataFile);
      }

      const response = await fetch(`${API_BASE}/createRegistration`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: payload
      });

      const resData = await response.json().catch(() => null);

      // Handle duplicate mobile or email responses (Backend returns { code: "401", message: "..." })
      if (resData && (resData.code === '401' || resData.code === 401)) {
        const errMsg = resData.message || 'Mobile number or Email is already registered with us.';
        setSubmitError(errMsg);
        if (errMsg.toLowerCase().includes('mobile')) {
          setCurrentStep(1);
          setErrors((prev) => ({ ...prev, mainContactNo: errMsg }));
        } else if (errMsg.toLowerCase().includes('email')) {
          setCurrentStep(1);
          setErrors((prev) => ({ ...prev, email: errMsg }));
        }
        setSubmitting(false);
        window.scrollTo({ top: 120, behavior: 'smooth' });
        return;
      }

      if (!response.ok && (!resData || (resData.code !== '200' && resData.code !== 200))) {
        throw new Error(resData?.message || `Server error (${response.status}) while saving profile.`);
      }

      // Success
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

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
    } catch (err) {
      console.warn('Registration dispatch notice:', err);
      setSubmitError(err.message || 'Failed to submit registration. Please check your details and try again.');
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-charcoal-800 flex flex-col justify-between">
      {/* Homepage Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pt-24 sm:pt-28 pb-10 sm:pb-16">
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
                  <span className="hidden sm:inline">Candidate Photo</span>
                </div>
              </div>
            </div>

            {/* Form Step Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">Registration Error</h4>
                    <p className="text-xs text-red-700 mt-0.5">{submitError}</p>
                  </div>
                </div>
              )}

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
                        max={maxDobDate}
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
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter 10-digit mobile number"
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
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter 10-digit WhatsApp number (optional)"
                        value={formData.whatsappNo}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.whatsappNo ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.whatsappNo && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNo}</p>
                      )}
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

                    {/* Gotra * (Dynamic: getGotra/{community_id} with Search inside) */}
                    <div className="relative" ref={gotraDropdownRef}>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Gotra *
                      </label>
                      <button
                        type="button"
                        disabled={!formData.community_id || loadingGotras}
                        onClick={() => {
                          if (formData.community_id && !loadingGotras) {
                            setIsGotraOpen((prev) => !prev);
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.gotra_id || errors.gotra ? 'border-red-500' : 'border-cream-300'
                        } text-sm text-left flex items-center justify-between bg-white focus:outline-none focus:border-gold-500 disabled:bg-cream-100 disabled:cursor-not-allowed cursor-pointer transition-all shadow-2xs`}
                      >
                        <span className={formData.gotra ? 'text-charcoal-900 font-medium' : 'text-charcoal-400'}>
                          {!formData.community_id
                            ? 'Select Community first'
                            : loadingGotras
                            ? 'Loading gotras...'
                            : formData.gotra || 'Select Gotra'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-charcoal-500 transition-transform duration-200 shrink-0 ${
                            isGotraOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Panel with Search Option Inside */}
                      {isGotraOpen && (
                        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-cream-300 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                          {/* Search Input Box */}
                          <div className="p-2.5 border-b border-cream-100 bg-[#FAF7F2]">
                            <div className="relative flex items-center">
                              <Search className="w-4 h-4 text-charcoal-400 absolute left-3 pointer-events-none" />
                              <input
                                type="text"
                                autoFocus
                                placeholder="Search Gotra..."
                                value={gotraSearch}
                                onChange={(e) => setGotraSearch(e.target.value)}
                                className="w-full pl-9 pr-8 py-2 rounded-lg bg-white border border-cream-300 text-xs focus:outline-none focus:border-gold-500 text-charcoal-800 placeholder-charcoal-400"
                              />
                              {gotraSearch && (
                                <button
                                  type="button"
                                  onClick={() => setGotraSearch('')}
                                  className="absolute right-2.5 text-charcoal-400 hover:text-charcoal-600 p-0.5 cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* List of Gotras */}
                          <div className="max-h-56 overflow-y-auto divide-y divide-cream-100/60 py-1">
                            {filteredGotras.length > 0 ? (
                              filteredGotras.map((g) => {
                                const isSelected = String(formData.gotra_id) === String(g.id);
                                return (
                                  <button
                                    key={`${g.id}-${g.gotra_name}`}
                                    type="button"
                                    onClick={() => {
                                      setFormData((prev) => ({
                                        ...prev,
                                        gotra_id: String(g.id),
                                        gotra: g.gotra_name
                                      }));
                                      if (errors.gotra_id || errors.gotra) {
                                        setErrors((prev) => ({ ...prev, gotra_id: '', gotra: '' }));
                                      }
                                      setIsGotraOpen(false);
                                      setGotraSearch('');
                                    }}
                                    className={`w-full px-4 py-2.5 text-left text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                      isSelected
                                        ? 'bg-maroon-50 text-maroon-900 font-semibold'
                                        : 'text-charcoal-800 hover:bg-cream-100/70'
                                    }`}
                                  >
                                    <span>{g.gotra_name}</span>
                                    {isSelected && <Check className="w-4 h-4 text-maroon-800 shrink-0" />}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="px-4 py-4 text-center text-xs text-charcoal-500">
                                No gotra found matching "{gotraSearch}"
                              </div>
                            )}

                            {/* Other Option */}
                            <button
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  gotra_id: 'Other',
                                  gotra: 'Other'
                                }));
                                if (errors.gotra_id || errors.gotra) {
                                  setErrors((prev) => ({ ...prev, gotra_id: '', gotra: '' }));
                                }
                                setIsGotraOpen(false);
                                setGotraSearch('');
                              }}
                              className={`w-full px-4 py-2.5 text-left text-xs flex items-center justify-between border-t border-cream-200 text-maroon-800 hover:bg-maroon-50/50 font-medium cursor-pointer ${
                                formData.gotra_id === 'Other' ? 'bg-maroon-50 font-semibold' : ''
                              }`}
                            >
                              <span>Other (Not listed)</span>
                              {formData.gotra_id === 'Other' && <Check className="w-4 h-4 text-maroon-800 shrink-0" />}
                            </button>
                          </div>
                        </div>
                      )}

                      {(errors.gotra_id || errors.gotra) && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.gotra_id || errors.gotra}</p>
                      )}
                    </div>

                    {/* Education * (Dynamic: getEducation) */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Education *
                      </label>
                      <select
                        name="education_id"
                        value={formData.education_id}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.education_id || errors.education ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500 bg-white`}
                      >
                        <option value="">Select Education</option>
                        {educations.map((edu) => {
                          const eduName = edu.education_name || edu.name || edu;
                          const eduId = edu.id !== undefined ? edu.id : eduName;
                          return (
                            <option key={eduId} value={eduId}>
                              {eduName}
                            </option>
                          );
                        })}
                      </select>
                      {(errors.education_id || errors.education) && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.education_id || errors.education}</p>
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

                    {/* Reference Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Reference Name
                      </label>
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Family / Community reference name (optional)"
                        value={formData.referenceName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.referenceName ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.referenceName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.referenceName}</p>
                      )}
                    </div>

                    {/* Reference Mobile No */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Reference Mobile No
                      </label>
                      <input
                        type="tel"
                        name="referenceMobile"
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter 10-digit reference mobile (optional)"
                        value={formData.referenceMobile}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.referenceMobile ? 'border-red-500' : 'border-cream-300'
                        } text-sm focus:outline-none focus:border-gold-500`}
                      />
                      {errors.referenceMobile && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.referenceMobile}</p>
                      )}
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
                      Step 4: Candidate Photo Upload
                    </h3>
                  </div>

                  <div className="max-w-md mx-auto">
                    {/* Photo * */}
                    <div
                      className={`p-8 rounded-2xl border-2 border-dashed ${
                        errors.photoFile ? 'border-red-500 bg-red-50/20' : 'border-gold-400/40 bg-cream-50'
                      } text-center space-y-4`}
                    >
                      <div className="w-28 h-28 rounded-full mx-auto overflow-hidden bg-cream-200 border-2 border-gold-400/60 flex items-center justify-center shadow-inner">
                        {formData.photoPreview ? (
                          <img
                            src={formData.photoPreview}
                            alt="Candidate Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-14 h-14 text-maroon-900/40" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-maroon-900">Candidate Photo *</p>
                        <p className="text-xs text-charcoal-600 mt-1">
                          Clear recent passport or portrait photo (JPG, PNG, WEBP, max 5MB)
                        </p>
                      </div>

                      <label className="inline-block px-6 py-2.5 rounded-full bg-maroon-900 text-gold-300 text-xs font-bold hover:bg-maroon-800 cursor-pointer shadow-sm transition-all hover:scale-105 active:scale-95">
                        <span>{formData.photoFile ? 'Change Photo' : 'Choose File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                      {errors.photoFile && (
                        <p className="text-xs text-red-600 font-semibold">{errors.photoFile}</p>
                      )}
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
