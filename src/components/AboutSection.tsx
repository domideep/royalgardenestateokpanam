import React, { useState } from 'react';
import { Award, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, BROCHURE_IMAGE, CEO_IMAGE, CEO_FALLBACK_IMAGE } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenConnect: () => void;
  onOpenBrochure: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConnect, onOpenBrochure }) => {
  const [copiedProfile, setCopiedProfile] = useState(false);

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(
      `${COMPANY_INFO.name}\n${COMPANY_INFO.estateTagline}\n\n${COMPANY_INFO.extendedBio.join('\n\n')}\n\nContact: ${COMPANY_INFO.contact.phone} | ${COMPANY_INFO.contact.email}`
    );
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2500);
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#22090F] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              ABOUT DEVELOPER
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              A1 Elite Service & Properties
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            Building Quality Estates. Safeguarding Your Investment.
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Visual Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              onClick={onOpenBrochure}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#180509] shadow-xl border-2 border-[#D4AF37]/50 cursor-pointer group"
            >
              <img
                src={BROCHURE_IMAGE}
                alt="A1 Elite Service & Properties Limited development masterplan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#180509] via-[#180509]/80 to-transparent p-5 text-[#FFFFFF] border-t border-[#D4AF37]/30">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block font-bold">
                  Developer Identity
                </span>
                <h4 className="font-display text-base font-bold text-[#FFFFFF]">
                  A1 Elite Service & Properties Limited
                </h4>
                <p className="text-xs text-[#E2CAD0] font-sans italic">
                  {COMPANY_INFO.estateTagline}
                </p>
              </div>
            </div>

            {/* Quick credentials card */}
            <div className="mt-6 p-6 bg-[#2C0D14] border border-[#4A1621]">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-wider font-bold text-[#FFFFFF]">
                  Title & Accreditation Standards
                </span>
              </div>
              <ul className="text-xs text-[#E2CAD0] space-y-2.5">
                {COMPANY_INFO.credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-base sm:text-lg text-[#D8BAC0] font-normal leading-relaxed">
              <div className="p-4 sm:p-5 bg-[#2C0D14] border-l-4 border-[#D4AF37] mb-2 flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#180509]">
                  <img
                    src={CEO_IMAGE}
                    alt={COMPANY_INFO.ceo.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = CEO_FALLBACK_IMAGE;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-[#E5A91E] font-bold uppercase tracking-wider block mb-1">
                    Message from the CEO – {COMPANY_INFO.ceo.name}
                  </span>
                  <p className="font-display text-base sm:text-lg text-[#FFFFFF] font-bold leading-snug">
                    "{COMPANY_INFO.ceo.quote}"
                  </p>
                </div>
              </div>

              {COMPANY_INFO.extendedBio.map((paragraph, index) => (
                <p key={index} className="text-[#D8BAC0] text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Core Pillars in About */}
            <div className="pt-6 border-t border-[#4A1621] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-[#2C0D14] border-t-2 border-[#D4AF37] border-x border-b border-[#4A1621]">
                <h4 className="font-display text-sm font-bold text-[#FFFFFF] mb-1.5">
                  Infrastructure First
                </h4>
                <p className="text-xs text-[#C4A4AC] leading-relaxed">
                  Paved roads, transformers, and perimeter fencing installed before allocating
                  plots to buyers.
                </p>
              </div>
              <div className="p-4 bg-[#2C0D14] border-t-2 border-[#9B111E] border-x border-b border-[#4A1621]">
                <h4 className="font-display text-sm font-bold text-[#FFFFFF] mb-1.5">
                  100% Title Clarity
                </h4>
                <p className="text-xs text-[#C4A4AC] leading-relaxed">
                  Exhaustive land ministry vetting ensuring completely unencumbered, dispute-free
                  perpetual ownership.
                </p>
              </div>
              <div className="p-4 bg-[#2C0D14] border-t-2 border-[#E5A91E] border-x border-b border-[#4A1621]">
                <h4 className="font-display text-sm font-bold text-[#FFFFFF] mb-1.5">
                  Okpanam Advantage
                </h4>
                <p className="text-xs text-[#C4A4AC] leading-relaxed">
                  Prime location along the high-growth corridor minutes away from Asaba airport and
                  governmental centers.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyProfile}
                className="px-5 py-2.5 bg-[#2C0D14] border border-[#D4AF37] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#180509] transition-colors flex items-center gap-2 shadow-xs"
              >
                {copiedProfile ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Profile Copied!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Copy Developer Brief</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenConnect}
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] text-[#180509] text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Schedule Private Site Inspection</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
