import React from 'react';
import {
  Building2,
  Home,
  TrendingUp,
  ShieldCheck,
  Compass,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { EXPERTISE_PILLARS, ExpertiseItem } from '../data/portfolioData';

interface ExpertiseSectionProps {
  onInquireExpertise: (title: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onInquireExpertise }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#D4AF37]', strokeWidth: 1.8 };
    switch (iconName) {
      case 'Building2':
        return <Building2 {...props} />;
      case 'Home':
        return <Home {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      default:
        return <Building2 {...props} />;
    }
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#22090F] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              CAPABILITIES
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              Full Lifecycle Stewardship
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            Our Development & Advisory Pillars
          </h2>
          <p className="mt-3 text-sm text-[#D8BAC0] leading-relaxed">
            From greenfield master planning and civil engineering to turnkey bungalow delivery and
            seamless title verification for local and diaspora clients.
          </p>
        </div>

        {/* 3x2 Grid of Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_PILLARS.map((item) => (
            <div
              key={item.id}
              className="group p-7 bg-[#2C0D14] border-2 border-[#4A1621] flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 border-2 border-[#D4AF37]/40 flex items-center justify-center mb-6 bg-[#180509] group-hover:border-[#D4AF37] transition-colors shadow-xs">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-display text-lg font-bold text-[#FFFFFF] mb-2 group-hover:text-[#E5A91E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#D8BAC0] leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Capabilities list */}
                <ul className="space-y-2 pt-4 border-t border-[#4A1621] text-xs text-[#C4A4AC]">
                  {item.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#D4AF37] font-bold">·</span>
                      <span className="text-[#E2CAD0]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Focus & Action */}
              <div className="mt-6 pt-4 border-t border-[#4A1621] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#D4AF37] font-semibold truncate max-w-[200px]">
                  {item.focus}
                </span>
                <button
                  onClick={() => onInquireExpertise(item.title)}
                  aria-label={`Inquire regarding ${item.title}`}
                  className="p-1.5 text-[#FFFFFF] hover:text-[#D4AF37] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
