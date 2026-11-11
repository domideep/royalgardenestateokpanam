import React from 'react';
import { COMPANY_INFO } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const assetDistribution = [
    { type: '4 Bedroom Luxury Bungalows (450 SQM)', percentage: 55, value: 'Phase 1 & 2' },
    { type: '2 Bedroom Executive Bungalows (250 SQM)', percentage: 35, value: 'Fast Absorption' },
    { type: 'Commercial & Estate Amenities Buffer', percentage: 10, value: 'Infrastructure' }
  ];

  const operationalHighlights = [
    { label: 'Estate Layout Land Area', value: '50 Hectares', subtitle: 'Dry table-land in Okpanam corridor' },
    { label: 'Delivery On Schedule', value: '100%', subtitle: 'Turn-key construction execution' },
    { label: 'Estate Security Coverage', value: '24/7', subtitle: 'Armed patrol, gatehouse & CCTV' },
    { label: 'Title Authenticity', value: 'Guaranteed', subtitle: 'Registered Survey & C of O in Progress' },
    { label: 'Pre-Lease / Subscription', value: '60%+', subtitle: 'Rapid diaspora and local demand' },
    { label: 'Projected Annual Capital Growth', value: '25%+', subtitle: 'Asaba capital territory axis' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#2C0D14] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              VERIFIED TRACK RECORD
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A91E] font-bold">
              Quantitative Milestones
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            Key Development Metrics & Allocation
          </h2>
          <p className="mt-3 text-sm text-[#D8BAC0] leading-relaxed">
            Every metric reflects verified project execution across the Okpanam-Asaba growth corridor
            under direct stewardship of A1 Elite Service & Properties Limited.
          </p>
        </div>

        {/* 6-Metric Clean Numerical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-14 border-b border-[#4A1621]">
          {operationalHighlights.map((stat, i) => (
            <div key={i} className="flex flex-col p-4 bg-[#22090F] border border-[#4A1621]">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFFFF] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[#E5A91E] uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#C4A4AC] font-sans">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Portfolio Distribution Breakdown */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5A91E] font-bold block mb-1">
              Estate Masterplan Allocation
            </span>
            <h3 className="font-display text-2xl font-bold text-[#FFFFFF] mb-3">
              Sector & Housing Unit Distribution
            </h3>
            <p className="text-xs text-[#D8BAC0] leading-relaxed">
              Carefully calibrated density to ensure wide roads, green verges, recreational spaces,
              and serene living.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 bg-[#22090F] p-6 border border-[#4A1621]">
            {assetDistribution.map((item, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FFFFFF]">{item.type}</span>
                  <div className="flex items-center gap-3 font-mono text-[#D8BAC0]">
                    <span>{item.value}</span>
                    <span className="text-[#D4AF37] font-bold">{item.percentage}%</span>
                  </div>
                </div>
                {/* Clean hairline proportion bar */}
                <div className="w-full h-2 bg-[#180509] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#9B111E] to-[#D4AF37] transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
