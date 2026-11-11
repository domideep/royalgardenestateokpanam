import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Download,
  Clock,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialInquiryTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryTopic = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitInterest: initialInquiryTopic || '2-bedroom-bungalow',
    paymentPlan: 'outright',
    inspectionDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialInquiryTopic) {
      setFormData((prev) => ({
        ...prev,
        unitInterest: initialInquiryTopic,
        message: prev.message || `I am inquiring regarding ${initialInquiryTopic} in Royal Garden Estate Okpanam.`
      }));
    }
  }, [initialInquiryTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:A1 Elite Service & Properties Limited
ORG:A1 Elite Service & Properties Limited
TITLE:Royal Garden Estate Okpanam Development Desk
TEL;TYPE=WORK,VOICE:${COMPANY_INFO.contact.phone}
TEL;TYPE=WORK,CELL:${COMPANY_INFO.contact.secondaryPhone}
EMAIL;TYPE=INTERNET,WORK:${COMPANY_INFO.contact.email}
ADR;TYPE=WORK:;;Okpanam Road;Asaba;Delta State;;Nigeria
NOTE:...Your Property, Our Priority. 2 & 4 Bedroom Bungalows in Royal Garden Estate Okpanam.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'A1_Elite_Royal_Garden_Estate.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#22090F] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              OFFICIAL SALES & INSPECTION
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              Royal Garden Estate Okpanam
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            Schedule a Site Inspection or Reserve Your Bungalow
          </h2>
          <p className="mt-3 text-sm text-[#D8BAC0] leading-relaxed">
            Our on-site estate team is available six days a week to guide you across our interlocked
            roads, inspect the 2-bedroom (250 SQM) and 4-bedroom (450 SQM) plots, and verify title
            documents.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Office & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Office Card */}
            <div className="p-6 bg-[#180509] text-[#FFFFFF] border border-[#D4AF37]/40 shadow-lg">
              <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">
                  Site & Project Office (Delta State)
                </span>
              </div>
              <p className="text-sm font-medium text-[#FFFFFF] leading-relaxed mb-3">
                {COMPANY_INFO.contact.office}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#E2CAD0] pt-3 border-t border-[#FFFFFF]/10">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Inspection Days: {COMPANY_INFO.contact.inspectionDays}</span>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="p-6 bg-[#2C0D14] border border-[#4A1621] space-y-4">
              <h4 className="text-xs uppercase font-mono font-bold text-[#FFFFFF] tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Sales & Inspection Hotline</span>
              </h4>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-[#C4A4AC] block">Primary Line:</span>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono font-bold text-[#D4AF37] hover:text-[#FFFFFF] text-base transition-colors"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[#C4A4AC] block">Alternative Line / WhatsApp:</span>
                  <a
                    href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono font-bold text-[#D4AF37] hover:text-[#FFFFFF] text-base transition-colors"
                  >
                    {COMPANY_INFO.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#4A1621]">
                <span className="text-xs text-[#C4A4AC] block">Official Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-xs font-mono font-medium text-[#D4AF37] hover:text-[#FFFFFF] transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownloadVCard}
                className="px-4 py-2.5 bg-[#180509] border border-[#D4AF37] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#180509] transition-colors flex items-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Save Official vCard Contact</span>
              </button>

              <div className="p-3 bg-[#2C0D14] border border-[#D4AF37]/40 w-full flex items-center gap-2 text-xs text-[#E2CAD0]">
                <ShieldCheck className="w-4 h-4 text-[#E5A91E] shrink-0" />
                <span>Direct developer sale. Zero agency fees or hidden third-party markups.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#2C0D14] border-2 border-[#4A1621] p-6 sm:p-10 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-[#180509] text-[#D4AF37] flex items-center justify-center mx-auto border-2 border-[#D4AF37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                  Inspection Request Received!
                </h3>
                <p className="text-sm text-[#D8BAC0] max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Royal Garden Estate Okpanam. An executive sales
                  officer from A1 Elite Service & Properties Limited will call you within two hours
                  to confirm your inspection date or provide the allocation pricing sheet.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#180509] border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#180509] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chief Emeka Okonkwo"
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] placeholder:text-[#9B7B82] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] placeholder:text-[#9B7B82] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] placeholder:text-[#9B7B82] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Preferred Inspection Date
                    </label>
                    <input
                      type="date"
                      value={formData.inspectionDate}
                      onChange={(e) => setFormData({ ...formData, inspectionDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Unit of Interest *
                    </label>
                    <select
                      value={formData.unitInterest}
                      onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="2-bedroom-bungalow">2 Bedroom Bungalow (Land Size: 250 SQM)</option>
                      <option value="4-bedroom-bungalow">4 Bedroom Bungalow (Land Size: 450 SQM)</option>
                      <option value="land-plot-only">Land Plot Purchase (Okpanam Corridor)</option>
                      <option value="diaspora-investment">Diaspora Comprehensive Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                      Proposed Payment Plan
                    </label>
                    <select
                      value={formData.paymentPlan}
                      onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="outright">Outright Payment (Best Discount)</option>
                      <option value="3-months">3-Month Equal Milestone</option>
                      <option value="6-months">6-Month Structured Instalment</option>
                      <option value="12-months">12-Month Extended Payment Plan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-[#FFFFFF] mb-1.5">
                    Questions or Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify whether you wish to visit the site in Okpanam or request video walkthrough for diaspora review..."
                    className="w-full px-4 py-3 bg-[#1E080D] border border-[#4A1621] text-xs text-[#FFFFFF] placeholder:text-[#9B7B82] focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#C4A4AC]">
                    ...Your Property, Our Priority. Fast physical allocation guaranteed upon milestone completion.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] text-[#180509] text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Inspection Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
