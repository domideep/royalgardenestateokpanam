import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Maximize2,
  Check,
  ArrowUpRight,
  Sparkles,
  Layers,
  FileSearch
} from 'lucide-react';
import { BUNGALOW_MODELS, BungalowModel, BROCHURE_IMAGE } from '../data/portfolioData';

interface BungalowModelsSectionProps {
  onInquireModel: (modelName: string) => void;
  onOpenBrochure: () => void;
}

export const BungalowModelsSection: React.FC<BungalowModelsSectionProps> = ({
  onInquireModel,
  onOpenBrochure
}) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('2-bedroom-bungalow');
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplan' | 'specifications'>('overview');

  const selectedModel =
    BUNGALOW_MODELS.find((m) => m.id === selectedModelId) || BUNGALOW_MODELS[0];

  return (
    <section id="models" className="py-20 lg:py-28 bg-[#2C0D14] border-b border-[#4A1621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-[#180509] text-[#D4AF37] font-mono font-bold text-xs uppercase tracking-widest border border-[#D4AF37]/30">
                ROYAL GARDEN ESTATE OKPANAM
              </span>
              <span className="text-[#E5A91E] font-bold text-xs uppercase tracking-wider">
                Now Selling
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
              Luxury Bungalow Prototypes
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="px-4 py-2.5 bg-[#180509] border-2 border-[#D4AF37] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#180509] transition-all flex items-center gap-2 shadow-sm"
            >
              <FileSearch className="w-4 h-4 text-[#D4AF37]" />
              <span>View Full Master Brochure</span>
            </button>
          </div>
        </div>

        {/* Prototype Selector Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BUNGALOW_MODELS.map((model) => {
            const isSelected = model.id === selectedModelId;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`cursor-pointer p-6 sm:p-8 transition-all duration-300 border-2 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#180509] text-[#FFFFFF] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/40'
                    : 'bg-[#22090F] text-[#F8F2F4] border-[#4A1621] hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Top Badge matching brochure: Ruby Red Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 bg-[#9B111E] text-[#FFFFFF] font-display font-bold text-xs uppercase tracking-wider shadow-xs">
                    {model.bedrooms} BEDROOM BUNGALOW
                  </div>
                  <div className="px-3 py-1 bg-[#E5A91E] text-[#180509] font-mono font-bold text-xs uppercase tracking-wider shadow-xs">
                    Land Size: {model.landSize}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-2 text-[#FFFFFF]">
                  {model.name}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#D8BAC0]">
                  {model.tagline}
                </p>

                {/* Quick Spec Pills */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#4A1621] text-xs">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold text-[#FFFFFF]">{model.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold text-[#FFFFFF]">{model.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold font-mono text-[#E5A91E]">{model.landSize}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#4A1621]">
                  <span className="text-[11px] font-mono font-medium text-[#D4AF37]">
                    {model.priceNote}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${isSelected ? 'text-[#D4AF37]' : 'text-[#FFFFFF]'}`}>
                    <span>{isSelected ? 'Currently Viewing' : 'Select Unit'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Model Deep Dive: View Modes */}
        <div className="bg-[#22090F] border-2 border-[#4A1621] shadow-xl overflow-hidden">
          {/* Sub Navigation Tabs */}
          <div className="bg-[#180509] px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#D4AF37] font-mono uppercase font-bold tracking-wider">
                Viewing Specifications:
              </span>
              <span className="font-bold text-[#FFFFFF]">
                {selectedModel.name} ({selectedModel.landSize})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-[#D4AF37] text-[#180509]'
                    : 'text-[#E2CAD0] hover:text-[#FFFFFF]'
                }`}
              >
                Overview & Visuals
              </button>
              <button
                onClick={() => setActiveTab('floorplan')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'floorplan'
                    ? 'bg-[#D4AF37] text-[#180509]'
                    : 'text-[#E2CAD0] hover:text-[#FFFFFF]'
                }`}
              >
                Floor Plan Layout
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'specifications'
                    ? 'bg-[#D4AF37] text-[#180509]'
                    : 'text-[#E2CAD0] hover:text-[#FFFFFF]'
                }`}
              >
                Finishing Specs
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual side: Architectural brochure crop preview */}
                <div className="lg:col-span-7 space-y-4">
                  <div
                    onClick={onOpenBrochure}
                    className="relative aspect-[16/10] overflow-hidden bg-[#180509] border border-[#D4AF37]/40 cursor-pointer group shadow-md"
                  >
                    <img
                      src={selectedModel.image}
                      alt={selectedModel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180509] via-transparent to-transparent flex items-end p-6">
                      <div className="text-[#FFFFFF]">
                        <div className="px-2.5 py-1 bg-[#9B111E] text-white text-[11px] font-bold uppercase font-mono inline-block mb-1">
                          {selectedModel.name}
                        </div>
                        <p className="text-xs text-[#E2CAD0]">
                          Click to expand and view high-resolution master architectural sheet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details side */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E5A91E] font-bold block mb-1">
                      Land Parcel: {selectedModel.landSize}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#FFFFFF] mb-3">
                      Architectural Vision & Standard
                    </h3>
                    <p className="text-sm text-[#D8BAC0] leading-relaxed">
                      {selectedModel.description}
                    </p>
                  </div>

                  <div className="p-4 bg-[#2C0D14] border-l-4 border-[#D4AF37] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#FFFFFF] block font-mono">
                      Estate Inclusions:
                    </span>
                    <ul className="text-xs text-[#E2CAD0] space-y-1.5">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Connected to 24/7 Estate Security & Paved Road</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Dedicated Central Water Reticulation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Immediate Physical Allocation in Okpanam</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => onInquireModel(selectedModel.name)}
                    className="w-full py-3.5 px-6 bg-[#180509] hover:bg-[#9B111E] text-[#FFFFFF] border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Request Price Sheet & Allocation Form</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'floorplan' && (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#4A1621]">
                  <div>
                    <h4 className="font-display text-xl font-bold text-[#FFFFFF]">
                      Floor Plan – {selectedModel.bedrooms} Bedroom ({selectedModel.landSize})
                    </h4>
                    <p className="text-xs text-[#C4A4AC]">
                      Verified room zoning from front entrance porch through private sleeping chambers.
                    </p>
                  </div>
                  <button
                    onClick={onOpenBrochure}
                    className="px-4 py-2 bg-[#180509] border border-[#D4AF37] text-xs font-bold text-[#FFFFFF] hover:bg-[#D4AF37] hover:text-[#180509] transition-colors flex items-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Enlarge Brochure Floor Plan</span>
                  </button>
                </div>

                {/* Room Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedModel.floorPlanRooms.map((room, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#2C0D14] border border-[#4A1621] hover:border-[#D4AF37] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono text-[#D4AF37] uppercase font-bold">
                          Zone 0{i + 1}
                        </span>
                        {room.dimension && (
                          <span className="text-[11px] font-mono text-[#C4A4AC]">
                            {room.dimension}
                          </span>
                        )}
                      </div>
                      <h5 className="font-display text-sm font-bold text-[#FFFFFF]">
                        {room.name}
                      </h5>
                    </div>
                  ))}
                </div>

                {/* Architectural Floor Plan Preview Image */}
                <div
                  onClick={onOpenBrochure}
                  className="p-4 bg-[#2C0D14] border-2 border-dashed border-[#D4AF37]/50 rounded-sm text-center cursor-pointer hover:bg-[#341019] transition-colors"
                >
                  <img
                    src={BROCHURE_IMAGE}
                    alt="Floor plans from brochure"
                    className="max-h-80 mx-auto object-contain rounded-xs shadow-sm mb-3 border border-[#4A1621]"
                  />
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center justify-center gap-2">
                    <span>Click to inspect 2D Floor Plans in High Resolution</span>
                    <Maximize2 className="w-4 h-4 text-[#E5A91E]" />
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Interior Finishes */}
                <div className="p-6 bg-[#2C0D14] border border-[#4A1621]">
                  <h4 className="font-display text-base font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>Interior Craftsmanship & Fittings</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedModel.interiorHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#E2CAD0] leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exterior & Compound */}
                <div className="p-6 bg-[#2C0D14] border border-[#4A1621]">
                  <h4 className="font-display text-base font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D4AF37]" />
                    <span>Exterior Compound & Infrastructure</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedModel.exteriorHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#E2CAD0] leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#E5A91E] rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
