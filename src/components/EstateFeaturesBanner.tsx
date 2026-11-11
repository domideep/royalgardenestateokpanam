import React from 'react';
import {
  ShieldCheck,
  Route,
  Zap,
  Droplets,
  Trees,
  Building,
  CheckCircle2
} from 'lucide-react';
import { ESTATE_FEATURES, EstateFeature } from '../data/portfolioData';

export const EstateFeaturesBanner: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#D4AF37]', strokeWidth: 1.8 };
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Route':
        return <Route {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Trees':
        return <Trees {...props} />;
      case 'Building':
        return <Building {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="features" className="bg-[#180509] text-[#FFFFFF] py-14 lg:py-18 border-y-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Banner Title Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1.5 bg-[#9B111E] text-[#FFFFFF] font-mono font-bold text-xs uppercase tracking-widest border border-[#D4AF37]/50 shadow-sm">
              Core Infrastructure
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF]">
              ESTATE FEATURES & AMENITIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#D8BAC0] font-sans max-w-md">
            Guaranteed high-grade civil infrastructure already under construction to ensure peace of
            mind, uncompromised comfort, and immediate capital growth.
          </p>
        </div>

        {/* 6 Estate Features Grid - Matching the brochure's bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-10">
          {ESTATE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col p-4 bg-[#240B10] border border-[#4A1621] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-sm bg-[#180509] border border-[#D4AF37]/40 flex items-center justify-center mb-3 group-hover:border-[#D4AF37] transition-colors">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="font-display text-sm font-bold text-[#FFFFFF] uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors mb-1">
                {feature.title}
              </h3>
              <p className="text-[11px] text-[#D4AF37] font-mono leading-tight mb-2">
                {feature.tagline}
              </p>
              <p className="text-[11px] text-[#C4A4AC] leading-relaxed hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Guarantee Bar */}
        <div className="mt-10 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#E2CAD0]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-medium text-[#FFFFFF]">100% Dry Table-Land in Okpanam</span>
            <span className="text-[#D4AF37]">·</span>
            <span>Zero Waterlogging</span>
            <span className="text-[#D4AF37]">·</span>
            <span>Instant Physical Plot Allocation</span>
          </div>
          <div className="text-[11px] font-mono text-[#D4AF37] font-bold">
            C of O In Process · Registered Survey Plan
          </div>
        </div>
      </div>
    </section>
  );
};
