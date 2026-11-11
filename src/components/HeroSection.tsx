import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
  PhoneCall,
  MessageCircle,
  Copy,
  Check,
  X
} from 'lucide-react';
import { COMPANY_INFO, CEO_IMAGE, CEO_FALLBACK_IMAGE, CEO_ORIGINAL_IMAGE } from '../data/portfolioData';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onGetInTouch: () => void;
  onOpenBrochure: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onGetInTouch,
  onOpenBrochure
}) => {
  const [ceoImage, setCeoImage] = useState<string>(CEO_IMAGE);
  const [showContactCard, setShowContactCard] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard?.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  return (
    <section id="overview" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-[#22090F] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Developer Crest Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/40 shadow-xs">
                A1 ELITE SERVICE & PROPERTIES LIMITED
              </span>
              <span className="text-[#E5A91E] text-xs font-bold font-mono uppercase tracking-wider hidden sm:inline">
                {COMPANY_INFO.estateTagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-[1.1] mb-5 text-balance">
              Own a Home in{' '}
              <span className="text-[#E5A91E] block sm:inline">
                Royal Garden Estate
              </span>{' '}
              <span className="text-[#FFFFFF]">Okpanam.</span>
            </h1>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-[#D8BAC0] leading-relaxed font-normal mb-6 max-w-xl">
              Experience the pinnacle of planned suburban security and elegance in Delta State’s
              fastest-growing growth corridor. Choose between our contemporary{' '}
              <strong className="text-[#FFFFFF]">2-Bedroom Bungalow (250 SQM)</strong> and grand{' '}
              <strong className="text-[#FFFFFF]">4-Bedroom Bungalow (450 SQM)</strong>, complete
              with paved interlocked roads, 24/7 security, and stable power.
            </p>

            {/* Highlight Badges from photo */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="px-3 py-1.5 bg-[#2C0D14] border-l-4 border-[#9B111E] text-xs font-semibold text-[#FFFFFF] shadow-sm">
                <span>2 Bed Bungalow · </span>
                <span className="font-mono text-[#E5A91E]">250 SQM Land</span>
              </div>
              <div className="px-3 py-1.5 bg-[#2C0D14] border-l-4 border-[#D4AF37] text-xs font-semibold text-[#FFFFFF] shadow-sm">
                <span>4 Bed Bungalow · </span>
                <span className="font-mono text-[#D4AF37]">450 SQM Land</span>
              </div>
              <div className="px-3 py-1.5 bg-[#180509] text-[#D4AF37] text-xs font-mono font-bold flex items-center gap-1.5 border border-[#D4AF37]/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Okpanam / Asaba Axis</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExplorePortfolio}
                className="px-7 py-3.5 bg-[#180509] text-[#FFFFFF] text-xs uppercase tracking-wider font-bold hover:bg-[#9B111E] border border-[#D4AF37]/40 transition-all duration-200 flex items-center gap-2 group shadow-md"
              >
                <span>View Bungalow Models</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onGetInTouch}
                className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] text-[#180509] text-xs uppercase tracking-wider font-bold hover:brightness-105 transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <span>Book Site Inspection</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust credentials text */}
            <div className="mt-8 pt-5 border-t border-[#4A1621] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#C4A4AC]">
              <span className="font-bold text-[#FFFFFF]">Title & Framework:</span>
              <span className="flex items-center gap-1 text-[#E2D0D4]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                Registered Survey & C of O in Progress
              </span>
              <span aria-hidden="true">·</span>
              <span>Deed of Assignment</span>
              <span aria-hidden="true">·</span>
              <span>100% Dry Table-Land</span>
            </div>
          </div>

          {/* Right Column: Photo of CEO Onyema Chukwuma with Name Card (write-ups removed, Contact Us icon added) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full overflow-hidden bg-[#180509] shadow-2xl border-2 border-[#D4AF37]/50 group">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#180509]">
                <img
                  src={ceoImage}
                  alt="Onyema Chukwuma - CEO of A1 Elite Service & Properties Limited on the construction site"
                  onError={() => {
                    if (ceoImage !== CEO_FALLBACK_IMAGE) {
                      setCeoImage(CEO_FALLBACK_IMAGE);
                    } else if (ceoImage !== CEO_ORIGINAL_IMAGE) {
                      setCeoImage(CEO_ORIGINAL_IMAGE);
                    }
                  }}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                />

                {/* Contact Us Icon Button (when tapped, brings out the brochure call numbers) */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => setShowContactCard(true)}
                    aria-label="Contact Us - View Phone Numbers"
                    className="relative flex items-center gap-2 px-3.5 py-2 bg-[#180509]/95 hover:bg-[#9B111E] text-white rounded-full border-2 border-[#D4AF37] shadow-xl hover:scale-105 active:scale-95 transition-all group/btn backdrop-blur-md"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A91E] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]" />
                    </span>
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-white transition-colors" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>

              {/* Prominent Name and Title Card under photo */}
              <div className="p-4 sm:p-5 bg-[#180509] border-t-2 border-[#D4AF37] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold block mb-0.5">
                    Chief Executive Officer & MD
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                    {COMPANY_INFO.ceo.name}
                  </h3>
                  <p className="text-xs text-[#D8BAC0] font-sans">
                    A1 Elite Service & Properties Limited · Developer of Royal Garden Estate
                  </p>
                </div>

                <button
                  onClick={onOpenBrochure}
                  className="px-3.5 py-2 bg-[#2C0D14] hover:bg-[#9B111E] border border-[#D4AF37]/50 text-[#FFFFFF] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors whitespace-nowrap self-stretch sm:self-auto justify-center"
                >
                  <span>See Estate Layout</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            {/* Interactive Contact Us Popover / Modal when tapped */}
            {showContactCard && (
              <div
                role="dialog"
                aria-modal="true"
                className="absolute inset-0 z-30 bg-[#120306]/95 backdrop-blur-md p-6 flex flex-col justify-between border-2 border-[#D4AF37] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              >
                <div>
                  {/* Modal Header */}
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#180509] flex items-center justify-center font-bold">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                          Brochure Contact Numbers
                        </h4>
                        <p className="text-[10px] text-[#D4AF37] font-mono">
                          A1 Elite Service & Properties Limited Desk
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowContactCard(false)}
                      className="p-1.5 text-[#D8BAC0] hover:text-white hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Close contact card"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs text-[#D8BAC0] mb-4">
                    Tap to dial directly or message our on-site development team in Okpanam, Delta State:
                  </p>

                  {/* Brochure Phone Numbers */}
                  <div className="space-y-3">
                    {/* Primary Number */}
                    <div className="p-3 bg-[#1F070C] border border-[#D4AF37]/40 rounded-sm flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#D4AF37] block font-semibold">
                          Direct Developer Line 1
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                          className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#E5A91E] transition-colors"
                        >
                          {COMPANY_INFO.contact.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleCopy(COMPANY_INFO.contact.phone)}
                          title="Copy phone number"
                          className="p-2 bg-[#2D0C13] hover:bg-[#3D1019] text-[#D4AF37] border border-[#D4AF37]/30 rounded transition-colors"
                        >
                          {copiedNumber === COMPANY_INFO.contact.phone ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <a
                          href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                          className="px-3 py-2 bg-[#9B111E] hover:bg-[#BD1525] text-white text-xs font-mono font-bold uppercase rounded flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>

                    {/* Secondary Number */}
                    <div className="p-3 bg-[#1F070C] border border-[#D4AF37]/40 rounded-sm flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#D4AF37] block font-semibold">
                          Direct Developer Line 2
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                          className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#E5A91E] transition-colors"
                        >
                          {COMPANY_INFO.contact.secondaryPhone}
                        </a>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleCopy(COMPANY_INFO.contact.secondaryPhone)}
                          title="Copy phone number"
                          className="p-2 bg-[#2D0C13] hover:bg-[#3D1019] text-[#D4AF37] border border-[#D4AF37]/30 rounded transition-colors"
                        >
                          {copiedNumber === COMPANY_INFO.contact.secondaryPhone ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <a
                          href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                          className="px-3 py-2 bg-[#9B111E] hover:bg-[#BD1525] text-white text-xs font-mono font-bold uppercase rounded flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Action */}
                    <a
                      href="https://wa.me/2348030001234?text=Hello%20A1%20Elite%20Properties%2C%20I%20am%20interested%20in%20Royal%20Garden%20Estate%20Okpanam%20bungalows%20and%20plots."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>

                {/* Footer notes */}
                <div className="pt-3 border-t border-[#D4AF37]/20 text-[11px] text-[#A67C85] font-mono flex items-center justify-between">
                  <span>Inspection Days: Mon – Sat (10am – 5pm)</span>
                  <button
                    onClick={() => setShowContactCard(false)}
                    className="text-[#D4AF37] hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full-width KPI strip below the hero split */}
        <div className="mt-14 pt-10 border-t border-[#4A1621] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_INFO.keyMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col p-4 bg-[#2C0D14] border border-[#4A1621]">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-tight mb-1">
                {metric.value}
              </span>
              <span className="text-xs font-bold text-[#E5A91E] tracking-wider uppercase mb-1">
                {metric.label}
              </span>
              <p className="text-xs text-[#C4A4AC] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
