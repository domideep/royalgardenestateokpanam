import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { A1EliteLogo } from './A1EliteLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120306] text-[#FFFFFF] pt-16 pb-12 border-t-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFFFFF]/10">
          {/* Brand & Lion Seal Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <A1EliteLogo size={44} />
              <div>
                <span className="font-display text-base font-bold uppercase tracking-wider text-[#FFFFFF] block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] font-mono text-[#D4AF37] italic">
                  {COMPANY_INFO.estateTagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D8BAC0] leading-relaxed max-w-sm">
              Master developer of <strong className="text-[#FFFFFF]">{COMPANY_INFO.estateName}</strong>.
              Delivering high-integrity residential bungalows, 24/7 security, paved roads, and
              verifiable titles in the heart of Okpanam, Delta State.
            </p>

            <div className="text-[11px] font-mono text-[#D4AF37] space-y-1">
              <p>REDAN Registered Developer</p>
              <p>Asaba Capital Territory Approved Masterplan</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Estate Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#E2CAD0]">
              <li>
                <a href="#overview" className="hover:text-[#D4AF37] transition-colors">
                  Overview & Estate Masterplan
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-[#D4AF37] transition-colors">
                  2 Bedroom Bungalow (250 SQM)
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-[#D4AF37] transition-colors">
                  4 Bedroom Bungalow (450 SQM)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#D4AF37] transition-colors">
                  6 Core Estate Infrastructure
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About A1 Elite Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Book Site Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Locations & Hotline */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Contact & Site Desk
            </span>
            <div className="space-y-3 text-xs text-[#E2CAD0]">
              <div>
                <p className="font-bold text-[#FFFFFF] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Site Office (Delta State)</span>
                </p>
                <p className="text-[#C4A4AC]">{COMPANY_INFO.contact.office}</p>
                <p className="font-mono text-[11px] text-[#D4AF37] mt-1">{COMPANY_INFO.contact.phone}</p>
              </div>
              <div>
                <p className="font-bold text-[#FFFFFF] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Direct Inquiries</span>
                </p>
                <p className="font-mono text-[#D4AF37]">{COMPANY_INFO.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4A4AC]">
          <p>
            © {new Date().getFullYear()} A1 Elite Service & Properties Limited. Royal Garden Estate Okpanam.
            All rights reserved. "...Your Property, Our Priority".
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8BAC0] hover:text-[#D4AF37] transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
