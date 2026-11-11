import React, { useEffect, useState } from 'react';
import { X, MapPin, Calendar, Check, ArrowRight, ShieldCheck, Building } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIndex(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage =
    project.galleryImages[activeImageIndex]?.url || project.heroImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-[#FFFFFF] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8E8E4]">
        {/* Sticky Header with Close button */}
        <div className="sticky top-0 z-20 bg-[#FFFFFF]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#E8E8E4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E814D]">
              Project Specification
            </span>
            <span className="text-[#D8D8D3]">|</span>
            <span className="text-xs text-[#71717A] hidden sm:inline">
              Ref. {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#1A1A1A] hover:bg-[#F7F7F5] hover:text-[#9E814D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-10">
          {/* Main Visual Display */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7F7F5] border border-[#E8E8E4]">
              <img
                src={currentImage}
                alt={project.name}
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs text-[#FFFFFF] font-sans max-w-md">
                {project.galleryImages[activeImageIndex]?.caption || project.tagline}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 shrink-0 overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#9E814D] ring-2 ring-[#9E814D]/30'
                        : 'border-[#E8E8E4] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Title & Key Metrics Grid */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#9E814D]">
                {project.categoryLabel}
              </span>
              <div className="flex items-center gap-2 text-xs text-[#71717A]">
                <MapPin className="w-3.5 h-3.5 text-[#9E814D]" />
                <span>{project.location}</span>
                <span>·</span>
                <Calendar className="w-3.5 h-3.5 text-[#9E814D]" />
                <span>{project.year}</span>
              </div>
            </div>

            <h2 id="modal-project-title" className="font-display text-3xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight mb-3">
              {project.name}
            </h2>
            <p className="text-base text-[#4B5563] font-normal leading-relaxed">
              {project.tagline}
            </p>

            {/* Quantitative Metrics Bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F7F7F5] border border-[#E8E8E4]">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                  Gross Dev. Value (GDV)
                </span>
                <span className="font-display text-xl font-medium text-[#1A1A1A] tabular-nums">
                  {project.gdv}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                  Gross Area
                </span>
                <span className="font-display text-xl font-medium text-[#1A1A1A] tabular-nums">
                  {project.area}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                  Status
                </span>
                <span className="font-display text-xl font-medium text-[#1A1A1A]">
                  {project.status}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                  Location
                </span>
                <span className="font-display text-xl font-medium text-[#1A1A1A]">
                  {project.city}
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Details: Narrative & Scope */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-[#E8E8E4]">
            {/* Left: Narrative & Features */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] mb-2 font-semibold">
                  Architectural Narrative
                </h4>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  {project.description}
                </p>
                <blockquote className="p-4 bg-[#F7F7F5] border-l border-[#9E814D] text-xs italic text-[#374151] leading-relaxed">
                  "{project.architecturalStatement}"
                </blockquote>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] mb-3 font-semibold">
                  Key Specifications & Craft
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <Check className="w-3.5 h-3.5 text-[#9E814D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] mb-3 font-semibold">
                  Commercial & Environmental Achievements
                </h4>
                <ul className="space-y-2 text-xs text-[#374151]">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Scope & Team Credits */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-5 bg-[#F7F7F5] border border-[#E8E8E4]">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] mb-3 font-semibold">
                  Scope of Involvement
                </h4>
                <ul className="space-y-2 text-xs text-[#4B5563]">
                  {project.scopeOfInvolvement.map((scope, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#9E814D]" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collaborative Partners Table */}
              <div className="p-5 border border-[#E8E8E4]">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] mb-3 font-semibold flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#9E814D]" />
                  <span>Project Team & Consultants</span>
                </h4>
                <dl className="space-y-2 text-xs">
                  <div>
                    <dt className="text-[#71717A] text-[11px]">Architect</dt>
                    <dd className="font-medium text-[#1A1A1A]">{project.partners.architect}</dd>
                  </div>
                  <div>
                    <dt className="text-[#71717A] text-[11px]">Interior Architecture</dt>
                    <dd className="font-medium text-[#1A1A1A]">{project.partners.interiorDesign}</dd>
                  </div>
                  <div>
                    <dt className="text-[#71717A] text-[11px]">Main Contractor</dt>
                    <dd className="font-medium text-[#1A1A1A]">{project.partners.contractor}</dd>
                  </div>
                  <div>
                    <dt className="text-[#71717A] text-[11px]">Environmental & MEP</dt>
                    <dd className="font-medium text-[#1A1A1A]">{project.partners.sustainability}</dd>
                  </div>
                </dl>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={() => {
                  onClose();
                  onInquireProject(project.name);
                }}
                className="w-full py-3.5 px-5 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium hover:bg-[#9E814D] transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire About Similar Development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
