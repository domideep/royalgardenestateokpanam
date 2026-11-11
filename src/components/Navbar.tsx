import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck, Home, MapPin, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { A1EliteLogo } from './A1EliteLogo';

interface NavbarProps {
  onOpenConnect: () => void;
  onSelectUnit?: (unitName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect, onSelectUnit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when off-canvas is open on tablets/mobile
  useEffect(() => {
    if (offCanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [offCanvasOpen]);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Bungalow Models', href: '#models' },
    { label: 'Estate Features', href: '#features' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'About A1 Elite', href: '#about' },
    { label: 'Site Inspection', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOffCanvasOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#180509] text-[#FFFFFF] shadow-lg border-b border-[#D4AF37]/30 py-3'
            : 'bg-[#180509]/95 text-[#FFFFFF] backdrop-blur-md border-b border-[#D4AF37]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Zone 1: Official A1 Elite Services Seal Logo from brochure & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group text-[#FFFFFF] whitespace-nowrap shrink-0"
          >
            {/* Official Lion Seal Logo from the brochure */}
            <A1EliteLogo size={44} />

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-[#FFFFFF] uppercase leading-tight group-hover:text-[#D4AF37] transition-colors">
                {COMPANY_INFO.name}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#D4AF37] font-medium tracking-wide">
                <span>{COMPANY_INFO.estateName}</span>
                <span className="text-[#FFFFFF]/40 hidden sm:inline">·</span>
                <span className="text-[#FFFFFF]/70 italic hidden sm:inline text-[10px]">
                  {COMPANY_INFO.estateTagline}
                </span>
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links
              CRITICAL: Visible ONLY on desktop (lg:flex).
              Hidden on mobile and tablets (< lg) to enforce off-canvas navbar on tablets as requested! */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-[#E2E8F0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#D4AF37] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#D4AF37] decoration-2 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA & Hamburger Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Phone quick call (visible on desktop) */}
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-xs text-[#E2E8F0] hover:text-[#D4AF37] font-mono transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConnect}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#180509] bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] hover:brightness-105 shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <span>Book Site Inspection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger button: Visible on mobile AND tablets (lg:hidden) */}
            <button
              onClick={() => setOffCanvasOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors rounded-sm flex items-center gap-1.5"
            >
              <Menu className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs uppercase font-mono tracking-wider hidden md:inline text-[#D4AF37]">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* OFF-CANVAS SLIDE-OVER DRAWER (Active for Mobile & Tablets up to 1024px) */}
      {offCanvasOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200"
        >
          {/* Backdrop overlay with blur */}
          <div
            onClick={() => setOffCanvasOpen(false)}
            className="fixed inset-0 bg-[#0F0306]/80 backdrop-blur-sm transition-opacity"
          />

          {/* Off-canvas panel (320px on mobile, 420px on tablets) */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#1E080D] text-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30 overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            {/* Off-Canvas Header */}
            <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#140407]">
              <div className="flex items-center gap-3">
                <A1EliteLogo size={36} />
                <div>
                  <h3 className="font-display text-sm font-bold tracking-tight text-[#FFFFFF] uppercase">
                    {COMPANY_INFO.estateName}
                  </h3>
                  <p className="text-[10px] text-[#D4AF37] font-mono italic">
                    {COMPANY_INFO.estateTagline}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOffCanvasOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-[#E2E8F0] hover:text-[#D4AF37] hover:bg-[#FFFFFF]/10 rounded-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Off-Canvas Navigation Links */}
            <div className="p-6 space-y-6 flex-1">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-mono font-semibold block mb-4">
                  Estate Navigation
                </span>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link, idx) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group flex items-center justify-between py-2 text-base sm:text-lg font-display text-[#E2E8F0] hover:text-[#D4AF37] border-b border-[#FFFFFF]/10 hover:border-[#D4AF37]/50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#D4AF37]">0{idx + 1}.</span>
                        <span>{link.label}</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Model Selector Box */}
              <div className="p-4 bg-[#140407] border border-[#D4AF37]/30 rounded-sm">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block mb-2 font-semibold">
                  Available Bungalow Prototypes
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      setOffCanvasOpen(false);
                      if (onSelectUnit) onSelectUnit('2-bedroom-bungalow');
                      const el = document.getElementById('models');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2.5 text-left bg-[#240B10] border border-[#FFFFFF]/10 hover:border-[#D4AF37] transition-all"
                  >
                    <span className="font-semibold text-[#FFFFFF] block">2 Bed Bungalow</span>
                    <span className="text-[10px] text-[#D4AF37] font-mono">250 SQM Land</span>
                  </button>

                  <button
                    onClick={() => {
                      setOffCanvasOpen(false);
                      if (onSelectUnit) onSelectUnit('4-bedroom-bungalow');
                      const el = document.getElementById('models');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2.5 text-left bg-[#240B10] border border-[#FFFFFF]/10 hover:border-[#D4AF37] transition-all"
                  >
                    <span className="font-semibold text-[#FFFFFF] block">4 Bed Bungalow</span>
                    <span className="text-[10px] text-[#D4AF37] font-mono">450 SQM Land</span>
                  </button>
                </div>
              </div>

              {/* Verified Estate Features Highlights */}
              <div className="space-y-1.5 text-xs text-[#CBD5E1]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>24/7 Gated Security & Interlocked Roads</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Okpanam Corridor, Asaba Capital Territory</span>
                </div>
              </div>
            </div>

            {/* Off-Canvas Footer CTA & Contact */}
            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#140407] space-y-4">
              <button
                onClick={() => {
                  setOffCanvasOpen(false);
                  onOpenConnect();
                }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] text-[#180509] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
              >
                <span>Book Site Inspection</span>
                <Calendar className="w-4 h-4" />
              </button>

              <div className="text-xs text-[#94A3B8] space-y-1 font-mono">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#FFFFFF]">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </p>
                <p className="text-[11px] text-[#64748B]">
                  Inspection Days: {COMPANY_INFO.contact.inspectionDays}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
