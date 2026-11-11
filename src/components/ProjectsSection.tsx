import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onInquireProject: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'residential', label: 'Luxury Residential' },
    { id: 'commercial', label: 'Commercial Headquarters' },
    { id: 'heritage', label: 'Heritage Restoration' },
    { id: 'mixed-use', label: 'Mixed-Use Development' }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#FFFFFF] border-b border-[#E8E8E4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#9E814D] block mb-2">
              02. Selected Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
              Curated Developments
            </h2>
          </div>
          <p className="text-sm text-[#71717A] max-w-md font-sans leading-relaxed">
            A portfolio of high-value developments and adaptive transformations characterized by
            architectural ambition, enduring materiality, and commercial precision.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#E8E8E4]">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FFFFFF]'
                    : 'text-[#4B5563] hover:text-[#1A1A1A] hover:bg-[#F7F7F5]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic: 1st project spans full-width or 8 cols, alternating layout
            const isWideHero = index === 0;
            const colSpan = isWideHero
              ? 'md:col-span-12 lg:col-span-12'
              : index % 3 === 1
              ? 'md:col-span-7'
              : index % 3 === 2
              ? 'md:col-span-5'
              : 'md:col-span-6';

            return (
              <article
                key={project.id}
                className={`${colSpan} group flex flex-col bg-[#FFFFFF] border border-[#E8E8E4] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]`}
              >
                {/* Image Container with subtle hover zoom */}
                <div
                  className={`relative overflow-hidden bg-[#F7F7F5] cursor-pointer ${
                    isWideHero
                      ? 'aspect-[16/9] lg:aspect-[21/9]'
                      : 'aspect-[4/3] sm:aspect-[16/10]'
                  }`}
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean unboxed metadata overlay */}
                  <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A] border border-[#E8E8E4]">
                    <span>{project.categoryLabel}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#1A1A1A]/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-[#FFFFFF]">
                    <span>{project.gdv}</span>
                  </div>

                  {/* Quick view button on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="px-4 py-2 bg-[#FFFFFF] text-[#1A1A1A] text-xs uppercase tracking-wider font-medium flex items-center gap-2 shadow-lg"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#9E814D]" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Metadata line: unboxed text with subtle separators */}
                    <div className="flex items-center gap-2 text-xs text-[#71717A] mb-2 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#9E814D]" />
                        <span>{project.location}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#1A1A1A] font-medium">{project.status}</span>
                    </div>

                    <h3
                      onClick={() => setActiveProject(project)}
                      className="font-display text-xl sm:text-2xl font-medium text-[#1A1A1A] hover:text-[#9E814D] transition-colors cursor-pointer mb-2"
                    >
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Scope bullets / key features */}
                    <div className="pt-3 border-t border-[#E8E8E4]/80 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#71717A]">
                      <span className="text-[11px] font-mono uppercase text-[#9E814D]">Key Scope:</span>
                      {project.scopeOfInvolvement.slice(0, 2).map((s, i) => (
                        <span key={i} className="text-xs text-[#4B5563]">
                          {s}
                          {i === 0 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-6 pt-4 border-t border-[#E8E8E4] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#71717A] tabular-nums">
                      {project.area}
                    </span>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs uppercase tracking-wider font-medium text-[#1A1A1A] hover:text-[#9E814D] transition-colors flex items-center gap-1 group/btn"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA for prospective development */}
        <div className="mt-16 p-8 bg-[#F7F7F5] border border-[#E8E8E4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-medium text-[#1A1A1A] mb-1">
              Have an off-market parcel or development mandate?
            </h4>
            <p className="text-xs sm:text-sm text-[#71717A]">
              We advise private landholders, family offices, and developers on site viability and master planning.
            </p>
          </div>
          <button
            onClick={() => onInquireProject('General Portfolio Advisory')}
            className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium hover:bg-[#9E814D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Initiate Advisory Review</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquireProject={(name) => {
          onInquireProject(name);
        }}
      />
    </section>
  );
};
