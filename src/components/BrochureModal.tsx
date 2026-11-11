import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Calendar } from 'lucide-react';
import { BROCHURE_IMAGE, COMPANY_INFO } from '../data/portfolioData';
import { A1EliteLogo } from './A1EliteLogo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookInspection: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onBookInspection
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
    >
      {/* Top Controls Bar */}
      <div className="z-10 bg-[#180509] text-[#FFFFFF] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/30 shadow-md">
        <div className="flex items-center gap-3">
          <A1EliteLogo size={36} />
          <div>
            <h3 className="font-display text-sm font-bold tracking-tight text-[#FFFFFF] uppercase">
              {COMPANY_INFO.estateName} – Official Architectural Brochure
            </h3>
            <p className="text-[11px] text-[#D4AF37] font-mono">
              2 Bedroom (250 SQM) & 4 Bedroom (450 SQM) Bungalows & Floor Plans
            </p>
          </div>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
            className="p-2 text-[#E2E8F0] hover:text-[#D4AF37] hover:bg-[#FFFFFF]/10 transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-[#D4AF37] px-1">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
            className="p-2 text-[#E2E8F0] hover:text-[#D4AF37] hover:bg-[#FFFFFF]/10 transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-2 text-[#E2E8F0] hover:text-[#D4AF37] hover:bg-[#FFFFFF]/10 transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <a
            href={BROCHURE_IMAGE}
            download="Royal_Garden_Estate_Okpanam_Brochure.jpg"
            className="ml-2 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF]/10 text-xs text-[#FFFFFF] hover:bg-[#D4AF37] hover:text-[#0B1B3D] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>

          <button
            onClick={onClose}
            aria-label="Close brochure modal"
            className="p-2 text-[#FFFFFF] hover:text-[#9B111E] ml-4 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Pan/Zoom Image Area */}
      <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
        <div
          className="transition-transform duration-200 origin-center max-w-full"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={BROCHURE_IMAGE}
            alt="Royal Garden Estate Okpanam Master Architectural Brochure"
            className="max-h-[82vh] w-auto object-contain shadow-2xl border-2 border-[#D4AF37]/50"
          />
        </div>
      </div>

      {/* Bottom Bar: Action */}
      <div className="bg-[#140407] px-6 py-3 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E2CAD0]">
        <div>
          <span className="font-bold text-[#FFFFFF]">A1 ELITE SERVICE & PROPERTIES LIMITED</span>
          <span className="text-[#D4AF37]"> · </span>
          <span>...Your Property, Our Priority</span>
        </div>
        <button
          onClick={() => {
            onClose();
            onBookInspection();
          }}
          className="px-5 py-2 bg-[#D4AF37] text-[#180509] font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:brightness-105 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Site Inspection for Okpanam Units</span>
        </button>
      </div>
    </div>
  );
};
