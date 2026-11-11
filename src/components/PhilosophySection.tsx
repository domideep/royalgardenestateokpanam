import React, { useState } from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const [activePrincipleIndex, setActivePrincipleIndex] = useState<number>(0);

  const activePrinciple = PHILOSOPHY_PRINCIPLES[activePrincipleIndex];

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#22090F] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              GUIDING ETHOS
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              ...Your Property, Our Priority
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            Our Development Philosophy
          </h2>
          <p className="mt-3 text-sm text-[#D8BAC0] leading-relaxed">
            Four foundational covenants that govern our land acquisition, civil construction, and
            relationship with every homeowner in Royal Garden Estate.
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered List Selector */}
          <div className="lg:col-span-5 space-y-3">
            {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
              const isSelected = index === activePrincipleIndex;
              return (
                <button
                  key={principle.number}
                  onClick={() => setActivePrincipleIndex(index)}
                  className={`w-full text-left p-5 transition-all duration-200 border-2 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#180509] text-[#FFFFFF] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/40'
                      : 'bg-[#2C0D14] text-[#F8F2F4] border-[#4A1621] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold pt-0.5 ${
                      isSelected ? 'text-[#D4AF37]' : 'text-[#E5A91E]'
                    }`}
                  >
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold mb-1 text-[#FFFFFF]">
                      {principle.title}
                    </h3>
                    <p className={`text-xs line-clamp-1 ${isSelected ? 'text-[#D8BAC0]' : 'text-[#C4A4AC]'}`}>
                      {principle.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-depth Principle Monograph Card */}
          <div className="lg:col-span-7 bg-[#2C0D14] border-2 border-[#4A1621] p-8 sm:p-12 shadow-md min-h-[380px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#4A1621] mb-8">
                <span className="font-mono text-2xl font-bold text-[#D4AF37]">
                  {activePrinciple.number} / 0{PHILOSOPHY_PRINCIPLES.length}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
                  Core Pillar
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
                {activePrinciple.title}
              </h3>

              <h4 className="text-xs uppercase font-mono text-[#D4AF37] font-bold tracking-wider mb-6">
                {activePrinciple.tagline}
              </h4>

              <p className="text-sm sm:text-base text-[#D8BAC0] leading-relaxed font-normal">
                {activePrinciple.description}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#4A1621]">
              <blockquote className="font-display italic text-sm sm:text-base text-[#FFFFFF] font-medium">
                "{activePrinciple.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
