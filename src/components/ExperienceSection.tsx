import React, { useState } from 'react';
import { Briefcase, Building2, ChevronRight, Check } from 'lucide-react';
import { EXPERIENCE_HISTORY, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCE_HISTORY[0].id);

  const activeExp =
    EXPERIENCE_HISTORY.find((e) => e.id === activeExpId) || EXPERIENCE_HISTORY[0];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#2C0D14] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              DEVELOPMENT RECORD
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              Leadership & Delivery
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="mt-3 text-sm text-[#D8BAC0] leading-relaxed">
            Hands-on property acquisition, master engineering, and infrastructure delivery across
            Nigeria's fastest-growing residential hubs.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: Chronological Positions */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCE_HISTORY.map((item) => {
              const isSelected = item.id === activeExpId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveExpId(item.id)}
                  className={`w-full text-left p-6 transition-all duration-200 border-2 ${
                    isSelected
                      ? 'bg-[#180509] text-[#FFFFFF] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/40'
                      : 'bg-[#22090F] text-[#F8F2F4] border-[#4A1621] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono uppercase font-bold tracking-wider ${isSelected ? 'text-[#D4AF37]' : 'text-[#E5A91E]'}`}>
                      {item.period}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-[#E2CAD0]' : 'text-[#C4A4AC]'}`}>{item.location}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1 text-[#FFFFFF]">
                    {item.role}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#D8BAC0]">
                      {item.company}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? 'text-[#D4AF37] translate-x-1'
                          : 'text-[#94A3B8]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Deep-Dive Detail Panel */}
          <div className="lg:col-span-7 bg-[#22090F] border-2 border-[#4A1621] p-8 sm:p-10 shadow-lg">
            <div className="pb-6 border-b border-[#4A1621]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#C4A4AC] mb-2 font-mono">
                <span className="text-[#E5A91E] font-bold">{activeExp.period}</span>
                <span>{activeExp.location}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#FFFFFF] mb-1">
                {activeExp.role}
              </h3>
              <h4 className="text-sm font-semibold text-[#D4AF37]">
                {activeExp.company}
              </h4>
            </div>

            {/* Overview */}
            <p className="mt-6 text-sm text-[#D8BAC0] leading-relaxed">
              {activeExp.overview}
            </p>

            {/* Responsibilities */}
            <div className="mt-8">
              <h5 className="text-xs uppercase font-mono tracking-widest text-[#FFFFFF] mb-3 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                <span>Key Development Mandates</span>
              </h5>
              <ul className="space-y-2.5">
                {activeExp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#E2CAD0] leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Contributions */}
            <div className="mt-8 pt-6 border-t border-[#4A1621]">
              <h5 className="text-xs uppercase font-mono tracking-widest text-[#FFFFFF] mb-3 font-bold">
                Impact & Landmark Results
              </h5>
              <ul className="space-y-2">
                {activeExp.majorContributions.map((contrib, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#E2CAD0]">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5 shrink-0" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notable Projects */}
            <div className="mt-8 pt-6 border-t border-[#4A1621] bg-[#2C0D14] -mx-8 -mb-10 p-6 sm:p-8">
              <span className="text-[11px] font-mono uppercase text-[#FFFFFF] block mb-2 font-bold">
                Associated Developments & Schemes
              </span>
              <div className="flex flex-wrap gap-2">
                {activeExp.notableProjects.map((p, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#180509] border border-[#4A1621] text-xs text-[#FFFFFF] font-medium"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{p}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
