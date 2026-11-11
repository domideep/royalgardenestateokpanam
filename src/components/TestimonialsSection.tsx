import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#2C0D14] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                HOMEOWNER TRUST
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Words From Our Investors & Residents
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 border-2 border-[#4A1621] bg-[#180509] text-[#FFFFFF] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#D4AF37] font-bold px-2 tabular-nums">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 border-2 border-[#4A1621] bg-[#180509] text-[#FFFFFF] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Spread */}
        <div className="bg-[#22090F] border-2 border-[#D4AF37]/50 p-8 sm:p-12 lg:p-16 relative shadow-xl">
          <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-normal text-[#FFFFFF] leading-relaxed tracking-tight max-w-4xl mb-10">
            "{current.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[#4A1621]">
            <div>
              <h4 className="font-display text-base font-bold text-[#FFFFFF]">
                {current.author}
              </h4>
              <p className="text-xs text-[#D8BAC0]">
                {current.title} · {current.organization}
              </p>
              <span className="text-[11px] font-mono text-[#E5A91E] font-medium">
                {current.location}
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block">
                Verification Note
              </span>
              <span className="text-xs text-[#FFFFFF] font-medium">
                {current.relationship}
              </span>
            </div>
          </div>
        </div>

        {/* 3-Client Sub-Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 text-left border-2 transition-all ${
                idx === currentIndex
                  ? 'bg-[#180509] text-[#FFFFFF] border-[#D4AF37]'
                  : 'bg-[#22090F] text-[#F8F2F4] border-[#4A1621] hover:border-[#D4AF37]/50'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase font-bold block mb-1 ${idx === currentIndex ? 'text-[#D4AF37]' : 'text-[#E5A91E]'}`}>
                {t.organization}
              </span>
              <h5 className="font-display text-xs font-bold truncate text-[#FFFFFF]">
                {t.author}
              </h5>
              <p className={`text-[11px] truncate ${idx === currentIndex ? 'text-[#E2CAD0]' : 'text-[#C4A4AC]'}`}>
                {t.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
