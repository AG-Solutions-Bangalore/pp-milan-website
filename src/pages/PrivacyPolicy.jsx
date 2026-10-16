import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  ExternalLink, 
  Mail, 
  Clock, 
  AlertCircle, 
  FileText, 
  EyeOff, 
  CheckCircle2, 
  ArrowLeft,
  Smartphone
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | PP Milan (Pandith Prajapati Milan)";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2626] relative font-sans selection:bg-[#9F1239] selection:text-white flex flex-col">
      {/* Header / Navbar */}
      <Navbar />

      <main className="flex-1 pt-6 sm:pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#8B1D2C] hover:text-[#701522] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="text-[11px] sm:text-xs text-[#8C7A7A] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Effective as of: <strong>2024-12-27</strong></span>
            </div>
          </div>

          {/* Hero Header Card */}
          <div className="bg-gradient-to-br from-white via-[#FFF9F6] to-[#FFF0F3] border border-[#F3DFD8] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F0D5DA] text-[11px] font-bold tracking-wider uppercase text-[#9F1239] shadow-2xs mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9F1239]" />
                <span>LEGAL & COMPLIANCE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2A1D1D] tracking-tight leading-tight mb-3">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-[#5A4B4B] leading-relaxed">
                This privacy policy applies to the <strong>PP Milan</strong> mobile application (hereby referred to as <strong>"Application"</strong>) for mobile devices that was created by <strong>AG Solutions</strong> (hereby referred to as <strong>"Service Provider"</strong>) as a Free service. This service is intended for use <strong>"AS IS"</strong>.
              </p>
            </div>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#EFE5DE] p-4 flex items-start gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#2A1D1D]">Protected Data</h2>
                <p className="text-[11px] text-[#6B5C5C] mt-0.5 leading-snug">Personal information is safeguarded with robust security controls.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#EFE5DE] p-4 flex items-start gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                <EyeOff className="w-4.5 h-4.5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#2A1D1D]">No Precise Tracking</h2>
                <p className="text-[11px] text-[#6B5C5C] mt-0.5 leading-snug">The app does not collect precise GPS device location.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#EFE5DE] p-4 flex items-start gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#2A1D1D]">User Rights</h2>
                <p className="text-[11px] text-[#6B5C5C] mt-0.5 leading-snug">Request data removal anytime by emailing info@ppmilan.in.</p>
              </div>
            </div>
          </div>

          {/* Full Policy Body Sections */}
          <div className="bg-white border border-[#EFE5DE] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm divide-y divide-[#F4ECE6] space-y-8">

            {/* 1. Information Collection and Use */}
            <section className="pt-2">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <Database className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Information Collection and Use
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#4E4242] leading-relaxed space-y-3">
                <p>
                  The Application collects information when you download and use it. This information may include information such as:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#554444]">
                  <li>Your device's Internet Protocol address (e.g. IP address)</li>
                  <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                  <li>The time spent on the Application</li>
                  <li>The operating system you use on your mobile device</li>
                </ul>
                <div className="bg-[#FAF5F0] border-l-4 border-[#D4AF37] p-3.5 rounded-r-xl mt-3 text-xs sm:text-[13px] text-[#4E4242]">
                  <strong>Location Note:</strong> The Application does not gather precise information about the location of your mobile device.
                </div>
                <p className="pt-1">
                  The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                </p>
                <p>
                  For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                </p>
              </div>
            </section>

            {/* 2. Third Party Access */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <ExternalLink className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Third Party Access
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#4E4242] leading-relaxed space-y-3">
                <p>
                  Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                </p>
                <p>
                  Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                </p>
                <div className="my-3">
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF8FA] hover:bg-[#FFF0F3] border border-[#F3D5DD] rounded-xl text-xs sm:text-sm font-semibold text-[#8B1D2C] transition-all hover:scale-102"
                  >
                    <span>Google Play Services</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9F1239]" />
                  </a>
                </div>
                <p className="font-semibold text-[#2A1D1D] pt-1">
                  The Service Provider may disclose User Provided and Automatically Collected Information:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#554444]">
                  <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                </ul>
              </div>
            </section>

            {/* 3. Opt-Out Rights */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <Smartphone className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Opt-Out Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed">
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>
            </section>

            {/* 4. Data Retention Policy */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <Clock className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Data Retention Policy
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed">
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:info@ppmilan.in" className="text-[#8B1D2C] font-semibold underline underline-offset-2">info@ppmilan.in</a> and they will respond in a reasonable time.
              </p>
            </section>

            {/* 5. Children */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <AlertCircle className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Children
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#4E4242] leading-relaxed space-y-2">
                <p>
                  The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                </p>
                <p>
                  The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:info@ppmilan.in" className="text-[#8B1D2C] font-semibold underline">info@ppmilan.in</a>) so that they will be able to take the necessary actions.
                </p>
              </div>
            </section>

            {/* 6. Security */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <Lock className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Security
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed">
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
              </p>
            </section>

            {/* 7. Changes */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <FileText className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Changes
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed mb-3">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
              <div className="inline-block px-3 py-1 bg-[#FFF9F6] border border-[#F0D5DA] rounded-lg text-xs font-semibold text-[#8B1D2C]">
                Effective Date: 2024-12-27
              </div>
            </section>

            {/* 8. Your Consent */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <CheckCircle2 className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Your Consent
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed">
                By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className="pt-8">
              <div className="flex items-center gap-2.5 mb-3 text-[#9F1239]">
                <Mail className="w-5 h-5 text-[#9F1239] shrink-0" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2A1D1D]">
                  Contact Us
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4E4242] leading-relaxed mb-4">
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@ppmilan.in"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B1D2C] hover:bg-[#731320] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:scale-102 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: info@ppmilan.in</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FFF5F7] text-[#8B1D2C] border border-[#F0D5DA] text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer"
                >
                  <span>Visit Contact Page</span>
                </Link>
              </div>
            </section>

          </div>

        </div>
      </main>

      {/* Royal Maroon Curved Footer */}
      <div className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-30">
        <Footer />
      </div>
    </div>
  );
}
